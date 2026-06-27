import type { SVGProps } from 'react'

/** Decorative, dependency-free hero illustration: a stylised developer workspace
 *  in the site's monochrome + accent palette. Purely presentational. */
export default function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      {/* Backdrop blob */}
      <path
        d="M330 120c34 40 52 96 33 140s-77 70-131 80-122 5-156-29-39-92-14-141 80-78 134-83 100-7 134 33Z"
        fill="#000000"
        opacity="0.04"
      />

      {/* Monitor */}
      <rect x="92" y="96" width="236" height="158" rx="12" fill="#000000" />
      <rect x="104" y="108" width="212" height="134" rx="6" fill="#f5f5f5" />

      {/* Code lines */}
      <rect x="120" y="126" width="46" height="9" rx="4.5" fill="#000000" opacity="0.85" />
      <rect x="172" y="126" width="70" height="9" rx="4.5" fill="#ef4444" />
      <rect x="120" y="146" width="120" height="9" rx="4.5" fill="#000000" opacity="0.15" />
      <rect x="136" y="166" width="92" height="9" rx="4.5" fill="#000000" opacity="0.15" />
      <rect x="136" y="186" width="140" height="9" rx="4.5" fill="#000000" opacity="0.3" />
      <rect x="120" y="206" width="58" height="9" rx="4.5" fill="#ef4444" opacity="0.7" />
      <rect x="184" y="206" width="40" height="9" rx="4.5" fill="#000000" opacity="0.15" />

      {/* Stand */}
      <rect x="196" y="254" width="28" height="26" fill="#000000" />
      <rect x="160" y="280" width="100" height="12" rx="6" fill="#000000" />

      {/* Floating brackets (AI/code motif) */}
      <text x="60" y="80" fontFamily="monospace" fontSize="34" fontWeight="700" fill="#000000" opacity="0.18">
        {'</>'}
      </text>
      <circle cx="338" cy="300" r="26" fill="#ef4444" opacity="0.9" />
      <text x="338" y="308" textAnchor="middle" fontFamily="monospace" fontSize="22" fontWeight="700" fill="#f5f5f5">
        AI
      </text>
      <circle cx="78" cy="300" r="14" fill="#000000" />
      <circle cx="356" cy="120" r="8" fill="#000000" opacity="0.5" />
    </svg>
  )
}
