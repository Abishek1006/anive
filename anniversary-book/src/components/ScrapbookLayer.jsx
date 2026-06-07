import clsx from 'clsx'
import { motion } from 'framer-motion'
import { notesByPage } from '../data/quotes'

const STICKERS = [
  { text: '<3', top: '8%', left: '6%', rotate: -12, kind: 'heart' },
  { text: '*', top: '12%', right: '12%', rotate: 18, kind: 'star' },
  { text: 'xoxo', top: '22%', left: '78%', rotate: 9, kind: 'tape' },
  { text: 'bow', top: '33%', left: '4%', rotate: -8, kind: 'label' },
  { text: 'pin', top: '45%', right: '5%', rotate: 12, kind: 'pin' },
  { text: 'clip', top: '58%', left: '7%', rotate: -16, kind: 'clip' },
  { text: 'cloud', top: '67%', right: '8%', rotate: 7, kind: 'cloud' },
  { text: 'rose', top: '78%', left: '14%', rotate: -5, kind: 'label' },
  { text: 'mail', top: '84%', right: '18%', rotate: 13, kind: 'tape' },
  { text: 'shine', top: '50%', left: '45%', rotate: -10, kind: 'star' },
  { text: 'cam', top: '18%', left: '42%', rotate: -7, kind: 'label' },
  { text: '+', top: '72%', left: '70%', rotate: 18, kind: 'star' },
]

const notePositions = [
  { top: '9%', left: '20%', rotate: -6 },
  { top: '15%', right: '5%', rotate: 5 },
  { top: '27%', left: '7%', rotate: 7 },
  { top: '36%', right: '10%', rotate: -8 },
  { top: '47%', left: '13%', rotate: -4 },
  { top: '56%', right: '18%', rotate: 9 },
  { top: '65%', left: '4%', rotate: -10 },
  { top: '74%', right: '7%', rotate: 6 },
  { top: '82%', left: '34%', rotate: -7 },
  { top: '89%', right: '33%', rotate: 5 },
]

const toneColors = {
  pink: {
    ink: '#7B5E57',
    sticker: '#EFB4C0',
    paper: '#FFF8F0',
    accent: '#BFDFFF',
  },
  blue: {
    ink: '#38556E',
    sticker: '#BFDFFF',
    paper: '#FFF8F0',
    accent: '#EFB4C0',
  },
  cream: {
    ink: '#7B5E57',
    sticker: '#FFF8F0',
    paper: '#F8D7DA',
    accent: '#DCCCFD',
  },
  lavender: {
    ink: '#5F4B7A',
    sticker: '#DCCCFD',
    paper: '#FFF8F0',
    accent: '#F8D7DA',
  },
  rose: {
    ink: '#7B4450',
    sticker: '#EFB4C0',
    paper: '#FFF8F0',
    accent: '#D9EEFF',
  },
  blend: {
    ink: '#5E5368',
    sticker: '#DCCCFD',
    paper: '#FFF8F0',
    accent: '#BFDFFF',
  },
}

function Sticker({ item, colors, index }) {
  const isRound = item.kind === 'pin' || item.kind === 'star'
  const isCloud = item.kind === 'cloud'

  return (
    <motion.span
      className={clsx(
        'absolute z-[2] flex items-center justify-center select-none font-handwritten text-[13px] lowercase shadow-sm',
        isRound && 'h-7 w-7 rounded-full',
        isCloud && 'h-7 px-3 rounded-[999px]',
        item.kind === 'clip' && 'h-8 w-5 rounded-[8px] border-2 bg-transparent',
        item.kind === 'tape' && 'px-3 py-1 rounded-[3px]',
        item.kind === 'label' && 'px-2.5 py-1 rounded-[5px]',
      )}
      style={{
        top: item.top,
        left: item.left,
        right: item.right,
        rotate: `${item.rotate}deg`,
        color: colors.ink,
        background: item.kind === 'clip' ? 'transparent' : colors.sticker,
        borderColor: colors.ink,
        opacity: 0.8,
      }}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      {item.text}
    </motion.span>
  )
}

export default function ScrapbookLayer({ page, tone = 'pink', dense = false }) {
  const notes = notesByPage[page] || notesByPage.cover
  const colors = toneColors[tone] || toneColors.pink

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 paper-speckles opacity-70" />
      <div className="absolute left-4 right-4 top-16 border-t border-dashed opacity-35" style={{ borderColor: colors.ink }} />
      <div className="absolute left-5 top-20 bottom-24 w-px opacity-25" style={{ background: colors.ink }} />

      {STICKERS.map((item, index) => (
        <Sticker key={`${item.text}-${index}`} item={item} colors={colors} index={index} />
      ))}

      {notes.map((note, index) => {
        const pos = notePositions[index % notePositions.length]
        return (
          <motion.span
            key={`${page}-${note}`}
            className={clsx(
              'absolute z-[3] font-handwritten leading-none whitespace-nowrap',
              dense ? 'text-[14px]' : 'text-[13px]',
            )}
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              rotate: `${pos.rotate}deg`,
              color: colors.ink,
              opacity: 0.62,
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 0.62, y: 0 }}
            transition={{ delay: 0.04 * index }}
          >
            {note}
          </motion.span>
        )
      })}

      <svg className="absolute inset-x-0 bottom-24 z-[2] h-20 w-full opacity-40" viewBox="0 0 440 90" fill="none" aria-hidden="true">
        <path
          d="M28 50 C92 16, 132 86, 196 44 S312 10, 408 52"
          stroke={colors.ink}
          strokeWidth="1.5"
          strokeDasharray="5 6"
        />
        <path
          d="M348 48 l18 4 l-14 12"
          stroke={colors.ink}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div
        className="absolute -bottom-5 left-10 h-16 w-40 rotate-[-6deg] rounded-[4px] opacity-55"
        style={{ background: colors.accent }}
      />
      <div
        className="absolute -top-6 right-8 h-14 w-36 rotate-[8deg] rounded-[4px] opacity-45"
        style={{ background: colors.paper }}
      />
    </div>
  )
}
