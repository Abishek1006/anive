import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Polaroid from '../components/Polaroid'
import QuoteStrip from '../components/QuoteStrip'
import QuotePill from '../components/QuotePill'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { photos } from '../photos/photos'
import { quotesByPage } from '../data/quotes'

export default function LittleThingsPage() {
  const [showBurst, setShowBurst] = useState(false)

  const handleTogetherTap = () => {
    setShowBurst(true)
    setTimeout(() => setShowBurst(false), 900)
  }

  return (
    <PageShell
      className="px-5 notebook-grid"
      style={{
        background: 'linear-gradient(165deg, #FFF8F0 0%, #F8D7DA 58%, #E8D8C4 100%)',
      }}
    >
      <ScrapbookLayer page="little-things" tone="cream" dense />

      <AnimatePresence>
        {showBurst && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.32 }}
          >
            <span className="rounded-[8px] bg-[#FFF8F0]/90 px-6 py-4 font-script text-5xl text-rose-500 shadow-xl">
              us
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-handwritten text-vintage-brown text-base -rotate-1">
          the moment everything changed
        </p>
        <h2 className="font-script text-[2.45rem] leading-none text-vintage-brown">
          The Little Things
        </h2>
        <p className="mt-2 rounded-[6px] bg-[#FFF8F0]/75 px-3 py-2 font-body text-[12px] leading-relaxed text-vintage-brown shadow-sm">
          Two people, living their own lives - until they weren't.
        </p>
      </motion.div>

      <div className="relative z-10 flex-1 min-h-0">
        <motion.div
          className="absolute left-0 top-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Polaroid
            src={photos.you}
            alt="Me, before"
            photoTag="LITTLE_THINGS_YOU"
            caption="you"
            rotation={-6}
            size="md"
          />
        </motion.div>

        <motion.div
          className="absolute right-0 top-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Polaroid
            src={photos.me}
            alt="Her, before"
            photoTag="LITTLE_THINGS_HER"
            caption="me"
            rotation={6}
            size="md"
          />
        </motion.div>

        <svg
          className="absolute left-0 top-28 z-20 w-full pointer-events-none"
          viewBox="0 0 300 60"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M30 30 Q150 5 270 30"
            stroke="#7B5E57"
            strokeWidth="1.4"
            strokeDasharray="5 5"
          />
          <text x="145" y="14" fontSize="12" textAnchor="middle" fill="#c2185b">
            love
          </text>
        </svg>

        <motion.button
          type="button"
          className="absolute left-1/2 bottom-6 z-30 -translate-x-1/2 cursor-pointer bg-transparent p-0 text-left"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring', stiffness: 260, damping: 22 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTogetherTap}
          aria-label="Show our little surprise"
        >
          <Polaroid
            src={photos.us}
            alt="Us"
            photoTag="LITTLE_THINGS_TOGETHER"
            caption="then this happened"
            rotation={-2}
            size="lg"
          />
          <motion.p
            className="text-center font-handwritten text-vintage-brown/60 text-xs mt-1"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            tap for a little surprise
          </motion.p>
        </motion.button>

        <QuotePill text="my safe place" index={2} className="absolute left-1 bottom-44 -rotate-6 z-20" size="lg" />
        <QuotePill text="favorite human" index={3} className="absolute right-2 bottom-40 rotate-3 z-20" size="lg" />
      </div>

      <QuoteStrip quotes={quotesByPage['little-things']} className="relative z-10" />
    </PageShell>
  )
}
