import { motion } from 'framer-motion'

export default function SectionHeading({ endpoint, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="mb-14 max-w-2xl"
    >
      <p className="eyebrow mb-3">{endpoint}</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted leading-relaxed">{description}</p>}
    </motion.div>
  )
}
