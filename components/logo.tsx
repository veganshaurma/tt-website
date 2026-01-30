export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="currentColor" className="text-primary"/>
      <rect x="13" y="10" width="4" height="20" rx="2" fill="white"/>
      <rect x="13" y="10" width="14" height="4" rx="2" fill="white"/>
      <rect x="13" y="18" width="11" height="4" rx="2" fill="white"/>
      <circle cx="28" cy="28" r="2" fill="white"/>
      <circle cx="23" cy="28" r="1" fill="white" opacity="0.6"/>
    </svg>
  )
}
