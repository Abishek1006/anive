import { motion } from 'framer-motion'
import clsx from 'clsx'

const GRADIENTS = [
  'from-rose-400/90 to-pink-500/90',
  'from-violet-400/85 to-purple-500/85',
  'from-amber-300/90 to-orange-400/90',
  'from-cyan-400/80 to-teal-500/80',
  'from-fuchsia-400/85 to-rose-500/85',
  'from-sky-400/80 to-indigo-500/80',
]

export default function QuotePill({ text, index = 0, className, size = 'sm' }) {
  const gradient = GRADIENTS[index % GRADIENTS.length]
  const sizes = {
    sm: 'text-[10px] px-2.5 py-1',
    md: 'text-xs px-3 py-1.5',
    lg: 'text-sm px-3.5 py-2',
  }

  return (
    <motion.span
      className={clsx(
        'inline-block font-handwritten text-white rounded-[6px] shadow-md bg-gradient-to-r whitespace-normal leading-tight max-w-[10rem] text-center',
        gradient,
        sizes[size],
        className,
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08 }}
    >
      {text}
    </motion.span>
  )
}
