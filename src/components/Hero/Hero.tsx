import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'
import { HERO, SOCIALS } from '../../constants'
import Button from '../UI/Button'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../UI/icons'
import HeroIllustration from './HeroIllustration'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Copy */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-3 text-lg font-medium text-ink/60"
          >
            {HERO.greeting}
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {HERO.name}
          </motion.h1>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-3 flex min-h-[2.5rem] items-center font-display text-2xl font-bold text-accent sm:text-3xl"
          >
            <span className="mr-2 text-ink/40">I&apos;m</span>
            <TypeAnimation
              sequence={HERO.roles}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              cursor
              aria-label="Roles: Software Engineer, Full-Stack Developer, AI/ML Engineer"
            />
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/70"
          >
            {HERO.bio}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects">View my work</Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
          </motion.div>

          <motion.ul
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex items-center gap-4"
          >
            <SocialLink href={SOCIALS.github} label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href={SOCIALS.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href={`mailto:${SOCIALS.email}`} label="Email" external={false}>
              <MailIcon />
            </SocialLink>
          </motion.ul>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="order-first md:order-last"
        >
          <HeroIllustration className="mx-auto w-full max-w-sm md:max-w-md" />
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({
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
    <li>
      <a
        href={href}
        aria-label={label}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink/70 transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-cream"
      >
        {children}
      </a>
    </li>
  )
}
