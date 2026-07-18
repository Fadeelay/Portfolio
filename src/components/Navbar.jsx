import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/troubleshooting', label: 'Troubleshooting' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'px-4 py-1.5 rounded-pill bg-primary text-white font-semibold text-sm transition-all duration-150'
      : 'px-3 py-1.5 rounded-pill text-content-secondary hover:text-content-primary hover:bg-surface-raised font-medium text-sm transition-all duration-150'

  return (
    <header className="sticky top-0 z-50 bg-surface-card/95 backdrop-blur border-b border-surface-border shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-primary font-extrabold text-xl leading-none">✦</span>
          <span className="font-extrabold text-content-primary text-base tracking-tight">
            Fadeelay
          </span>
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-primary shrink-0"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-content-secondary hover:text-content-primary p-2 rounded-lg hover:bg-surface-raised transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-surface-border bg-surface-card px-4 py-4 flex flex-col gap-2 shadow-md">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-surface-border mt-1">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-primary w-fit">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
