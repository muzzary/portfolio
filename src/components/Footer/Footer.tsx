import { NAV_LINKS, SOCIALS } from '../../constants'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../UI/icons'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#hero" className="font-display text-xl font-extrabold tracking-tight">
              Muzzary<span className="text-accent">.</span>
            </a>
            <p className="mt-1 text-sm text-ink/50">Software Engineer · Full-Stack · AI / ML</p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ink/60 transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <FooterIcon href={SOCIALS.github} label="GitHub">
              <GitHubIcon width={18} height={18} />
            </FooterIcon>
            <FooterIcon href={SOCIALS.linkedin} label="LinkedIn">
              <LinkedInIcon width={18} height={18} />
            </FooterIcon>
            <FooterIcon href={`mailto:${SOCIALS.email}`} label="Email" external={false}>
              <MailIcon width={18} height={18} />
            </FooterIcon>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-ink/10 pt-6 text-center text-xs text-ink/45 sm:flex-row sm:text-left">
          <p>© {YEAR} Muzzary Babar. All rights reserved.</p>
          <p>
            Design inspired by Jhanvi Shah&apos;s Illustration Portfolio template · Built with React,
            Vite &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterIcon({
  href,
  label,
  children,
  external = true,
}: {
  href: string
  label: string
  children: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/60 transition-all hover:border-ink hover:bg-ink hover:text-cream"
    >
      {children}
    </a>
  )
}
