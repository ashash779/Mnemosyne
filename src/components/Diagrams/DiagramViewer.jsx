import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PartInfoPanel from './PartInfoPanel.jsx'
import AnimalCellSVG from './AnimalCellSVG.jsx'
import HeartSVG from './HeartSVG.jsx'
import LeafSVG from './LeafSVG.jsx'
import PlantCellSVG from './PlantCellSVG.jsx'
import BrainSVG from './BrainSVG.jsx'
import DNASVG from './DNASVG.jsx'
import EyeSVG from './EyeSVG.jsx'
import MitosisSVG from './MitosisSVG.jsx'
import DigestiveSVG from './DigestiveSVG.jsx'
import FoodWebSVG from './FoodWebSVG.jsx'

const svgComponents = {
  cell:      AnimalCellSVG,
  heart:     HeartSVG,
  leaf:      LeafSVG,
  plantCell: PlantCellSVG,
  brain:     BrainSVG,
  dna:       DNASVG,
  eye:       EyeSVG,
  mitosis:   MitosisSVG,
  digestive: DigestiveSVG,
  foodweb:   FoodWebSVG,
}

function HotspotButton({ part, onClick, isActive }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${part.x}%`,
        top: `${part.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: 5,
      }}
    >
      {/* Pulse ring */}
      {!isActive && (
        <motion.div
          animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-green-light)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
      )}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onClick(part)}
        style={{
          position: 'relative',
          width: '26px',
          height: '26px',
          borderRadius: '50%',
          backgroundColor: isActive ? 'var(--color-green-deep)' : 'var(--color-green-mid)',
          border: '2.5px solid white',
          boxShadow: '0 2px 8px rgba(61,107,79,0.35)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.7rem',
          fontWeight: 700,
          transition: 'background-color 0.15s',
        }}
        aria-label={`View information about ${part.label}`}
        aria-pressed={isActive}
      >
        {isActive ? '✕' : '+'}
      </motion.button>
    </div>
  )
}

export default function DiagramViewer({ diagram }) {
  const [selectedPart, setSelectedPart] = useState(null)
  const DiagramSVG = svgComponents[diagram.id]

  function handleHotspotClick(part) {
    setSelectedPart(prev => prev?.id === part.id ? null : part)
  }

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-cream)',
        border: '2px solid var(--color-beige-dark)',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(61,107,79,0.08)',
      }}
    >
      {/* Diagram + hotspots */}
      <div style={{ position: 'relative' }}>
        <DiagramSVG />

        {/* Hotspot overlay — visible to keyboard users via focus */}
        <div
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
          role="group"
          aria-label={`Interactive hotspots for ${diagram.label}`}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
            {diagram.parts.map(part => (
              <div key={part.id} style={{ pointerEvents: 'auto' }}>
                <HotspotButton
                  part={part}
                  onClick={handleHotspotClick}
                  isActive={selectedPart?.id === part.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info panel (desktop: slide from right; mobile handled via z-index/full-width) */}
      <AnimatePresence>
        {selectedPart && (
          <PartInfoPanel
            key={selectedPart.id}
            part={selectedPart}
            onClose={() => setSelectedPart(null)}
          />
        )}
      </AnimatePresence>

      {/* Helper tooltip */}
      {!selectedPart && (
        <div style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(61,107,79,0.85)',
          color: 'white',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.78rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
          aria-live="polite"
        >
          Click the + buttons to explore each part
        </div>
      )}
    </div>
  )
}
