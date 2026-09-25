import { motion } from 'framer-motion'
import Section from './Section'
import { fadeUp } from './motionVariants'
import SectionHeading from './SectionHeading'
import { projects, type Project } from '../data/resume'

const cardClass =
  'group block h-full rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40'

function ProjectCardContent({ project }: { project: Project }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-text">{project.name}</h3>
        {project.href && (
          <span className="mt-1 text-muted transition-colors group-hover:text-accent" aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-28">
      <SectionHeading kicker="Projects" title="Things I've built" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) =>
          project.href ? (
            <motion.a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className={cardClass}
            >
              <ProjectCardContent project={project} />
            </motion.a>
          ) : (
            <motion.div key={project.name} variants={fadeUp} className={cardClass}>
              <ProjectCardContent project={project} />
            </motion.div>
          ),
        )}
      </div>
    </Section>
  )
}
