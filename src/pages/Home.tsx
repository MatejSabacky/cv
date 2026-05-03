import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react'

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
import { profile, skills, certifications } from '../lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-wide pt-6 sm:pt-10 pb-4 sm:pb-6">
        <div className="grid md:grid-cols-[1fr,auto] gap-12 md:gap-16 items-center">
          <div>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300 mb-5"
            >
              ✦ Senior QA Engineer · Czech Republic
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.05] text-warm-900 dark:text-cream-50"
            >
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10">{profile.name}</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent-200/70 dark:bg-accent-700/40 -z-0 -rotate-1" />
              </span>
              .
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="mt-7 text-lg sm:text-xl text-warm-700 dark:text-cream-200 leading-relaxed max-w-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/career"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-warm-900 dark:bg-cream-100 text-cream-50 dark:text-warm-900 font-medium hover:bg-accent-600 dark:hover:bg-accent-400 dark:hover:text-warm-950 transition-colors"
              >
                See my career
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-warm-300 dark:border-warm-700 text-warm-800 dark:text-cream-100 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative justify-self-center md:justify-self-end"
          >
            <div className="relative w-44 h-44 sm:w-56 sm:h-56">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-200 via-warm-200 to-accent-300 dark:from-accent-700 dark:via-warm-700 dark:to-accent-600 blur-xl opacity-60" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cream-50 dark:border-warm-900 shadow-xl">
                <img src={`${import.meta.env.BASE_URL}profile-picture.png`} alt={profile.fullName} className="w-full h-full object-cover" />
              </div>
              {/* Floating dot accent */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-accent-500 border-4 border-cream-50 dark:border-warm-950" />
            </div>
          </motion.div>
        </div>

        {/* Quick info row */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-8 pt-6 border-t border-warm-200 dark:border-warm-800 flex flex-wrap gap-x-8 gap-y-3 text-sm text-warm-600 dark:text-cream-300"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-accent-500" />
            {profile.location}
          </span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex justify-center"
        >
          <ChevronDown
            size={44}
            className="animate-bounce text-warm-400 dark:text-warm-500"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="container-prose pt-6 sm:pt-8 pb-20 sm:pb-24">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="mt-10 space-y-6">
          {profile.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-lg leading-relaxed text-warm-700 dark:text-cream-200"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="container-wide py-20 sm:py-24">
        <SectionHeading eyebrow="Skills" title="What I work with" centered />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.primary.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-cream-100/60 dark:bg-warm-900/50 border border-warm-200 dark:border-warm-800 hover:border-accent-400 dark:hover:border-accent-500 transition-colors"
            >
              <div className="font-display text-xl font-medium text-warm-900 dark:text-cream-50 mb-1">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-2 justify-center"
        >
          {skills.secondary.map((s) => (
            <span
              key={s}
              className="px-3.5 py-1.5 text-sm rounded-full bg-warm-100 dark:bg-warm-800/60 text-warm-700 dark:text-cream-200 border border-warm-200/50 dark:border-warm-700/50"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container-prose py-20 sm:py-24">
        <SectionHeading eyebrow="Certifications" title="Certifications & training" />

        <ul className="mt-10 divide-y divide-warm-200 dark:divide-warm-800">
          {certifications.map((cert, i) => (
            <motion.li
              key={cert.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="py-5 flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                {cert.image && (
                  <img
                    src={`${import.meta.env.BASE_URL}${cert.image}`}
                    alt={cert.name}
                    className="w-10 h-10 object-contain rounded-md shrink-0 bg-white dark:bg-warm-100 p-0.5"
                  />
                )}
                <div>
                  <div className="font-display text-lg sm:text-xl font-medium text-warm-900 dark:text-cream-50">
                    {cert.name}
                  </div>
                  <div className="text-sm text-warm-600 dark:text-cream-300 mt-0.5">
                    {cert.issuer}
                  </div>
                </div>
              </div>
              <div className="font-mono text-sm text-accent-600 dark:text-accent-300 shrink-0">
                {cert.year}
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container-wide py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-100 via-cream-100 to-warm-100 dark:from-warm-800 dark:via-warm-900 dark:to-warm-950 border border-accent-200/50 dark:border-warm-700 p-10 sm:p-16 text-center"
        >
          {/* Decorative blob */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-300/30 dark:bg-accent-600/20 blur-3xl" />

          <p className="relative font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300 mb-4">
            Let's connect
          </p>
          <h2 className="relative font-display text-3xl sm:text-4xl font-medium text-warm-900 dark:text-cream-50 max-w-xl mx-auto leading-tight">
            Want to talk testing, automation, or AI in QA?
          </h2>
          <p className="relative mt-4 text-warm-700 dark:text-cream-200 max-w-md mx-auto">
            I always enjoy a good conversation about test infrastructure, flaky tests, or where AI fits into a QA workflow.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-warm-400/50 dark:border-warm-600 text-warm-800 dark:text-cream-100 hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}

function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow: string
  title: string
  centered?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={centered ? 'text-center' : ''}
    >
      <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-tight text-warm-900 dark:text-cream-50">
        {title}
      </h2>
    </motion.div>
  )
}
