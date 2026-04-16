import { useId, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'
import { shellyHealthStages } from '../../data/shellyHealthStages.js'
import { useApp } from '../../context/AppContext.jsx'

/*
 * STEP 1 — SVG AUDIT (Shelly visual inventory)
 *
 * Elements may use SVG `id` where needed (e.g. `#eye-bags`, filter ids). Items below list
 * the tag type and role for the rest of the illustration.
 *
 * WRAPPER (outside SVG)
 * - motion.div — floating bob wrapper; sets display size and aria-label for the whole illustration.
 *
 * ROOT
 * - svg — main illustration; viewBox="0 0 150 120", role="img".
 *
 * BODY / SHELL / LIMBS (draw order in file)
 * - ellipse — ground shadow under Shelly (cx ≈72, cy ≈117).
 * - g — body scale group (limbs, shell, head, face); scaled by `stage.bodyScale`.
 * - ellipse ×2 — back/rear flippers (left side, rotated).
 * - ellipse ×2 — front flippers (right side, near head, rotated).
 * - ellipse — main body / belly (cx 72, cy 74).
 * - ellipse — shell base / outer dome (cx 66, cy 62).
 * - ellipse — shell inner lighter plate (same centre, smaller radii, reduced opacity).
 * - path ×4 — shell segment / seam lines (vertical spine, two spokes, upper arc).
 * - ellipse — shell gloss highlight (white, rotated).
 * - ellipse — tail (left, rotated).
 * - ellipse — neck connector (cx 105, cy 70).
 * - circle — head (cx 120, cy 69).
 * - circle — head sheen highlight (white, partial opacity).
 * - g#eye-bags — under-eye shadow arcs (`EyeBags`); path ×2 (muted #a89bb0), optional blur filter in defs.
 *
 * FACE — Eyes sub-component `<Eyes mood stage />` (tag mix depends on mood)
 * - sleeping: path ×2 (closed-eye arcs), circle ×2 (blush).
 * - excited: ellipse ×2 (pupils), circle ×2 (white glints), circle ×2 (blush).
 * - happy: path ×2 (squint arcs), circle ×2 (blush), text ×2 (star characters ★ ✦).
 * - idle: ellipse ×2 (pupils; vertical radius × `stage.eyeOpenness`), circle ×2 (glints), circle ×2 (blush).
 *
 * FACE — Mouth sub-component `<HealthMouth mood mouthType />`
 * - path — smile / mouth from `mouthType` when mood is idle-like; mood overrides for sleeping / excited / happy.
 *
 * OPTIONAL OVERLAY
 * - motion.g — "ZZZ" sleep indicators; contains text ×3 ("z", "z", "Z") when mood === 'sleeping`.
 *
 * PALETTE
 * - const C { … } — fixed fallbacks + eye/blush/smile (health drives skin/shell via `stage`).
 *
 * ---
 * orangeCount: `useApp()` provides `orangeCount` (0…MAX_ORANGES). Pass `orangeCountOverride` to force a stage for testing.
 */

// ── Colour helpers (health-driven body/shell) ─────────────────────────────────
function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n))
}

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  if (h.length !== 6) return null
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  if ([r, g, b].some(x => Number.isNaN(x))) return null
  return [r, g, b]
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b].map(c => clamp(Math.round(c), 0, 255).toString(16).padStart(2, '0')).join('')}`
}

function darkenHex(hex, factor) {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  return rgbToHex(rgb[0] * factor, rgb[1] * factor, rgb[2] * factor)
}

function mixHex(a, b, t) {
  const A = hexToRgb(a)
  const B = hexToRgb(b)
  if (!A || !B) return a
  return rgbToHex(
    A[0] + (B[0] - A[0]) * t,
    A[1] + (B[1] - A[1]) * t,
    A[2] + (B[2] - A[2]) * t,
  )
}

function lightenHex(hex, amount) {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  const lift = c => c + (255 - c) * amount
  return rgbToHex(lift(rgb[0]), lift(rgb[1]), lift(rgb[2]))
}

/**
 * @param {string} shellHex
 * @param {'faded' | 'normal' | 'vibrant'} pattern
 */
function getShellLineStyle(shellHex, pattern) {
  const seg = darkenHex(shellHex, 0.68)
  if (pattern === 'faded') {
    return {
      stroke: mixHex(shellHex, seg, 0.55),
      lines: [
        { sw: 1.25, op: 0.24 },
        { sw: 1.15, op: 0.22 },
        { sw: 1.15, op: 0.22 },
        { sw: 1.05, op: 0.19 },
      ],
    }
  }
  if (pattern === 'normal') {
    return {
      stroke: seg,
      lines: [
        { sw: 1.4, op: 0.75 },
        { sw: 1.3, op: 0.7 },
        { sw: 1.3, op: 0.7 },
        { sw: 1.2, op: 0.6 },
      ],
    }
  }
  const dark = darkenHex(shellHex, 0.52)
  return {
    stroke: dark,
    lines: [
      { sw: 1.75, op: 0.95 },
      { sw: 1.65, op: 0.9 },
      { sw: 1.65, op: 0.9 },
      { sw: 1.5, op: 0.84 },
    ],
  }
}

const COLOR_TWEEN = { duration: 0.6, ease: 'easeInOut' }
const STAGE_BUMP_T = { duration: 0.4, times: [0, 0.45, 1], ease: 'easeOut' }

// ── Fixed accents (not driven by health palette) ────────────────────────────
const C = {
  eye:   '#2c2c3c',
  blush: '#ffb3c1',
  smile: '#3a5a3a',
  shadow: '#4a6a3a',
}

const EYE_ORIGIN = { x: 118.5, y: 67 }

function Eyes({ mood, stage }) {
  const { eyeSize, eyeOpenness, cheekOpacity } = stage
  const blush = (o) => (cheekOpacity <= 0 ? null : (
    <motion.circle
      fill={C.blush}
      animate={{ opacity: cheekOpacity }}
      transition={COLOR_TWEEN}
      {...o}
    />
  ))

  const scaled = children => (
    <g transform={`translate(${EYE_ORIGIN.x} ${EYE_ORIGIN.y}) scale(${eyeSize}) translate(${-EYE_ORIGIN.x} ${-EYE_ORIGIN.y})`}>
      {children}
    </g>
  )

  if (mood === 'sleeping') {
    return scaled((
      <>
        <path d="M109 68 Q112 63 115 68" stroke={C.smile} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M122 68 Q125 63 128 68" stroke={C.smile} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {blush({ cx: '107', cy: '74', r: '5.5' })}
        {blush({ cx: '131', cy: '74', r: '5.5' })}
      </>
    ))
  }

  if (mood === 'excited') {
    const ry = 5.5 * eyeOpenness
    return scaled((
      <>
        <motion.ellipse cx="112" cy="67" rx="5.5" ry={ry} fill={C.eye} animate={{ ry }} transition={COLOR_TWEEN} />
        <motion.ellipse cx="125" cy="67" rx="5.5" ry={ry} fill={C.eye} animate={{ ry }} transition={COLOR_TWEEN} />
        <circle cx="113.5" cy="65.5" r="1.6" fill="white" />
        <circle cx="126.5" cy="65.5" r="1.6" fill="white" />
        {blush({ cx: '106', cy: '74', r: '5.5' })}
        {blush({ cx: '131', cy: '74', r: '5.5' })}
      </>
    ))
  }

  if (mood === 'happy') {
    return scaled((
      <>
        <path d="M109 69 Q112 63 115 69" stroke={C.eye} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M122 69 Q125 63 128 69" stroke={C.eye} strokeWidth="2.2" fill="none" strokeLinecap="round" />
        {blush({ cx: '107', cy: '74', r: '5.5' })}
        {blush({ cx: '131', cy: '74', r: '5.5' })}
        {cheekOpacity > 0.35 && (
          <>
            <text x="100" y="60" fontSize="7" fill="#f5d040" fontFamily="sans-serif">★</text>
            <text x="132" y="59" fontSize="6" fill="#f5d040" fontFamily="sans-serif">✦</text>
          </>
        )}
      </>
    ))
  }

  const ry = 4.5 * eyeOpenness
  return scaled((
    <>
      <motion.ellipse cx="112" cy="67" rx="4.5" ry={ry} fill={C.eye} animate={{ ry }} transition={COLOR_TWEEN} />
      <motion.ellipse cx="125" cy="67" rx="4.5" ry={ry} fill={C.eye} animate={{ ry }} transition={COLOR_TWEEN} />
      <circle cx="113.5" cy="65.5" r="1.4" fill="white" />
      <circle cx="126.5" cy="65.5" r="1.4" fill="white" />
      {blush({ cx: '107', cy: '73', r: '5.5' })}
      {blush({ cx: '131', cy: '73', r: '5.5' })}
    </>
  ))
}

function HealthMouth({ mood, mouthType }) {
  const stroke = C.smile
  if (mood === 'sleeping') {
    return <path d="M114 77 Q120 80 126 77" stroke={stroke} strokeWidth="1.4" fill="none" strokeLinecap="round" />
  }
  if (mood === 'excited') {
    return (
      <path
        d="M111 77 Q120 87 129 77"
        stroke={stroke}
        strokeWidth="1.8"
        fill={C.blush}
        fillOpacity="0.25"
        strokeLinecap="round"
      />
    )
  }
  if (mood === 'happy') {
    return <path d="M113 76 Q120 83 127 76" stroke={stroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
  }
  switch (mouthType) {
    case 'frown':
      return <path d="M114 79 Q120 76 126 79" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    case 'weak_smile':
      return <path d="M114 77.5 Q120 79.5 126 77.5" stroke={stroke} strokeWidth="1.35" fill="none" strokeLinecap="round" />
    case 'neutral':
      return <path d="M113 78 L127 78" stroke={stroke} strokeWidth="1.35" fill="none" strokeLinecap="round" />
    case 'small_smile':
      return <path d="M114 77 Q120 81 126 77" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    case 'smile':
      return <path d="M114 76 Q120 82 126 76" stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round" />
    case 'big_smile':
      return <path d="M112 76 Q120 85 128 76" stroke={stroke} strokeWidth="1.85" fill="none" strokeLinecap="round" />
    default:
      return <path d="M114 76 Q120 82 126 76" stroke={stroke} strokeWidth="1.6" fill="none" strokeLinecap="round" />
  }
}

const EYE_BAG_COLOR = '#a89bb0'

function EyeBagPaths({ blurFilterId }) {
  return (
    <g fill="none" stroke={EYE_BAG_COLOR} strokeLinecap="round" filter={`url(#${blurFilterId})`} aria-hidden="true">
      <path d="M 106.5 71.4 Q 112 77.3 117.5 71.4" strokeWidth="2.35" />
      <path d="M 119.5 71.4 Q 125 77.3 130.5 71.4" strokeWidth="2.35" />
    </g>
  )
}

// Step 5: thrive-only sparkles (stage 5). Path centred at origin; parent `<g transform="translate(...)">` places each star.
const SPARKLE_PATH = 'M 0,-3.8 L 0.95,-0.95 L 3.8,0 L 0.95,0.95 L 0,3.8 L -0.95,0.95 L -3.8,0 L -0.95,-0.95 Z'

const SPARKLE_SPOTS = [
  { x: 120, y: 43, fill: '#fffbe6', dur: 1.55 },
  { x: 46, y: 41, fill: '#ffd966', dur: 1.85 },
  { x: 84, y: 35, fill: '#fffbe6', dur: 1.7 },
  { x: 109, y: 51, fill: '#ffd966', dur: 1.65 },
  { x: 94, y: 61, fill: '#fffbe6', dur: 1.75 },
]

function ShellyThriveSparkles() {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.55 }}
      transition={{ duration: 0.38, ease: 'easeOut' }}
      aria-hidden="true"
    >
      {SPARKLE_SPOTS.map((s, i) => (
        <g key={i} transform={`translate(${s.x} ${s.y})`}>
          <motion.g
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.62, 1.18, 0.62],
            }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            <path d={SPARKLE_PATH} fill={s.fill} />
          </motion.g>
        </g>
      ))}
    </motion.g>
  )
}

const BODY_ORIGIN = { x: 72, y: 76 }

export default function Shelly({ mood = 'idle', size = 150, orangeCountOverride }) {
  const eyeBagBlurId = `shelly-eye-bag-blur-${useId().replace(/:/g, '')}`
  const bumpControls = useAnimationControls()
  const prevOrangeRef = useRef(null)
  const { orangeCount } = useApp()
  const n = orangeCountOverride !== undefined ? orangeCountOverride : orangeCount
  const stageIndex = clamp(Math.floor(n), 0, shellyHealthStages.length - 1)
  const stage = shellyHealthStages[stageIndex]

  const body = stage.bodyColor
  const skinDark = darkenHex(stage.bodyColor, 0.9)
  const neck = darkenHex(stage.bodyColor, 0.94)
  const shell = stage.shellColor
  const shellInner = lightenHex(stage.shellColor, 0.28)
  const shellStyle = getShellLineStyle(stage.shellColor, stage.shellPattern)
  const [lineA, lineB, lineC, lineD] = shellStyle.lines

  const bagOpacity = stage.hasBags ? stage.bagOpacity : 0

  useEffect(() => {
    const prev = prevOrangeRef.current
    if (prev === null) {
      prevOrangeRef.current = n
      return
    }
    if (prev !== n) {
      if (n > prev) {
        bumpControls.start({ scale: [1, 1.1, 1], transition: STAGE_BUMP_T })
      } else if (n < prev) {
        bumpControls.start({ scale: [1, 0.93, 1], transition: STAGE_BUMP_T })
      }
      prevOrangeRef.current = n
    }
  }, [n, bumpControls])

  const h = Math.round(size * 0.8)

  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      style={{ display: 'inline-block', width: size, height: h }}
      aria-label={`Shelly the turtle, feeling ${mood}`}
    >
      <svg
        viewBox="0 0 150 120"
        width={size}
        height={h}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="false"
        overflow="visible"
      >
        <defs>
          <filter id={eyeBagBlurId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.55" />
          </filter>
        </defs>

        <ellipse cx="72" cy="117" rx="40" ry="5" fill={C.shadow} opacity="0.13" />

        <g transform={`translate(${BODY_ORIGIN.x} ${BODY_ORIGIN.y}) scale(${stage.bodyScale}) translate(${-BODY_ORIGIN.x} ${-BODY_ORIGIN.y})`}>
          <g transform={`translate(${BODY_ORIGIN.x} ${BODY_ORIGIN.y})`}>
            <motion.g animate={bumpControls} initial={{ scale: 1 }}>
              <g transform={`translate(${-BODY_ORIGIN.x} ${-BODY_ORIGIN.y})`}>
                <motion.ellipse
                  cx="30"
                  cy="52"
                  rx="19"
                  ry="10"
                  fill={skinDark}
                  transform="rotate(-22 30 52)"
                  animate={{ fill: skinDark }}
                  transition={COLOR_TWEEN}
                />
                <motion.ellipse
                  cx="30"
                  cy="94"
                  rx="19"
                  ry="10"
                  fill={skinDark}
                  transform="rotate( 22 30 94)"
                  animate={{ fill: skinDark }}
                  transition={COLOR_TWEEN}
                />

                <motion.ellipse
                  cx="101"
                  cy="46"
                  rx="17"
                  ry="9"
                  fill={skinDark}
                  transform="rotate(-35 101 46)"
                  animate={{ fill: skinDark }}
                  transition={COLOR_TWEEN}
                />
                <motion.ellipse
                  cx="101"
                  cy="97"
                  rx="17"
                  ry="9"
                  fill={skinDark}
                  transform="rotate( 35 101 97)"
                  animate={{ fill: skinDark }}
                  transition={COLOR_TWEEN}
                />

                <motion.ellipse
                  cx="72"
                  cy="74"
                  rx="44"
                  ry="38"
                  fill={body}
                  animate={{ fill: body }}
                  transition={COLOR_TWEEN}
                />

                <motion.ellipse
                  cx="66"
                  cy="62"
                  rx="33"
                  ry="23"
                  fill={shell}
                  animate={{ fill: shell }}
                  transition={COLOR_TWEEN}
                />
                <motion.ellipse
                  cx="66"
                  cy="62"
                  rx="22"
                  ry="15"
                  fill={shellInner}
                  opacity="0.45"
                  animate={{ fill: shellInner }}
                  transition={COLOR_TWEEN}
                />

                <motion.path
                  d="M66 40 Q65 62 62 82"
                  stroke={shellStyle.stroke}
                  strokeWidth={lineA.sw}
                  fill="none"
                  strokeLinecap="round"
                  animate={{ stroke: shellStyle.stroke, opacity: lineA.op, strokeWidth: lineA.sw }}
                  transition={COLOR_TWEEN}
                />
                <motion.path
                  d="M38 56 Q50 62 62 82"
                  stroke={shellStyle.stroke}
                  strokeWidth={lineB.sw}
                  fill="none"
                  strokeLinecap="round"
                  animate={{ stroke: shellStyle.stroke, opacity: lineB.op, strokeWidth: lineB.sw }}
                  transition={COLOR_TWEEN}
                />
                <motion.path
                  d="M92 56 Q79 62 70 82"
                  stroke={shellStyle.stroke}
                  strokeWidth={lineC.sw}
                  fill="none"
                  strokeLinecap="round"
                  animate={{ stroke: shellStyle.stroke, opacity: lineC.op, strokeWidth: lineC.sw }}
                  transition={COLOR_TWEEN}
                />
                <motion.path
                  d="M48 48 Q66 40 84 48"
                  stroke={shellStyle.stroke}
                  strokeWidth={lineD.sw}
                  fill="none"
                  strokeLinecap="round"
                  animate={{ stroke: shellStyle.stroke, opacity: lineD.op, strokeWidth: lineD.sw }}
                  transition={COLOR_TWEEN}
                />

                <ellipse cx="53" cy="51" rx="9" ry="5" fill="white" opacity="0.18" transform="rotate(-22 53 51)" />

                <motion.ellipse
                  cx="22"
                  cy="72"
                  rx="13"
                  ry="7"
                  fill={skinDark}
                  transform="rotate(20 22 72)"
                  animate={{ fill: skinDark }}
                  transition={COLOR_TWEEN}
                />

                <motion.ellipse
                  cx="105"
                  cy="70"
                  rx="13"
                  ry="9"
                  fill={neck}
                  animate={{ fill: neck }}
                  transition={COLOR_TWEEN}
                />
                <motion.circle cx="120" cy="69" r="20" fill={body} animate={{ fill: body }} transition={COLOR_TWEEN} />
                <circle cx="113" cy="62" r="6" fill="white" opacity="0.14" />

                <AnimatePresence>
                  {stage.hasBags ? (
                    <motion.g
                      key="eye-bags"
                      id="eye-bags"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: bagOpacity }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <EyeBagPaths blurFilterId={eyeBagBlurId} />
                    </motion.g>
                  ) : null}
                </AnimatePresence>

                <Eyes mood={mood} stage={stage} />
                <HealthMouth mood={mood} mouthType={stage.mouthType} />

                {mood === 'sleeping' && (
                  <motion.g
                    animate={{ y: [-2, -9, -2], opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <motion.text
                      x="136"
                      y="57"
                      fontSize="9"
                      fill={shell}
                      fontFamily="sans-serif"
                      fontWeight="700"
                      animate={{ fill: shell }}
                      transition={COLOR_TWEEN}
                    >
                      z
                    </motion.text>
                    <motion.text
                      x="143"
                      y="48"
                      fontSize="11"
                      fill={shell}
                      fontFamily="sans-serif"
                      fontWeight="700"
                      animate={{ fill: shell }}
                      transition={COLOR_TWEEN}
                    >
                      z
                    </motion.text>
                    <motion.text
                      x="150"
                      y="38"
                      fontSize="13"
                      fill={shell}
                      fontFamily="sans-serif"
                      fontWeight="700"
                      animate={{ fill: shell }}
                      transition={COLOR_TWEEN}
                    >
                      Z
                    </motion.text>
                  </motion.g>
                )}

                <AnimatePresence>
                  {stage.sparkles ? <ShellyThriveSparkles key="thrive-sparkles" /> : null}
                </AnimatePresence>
              </g>
            </motion.g>
          </g>
        </g>
      </svg>
    </motion.div>
  )
}
