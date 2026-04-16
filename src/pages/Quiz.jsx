import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/UI/Navbar.jsx'
import Footer from '../components/UI/Footer.jsx'
import { Shelly, ShellyBubble } from '../components/Shelly/index.js'
import { useApp } from '../context/AppContext.jsx'
import { quizQuestions } from '../data/quizData.js'
import { learnerProfiles } from '../data/learnerProfiles.js'

// ── Intro Screen ────────────────────────────────────────────────────────────
function IntroScreen({ onStart }) {
  return (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
      style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto', padding: '3rem 1.5rem' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', marginBottom: '2.5rem' }}>
        <ShellyBubble
          message="Let's figure out how YOUR brain works best! This quiz takes about 3 minutes 🧠"
          type="reminder"
          visible
        />
        <Shelly mood="happy" size={140} />
      </div>

      <h1 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
        color: 'var(--color-green-deep)',
        marginBottom: '1rem',
        lineHeight: 1.2,
      }}>
        Find Your Learning Style
      </h1>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        color: 'var(--color-green-mid)',
        fontSize: '1rem',
        lineHeight: 1.7,
        marginBottom: '2rem',
        maxWidth: '440px',
        margin: '0 auto 2rem',
      }}>
        Answer 10 quick questions to discover whether you're a <strong>Visual</strong>,{' '}
        <strong>Auditory</strong>, <strong>Reading/Writing</strong>, or{' '}
        <strong>Kinesthetic</strong> learner — then get personalised biology study tips!
      </p>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '1.05rem',
          backgroundColor: 'var(--color-green-mid)',
          color: 'white',
          padding: '0.85rem 2.25rem',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(92,143,110,0.35)',
        }}
        aria-label="Start the learner quiz"
      >
        Start Quiz →
      </motion.button>
    </motion.div>
  )
}

// ── Question Screen ──────────────────────────────────────────────────────────
const slideVariants = {
  enter: dir => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: dir => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0 }),
}

function QuestionScreen({ question, index, total, selected, onSelect, onNext, direction }) {
  return (
    <motion.div
      key="question-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ maxWidth: '640px', margin: '0 auto', padding: '2rem 1.5rem' }}
    >
      {/* Progress bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',
        }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: 'var(--color-green-mid)' }}>
            Question {index + 1} of {total}
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: 'var(--color-green-pale)' }}>
            {Math.round(((index + 1) / total) * 100)}%
          </span>
        </div>
        <div style={{
          height: '8px',
          backgroundColor: 'var(--color-beige-dark)',
          borderRadius: '999px',
          overflow: 'hidden',
        }}>
          <motion.div
            animate={{ width: `${((index + 1) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              height: '100%',
              backgroundColor: 'var(--color-green-mid)',
              borderRadius: '999px',
            }}
          />
        </div>
      </div>

      {/* Question slide */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={question.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <h2 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)',
            color: 'var(--color-green-deep)',
            marginBottom: '1.75rem',
            lineHeight: 1.4,
          }}>
            {question.question}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {question.options.map((opt, i) => {
              const isSelected = selected === i
              return (
                <motion.button
                  key={i}
                  whileHover={{ backgroundColor: isSelected ? '#5c8f6e' : '#e8f5ee' }}
                  whileTap={{ scale: 0.98 }}
                  animate={isSelected ? { scale: [1, 1.03, 1] } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => onSelect(i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.98rem',
                    fontWeight: isSelected ? 500 : 400,
                    color: isSelected ? 'white' : 'var(--color-green-deep)',
                    backgroundColor: isSelected ? 'var(--color-green-mid)' : 'var(--color-beige-light)',
                    border: `2px solid ${isSelected ? 'var(--color-green-mid)' : 'var(--color-beige-dark)'}`,
                    borderRadius: '1rem',
                    padding: '1rem 1.25rem',
                    cursor: 'pointer',
                    lineHeight: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'border-color 0.15s, background-color 0.15s, color 0.15s',
                  }}
                  aria-pressed={isSelected}
                  aria-label={`Option ${String.fromCharCode(65 + i)}: ${opt.text}`}
                >
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : 'var(--color-beige-dark)',
                    color: isSelected ? 'white' : 'var(--color-green-mid)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt.text}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Next button */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'flex-end' }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onNext}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: '0.98rem',
                backgroundColor: 'var(--color-green-deep)',
                color: 'white',
                padding: '0.75rem 1.75rem',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(61,107,79,0.25)',
              }}
              aria-label={index + 1 < total ? 'Next question' : 'See your results'}
            >
              {index + 1 < total ? 'Next →' : 'See My Results →'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Results Screen ───────────────────────────────────────────────────────────
function TechniqueCard({ text, index }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.3 }}
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.92rem',
        color: 'var(--color-green-deep)',
        backgroundColor: 'var(--color-beige-light)',
        border: '1.5px solid var(--color-beige-dark)',
        borderRadius: '0.85rem',
        padding: '0.75rem 1rem',
        lineHeight: 1.55,
        listStyle: 'none',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.6rem',
      }}
    >
      <span style={{ color: 'var(--color-green-mid)', flexShrink: 0, marginTop: '1px' }}>🌿</span>
      {text}
    </motion.li>
  )
}

function ResultsScreen({ profile, onRetake }) {
  const { addOrange } = useApp()
  const awardedRef = useRef(false)

  useEffect(() => {
    if (!awardedRef.current) {
      awardedRef.current = true
      addOrange()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      key="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ maxWidth: '680px', margin: '0 auto', padding: '2.5rem 1.5rem 3rem' }}
    >
      {/* Shelly celebration */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <ShellyBubble
          message={`You're a ${profile.name} — that's amazing! Here's your orange! 🍊`}
          type="praise"
          visible
        />
        <Shelly mood="excited" size={150} />
      </div>

      {/* Result card */}
      <div style={{
        backgroundColor: profile.color,
        border: `2px solid ${profile.border}`,
        borderRadius: '1.75rem',
        padding: '2rem 1.75rem',
        boxShadow: '0 8px 32px rgba(61,107,79,0.1)',
        marginBottom: '2rem',
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{profile.emoji}</div>
        <h2 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          color: 'var(--color-green-deep)',
          marginBottom: '0.75rem',
        }}>
          You're a {profile.name}!
        </h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          color: 'var(--color-green-mid)',
          lineHeight: 1.7,
        }}>
          {profile.description}
        </p>
      </div>

      {/* Study techniques */}
      <h3 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: '1.25rem',
        color: 'var(--color-green-deep)',
        marginBottom: '1rem',
      }}>
        Your personalised biology study techniques:
      </h3>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0, marginBottom: '2rem' }}>
        {profile.techniques.map((t, i) => (
          <TechniqueCard key={i} text={t} index={i} />
        ))}
      </ul>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/lessons"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: '1rem',
            backgroundColor: 'var(--color-green-mid)',
            color: 'white',
            padding: '0.8rem 1.75rem',
            borderRadius: '999px',
            textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(92,143,110,0.3)',
          }}
        >
          Go explore lessons! →
        </Link>
        <button
          onClick={onRetake}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: '1rem',
            backgroundColor: 'transparent',
            color: 'var(--color-green-deep)',
            padding: '0.8rem 1.75rem',
            borderRadius: '999px',
            border: '2px solid var(--color-green-pale)',
            cursor: 'pointer',
          }}
          aria-label="Retake the quiz"
        >
          Retake Quiz
        </button>
      </div>
    </motion.div>
  )
}

// ── Calculate result ─────────────────────────────────────────────────────────
function calculateResult(answers) {
  const scores = { visual: 0, auditory: 0, reading: 0, kinesthetic: 0 }
  answers.forEach(({ type }) => {
    if (type in scores) scores[type]++
  })
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
}

// ── Main Quiz page ───────────────────────────────────────────────────────────
export default function Quiz() {
  const { setLearnerType } = useApp()
  const [screen, setScreen] = useState('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [direction, setDirection] = useState(1)
  const [resultType, setResultType] = useState(null)

  function handleStart() {
    setScreen('quiz')
    setCurrentIndex(0)
    setSelected(null)
    setAnswers([])
    setDirection(1)
  }

  function handleSelect(optionIndex) {
    setSelected(optionIndex)
  }

  function handleNext() {
    const question = quizQuestions[currentIndex]
    const chosenOption = question.options[selected]
    const newAnswers = [...answers, { questionId: question.id, type: chosenOption.type }]
    setAnswers(newAnswers)
    setDirection(1)

    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex(i => i + 1)
      setSelected(null)
    } else {
      const winner = calculateResult(newAnswers)
      setResultType(winner)
      setLearnerType(winner)
      setScreen('results')
    }
  }

  function handleRetake() {
    setScreen('intro')
    setCurrentIndex(0)
    setSelected(null)
    setAnswers([])
    setResultType(null)
  }

  const profile = resultType ? learnerProfiles[resultType] : null

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: 'var(--color-cream)' }}>
        <AnimatePresence mode="wait">
          {screen === 'intro' && (
            <IntroScreen key="intro" onStart={handleStart} />
          )}
          {screen === 'quiz' && (
            <QuestionScreen
              key="quiz"
              question={quizQuestions[currentIndex]}
              index={currentIndex}
              total={quizQuestions.length}
              selected={selected}
              onSelect={handleSelect}
              onNext={handleNext}
              direction={direction}
            />
          )}
          {screen === 'results' && profile && (
            <ResultsScreen key="results" profile={profile} onRetake={handleRetake} />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
