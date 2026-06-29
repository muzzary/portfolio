import { SKILLS } from '../../constants'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'
import { getSkillIcon } from './skillIcons'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12 flex justify-center">
          <SectionHeading eyebrow="What I work with" solid="My" outline="Skills" className="text-center" />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((skill, i) => {
            const Icon = getSkillIcon(skill.icon)
            return (
              <Reveal key={skill.name} delay={(i % 6) * 0.05}>
                <div className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border-2 border-ink/15 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-lg hover:shadow-ink/5">
                  <Icon
                    aria-hidden="true"
                    className="text-4xl text-ink transition-transform duration-200 group-hover:scale-110 sm:text-5xl"
                  />
                  <span className="px-2 text-center text-sm font-semibold text-ink/80">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
