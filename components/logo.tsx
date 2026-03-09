export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="6" fill="currentColor" className="text-primary"/>
      {/* First T */}
      <rect x="4" y="9" width="14" height="3.5" rx="1" fill="white" opacity="0.95"/>
      <rect x="9.25" y="12.5" width="3.5" height="18.5" rx="1" fill="white" opacity="0.95"/>
      {/* Second T */}
      <rect x="22" y="9" width="14" height="3.5" rx="1" fill="white" opacity="0.95"/>
      <rect x="27.25" y="12.5" width="3.5" height="18.5" rx="1" fill="white" opacity="0.95"/>
    </svg>
  )
}
