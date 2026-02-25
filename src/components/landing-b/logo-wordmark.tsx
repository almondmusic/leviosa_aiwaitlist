export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-0 ${className}`}>
      <span className="text-lg font-bold tracking-tight text-foreground">
        {"Leviosa"}
      </span>
      <span className="relative ml-1.5">
        <span className="text-lg font-bold tracking-tight text-foreground">
          {"AI"}
        </span>
        {/* Two L-shaped chevrons pointing up-right, stacked diagonally */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-3.5 -right-2.5 h-[16px] w-[16px]"
          aria-hidden="true"
        >
          {/* Bottom chevron – lighter lavender: horizontal right then vertical up */}
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
      </span>
    </span>
  )
}
