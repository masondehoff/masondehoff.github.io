import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from './motionVariants'
import SectionHeading from './SectionHeading'
import { profile } from '../data/resume'

export default function About() {
  return (
    <Section id="about" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-28">
      <SectionHeading kicker="About" title="A bit about me" />
      <motion.div variants={fadeUp} className="max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
        <p className="mt-4 text-sm text-muted/70">Based in {profile.location}</p>
      </motion.div>
    </Section>
  )
}
