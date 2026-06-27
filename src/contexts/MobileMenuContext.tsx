import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface MobileMenuValue {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const MobileMenuContext = createContext<MobileMenuValue | null>(null)

/** Holds the open/close state for the mobile navigation menu. */
export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  const value = useMemo<MobileMenuValue>(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
  )

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>
}

/** Access the mobile-menu state. Throws if used outside the provider. */
export function useMobileMenu(): MobileMenuValue {
  const ctx = useContext(MobileMenuContext)
  if (!ctx) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider')
  }
  return ctx
}
