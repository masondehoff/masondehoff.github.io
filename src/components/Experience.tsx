import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from './motionVariants'
import SectionHeading from './SectionHeading'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <Section
      id="experience"
      className="mx-auto flex h-[calc(100vh-5rem)] max-w-5xl flex-col px-6 pt-28 pb-8"
    >
      <SectionHeading kicker="Experience" title="Where I've worked" />

      <div className="min-h-0 flex-1 overflow-y-auto pr-2">
        <div className="relative border-l border-border pb-4 pl-8">
          {experience.map((entry) => (
            <motion.div
              key={`${entry.organization}-${entry.role}`}
              variants={fadeUp}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="label-mono text-xs text-accent uppercase">{entry.period}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-text">{entry.role}</h3>
              <p className="text-sm font-medium text-muted">{entry.organization}</p>
              <ul className="mt-3 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.tech.map((tech) => (
                  <span key={tech} className="rounded-md bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
