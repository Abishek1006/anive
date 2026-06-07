import { motion } from 'framer-motion'
import VideoTheater from '../components/VideoTheater'
import QuoteStrip from '../components/QuoteStrip'
import QuotePill from '../components/QuotePill'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { mainQuotes, quotesByPage } from '../data/quotes'

export default function MemorySoundsPage() {
  return (
    <PageShell
      className="px-4"
      style={{
        background: 'linear-gradient(180deg, #BFDFFF 0%, #D9EEFF 48%, #FFF8F0 100%)',
      }}
    >
      <ScrapbookLayer page="memory-sounds" tone="blue" />

      <motion.div
        className="relative z-10 mb-3 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-handwritten text-[#38556E] text-base -rotate-1">old camcorder shelf</p>
        <h2 className="font-script text-[2.25rem] text-[#38556E] leading-none">
          {mainQuotes.memorySounds}
        </h2>
      </motion.div>

      <div className="relative z-10 flex-1 min-h-0">
        <div className="relative rounded-[8px] bg-[#243447] p-2 shadow-[0_14px_30px_rgba(56,85,110,0.28)] stitched-border">
          <div className="absolute -top-3 left-7 h-6 w-24 rotate-[-5deg] bg-[#FFF8F0]/80 border border-[#7B5E57]/20" />
          <div className="absolute -top-3 right-8 h-6 w-20 rotate-[7deg] bg-[#F8D7DA]/80 border border-[#7B5E57]/20" />
          <VideoTheater />
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <QuotePill text="replay this" index={0} size="md" />
          <QuotePill text="volume: love" index={1} size="md" />
          <QuotePill text="saved forever" index={2} size="md" />
        </div>
      </div>

      <QuoteStrip quotes={quotesByPage['memory-sounds']} className="relative z-10 mt-3" />
    </PageShell>
  )
}
