import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-prose py-32 text-center">
      <p className="font-sans font-medium text-[11px] tracking-widest uppercase text-accent-600 dark:text-accent-300">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl sm:text-6xl font-medium tracking-tight text-warm-900 dark:text-cream-50">
        Lost in transit.
      </h1>
      <p className="mt-5 text-lg text-warm-700 dark:text-cream-200">
        This page doesn't exist — or doesn't exist yet.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-warm-900 dark:bg-cream-100 text-cream-50 dark:text-warm-900 font-medium hover:bg-accent-600 dark:hover:bg-accent-400 dark:hover:text-warm-950 transition-colors"
      >
        Take me home
      </Link>
    </section>
  )
}
