import { motion } from 'framer-motion'
import WaxSeal from '../components/WaxSeal'
import PhotoCorner from '../components/PhotoCorner'
import QuoteStrip from '../components/QuoteStrip'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { photos } from '../photos/photos'
import { mainQuotes, quotesByPage } from '../data/quotes'

export default function PromiseLetterPage() {
  return (
    <PageShell
      className="items-center justify-center px-4"
      style={{
        background: 'linear-gradient(160deg, #FFF8F0 0%, #E8D8C4 44%, #F8D7DA 100%)',
      }}
    >
      <ScrapbookLayer page="promise-letter" tone="cream" />

      <motion.div
        className="relative z-10 w-full rounded-[8px] bg-[#FFF8F0]/95 p-5 shadow-[0_14px_30px_rgba(123,94,87,0.2)] stitched-border rotate-[-1deg]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 26px, #e8d8c466 26px, #e8d8c466 27px)',
        }}
      >
        <div className="absolute -top-3 left-10 h-6 w-24 rotate-[-7deg] bg-[#F8D7DA]/85 border border-[#7B5E57]/20" />
        <div className="absolute -top-3 right-10 h-6 w-24 rotate-[7deg] bg-[#D9EEFF]/85 border border-[#7B5E57]/20" />

        <div className="absolute top-4 right-3 w-20 rotate-6 z-10">
          <div className="relative bg-white p-1 shadow-[0_6px_16px_rgba(123,94,87,0.2)]" style={{ borderTop: '2px solid #EFB4C0' }}>
            {/* USER_PHOTO: LETTER_CORNER */}
            <img src={photos.letterCorner} alt="A tiny memory tucked in the letter" className="w-full aspect-square object-cover" loading="lazy" />
            <PhotoCorner position="top-left" />
            <PhotoCorner position="top-right" />
            <PhotoCorner position="bottom-left" />
            <PhotoCorner position="bottom-right" />
          </div>
        </div>

        <div className="pr-16 font-handwritten text-[15px] leading-7 text-vintage-brown">
          <p className="mb-2.5">Dear Daling,</p>
          <p className="mb-2.5">
           I promise to hold your hand when the world feels heavy on the quiet, ordinary days.
            My heart exists more to love you than to keep me alive.
You are beautiful—anyone can see that. But what I see in you goes far beyond & forgotten.
.I'll never ask you to shrink yourself to fit or to satisfy my expectations.
You're not loved because you prove your worth to me.You're not prioritized because you earn it.
You're chosen.
Chosen exactly as you are for your imperfections, your fears, and every things that makes you, you.
          </p>
          <p>
            Yours forever,<br />
            <span className="text-xl text-[#7B4450]">Abishek</span>
          </p>
        </div>

        <div className="absolute bottom-3 right-3">
          <WaxSeal />
        </div>
      </motion.div>

      <QuoteStrip quotes={quotesByPage['promise-letter']} className="relative z-10 mt-4" />
    </PageShell>
  )
}
