import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { profile } from '../utils/data'
import SectionHeading from './SectionHeading'

// Uses github-readme-stats.vercel.app (free, no API key) to render
// live stats and language breakdown. Swap 'mohammadchand997' for the real
// GitHub handle — see the README's "Connect GitHub Stats" section.
const GH_USER = 'mohammadchand997'

export default function GithubSection() {
  return (
    <section id="github" className="section">
      <div className="container-px max-w-6xl mx-auto">
        <SectionHeading
          endpoint="GET /github"
          title="GitHub Activity"
          description="Live stats pulled directly from GitHub — replace mohammadchand997 in GithubSection.jsx with the real handle."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-5 mb-5"
        >
          <div className="glass-panel p-4">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GH_USER}&show_icons=true&theme=transparent&hide_border=true&title_color=6E9CFF&icon_color=22D3EE&text_color=8B94A9`}
              alt="GitHub stats"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="glass-panel p-4">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&theme=transparent&hide_border=true&title_color=6E9CFF&text_color=8B94A9`}
              alt="Top languages"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-4 mb-8"
        >
          <img
            src={`https://ghchart.rshah.org/3E7BFA/${GH_USER}`}
            alt="GitHub contribution graph"
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <div className="text-center">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <FiGithub /> View Full Profile
          </a>
        </div>
      </div>
    </section>
  )
}
