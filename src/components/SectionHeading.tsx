import { motion } from 'framer-motion'
import { fadeUp } from './motionVariants'

interface SectionHeadingProps {
  kicker: string
  title: string
}

export default function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} className="mb-12">
      <p className="label-mono mb-3 text-sm text-accent uppercase">{kicker}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-8 bg-accent" />
    </motion.div>
  )
}
