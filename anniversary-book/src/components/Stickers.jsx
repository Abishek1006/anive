import { motion } from 'framer-motion'
import clsx from 'clsx'

export function HeartSticker({ className, size = 24 }) {
  return (
    <motion.span
      className={clsx('text-soft-red inline-block select-none', className)}
      style={{ fontSize: size }}
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-hidden="true"
    >
      ♥
    </motion.span>
  )
}

export function StarDoodle({ className }) {
  return (
    <svg
      className={clsx('text-vintage-brown', className)}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 2 L16 10 L24 10 L18 15 L20 24 L14 19 L8 24 L10 15 L4 10 L12 10 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PuppyDoodle({ className }) {
  return (
    <span
      className={clsx('font-handwritten text-3xl text-vintage-brown select-none', className)}
      aria-hidden="true"
    >
      🐶
    </span>
  )
}

export function BowSticker({ className }) {
  return (
    <svg
      className={clsx('text-warm-pink', className)}
      width="32"
      height="24"
      viewBox="0 0 32 24"
      aria-hidden="true"
    >
      <path
        d="M16 12 C12 4, 4 4, 6 12 C4 20, 12 20, 16 12 C20 20, 28 20, 26 12 C28 4, 20 4, 16 12"
        fill="currentColor"
        opacity="0.8"
      />
      <circle cx="16" cy="12" r="3" fill="#c86a6a" />
    </svg>
  )
}

export function KissPrint({ className }) {
  return (
    <span
      className={clsx('text-soft-red text-2xl opacity-70 select-none', className)}
      aria-hidden="true"
    >
      💋
    </span>
  )
}

export function ScatteredStickers({ count = 6 }) {
  const items = [
    { type: 'heart', top: '10%', left: '5%', rotate: -15 },
    { type: 'star', top: '20%', right: '8%', rotate: 20 },
    { type: 'puppy', top: '60%', left: '3%', rotate: 5 },
    { type: 'bow', top: '75%', right: '5%', rotate: -10 },
    { type: 'kiss', top: '40%', right: '12%', rotate: 25 },
    { type: 'heart', top: '85%', left: '15%', rotate: 10 },
    { type: 'star', top: '5%', right: '20%', rotate: -20 },
    { type: 'puppy', top: '50%', right: '3%', rotate: -5 },
  ].slice(0, count)

  const renderSticker = (type) => {
    switch (type) {
      case 'heart': return <HeartSticker size={28} />
      case 'star': return <StarDoodle />
      case 'puppy': return <PuppyDoodle />
      case 'bow': return <BowSticker />
      case 'kiss': return <KissPrint />
      default: return null
    }
  }

  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          {renderSticker(item.type)}
        </div>
      ))}
    </>
  )
}
