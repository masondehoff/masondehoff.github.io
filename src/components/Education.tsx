import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from './motionVariants'
import SectionHeading from './SectionHeading'
import { education } from '../data/resume'

export default function Education() {
  return (
    <Section id="education" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-28">
      <SectionHeading kicker="Education" title="Academic background" />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((entry) => (
          <motion.div
            key={entry.institution}
            variants={fadeUp}
            className="h-full rounded-lg border border-border bg-surface p-6"
          >
            <p className="label-mono text-xs text-accent uppercase">{entry.period}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-text">{entry.institution}</h3>
            <p className="text-sm font-medium text-muted">{entry.credential}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{entry.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
