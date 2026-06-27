import { SKILL_GROUPS } from '../../constants'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="What I work with" solid="My" outline="Skills" className="mb-12" />
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-zinc-150 bg-white p-6 transition-shadow hover:shadow-md hover:shadow-ink/5">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-ink/50">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream px-3 py-1.5 text-sm font-medium text-ink/80"
                    >
                      {skill.icon && <span aria-hidden="true">{skill.icon}</span>}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
