"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

interface WaitlistContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const WaitlistContext = createContext<WaitlistContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
})

export function useWaitlist() {
  return useContext(WaitlistContext)
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <WaitlistContext.Provider value={{ isOpen, open, close }}>
      {children}
    </WaitlistContext.Provider>
  )
}
