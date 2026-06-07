import { motion, AnimatePresence } from 'framer-motion'

const SECTION_META = {
  cover: { title: 'A Thousand Memories', color: '#F8D7DA' },
  'memory-sounds': { title: 'Our Memory Films', color: '#BFDFFF' },
  'little-things': { title: 'The Little Things', color: '#FFF8F0' },
  'cute-chaos': { title: 'Our Cute Chaos', color: '#DCCCFD' },
  'prayed-for': { title: 'The One I Prayed For', color: '#EFB4C0' },
  'promise-letter': { title: 'Promise Letter', color: '#E8D8C4' },
  tomorrows: { title: 'Forever & Always', color: '#D9EEFF' },
}

export default function StreamHeader({ activeSection }) {
  const meta = SECTION_META[activeSection] || SECTION_META.cover

  return (
    <div className="absolute top-0 left-0 right-0 z-40 pointer-events-none px-4 pt-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className="inline-flex max-w-[92%] items-center gap-2 rounded-[6px] border border-[#7B5E57]/20 px-3 py-1.5 shadow-sm"
          style={{ background: meta.color }}
          initial={{ opacity: 0, y: -8, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
        >
          <span className="h-2 w-2 rounded-full bg-[#7B5E57]/60" />
          <span className="font-handwritten text-sm leading-none text-vintage-brown">
            {meta.title}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
