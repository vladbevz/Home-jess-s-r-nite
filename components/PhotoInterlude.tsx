'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PhotoInterlude() {
  return (
    <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
      {/* Photo */}
      <Image
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&auto=format&fit=crop&q=80"
        alt="Séance de soin holistique"
        fill
        className="object-cover object-center"
      />

      {/* Heavy dark overlay */}
      <div className="absolute inset-0 bg-dark-bg/70" />

      {/* Gradient edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070c09] via-transparent to-[#0a0f0d]" />

      {/* Centered quote */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0.5 }}
          className="w-10 h-px bg-gold/50 mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-cormorant italic text-2xl md:text-4xl text-champagne/80 max-w-2xl leading-snug"
        >
          &ldquo;Chaque séance est une invitation à ralentir,
          <br className="hidden md:block" /> respirer et se recentrer sur soi.&rdquo;
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ originX: 0.5 }}
          className="w-10 h-px bg-gold/50 mt-8"
        />
      </div>
    </section>
  )
}
