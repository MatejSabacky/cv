import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { companies } from '../lib/data'

export default function CareerIndex() {
  return (
    <section className="container-wide pt-16 sm:pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
          Career
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-warm-900 dark:text-cream-50 leading-[1.05]">
          Where I've worked.
        </h1>
        <p className="mt-6 text-lg text-warm-700 dark:text-cream-200 leading-relaxed">
          A timeline of the teams I've been part of and the things I've helped build along the way.
          Click any role for the longer story.
        </p>
      </motion.div>

      <div className="mt-16 sm:mt-20">
        {companies.map((company, i) => (
          <motion.div
            key={company.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              to={`/career/${company.slug}`}
              className="group block py-8 sm:py-10 border-t border-warm-200 dark:border-warm-800 hover:border-accent-400 dark:hover:border-accent-500 transition-colors"
            >
              <div className="grid sm:grid-cols-[140px,1fr,auto] gap-4 sm:gap-8 items-baseline">
                <div className="font-mono text-sm text-warm-500 dark:text-cream-300 shrink-0">
                  {company.period}
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-medium text-warm-900 dark:text-cream-50 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
                    {company.name}
                  </h2>
                  <p className="mt-1 text-warm-600 dark:text-cream-300">{company.role}</p>
                  <p className="mt-3 text-warm-700 dark:text-cream-200 leading-relaxed max-w-2xl">
                    {company.summary}
                  </p>
                </div>
                <ArrowUpRight
                  size={22}
                  className="text-warm-400 dark:text-warm-600 group-hover:text-accent-500 group-hover:rotate-12 transition-all hidden sm:block"
                />
              </div>
            </Link>
          </motion.div>
        ))}
        <div className="border-t border-warm-200 dark:border-warm-800" />
      </div>
    </section>
  )
}
