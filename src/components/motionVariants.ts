import type { Variants } from 'framer-motion'

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.18, ease: 'easeOut' } },
}
