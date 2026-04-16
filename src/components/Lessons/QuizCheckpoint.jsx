import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shelly, ShellyBubble } from '../Shelly/index.js'
import { useApp } from '../../context/AppContext.jsx'

const praiseMessages = [
  "Nailed it! You're doing amazing 🌿",
  "That's right! Your brain is working hard today 🧠",
  "Correct! Shelly is proud of you 🐢",
  "Great job! Keep going, you've got this! ✨",
  "Perfect answer! Here's a orange for you 🍊",
]

function QuestionCard({ question, qIndex, totalQ, onCorrect }) {
  const { useHint, orangeCount, addOrange } = useApp()
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [shellyMsg, setShellyMsg] = useState(null)
  const [shellyType, setShellyType] = useState('default')
  const [shellyVisible, setShellyVisible] = useState(false)

  const isCorrect = submitted && selected === question.correctIndex
  const isWrong = submitted && selected !== question.correctIndex

  function handleSelect(i) {
    if (submitted && isCorrect) return
    setSelected(i)
    if (submitted) {
      // allow re-try after wrong answer
      setSubmitted(false)
      setShellyVisible(false)
    }
  }

  function handleSubmit() {
    if (selected === null) return
    setSubmitted(true)

    if (selected === question.correctIndex) {
      addOrange()
      const msg = praiseMessages[Math.floor(Math.random() * praiseMessages.length)]
      setShellyMsg(msg)
      setShellyType('praise')
      setShellyVisible(true)
      setTimeout(() => {
        setShellyVisible(false)
        setTimeout(() => onCorrect(), 600)
      }, 1800)
    } else {
      setShellyMsg("Not quite — have another look and try again! 💭")
      setShellyType('reminder')
      setShellyVisible(true)
    }
  }

  function handleHint() {
    const dispensed = useHint()
    if (dispensed) {
      setShellyMsg(`Hint: ${question.hint}`)
      setShellyType('hint')
    } else {
      setShellyMsg("I'm hungry! Answer more questions to feed me first 🍊")
      setShellyType('reminder')
    }
    setShellyVisible(true)
    setTimeout(() => setShellyVisible(false), 7000)
  }

  return (
    <div>
      {/* Progress indicator */}
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.8rem',
        color: 'var(--color-green-mid)',
        marginBottom: '0.75rem',
      }}>
        Question {qIndex + 1} of {totalQ}
      </div>

      <p style={{
        fontFamily: "'Fraunces', serif",
        fontSize: '1.05rem',
        color: 'var(--color-green-deep)',
        lineHeight: 1.5,
        marginBottom: '1rem',
        fontWeight: 700,
      }}>
        {question.question}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1rem' }}>
        {question.options.map((opt, i) => {
          const isSelected = selected === i
          let bg = 'var(--color-beige-light)'
          let border = 'var(--color-beige-dark)'
          let color = 'var(--color-green-deep)'

          if (submitted && i === question.correctIndex) {
            bg = '#d4f0de'; border = '#4a9c60'; color = '#2a5c35'
          } else if (submitted && isSelected && i !== question.correctIndex) {
            bg = '#fde8e8'; border = '#c04040'; color = '#8a2020'
          } else if (!submitted && isSelected) {
            bg = '#e8f5ee'; border = 'var(--color-green-mid)'; color = 'var(--color-green-deep)'
          }

          return (
            <motion.button
              key={i}
              whileTap={!submitted || !isCorrect ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(i)}
              disabled={isCorrect}
              style={{
                textAlign: 'left',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.9rem',
                backgroundColor: bg,
                border: `2px solid ${border}`,
                borderRadius: '0.85rem',
                padding: '0.75rem 1rem',
                cursor: isCorrect ? 'default' : 'pointer',
                color,
                lineHeight: 1.45,
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'background-color 0.15s, border-color 0.15s',
              }}
              aria-pressed={isSelected}
              aria-label={`Option ${String.fromCharCode(65 + i)}: ${opt}`}
            >
              <span style={{
                minWidth: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: isSelected || (submitted && i === question.correctIndex) ? border : 'var(--color-beige-dark)',
                color: (isSelected || (submitted && i === question.correctIndex)) ? 'white' : 'var(--color-green-mid)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                flexShrink: 0,
              }}>
                {submitted && i === question.correctIndex ? '✓' :
                 submitted && isSelected && i !== question.correctIndex ? '✗' :
                 String.fromCharCode(65 + i)}
              </span>
              {opt}
            </motion.button>
          )
        })}
      </div>

      {/* Shelly feedback */}
      <AnimatePresence>
        {shellyVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '0.75rem' }}
          >
            <Shelly mood={isCorrect ? 'happy' : 'idle'} size={48} />
            <ShellyBubble message={shellyMsg} type={shellyType} visible={shellyVisible} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {!isCorrect && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
            disabled={selected === null}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: '0.9rem',
              backgroundColor: selected !== null ? 'var(--color-green-mid)' : 'var(--color-beige-dark)',
              color: selected !== null ? 'white' : 'var(--color-green-mid)',
              padding: '0.6rem 1.4rem',
              borderRadius: '999px',
              border: 'none',
              cursor: selected !== null ? 'pointer' : 'default',
            }}
            aria-label="Submit answer"
          >
            {isWrong ? 'Try Again' : 'Check Answer'}
          </motion.button>
        )}

        <button
          onClick={handleHint}
          title={orangeCount === 0 ? 'Answer questions correctly to earn oranges!' : 'Ask Shelly for a hint'}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: '0.85rem',
            backgroundColor: 'transparent',
            color: orangeCount > 0 ? 'var(--color-green-mid)' : 'var(--color-beige-dark)',
            padding: '0.5rem 0.9rem',
            borderRadius: '999px',
            border: `1.5px solid ${orangeCount > 0 ? 'var(--color-green-pale)' : 'var(--color-beige-dark)'}`,
            cursor: 'pointer',
          }}
          aria-label={`Ask Shelly for a hint. You have ${orangeCount} oranges.`}
        >
          Ask Shelly 🍊
        </button>
      </div>
    </div>
  )
}

export default function QuizCheckpoint({ checkpoint, onComplete }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [done, setDone] = useState(false)

  function handleCorrect() {
    if (currentQ + 1 < checkpoint.questions.length) {
      setCurrentQ(q => q + 1)
    } else {
      setDone(true)
      setTimeout(() => onComplete(), 800)
    }
  }

  return (
    <div
      style={{
        margin: '2rem 0',
        backgroundColor: 'var(--color-beige-mid)',
        border: '2px solid var(--color-beige-dark)',
        borderRadius: '1.25rem',
        overflow: 'hidden',
      }}
      role="region"
      aria-label="Quiz checkpoint"
    >
      {/* Header */}
      <div style={{
        backgroundColor: 'var(--color-green-pale)',
        padding: '0.75rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderBottom: '1.5px solid var(--color-beige-dark)',
      }}>
        <span style={{ fontSize: '1.1rem' }}>🐢</span>
        <span style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '1rem',
          fontWeight: 700,
          color: 'var(--color-green-deep)',
        }}>
          Quick Check!
        </span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem',
          color: 'var(--color-green-mid)',
          marginLeft: 'auto',
        }}>
          Answer correctly to continue reading
        </span>
      </div>

      <div style={{ padding: '1.25rem' }}>
        {done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              textAlign: 'center',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Shelly mood="excited" size={80} />
            <p style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.05rem',
              color: 'var(--color-green-deep)',
              fontWeight: 700,
            }}>
              Great job! Keep reading 🌿
            </p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <QuestionCard
                question={checkpoint.questions[currentQ]}
                qIndex={currentQ}
                totalQ={checkpoint.questions.length}
                onCorrect={handleCorrect}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
