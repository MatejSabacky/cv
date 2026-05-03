import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Wrench } from 'lucide-react'
import { blogPosts, projects } from '../lib/data'

export default function SpaceIndex() {
  return (
    <section className="container-wide pt-16 sm:pt-20 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
          My Space
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-warm-900 dark:text-cream-50 leading-[1.05]">
          Things I think and build.
        </h1>
        <p className="mt-6 text-lg text-warm-700 dark:text-cream-200 leading-relaxed">
          A small corner for writing about test automation and the side projects
          that come out of trying to solve real problems at work.
        </p>
      </motion.div>

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        {/* Blog card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group p-8 rounded-3xl bg-cream-100/70 dark:bg-warm-900/50 border border-warm-200 dark:border-warm-800 hover:border-accent-400 dark:hover:border-accent-500 transition-colors"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-300">
              <BookOpen size={20} />
            </div>
            <h2 className="font-display text-2xl font-medium text-warm-900 dark:text-cream-50">
              Blog
            </h2>
          </div>
          <p className="text-warm-700 dark:text-cream-200 leading-relaxed mb-6">
            Notes on Playwright, CI/CD, test strategy, and the occasional thought on
            where AI is genuinely useful in QA.
          </p>
          <ul className="space-y-3 mb-6">
            {blogPosts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/space/blog/${post.slug}`}
                  className="block group/post p-3 -mx-3 rounded-lg hover:bg-warm-100/50 dark:hover:bg-warm-800/40 transition-colors"
                >
                  <p className="font-medium text-warm-900 dark:text-cream-50 group-hover/post:text-accent-600 dark:group-hover/post:text-accent-300 transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs font-mono text-warm-500 dark:text-cream-300 mt-1">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/space/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-300 hover:gap-3 transition-all"
          >
            All articles
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Projects card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group p-8 rounded-3xl bg-cream-100/70 dark:bg-warm-900/50 border border-warm-200 dark:border-warm-800 hover:border-accent-400 dark:hover:border-accent-500 transition-colors"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-accent-100 dark:bg-accent-900/40 text-accent-600 dark:text-accent-300">
              <Wrench size={20} />
            </div>
            <h2 className="font-display text-2xl font-medium text-warm-900 dark:text-cream-50">
              Projects
            </h2>
          </div>
          <p className="text-warm-700 dark:text-cream-200 leading-relaxed mb-6">
            Tools and experiments — usually started to solve a specific problem
            on my own team and shared from there.
          </p>
          <ul className="space-y-3 mb-6">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/space/projects/${project.slug}`}
                  className="block group/p p-3 -mx-3 rounded-lg hover:bg-warm-100/50 dark:hover:bg-warm-800/40 transition-colors"
                >
                  <p className="font-medium text-warm-900 dark:text-cream-50 group-hover/p:text-accent-600 dark:group-hover/p:text-accent-300 transition-colors">
                    {project.title}
                  </p>
                  <p className="text-xs font-mono text-warm-500 dark:text-cream-300 mt-1">
                    {project.status}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/space/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-300 hover:gap-3 transition-all"
          >
            All projects
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
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
