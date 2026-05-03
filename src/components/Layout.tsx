import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../lib/data'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? 'text-accent-600 dark:text-accent-300'
        : 'text-warm-700 dark:text-cream-200 hover:text-warm-900 dark:hover:text-cream-50'
    }`

  return (
    <div className="min-h-screen flex flex-col grain-overlay relative">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream-50/85 dark:bg-warm-950/85 backdrop-blur-md border-b border-warm-200/60 dark:border-warm-800/60'
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-display text-xl font-medium tracking-tight text-warm-900 dark:text-cream-50 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
          >
            {profile.name}.
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/career" className={navLinkClass}>
              Career
            </NavLink>
            <NavLink to="/space" className={navLinkClass}>
              My Space
            </NavLink>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-warm-900 dark:bg-cream-100 text-cream-50 dark:text-warm-900 hover:bg-accent-600 dark:hover:bg-accent-400 dark:hover:text-warm-950 transition-colors"
            >
              Get in touch
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-warm-800 dark:text-cream-100"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-t border-warm-200 dark:border-warm-800 bg-cream-50 dark:bg-warm-950">
            <div className="container-wide py-4 flex flex-col gap-1 text-sm font-medium">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `py-2.5 px-2 rounded-md ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-300 bg-warm-100/50 dark:bg-warm-900/50'
                      : 'text-warm-700 dark:text-cream-200'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  `py-2.5 px-2 rounded-md ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-300 bg-warm-100/50 dark:bg-warm-900/50'
                      : 'text-warm-700 dark:text-cream-200'
                  }`
                }
              >
                Career
              </NavLink>
              <NavLink
                to="/space"
                className={({ isActive }) =>
                  `py-2.5 px-2 rounded-md ${
                    isActive
                      ? 'text-accent-600 dark:text-accent-300 bg-warm-100/50 dark:bg-warm-900/50'
                      : 'text-warm-700 dark:text-cream-200'
                  }`
                }
              >
                My Space
              </NavLink>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 rounded-md text-accent-600 dark:text-accent-300"
              >
                Get in touch →
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1 relative z-10">{children}</main>

      <footer className="mt-24 border-t border-warm-200 dark:border-warm-800 relative z-10">
        <div className="container-wide py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-warm-600 dark:text-cream-300">
          <p>
            © {new Date().getFullYear()} {profile.fullName}.
          </p>
          <div className="flex gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-600 dark:hover:text-accent-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
