import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/UI/Navbar.jsx'
import Footer from '../components/UI/Footer.jsx'
import { Shelly, ShellyBubble, OrangeBar } from '../components/Shelly/index.js'
import { useApp } from '../context/AppContext.jsx'

// Floating decorative shapes in the hero background
function FloatingShapes() {
  const shapes = [
    { x: '8%',  y: '20%', size: 28, color: '#b5d5c5', delay: 0,   dur: 6 },
    { x: '18%', y: '65%', size: 18, color: '#7db88a', delay: 1.2, dur: 7 },
    { x: '75%', y: '15%', size: 22, color: '#d4c4a8', delay: 0.5, dur: 5.5 },
    { x: '85%', y: '70%', size: 32, color: '#b5d5c5', delay: 2,   dur: 8 },
    { x: '50%', y: '80%', size: 14, color: '#5c8f6e', delay: 1.5, dur: 6.5 },
    { x: '60%', y: '30%', size: 20, color: '#e8dcc8', delay: 0.8, dur: 7 },
    { x: '30%', y: '45%', size: 16, color: '#7db88a', delay: 2.5, dur: 5 },
  ]

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
          }}
          animate={{ y: [0, -18, 0], rotate: [0, 12, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Leaf shape */}
          <svg viewBox="0 0 30 30" width={s.size} height={s.size}>
            <path
              d={`M15 2 Q28 8 26 20 Q20 28 8 26 Q2 18 6 8 Q10 2 15 2 Z`}
              fill={s.color}
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

const featureCards = [
  {
    emoji: '🧠',
    title: 'Find Your Learning Style',
    desc: 'Take a 10-question quiz to discover how your brain learns best.',
    to: '/quiz',
    bg: '#e8f5ee',
    border: '#7db88a',
  },
  {
    emoji: '🫀',
    title: 'Explore Diagrams',
    desc: 'Click on interactive diagrams of cells, the heart, and more.',
    to: '/diagrams',
    bg: '#f0f5f2',
    border: '#b5d5c5',
  },
  {
    emoji: '📖',
    title: 'Read & Learn',
    desc: 'Dive into guided lessons with built-in quizzes to test yourself.',
    to: '/lessons',
    bg: '#fdf5e8',
    border: '#d4c4a8',
  },
]

function FeatureCard({ emoji, title, desc, to, bg, border }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(61,107,79,0.18)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        flex: '1 1 240px',
        maxWidth: '320px',
        backgroundColor: bg,
        border: `2px solid ${border}`,
        borderRadius: '1.5rem',
        padding: '2rem 1.75rem',
        boxShadow: '0 4px 20px rgba(61,107,79,0.08)',
        cursor: 'pointer',
      }}
    >
      <Link
        to={to}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        aria-label={title}
      >
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{emoji}</div>
        <h3 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--color-green-deep)',
          marginBottom: '0.5rem',
        }}>
          {title}
        </h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem',
          color: 'var(--color-green-mid)',
          lineHeight: 1.6,
        }}>
          {desc}
        </p>
        <div style={{
          marginTop: '1.25rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.85rem',
          fontWeight: 500,
          color: 'var(--color-green-deep)',
        }}>
          Get started <span>→</span>
        </div>
      </Link>
    </motion.div>
  )
}

const learnerTypeLabels = {
  visual: 'Visual',
  auditory: 'Auditory',
  reading: 'Reading/Writing',
  kinesthetic: 'Kinesthetic',
}

export default function Home() {
  const { learnerType, lessonProgress } = useApp()
  const completedLessons = Object.values(lessonProgress).filter(Boolean).length

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        {/* ── Hero ── */}
        <section
          style={{
            position: 'relative',
            background: 'linear-gradient(160deg, var(--color-cream) 0%, var(--color-beige-light) 60%, #e0efe6 100%)',
            padding: 'clamp(3rem, 8vw, 6rem) 1.5rem clamp(3rem, 6vw, 5rem)',
            textAlign: 'center',
            overflow: 'hidden',
          }}
          aria-labelledby="hero-heading"
        >
          <FloatingShapes />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '680px', margin: '0 auto' }}>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              id="hero-heading"
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
                color: 'var(--color-green-deep)',
                lineHeight: 1.15,
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Learn Biology Your Way 🌿
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: 'var(--color-green-mid)',
                lineHeight: 1.7,
                marginBottom: '2.25rem',
                maxWidth: '520px',
                margin: '0 auto 2.25rem',
              }}
            >
              Discover how you learn best, explore interactive diagrams,
              and study with Shelly by your side.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <Link
                to="/quiz"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  backgroundColor: 'var(--color-green-mid)',
                  color: 'white',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(92,143,110,0.35)',
                  transition: 'background-color 0.18s',
                }}
                aria-label="Take the learner quiz"
              >
                Take the Quiz →
              </Link>
              <Link
                to="/lessons"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: '1rem',
                  backgroundColor: 'transparent',
                  color: 'var(--color-green-deep)',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  border: '2px solid var(--color-green-pale)',
                  transition: 'border-color 0.18s',
                }}
              >
                Explore Lessons
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Feature Cards ── */}
        <section
          style={{
            padding: 'clamp(2.5rem, 5vw, 4rem) 1.5rem',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
          aria-labelledby="features-heading"
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="features-heading"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.1rem)',
              color: 'var(--color-green-deep)',
              textAlign: 'center',
              marginBottom: '2.5rem',
            }}
          >
            What would you like to explore?
          </motion.h2>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
              >
                <FeatureCard {...card} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Shelly Introduction ── */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--color-beige-light) 0%, #e4f0e8 100%)',
            padding: 'clamp(2.5rem, 5vw, 4rem) 1.5rem',
            borderTop: '1.5px solid var(--color-beige-dark)',
            borderBottom: '1.5px solid var(--color-beige-dark)',
          }}
          aria-labelledby="shelly-intro-heading"
        >
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="shelly-intro-heading"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                color: 'var(--color-green-deep)',
              }}
            >
              Meet Shelly, your study guide 🐢
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
            >
              <ShellyBubble
                message="Hi! I'm Shelly. I'll guide you through everything — and if you earn enough oranges, I'll give you hints! 🍊"
                type="praise"
                visible
              />
              <Shelly mood="excited" size={200} />
              <OrangeBar />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.95rem',
                color: 'var(--color-green-mid)',
                lineHeight: 1.7,
                maxWidth: '440px',
              }}
            >
              Answer quiz questions and lesson checkpoints correctly to earn oranges.
              Spend them to unlock hints from Shelly when you're stuck!
            </motion.p>
          </div>
        </section>

        {/* ── Progress Section (only if learnerType set) ── */}
        {learnerType && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              padding: 'clamp(2rem, 4vw, 3rem) 1.5rem',
              maxWidth: '680px',
              margin: '0 auto',
              textAlign: 'center',
            }}
            aria-labelledby="progress-heading"
          >
            <div
              style={{
                backgroundColor: 'var(--color-beige-light)',
                border: '2px solid var(--color-green-pale)',
                borderRadius: '1.5rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(61,107,79,0.08)',
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👋</div>
              <h2
                id="progress-heading"
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '1.4rem',
                  color: 'var(--color-green-deep)',
                  marginBottom: '0.5rem',
                }}
              >
                Welcome back!
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                color: 'var(--color-green-mid)',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}>
                You're a{' '}
                <strong style={{ color: 'var(--color-green-deep)' }}>
                  {learnerTypeLabels[learnerType] ?? learnerType}
                </strong>{' '}
                learner.{' '}
                {completedLessons === 0
                  ? 'Start your first lesson to track your progress!'
                  : `You've completed ${completedLessons} lesson${completedLessons > 1 ? 's' : ''} so far. Keep going!`}
              </p>
              <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link
                  to="/lessons"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    backgroundColor: 'var(--color-green-mid)',
                    color: 'white',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                  }}
                >
                  Continue Learning →
                </Link>
                <Link
                  to="/quiz"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    backgroundColor: 'transparent',
                    color: 'var(--color-green-deep)',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    border: '2px solid var(--color-green-pale)',
                  }}
                >
                  Retake Quiz
                </Link>
              </div>
            </div>
          </motion.section>
        )}
      </main>

      <Footer />
    </div>
  )
}
