export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="currentColor" className="text-primary"/>
      <path 
        d="M20 8L12 16V28C12 28.5304 12.2107 29.0391 12.5858 29.4142C12.9609 29.7893 13.4696 30 14 30H26C26.5304 30 27.0391 29.7893 27.4142 29.4142C27.7893 29.0391 28 28.5304 28 28V16L20 8Z" 
        fill="white"
        opacity="0.2"
      />
      <path 
        d="M16 13V11C16 10.4477 16.4477 10 17 10H23C23.5523 10 24 10.4477 24 11V13" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <line x1="17" y1="13" x2="17" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="13" x2="20" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="23" y1="13" x2="23" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path 
        d="M16 26C16 26 17 28 20 28C23 28 24 26 24 26" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="32" r="2" fill="white"/>
    </svg>
  )
}
