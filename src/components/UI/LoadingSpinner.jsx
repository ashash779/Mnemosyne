import { motion } from 'framer-motion'

export default function LoadingSpinner({ size = 36, label = 'Loading…' }) {
  return (
    <div
      role="status"
      aria-label={label}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '2rem',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `3px solid var(--color-beige-dark)`,
          borderTopColor: 'var(--color-green-mid)',
        }}
        aria-hidden="true"
      />
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.85rem',
        color: 'var(--color-green-mid)',
      }}>
        {label}
      </span>
    </div>
  )
}
