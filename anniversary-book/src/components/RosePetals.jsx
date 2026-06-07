import { useMemo } from 'react'

const spread = (index, seed) => ((index * seed + seed * 5) % 100) / 100

export default function RosePetals({ count = 15 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${spread(i, 37) * 100}%`,
        delay: `${spread(i, 19) * 10}s`,
        duration: `${8 + spread(i, 23) * 8}s`,
        size: 8 + spread(i, 29) * 12,
      })),
    [count],
  )

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute"
          style={{
            left: petal.left,
            fontSize: petal.size,
            color: '#c86a6a',
            opacity: 0.5,
            animation: `petal-fall ${petal.duration} ${petal.delay} linear infinite`,
          }}
        >
          🌸
        </span>
      ))}
    </div>
  )
}
