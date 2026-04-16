// Human Eye — horizontal cross-section
export default function EyeSVG() {
  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Human eye cross-section diagram" role="img">
      <defs>
        <radialGradient id="eyeVitreous" cx="55%" cy="50%">
          <stop offset="0%" stopColor="#e8f8f8" />
          <stop offset="100%" stopColor="#c8eef0" />
        </radialGradient>
        <radialGradient id="eyeLens" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#e8f4e0" />
          <stop offset="100%" stopColor="#c4ddb8" />
        </radialGradient>
        <radialGradient id="eyeSclera" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#f8f8f4" />
          <stop offset="100%" stopColor="#e8e8e0" />
        </radialGradient>
      </defs>

      {/* ── Sclera (outer white coat) ── */}
      <ellipse cx="244" cy="210" rx="215" ry="165" fill="url(#eyeSclera)" stroke="#8a8a7a" strokeWidth="3" />

      {/* ── Choroid (vascular layer, inner to sclera, behind retina) ── */}
      <ellipse cx="244" cy="210" rx="202" ry="153" fill="#c8a870" opacity="0.3" />

      {/* ── Retina (inner lining — back two-thirds of eye) ── */}
      <path
        d="M148,82 C100,112 68,158 64,210 C60,262 90,312 148,342 C196,366 244,368 280,362 A205,155 0 0,0 148,82 Z"
        fill="#7db88a" opacity="0.75" stroke="#4a7c59" strokeWidth="1.5"
      />
      {/* Retina texture lines */}
      <path d="M148,90 A195,146 0 0,0 148,332" fill="none" stroke="#5c8f6e" strokeWidth="1.2" opacity="0.4" strokeDasharray="6 4" />

      {/* ── Vitreous humor (clear gel, main chamber) ── */}
      <ellipse cx="216" cy="210" rx="148" ry="122" fill="url(#eyeVitreous)" />

      {/* ── Lens ── */}
      <ellipse cx="128" cy="210" rx="26" ry="48" fill="url(#eyeLens)" stroke="#5c8f6e" strokeWidth="2" />
      {/* Lens highlight */}
      <ellipse cx="122" cy="196" rx="8" ry="14" fill="white" opacity="0.35" transform="rotate(-10 122 196)" />

      {/* ── Ciliary body (holds lens) ── */}
      <line x1="108" y1="168" x2="84" y2="148" stroke="#4a7c59" strokeWidth="3" strokeLinecap="round" />
      <line x1="108" y1="252" x2="84" y2="272" stroke="#4a7c59" strokeWidth="3" strokeLinecap="round" />
      <line x1="112" y1="175" x2="92" y2="158" stroke="#4a7c59" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="112" y1="245" x2="92" y2="262" stroke="#4a7c59" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* ── Iris ── */}
      <ellipse cx="74" cy="210" rx="24" ry="60" fill="#5c9f6e" stroke="#3d6b4f" strokeWidth="2" />
      {/* Iris texture radial lines */}
      {[-30,-18,-6,6,18,30].map((dy, i) => (
        <line key={i} x1="60" y1={210 + dy} x2="96" y2={210 + dy} stroke="#3d6b4f" strokeWidth="0.8" opacity="0.4" />
      ))}
      {/* Iris highlight */}
      <ellipse cx="68" cy="196" rx="7" ry="12" fill="white" opacity="0.18" />

      {/* ── Pupil ── */}
      <ellipse cx="74" cy="210" rx="11" ry="30" fill="#1a1a2a" />
      {/* Pupil catch-light */}
      <ellipse cx="70" cy="200" rx="3" ry="5" fill="white" opacity="0.5" />

      {/* ── Cornea ── */}
      <path
        d="M32,152 C12,170 10,200 10,210 C10,220 12,248 32,268 C44,280 58,286 68,286 L68,134 C58,134 44,140 32,152 Z"
        fill="#b8e8d8" stroke="#4a9a7a" strokeWidth="2.5" opacity="0.75"
      />
      {/* Cornea highlight */}
      <path d="M18,174 C12,190 12,200 18,224" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      {/* ── Optic nerve ── */}
      <rect x="432" y="192" width="68" height="36" rx="5" fill="#8ab89a" stroke="#4a7c59" strokeWidth="2" />
      {/* Optic disc (blind spot where nerve exits) */}
      <circle cx="434" cy="210" r="16" fill="#a8c898" stroke="#4a7c59" strokeWidth="1.8" />
      <circle cx="434" cy="210" r="8"  fill="#7db88a" />

      {/* ── Aqueous humor (front chamber) ── */}
      <path
        d="M68,150 L68,270 C84,270 102,258 112,244 C122,230 126,220 126,210 C126,200 122,190 112,176 C102,162 84,150 68,150 Z"
        fill="#d8f0f0" opacity="0.55"
      />

      {/* ── Macula / fovea label area ── */}
      <circle cx="340" cy="210" r="18" fill="#5c8f6e" opacity="0.35" stroke="#4a7c59" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="340" cy="210" r="7"  fill="#4a7c59" opacity="0.55" />

      {/* ── Labels ── */}
      <text x="244" y="18"  textAnchor="middle" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Sclera (white coat, top)</text>

      {/* Cornea label */}
      <line x1="28" y1="140" x2="52" y2="130" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="8"  y="128" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Cornea</text>

      {/* Iris */}
      <line x1="74" y1="150" x2="74" y2="128" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="60" y="122" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Iris</text>

      {/* Pupil */}
      <line x1="74" y1="182" x2="106" y2="166" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="108" y="162" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Pupil</text>

      {/* Lens */}
      <line x1="128" y1="163" x2="148" y2="148" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="150" y="144" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Lens</text>

      {/* Vitreous humor */}
      <text x="186" y="208" textAnchor="middle" fontSize="9" fill="#3a6a6a" fontFamily="DM Sans, sans-serif" fontWeight="500">Vitreous</text>
      <text x="186" y="220" textAnchor="middle" fontSize="9" fill="#3a6a6a" fontFamily="DM Sans, sans-serif" fontWeight="500">humor</text>

      {/* Retina */}
      <line x1="100" y1="350" x2="128" y2="360" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="24" y="368" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Retina</text>

      {/* Optic nerve */}
      <text x="448" y="208" textAnchor="middle" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Optic</text>
      <text x="448" y="220" textAnchor="middle" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">nerve</text>

      {/* Fovea label */}
      <line x1="340" y1="228" x2="340" y2="250" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="316" y="264" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Fovea / macula</text>
    </svg>
  )
}
