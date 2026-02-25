export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bottom chevron – lighter lavender: right then up */}
      <path
        d="M2 20 L12 20 L12 10"
        stroke="#c4b5fd"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Top chevron – darker purple: same shape, offset up-right */}
      <path
        d="M8 14 L18 14 L18 4"
        stroke="#8b5cf6"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
