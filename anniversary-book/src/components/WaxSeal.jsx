export default function WaxSeal({ className }) {
  return (
    <div
      className={`relative w-20 h-20 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #d44 0%, #8b1a1a 40%, #5c0f0f 100%)',
          boxShadow:
            '0 4px 12px rgba(0,0,0,0.4), inset 0 -4px 8px rgba(0,0,0,0.3), inset 0 4px 8px rgba(255,255,255,0.15)',
        }}
      />
      <div
        className="absolute inset-2 rounded-full flex items-center justify-center"
        style={{
          border: '2px solid rgba(255,255,255,0.15)',
          background: 'radial-gradient(circle at 40% 40%, #a02020 0%, #6b1010 100%)',
        }}
      >
        <span className="font-script text-white/90 text-2xl">♥</span>
      </div>
      <div
        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full opacity-60"
        style={{ background: '#5c0f0f' }}
      />
      <div
        className="absolute -top-1 -left-2 w-8 h-5 rounded-full opacity-50"
        style={{ background: '#6b1010', transform: 'rotate(-30deg)' }}
      />
    </div>
  )
}
