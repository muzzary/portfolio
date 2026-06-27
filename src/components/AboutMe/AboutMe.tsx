import { ABOUT_PARAGRAPHS, EXPERIENCE } from '../../constants'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'

export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        {/* Left: heading + portrait card */}
        <Reveal>
          <SectionHeading eyebrow="Get to know me" solid="About" outline="Me" className="mb-8" />
          <div className="rounded-3xl bg-ink p-8 text-cream">
            <p className="font-display text-2xl font-bold leading-snug">
              I build and ship<span className="text-accent">.</span>
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-cream/10 pb-3">
                <dt className="text-cream/50">Based in</dt>
                <dd className="font-medium">Lahore, Pakistan</dd>
              </div>
              <div className="flex justify-between border-b border-cream/10 pb-3">
                <dt className="text-cream/50">Education</dt>
                <dd className="font-medium">BS CS, GCU Lahore</dd>
              </div>
              <div className="flex justify-between border-b border-cream/10 pb-3">
                <dt className="text-cream/50">Focus</dt>
                <dd className="font-medium">Full-Stack · AI / ML</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream/50">Availability</dt>
                <dd className="font-medium text-accent">Open to work</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        {/* Right: bio + experience timeline */}
        <div>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-ink/75">
              {ABOUT_PARAGRAPHS.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="mt-10 mb-5 text-sm font-bold uppercase tracking-widest text-ink/50">
              Experience
            </h3>
            <ol className="space-y-6 border-l border-ink/10 pl-6">
              {EXPERIENCE.map((exp) => (
                <li key={exp.company} className="relative">
                  <span className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full border-2 border-cream bg-ink" />
                  <p className="font-display font-bold">{exp.role}</p>
                  <p className="text-sm text-ink/60">
                    {exp.company} · {exp.period}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-ink/70 marker:text-accent">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
