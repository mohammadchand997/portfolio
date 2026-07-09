import { motion } from 'framer-motion'
import { profile } from '../utils/data'
import SectionHeading from './SectionHeading'

const stats = [
  { label: 'years experience', value: '6+' },
  { label: 'production migrations', value: '10+' },
  { label: 'core stack', value: 'PHP · Node.js' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading endpoint="GET /about" title="About" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 text-lg text-ink/90 leading-relaxed"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-panel p-6 grid grid-cols-1 gap-5"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between border-b border-border last:border-0 pb-4 last:pb-0">
                <span className="font-mono text-xs text-muted uppercase tracking-wide">{s.label}</span>
                <span className="font-display font-semibold text-ink">{s.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
