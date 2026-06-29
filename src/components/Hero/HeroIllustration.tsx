import type { SVGProps } from 'react'

/** Original flat, monochrome illustration of a seated developer working on a
 *  laptop. Dependency-free and purely decorative (aria-hidden). */
export default function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  const ink = '#000000'
  const cream = '#f5f5f5'
  const accent = '#ef4444'

  return (
    <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      {/* Backdrop */}
      <circle cx="232" cy="210" r="185" fill={ink} opacity="0.04" />
      <circle cx="232" cy="210" r="185" stroke={ink} strokeOpacity="0.06" strokeWidth="2" strokeDasharray="4 10" />

      {/* Ground line */}
      <line x1="70" y1="402" x2="392" y2="402" stroke={ink} strokeWidth="3" strokeLinecap="round" />

      {/* Seat */}
      <ellipse cx="232" cy="338" rx="74" ry="26" fill={ink} />

      {/* Legs (light trousers) */}
      <path d="M196,316 L178,392 L214,392 L224,318 Z" fill={cream} stroke={ink} strokeWidth="4" strokeLinejoin="round" />
      <path d="M268,316 L286,392 L250,392 L240,318 Z" fill={cream} stroke={ink} strokeWidth="4" strokeLinejoin="round" />

      {/* Shoes */}
      <rect x="166" y="388" width="54" height="16" rx="8" fill={ink} />
      <rect x="244" y="388" width="54" height="16" rx="8" fill={ink} />

      {/* Torso / jacket (broad shoulders) */}
      <path d="M166,188 Q232,154 298,188 L300,316 L164,316 Z" fill={ink} />
      {/* Collar accent */}
      <path d="M214,168 L232,196 L250,168" stroke={cream} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="232" y1="196" x2="232" y2="300" stroke={cream} strokeOpacity="0.25" strokeWidth="3" />

      {/* Neck */}
      <rect x="222" y="138" width="20" height="26" rx="8" fill={cream} stroke={ink} strokeWidth="4" />

      {/* Head */}
      <circle cx="232" cy="112" r="38" fill={cream} stroke={ink} strokeWidth="4" />
      {/* Ears */}
      <circle cx="195" cy="115" r="6" fill={cream} stroke={ink} strokeWidth="3" />
      <circle cx="269" cy="115" r="6" fill={cream} stroke={ink} strokeWidth="3" />
      {/* Short, textured masculine hair */}
      <path d="M194,104 Q190,66 214,67 Q224,57 236,65 Q250,60 258,71 Q272,76 270,104 Q262,82 232,82 Q204,82 194,104 Z" fill={ink} />
      {/* Eyebrows */}
      <path d="M211,101 Q219,97 227,101" stroke={ink} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M237,101 Q245,97 253,101" stroke={ink} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Eyes */}
      <circle cx="219" cy="110" r="3" fill={ink} />
      <circle cx="245" cy="110" r="3" fill={ink} />
      {/* Nose */}
      <path d="M232,114 L228,127 Q232,130 236,127" stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Full beard + mustache */}
      <path d="M197,116 Q195,142 210,156 Q221,166 232,166 Q243,166 254,156 Q269,142 267,116 Q259,140 232,142 Q205,140 197,116 Z" fill={ink} />
      <path d="M219,133 Q232,139 245,133 Q239,129 232,130 Q225,129 219,133 Z" fill={ink} />

      {/* Arms reaching to the laptop */}
      <path d="M174,202 Q146,252 184,300 L204,296 Q176,252 196,210 Z" fill={ink} />
      <path d="M290,202 Q318,252 280,300 L260,296 Q288,252 268,210 Z" fill={ink} />

      {/* Laptop on the lap */}
      <path d="M150,326 L314,326 L300,344 L164,344 Z" fill={ink} />
      <rect x="170" y="262" width="124" height="66" rx="8" fill={ink} stroke={cream} strokeWidth="3" />
      <circle cx="232" cy="295" r="9" fill={accent} />

      {/* Plant */}
      <path d="M372,392 L364,356 L392,356 L384,392 Z" fill={ink} />
      <path d="M378,356 Q360,332 366,312 Q380,330 378,356" fill={ink} />
      <path d="M378,356 Q396,332 390,312 Q376,330 378,356" fill={accent} opacity="0.9" />

      {/* Floating accents */}
      <text x="78" y="150" fontFamily="monospace" fontSize="30" fontWeight="700" fill={ink} opacity="0.18">
        {'</>'}
      </text>
      <circle cx="96" cy="300" r="9" fill={ink} opacity="0.5" />
      <circle cx="372" cy="170" r="6" fill={accent} />
    </svg>
  )
}
