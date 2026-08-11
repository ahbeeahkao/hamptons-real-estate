import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-skyline.jpg" alt="Kuala Lumpur skyline at dusk with Petronas Towers" className="w-full h-full object-cover slow-zoom" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/60" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-gold-500/50" />
          <span className="text-gold-500/80 text-xs tracking-[0.4em] uppercase font-sans">Kuala Lumpur's Finest</span>
          <div className="w-12 h-px bg-gold-500/50" />
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-beige-100 leading-[1.1] mb-4">
          Where Luxury
          <br />
          <span className="shimmer-gold font-medium">Meets Home</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="font-serif text-xl sm:text-2xl text-beige-200/60 mb-6" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          奢华与家的完美交汇
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }} className="text-beige-100/60 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Exclusive serviced residences and premium properties in KLCC & Bukit Bintang —
          curated for discerning Chinese expatriates who demand nothing less than extraordinary.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#properties" className="group relative px-10 py-4 bg-gold-500 text-charcoal-950 font-medium tracking-wider text-sm uppercase overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20">
            <span className="relative z-10">Explore Residences</span>
            <span className="absolute inset-0 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a href="#enquiry" className="group px-10 py-4 border border-gold-500/40 text-gold-500 tracking-wider text-sm uppercase hover:bg-gold-500/10 hover:border-gold-500 transition-all duration-300">
            Private Consultation
            <span className="block text-[10px] text-gold-500/50 mt-0.5">私人咨询</span>
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-beige-100/30 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-gold-500/50" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
    </section>
  );
}
