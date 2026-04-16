import { motion, AnimatePresence } from 'framer-motion'

const typeStyles = {
  hint: {
    bg: '#e8f5ee',
    border: '#7db88a',
    icon: '💡',
  },
  reminder: {
    bg: '#f5f0e8',
    border: '#d4c4a8',
    icon: '🌿',
  },
  praise: {
    bg: '#fef3e8',
    border: '#e8a87c',
    icon: '🍊',
  },
  default: {
    bg: '#fdfaf4',
    border: '#b5d5c5',
    icon: '',
  },
}

export default function ShellyBubble({ message, type = 'default', visible = true }) {
  const style = typeStyles[type] ?? typeStyles.default

  return (
    <AnimatePresence>
      {visible && message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          role="status"
          aria-live="polite"
          style={{
            position: 'relative',
            backgroundColor: style.bg,
            border: `2px solid ${style.border}`,
            borderRadius: '1.2rem',
            padding: '0.75rem 1rem',
            maxWidth: '260px',
            fontSize: '0.9rem',
            fontFamily: "'DM Sans', sans-serif",
            color: '#3d6b4f',
            lineHeight: 1.5,
            boxShadow: '0 4px 16px rgba(61,107,79,0.10)',
          }}
        >
          {style.icon && (
            <span style={{ marginRight: '0.35rem' }}>{style.icon}</span>
          )}
          {message}
          {/* Bubble tail pointing down toward Shelly */}
          <div
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: `12px solid ${style.border}`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-9px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: `10px solid ${style.bg}`,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
