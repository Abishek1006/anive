import { motion } from 'framer-motion'

export default function CassetteTape() {
  return (
    <motion.div
      className="relative w-56 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="rounded-lg p-3 shadow-[0_4px_15px_rgba(123,94,87,0.2)]"
        style={{
          background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)',
        }}
      >
        <div className="flex justify-between items-center mb-2 px-1">
          <span className="font-handwritten text-beige text-xs">Side A</span>
          <span className="font-handwritten text-warm-pink text-sm">Our Mixtape</span>
          <span className="font-handwritten text-beige text-xs">∞</span>
        </div>

        <div className="relative rounded-md p-4 border-2 border-[#444] bg-[#1a1a1a]">
          <div className="flex justify-center gap-5 items-center">
            <div className="relative w-14 h-14">
              <div
                className="absolute inset-0 rounded-full border-3 border-[#555] animate-spin-slow"
                style={{ background: 'conic-gradient(#333 0%, #666 50%, #333 100%)' }}
              />
              <div className="absolute inset-2 rounded-full bg-[#222] border border-[#444]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#888]" />
              </div>
            </div>

            <div className="flex-1 h-0.5 bg-[#555] rounded relative">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-warm-pink/60 rounded" />
            </div>

            <div className="relative w-14 h-14">
              <div
                className="absolute inset-0 rounded-full border-3 border-[#555] animate-spin-slow"
                style={{
                  background: 'conic-gradient(#333 0%, #666 50%, #333 100%)',
                  animationDirection: 'reverse',
                }}
              />
              <div className="absolute inset-2 rounded-full bg-[#222] border border-[#444]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#888]" />
              </div>
            </div>
          </div>

          <p className="font-handwritten text-beige/70 text-xs text-center mt-3 tracking-wide">
            ♪ Memory Lane Mixtape ♪
          </p>
        </div>
      </div>
    </motion.div>
  )
}
