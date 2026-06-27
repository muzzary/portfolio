import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  /** Word rendered with a solid fill. */
  solid: string
  /** Overlapping word rendered as outline-only (stroke, transparent fill). */
  outline: string
  /** Render the outlined word in the cream stroke (for dark backgrounds). */
  onDark?: boolean
  /** Optional small eyebrow label above the heading. */
  eyebrow?: string
  className?: string
}

/** Layered display heading: a solid word with an overlapping outlined word,
 *  matching the template's signature title style. */
export default function SectionHeading({
  solid,
  outline,
  onDark = false,
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('relative', className)}>
      {eyebrow && (
        <span
          className={cn(
            'mb-2 block text-sm font-semibold uppercase tracking-[0.25em]',
            onDark ? 'text-cream/60' : 'text-ink/50',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="relative font-display text-4xl font-extrabold leading-none sm:text-5xl md:text-6xl">
        <span className={onDark ? 'text-cream' : 'text-ink'}>{solid}</span>{' '}
        <span className={onDark ? 'text-outline-cream' : 'text-outline'}>{outline}</span>
      </h2>
    </div>
  )
}
