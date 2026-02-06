export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Modern tech background */}
      <rect width="40" height="40" rx="6" fill="currentColor" className="text-primary"/>

      {/* Abstract "D" and "G" letterforms merged with network/data symbol */}
      <g transform="translate(20, 20)">
        {/* Outer ring - representing global connectivity */}
        <circle
          cx="0"
          cy="0"
          r="11"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />

        {/* Inner geometric shape - abstract D/G letterform */}
        <path
          d="M -6 -8 L -6 8 L 0 8 C 4.5 8 8 4.5 8 0 C 8 -4.5 4.5 -8 0 -8 Z"
          fill="white"
          opacity="0.9"
        />

        {/* Tech accent - data/network nodes */}
        <circle cx="-8" cy="-8" r="1.5" fill="#60D5FF" opacity="0.8"/>
        <circle cx="8" cy="-8" r="1.5" fill="#60D5FF" opacity="0.8"/>
        <circle cx="8" cy="8" r="1.5" fill="#60D5FF" opacity="0.8"/>

        {/* Connection lines - representing network */}
        <line x1="-8" y1="-8" x2="-3" y2="-3" stroke="white" strokeWidth="1" opacity="0.4"/>
        <line x1="8" y1="-8" x2="3" y2="-3" stroke="white" strokeWidth="1" opacity="0.4"/>
        <line x1="8" y1="8" x2="3" y2="3" stroke="white" strokeWidth="1" opacity="0.4"/>
      </g>

      {/* Minimal corner accents */}
      <rect x="2" y="2" width="4" height="4" rx="1" fill="white" opacity="0.15"/>
      <rect x="34" y="34" width="4" height="4" rx="1" fill="white" opacity="0.15"/>
    </svg>
  )
}
