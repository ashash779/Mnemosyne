// Ecosystem Food Web — network diagram with energy flow arrows
function Arrow({ x1, y1, x2, y2, id }) {
  // Slightly shorten so the arrowhead doesn't overlap the node circle
  const dx = x2 - x1, dy = y2 - y1
  const len = Math.sqrt(dx * dx + dy * dy)
  const r = 30
  const ex = x2 - (dx / len) * r
  const ey = y2 - (dy / len) * r
  const sx = x1 + (dx / len) * r
  const sy = y1 + (dy / len) * r
  return (
    <line
      x1={sx} y1={sy} x2={ex} y2={ey}
      stroke="#5c8f6e" strokeWidth="2.2"
      markerEnd={`url(#fw-arrow)`} opacity="0.7"
    />
  )
}

function Node({ cx, cy, r = 30, fill, stroke, emoji, label, labelDy = 46 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke || '#3d6b4f'} strokeWidth="2" />
      <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle" fontSize="18">{emoji}</text>
      <text x={cx} y={cy + labelDy} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#2d5a3a" fontFamily="DM Sans, sans-serif">{label}</text>
    </g>
  )
}

export default function FoodWebSVG() {
  // Node positions — arranged in a food-web pyramid layout
  const SUN        = { cx: 250, cy: 36  }
  const PRODUCER   = { cx: 250, cy: 130 }
  const HERB_L     = { cx: 110, cy: 226 }  // herbivore / primary consumer (left)
  const HERB_R     = { cx: 390, cy: 226 }  // another primary consumer (right)
  const SEC        = { cx: 180, cy: 316 }  // secondary consumer
  const TERT       = { cx: 310, cy: 316 }  // tertiary consumer / carnivore
  const DECOMP     = { cx: 430, cy: 340 }  // decomposer
  const CARNIVORE  = { cx: 248, cy: 400 }  // note: used for extra carnivore label layer

  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Ecosystem food web diagram" role="img">
      <defs>
        <marker id="fw-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#5c8f6e" opacity="0.8" />
        </marker>
      </defs>

      {/* ── Background zones ── */}
      <rect width="500" height="420" fill="#f2f8f0" />
      {/* Energy flow banner at top */}
      <rect x="0" y="0" width="500" height="72" fill="#fff8e4" opacity="0.7" rx="0" />
      <text x="250" y="10" textAnchor="middle" fontSize="8.5" fill="#a07820" fontFamily="DM Sans, sans-serif" fontWeight="600" dy="10">☀  Energy flows down from the sun through every trophic level</text>

      {/* ── Energy flow arrows (top-down) ── */}
      {/* Sun → Producer */}
      <Arrow x1={SUN.cx} y1={SUN.cy} x2={PRODUCER.cx} y2={PRODUCER.cy} />

      {/* Producer → Herbivores */}
      <Arrow x1={PRODUCER.cx} y1={PRODUCER.cy} x2={HERB_L.cx} y2={HERB_L.cy} />
      <Arrow x1={PRODUCER.cx} y1={PRODUCER.cy} x2={HERB_R.cx} y2={HERB_R.cy} />

      {/* Herbivores → Secondary consumers */}
      <Arrow x1={HERB_L.cx} y1={HERB_L.cy} x2={SEC.cx} y2={SEC.cy} />
      <Arrow x1={HERB_R.cx} y1={HERB_R.cy} x2={SEC.cx} y2={SEC.cy} />
      <Arrow x1={HERB_R.cx} y1={HERB_R.cy} x2={TERT.cx} y2={TERT.cy} />

      {/* Secondary → Tertiary */}
      <Arrow x1={SEC.cx} y1={SEC.cy} x2={TERT.cx} y2={TERT.cy} />

      {/* Everything → Decomposer (dashed lines from producers and consumers) */}
      <line x1={PRODUCER.cx + 28} y1={PRODUCER.cy + 14} x2={DECOMP.cx - 28} y2={DECOMP.cy - 10} stroke="#8ab89a" strokeWidth="1.6" strokeDasharray="5 3" opacity="0.55" markerEnd="url(#fw-arrow)" />
      <line x1={HERB_R.cx + 22} y1={HERB_R.cy + 10} x2={DECOMP.cx - 18} y2={DECOMP.cy - 8} stroke="#8ab89a" strokeWidth="1.6" strokeDasharray="5 3" opacity="0.55" markerEnd="url(#fw-arrow)" />
      <line x1={TERT.cx + 20} y1={TERT.cy + 10} x2={DECOMP.cx - 14} y2={DECOMP.cy - 8} stroke="#8ab89a" strokeWidth="1.6" strokeDasharray="5 3" opacity="0.55" markerEnd="url(#fw-arrow)" />

      {/* ── Nodes ── */}
      {/* Sun */}
      <Node cx={SUN.cx} cy={SUN.cy} r={26} fill="#fff0b0" stroke="#d4a020" emoji="☀️" label="Sun / Energy" labelDy={40} />

      {/* Producer */}
      <Node cx={PRODUCER.cx} cy={PRODUCER.cy} r={30} fill="#c8e8a0" stroke="#4a7c59" emoji="🌿" label="Producer" labelDy={46} />

      {/* Primary consumer / Herbivore left */}
      <Node cx={HERB_L.cx} cy={HERB_L.cy} r={30} fill="#d4ecb8" stroke="#4a7c59" emoji="🐇" label="Herbivore" labelDy={46} />

      {/* Primary consumer right */}
      <Node cx={HERB_R.cx} cy={HERB_R.cy} r={30} fill="#d4ecb8" stroke="#4a7c59" emoji="🦌" label="Primary consumer" labelDy={46} />

      {/* Secondary consumer */}
      <Node cx={SEC.cx} cy={SEC.cy} r={30} fill="#b5d5c5" stroke="#3d6b4f" emoji="🦊" label="Secondary consumer" labelDy={46} />

      {/* Tertiary consumer / Carnivore */}
      <Node cx={TERT.cx} cy={TERT.cy} r={30} fill="#7db88a" stroke="#3d6b4f" emoji="🦅" label="Carnivore / Tertiary" labelDy={46} />

      {/* Decomposer */}
      <Node cx={DECOMP.cx} cy={DECOMP.cy} r={28} fill="#e8d8b8" stroke="#8a6a40" emoji="🍄" label="Decomposer" labelDy={44} />

      {/* ── Trophic level labels (left margin) ── */}
      <text x="12" y={SUN.cy + 4}       fontSize="8.5" fill="#a07820" fontFamily="DM Sans, sans-serif" fontWeight="600">Energy</text>
      <text x="12" y={PRODUCER.cy + 4}  fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Trophic</text>
      <text x="12" y={PRODUCER.cy + 14} fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">level 1</text>
      <text x="12" y={HERB_L.cy + 4}    fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Level 2</text>
      <text x="12" y={SEC.cy + 4}       fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Level 3</text>
      <text x="12" y={TERT.cy + 14}     fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Level 4</text>
    </svg>
  )
}
