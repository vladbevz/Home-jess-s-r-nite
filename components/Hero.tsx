'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-hero"
    >
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&auto=format&fit=crop&q=80"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay — gradient keeps brand palette */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 35% 55%, rgba(14,32,24,0.92) 0%, rgba(10,15,13,0.97) 60%), radial-gradient(ellipse at 75% 15%, rgba(12,26,15,0.88) 0%, transparent 55%)',
        }}
      />

      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-28 bg-gradient-to-b from-gold/25 to-transparent z-20" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage/[0.04] blur-[120px] pointer-events-none z-[2]" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Brand label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-sans text-sage text-[11px] md:text-xs tracking-[0.5em] uppercase mb-10"
        >
          Home Jess Sérénité
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-cormorant font-light text-5xl md:text-7xl lg:text-[88px] text-cream leading-[1.08] mb-7"
        >
          Retrouvez l&apos;équilibre.
          <br />
          <em className="text-champagne">Reconnectez-vous</em>
          <br />
          à vous-même.
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          style={{ originX: 0.5 }}
          className="w-14 h-px bg-gold/45 mx-auto mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-dm-sans font-light text-champagne/55 text-base md:text-lg tracking-wide mb-14"
        >
          Soins énergétiques &amp; thérapies holistiques à Nîmes
        </motion.p>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          href="#reservation"
          className="inline-block border border-gold/50 text-gold font-dm-sans text-[11px] tracking-[0.35em] uppercase px-12 py-4 transition-all duration-500 hover:bg-gold hover:text-dark-bg hover:border-gold hover:tracking-[0.4em]"
        >
          Prendre rendez-vous
        </motion.a>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="font-dm-sans text-sage/35 text-[9px] tracking-[0.5em] uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          className="w-px h-14 bg-gradient-to-b from-sage/35 to-transparent"
        />
      </motion.div>
    </section>
  )
}
