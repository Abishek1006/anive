import { motion } from 'framer-motion'
import QuoteStrip from '../components/QuoteStrip'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { photos } from '../photos/photos'
import { mainQuotes, quotesByPage } from '../data/quotes'

export default function CoverPage() {
  return (
    <PageShell
      className="items-center justify-between px-5"
      style={{
        background: 'linear-gradient(160deg, #F8D7DA 0%, #EFB4C0 48%, #FFF8F0 100%)',
      }}
    >
      <ScrapbookLayer page="cover" tone="pink" />

      <motion.div
        className="relative z-10 mt-2 w-full text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="font-handwritten text-vintage-brown text-base -rotate-2">
          made with tiny memory I kept
        </p>
        <h1 className="font-script text-[3rem] text-[#7B5E57] leading-none mt-1">
          All The In-Betweens
        </h1>
      </motion.div>

      <div className="relative z-10 w-full flex-1 flex items-center justify-center min-h-0">
        <motion.div
          className="taped-card relative w-[78%] max-w-[300px] bg-white p-2.5 pb-12 shadow-[0_12px_28px_rgba(123,94,87,0.22)] rotate-[-2deg]"
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          <img
            src={photos.cover}
            alt="Our memory"
            className="w-full aspect-[4/5] object-cover"
            loading="eager"
          />
          <p className="absolute bottom-4 left-4 right-4 font-handwritten text-vintage-brown text-lg text-center">
            Favorite chapter of my life.
          </p>
        </motion.div>

        <p className="absolute left-0 top-[18%] z-20 w-24 rotate-[-10deg] bg-[#FFF8F0] px-3 py-2 font-handwritten text-sm leading-none text-vintage-brown shadow-md">
          this is not a website. this is our book.
        </p>
        <p className="absolute right-0 bottom-[18%] z-20 w-24 rotate-[9deg] bg-[#D9EEFF] px-3 py-2 font-handwritten text-sm leading-none text-[#38556E] shadow-md">
          open one page at a time
        </p>
      </div>

      <div className="relative z-10 mb-1 w-full">
        <p className="mx-auto mb-3 max-w-xs text-center font-body text-[12px] leading-relaxed text-vintage-brown">
          {mainQuotes.cover}
        </p>
        <QuoteStrip quotes={quotesByPage.cover} />
      </div>
    </PageShell>
  )
}
