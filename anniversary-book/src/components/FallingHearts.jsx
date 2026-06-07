import { useMemo } from 'react'

const spread = (index, seed) => ((index * seed + seed * 13) % 100) / 100

export default function FallingHearts({ count = 20 }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${spread(i, 37) * 100}%`,
        delay: `${spread(i, 19) * 8}s`,
        duration: `${6 + spread(i, 23) * 6}s`,
        size: 12 + spread(i, 29) * 16,
        opacity: 0.3 + spread(i, 31) * 0.5,
      })),
    [count],
  )

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-soft-red"
          style={{
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
            animation: `float-down ${heart.duration} ${heart.delay} linear infinite`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}
