import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../utils/data'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          endpoint="GET /projects"
          title="Featured Projects"
          description="Replace these with links to real repositories or case studies — see the README for how."
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              className="glass-panel p-6 flex flex-col justify-between min-h-[220px] hover:-translate-y-1 hover:border-blue/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <p className="font-mono text-[11px] text-cyan/80">{project.endpoint}</p>
                  <FiArrowUpRight className="text-faint group-hover:text-blue-soft shrink-0" />
                </div>
                <h3 className="font-display font-semibold text-lg text-ink mb-2">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-surface2 text-faint border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
