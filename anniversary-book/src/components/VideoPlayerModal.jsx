import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VideoPlayerModal({ video, onClose }) {
  const vidRef = useRef(null)
  const [playError, setPlayError] = useState(false)

  useEffect(() => {
    setPlayError(false)
    if (!video || !vidRef.current) return

    const play = async () => {
      try {
        await vidRef.current.play()
      } catch (err) {
        try {
          vidRef.current.muted = true
          await vidRef.current.play()
        } catch (e) {
          setPlayError(true)
        }
      }
    }

    play()
  }, [video])

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="absolute inset-0 z-[70] bg-black/95 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div>
              <p className="font-body text-white text-sm font-medium">{video.title}</p>
              <p className="font-handwritten text-rose-300 text-xs">{video.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-lg active:bg-white/20"
              aria-label="Close video"
            >
              ×
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            {video.src && !playError ? (
              <video
                key={video.id}
                ref={vidRef}
                controls
                playsInline
                preload="metadata"
                className="w-full max-h-full rounded-lg"
                poster={video.thumbnail}
                onError={() => setPlayError(true)}
              >
                <source src={video.src} type="video/mp4" />
                <track kind="captions" />
              </video>
            ) : video.src && playError ? (
              <div className="text-center px-6">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full rounded-xl mb-4 opacity-60"
                />
                <p className="font-handwritten text-rose-300 text-lg mb-2">Video format not supported</p>
                <p className="font-body text-white/50 text-xs leading-relaxed">
                  Your browser can play the audio but not the video stream.
                  Try exporting this file as H.264/AVC MP4 for best compatibility.
                </p>
              </div>
            ) : (
              <div className="text-center px-6">
                {/* USER_VIDEO: {video.tag} */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full rounded-xl mb-4 opacity-60"
                />
                <p className="font-handwritten text-rose-300 text-lg mb-2">Your video goes here</p>
                <p className="font-body text-white/50 text-xs leading-relaxed">
                  Add your video URL in <code className="text-rose-400">src/videos/videos.js</code>
                  <br />
                  Look for <code className="text-rose-400">{video.tag}</code>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
