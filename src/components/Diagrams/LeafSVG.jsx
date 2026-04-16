export default function LeafSVG() {
  // Layer boundaries (y positions)
  const cuticleTop = 38
  const cuticleBot = 48
  const upperEpiTop = 48
  const upperEpiBot = 68
  const palisadeTop = 68
  const palisadeBot = 168
  const spongyTop = 168
  const spongyBot = 268
  const lowerEpiTop = 268
  const lowerEpiBot = 288
  const cuticle2Bot = 298

  return (
    <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }} aria-label="Leaf cross-section diagram" role="img">
      <defs>
        <linearGradient id="cuticleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4e8c2" />
          <stop offset="100%" stopColor="#b8d89a" />
        </linearGradient>
        <linearGradient id="epiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8e8b0" />
          <stop offset="100%" stopColor="#a8d88a" />
        </linearGradient>
        <linearGradient id="palisadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a9c60" />
          <stop offset="100%" stopColor="#3d8050" />
        </linearGradient>
        <linearGradient id="spongyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7db88a" />
          <stop offset="100%" stopColor="#5c9f6e" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="50" y="30" width="400" height="270" fill="#f5f0e8" rx="4" />

      {/* Cuticle top */}
      <rect x="50" y={cuticleTop} width="400" height={cuticleBot - cuticleTop} fill="url(#cuticleGrad)" opacity="0.85" />

      {/* Upper epidermis */}
      <rect x="50" y={upperEpiTop} width="400" height={upperEpiBot - upperEpiTop} fill="url(#epiGrad)" />
      {/* Upper epidermal cells */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <rect key={`ue-${i}`} x={50 + i * 40} y={upperEpiTop} width="39" height={upperEpiBot - upperEpiTop} fill="none" stroke="#5c8f6e" strokeWidth="1" />
      ))}

      {/* Palisade mesophyll cells — tall rectangles */}
      <rect x="50" y={palisadeTop} width="400" height={palisadeBot - palisadeTop} fill="url(#palisadeGrad)" opacity="0.85" />
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map(i => (
        <g key={`pal-${i}`}>
          <rect
            x={50 + i * 20}
            y={palisadeTop + 2}
            width="18"
            height={palisadeBot - palisadeTop - 4}
            fill="#3d8050"
            stroke="#2d6040"
            strokeWidth="0.8"
            rx="2"
          />
          {/* Chloroplasts in palisade */}
          <ellipse cx={50 + i * 20 + 9} cy={palisadeTop + 30} rx="4" ry="6" fill="#2a5c35" opacity="0.8" />
          <ellipse cx={50 + i * 20 + 9} cy={palisadeTop + 55} rx="4" ry="6" fill="#2a5c35" opacity="0.75" />
          <ellipse cx={50 + i * 20 + 9} cy={palisadeTop + 80} rx="4" ry="6" fill="#2a5c35" opacity="0.7" />
        </g>
      ))}

      {/* Spongy mesophyll — irregular cells with air spaces */}
      <rect x="50" y={spongyTop} width="400" height={spongyBot - spongyTop} fill="#c8e8b4" />
      {/* Spongy cells — irregular blobs */}
      {[
        [60,185,30,20],[100,175,28,22],[140,188,32,18],[180,180,26,24],[220,186,30,20],[260,178,28,22],[300,185,34,18],[340,180,28,24],[380,184,30,20],[420,176,26,22],
        [70,218,32,20],[115,210,28,24],[158,218,30,18],[200,212,26,22],[242,218,32,20],[285,210,28,24],[328,216,30,18],[370,212,26,22],[410,217,28,20],
        [80,248,28,18],[124,242,30,22],[166,248,26,18],[210,244,32,20],[254,250,28,18],[298,244,30,22],[342,248,26,20],[385,244,28,18],[426,248,22,18],
      ].map(([cx, cy, rx, ry], i) => (
        <ellipse key={`sp-${i}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="#6aaa7a" stroke="#4a8a5a" strokeWidth="1" opacity="0.8" />
      ))}
      {/* Chloroplasts in spongy cells */}
      {[
        [62,183],[103,173],[183,178],[263,176],[343,178],[423,174],
        [72,216],[116,208],[202,210],[287,208],[372,210],
      ].map(([cx, cy], i) => (
        <ellipse key={`spc-${i}`} cx={cx} cy={cy} rx="5" ry="7" fill="#2a5c35" opacity="0.7" />
      ))}

      {/* Vascular bundle */}
      <ellipse cx="250" cy="218" rx="38" ry="26" fill="#d4c4a8" stroke="#8a6a40" strokeWidth="2" />
      {/* Xylem (larger, upper) */}
      {[-18,-6,6,18].map((x, i) => (
        <circle key={`xy-${i}`} cx={250 + x} cy={210} r="7" fill="#e8d8b8" stroke="#8a6a40" strokeWidth="1.5" />
      ))}
      {/* Phloem (smaller, lower) */}
      {[-12,0,12].map((x, i) => (
        <circle key={`ph-${i}`} cx={250 + x} cy={228} r="5" fill="#c8a870" stroke="#8a6a40" strokeWidth="1" />
      ))}

      {/* Lower epidermis */}
      <rect x="50" y={lowerEpiTop} width="400" height={lowerEpiBot - lowerEpiTop} fill="url(#epiGrad)" />
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <rect key={`le-${i}`} x={50 + i * 40} y={lowerEpiTop} width="39" height={lowerEpiBot - lowerEpiTop} fill="none" stroke="#5c8f6e" strokeWidth="1" />
      ))}

      {/* Lower cuticle */}
      <rect x="50" y={lowerEpiBot} width="400" height={cuticle2Bot - lowerEpiBot} fill="url(#cuticleGrad)" opacity="0.75" />

      {/* Stomata — gap in lower epidermis with guard cells */}
      {/* Main stoma at ~52% x */}
      <rect x="244" y={lowerEpiTop} width="12" height={lowerEpiBot - lowerEpiTop} fill="#c8e8b4" />
      <rect x="244" y={lowerEpiBot} width="12" height={cuticle2Bot - lowerEpiBot} fill="#c8e8b4" />
      {/* Guard cells */}
      <ellipse cx="241" cy={lowerEpiTop + 10} rx="5" ry="10" fill="#4a9c60" stroke="#2d6040" strokeWidth="1.2" />
      <ellipse cx="259" cy={lowerEpiTop + 10} rx="5" ry="10" fill="#4a9c60" stroke="#2d6040" strokeWidth="1.2" />
      {/* Arrow showing pore opening */}
      <path d={`M250 ${lowerEpiBot + 5} L250 ${lowerEpiBot + 14}`} stroke="#3d6b4f" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* Second stoma at ~30% */}
      <rect x="164" y={lowerEpiTop} width="10" height={lowerEpiBot - lowerEpiTop} fill="#c8e8b4" />
      <ellipse cx="161" cy={lowerEpiTop + 10} rx="4" ry="9" fill="#4a9c60" stroke="#2d6040" strokeWidth="1" />
      <ellipse cx="177" cy={lowerEpiTop + 10} rx="4" ry="9" fill="#4a9c60" stroke="#2d6040" strokeWidth="1" />

      {/* Labels on right side */}
      <line x1="452" y1={cuticleTop + 5} x2="470" y2={cuticleTop + 5} stroke="#5c8f6e" strokeWidth="1" />
      <text x="472" y={cuticleTop + 9} fontSize="9.5" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Cuticle</text>

      <line x1="452" y1={(upperEpiTop + upperEpiBot) / 2} x2="470" y2={(upperEpiTop + upperEpiBot) / 2} stroke="#5c8f6e" strokeWidth="1" />
      <text x="472" y={(upperEpiTop + upperEpiBot) / 2 + 4} fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Upper Epidermis</text>

      <line x1="452" y1={(palisadeTop + palisadeBot) / 2} x2="470" y2={(palisadeTop + palisadeBot) / 2} stroke="#5c8f6e" strokeWidth="1" />
      <text x="472" y={(palisadeTop + palisadeBot) / 2 + 4} fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Palisade</text>

      <line x1="452" y1={(spongyTop + spongyBot) / 2} x2="470" y2={(spongyTop + spongyBot) / 2} stroke="#5c8f6e" strokeWidth="1" />
      <text x="472" y={(spongyTop + spongyBot) / 2 + 4} fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Spongy</text>

      <line x1="452" y1={(lowerEpiTop + lowerEpiBot) / 2} x2="470" y2={(lowerEpiTop + lowerEpiBot) / 2} stroke="#5c8f6e" strokeWidth="1" />
      <text x="472" y={(lowerEpiTop + lowerEpiBot) / 2 + 4} fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Lower Epidermis</text>

      <line x1="452" y1={cuticle2Bot - 3} x2="470" y2={cuticle2Bot - 3} stroke="#5c8f6e" strokeWidth="1" />
      <text x="472" y={cuticle2Bot + 1} fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif">Cuticle</text>

      {/* Vascular bundle label */}
      <line x1="288" y1="218" x2="310" y2="202" stroke="#8a6a40" strokeWidth="1" />
      <text x="312" y="199" fontSize="9" fill="#6a4a20" fontFamily="DM Sans, sans-serif" fontWeight="500">Vascular Bundle</text>

      {/* Stomata label */}
      <text x="198" y="310" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Stomata</text>
      <line x1="220" y1="306" x2="240" y2="295" stroke="#5c8f6e" strokeWidth="1" />

      {/* Guard cell label */}
      <text x="50" y="310" fontSize="9" fill="#3d6b4f" fontFamily="DM Sans, sans-serif" fontWeight="500">Guard cells</text>
      <line x1="98" y1="306" x2="162" y2="285" stroke="#5c8f6e" strokeWidth="1" />

      {/* Sunlight arrow */}
      <text x="18" y="50" fontSize="11" fill="#e8a020" fontFamily="DM Sans, sans-serif">☀</text>
      <path d="M28 44 L28 30 L40 30" fill="none" stroke="#e8a020" strokeWidth="1.5" />
      <text x="10" y="30" fontSize="8" fill="#e8a020" fontFamily="DM Sans, sans-serif">Light</text>
    </svg>
  )
}
