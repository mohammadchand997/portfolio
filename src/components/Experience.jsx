import { motion } from 'framer-motion'
import { experience } from '../utils/data'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading endpoint="GET /experience" title="Experience" />

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative sm:pl-10"
              >
                <span className="hidden sm:block absolute left-0 top-2 w-4 h-4 rounded-full bg-base border-2 border-blue-soft" />

                <div className="glass-panel p-6">
                  <p className="font-mono text-[11px] text-cyan/80 mb-3">{job.endpoint}</p>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display font-semibold text-xl text-ink">{job.role}</h3>
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="text-blue-soft font-medium mb-4">
                    {job.company} <span className="text-faint font-normal">· {job.location}</span>
                  </p>

                  <ul className="space-y-2 mb-5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm text-muted leading-relaxed">
                        <span className="text-blue-soft mt-1.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface2 text-faint border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
