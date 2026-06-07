import { motion } from 'framer-motion'

export default function VintageTV({ src, alt, photoTag = 'COVER_SUNSET' }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[280px]"
      data-photo-tag={photoTag}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div
        className="relative rounded-xl p-3"
        style={{
          background: 'linear-gradient(145deg, #5a4a44 0%, #3d302c 50%, #2a2220 100%)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.45), inset 0 2px 4px rgba(255,255,255,0.08)',
        }}
      >
        <div className="absolute top-2 right-3 flex items-center gap-1.5 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-blink shadow-[0_0_6px_#ef4444]" />
          <span className="font-handwritten text-[10px] text-beige/70">REC</span>
        </div>

        <div
          className="relative rounded-md overflow-hidden border-[3px] border-[#2a2220]"
          style={{ boxShadow: 'inset 0 0 30px rgba(0,0,0,0.45)' }}
        >
          {/* USER_PHOTO: {photoTag} */}
          <img src={src} alt={alt} className="w-full aspect-[4/3] object-cover" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 45%, rgba(255,255,255,0.04) 100%)',
            }}
          />
        </div>

        <div className="flex justify-center gap-2 mt-3">
          <div className="w-2 h-2 rounded-full bg-[#4a3f3a]" />
          <div className="w-6 h-2 rounded-full bg-[#4a3f3a]" />
          <div className="w-2 h-2 rounded-full bg-[#4a3f3a]" />
        </div>
      </div>
    </motion.div>
  )
}
