import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'outline'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ' +
  'transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 ' +
  'focus-visible:ring-ink/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ' +
  'disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-cream hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/20',
  outline: 'border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream',
}

interface CommonProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

/** Anchor variant: rendered when an `href` is provided. */
type ButtonAsLink = CommonProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof CommonProps | 'href'
  >

/** Native button variant. */
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof CommonProps
  >

type ButtonProps = ButtonAsLink | ButtonAsButton

/** Polymorphic pill button: renders an <a> when `href` is set, otherwise a <button>. */
export default function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
