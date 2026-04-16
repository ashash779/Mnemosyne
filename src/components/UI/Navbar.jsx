import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/diagrams', label: 'Diagrams' },
  { to: '/lessons', label: 'Lessons' },
]

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-beige-light)',
        borderBottom: '1.5px solid var(--color-beige-dark)',
        padding: '0 1.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 12px rgba(61,107,79,0.06)',
      }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 900,
          fontSize: '1.4rem',
          color: 'var(--color-green-deep)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          letterSpacing: '-0.02em',
        }}
        aria-label="Mnemosyne home"
      >
        {/* Mini turtle logo matching Shelly's proportions */}
        <svg viewBox="0 0 150 120" width="40" height="32" aria-hidden="true" style={{ flexShrink: 0 }} overflow="visible">
          {/* back flippers */}
          <ellipse cx="30" cy="52"  rx="19" ry="10" fill="#b4d458" transform="rotate(-22 30 52)" />
          <ellipse cx="30" cy="94"  rx="19" ry="10" fill="#b4d458" transform="rotate(22 30 94)" />
          {/* front flippers */}
          <ellipse cx="101" cy="46" rx="17" ry="9" fill="#b4d458" transform="rotate(-35 101 46)" />
          <ellipse cx="101" cy="97" rx="17" ry="9" fill="#b4d458" transform="rotate(35 101 97)" />
          {/* body */}
          <ellipse cx="72" cy="74" rx="44" ry="38" fill="#c8e86a" />
          {/* shell */}
          <ellipse cx="66" cy="62" rx="33" ry="23" fill="#4a8c5c" />
          <ellipse cx="66" cy="62" rx="22" ry="15" fill="#5aaa6e" opacity="0.45" />
          <path d="M66 40 Q65 62 62 82" stroke="#3a6e47" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.75" />
          <path d="M38 56 Q50 62 62 82" stroke="#3a6e47" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7" />
          <path d="M92 56 Q79 62 70 82" stroke="#3a6e47" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.7" />
          {/* tail */}
          <ellipse cx="22" cy="72" rx="13" ry="7" fill="#b4d458" transform="rotate(20 22 72)" />
          {/* neck + head */}
          <ellipse cx="105" cy="70" rx="13" ry="9" fill="#c0e062" />
          <circle cx="120" cy="69" r="20" fill="#c8e86a" />
          {/* eyes */}
          <circle cx="112" cy="67" r="4.5" fill="#2c2c3c" />
          <circle cx="125" cy="67" r="4.5" fill="#2c2c3c" />
          <circle cx="113.5" cy="65.5" r="1.4" fill="white" />
          <circle cx="126.5" cy="65.5" r="1.4" fill="white" />
          {/* blush */}
          <circle cx="107" cy="73" r="5.5" fill="#ffb3c1" opacity="0.68" />
          <circle cx="131" cy="73" r="5.5" fill="#ffb3c1" opacity="0.68" />
          {/* smile */}
          <path d="M114 76 Q120 82 126 76" stroke="#3a5a3a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
        Mnemosyne
      </Link>

      {/* Desktop nav links */}
      <ul
        style={{
          display: 'flex',
          gap: '0.25rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="desktop-nav"
      >
        {navLinks.map(({ to, label }) => {
          const active = location.pathname === to
          return (
            <li key={to}>
              <Link
                to={to}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: active ? 500 : 400,
                  fontSize: '0.95rem',
                  color: active ? 'var(--color-green-deep)' : 'var(--color-green-mid)',
                  textDecoration: 'none',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '999px',
                  backgroundColor: active ? 'var(--color-green-pale)' : 'transparent',
                  transition: 'background-color 0.18s, color 0.18s',
                  display: 'block',
                }}
                aria-current={active ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className="hamburger-btn"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          color: 'var(--color-green-deep)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'absolute',
              top: '64px',
              left: 0,
              right: 0,
              backgroundColor: 'var(--color-beige-light)',
              borderBottom: '1.5px solid var(--color-beige-dark)',
              padding: '0.75rem 1.5rem 1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
            className="mobile-menu"
          >
            {navLinks.map(({ to, label }) => {
              const active = location.pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: active ? 500 : 400,
                    fontSize: '1rem',
                    color: active ? 'var(--color-green-deep)' : 'var(--color-green-mid)',
                    textDecoration: 'none',
                    padding: '0.6rem 1rem',
                    borderRadius: '0.75rem',
                    backgroundColor: active ? 'var(--color-green-pale)' : 'transparent',
                  }}
                >
                  {label}
                </Link>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
