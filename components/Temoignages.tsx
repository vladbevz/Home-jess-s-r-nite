'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Jessica est très compétente, pleine d\'empathie et super gentille. Je la recommande vivement à tous ceux qui cherchent un accompagnement bienveillant.',
    author: 'Claudine D.',
    source: 'Resalib',
  },
  {
    quote: 'Mes maux ont totalement disparu après la séance. Vous pouvez y aller les yeux fermés, vous serez entre de bonnes mains.',
    author: 'Anonyme',
    source: 'Groupon',
  },
  {
    quote: 'J\'ai ressenti beaucoup d\'émotions et pu me libérer de certains fardeaux que je portais depuis longtemps. Une expérience transformatrice.',
    author: 'Anonyme',
    source: 'Resalib',
  },
]

export default function Temoignages() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-dark-bg overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-20 bg-gradient-to-b from-gold/20 to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/[0.025] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-dm-sans text-sage text-[11px] tracking-[0.45em] uppercase mb-4"
          >
            Témoignages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-cormorant font-light text-5xl md:text-[58px] text-cream leading-tight"
          >
            Ce qu&apos;ils
            <em className="text-champagne"> ressentent</em>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ originX: 0.5 }}
            className="w-12 h-px bg-gold/40 mx-auto mt-8"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/[0.08]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: i * 0.1 }}
              className="bg-dark-bg p-10 md:p-12 flex flex-col"
            >
              {/* Opening quote mark */}
              <div className="font-cormorant text-gold/30 text-7xl leading-none mb-4 select-none">&ldquo;</div>

              {/* Quote */}
              <blockquote className="font-cormorant italic text-[19px] md:text-xl text-champagne/75 leading-snug flex-1">
                {t.quote}
              </blockquote>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/25 my-6" />

              {/* Attribution */}
              <footer className="flex items-center justify-between">
                <span className="font-dm-sans text-cream/60 text-xs tracking-wide">{t.author}</span>
                <span className="font-dm-sans text-sage/40 text-[10px] tracking-[0.25em] uppercase">{t.source}</span>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
