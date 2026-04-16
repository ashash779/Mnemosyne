export default function HeartSVG() {
  return (
    <svg viewBox="0 0 500 440" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Human heart diagram" role="img">
      <defs>
        <linearGradient id="heartBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5e8e8" />
          <stop offset="100%" stopColor="#e8d0d0" />
        </linearGradient>
        <linearGradient id="leftSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d46060" />
          <stop offset="100%" stopColor="#c04040" />
        </linearGradient>
        <linearGradient id="rightSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7db8c4" />
          <stop offset="100%" stopColor="#5c9fad" />
        </linearGradient>
      </defs>

      {/* Heart outer shape */}
      <path
        d="M250 390 C180 340 60 290 60 190 C60 130 110 90 160 90 C195 90 225 110 250 135 C275 110 305 90 340 90 C390 90 440 130 440 190 C440 290 320 340 250 390 Z"
        fill="url(#heartBg)"
        stroke="#c04040"
        strokeWidth="3"
      />

      {/* Septum (dividing wall) */}
      <path d="M250 135 C245 200 248 280 250 390" stroke="#a03030" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Left atrium (upper left - oxygenated, red) */}
      <path
        d="M160 90 C185 85 215 100 235 130 C220 140 200 145 178 138 C158 130 142 112 160 90 Z"
        fill="#d46060"
        stroke="#a03030"
        strokeWidth="2"
        opacity="0.85"
      />

      {/* Right atrium (upper right - deoxygenated, blue) */}
      <path
        d="M340 90 C315 85 285 100 265 130 C280 140 300 145 322 138 C342 130 358 112 340 90 Z"
        fill="#7db8c4"
        stroke="#3d7a8a"
        strokeWidth="2"
        opacity="0.85"
      />

      {/* Left ventricle (lower left - thick wall, red) */}
      <path
        d="M80 200 C75 240 90 300 150 340 C190 360 230 365 248 390 C248 320 242 240 235 190 C210 185 140 185 80 200 Z"
        fill="#c04040"
        stroke="#a03030"
        strokeWidth="2.5"
        opacity="0.9"
      />

      {/* Right ventricle (lower right - thinner wall, blue) */}
      <path
        d="M420 200 C425 240 410 300 350 340 C310 360 270 365 252 390 C252 320 258 240 265 190 C290 185 360 185 420 200 Z"
        fill="#5c9fad"
        stroke="#3d7a8a"
        strokeWidth="2"
        opacity="0.85"
      />

      {/* Mitral valve hint */}
      <path d="M200 165 Q215 158 230 165" stroke="#a03030" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Tricuspid valve hint */}
      <path d="M270 165 Q285 158 300 165" stroke="#3d7a8a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Aorta */}
      <path d="M200 95 C195 60 210 36 248 30 C270 25 295 35 305 60 C310 75 300 92 285 95" fill="#d46060" stroke="#a03030" strokeWidth="3" opacity="0.9" />
      {/* Aorta arch */}
      <path d="M200 95 Q170 50 210 30" fill="none" stroke="#c04040" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

      {/* Pulmonary artery */}
      <path d="M295 95 C305 75 320 58 340 52 C358 47 375 55 382 70 C388 82 380 96 368 100" fill="#7db8c4" stroke="#3d7a8a" strokeWidth="3" opacity="0.9" />

      {/* Pulmonary veins (left side, red - bring oxygenated blood) */}
      <path d="M100 90 C108 78 120 72 136 80 C148 87 152 98 148 110" fill="#d46060" stroke="#a03030" strokeWidth="3" opacity="0.8" />
      <path d="M90 115 C96 104 108 100 122 106 C134 112 136 124 130 134" fill="#d46060" stroke="#a03030" strokeWidth="2.5" opacity="0.7" />

      {/* Vena cava (right, blue) */}
      <path d="M400 88 C408 76 420 70 432 76 C442 82 445 94 440 106 C436 116 424 120 414 115" fill="#5c9fad" stroke="#3d7a8a" strokeWidth="3" opacity="0.85" />
      <path d="M406 118 C414 108 425 106 434 113 C442 120 442 134 434 140" fill="#5c9fad" stroke="#3d7a8a" strokeWidth="2.5" opacity="0.75" />

      {/* Highlight on heart */}
      <ellipse cx="195" cy="150" rx="45" ry="28" fill="white" opacity="0.10" transform="rotate(-30 195 150)" />

      {/* Labels */}
      <text x="155" y="230" textAnchor="middle" fontSize="10" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">Left</text>
      <text x="155" y="243" textAnchor="middle" fontSize="10" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">Ventricle</text>

      <text x="348" y="230" textAnchor="middle" fontSize="10" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">Right</text>
      <text x="348" y="243" textAnchor="middle" fontSize="10" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">Ventricle</text>

      <text x="196" y="122" textAnchor="middle" fontSize="9" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">L. Atrium</text>
      <text x="305" y="122" textAnchor="middle" fontSize="9" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">R. Atrium</text>

      <text x="252" y="52" textAnchor="middle" fontSize="9" fill="#a03030" fontFamily="DM Sans, sans-serif" fontWeight="600">Aorta</text>
      <text x="356" y="45" textAnchor="middle" fontSize="8" fill="#3d7a8a" fontFamily="DM Sans, sans-serif" fontWeight="600">Pulm. Artery</text>
      <text x="108" y="68" textAnchor="middle" fontSize="8" fill="#a03030" fontFamily="DM Sans, sans-serif" fontWeight="600">Pulm. Vein</text>
      <text x="432" y="66" textAnchor="middle" fontSize="8" fill="#3d7a8a" fontFamily="DM Sans, sans-serif" fontWeight="600">Vena Cava</text>

      {/* Legend */}
      <rect x="30" y="400" width="14" height="12" fill="#d46060" rx="2" />
      <text x="48" y="411" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Oxygenated blood</text>
      <rect x="200" y="400" width="14" height="12" fill="#7db8c4" rx="2" />
      <text x="218" y="411" fontSize="10" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Deoxygenated blood</text>
    </svg>
  )
}
