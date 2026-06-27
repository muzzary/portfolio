import { PROJECTS } from '../../constants'
import type { Project } from '../../types'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'
import { ExternalLinkIcon, GitHubIcon } from '../UI/icons'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            solid="My"
            outline="Projects"
            onDark
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-cream/10 bg-cream/[0.03] p-7 transition-colors hover:border-cream/25">
      {/* Big faded index */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-extrabold text-cream/5"
      >
        {project.id}
      </span>

      <div className="relative">
        <h3 className="font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.meta}</p>
        <p className="mt-4 text-sm leading-relaxed text-cream/70">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.liveUrl || project.sourceUrl) && (
          <div className="mt-6 flex items-center gap-5 text-sm font-semibold">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cream transition-colors hover:text-accent"
              >
                <ExternalLinkIcon /> Live demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cream/80 transition-colors hover:text-cream"
              >
                <GitHubIcon width={18} height={18} /> Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
