import { useState } from 'react'
import { motion } from 'framer-motion'
import { videos, featuredVideo } from '../videos/videos'
import VideoPlayerModal from './VideoPlayerModal'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default function VideoTheater() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <div className="w-full">
        <motion.button
          type="button"
          onClick={() => setActiveVideo(featuredVideo)}
          className="relative w-full h-40 rounded-xl overflow-hidden group text-left"
          whileTap={{ scale: 0.98 }}
        >
          {/* USER_VIDEO_THUMBNAIL: FEATURED */}
          <img
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 to-rose-900/30 mix-blend-overlay" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block font-body text-[9px] uppercase tracking-[0.2em] text-rose-300 mb-1">
              Now Playing
            </span>
            <h3 className="font-script text-2xl text-white leading-tight">{featuredVideo.title}</h3>
            <p className="font-handwritten text-white/70 text-sm mt-0.5">{featuredVideo.subtitle}</p>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 text-rose-600 flex items-center justify-center shadow-xl group-active:scale-90 transition-transform">
            <PlayIcon />
          </div>
        </motion.button>

        <div className="mt-4">
          <p className="font-body text-white/60 text-[10px] uppercase tracking-widest mb-2.5 px-1">
            Our Moments
          </p>
          <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            {videos.map((video, i) => (
              <motion.button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="relative shrink-0 w-28 rounded-lg overflow-hidden group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* USER_VIDEO_THUMBNAIL: {video.tag} */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-[2/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <p className="font-body text-white text-[10px] font-medium leading-tight truncate">
                    {video.title}
                  </p>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 text-rose-500 flex items-center justify-center opacity-0 group-active:opacity-100 transition-opacity">
                  <PlayIcon />
                </div>
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{
                    background: ['#f472b6', '#a78bfa', '#fb923c'][i % 3],
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}
