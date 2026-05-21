'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function APropos() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-dark-bg overflow-hidden">
      {/* Ambient accent */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sage/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-28 items-center">
        {/* Photo placeholder */}
        <motion.div {...appear(0)} className="relative order-2 md:order-1">
          <div className="relative aspect-[3/4] max-w-[340px] mx-auto">
            {/* Offset gold frame */}
            <div className="absolute inset-0 border border-gold/15 translate-x-5 translate-y-5 rounded-sm" />
            {/* Photo container */}
            <div className="relative h-full rounded-sm border border-gold/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1609299229942-18d773601acc?w=700&auto=format&fit=crop&q=80"
                alt="Thérapeute holistique"
                fill
                className="object-cover object-top"
              />
              {/* Bottom gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-transparent to-transparent" />
              {/* Name caption */}
              <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-2">
                <div className="w-8 h-px bg-gold/40" />
                <p className="font-dm-sans text-champagne/50 text-[10px] tracking-[0.35em] uppercase">
                  Jessica Lamerand
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="order-1 md:order-2 space-y-7">
          <motion.p {...appear(0.05)} className="font-dm-sans text-sage text-[11px] tracking-[0.45em] uppercase">
            À propos
          </motion.p>

          <motion.h2
            {...appear(0.12)}
            className="font-cormorant font-light text-4xl md:text-5xl text-cream leading-tight"
          >
            Thérapeute holistique,
            <br />
            <em className="text-champagne">à votre écoute</em>
          </motion.h2>

          <motion.div {...appear(0.18)} className="w-10 h-px bg-gold/40" />

          <motion.p
            {...appear(0.22)}
            className="font-dm-sans font-light text-champagne/55 text-[15px] leading-[1.85]"
          >
            Passionnée par le bien-être et la guérison profonde, Jessica vous accueille dans un espace
            de confiance et de bienveillance absolue. Chaque séance est une invitation à ralentir,
            respirer et se recentrer sur soi.
          </motion.p>

          <motion.p
            {...appear(0.28)}
            className="font-dm-sans font-light text-champagne/55 text-[15px] leading-[1.85]"
          >
            Formée aux soins énergétiques, à l&apos;hypnose et aux thérapies corporelles, elle accompagne
            chaque personne avec douceur et attention — en cabinet à Nîmes ou en visioconférence.
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote
            {...appear(0.35)}
            className="border-l border-gold/30 pl-6 py-1 mt-2"
          >
            <p className="font-cormorant italic text-xl md:text-2xl text-champagne/80 leading-snug">
              &ldquo;J&apos;ai pu me libérer de certains fardeaux...
              <br />
              Je recommande à 10&nbsp;000&nbsp;%&rdquo;
            </p>
            <footer className="mt-3 font-dm-sans text-sage/50 text-[10px] tracking-[0.35em] uppercase">
              — Patiente
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
