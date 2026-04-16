export default function BrainSVG() {
  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Human brain diagram" role="img">
      <defs>
        <radialGradient id="brainBase" cx="42%" cy="38%">
          <stop offset="0%" stopColor="#eef7ec" />
          <stop offset="100%" stopColor="#d4edd4" />
        </radialGradient>
      </defs>

      {/* ── Main cerebrum outline ── */}
      <path
        d="M90,215 C82,148 96,84 148,52 C200,20 272,16 338,34 C404,52 454,102 460,170 C466,238 448,304 408,334 C368,364 310,370 250,362 C190,354 134,330 106,292 C86,268 98,252 90,215 Z"
        fill="url(#brainBase)"
        stroke="#4a7c59"
        strokeWidth="3"
      />

      {/* ── Lobe colored overlays ── */}
      {/* Frontal lobe — front-left */}
      <path
        d="M90,215 C82,148 96,84 148,52 C178,34 216,22 248,20 C232,68 222,118 220,172 C218,204 202,242 178,264 C148,280 112,280 106,292 C86,268 98,252 90,215 Z"
        fill="#b5d5c5" opacity="0.55"
      />
      {/* Parietal lobe — top-middle */}
      <path
        d="M248,20 C296,16 342,30 372,56 C385,66 388,96 382,128 C376,158 354,178 332,192 C312,205 282,210 260,205 C236,200 220,184 220,172 C222,118 232,68 248,20 Z"
        fill="#c8e4b5" opacity="0.5"
      />
      {/* Occipital lobe — back */}
      <path
        d="M372,56 C426,90 458,148 460,220 C462,268 444,312 408,334 C388,346 365,352 346,349 C326,346 308,336 305,320 C330,300 356,260 360,218 C364,178 362,112 372,56 Z"
        fill="#a8c8a8" opacity="0.55"
      />
      {/* Temporal lobe — lower front */}
      <path
        d="M178,264 C188,282 206,322 250,362 C190,354 134,330 106,292 C112,280 148,280 178,264 Z"
        fill="#c4dcc4" opacity="0.6"
      />

      {/* ── Sulci (fold lines) ── */}
      {/* Central sulcus — separates frontal / parietal */}
      <path d="M258,22 C252,76 240,138 226,192" fill="none" stroke="#4a7c59" strokeWidth="2.2" opacity="0.5" strokeLinecap="round" />
      {/* Lateral fissure */}
      <path d="M112,222 C155,208 202,202 240,204" fill="none" stroke="#4a7c59" strokeWidth="2.2" opacity="0.5" strokeLinecap="round" />
      {/* Parieto-occipital sulcus */}
      <path d="M364,58 C368,122 370,194 364,242" fill="none" stroke="#4a7c59" strokeWidth="2" opacity="0.48" strokeLinecap="round" />
      {/* Extra surface folds */}
      <path d="M178,76 C196,118 206,158 204,182" fill="none" stroke="#5c8f6e" strokeWidth="1.4" opacity="0.38" strokeLinecap="round" />
      <path d="M316,42 C324,90 328,148 320,188" fill="none" stroke="#5c8f6e" strokeWidth="1.4" opacity="0.38" strokeLinecap="round" />
      <path d="M130,148 C154,163 178,166 198,158" fill="none" stroke="#5c8f6e" strokeWidth="1.4" opacity="0.35" strokeLinecap="round" />
      <path d="M152,286 C170,278 196,275 216,278" fill="none" stroke="#5c8f6e" strokeWidth="1.4" opacity="0.35" strokeLinecap="round" />

      {/* ── Corpus callosum (internal dashed arc) ── */}
      <path
        d="M152,196 C190,150 308,148 368,198"
        fill="none" stroke="#3d6b4f" strokeWidth="2.5" strokeDasharray="7 4" opacity="0.68"
      />

      {/* ── Cerebellum ── */}
      <ellipse cx="404" cy="356" rx="72" ry="46" fill="#d4ecc5" stroke="#4a7c59" strokeWidth="2.5" />
      {/* Cerebellum internal folds */}
      <path d="M340,356 Q372,342 404,356 Q436,370 466,356" fill="none" stroke="#5c8f6e" strokeWidth="1.6" opacity="0.6" />
      <path d="M342,344 Q374,330 406,344 Q438,358 462,344" fill="none" stroke="#5c8f6e" strokeWidth="1.4" opacity="0.5" />
      <path d="M342,368 Q374,354 406,368 Q438,382 462,368" fill="none" stroke="#5c8f6e" strokeWidth="1.4" opacity="0.5" />

      {/* ── Brainstem ── */}
      <path
        d="M242,342 C234,364 228,390 230,415 L278,415 C278,390 274,364 268,342 Z"
        fill="#8ab89a" stroke="#4a7c59" strokeWidth="2"
      />
      {/* Brainstem bands */}
      <line x1="232" y1="368" x2="277" y2="368" stroke="#6a9a7a" strokeWidth="1.5" opacity="0.6" />
      <line x1="230" y1="388" x2="278" y2="388" stroke="#6a9a7a" strokeWidth="1.5" opacity="0.6" />

      {/* ── Hypothalamus ── */}
      <ellipse cx="254" cy="292" rx="28" ry="17" fill="#7db88a" stroke="#4a7c59" strokeWidth="1.8" />

      {/* ── Labels ── */}
      <text x="150" y="154" textAnchor="middle" fontSize="11" fill="#2d5a3a" fontFamily="DM Sans, sans-serif" fontWeight="700">Frontal</text>
      <text x="150" y="168" textAnchor="middle" fontSize="11" fill="#2d5a3a" fontFamily="DM Sans, sans-serif" fontWeight="700">Lobe</text>

      <text x="294" y="82"  textAnchor="middle" fontSize="11" fill="#2d5a3a" fontFamily="DM Sans, sans-serif" fontWeight="700">Parietal Lobe</text>

      <text x="424" y="200" textAnchor="middle" fontSize="10" fill="#2d5a3a" fontFamily="DM Sans, sans-serif" fontWeight="700">Occipital</text>
      <text x="424" y="214" textAnchor="middle" fontSize="10" fill="#2d5a3a" fontFamily="DM Sans, sans-serif" fontWeight="700">Lobe</text>

      <text x="154" y="334" textAnchor="middle" fontSize="10" fill="#2d5a3a" fontFamily="DM Sans, sans-serif" fontWeight="700">Temporal Lobe</text>

      <text x="404" y="360" textAnchor="middle" fontSize="10" fill="#2d5030" fontFamily="DM Sans, sans-serif" fontWeight="600">Cerebellum</text>

      <text x="254" y="296" textAnchor="middle" fontSize="8.5" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="600">Hypothalamus</text>

      <text x="254" y="418" textAnchor="middle" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Brainstem</text>

      {/* Corpus callosum label */}
      <text x="258" y="148" textAnchor="middle" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" opacity="0.82">Corpus Callosum</text>
    </svg>
  )
}
