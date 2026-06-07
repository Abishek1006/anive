import { motion } from 'framer-motion'
import { useMemo } from 'react'

const spread = (index, seed) => ((index * seed + seed * 11) % 100) / 100

export default function HeartBurst({ active }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: (spread(i, 41) - 0.5) * 280,
        y: (spread(i, 53) - 0.5) * 400,
        size: 14 + spread(i, 17) * 22,
        delay: spread(i, 13) * 0.3,
      })),
    [],
  )

  if (!active) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] flex items-center justify-center" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute text-warm-pink"
          style={{ fontSize: heart.size }}
          initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
          animate={{
            opacity: [1, 1, 0],
            x: heart.x,
            y: heart.y,
            scale: [0, 1.2, 0.8],
          }}
          transition={{ duration: 1.4, delay: heart.delay, ease: 'easeOut' }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}
