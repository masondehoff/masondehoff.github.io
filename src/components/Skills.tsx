import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp, popIn, stagger } from './motionVariants'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/resume'

export default function Skills() {
  return (
    <Section id="skills" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-28">
      <SectionHeading kicker="Skills" title="What I work with" />

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={fadeUp}>
            <h3 className="label-mono mb-4 text-xs text-muted uppercase">{group.category}</h3>
            <motion.div variants={stagger} className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  variants={popIn}
                  className="rounded-md border border-border bg-surface px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-text"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
