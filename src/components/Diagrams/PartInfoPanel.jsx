import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Shelly, ShellyBubble } from '../Shelly/index.js'
import { useApp } from '../../context/AppContext.jsx'
import { useWindowSize } from '../../hooks/useWindowSize.js'

const extraFacts = {
  // Cell
  nucleus: "The nucleus contains about 2 metres of DNA tightly coiled into 46 chromosomes — all fitting inside a space 6 micrometres wide! 🤯",
  mitochondria: "Mitochondria have their own DNA because they were once free-living bacteria that were engulfed by ancient cells billions of years ago — a process called endosymbiosis!",
  'cell-membrane': "The cell membrane is only about 7–10 nanometres thick — roughly 1/10,000th the width of a human hair!",
  er: "If you unfolded all the endoplasmic reticulum in a liver cell, it would cover an area the size of a football pitch! 🏈",
  golgi: "The Golgi apparatus was discovered by Italian scientist Camillo Golgi in 1898. He won the Nobel Prize for it in 1906!",
  ribosome: "Every second, a ribosome can add about 20 amino acids to a growing protein chain. That's incredibly fast for such tiny machinery!",
  vacuole: "In plant cells, the central vacuole can take up to 90% of the cell's volume — it helps the plant stay upright by maintaining turgor pressure.",
  cytoplasm: "The cytoplasm is about 70% water, making it one of the most water-rich environments in the human body.",
  // Heart
  'left-ventricle': "The left ventricle generates enough pressure to squirt blood about 2 metres into the air if the aorta were cut. Your heart is incredibly powerful! 💪",
  'right-ventricle': "Even though the right ventricle is thinner, it still pumps the same volume of blood as the left — just at much lower pressure.",
  'left-atrium': "Atrial fibrillation, where the left atrium beats chaotically instead of rhythmically, affects over 33 million people worldwide.",
  'right-atrium': "The SA node in the right atrium generates about 60–100 electrical impulses per minute — that's what causes your heartbeat!",
  aorta: "The aorta stretches slightly with each heartbeat and then recoils, helping maintain blood pressure between beats. It acts like a biological spring! 🌀",
  'pulmonary-artery': "The pulmonary artery is the only artery that carries deoxygenated blood — a fact that surprises most people who assume all arteries carry oxygen-rich blood.",
  'pulmonary-vein': "There are four pulmonary veins — two from each lung — and they are the only veins in the body carrying oxygenated blood.",
  'vena-cava': "The inferior vena cava is the widest vein in the body at about 3 cm in diameter, and carries about 70% of the blood returning to the right atrium.",
  // Leaf
  cuticle: "Desert plants like cacti have extremely thick cuticles to minimise water loss. Some waxy cuticles are so thick they're harvested to make products like carnauba wax! 🌵",
  'upper-epidermis': "The upper epidermis is transparent precisely so it doesn't absorb the light itself — it's like a glass window for the photosynthetic cells below.",
  palisade: "A single palisade cell can contain up to 50 chloroplasts, and they can rotate within the cell to maximise or minimise light absorption depending on conditions.",
  spongy: "The air spaces in spongy mesophyll can make up 25–40% of the leaf's volume — essential for the rapid gas exchange needed during photosynthesis.",
  'lower-epidermis': "Most plants have 10–100x more stomata on their lower epidermis than upper to reduce water loss from direct sunlight.",
  stomata: "A single oak leaf can have around 100,000 stomata. Across its whole canopy, a single oak tree has billions of stomata opening and closing every day! 🌳",
  'guard-cells': "Guard cells are the only epidermal cells with chloroplasts — they need to photosynthesise themselves to produce the energy to open and close the stomata.",
  'vascular-bundle': "The xylem in vascular bundles works using transpiration pull — water evaporating from leaves creates a tension that literally pulls water up from the roots, sometimes 100m high in trees!",
}

export default function PartInfoPanel({ part, onClose }) {
  const { useHint, orangeCount } = useApp()
  const { isMobile } = useWindowSize()
  const [shellyMessage, setShellyMessage] = useState(null)
  const [shellyVisible, setShellyVisible] = useState(false)

  // Close on Escape key
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll on mobile when panel open
  useEffect(() => {
    if (isMobile) document.body.classList.add('panel-open')
    return () => document.body.classList.remove('panel-open')
  }, [isMobile])

  function handleAskShelly() {
    const dispensed = useHint()
    if (dispensed) {
      const fact = extraFacts[part.id] ?? "Biology is full of amazing secrets — keep exploring! 🌿"
      setShellyMessage(fact)
      setShellyVisible(true)
    } else {
      setShellyMessage("I'm hungry! Answer more questions to feed me first 🍊")
      setShellyVisible(true)
    }
    setTimeout(() => setShellyVisible(false), 8000)
  }

  const panelStyle = isMobile
    ? {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        maxHeight: '70vh',
        borderRadius: '1.25rem 1.25rem 0 0',
        borderTop: '2px solid var(--color-beige-dark)',
        borderLeft: 'none',
        boxShadow: '0 -8px 32px rgba(61,107,79,0.16)',
      }
    : {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 'min(340px, 100%)',
        height: '100%',
        borderLeft: '2px solid var(--color-beige-dark)',
        borderRadius: '0 1rem 1rem 0',
        boxShadow: '-8px 0 32px rgba(61,107,79,0.12)',
      }

  return (
    <motion.div
      initial={isMobile ? { y: '100%', opacity: 0 } : { x: '100%', opacity: 0 }}
      animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
      exit={isMobile ? { y: '100%', opacity: 0 } : { x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      className="diagram-info-panel"
      style={{
        backgroundColor: 'var(--color-beige-light)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 10,
        ...panelStyle,
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`Information about ${part.label}`}
    >
      {/* Header */}
      <div style={{
        padding: '1.25rem 1.25rem 0.75rem',
        borderBottom: '1.5px solid var(--color-beige-dark)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '0.75rem',
        flexShrink: 0,
      }}>
        <h3 style={{
          fontFamily: "'Fraunces', serif",
          fontSize: '1.25rem',
          color: 'var(--color-green-deep)',
          lineHeight: 1.25,
          margin: 0,
        }}>
          {part.label}
        </h3>
        <button
          onClick={onClose}
          aria-label="Close panel"
          style={{
            background: 'var(--color-beige-dark)',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-green-deep)',
            flexShrink: 0,
            fontSize: '1rem',
          }}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '1rem 1.25rem', overflowY: 'auto', flex: 1 }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.95rem',
          color: 'var(--color-green-mid)',
          fontStyle: 'italic',
          lineHeight: 1.55,
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--color-beige-dark)',
        }}>
          {part.shortDescription}
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.9rem',
          color: 'var(--color-green-deep)',
          lineHeight: 1.75,
        }}>
          {part.fullDescription}
        </p>
      </div>

      {/* Shelly section */}
      <div style={{
        padding: '1rem 1.25rem 1.25rem',
        borderTop: '1.5px solid var(--color-beige-dark)',
        flexShrink: 0,
      }}>
        <AnimatePresence>
          {shellyVisible && (
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                <Shelly mood={orangeCount > 0 ? 'happy' : 'idle'} size={52} />
                <ShellyBubble
                  message={shellyMessage}
                  type={orangeCount > 0 ? 'hint' : 'reminder'}
                  visible={shellyVisible}
                />
              </div>
            </div>
          )}
        </AnimatePresence>

        <button
          onClick={handleAskShelly}
          style={{
            width: '100%',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: orangeCount > 0 ? 'var(--color-green-mid)' : 'var(--color-beige-dark)',
            color: orangeCount > 0 ? 'white' : 'var(--color-green-mid)',
            padding: '0.65rem 1rem',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.4rem',
            transition: 'background-color 0.15s',
          }}
          title={orangeCount === 0 ? 'Answer questions correctly to earn oranges!' : 'Ask Shelly for a fun fact'}
          aria-label={`Ask Shelly for more about ${part.label}. You have ${orangeCount} oranges.`}
        >
          🍊 Ask Shelly for more
          {orangeCount === 0 && (
            <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>(need 🍊)</span>
          )}
        </button>
      </div>
    </motion.div>
  )
}
