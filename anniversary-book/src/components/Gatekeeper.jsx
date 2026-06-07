import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeartBurst from './HeartBurst'
import QuotePill from './QuotePill'

export default function Gatekeeper({ onUnlock }) {
  const [noPos, setNoPos] = useState({ x: 50, y: 72 })
  const [noHidden, setNoHidden] = useState(false)
  const [bursting, setBursting] = useState(false)
  const [peeling, setPeeling] = useState(false)

  const dartNoButton = useCallback(() => {
    setNoPos({
      x: 8 + Math.random() * 72,
      y: 35 + Math.random() * 45,
    })
  }, [])

  const handleYes = () => {
    setBursting(true)
    setTimeout(() => {
      setPeeling(true)
      setTimeout(onUnlock, 700)
    }, 900)
  }

  return (
    <AnimatePresence>
      {!peeling && (
        <motion.div
          className="absolute inset-0 z-40 flex items-center justify-center px-6"
          style={{
            background: 'linear-gradient(160deg, #fce4ec 0%, #fff8f0 50%, #ede9fe 100%)',
          }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-6 w-28 h-28 bg-rose-400/30 rounded-full blur-2xl" />
            <div className="absolute bottom-24 right-4 w-36 h-36 bg-violet-400/25 rounded-full blur-3xl" />
          </div>

          <HeartBurst active={bursting} />

          <div className="relative w-full max-w-xs">
            <div className="bg-white/80 backdrop-blur-sm rounded-[10px] shadow-[0_8px_30px_rgba(244,114,182,0.2)] p-8 text-center border border-rose-200/50">
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <QuotePill text="My forever person." index={0} size="sm" />
                <QuotePill text="Still choosing you." index={2} size="sm" />
              </div>

              <p className="font-script text-vintage-brown text-4xl leading-tight mb-2">
                Do you love me?
              </p>
              <p className="font-handwritten text-vintage-brown/80 text-base leading-relaxed mb-8">
                There is only one real answer.
              </p>

              <div className="relative h-44">
                <motion.button
                  type="button"
                  onClick={handleYes}
                  className="w-full py-4 rounded-[8px] text-white font-body font-semibold text-lg shadow-[0_6px_20px_rgba(244,114,182,0.5)] active:scale-95 transition-transform bg-gradient-to-r from-rose-500 to-pink-600"
                  whileTap={{ scale: 0.95 }}
                >
                  YES
                </motion.button>

                <AnimatePresence>
                  {!noHidden && (
                    <motion.button
                      type="button"
                      className="absolute py-2.5 px-6 rounded-[8px] border-2 border-violet-300/50 text-violet-600 font-body text-sm bg-white/90 shadow-sm"
                      style={{
                        left: `${noPos.x}%`,
                        top: `${noPos.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={dartNoButton}
                      onPointerEnter={dartNoButton}
                      onTouchStart={dartNoButton}
                      onClick={() => setNoHidden(true)}
                      exit={{ opacity: 0, scale: 0.6, rotate: -10 }}
                      transition={{ duration: 0.18 }}
                    >
                      NO
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
