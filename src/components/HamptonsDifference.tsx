import { motion } from 'framer-motion';
import { Crown, Gem, Landmark, Heart } from 'lucide-react';

const pillars = [
  { icon: Crown, number: '01', title: 'Exclusivity by Design', titleCn: '专属定制', text: 'We do not operate a volume business. Each client receives dedicated attention, curated property shortlists, and a level of personalisation that mass-market agencies simply cannot deliver.' },
  { icon: Gem, number: '02', title: 'Cultural Fluency', titleCn: '文化通达', text: "Understanding that a Chinese family's needs extend beyond square footage — from auspicious floor numbers to proximity to international schools, from kitchen orientation to neighbourhood feng shui." },
  { icon: Landmark, number: '03', title: 'KLCC & Bukit Bintang Mastery', titleCn: '核心地段专精', text: "We know every building, every floor plan, every developer's reputation, and every hidden gem within KL's golden triangle. This hyper-local expertise is your competitive advantage." },
  { icon: Heart, number: '04', title: 'Relationships, Not Transactions', titleCn: '关系为先', text: 'Many of our clients have been with us for over a decade. We become your trusted Kuala Lumpur partner — the first call when you arrive and the last word before you sign.' },
];

export default function HamptonsDifference() {
  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/2 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="relative">
            <div className="relative overflow-hidden">
              <img src="/images/hero-skyline.jpg" alt="KLCC Skyline" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/20 -z-10" />
            <div className="absolute bottom-8 left-8 bg-charcoal-950/90 backdrop-blur-sm border border-gold-500/20 px-6 py-4">
              <span className="text-gold-500 font-serif text-3xl">15+</span>
              <span className="block text-beige-100/50 text-xs tracking-wider uppercase mt-1">Years of Excellence</span>
              <span className="block text-beige-100/30 text-[10px]" style={{ fontFamily: "'Noto Serif SC', serif" }}>十五年卓越</span>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
              <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">The Hamptons Difference</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-beige-100 mb-2">Beyond Real Estate.</h2>
              <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient mb-4">A Kuala Lumpur Partnership.</h3>
              <p className="text-beige-100/40 text-sm mb-10" style={{ fontFamily: "'Noto Serif SC', serif" }}>超越房产，成为您在吉隆坡的可靠伙伴</p>
            </motion.div>

            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 border border-gold-500/20 flex items-center justify-center group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all duration-500">
                    <pillar.icon size={16} className="text-gold-500/60 group-hover:text-gold-500 transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-gold-500/30 text-xs font-mono">{pillar.number}</span>
                      <h4 className="font-serif text-lg text-beige-100 group-hover:text-gold-400 transition-colors duration-300">{pillar.title}</h4>
                    </div>
                    <span className="text-[11px] text-beige-100/25 block mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>{pillar.titleCn}</span>
                    <p className="text-beige-100/45 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
