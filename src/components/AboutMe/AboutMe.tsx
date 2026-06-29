import { ABOUT_PARAGRAPHS } from '../../constants'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'

const FOCUS = [
  'Full-stack web apps (MERN) — designed, built, and deployed end to end',
  'AI / ML systems — RAG pipelines, retrieval evaluation, LLM integration',
  'Clean, tested code — REST APIs, auth, and multi-dimensional code reviews',
]

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
              What I do
            </h3>
            <ul className="space-y-3">
              {FOCUS.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
