import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'github', label: 'github' },
  { id: 'resume', label: 'resume' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['home', ...links.map((l) => l.id)])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-card' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 max-w-6xl mx-auto">
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-sm text-ink hover:text-blue-soft transition-colors"
          aria-label="Go to top"
        >
          <span className="text-cyan">mc</span>
          <span className="text-muted">.</span>
          <span className="text-blue-soft">connect()</span>
        </button>

        <div className="hidden md:flex items-center gap-1 font-mono text-xs">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-2 rounded-full transition-colors ${
                active === link.id ? 'text-blue-soft bg-blue/10' : 'text-muted hover:text-ink'
              }`}
            >
              /{link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-ink text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden glass border-t border-border"
        >
          <div className="flex flex-col p-4 gap-1 font-mono text-sm">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 rounded-lg ${
                  active === link.id ? 'text-blue-soft bg-blue/10' : 'text-muted'
                }`}
              >
                /{link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
