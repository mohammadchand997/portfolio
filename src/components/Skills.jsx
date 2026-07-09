import { motion } from 'framer-motion'
import { skillGroups } from '../utils/data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          endpoint="GET /skills"
          title="Skills"
          description="Grouped the way I actually reach for them on a project — backend framework first, then the data, infra, and security layers around it."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="glass-panel p-6 group hover:border-blue/40 transition-colors duration-300"
            >
              <p className="font-mono text-[11px] text-cyan/80 mb-3">{group.endpoint}</p>
              <h3 className="font-display font-semibold text-lg mb-4 text-ink">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface2 text-muted border border-border group-hover:border-blue/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
