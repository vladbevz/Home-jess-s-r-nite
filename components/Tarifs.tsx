'use client'

import { motion } from 'framer-motion'

const appear = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.85, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function Tarifs() {
  return (
    <section id="reservation" className="relative py-28 md:py-40 px-6 bg-[#070c09] overflow-hidden">
      {/* Ambient */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[400px] bg-sage/[0.025] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left — info */}
          <div className="space-y-8">
            <motion.p {...appear(0)} className="font-dm-sans text-sage text-[11px] tracking-[0.45em] uppercase">
              Réservation
            </motion.p>

            <motion.h2
              {...appear(0.08)}
              className="font-cormorant font-light text-4xl md:text-5xl text-cream leading-tight"
            >
              Prenez soin
              <br />
              <em className="text-champagne">de vous</em>
            </motion.h2>

            <motion.div {...appear(0.14)} className="w-10 h-px bg-gold/40" />

            <motion.p {...appear(0.18)} className="font-dm-sans font-light text-champagne/55 text-[15px] leading-[1.85]">
              Les séances sont disponibles en cabinet à Nîmes ou en visioconférence.
              Chaque accompagnement est adapté à vos besoins et à votre rythme.
            </motion.p>

            {/* Phone CTA */}
            <motion.div {...appear(0.24)} className="border border-gold/20 p-8">
              <p className="font-dm-sans text-sage/60 text-[10px] tracking-[0.4em] uppercase mb-3">
                Réservation par téléphone
              </p>
              <a
                href="tel:0766797875"
                className="font-cormorant text-3xl md:text-4xl text-gold hover:text-champagne transition-colors duration-300"
              >
                07 66 79 78 75
              </a>
              <p className="font-dm-sans font-light text-champagne/35 text-xs mt-3 leading-relaxed">
                Du lundi au vendredi — 9h à 19h
                <br />
                20 rue Parmentier, Nîmes 30000
              </p>
            </motion.div>

            {/* In-person / online badges */}
            <motion.div {...appear(0.3)} className="flex gap-4">
              {['En cabinet', 'En visio'].map((label) => (
                <div
                  key={label}
                  className="border border-sage/20 px-5 py-2 font-dm-sans text-sage/60 text-[11px] tracking-[0.25em] uppercase"
                >
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — contact form */}
          <motion.div {...appear(0.1)} className="border border-gold/10 p-8 md:p-10 bg-dark-bg/60">
            <p className="font-dm-sans text-sage text-[11px] tracking-[0.4em] uppercase mb-8">
              Message
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="font-dm-sans text-champagne/40 text-[11px] tracking-widest uppercase block">
                  Prénom & Nom
                </label>
                <input
                  type="text"
                  placeholder="Jessica Martin"
                  className="w-full bg-transparent border-b border-gold/15 focus:border-gold/40 text-cream font-dm-sans text-sm py-3 outline-none placeholder:text-champagne/20 transition-colors duration-300"
                />
              </div>

              <div className="space-y-1">
                <label className="font-dm-sans text-champagne/40 text-[11px] tracking-widest uppercase block">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="jessica@exemple.fr"
                  className="w-full bg-transparent border-b border-gold/15 focus:border-gold/40 text-cream font-dm-sans text-sm py-3 outline-none placeholder:text-champagne/20 transition-colors duration-300"
                />
              </div>

              <div className="space-y-1">
                <label className="font-dm-sans text-champagne/40 text-[11px] tracking-widest uppercase block">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Je souhaite en savoir plus sur..."
                  className="w-full bg-transparent border-b border-gold/15 focus:border-gold/40 text-cream font-dm-sans text-sm py-3 outline-none placeholder:text-champagne/20 resize-none transition-colors duration-300"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full border border-gold/40 text-gold font-dm-sans text-[11px] tracking-[0.35em] uppercase py-4 transition-all duration-500 hover:bg-gold hover:text-dark-bg hover:border-gold"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
