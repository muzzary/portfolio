import { FaRocket, FaLaptopCode } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { EXPERIENCE } from '../../constants'
import type { Experience as ExperienceType } from '../../types'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'

const BADGE_ICONS: Record<NonNullable<ExperienceType['icon']>, IconType> = {
  rocket: FaRocket,
  freelance: FaLaptopCode,
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-ink py-20 text-cream md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-14 flex justify-center">
          <SectionHeading
            eyebrow="Where I've worked"
            solid="My"
            outline="Experience"
            onDark
            className="text-center"
          />
        </Reveal>

        <div className="relative">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company}>
              {/* Center connector between cards */}
              {i > 0 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <span className="relative h-8 w-px bg-cream/15">
                    <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-cream" />
                  </span>
                </div>
              )}

              <Reveal delay={i * 0.08}>
                <ExperienceCard exp={exp} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp }: { exp: ExperienceType }) {
  const Icon = exp.icon ? BADGE_ICONS[exp.icon] : FaLaptopCode

  return (
    <article className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 transition-colors hover:border-cream/25 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl text-cream"
            style={{ backgroundColor: exp.accent ?? '#ef4444' }}
          >
            <Icon aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold leading-tight">{exp.role}</h3>
            <p className="text-sm text-cream/60">{exp.company}</p>
          </div>
        </div>
        <span className="shrink-0 text-sm font-semibold text-cream/70 sm:pt-1">{exp.period}</span>
      </div>

      <ul className="mt-4 space-y-2 pl-1">
        {exp.highlights.map((h, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-cream/75">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
    </article>
  )
}
