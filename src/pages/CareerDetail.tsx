import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Calendar } from 'lucide-react'
import { companies } from '../lib/data'

export default function CareerDetail() {
  const { slug } = useParams()
  const company = companies.find((c) => c.slug === slug)

  if (!company) return <Navigate to="/career" replace />

  const currentIdx = companies.findIndex((c) => c.slug === slug)
  const prev = currentIdx > 0 ? companies[currentIdx - 1] : null
  const next = currentIdx < companies.length - 1 ? companies[currentIdx + 1] : null

  return (
    <section className="container-prose pt-12 sm:pt-16 pb-20">
      <Link
        to="/career"
        className="inline-flex items-center gap-2 text-sm text-warm-600 dark:text-cream-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back to all roles
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
          {company.role}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tight text-warm-900 dark:text-cream-50 leading-[1.1]">
          {company.name}
        </h1>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-600 dark:text-cream-300">
          <span className="inline-flex items-center gap-2">
            <Calendar size={14} className="text-accent-500" />
            {company.period}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-accent-500" />
            {company.location}
          </span>
        </div>

        <p className="mt-8 text-lg text-warm-700 dark:text-cream-200 leading-relaxed">
          {company.summary}
        </p>
      </motion.div>

      <Section title="What I did" delay={0.15}>
        <ul className="space-y-3">
          {company.responsibilities.map((item, i) => (
            <li key={i} className="flex gap-3 text-warm-700 dark:text-cream-200 leading-relaxed">
              <span className="text-accent-500 font-mono shrink-0 mt-1">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Highlights" delay={0.25}>
        <ul className="space-y-4">
          {company.achievements.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-5 rounded-xl bg-cream-100/60 dark:bg-warm-900/50 border border-warm-200 dark:border-warm-800 text-warm-800 dark:text-cream-100 leading-relaxed"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section title="Stack" delay={0.35}>
        <div className="flex flex-wrap gap-2">
          {company.stack.map((s) => (
            <span
              key={s}
              className="px-3.5 py-1.5 text-sm font-mono rounded-full bg-warm-100 dark:bg-warm-800/60 text-warm-700 dark:text-cream-200 border border-warm-200/50 dark:border-warm-700/50"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Prev / Next */}
      <div className="mt-20 pt-10 border-t border-warm-200 dark:border-warm-800 grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            to={`/career/${prev.slug}`}
            className="group p-5 rounded-xl border border-warm-200 dark:border-warm-800 hover:border-accent-400 dark:hover:border-accent-500 transition-colors"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-warm-500 dark:text-cream-300">
              ← Previous
            </p>
            <p className="mt-1 font-display text-lg text-warm-900 dark:text-cream-50 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
              {prev.name}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            to={`/career/${next.slug}`}
            className="group p-5 rounded-xl border border-warm-200 dark:border-warm-800 hover:border-accent-400 dark:hover:border-accent-500 transition-colors text-right"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-warm-500 dark:text-cream-300">
              Next →
            </p>
            <p className="mt-1 font-display text-lg text-warm-900 dark:text-cream-50 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
              {next.name}
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  )
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className="mt-14"
    >
      <h2 className="font-display text-2xl font-medium text-warm-900 dark:text-cream-50 mb-5">
        {title}
      </h2>
      {children}
    </motion.div>
  )
}
