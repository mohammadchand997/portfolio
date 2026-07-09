import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../utils/data'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px max-w-6xl mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-blue-soft transition-colors text-lg">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted hover:text-blue-soft transition-colors text-lg">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted hover:text-blue-soft transition-colors text-lg">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  )
}
