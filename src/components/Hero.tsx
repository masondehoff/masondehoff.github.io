import { motion, type Variants } from 'framer-motion'
import { scrollToSection } from '../lib/scrollToSection'
import { contact, profile } from '../data/resume'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="top" className="snap-section relative flex min-h-screen items-center px-6 pt-24">
      <motion.div
        className="mx-auto w-full max-w-5xl"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="label-mono mb-5 text-sm text-accent uppercase">
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.h2 variants={item} className="mt-3 text-2xl font-semibold tracking-tight text-accent sm:text-3xl md:text-4xl">
          {profile.title}
        </motion.h2>

        <motion.p variants={item} className="mt-6 max-w-xl text-lg text-muted">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('projects')
            }}
            className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent/40 hover:bg-surface"
          >
            Get In Touch
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
          >
            @{contact.githubHandle} on GitHub
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-9 w-6 rounded-full border border-border p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
