import { motion } from 'framer-motion'
import { useMemo } from 'react'

const spread = (index, seed) => ((index * seed + seed * 7) % 100) / 100

export default function RisingHearts({ count = 18 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${8 + spread(i, 37) * 84}%`,
        size: 10 + spread(i, 29) * 14,
        duration: 4 + spread(i, 23) * 4,
        delay: spread(i, 19) * 5,
        drift: (spread(i, 31) - 0.5) * 40,
      })),
    [count],
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute bottom-0 text-warm-pink/60"
          style={{ left: heart.left, fontSize: heart.size }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: '-110vh',
            x: heart.drift,
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}
