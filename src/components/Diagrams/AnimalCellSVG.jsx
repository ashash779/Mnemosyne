export default function AnimalCellSVG() {
  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Animal cell diagram" role="img">
      <defs>
        <radialGradient id="cellBg" cx="45%" cy="45%">
          <stop offset="0%" stopColor="#e8f5ee" />
          <stop offset="100%" stopColor="#d0eada" />
        </radialGradient>
        <radialGradient id="nucleusGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#b5d5c5" />
          <stop offset="100%" stopColor="#7db88a" />
        </radialGradient>
        <radialGradient id="vacuoleGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#e8f5f0" />
          <stop offset="100%" stopColor="#c5e4d4" />
        </radialGradient>
      </defs>

      {/* Cell body */}
      <ellipse cx="252" cy="210" rx="230" ry="195" fill="url(#cellBg)" stroke="#5c8f6e" strokeWidth="3" />

      {/* Cytoplasm label area hint */}
      <ellipse cx="252" cy="210" rx="228" ry="193" fill="none" stroke="#7db88a" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />

      {/* Vacuole */}
      <ellipse cx="116" cy="138" rx="52" ry="44" fill="url(#vacuoleGrad)" stroke="#5c8f6e" strokeWidth="2" opacity="0.85" />
      <text x="116" y="135" textAnchor="middle" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Vacuole</text>

      {/* Endoplasmic Reticulum — wavy lines near nucleus */}
      <path d="M270 112 Q290 100 310 115 Q330 130 350 118 Q370 106 385 120" fill="none" stroke="#5c8f6e" strokeWidth="3" strokeLinecap="round" />
      <path d="M268 126 Q288 114 308 129 Q328 144 348 132 Q368 120 383 134" fill="none" stroke="#5c8f6e" strokeWidth="3" strokeLinecap="round" />
      <path d="M272 140 Q292 128 312 143 Q332 158 352 146" fill="none" stroke="#5c8f6e" strokeWidth="2.5" strokeLinecap="round" />

      {/* Golgi apparatus — stacked arcs */}
      <path d="M290 292 Q335 278 378 292" fill="none" stroke="#3d6b4f" strokeWidth="4" strokeLinecap="round" />
      <path d="M295 304 Q335 290 375 304" fill="none" stroke="#4a7c59" strokeWidth="4" strokeLinecap="round" />
      <path d="M300 316 Q335 302 370 316" fill="none" stroke="#5c8f6e" strokeWidth="4" strokeLinecap="round" />
      <path d="M305 328 Q335 314 365 328" fill="none" stroke="#7db88a" strokeWidth="3.5" strokeLinecap="round" />
      {/* Golgi vesicles */}
      <circle cx="380" cy="296" r="7" fill="#7db88a" opacity="0.8" />
      <circle cx="375" cy="312" r="6" fill="#5c8f6e" opacity="0.7" />
      <circle cx="305" cy="330" r="5" fill="#7db88a" opacity="0.7" />

      {/* Mitochondria 1 */}
      <ellipse cx="380" cy="128" rx="52" ry="26" fill="#b5d5c5" stroke="#4a7c59" strokeWidth="2" />
      <ellipse cx="380" cy="128" rx="42" ry="18" fill="none" stroke="#4a7c59" strokeWidth="1.5" strokeDasharray="5 3" />
      <path d="M348 128 Q360 118 370 128 Q380 138 392 128 Q404 118 412 128" fill="none" stroke="#3d6b4f" strokeWidth="1.5" strokeLinecap="round" />

      {/* Mitochondria 2 */}
      <ellipse cx="148" cy="318" rx="44" ry="22" fill="#b5d5c5" stroke="#4a7c59" strokeWidth="2" transform="rotate(-20 148 318)" />
      <path d="M118 310 Q130 300 140 310 Q150 320 162 310 Q172 300 178 310" fill="none" stroke="#3d6b4f" strokeWidth="1.5" strokeLinecap="round" transform="rotate(-20 148 318)" />

      {/* Nucleus */}
      <circle cx="222" cy="206" r="80" fill="url(#nucleusGrad)" stroke="#3d6b4f" strokeWidth="3" />
      {/* Nuclear envelope dots */}
      <circle cx="222" cy="206" r="80" fill="none" stroke="#3d6b4f" strokeWidth="1.5" strokeDasharray="3 8" opacity="0.5" />
      {/* Nucleolus */}
      <circle cx="210" cy="198" r="26" fill="#5c8f6e" opacity="0.7" />
      <circle cx="210" cy="198" r="26" fill="none" stroke="#3d6b4f" strokeWidth="1.5" />
      {/* Chromatin */}
      <path d="M232 220 Q248 212 244 228 Q240 244 256 238" fill="none" stroke="#3d6b4f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M218 232 Q234 226 230 242" fill="none" stroke="#3d6b4f" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Ribosomes — scattered dots */}
      {[
        [136,290],[152,302],[164,280],[178,295],[144,314],
        [388,220],[400,234],[412,218],[420,246],
        [340,370],[354,358],[368,374],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#3d6b4f" opacity="0.75" />
      ))}

      {/* Cell membrane highlight */}
      <ellipse cx="200" cy="100" rx="80" ry="30" fill="white" opacity="0.12" transform="rotate(-20 200 100)" />

      {/* Labels */}
      <text x="222" y="270" textAnchor="middle" fontSize="11" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Nucleus</text>
      <text x="380" y="165" textAnchor="middle" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Mitochondria</text>
      <text x="336" y="348" textAnchor="middle" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Golgi</text>
      <text x="316" y="100" textAnchor="middle" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">ER</text>
      <text x="44" y="212" textAnchor="middle" fontSize="10" fill="#5c8f6e" fontFamily="DM Sans, sans-serif" fontWeight="500">Cytoplasm</text>
    </svg>
  )
}
