import { motion } from 'framer-motion'
import QuoteStrip from '../components/QuoteStrip'
import QuotePill from '../components/QuotePill'
import PageShell from '../components/PageShell'
import ScrapbookLayer from '../components/ScrapbookLayer'
import { photos } from '../photos/photos'
import { mainQuotes, quotesByPage } from '../data/quotes'

const chaosPhotos = [
  { src: photos.chaosTexture1, alt: 'Our silly memory', tag: 'CHAOS_ONE', rotate: -13, top: '6%', left: '4%', z: 10 },
  { src: photos.chaosTexture2, alt: 'Our playful memory', tag: 'CHAOS_TWO', rotate: 11, top: '16%', right: '1%', z: 20 },
  { src: photos.chaosTexture3, alt: 'Our cute chaos', tag: 'CHAOS_THREE', rotate: -4, top: '44%', left: '23%', z: 30 },
]

export default function CuteChaosPage() {
  return (
    <PageShell
      className="items-center px-5"
      style={{
        background: 'linear-gradient(145deg, #DCCCFD 0%, #E9E1FF 50%, #FFF8F0 100%)',
      }}
    >
      <ScrapbookLayer page="cute-chaos" tone="lavender" dense />

      <motion.div
        className="relative z-10 w-full text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-handwritten text-[#5F4B7A] text-base rotate-1">messy page, favorite person</p>
        <h2 className="font-script text-[2.55rem] text-[#5F4B7A] leading-none">
          Our Cute Chaos
        </h2>
        <p className="mx-auto mt-2 max-w-xs rounded-[6px] bg-white/65 px-3 py-2 font-body text-[12px] leading-relaxed text-[#5F4B7A] shadow-sm">
          {mainQuotes.cuteChaos}
        </p>
      </motion.div>

      <div className="relative z-10 w-full flex-1 min-h-0">
        {chaosPhotos.map((photo, i) => (
          <motion.div
            key={photo.tag}
            className="absolute w-32"
            style={{ top: photo.top, left: photo.left, right: photo.right, zIndex: photo.z, rotate: `${photo.rotate}deg` }}
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="relative bg-white p-1.5 pb-7 shadow-[0_8px_18px_rgba(95,75,122,0.22)]"
              style={{ borderTop: `4px solid ${['#F8D7DA', '#BFDFFF', '#EFB4C0'][i]}` }}
            >
              <span className="absolute -top-3 left-4 h-5 w-14 rotate-[-7deg] bg-[#FFF8F0]/80 border border-[#7B5E57]/20" />
              {/* USER_PHOTO: {photo.tag} */}
              <img src={photo.src} alt={photo.alt} className="w-full aspect-square object-cover" loading="lazy" />
              <p className="mt-1 text-center font-handwritten text-sm text-[#5F4B7A]">
                {['laugh', 'weird romance', 'cute vibe'][i]}
              </p>
            </div>
          </motion.div>
        ))}

        <QuotePill text="99% cute" index={0} className="absolute top-2 right-3 rotate-12 z-40" size="lg" />
        <QuotePill text="1% menace" index={1} className="absolute bottom-16 left-2 -rotate-6 z-40" size="lg" />
        <QuotePill text="no refunds" index={2} className="absolute bottom-5 right-6 rotate-3 z-40" size="md" />
      </div>

      <QuoteStrip quotes={quotesByPage['cute-chaos']} className="relative z-10" />
    </PageShell>
  )
}
