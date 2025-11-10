'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="h-screen relative overflow-hidden bg-white">
      {/* Enhanced Animated Background Layers */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#E8DCC6] to-[#FFFFFF]"
        animate={{
          background: [
            'linear-gradient(135deg, #F5E6D3 0%, #E8DCC6 50%, #FFFFFF 100%)',
            'linear-gradient(135deg, #FFE5D9 0%, #F5E6D3 50%, #FFF8E7 100%)',
            'linear-gradient(135deg, #F5E6D3 0%, #E8DCC6 50%, #FFFFFF 100%)',
            'linear-gradient(135deg, #E8DCC6 0%, #F5E6D3 50%, #FFF8E7 100%)',
            'linear-gradient(135deg, #F5E6D3 0%, #E8DCC6 50%, #FFFFFF 100%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed inset-0 bg-gradient-to-tr from-[#8B7355]/15 via-[#FFD93D]/8 to-transparent"
        animate={{
          scale: [1, 1.3, 1.1, 1],
          opacity: [0.25, 0.5, 0.3, 0.25],
          rotate: [0, 8, -3, 0],
          x: [0, 20, -15, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed inset-0 bg-gradient-to-bl from-transparent via-[#FFD93D]/8 to-[#8B7355]/15"
        animate={{
          scale: [1, 1.2, 1.15, 1],
          opacity: [0.2, 0.45, 0.3, 0.2],
          rotate: [0, -8, 3, 0],
          x: [0, -20, 15, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed inset-0 bg-gradient-to-r from-[#FFD93D]/5 via-transparent to-[#8B7355]/10"
        animate={{
          opacity: [0.1, 0.25, 0.15, 0.1],
          scale: [1, 1.15, 1.05, 1],
          rotate: [0, 12, -8, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />


      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header */}
        <header className="px-8 md:px-12 py-6 flex items-center justify-between flex-shrink-0">
          {/* Logo - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-2xl md:text-3xl font-medium tracking-tight"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                letterSpacing: '-0.02em',
                color: '#8B7355',
              }}
              animate={{ opacity: [0.7, 0.95, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="italic">b</span>andaids.
            </motion.h1>
          </motion.div>

          {/* Pre-register Button - Top Right */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group flex items-center gap-2 px-6 py-3 glass rounded-lg text-[#8B7355] font-medium hover:glass-strong transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>hold on tight</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.button>
        </header>

        {/* Main Content - Left Aligned */}
        <main className="flex-1 flex items-center px-8 md:px-12 py-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
             <h2
               className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-4 md:mb-6 tracking-tight"
               style={{
                 fontFamily: 'var(--font-dm-sans), sans-serif',
                 letterSpacing: '-0.02em',
                 color: '#8B7355',
                 opacity: 0.75,
               }}
             >
               your job search, made easier
             </h2>
             <p
               className="text-base md:text-lg lg:text-xl font-light leading-relaxed"
               style={{
                 fontFamily: 'var(--font-dm-sans), sans-serif',
                 color: '#8B7355',
                 opacity: 0.5,
               }}
             >
              we quietly guide job seekers, bringing recruiters and connecting you with opportunities that truly fit. your next step, a little closer.
              <br />
              <br />
              waitlist opens 1st december.
            </p>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="px-8 md:px-12 py-4 flex items-center justify-between text-xs md:text-sm flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[#8B7355]/50"
          >
            <p>© 2025 bandaids.</p>
            <p>This site is currently in development</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-right text-[#8B7355]/50"
          >
            <p>Project powered by</p>
            <p className="font-medium">bandaids team</p>
          </motion.div>
        </footer>
      </div>
    </div>
  )
}
