import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Shelly from './Shelly.jsx'
import ShellyBubble from './ShellyBubble.jsx'
import OrangeBar from './OrangeBar.jsx'
import { useApp } from '../../context/AppContext.jsx'
import { useWindowSize } from '../../hooks/useWindowSize.js'
import { shellyHealthStages } from '../../data/shellyHealthStages.js'

const BREAK_REMINDERS = [
  "Hey! You've been studying hard. Stretch your arms! 🌿",
  "Time for a quick water break — hydration helps your brain! 💧",
  "Look away from the screen for 20 seconds. Your eyes will thank you! 👀",
  "Take three deep breaths. Ready? In... out... in... out... 🌬️",
  "Great work so far! Stand up and do a quick stretch 🙆",
  "You're doing amazing! A short break now helps you remember more later 🧠",
]

const MOOD_MESSAGES = {
  idle:    "Hi there! I'm here whenever you need a hint 🐢",
  happy:   "You got one right! Keep going, you're doing great! 🌿",
  excited: "WOW, your orange bar is full! I'm so proud of you! 🍊🍊🍊",
  sleeping:"Zzz... wake me up when you need a hint 😴",
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n))
}

const STAGE_TOOLTIPS = [
  'Shelly is exhausted… she needs oranges 🍊',
  'Shelly is very tired. Feed her!',
  'Shelly is getting a little better 🍊',
  'Shelly is recovering nicely!',
  'Shelly is almost back to her best!',
  'Shelly is thriving! ✨🐢',
]

export default function ShellyWidget() {
  const { shellyMood, orangeCount } = useApp()
  const { isMobile } = useWindowSize()
  const [open, setOpen] = useState(false)
  const [reminderMsg, setReminderMsg] = useState(null)
  const [showReminder, setShowReminder] = useState(false)
  const [labelPulseKey, setLabelPulseKey] = useState(0)
  const reminderTimer = useRef(null)
  const prevCountRef = useRef(orangeCount)
  const prevStageRef = useRef(null)

  // Break reminder every 5 minutes
  useEffect(() => {
    reminderTimer.current = setInterval(() => {
      const msg = BREAK_REMINDERS[Math.floor(Math.random() * BREAK_REMINDERS.length)]
      setReminderMsg(msg)
      setShowReminder(true)
      setTimeout(() => setShowReminder(false), 8000)
    }, 5 * 60 * 1000)
    return () => clearInterval(reminderTimer.current)
  }, [])

  useEffect(() => {
    prevCountRef.current = orangeCount
  }, [orangeCount])

  const stageIndex = clamp(Math.floor(orangeCount ?? 0), 0, shellyHealthStages.length - 1)
  const stage = shellyHealthStages[stageIndex]

  useEffect(() => {
    const prev = prevStageRef.current
    if (prev === null) {
      prevStageRef.current = stageIndex
      return
    }
    if (prev !== stageIndex) {
      setLabelPulseKey(k => k + 1)
      prevStageRef.current = stageIndex
    }
  }, [stageIndex])

  const currentMessage = showReminder
    ? reminderMsg
    : (open ? MOOD_MESSAGES[shellyMood] ?? MOOD_MESSAGES.idle : null)

  const bubbleType = showReminder ? 'reminder' : (shellyMood === 'excited' ? 'praise' : 'default')
  const shellySize = isMobile ? 56 : 72
  const tooltipText = STAGE_TOOLTIPS[stageIndex] ?? STAGE_TOOLTIPS[0]
  const stageLabelColor =
    stageIndex <= 1 ? '#8b8b8b'
      : stageIndex <= 3 ? 'var(--color-green-mid)'
      : 'var(--color-green-deep)'

  return (
    <div
      className="shelly-widget"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      {/* aria-live region for break reminders — always in DOM for screen readers */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
        }}
      >
        {showReminder ? reminderMsg : ''}
      </div>

      {/* Speech bubble */}
      <AnimatePresence>
        {(open || showReminder) && currentMessage && (
          <div style={{ marginBottom: '0.5rem' }}>
            <ShellyBubble
              message={currentMessage}
              type={bubbleType}
              visible={open || showReminder}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Widget card */}
      <motion.div
        className="widget-card"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        title={tooltipText}
        style={{
          background: 'var(--color-beige-light)',
          border: '2px solid var(--color-green-pale)',
          borderRadius: '1.5rem',
          padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          boxShadow: '0 8px 32px rgba(61,107,79,0.15)',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(o => !o)}
        role="button"
        aria-label={open ? "Close Shelly's messages" : "Open Shelly's messages"}
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <Shelly mood={shellyMood} size={shellySize} />
        {!isMobile && <OrangeBar prevCount={prevCountRef.current} />}
        {isMobile && orangeCount > 0 && (
          <span style={{
            fontSize: '0.7rem',
            color: 'var(--color-green-mid)',
            fontFamily: "'DM Sans', sans-serif",
          }}>
            🍊×{orangeCount}
          </span>
        )}
        <motion.span
          key={labelPulseKey}
          initial={{ opacity: 0.85, scale: 0.98, backgroundColor: 'transparent' }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: ['rgba(125,184,138,0)', 'rgba(125,184,138,0.22)', 'rgba(125,184,138,0)'],
          }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{
            fontSize: '0.65rem',
            color: stageLabelColor,
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.02em',
            padding: '0.15rem 0.5rem',
            borderRadius: '999px',
          }}
          aria-label={`Shelly health stage: ${stage.label}`}
        >
          {stage.label}
        </motion.span>
        <span style={{
          fontSize: '0.65rem',
          color: 'var(--color-green-mid)',
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.02em',
        }}>
          {open ? 'close' : 'chat'}
        </span>
      </motion.div>
    </div>
  )
}
