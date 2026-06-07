import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Gatekeeper from './components/Gatekeeper'
import MemoryStreamNav from './components/MemoryStreamNav'
import StreamHeader from './components/StreamHeader'
import CoverPage from './pages/CoverPage'
import MemorySoundsPage from './pages/MemorySoundsPage'
import LittleThingsPage from './pages/LittleThingsPage'
import CuteChaosPage from './pages/CuteChaosPage'
import PrayedForPage from './pages/PrayedForPage'
import PromiseLetterPage from './pages/PromiseLetterPage'
import TomorrowsPage from './pages/TomorrowsPage'

const PAGES = {
  cover: CoverPage,
  'memory-sounds': MemorySoundsPage,
  'little-things': LittleThingsPage,
  'cute-chaos': CuteChaosPage,
  'prayed-for': PrayedForPage,
  'promise-letter': PromiseLetterPage,
  tomorrows: TomorrowsPage,
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [activeSection, setActiveSection] = useState('cover')

  const handleNavigate = useCallback((sectionId) => {
    setActiveSection(sectionId)
  }, [])

  const ActivePage = PAGES[activeSection]

  return (
    <div className="min-h-svh bg-[#E8D8C4] flex justify-center">
      <div className="w-full max-w-[440px] h-svh relative shadow-[0_0_36px_rgba(123,94,87,0.22)] bg-cream overflow-hidden">
        {!unlocked && <Gatekeeper onUnlock={() => setUnlocked(true)} />}

        {unlocked && (
          <>
            <StreamHeader activeSection={activeSection} />

            <div className="h-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  className="h-full w-full"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                >
                  <ActivePage />
                </motion.div>
              </AnimatePresence>
            </div>

            <MemoryStreamNav
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />
          </>
        )}
      </div>
    </div>
  )
}
