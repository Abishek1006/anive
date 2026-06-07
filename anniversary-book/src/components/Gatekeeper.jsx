import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeartBurst from './HeartBurst'
import QuotePill from './QuotePill'

export default function Gatekeeper({ onUnlock }) {
  // Steps: 1 = "How much do you love me?", 2 = "How much do you think I love you?", 3 = Sweet Correction Plot Twist
  const [step, setStep] = useState(1)
  const [loveVal1, setLoveVal1] = useState(50)
  const [loveVal2, setLoveVal2] = useState(50)
  
  const [bursting, setBursting] = useState(false)
  const [peeling, setPeeling] = useState(false)

  // Dynamic feedback sentences for her slider responses
  const getFeedbackMessage = (val) => {
    if (val === 0) return "Wait... zero?! 🥺"
    if (val < 30) return "Hmm, suspicious...😏"
    if (val < 60) return "You are soo sweet! Thanks for that ❤️"
    if (val < 85) return "Wow, that's incredibly sweet! 🥰"
    if (val < 100) return "Almost off the charts! 💖"
    return "That's why you are my Princess ✨"
  }

  // Initiates the original heart burst and page peel transition to unlock the app
  const handleFinalUnlock = () => {
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
            <div className="bg-white/80 backdrop-blur-sm rounded-[10px] shadow-[0_8px_30px_rgba(244,114,182,0.2)] p-8 text-center border border-rose-200/50 min-h-[380px] flex flex-col justify-between">
              
              {/* Header Decorative Elements */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <QuotePill text="My forever person." index={0} size="sm" />
                <QuotePill text="Still choosing you." index={2} size="sm" />
              </div>

              {/* Dynamic Step Window */}
              <div className="flex-1 flex flex-col justify-center my-4">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="gate-step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center w-full"
                    >
                      <p className="font-script text-vintage-brown text-4xl leading-tight mb-2">
                        How much do you love me?
                      </p>
                      <p className="font-handwritten text-vintage-brown/60 text-sm mb-6">
                        Be honest! Slider answers only.
                      </p>
                      
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={loveVal1}
                        onChange={(e) => setLoveVal1(Number(e.target.value))}
                        className="w-full accent-rose-500 cursor-pointer h-2 bg-rose-100 rounded-lg appearance-none mb-4"
                      />
                      
                      <p className="font-handwritten text-base text-rose-600 font-semibold h-6 mb-6">
                        {getFeedbackMessage(loveVal1)}
                      </p>

                      <motion.button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-full py-3 rounded-[8px] text-white font-body font-semibold text-base shadow-md bg-gradient-to-r from-rose-500 to-pink-600 active:scale-95 transition-transform"
                        whileTap={{ scale: 0.95 }}
                      >
                        Next question →
                      </motion.button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="gate-step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col items-center w-full"
                    >
                      <p className="font-script text-vintage-brown text-3xl leading-tight mb-2">
                        How much do you think I love you?
                      </p>
                      <p className="font-handwritten text-vintage-brown/60 text-sm mb-6">
                        Take a wild guess...
                      </p>

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={loveVal2}
                        onChange={(e) => setLoveVal2(Number(e.target.value))}
                        className="w-full accent-violet-500 cursor-pointer h-2 bg-violet-100 rounded-lg appearance-none mb-4"
                      />

                      <p className="font-handwritten text-lg text-violet-600 font-bold h-6 mb-6">
                        {loveVal2}%
                      </p>

                      <motion.button
                        type="button"
                        onClick={() => setStep(3)}
                        className="w-full py-3 rounded-[8px] text-white font-body font-semibold text-base shadow-md bg-gradient-to-r from-violet-500 to-indigo-600 active:scale-95 transition-transform"
                        whileTap={{ scale: 0.95 }}
                      >
                        Submit Answer 🔒
                      </motion.button>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="gate-step3"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                      className="flex flex-col items-center w-full text-center"
                    >
                      <p className="font-handwritten text-xl text-rose-600 font-bold leading-snug mb-3 animate-pulse">
                        Nope, incorrect! 🤭
                      </p>
                      <p className="font-script text-vintage-brown text-3xl leading-snug mb-8">
                        I love you way more—to the moon and back! 🌙✨
                      </p>

                      <motion.button
                        type="button"
                        onClick={handleFinalUnlock}
                        className="w-full py-4 rounded-[8px] text-white font-body font-bold text-lg shadow-[0_6px_20px_rgba(244,114,182,0.5)] bg-gradient-to-r from-rose-500 to-pink-600"
                        animate={{ scale: [1, 1.03, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enter Our Story Book 💖
                      </motion.button>
                    </motion.div>
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