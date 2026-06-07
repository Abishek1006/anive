import clsx from 'clsx'

export default function WashiTape({ position = 'top-left', className, rotation = -8 }) {
  const positions = {
    'top-left': 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-4 -translate-y-1/2',
    'bottom-left': 'bottom-8 left-2',
    'bottom-right': 'bottom-8 right-2',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }

  return (
    <div
      className={clsx(
        'absolute w-16 md:w-20 h-6 md:h-7 z-20 pointer-events-none',
        positions[position],
        className,
      )}
      style={{
        rotate: `${rotation}deg`,
        background: 'rgba(232, 216, 196, 0.75)',
        clipPath:
          'polygon(2% 15%, 8% 0%, 18% 8%, 28% 2%, 38% 10%, 48% 0%, 58% 8%, 68% 3%, 78% 10%, 88% 2%, 96% 12%, 98% 85%, 92% 100%, 82% 92%, 72% 98%, 62% 90%, 52% 100%, 42% 92%, 32% 98%, 22% 90%, 12% 100%, 4% 88%)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
      aria-hidden="true"
    />
  )
}
