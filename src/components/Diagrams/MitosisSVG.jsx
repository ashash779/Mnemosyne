// Mitosis stages — 3 × 2 grid of cell illustrations
// Each cell box: ~140 × 140 px; grid starts at x=28, y=24, spacing 160 h / 188 v

function CellBox({ x, y, label, children }) {
  return (
    <g>
      <rect x={x} y={y} width="140" height="140" rx="10" fill="#f0f8f0" stroke="#5c8f6e" strokeWidth="1.8" />
      {children}
      <text x={x + 70} y={y + 154} textAnchor="middle" fontSize="10" fontWeight="700" fill="#2d5a3a" fontFamily="DM Sans, sans-serif">{label}</text>
    </g>
  )
}

// Chromosome shapes (X-shaped for condensed, wavy for chromatin)
function Chromosomes({ cx, cy, condensed = false, separated = false, count = 4 }) {
  if (condensed) {
    // Compact X-shaped chromosomes clustered near centre
    const pairs = [[-14,-8],[8,-12],[-8,8],[12,4]]
    return (
      <g>
        {pairs.slice(0, count).map(([dx, dy], i) => (
          <g key={i} transform={`translate(${cx + dx}, ${cy + dy}) rotate(${i * 20 - 20})`}>
            <line x1="0" y1="-8" x2="0" y2="8" stroke="#3d6b4f" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="-7" y1="0" x2="7" y2="0" stroke="#3d6b4f" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        ))}
      </g>
    )
  }
  if (separated) {
    // Two groups at top and bottom
    const topY = cy - 26
    const botY = cy + 26
    return (
      <g>
        {[[-10,0],[2,0],[-4,-8]].map(([dx, dy], i) => (
          <g key={`t${i}`} transform={`translate(${cx + dx}, ${topY + dy}) rotate(${i * 15})`}>
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#3d6b4f" strokeWidth="3" strokeLinecap="round" />
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#3d6b4f" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        {[[-10,0],[2,0],[-4,8]].map(([dx, dy], i) => (
          <g key={`b${i}`} transform={`translate(${cx + dx}, ${botY + dy}) rotate(${i * 15})`}>
            <line x1="0" y1="-6" x2="0" y2="6" stroke="#3d6b4f" strokeWidth="3" strokeLinecap="round" />
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#3d6b4f" strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
      </g>
    )
  }
  // Interphase: wavy chromatin strings
  return (
    <g opacity="0.6">
      <path d={`M${cx - 18},${cy - 4} Q${cx - 8},${cy - 14} ${cx + 2},${cy - 4} Q${cx + 12},${cy + 6} ${cx + 20},${cy - 4}`} fill="none" stroke="#3d6b4f" strokeWidth="2" strokeLinecap="round" />
      <path d={`M${cx - 16},${cy + 8} Q${cx - 6},${cy - 2} ${cx + 4},${cy + 8} Q${cx + 14},${cy + 18} ${cx + 22},${cy + 8}`} fill="none" stroke="#3d6b4f" strokeWidth="2" strokeLinecap="round" />
    </g>
  )
}

export default function MitosisSVG() {
  // Cell centres for each stage
  const r0 = { bx: 28,  by: 24  }   // Interphase   row 0
  const r1 = { bx: 188, by: 24  }   // Prophase
  const r2 = { bx: 348, by: 24  }   // Metaphase
  const r3 = { bx: 28,  by: 234 }   // Anaphase     row 1
  const r4 = { bx: 188, by: 234 }   // Telophase
  const r5 = { bx: 348, by: 234 }   // Cytokinesis

  const cx = bx => bx + 70
  const cy = by => by + 70

  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Mitosis stages diagram" role="img">

      {/* ── INTERPHASE ── */}
      <CellBox {...r0} label="Interphase">
        {/* Large nucleus, diffuse chromatin */}
        <circle cx={cx(r0.bx)} cy={cy(r0.by)} r="40" fill="#d8f0e8" stroke="#5c8f6e" strokeWidth="2" />
        <circle cx={cx(r0.bx)} cy={cy(r0.by)} r="40" fill="none" stroke="#5c8f6e" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
        <circle cx={cx(r0.bx) - 6} cy={cy(r0.by) - 4} r="12" fill="#7db88a" opacity="0.55" />
        <Chromosomes cx={cx(r0.bx)} cy={cy(r0.by)} condensed={false} />
      </CellBox>

      {/* ── PROPHASE ── */}
      <CellBox {...r1} label="Prophase">
        {/* Nucleus breaking down, chromosomes condensing */}
        <circle cx={cx(r1.bx)} cy={cy(r1.by)} r="40" fill="#d8f0e8" stroke="#5c8f6e" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.7" />
        <Chromosomes cx={cx(r1.bx)} cy={cy(r1.by)} condensed count={4} />
        {/* Early spindle hints */}
        <line x1={cx(r1.bx)} y1={r1.by + 10} x2={cx(r1.bx)} y2={r1.by + 130} stroke="#3d6b4f" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.35" />
      </CellBox>

      {/* ── METAPHASE ── */}
      <CellBox {...r2} label="Metaphase">
        {/* Chromosomes aligned at metaphase plate + spindle fibers */}
        {/* Spindle fibers */}
        {[-16, -8, 0, 8, 16].map((dx, i) => (
          <g key={i}>
            <line x1={cx(r2.bx) + dx} y1={r2.by + 12} x2={cx(r2.bx) + dx * 0.3} y2={cy(r2.by)} stroke="#5c8f6e" strokeWidth="1.3" opacity="0.55" />
            <line x1={cx(r2.bx) + dx} y1={r2.by + 128} x2={cx(r2.bx) + dx * 0.3} y2={cy(r2.by)} stroke="#5c8f6e" strokeWidth="1.3" opacity="0.55" />
          </g>
        ))}
        {/* Metaphase plate chromosomes */}
        {[[-20,0],[-10,0],[0,0],[10,0],[20,0]].map(([dx], i) => (
          <g key={i} transform={`translate(${cx(r2.bx) + dx}, ${cy(r2.by)})`}>
            <line x1="0" y1="-7" x2="0" y2="7" stroke="#3d6b4f" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="-5" y1="0" x2="5" y2="0" stroke="#3d6b4f" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        ))}
        {/* Spindle poles */}
        <ellipse cx={cx(r2.bx)} cy={r2.by + 14} rx="10" ry="6" fill="#b5d5c5" stroke="#4a7c59" strokeWidth="1" />
        <ellipse cx={cx(r2.bx)} cy={r2.by + 126} rx="10" ry="6" fill="#b5d5c5" stroke="#4a7c59" strokeWidth="1" />
      </CellBox>

      {/* ── ANAPHASE ── */}
      <CellBox {...r3} label="Anaphase">
        <Chromosomes cx={cx(r3.bx)} cy={cy(r3.by)} separated />
        {/* Elongated cell */}
        <ellipse cx={cx(r3.bx)} cy={cy(r3.by)} rx="36" ry="50" fill="none" stroke="#5c8f6e" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
        {/* Spindle fibers pulling */}
        {[-8, 0, 8].map((dx, i) => (
          <line key={i} x1={cx(r3.bx) + dx * 0.5} y1={cy(r3.by) - 10} x2={cx(r3.bx) + dx} y2={r3.by + 16} stroke="#5c8f6e" strokeWidth="1.2" opacity="0.45" />
        ))}
        {[-8, 0, 8].map((dx, i) => (
          <line key={i + 4} x1={cx(r3.bx) + dx * 0.5} y1={cy(r3.by) + 10} x2={cx(r3.bx) + dx} y2={r3.by + 124} stroke="#5c8f6e" strokeWidth="1.2" opacity="0.45" />
        ))}
      </CellBox>

      {/* ── TELOPHASE ── */}
      <CellBox {...r4} label="Telophase">
        {/* Two new nuclei reforming */}
        <circle cx={cx(r4.bx)} cy={r4.by + 40} r="25" fill="#d8f0e8" stroke="#5c8f6e" strokeWidth="1.8" opacity="0.85" />
        <circle cx={cx(r4.bx)} cy={r4.by + 100} r="25" fill="#d8f0e8" stroke="#5c8f6e" strokeWidth="1.8" opacity="0.85" />
        {/* Decondensing chromosomes */}
        {[-8, 0, 8].map((dx, i) => (
          <path key={i} d={`M${cx(r4.bx) + dx},${r4.by + 32} Q${cx(r4.bx) + dx + 5},${r4.by + 40} ${cx(r4.bx) + dx},${r4.by + 48}`} fill="none" stroke="#3d6b4f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        ))}
        {[-8, 0, 8].map((dx, i) => (
          <path key={i + 4} d={`M${cx(r4.bx) + dx},${r4.by + 92} Q${cx(r4.bx) + dx + 5},${r4.by + 100} ${cx(r4.bx) + dx},${r4.by + 108}`} fill="none" stroke="#3d6b4f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        ))}
        {/* Cleavage furrow hint */}
        <line x1={cx(r4.bx) - 30} y1={cy(r4.by)} x2={cx(r4.bx) + 30} y2={cy(r4.by)} stroke="#e8a87c" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
      </CellBox>

      {/* ── CYTOKINESIS ── */}
      <CellBox {...r5} label="Cytokinesis">
        {/* Two fully separate daughter cells */}
        <circle cx={cx(r5.bx)} cy={r5.by + 42} r="28" fill="#e8f5ee" stroke="#5c8f6e" strokeWidth="2" />
        <circle cx={cx(r5.bx) - 5} cy={r5.by + 36} r="10" fill="#7db88a" opacity="0.5" />
        <circle cx={cx(r5.bx)} cy={r5.by + 98} r="28" fill="#e8f5ee" stroke="#5c8f6e" strokeWidth="2" />
        <circle cx={cx(r5.bx) - 5} cy={r5.by + 92} r="10" fill="#7db88a" opacity="0.5" />
        {/* Division gap label */}
        <text x={cx(r5.bx)} y={cy(r5.by) + 4} textAnchor="middle" fontSize="8" fill="#5c8f6e" fontFamily="DM Sans, sans-serif">÷</text>
      </CellBox>

      {/* ── Arrows between stages ── */}
      {/* Row 1 */}
      <path d="M170,94 L186,94" stroke="#4a7c59" strokeWidth="2" markerEnd="url(#arrowM)" />
      <path d="M330,94 L346,94" stroke="#4a7c59" strokeWidth="2" markerEnd="url(#arrowM)" />
      {/* Row 1 → Row 2 */}
      <path d="M488,94 C498,94 498,304 488,304" fill="none" stroke="#4a7c59" strokeWidth="2" />
      <path d="M488,304 L348,304" stroke="#4a7c59" strokeWidth="2" markerEnd="url(#arrowM)" />
      {/* Row 2 */}
      <path d="M170,304 L186,304" stroke="#4a7c59" strokeWidth="2" markerEnd="url(#arrowM)" />
      <path d="M330,304 L346,304" stroke="#4a7c59" strokeWidth="2" markerEnd="url(#arrowM)" />

      <defs>
        <marker id="arrowM" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a7c59" />
        </marker>
      </defs>

      {/* ── Row labels (top) ── */}
      <text x="250" y="414" textAnchor="middle" fontSize="9.5" fill="#5c8f6e" fontFamily="DM Sans, sans-serif">Cell cycle: each division produces two identical daughter cells</text>
    </svg>
  )
}
