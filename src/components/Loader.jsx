import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] bg-base flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="font-mono text-sm text-muted">
            <span className="text-cyan">$</span> booting portfolio
            <span className="inline-block w-2 h-4 bg-blue-soft ml-1 animate-blink align-middle" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
