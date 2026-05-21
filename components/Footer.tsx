export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-gold/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <p className="font-cormorant text-2xl text-cream font-light tracking-wide">
              Home Jess Sérénité
            </p>
            <p className="font-dm-sans font-light text-champagne/40 text-[13px] leading-relaxed">
              Thérapies holistiques &amp; soins énergétiques
              <br />à Nîmes
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-dm-sans text-sage/60 text-[10px] tracking-[0.4em] uppercase">Contact</p>
            <div className="space-y-2 font-dm-sans font-light text-champagne/45 text-[13px] leading-relaxed">
              <p>6 rue du Rempart Romain</p>
              <p>30900 Nîmes, France</p>
              <a
                href="tel:0766797875"
                className="block text-gold/70 hover:text-gold transition-colors duration-300"
              >
                07 66 79 78 75
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="font-dm-sans text-sage/60 text-[10px] tracking-[0.4em] uppercase">Réseaux</p>
            <div className="flex gap-4">
              {[
                { label: 'Instagram', icon: InstagramIcon },
                { label: 'Facebook', icon: FacebookIcon },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-gold/15 flex items-center justify-center text-gold/35 hover:border-gold/40 hover:text-gold/70 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/[0.07] mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm-sans text-champagne/20 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Home Jess Sérénité — Tous droits réservés
          </p>
          <div className="w-8 h-px bg-gold/20" />
        </div>
      </div>
    </footer>
  )
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
