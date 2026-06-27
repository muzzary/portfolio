import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in seconds. */
  delay?: number
  /** Travel distance in px before settling. */
  y?: number
  className?: string
}

/** Fades + slides its children in once, when scrolled into view.
 *  Respects the user's reduced-motion preference via Framer/Motion defaults. */
export default function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
