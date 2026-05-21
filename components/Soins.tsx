'use client'

import { motion } from 'framer-motion'

const services = [
  {
    name: 'Reiki',
    description:
      "Transmission d'énergie universelle pour rétablir l'équilibre et favoriser la guérison naturelle du corps et de l'esprit.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="0.7">
        <circle cx="18" cy="18" r="13" />
        <circle cx="18" cy="18" r="7" />
        <line x1="18" y1="5" x2="18" y2="11" />
        <line x1="18" y1="25" x2="18" y2="31" />
        <line x1="5" y1="18" x2="11" y2="18" />
        <line x1="25" y1="18" x2="31" y2="18" />
        <line x1="9.4" y1="9.4" x2="13.5" y2="13.5" />
        <line x1="22.5" y1="22.5" x2="26.6" y2="26.6" />
        <line x1="26.6" y1="9.4" x2="22.5" y2="13.5" />
        <line x1="13.5" y1="22.5" x2="9.4" y2="26.6" />
      </svg>
    ),
  },
  {
    name: 'Lahochi',
    description:
      'Soin énergétique profond activant la force de guérison intérieure à travers des fréquences de haute vibration.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="0.7">
        <circle cx="18" cy="18" r="14" />
        <circle cx="18" cy="18" r="9" />
        <circle cx="18" cy="18" r="4" />
        <circle cx="18" cy="18" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Magnétisme',
    description:
      'Rééquilibrage énergétique par passes magnétiques pour soulager douleurs chroniques et tensions profondes.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="0.7">
        <path d="M5 12 C12 8, 24 8, 31 12" />
        <path d="M5 18 C12 14, 24 14, 31 18" />
        <path d="M5 24 C12 20, 24 20, 31 24" />
        <line x1="5" y1="12" x2="5" y2="24" />
        <line x1="31" y1="12" x2="31" y2="24" />
      </svg>
    ),
  },
  {
    name: 'Soin du visage énergétique',
    description:
      "Alliance de soins esthétiques et énergétiques pour révéler l'éclat naturel et l'harmonie du visage.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="0.7">
        <ellipse cx="18" cy="16" rx="9" ry="11" />
        <path d="M13 21 Q18 25 23 21" />
        <line x1="14" y1="13" x2="14" y2="15" />
        <line x1="22" y1="13" x2="22" y2="15" />
        <path d="M9 7 Q18 3 27 7" />
        <line x1="18" y1="27" x2="18" y2="32" />
        <line x1="14" y1="32" x2="22" y2="32" />
      </svg>
    ),
  },
  {
    name: 'Massage californien',
    description:
      'Massage enveloppant et sensoriel qui libère les tensions musculaires et reconnecte le corps à son essence.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="0.7">
        <path d="M4 13 C10 9, 16 21, 22 17 S32 9 36 13" />
        <path d="M0 19 C6 15, 12 27, 18 23 S28 15 36 19" />
        <path d="M4 25 C10 21, 16 33, 22 29 S32 21 36 25" />
      </svg>
    ),
  },
  {
    name: 'Guidance cartes & pendule',
    description:
      'Lectures intuitives pour éclairer votre chemin, répondre à vos questions et vous reconnecter à votre vérité intérieure.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="0.7">
        <polygon points="18,4 32,30 4,30" />
        <circle cx="18" cy="22" r="2.5" />
        <line x1="18" y1="11" x2="18" y2="19.5" />
        <line x1="4" y1="30" x2="32" y2="30" />
      </svg>
    ),
  },
]

export default function Soins() {
  return (
    <section className="relative py-28 md:py-40 px-6 bg-[#070c09]">
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
            Les soins
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-cormorant font-light text-5xl md:text-[58px] text-cream leading-tight"
          >
            Une approche globale
            <br />
            <em className="text-champagne">du mieux-être</em>
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

        {/* Cards grid — gap via bg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/[0.08]">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.07 }}
              className="group relative bg-[#070c09] p-9 md:p-11 overflow-hidden cursor-default transition-colors duration-500 hover:bg-[#0b1510]"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 40px rgba(201,169,110,0.06)' }}
              />

              {/* Icon */}
              <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-500 mb-9">
                {service.icon}
              </div>

              {/* Name */}
              <h3 className="font-cormorant text-[22px] text-cream font-light mb-2 group-hover:text-champagne transition-colors duration-400">
                {service.name}
              </h3>

              {/* Animated underline */}
              <div className="w-5 h-px bg-gold/25 mb-5 group-hover:w-9 group-hover:bg-gold/50 transition-all duration-500" />

              {/* Description */}
              <p className="font-dm-sans font-light text-[13px] text-champagne/38 leading-relaxed group-hover:text-champagne/58 transition-colors duration-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
