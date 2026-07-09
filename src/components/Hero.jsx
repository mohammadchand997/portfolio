import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineDownload, HiOutlineMail } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import { profile, heroEndpoints } from '../utils/data'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % heroEndpoints.length)
    }, 4200)
    return () => clearInterval(t)
  }, [])

  const current = heroEndpoints[index]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="container-px max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: introduction */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted mb-6 px-3 py-1.5 rounded-full border border-border">
            <span className="status-dot" />
            available for backend engineering roles
          </div>

          <p className="eyebrow mb-3">GET /developer</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-soft to-cyan bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-2">
            {profile.role} · {profile.experience} of experience
          </p>
          <p className="text-base text-faint mb-10 max-w-lg leading-relaxed">
            I design and ship RESTful APIs and backend systems in PHP, Laravel, CodeIgniter, and
            Node.js — migrating legacy applications, hardening security, and keeping response
            times low.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download className="btn-primary">
              <HiOutlineDownload className="text-lg" />
              Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <FiGithub className="text-lg" />
              View GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost"
            >
              <HiOutlineMail className="text-lg" />
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Right: signature animated terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass-panel shadow-card">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-faint">backend-api.local</span>
            </div>

            <div className="p-5 font-mono text-sm min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.path}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        current.method === 'GET'
                          ? 'bg-blue/20 text-blue-soft'
                          : 'bg-cyan/20 text-cyan'
                      }`}
                    >
                      {current.method}
                    </span>
                    <span className="text-ink">{current.path}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-xs">
                    <span className="text-green">{current.status} OK</span>
                    <span className="text-faint">· {80 + index * 12}ms</span>
                  </div>
                  <pre className="text-muted leading-relaxed whitespace-pre-wrap">
                    {current.body}
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex gap-1.5 px-5 pb-5">
              {heroEndpoints.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-blue-soft' : 'w-1.5 bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
