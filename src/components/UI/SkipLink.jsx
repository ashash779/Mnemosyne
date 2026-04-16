export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'absolute',
        top: '-100px',
        left: '1rem',
        backgroundColor: 'var(--color-green-deep)',
        color: 'white',
        padding: '0.6rem 1.2rem',
        borderRadius: '0 0 0.75rem 0.75rem',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 500,
        fontSize: '0.9rem',
        textDecoration: 'none',
        zIndex: 9999,
        transition: 'top 0.15s',
      }}
      onFocus={e => { e.currentTarget.style.top = '0' }}
      onBlur={e => { e.currentTarget.style.top = '-100px' }}
    >
      Skip to main content
    </a>
  )
}
