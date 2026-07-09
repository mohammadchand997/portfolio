import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../utils/data'
import SectionHeading from './SectionHeading'

const infoCards = [
  { icon: HiOutlineMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'Connect', href: profile.linkedin },
  { icon: HiOutlineLocationMarker, label: 'Location', value: profile.location, href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend wired up yet — opens the visitor's mail client with the
    // message pre-filled. Swap this for Formspree / an API route when ready
    // (see README.md "Wire up the contact form").
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          endpoint="POST /contact"
          title="Let's build something reliable"
          description="Open to backend engineering roles and API-focused freelance work."
        />

        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {infoCards.map((card, i) => {
              const Icon = card.icon
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel p-5 flex items-center gap-4 hover:border-blue/40 transition-colors h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-blue/15 flex items-center justify-center text-blue-soft shrink-0">
                    <Icon className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-faint uppercase tracking-wide">{card.label}</p>
                    <p className="text-ink text-sm truncate">{card.value}</p>
                  </div>
                </motion.div>
              )
              return card.href ? (
                <a key={card.label} href={card.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              )
            })}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 glass-panel p-6 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-muted block mb-2">name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-blue outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted block mb-2">email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-blue outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-xs text-muted block mb-2">message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-surface2 border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-blue outline-none transition-colors resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
