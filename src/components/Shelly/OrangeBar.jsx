import { motion } from 'framer-motion'
import { useApp } from '../../context/AppContext.jsx'

function OrangeSVG({ filled, index, wasJustAdded }) {
  return (
    <motion.div
      key={`orange-${index}-${filled}`}
      initial={wasJustAdded && filled ? { y: -20, scale: 0, opacity: 0 } : false}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.05 * index }}
      title="Feed Shelly to unlock hints!"
      aria-label={filled ? 'Orange earned' : 'Empty orange slot'}
      style={{ display: 'inline-block' }}
    >
      <svg
        viewBox="0 0 32 36"
        width="24"
        height="28"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {filled ? (
          <>
            {/* Stem and leaf */}
            <rect x="15.2" y="6" width="1.6" height="4.2" rx="0.8" fill="#3d6b4f" />
            <ellipse cx="20.7" cy="8.4" rx="4.2" ry="2.2" transform="rotate(-24 20.7 8.4)" fill="#5c8f6e" />
            {/* Orange body */}
            <circle cx="16" cy="21" r="10.2" fill="#FF8C00" />
            {/* Highlight */}
            <circle cx="12.1" cy="17.2" r="3.1" fill="#FFB347" opacity="0.75" />
          </>
        ) : (
          <>
            {/* Stem and leaf outline */}
            <rect x="15.2" y="6" width="1.6" height="4.2" rx="0.8" fill="#b5d5c5" />
            <ellipse cx="20.7" cy="8.4" rx="4.2" ry="2.2" transform="rotate(-24 20.7 8.4)" fill="none" stroke="#b5d5c5" strokeWidth="1.2" />
            {/* Orange outline */}
            <circle cx="16" cy="21" r="10.2" fill="none" stroke="#b5d5c5" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </motion.div>
  )
}

export default function OrangeBar({ prevCount, showTooltip = true }) {
  const { orangeCount, MAX_ORANGES } = useApp()

  return (
    <div
      role="meter"
      aria-valuenow={orangeCount}
      aria-valuemin={0}
      aria-valuemax={MAX_ORANGES}
      aria-label={`${orangeCount} of ${MAX_ORANGES} oranges`}
      title="Feed Shelly to unlock hints!"
      style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
    >
      {Array.from({ length: MAX_ORANGES }, (_, i) => (
        <OrangeSVG
          key={i}
          index={i}
          filled={i < orangeCount}
          wasJustAdded={prevCount !== undefined && i === orangeCount - 1 && orangeCount > prevCount}
        />
      ))}
    </div>
  )
}
