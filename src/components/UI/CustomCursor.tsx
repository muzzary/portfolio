import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import { useMediaQuery } from '../../hooks/useMediaQuery'

/** A circular cursor using `mix-blend-mode: exclusion` that follows the pointer
 *  and scales up over interactive elements. Disabled on touch / coarse pointers
 *  and when the user prefers reduced motion. */
export default function CustomCursor() {
  const isFinePointer = useMediaQuery('(pointer: fine)')
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const enabled = isFinePointer && !prefersReducedMotion

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement | null
      setHovering(Boolean(target?.closest('a, button, input, textarea, [role="button"]')))
    }

    document.documentElement.classList.add('cursor-none-all')
    window.addEventListener('pointermove', move)
    return () => {
      document.documentElement.classList.remove('cursor-none-all')
      window.removeEventListener('pointermove', move)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-white"
      style={{
        x: springX,
        y: springY,
        mixBlendMode: 'exclusion',
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ width: hovering ? 48 : 20, height: hovering ? 48 : 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    />
  )
}
