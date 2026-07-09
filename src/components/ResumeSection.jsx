import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'
import SectionHeading from './SectionHeading'

export default function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading endpoint="GET /resume" title="Resume" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-4 md:p-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <h3 className="font-display font-semibold text-lg text-ink">Mohammad_Chand_Resume.pdf</h3>
              <p className="text-sm text-faint">Updated for backend engineering roles</p>
            </div>
            <a href="/resume.pdf" download className="btn-primary shrink-0">
              <HiOutlineDownload /> Download PDF
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-border bg-surface2" style={{ height: '70vh' }}>
            <iframe src="/resume.pdf" title="Resume preview" className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
