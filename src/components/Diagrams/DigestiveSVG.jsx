// Human Digestive System — simplified body cross-section
export default function DigestiveSVG() {
  return (
    <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Human digestive system diagram" role="img">
      <defs>
        <radialGradient id="bodyBg" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#f5f0e8" />
          <stop offset="100%" stopColor="#ede5d8" />
        </radialGradient>
        <radialGradient id="stomachGrad" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#d4eebc" />
          <stop offset="100%" stopColor="#a8d88a" />
        </radialGradient>
      </defs>

      {/* ── Body silhouette ── */}
      {/* Torso */}
      <rect x="148" y="90" width="204" height="290" rx="28" fill="url(#bodyBg)" stroke="#c8b89a" strokeWidth="2.5" />
      {/* Shoulders/neck area */}
      <rect x="176" y="58" width="148" height="48" rx="18" fill="url(#bodyBg)" stroke="#c8b89a" strokeWidth="2" />
      {/* Head */}
      <ellipse cx="250" cy="38" rx="38" ry="30" fill="#f5f0e8" stroke="#c8b89a" strokeWidth="2" />

      {/* ── Oesophagus ── */}
      <path d="M250,64 L250,108" stroke="#5c8f6e" strokeWidth="11" strokeLinecap="round" />
      <path d="M250,64 L250,108" stroke="#7db88a" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

      {/* ── Liver (right side of body = left side of diagram) ── */}
      <path
        d="M164,118 C152,128 148,158 158,180 C168,202 194,210 218,206 C234,202 242,192 240,178 C238,158 228,132 218,122 C206,112 176,108 164,118 Z"
        fill="#c8a870" stroke="#8a6a40" strokeWidth="2.2"
      />
      {/* Liver highlight */}
      <path d="M168,130 C164,148 166,168 174,182" fill="none" stroke="#e8c890" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

      {/* ── Stomach ── */}
      <path
        d="M238,118 C254,112 272,116 282,134 C294,154 294,186 284,202 C274,218 254,222 238,216 C222,210 214,196 216,178 C218,158 228,126 238,118 Z"
        fill="url(#stomachGrad)" stroke="#4a7c59" strokeWidth="2.2"
      />
      {/* Stomach folds */}
      <path d="M226,148 Q248,140 268,152" fill="none" stroke="#3d6b4f" strokeWidth="1.4" opacity="0.5" strokeLinecap="round" />
      <path d="M222,164 Q246,156 266,168" fill="none" stroke="#3d6b4f" strokeWidth="1.4" opacity="0.5" strokeLinecap="round" />
      <path d="M224,180 Q246,172 264,182" fill="none" stroke="#3d6b4f" strokeWidth="1.4" opacity="0.45" strokeLinecap="round" />

      {/* ── Pancreas ── */}
      <ellipse cx="216" cy="232" rx="52" ry="14" fill="#e8c8a0" stroke="#a08050" strokeWidth="1.8" transform="rotate(-8 216 232)" />

      {/* ── Small intestine (coiled, centre) ── */}
      <path
        d="M252,228 C276,228 286,242 282,258 C278,274 260,278 244,272 C228,266 220,252 228,238 C236,226 256,224 268,234 C280,244 282,262 270,272 C258,282 238,280 226,268 C214,256 216,238 228,232"
        fill="none" stroke="#7db88a" strokeWidth="10" strokeLinecap="round"
      />
      <path
        d="M252,228 C276,228 286,242 282,258 C278,274 260,278 244,272 C228,266 220,252 228,238 C236,226 256,224 268,234 C280,244 282,262 270,272 C258,282 238,280 226,268 C214,256 216,238 228,232"
        fill="none" stroke="#5c8f6e" strokeWidth="5" strokeLinecap="round" opacity="0.5"
      />

      {/* ── Large intestine (frames small intestine) ── */}
      {/* Ascending (right side of body = left of diagram) */}
      <path d="M180,296 L180,246 Q180,228 198,228 L216,228" fill="none" stroke="#a8c898" strokeWidth="16" strokeLinecap="round" />
      {/* Transverse */}
      <path d="M180,246 Q180,220 196,216 L300,216 Q318,216 318,234 L318,246" fill="none" stroke="#a8c898" strokeWidth="16" strokeLinecap="round" />
      {/* Descending (left of body = right of diagram) */}
      <path d="M318,246 L318,296" fill="none" stroke="#a8c898" strokeWidth="16" strokeLinecap="round" />
      {/* Sigmoid */}
      <path d="M318,296 Q318,316 298,320 Q278,324 264,316 Q250,308 250,328" fill="none" stroke="#a8c898" strokeWidth="16" strokeLinecap="round" />
      {/* Large intestine inner */}
      <path d="M180,296 L180,246 Q180,228 198,228 L216,228" fill="none" stroke="#c8dcc0" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
      <path d="M318,246 L318,296" fill="none" stroke="#c8dcc0" strokeWidth="8" strokeLinecap="round" opacity="0.6" />

      {/* ── Rectum ── */}
      <path d="M250,328 L250,368 Q250,384 250,395" stroke="#8ab89a" strokeWidth="14" strokeLinecap="round" />
      <path d="M250,328 L250,395" stroke="#b5d5c5" strokeWidth="6" strokeLinecap="round" opacity="0.6" />

      {/* ── Mouth ── */}
      <ellipse cx="250" cy="38" rx="16" ry="10" fill="#f0c8b0" stroke="#8a6850" strokeWidth="1.5" />
      <path d="M238,40 Q250,46 262,40" fill="none" stroke="#8a5840" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Labels ── */}
      <text x="250" y="18" textAnchor="middle" fontSize="10" fill="#5a4030" fontFamily="DM Sans, sans-serif" fontWeight="700">Mouth</text>

      {/* Oesophagus label */}
      <line x1="275" y1="86" x2="300" y2="78" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="302" y="76" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Oesophagus</text>

      {/* Liver label */}
      <line x1="164" y1="158" x2="138" y2="158" stroke="#8a6a40" strokeWidth="1.2" />
      <text x="56" y="162" fontSize="9.5" fill="#6a4a20" fontFamily="DM Sans, sans-serif" fontWeight="600">Liver</text>

      {/* Stomach label */}
      <line x1="290" y1="162" x2="330" y2="152" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="332" y="156" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Stomach</text>

      {/* Pancreas label */}
      <line x1="178" y1="234" x2="138" y2="240" stroke="#a08050" strokeWidth="1.2" />
      <text x="52" y="244" fontSize="9.5" fill="#7a5a30" fontFamily="DM Sans, sans-serif" fontWeight="600">Pancreas</text>

      {/* Small intestine label */}
      <line x1="254" y1="258" x2="340" y2="268" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="342" y="272" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Small intestine</text>

      {/* Large intestine label */}
      <line x1="180" y1="296" x2="138" y2="296" stroke="#6a9a5a" strokeWidth="1.2" />
      <text x="52" y="300" fontSize="9.5" fill="#4a7a3a" fontFamily="DM Sans, sans-serif" fontWeight="600">Large intestine</text>

      {/* Rectum label */}
      <line x1="257" y1="368" x2="330" y2="375" stroke="#4a7c59" strokeWidth="1.2" />
      <text x="332" y="379" fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="600">Rectum</text>

      {/* Direction arrow */}
      <text x="460" y="200" fontSize="9" fill="#5c8f6e" fontFamily="DM Sans, sans-serif" opacity="0.7">↓</text>
      <text x="454" y="212" fontSize="8" fill="#5c8f6e" fontFamily="DM Sans, sans-serif" opacity="0.7">food</text>
      <text x="453" y="222" fontSize="8" fill="#5c8f6e" fontFamily="DM Sans, sans-serif" opacity="0.7">flow</text>
    </svg>
  )
}
