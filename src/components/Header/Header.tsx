import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS, RESUME_PAGE } from '../../constants'
import { useMobileMenu } from '../../contexts/MobileMenuContext'
import { cn } from '../../lib/cn'
import { buttonClasses } from '../UI/Button'
import { CloseIcon, MenuIcon } from '../UI/icons'

export default function Header() {
  const { isOpen, toggle, close } = useMobileMenu()
  const [scrolled, setScrolled] = useState(false)

  // Add a backdrop/shadow once the page is scrolled past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || isOpen ? 'border-b border-ink/5 bg-cream/85 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-xl font-extrabold tracking-tight" onClick={close}>
          Muzzary<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-ink after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to={RESUME_PAGE} className={buttonClasses('primary')}>
            Resume
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-ink/5 bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden',
          isOpen ? 'max-h-96 border-b' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-3 pt-2">
            <Link
              to={RESUME_PAGE}
              onClick={close}
              className={buttonClasses('primary', 'w-full')}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
