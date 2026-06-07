import { motion } from 'framer-motion'
import RosePetals from '../components/RosePetals'
import QuoteStrip from '../components/QuoteStrip'
import QuotePill from '../components/QuotePill'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { photos } from '../photos/photos'
import { mainQuotes, quotesByPage } from '../data/quotes'

export default function PrayedForPage() {
  return (
    <PageShell
      className="items-center px-5"
      style={{
        background: 'linear-gradient(180deg, #EFB4C0 0%, #F8D7DA 48%, #FFF8F0 100%)',
      }}
    >
      <ScrapbookLayer page="prayed-for" tone="rose" />
      <RosePetals count={10} />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-handwritten text-[#7B4450] text-base -rotate-1">answered prayer, saved carefully</p>
        <h2 className="font-script text-[2.5rem] text-[#7B4450] leading-none">
          The One I Prayed For
        </h2>
      </motion.div>

      <div className="relative z-10 flex-1 w-full min-h-0">
        <motion.div
          className="absolute left-3 top-6 w-36 bg-white p-1.5 pb-8 shadow-[0_10px_22px_rgba(123,68,80,0.24)] rotate-[-5deg]"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* USER_PHOTO: PRAYED_ONE */}
          <img src={photos.prayedOne} alt="Our answered prayer memory" className="w-full h-44 object-cover" loading="lazy" />
          <p className="font-handwritten text-[#7B4450] text-center text-base mt-1">every step</p>
        </motion.div>

        <motion.div
          className="absolute right-2 top-28 w-36 bg-white p-1.5 pb-8 shadow-[0_10px_22px_rgba(123,68,80,0.24)] rotate-[6deg]"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* USER_PHOTO: PRAYED_TWO */}
          <img src={photos.prayedTwo} alt="Our journey memory" className="w-full h-44 object-cover" loading="lazy" />
          <p className="font-handwritten text-[#7B4450] text-center text-base mt-1">worth the wait</p>
        </motion.div>

        <div className="absolute left-0 right-0 bottom-8 mx-auto w-[88%] rounded-[7px] bg-[#FFF8F0]/88 px-4 py-3 shadow-[0_8px_22px_rgba(123,68,80,0.18)] rotate-[-1deg]">
          <p className="font-handwritten text-[#7B4450] text-lg leading-snug text-center">
            {mainQuotes.prayedFor}
          </p>
        </div>

        <QuotePill text="still choosing you" index={4} className="absolute left-0 bottom-[7.5rem] -rotate-3 z-20" size="md" />
        <QuotePill text="lucky me" index={5} className="absolute right-2 top-5 rotate-6 z-20" size="md" />
      </div>

      <QuoteStrip quotes={quotesByPage['prayed-for']} className="relative z-10" />
    </PageShell>
  )
}
