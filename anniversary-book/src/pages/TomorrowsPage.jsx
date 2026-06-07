import { motion } from 'framer-motion'
import RisingHearts from '../components/RisingHearts'
import QuoteStrip from '../components/QuoteStrip'
import QuotePill from '../components/QuotePill'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { allPhotos } from '../photos/photos'
import { mainQuotes, quotesByPage } from '../data/quotes'

export default function TomorrowsPage() {
  return (
    <PageShell
      className="items-center justify-center px-4"
      style={{
        background: 'linear-gradient(155deg, #F8D7DA 0%, #DCCCFD 48%, #BFDFFF 100%)',
      }}
    >
      <ScrapbookLayer page="tomorrows" tone="blend" dense />

      <div className="absolute inset-x-4 top-16 z-[1] grid grid-cols-3 gap-1 opacity-55">
        {allPhotos.slice(0, 12).map((src, i) => (
          <div key={i} className="overflow-hidden border-2 border-white bg-white shadow-sm" style={{ rotate: `${[-3, 2, -1, 4][i % 4]}deg` }}>
            {/* USER_PHOTO: MOSAIC_{i + 1} */}
            <img src={src} alt={`Memory mosaic ${i + 1}`} className="w-full aspect-square object-cover" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#FFF8F0]/35 via-[#FFF8F0]/55 to-[#F8D7DA]/75" />
      <RisingHearts count={12} />

      <motion.div
        className="relative z-20 mx-1 rounded-[8px] bg-[#FFF8F0]/88 p-5 text-center shadow-[0_14px_30px_rgba(94,83,104,0.2)] stitched-border rotate-[-1deg]"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="absolute -top-3 left-8 h-6 w-24 rotate-[-6deg] bg-[#BFDFFF]/85 border border-[#7B5E57]/20" />
        <div className="absolute -top-3 right-8 h-6 w-24 rotate-[6deg] bg-[#DCCCFD]/85 border border-[#7B5E57]/20" />

        <p className="font-handwritten text-[#5E5368] text-base -rotate-1">last page for now</p>
        <p className="mt-2 font-script text-2xl text-[#5E5368] leading-relaxed">
          {mainQuotes.forever}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <QuotePill text="future us" index={0} size="md" />
          <QuotePill text="still us" index={1} size="md" />
          <QuotePill text="always" index={2} size="md" />
        </div>
      </motion.div>

      <QuoteStrip quotes={quotesByPage.tomorrows} className="relative z-20 mt-4" />
    </PageShell>
  )
}
