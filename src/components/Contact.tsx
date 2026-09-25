import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from './motionVariants'
import { contact, profile } from '../data/resume'

export default function Contact() {
  return (
    <Section
      id="contact"
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-28 text-center"
    >
      <motion.div variants={fadeUp}>
        <p className="label-mono mb-3 text-sm text-accent uppercase">Contact</p>
        <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Let&apos;s build something <span className="text-accent">together</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          I&apos;m always open to new opportunities and interesting projects. Feel free to reach out.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/40 hover:bg-surface"
          >
            GitHub
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/40 hover:bg-surface"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-20 text-sm text-muted/70">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </motion.p>
    </Section>
  )
}
