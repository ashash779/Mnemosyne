// DNA Double Helix — schematic ladder diagram with twist suggestion
export default function DNASVG() {
  // Two backbone paths that weave around each other
  // Left strand: starts at ~(200,30), bulges left, then right over ~2 turns
  // Right strand: opposite phase, starts at ~(300,30)
  const leftStrand  = 'M200,32 C140,70 140,130 200,168 C260,206 260,266 200,304 C140,342 140,392 200,408'
  const rightStrand = 'M300,32 C360,70 360,130 300,168 C240,206 240,266 300,304 C360,342 360,392 300,408'

  // Rung data: each has y, left-x, right-x, left base colour, right base label
  // Approximate x coords at each y from the bezier curves
  const rungs = [
    { y: 48,  lx: 190, rx: 310, lBase: 'A', rBase: 'T', lCol: '#e8a87c', rCol: '#5c9fad' },
    { y: 78,  lx: 162, rx: 338, lBase: 'G', rBase: 'C', lCol: '#d46060', rCol: '#4aaa60' },
    { y: 108, lx: 148, rx: 352, lBase: 'T', rBase: 'A', lCol: '#5c9fad', rCol: '#e8a87c' },
    { y: 138, lx: 162, rx: 338, lBase: 'C', rBase: 'G', lCol: '#4aaa60', rCol: '#d46060' },
    { y: 168, lx: 200, rx: 300, lBase: 'A', rBase: 'T', lCol: '#e8a87c', rCol: '#5c9fad' },
    { y: 198, lx: 238, rx: 262, lBase: 'G', rBase: 'C', lCol: '#d46060', rCol: '#4aaa60' },
    { y: 228, lx: 252, rx: 248, lBase: 'T', rBase: 'A', lCol: '#5c9fad', rCol: '#e8a87c' },
    { y: 258, lx: 238, rx: 262, lBase: 'C', rBase: 'G', lCol: '#4aaa60', rCol: '#d46060' },
    { y: 288, lx: 200, rx: 300, lBase: 'A', rBase: 'T', lCol: '#e8a87c', rCol: '#5c9fad' },
    { y: 318, lx: 162, rx: 338, lBase: 'G', rBase: 'C', lCol: '#d46060', rCol: '#4aaa60' },
    { y: 348, lx: 148, rx: 352, lBase: 'T', rBase: 'A', lCol: '#5c9fad', rCol: '#e8a87c' },
    { y: 378, lx: 162, rx: 338, lBase: 'C', rBase: 'G', lCol: '#4aaa60', rCol: '#d46060' },
  ]

  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="DNA double helix diagram" role="img">

      {/* Background */}
      <rect width="500" height="420" fill="#f5f8f5" />

      {/* ── Rungs (draw BEHIND strands) ── */}
      {rungs.map((r, i) => {
        const midX = (r.lx + r.rx) / 2
        return (
          <g key={i}>
            {/* Left half-rung */}
            <rect x={r.lx} y={r.y - 5} width={midX - r.lx} height="10" rx="3" fill={r.lCol} opacity="0.88" />
            {/* Right half-rung */}
            <rect x={midX} y={r.y - 5} width={r.rx - midX} height="10" rx="3" fill={r.rCol} opacity="0.88" />
            {/* Hydrogen bonds (dashes in middle) */}
            <line x1={midX - 8} y1={r.y} x2={midX + 8} y2={r.y} stroke="white" strokeWidth="1.8" strokeDasharray="3 2" opacity="0.9" />
          </g>
        )
      })}

      {/* ── Backbone strands ── */}
      <path d={leftStrand}  fill="none" stroke="#3d6b4f" strokeWidth="8" strokeLinecap="round" />
      <path d={rightStrand} fill="none" stroke="#7db88a" strokeWidth="8" strokeLinecap="round" />
      {/* Highlight gloss on strands */}
      <path d={leftStrand}  fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
      <path d={rightStrand} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

      {/* ── Base labels on rungs ── */}
      {rungs.map((r, i) => {
        const midX = (r.lx + r.rx) / 2
        return (
          <g key={`lbl-${i}`}>
            <text x={r.lx + (midX - r.lx) / 2} y={r.y + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="DM Sans, sans-serif">{r.lBase}</text>
            <text x={midX + (r.rx - midX) / 2} y={r.y + 4} textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="DM Sans, sans-serif">{r.rBase}</text>
          </g>
        )
      })}

      {/* ── Nucleotide callout (bottom-left) ── */}
      <rect x="18" y="340" width="118" height="72" rx="8" fill="#e8f5ee" stroke="#4a7c59" strokeWidth="1.5" />
      {/* Phosphate */}
      <circle cx="42" cy="360" r="12" fill="#5c9fad" stroke="#3a7888" strokeWidth="1.5" />
      <text x="42" y="364" textAnchor="middle" fontSize="8" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="700">P</text>
      {/* Sugar */}
      <rect x="60" y="352" width="26" height="18" rx="5" fill="#e8a87c" stroke="#b07040" strokeWidth="1.2" />
      <text x="73" y="365" textAnchor="middle" fontSize="8" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="700">Sugar</text>
      {/* Base */}
      <rect x="60" y="374" width="26" height="14" rx="4" fill="#4aaa60" stroke="#2d6b38" strokeWidth="1.2" />
      <text x="73" y="385" textAnchor="middle" fontSize="7.5" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="700">Base</text>
      {/* Connector lines */}
      <line x1="54" y1="360" x2="60" y2="360" stroke="#4a7c59" strokeWidth="1.2" />
      <line x1="73" y1="370" x2="73" y2="374" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="77" y="348" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Nucleotide</text>

      {/* ── Side labels ── */}
      {/* Left — backbone */}
      <line x1="140" y1="108" x2="118" y2="95" stroke="#3d6b4f" strokeWidth="1.3" />
      <text x="14" y="96" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Sugar-phosphate</text>
      <text x="14" y="108" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">backbone</text>

      {/* Right — nitrogenous bases */}
      <line x1="356" y1="108" x2="375" y2="96" stroke="#3d6b4f" strokeWidth="1.3" />
      <text x="376" y="100" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Nitrogenous</text>
      <text x="376" y="112" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">bases</text>

      {/* Hydrogen bonds label */}
      <line x1="250" y1="318" x2="372" y2="310" stroke="#3d6b4f" strokeWidth="1.3" />
      <text x="374" y="314" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Hydrogen</text>
      <text x="374" y="326" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">bonds</text>

      {/* Legend — base colours */}
      <rect x="360" y="348" width="10" height="10" rx="2" fill="#e8a87c" />
      <text x="374" y="357" fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Adenine (A)</text>
      <rect x="360" y="362" width="10" height="10" rx="2" fill="#5c9fad" />
      <text x="374" y="371" fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Thymine (T)</text>
      <rect x="360" y="376" width="10" height="10" rx="2" fill="#d46060" />
      <text x="374" y="385" fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Guanine (G)</text>
      <rect x="360" y="390" width="10" height="10" rx="2" fill="#4aaa60" />
      <text x="374" y="399" fontSize="8.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Cytosine (C)</text>
    </svg>
  )
}
