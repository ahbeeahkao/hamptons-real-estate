import { motion } from 'framer-motion';
import { Clock, Key, ConciergeBell, Sparkles, Calendar, Building2 } from 'lucide-react';

const shortTermFeatures = [
  { icon: ConciergeBell, text: 'Full hotel-style concierge', cn: '全方位酒店式礼宾' },
  { icon: Sparkles, text: 'Housekeeping & linen service', cn: '清洁及布草服务' },
  { icon: Clock, text: 'Flexible stays from 3 nights', cn: '3晚起灵活入住' },
  { icon: Key, text: 'Fully furnished & equipped', cn: '全屋精装配备' },
];

const longTermFeatures = [
  { icon: Building2, text: 'Premium KLCC & Bukit Bintang', cn: 'KLCC与武吉免登尊享' },
  { icon: Calendar, text: '12-month+ luxury leases', cn: '12个月以上奢华租约' },
  { icon: Key, text: 'Purchase advisory & support', cn: '购房顾问与支持' },
  { icon: Sparkles, text: 'Feng Shui consultation', cn: '风水咨询' },
];

export default function Residences() {
  return (
    <section id="residences" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="text-center">
          <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">Tailored Living</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-beige-100 mb-4">
            Residences for Every
            <span className="block text-gold-gradient">Chapter of Life</span>
          </h2>
          <p className="text-beige-100/50 text-base sm:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Noto Serif SC', serif" }}>为您人生每一篇章量身定制的居所</p>
          <div className="luxury-divider-wide mx-auto mt-8" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="relative group overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/penthouse-interior.jpg" alt="Luxury serviced residence interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />
            </div>
            <div className="relative p-8 sm:p-12 min-h-[500px] flex flex-col justify-end">
              <span className="text-gold-500/50 text-xs tracking-[0.3em] uppercase mb-3">Short-Term Serviced</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-beige-100 mb-2">Serviced Residences</h3>
              <p className="text-beige-100/40 text-sm mb-8" style={{ fontFamily: "'Noto Serif SC', serif" }}>短期服务式住宅</p>
              <p className="text-beige-100/60 text-sm leading-relaxed mb-8 max-w-md">Immerse yourself in Kuala Lumpur's finest serviced residences. From panoramic penthouses to elegant suites, every detail is attended to — so you can focus on what matters.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {shortTermFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <f.icon size={16} className="text-gold-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-beige-100/80 text-sm">{f.text}</span>
                      <span className="block text-beige-100/30 text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>{f.cn}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#enquiry" className="inline-flex items-center gap-2 text-gold-500 text-sm tracking-wider uppercase mt-8 group/link hover:gap-3 transition-all duration-300">Enquire Now <span className="text-beige-100/30 text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>立即咨询</span></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="relative group overflow-hidden">
            <div className="absolute inset-0">
              <img src="/images/infinity-pool.jpg" alt="Luxury infinity pool with city view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/40" />
            </div>
            <div className="relative p-8 sm:p-12 min-h-[500px] flex flex-col justify-end">
              <span className="text-gold-500/50 text-xs tracking-[0.3em] uppercase mb-3">Long-Term Lease & Purchase</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-beige-100 mb-2">Luxury Leases & Sales</h3>
              <p className="text-beige-100/40 text-sm mb-8" style={{ fontFamily: "'Noto Serif SC', serif" }}>长期租赁与购买</p>
              <p className="text-beige-100/60 text-sm leading-relaxed mb-8 max-w-md">For those who choose to plant roots in Kuala Lumpur, we offer an exclusive portfolio of premium properties — each selected for its prestige, views, and Feng Shui alignment.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {longTermFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <f.icon size={16} className="text-gold-500/70 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-beige-100/80 text-sm">{f.text}</span>
                      <span className="block text-beige-100/30 text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>{f.cn}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#enquiry" className="inline-flex items-center gap-2 text-gold-500 text-sm tracking-wider uppercase mt-8 group/link hover:gap-3 transition-all duration-300">Private Viewing <span className="text-beige-100/30 text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>私人看房</span></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
