import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft } from 'lucide-react'
import { blogPosts } from '../lib/data'

// Eagerly load all markdown files at build time
const markdownFiles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/space/blog" replace />

  const filePath = `../content/blog/${slug}.md`
  const content = markdownFiles[filePath] ?? '# Article not found\n\nThe markdown file is missing.'

  return (
    <article className="container-prose pt-12 sm:pt-16 pb-20">
      <Link
        to="/space/blog"
        className="inline-flex items-center gap-2 text-sm text-warm-600 dark:text-cream-300 hover:text-accent-600 dark:hover:text-accent-300 transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        All articles
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium tracking-tight text-warm-900 dark:text-cream-50 leading-[1.1]">
          {post.title}
        </h1>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((t) => (
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
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </motion.div>
    </article>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
