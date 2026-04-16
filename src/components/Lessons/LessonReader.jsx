import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QuizCheckpoint from './QuizCheckpoint.jsx'
import { Shelly } from '../Shelly/index.js'
import { useApp } from '../../context/AppContext.jsx'

// Confetti particle
function ConfettiDot({ color, x, delay, duration }) {
  return (
    <motion.div
      initial={{ y: -20, x, opacity: 1, rotate: 0 }}
      animate={{ y: '100vh', opacity: [1, 1, 0], rotate: 720 }}
      transition={{ duration, delay, ease: 'easeIn' }}
      style={{
        position: 'fixed',
        top: 0,
        left: x,
        width: 10,
        height: 10,
        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
        backgroundColor: color,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}

const confettiColors = ['#7db88a', '#b5d5c5', '#e8a87c', '#f4c842', '#d46060', '#5c9fad', '#e8dcc8']

function CelebrationScreen({ lessonTitle, onContinue }) {
  const confetti = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    color: confettiColors[i % confettiColors.length],
    x: `${(i / 48) * 100}vw`,
    delay: (i % 12) * 0.08,
    duration: 2.5 + (i % 5) * 0.3,
  }))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(253, 250, 244, 0.96)',
        zIndex: 500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
      role="dialog"
      aria-label="Lesson completed!"
      aria-live="assertive"
    >
      {confetti.map(c => <ConfettiDot key={c.id} {...c} />)}

      <Shelly mood="excited" size={180} />

      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
          color: 'var(--color-green-deep)',
          marginTop: '1.25rem',
          marginBottom: '0.5rem',
        }}
      >
        You finished it! 🎉
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1.1rem',
          color: 'var(--color-green-mid)',
          marginBottom: '0.5rem',
        }}
      >
        {lessonTitle}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.95rem',
          color: 'var(--color-green-mid)',
          marginBottom: '2rem',
        }}
      >
        +2 bonus oranges for completing the lesson! 🍊🍊
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onContinue}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '1rem',
          backgroundColor: 'var(--color-green-mid)',
          color: 'white',
          padding: '0.85rem 2rem',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(92,143,110,0.3)',
        }}
        aria-label="Back to all lessons"
      >
        Back to Lessons →
      </motion.button>
    </motion.div>
  )
}

function SectionBlock({ section }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{ marginBottom: '0.5rem' }}
    >
      <h2 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: '1.3rem',
        color: 'var(--color-green-deep)',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '2px solid var(--color-green-pale)',
      }}>
        {section.title}
      </h2>
      {section.paragraphs.map((para, i) => (
        <p
          key={i}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#2a4a38',
            lineHeight: 1.85,
            marginBottom: i < section.paragraphs.length - 1 ? '1rem' : '1.5rem',
          }}
        >
          {para}
        </p>
      ))}
    </motion.div>
  )
}

export default function LessonReader({ lesson, onBack }) {
  const { completeLesson, addOrange } = useApp()
  // Track which checkpoints have been completed by their idx
  const [completedCheckpoints, setCompletedCheckpoints] = useState(new Set())
  const [showCelebration, setShowCelebration] = useState(false)
  const celebrationFiredRef = useRef(false)

  // Determine how far into the flow we can render
  // Walk the flow; stop at the first incomplete checkpoint (show it but block past it)
  let blockAfterFlowIndex = lesson.flow.length // show everything by default
  for (let i = 0; i < lesson.flow.length; i++) {
    const item = lesson.flow[i]
    if (item.type === 'checkpoint' && !completedCheckpoints.has(item.idx)) {
      blockAfterFlowIndex = i // this is the last item visible (inclusive)
      break
    }
  }

  const visibleFlow = lesson.flow.slice(0, blockAfterFlowIndex + 1)
  const allDone = completedCheckpoints.size === lesson.checkpoints.length

  function handleCheckpointComplete(cpIdx) {
    setCompletedCheckpoints(prev => {
      const next = new Set(prev)
      next.add(cpIdx)
      return next
    })
  }

  function handleLessonComplete() {
    if (celebrationFiredRef.current) return
    celebrationFiredRef.current = true
    completeLesson(lesson.id)
    addOrange()
    addOrange()
    setShowCelebration(true)
  }

  // Auto-trigger celebration when all checkpoints done
  useEffect(() => {
    if (allDone && !celebrationFiredRef.current) {
      setTimeout(() => handleLessonComplete(), 400)
    }
  }, [allDone]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '1.5rem 1.5rem 4rem' }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem',
          color: 'var(--color-green-mid)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.25rem 0',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}
        aria-label="Back to lesson list"
      >
        ← Back to Lessons
      </button>

      {/* Lesson header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{lesson.emoji}</div>
        <h1 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: 'var(--color-green-deep)',
          lineHeight: 1.2,
          marginBottom: '0.5rem',
        }}>
          {lesson.title}
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.85rem',
          color: 'var(--color-green-mid)',
        }}>
          {lesson.readTime} read
        </p>
      </div>

      {/* Render visible flow items */}
      {visibleFlow.map((item, flowIndex) => {
        if (item.type === 'section') {
          return (
            <SectionBlock key={`section-${item.idx}`} section={lesson.sections[item.idx]} />
          )
        }

        if (item.type === 'checkpoint') {
          const cp = lesson.checkpoints[item.idx]
          const isDone = completedCheckpoints.has(item.idx)

          return (
            <div key={`cp-${item.idx}`}>
              {isDone ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    margin: '1.5rem 0',
                    padding: '0.6rem 1.25rem',
                    backgroundColor: '#d4f0de',
                    border: '1.5px solid #4a9c60',
                    borderRadius: '999px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.85rem',
                    color: '#2a5c35',
                  }}
                >
                  ✓ Checkpoint {item.idx + 1} complete
                </motion.div>
              ) : (
                <QuizCheckpoint
                  checkpoint={cp}
                  onComplete={() => handleCheckpointComplete(item.idx)}
                />
              )}
            </div>
          )
        }

        return null
      })}

      {/* Celebration overlay */}
      <AnimatePresence>
        {showCelebration && (
          <CelebrationScreen
            lessonTitle={lesson.title}
            onContinue={onBack}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
