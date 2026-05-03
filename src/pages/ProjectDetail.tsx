import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '../lib/data'

const projectFiles = import.meta.glob('../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/space/projects" replace />

  const filePath = `../content/projects/${slug}.md`
  const content = projectFiles[filePath]

  return (
    <article className="container-prose pt-12 sm:pt-16 pb-20">
      <Link
        to="/space/projects"
        className="inline-flex items-center gap-2 text-sm text-warm-600 dark:text-cream-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        All projects
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
          {project.status}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tight text-warm-900 dark:text-cream-50 leading-[1.1]">
          {project.title}
        </h1>
        <p className="mt-5 text-lg text-warm-700 dark:text-cream-200 leading-relaxed">
          {project.tagline}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url.startsWith('/') ? `${import.meta.env.BASE_URL}${link.url.replace(/^\//, '')}` : link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-warm-300 dark:border-warm-700 text-sm font-medium text-warm-800 dark:text-cream-100 hover:border-accent-400 dark:hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
            >
              {link.label}
              <ExternalLink size={13} />
            </a>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-warm-100 dark:bg-warm-800/60 text-warm-600 dark:text-cream-300"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="prose-warm"
      >
        {content ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        ) : (
          <p className="text-warm-700 dark:text-cream-200 leading-relaxed">
            {project.description}
          </p>
        )}
      </motion.div>
    </article>
  )
}
