export default function PlantCellSVG() {
  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Plant cell diagram" role="img">
      <defs>
        <radialGradient id="pcBody" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#f0fce8" />
          <stop offset="100%" stopColor="#d8f0cc" />
        </radialGradient>
        <radialGradient id="pcVacuole" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#e4f6fc" />
          <stop offset="100%" stopColor="#b8e2f0" />
        </radialGradient>
        <radialGradient id="pcNucleus" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#b5d5c5" />
          <stop offset="100%" stopColor="#7db88a" />
        </radialGradient>
      </defs>

      {/* Cell wall — thick outer layer */}
      <rect x="14" y="14" width="472" height="392" rx="22" fill="#c4e89a" stroke="#3d6b4f" strokeWidth="10" />

      {/* Cell interior */}
      <rect x="36" y="36" width="428" height="348" rx="13" fill="url(#pcBody)" />

      {/* Cell membrane — dashed just inside wall */}
      <rect x="36" y="36" width="428" height="348" rx="13" fill="none" stroke="#5c8f6e" strokeWidth="2" strokeDasharray="5 3" />

      {/* Central vacuole — large, pale blue-green */}
      <ellipse cx="248" cy="192" rx="130" ry="106" fill="url(#pcVacuole)" stroke="#5c9fad" strokeWidth="2.5" />
      <text x="248" y="196" textAnchor="middle" fontSize="10" fill="#2a6878" fontFamily="DM Sans, sans-serif" fontWeight="500">Central Vacuole</text>
      <text x="248" y="210" textAnchor="middle" fontSize="9" fill="#3a7888" fontFamily="DM Sans, sans-serif">(cell sap)</text>

      {/* Chloroplast 1 — top-left between vacuole and wall */}
      <ellipse cx="108" cy="108" rx="58" ry="28" fill="#4aaa60" stroke="#2d6b38" strokeWidth="1.8" />
      {/* Grana stacks */}
      <rect x="72"  y="96" width="7" height="24" rx="1.5" fill="#1a4820" opacity="0.72" />
      <rect x="83"  y="93" width="7" height="30" rx="1.5" fill="#1a4820" opacity="0.72" />
      <rect x="94"  y="91" width="7" height="34" rx="1.5" fill="#1a4820" opacity="0.72" />
      <rect x="105" y="91" width="7" height="34" rx="1.5" fill="#1a4820" opacity="0.72" />
      <rect x="116" y="93" width="7" height="30" rx="1.5" fill="#1a4820" opacity="0.72" />
      <rect x="127" y="96" width="7" height="24" rx="1.5" fill="#1a4820" opacity="0.72" />
      <ellipse cx="90" cy="101" rx="6" ry="3" fill="white" opacity="0.22" />

      {/* Chloroplast 2 — bottom-right */}
      <ellipse cx="392" cy="348" rx="52" ry="24" fill="#4aaa60" stroke="#2d6b38" strokeWidth="1.8" transform="rotate(-12 392 348)" />
      <rect x="358" y="339" width="7" height="18" rx="1.5" fill="#1a4820" opacity="0.7" transform="rotate(-12 392 348)" />
      <rect x="369" y="337" width="7" height="22" rx="1.5" fill="#1a4820" opacity="0.7" transform="rotate(-12 392 348)" />
      <rect x="380" y="336" width="7" height="24" rx="1.5" fill="#1a4820" opacity="0.7" transform="rotate(-12 392 348)" />
      <rect x="391" y="337" width="7" height="22" rx="1.5" fill="#1a4820" opacity="0.7" transform="rotate(-12 392 348)" />
      <rect x="402" y="339" width="7" height="18" rx="1.5" fill="#1a4820" opacity="0.7" transform="rotate(-12 392 348)" />

      {/* Mitochondria — upper right */}
      <ellipse cx="415" cy="155" rx="50" ry="24" fill="#b5d5c5" stroke="#4a7c59" strokeWidth="2" />
      <ellipse cx="415" cy="155" rx="40" ry="16" fill="none" stroke="#4a7c59" strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M385 155 Q397 145 407 155 Q417 165 429 155 Q439 145 445 155" fill="none" stroke="#3d6b4f" strokeWidth="1.5" strokeLinecap="round" />
      <text x="415" y="190" textAnchor="middle" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Mitochondria</text>

      {/* Endoplasmic Reticulum — right side, wavy */}
      <path d="M342 174 Q362 160 384 175 Q404 190 424 177" fill="none" stroke="#5c8f6e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M340 190 Q360 176 382 191 Q402 206 422 193" fill="none" stroke="#5c8f6e" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M344 206 Q364 192 386 207 Q402 220 418 210" fill="none" stroke="#5c8f6e" strokeWidth="3" strokeLinecap="round" />

      {/* Golgi apparatus — lower left */}
      <path d="M58 278 Q102 264 148 278" fill="none" stroke="#3d6b4f" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M62 292 Q102 278 144 292" fill="none" stroke="#4a7c59" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M66 306 Q102 292 140 306" fill="none" stroke="#5c8f6e" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 319 Q102 306 136 319" fill="none" stroke="#7db88a" strokeWidth="3.5" strokeLinecap="round" />
      {/* Golgi vesicles */}
      <circle cx="149" cy="282" r="7" fill="#7db88a" opacity="0.82" />
      <circle cx="145" cy="298" r="6" fill="#5c8f6e" opacity="0.72" />
      <circle cx="70"  cy="320" r="5" fill="#7db88a" opacity="0.7" />

      {/* Nucleus */}
      <circle cx="330" cy="296" r="70" fill="url(#pcNucleus)" stroke="#3d6b4f" strokeWidth="3" />
      {/* Nuclear pores */}
      <circle cx="330" cy="296" r="70" fill="none" stroke="#3d6b4f" strokeWidth="1.5" strokeDasharray="3 8" opacity="0.5" />
      {/* Nucleolus */}
      <circle cx="318" cy="287" r="24" fill="#5c8f6e" opacity="0.7" />
      <circle cx="318" cy="287" r="24" fill="none" stroke="#3d6b4f" strokeWidth="1.5" />
      {/* Chromatin strands */}
      <path d="M342 308 Q356 300 352 316 Q348 330 362 325" fill="none" stroke="#3d6b4f" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />

      {/* Labels */}
      <text x="109" y="148" textAnchor="middle" fontSize="9" fill="#1a3818" fontFamily="DM Sans, sans-serif" fontWeight="600">Chloroplast</text>
      <text x="330" y="362" textAnchor="middle" fontSize="11" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Nucleus</text>
      <text x="102" y="336" textAnchor="middle" fontSize="9"  fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Golgi</text>
      <text x="382" y="222" textAnchor="middle" fontSize="9"  fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">ER</text>
      <text x="248" y="30"  textAnchor="middle" fontSize="10" fill="#2a5030" fontFamily="DM Sans, sans-serif" fontWeight="700">Cell Wall</text>
      <text x="70"  y="52"  fontSize="9"        fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Cell Membrane</text>
    </svg>
  )
}
