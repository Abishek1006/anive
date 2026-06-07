export default function PhotoCorner({ position = 'top-left' }) {
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  }

  return (
    <div
      className={`absolute w-6 h-6 z-10 ${positions[position]}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-full h-full text-vintage-brown/60">
        <path
          d="M0 0 L24 0 L0 24 Z"
          fill="currentColor"
        />
        <path
          d="M2 2 L20 2 L2 20 Z"
          fill="none"
          stroke="#7B5E57"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  )
}
