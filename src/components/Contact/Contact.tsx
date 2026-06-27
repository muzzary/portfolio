import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { SOCIALS } from '../../constants'
import Button from '../UI/Button'
import Reveal from '../UI/Reveal'
import SectionHeading from '../UI/SectionHeading'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../UI/icons'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/** True only when all three EmailJS credentials are present at build time. */
const EMAILJS_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current || status === 'sending') return

    // If keys aren't configured, fall back to the user's mail client.
    if (!EMAILJS_CONFIGURED) {
      const data = new FormData(formRef.current)
      const subject = encodeURIComponent(String(data.get('subject') ?? 'Portfolio enquiry'))
      const body = encodeURIComponent(
        `${data.get('message') ?? ''}\n\nFrom: ${data.get('name') ?? ''} (${data.get('email') ?? ''})`,
      )
      window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Left: invitation + direct links */}
        <Reveal>
          <SectionHeading eyebrow="Contact" solid="Let's talk for" outline="something special" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
            Have a role, project, or idea in mind? I&apos;m open to full-time roles, internships, and
            remote freelance work. Drop me a message and I&apos;ll get back to you.
          </p>

          <ul className="mt-8 space-y-4">
            <ContactRow
              href={`mailto:${SOCIALS.email}`}
              icon={<MailIcon />}
              label={SOCIALS.email}
              external={false}
            />
            <ContactRow href={SOCIALS.linkedin} icon={<LinkedInIcon />} label="linkedin.com/in/muzzarybabar" />
            <ContactRow href={SOCIALS.github} icon={<GitHubIcon />} label="github.com/muzzary" />
          </ul>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-zinc-150 bg-white p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" autoComplete="name" />
              <Field label="Email" name="email" type="email" autoComplete="email" />
            </div>
            <Field label="Subject" name="subject" type="text" className="mt-4" />
            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink/70">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-ink focus:bg-white"
              />
            </div>

            <Button type="submit" className="mt-6 w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Get In Touch'}
            </Button>

            <p role="status" aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
              {status === 'success' && (
                <span className="font-medium text-ink">Thanks! Your message has been sent. ✅</span>
              )}
              {status === 'error' && <span className="font-medium text-accent">{errorMsg}</span>}
              {status === 'idle' && !EMAILJS_CONFIGURED && (
                <span className="text-ink/40">Submitting opens your email client.</span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  autoComplete,
  className,
}: {
  label: string
  name: string
  type: string
  autoComplete?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm outline-none transition-colors focus:border-ink focus:bg-white"
      />
    </div>
  )
}

function ContactRow({
  href,
  icon,
  label,
  external = true,
}: {
  href: string
  icon: React.ReactNode
  label: string
  external?: boolean
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group inline-flex items-center gap-3 text-ink/80 transition-colors hover:text-ink"
      >
        <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
          {icon}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </a>
    </li>
  )
}
