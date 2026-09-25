import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { stagger } from './motionVariants'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`snap-section ${className}`}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      {children}
    </motion.section>
  )
}
