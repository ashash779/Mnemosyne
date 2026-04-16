import { useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/UI/Navbar.jsx'
import Footer from '../components/UI/Footer.jsx'
import DiagramViewer from '../components/Diagrams/DiagramViewer.jsx'
import LoadingSpinner from '../components/UI/LoadingSpinner.jsx'
import { diagrams, diagramList } from '../data/diagramData.js'

export default function Diagrams() {
  const [activeId, setActiveId] = useState('cell')
  const [isPending, startTransition] = useTransition()
  const activeDiagram = diagrams[activeId]

  function handleTabChange(id) {
    startTransition(() => setActiveId(id))
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1, padding: 'clamp(1.5rem, 4vw, 3rem) 1.5rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ textAlign: 'center', marginBottom: '2rem' }}
          >
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              color: 'var(--color-green-deep)',
              marginBottom: '0.5rem',
            }}>
              Interactive Biology Diagrams
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              color: 'var(--color-green-mid)',
              fontSize: '1rem',
            }}>
              Click the glowing hotspots to explore each part in detail.
            </p>
          </motion.div>

          {/* Tab selector — 5-column grid for 10 diagrams */}
          <div
            role="tablist"
            aria-label="Select a diagram"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '0.4rem',
              marginBottom: '2rem',
            }}
          >
            {diagramList.map(({ id, label, emoji }) => {
              const isActive = id === activeId
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`diagram-panel-${id}`}
                  onClick={() => handleTabChange(id)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.82rem',
                    padding: '0.55rem 0.5rem',
                    borderRadius: '0.75rem',
                    border: `2px solid ${isActive ? 'var(--color-green-mid)' : 'var(--color-beige-dark)'}`,
                    backgroundColor: isActive ? 'var(--color-green-mid)' : 'var(--color-beige-light)',
                    color: isActive ? 'white' : 'var(--color-green-deep)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.2rem',
                    transition: 'all 0.18s',
                    boxShadow: isActive ? '0 4px 14px rgba(92,143,110,0.28)' : 'none',
                    lineHeight: 1.25,
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{emoji}</span>
                  {label}
                </button>
              )
            })}
          </div>
          <style>{`
            @media (max-width: 600px) {
              [role="tablist"] { grid-template-columns: repeat(2, 1fr) !important; }
            }
          `}</style>

          {/* Diagram panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              id={`diagram-panel-${activeId}`}
              role="tabpanel"
              aria-label={activeDiagram.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Diagram title */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1rem',
              }}>
                <span style={{ fontSize: '1.5rem' }}>{activeDiagram.emoji}</span>
                <h2 style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: '1.3rem',
                  color: 'var(--color-green-deep)',
                }}>
                  {activeDiagram.label}
                </h2>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem',
                  color: 'var(--color-green-mid)',
                  backgroundColor: 'var(--color-beige-mid)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  marginLeft: 'auto',
                }}>
                  {activeDiagram.parts.length} parts to explore
                </span>
              </div>

              {isPending
                ? <LoadingSpinner label="Loading diagram…" />
                : <DiagramViewer diagram={activeDiagram} />
              }
            </motion.div>
          </AnimatePresence>

        </div>
      </main>

      <Footer />
    </div>
  )
}
