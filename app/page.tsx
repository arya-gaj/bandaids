'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.97 },
  }

  const overlayVariants = {
    rest: { opacity: 0, scale: 1.05 },
    hover: {
      opacity: 0.28,
      scale: 1.05,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')

    const trimmed = email.trim().toLowerCase()
    if (!trimmed) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to join waitlist')
      }
      setStatus('success')
      setMessage('You’re on the list. We’ll be in touch soon.')
      setEmail('')
    } catch (err: any) {
      setStatus('error')
      setMessage(err?.message || 'Something went wrong')
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-[#F5E6D3] via-[#E8DCC6] to-[#FFFFFF]"
        animate={{
          background: [
            'linear-gradient(135deg, #F5E6D3 0%, #E8DCC6 50%, #FFFFFF 100%)',
            'linear-gradient(135deg, #FFE5D9 0%, #F5E6D3 50%, #FFF8E7 100%)',
            'linear-gradient(135deg, #F5E6D3 0%, #E8DCC6 50%, #FFFFFF 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed inset-0 bg-gradient-to-tr from-[#8B7355]/10 via-[#FFD93D]/5 to-transparent"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed inset-0 bg-gradient-to-bl from-transparent via-[#FFD93D]/5 to-[#8B7355]/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.35, 0.15],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-medium mb-4 tracking-tight"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              letterSpacing: '-0.02em',
              color: '#8B7355',
            }}
            animate={{ opacity: [0.25, 0.35, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="italic">b</span>andaids.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-light"
            style={{ color: '#8B7355' }}
            animate={{ opacity: [0.25, 0.35, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            your job search, fixed.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass glass-strong rounded-3xl p-8 md:p-12 glow-edge">
            <div className="space-y-6 md:space-y-8 text-center">
              <div className="space-y-3 md:space-y-4">
                <p className="text-lg md:text-xl text-[#8B7355]/45">for every person trying again.</p>
                <p className="text-lg md:text-xl text-[#8B7355]/45">for every dream that didn’t fit on a resume.</p>
                <p className="text-lg md:text-xl text-[#8B7355]/45">we see you.</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-medium text-[#8B7355]/60">something real is coming soon.</p>
              </div>
              <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <input
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-auto flex-1 px-5 py-4 glass rounded-2xl text-[#2C2C2C] placeholder-[#8B7355]/60 focus:outline-none focus:ring-2 focus:ring-[#8B7355]/40 focus:glass-strong morph-transition"
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 glass-strong rounded-2xl text-[#2C2C2C]/60 font-semibold morph-transition disabled:opacity-40 disabled:cursor-not-allowed glow-edge overflow-hidden"
                  variants={buttonVariants}
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    className="pointer-events-none absolute inset-[8%] rounded-[1.2rem] bg-gradient-to-r from-[#8B7355]/90 via-[#FFD93D]/70 to-[#8B7355]/90 blur-xl"
                    variants={overlayVariants}
                  />
                  <Mail className="w-5 h-5 relative z-10 text-inherit transition-colors group-hover:text-[#2C2C2C]/85" />
                  <span className="relative z-10 transition-colors group-hover:text-[#2C2C2C]/85">
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                  </span>
                </motion.button>
              </form>
              {message && (
                <div className={`text-sm ${status === 'error' ? 'text-[#8B7355]' : 'text-[#8B7355]/90'}`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-20 text-center text-[#8B7355]/60 text-sm"
        >
          built with love (and a few bandaids) by someone who’s been through the mess.
        </motion.footer>
      </div>
    </div>
  )
}

