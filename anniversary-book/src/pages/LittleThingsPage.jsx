import { motion } from 'framer-motion'
import Polaroid from '../components/Polaroid'
import QuoteStrip from '../components/QuoteStrip'
import QuotePill from '../components/QuotePill'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { photos } from '../photos/photos'
import { mainQuotes, quotesByPage } from '../data/quotes'

export default function LittleThingsPage() {
  return (
    <PageShell
      className="px-5 notebook-grid"
      style={{
        background: 'linear-gradient(165deg, #FFF8F0 0%, #F8D7DA 58%, #E8D8C4 100%)',
      }}
    >
      <ScrapbookLayer page="little-things" tone="cream" dense />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-handwritten text-vintage-brown text-base -rotate-1">page of quiet proof</p>
        <h2 className="font-script text-[2.45rem] leading-none text-vintage-brown">
          The Little Things
        </h2>
        <p className="mt-2 rounded-[6px] bg-[#FFF8F0]/75 px-3 py-2 font-body text-[12px] leading-relaxed text-vintage-brown shadow-sm">
          {mainQuotes.littleThings}
        </p>
      </motion.div>

      <div className="relative z-10 flex-1 min-h-0">
        <div className="absolute left-2 top-5">
          <Polaroid
            src={photos.cozyFootsteps}
            alt="Our little memory"
            photoTag="LITTLE_THINGS_MAIN"
            caption="quiet world"
            rotation={-5}
            size="lg"
          />
        </div>

        <div className="absolute right-0 top-24">
          <Polaroid
            src={photos.coffeeMug}
            alt="Our everyday memory"
            photoTag="LITTLE_THINGS_SECOND"
            caption="ordinary magic"
            rotation={7}
            size="md"
          />
        </div>

        <QuotePill text="my safe place" index={2} className="absolute left-1 bottom-20 -rotate-6 z-20" size="lg" />
        <QuotePill text="favorite human" index={3} className="absolute right-3 bottom-10 rotate-3 z-20" size="lg" />

        <svg className="absolute left-10 right-4 top-48 z-20 h-24 w-[82%] pointer-events-none" viewBox="0 0 300 120" fill="none" aria-hidden="true">
          <path
            d="M20 92 C72 18, 140 92, 202 48 C236 24, 260 44, 284 16"
            stroke="#7B5E57"
            strokeWidth="1.6"
            strokeDasharray="5 5"
          />
          <path d="M272 17 l13 -2 l-7 12" stroke="#7B5E57" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      <QuoteStrip quotes={quotesByPage['little-things']} className="relative z-10" />
    </PageShell>
  )
}
