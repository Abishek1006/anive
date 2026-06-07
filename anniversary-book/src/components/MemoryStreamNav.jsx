import { motion } from 'framer-motion'
import clsx from 'clsx'

const TABS = [
  { id: 'cover', label: 'Home', mark: '01', color: '#F8D7DA' },
  { id: 'memory-sounds', label: 'Films', mark: '02', color: '#BFDFFF' },
  { id: 'little-things', label: 'Us', mark: '03', color: '#FFF8F0' },
  { id: 'cute-chaos', label: 'Chaos', mark: '04', color: '#DCCCFD' },
  { id: 'prayed-for', label: 'Prayed', mark: '05', color: '#EFB4C0' },
  { id: 'promise-letter', label: 'Letter', mark: '06', color: '#E8D8C4' },
  { id: 'tomorrows', label: 'Future', mark: '07', color: '#D9EEFF' },
]

export default function MemoryStreamNav({ activeSection, onNavigate }) {
  return (
    <nav
      className="absolute bottom-0 left-0 right-0 z-50"
      aria-label="Scrapbook page navigation"
    >
      <div className="bg-gradient-to-t from-[#FFF8F0] via-[#FFF8F0]/94 to-transparent px-2 pb-3 pt-6">
        <div className="rounded-[8px] border border-[#7B5E57]/20 bg-[#FFF8F0]/90 px-1.5 py-2 shadow-[0_-6px_22px_rgba(123,94,87,0.14)]">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {TABS.map((tab) => {
              const isActive = activeSection === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onNavigate(tab.id)}
                  aria-label={tab.label}
                  aria-current={isActive ? 'page' : undefined}
                  className={clsx(
                    'relative flex min-w-[50px] flex-col items-center justify-center rounded-[6px] border px-2 py-1.5 transition-transform active:scale-95',
                    isActive
                      ? 'border-[#7B5E57]/40 shadow-md'
                      : 'border-[#7B5E57]/15 opacity-70',
                  )}
                  style={{ background: tab.color }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="paper-tab"
                      className="absolute -top-2 h-4 w-9 rotate-[-5deg] rounded-[3px] border border-[#7B5E57]/15 bg-white/70"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                  <span className="font-handwritten text-[13px] leading-none text-vintage-brown">
                    {tab.mark}
                  </span>
                  <span className="mt-0.5 font-body text-[8px] font-medium leading-none text-vintage-brown">
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
