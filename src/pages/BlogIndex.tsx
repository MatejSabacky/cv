import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { blogPosts } from '../lib/data'

export default function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className="container-prose pt-12 sm:pt-16 pb-20">
      <Link
        to="/space"
        className="inline-flex items-center gap-2 text-sm text-warm-600 dark:text-cream-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back to My Space
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
          Blog
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tight text-warm-900 dark:text-cream-50 leading-[1.1]">
          Articles & notes.
        </h1>
      </motion.div>

      <ul className="mt-14 space-y-2">
        {sorted.map((post, i) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to={`/space/blog/${post.slug}`}
              className="group block py-6 px-4 -mx-4 rounded-2xl hover:bg-cream-100/70 dark:hover:bg-warm-900/40 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-warm-500 dark:text-cream-300">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                  <h2 className="mt-2 font-display text-xl sm:text-2xl font-medium text-warm-900 dark:text-cream-50 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-warm-700 dark:text-cream-200 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2 py-0.5 rounded-full bg-warm-100 dark:bg-warm-800/60 text-warm-600 dark:text-cream-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-warm-400 dark:text-warm-600 group-hover:text-accent-500 group-hover:rotate-12 transition-all shrink-0 mt-1"
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
