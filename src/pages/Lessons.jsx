import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/UI/Navbar.jsx'
import Footer from '../components/UI/Footer.jsx'
import LessonReader from '../components/Lessons/LessonReader.jsx'
import { Shelly, ShellyBubble } from '../components/Shelly/index.js'
import { useApp } from '../context/AppContext.jsx'
import { lessons } from '../data/lessonsData.js'

function LessonCard({ lesson, isComplete, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -5, boxShadow: '0 14px 36px rgba(61,107,79,0.16)' }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-label={`Open lesson: ${lesson.title}${isComplete ? ' (completed)' : ''}`}
      style={{
        backgroundColor: lesson.color,
        border: `2px solid ${isComplete ? '#4a9c60' : lesson.border}`,
        borderRadius: '1.5rem',
        padding: '1.75rem',
        cursor: 'pointer',
        boxShadow: isComplete
          ? '0 4px 20px rgba(74,156,96,0.15)'
          : '0 4px 20px rgba(61,107,79,0.08)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
    >
      {/* Completion badge */}
      {isComplete && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          backgroundColor: '#4a9c60',
          color: 'white',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.75rem',
          fontWeight: 500,
          padding: '0.2rem 0.6rem',
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
        }}>
          ✓ Complete
        </div>
      )}

      <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{lesson.emoji}</div>
      <h3 style={{
        fontFamily: "'Fraunces', serif",
        fontSize: '1.2rem',
        color: 'var(--color-green-deep)',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
        paddingRight: isComplete ? '5rem' : 0,
      }}>
        {lesson.title}
      </h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.88rem',
        color: 'var(--color-green-mid)',
        lineHeight: 1.6,
        marginBottom: '1.25rem',
      }}>
        {lesson.description}
      </p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.82rem',
        color: 'var(--color-green-mid)',
      }}>
        <span>🕐 {lesson.readTime}</span>
        <span>📝 {lesson.checkpoints.length} checkpoints</span>
        <span style={{ marginLeft: 'auto', fontWeight: 500, color: 'var(--color-green-deep)' }}>
          {isComplete ? 'Read again →' : 'Start reading →'}
        </span>
      </div>
    </motion.div>
  )
}

export default function Lessons() {
  const { learnerType, lessonProgress } = useApp()
  const [activeLessonId, setActiveLessonId] = useState(null)

  const activeLesson = lessons.find(l => l.id === activeLessonId)

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          {activeLesson ? (
            <motion.div
              key="reader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <LessonReader
                lesson={activeLesson}
                onBack={() => setActiveLessonId(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(1.5rem, 4vw, 3rem) 1.5rem' }}
            >
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h1 style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
                  color: 'var(--color-green-deep)',
                  marginBottom: '0.5rem',
                }}>
                  Biology Lessons 📖
                </h1>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: 'var(--color-green-mid)',
                  fontSize: '1rem',
                }}>
                  Read through each lesson, then answer quick checkpoints to test yourself.
                </p>
              </div>

              {/* Shelly nudge if no learner type */}
              {!learnerType && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '1rem',
                    backgroundColor: 'var(--color-beige-light)',
                    border: '2px solid var(--color-beige-dark)',
                    borderRadius: '1.25rem',
                    padding: '1.25rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <Shelly mood="happy" size={72} />
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.92rem',
                      color: 'var(--color-green-deep)',
                      lineHeight: 1.6,
                      marginBottom: '0.75rem',
                    }}>
                      Take the learning quiz first to get personalised study tips for each lesson! 🐢
                    </p>
                    <Link
                      to="/quiz"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.88rem',
                        backgroundColor: 'var(--color-green-mid)',
                        color: 'white',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '999px',
                        textDecoration: 'none',
                      }}
                    >
                      Take the quiz →
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* Lesson cards — 2-column grid */}
              <style>{`
                .lesson-grid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 1.25rem;
                }
                @media (max-width: 600px) {
                  .lesson-grid { grid-template-columns: 1fr; }
                }
              `}</style>
              <div className="lesson-grid">
                {lessons.map((lesson, i) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    index={i}
                    isComplete={!!lessonProgress[lesson.id]}
                    onClick={() => setActiveLessonId(lesson.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {!activeLesson && <Footer />}
    </div>
  )
}
