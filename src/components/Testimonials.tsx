import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  nameEn: string;
  role: string;
  image: string;
  quote: string;
  quoteCn: string;
  property: string;
}

const testimonials: Testimonial[] = [
  {
    name: '陈雅琳', nameEn: 'Chen Yalin', role: 'CEO, Technology Company — Shanghai',
    image: '/images/testimonial-1.jpg',
    quote: 'Hamptons understood exactly what our family needed — a home with perfect feng shui orientation, walking distance to the international school, and a view that inspires. They made our transition to KL effortless.',
    quoteCn: '汉普顿完全理解我们家庭的需求——风水朝向完美、步行可达国际学校、景色令人心旷神怡。他们让我们的吉隆坡之行轻松无忧。',
    property: 'Four Seasons Private Residences',
  },
  {
    name: '王建国', nameEn: 'Wang Jianguo', role: 'Managing Director — Singapore',
    image: '/images/testimonial-2.jpg',
    quote: "I have worked with agents across Asia. Hamptons is the only team that truly understands the nuances of what a Chinese executive family expects. Their discretion and professionalism are unmatched.",
    quoteCn: '我与亚洲各地的经纪人合作过。汉普顿是唯一真正理解华人高管家庭期望细微之处的团队。他们的谨慎和专业无与伦比。',
    property: 'The Troika Penthouse',
  },
  {
    name: '林美华', nameEn: 'Lin Meihua', role: 'Private Investor — Hong Kong',
    image: '/images/testimonial-3.jpg',
    quote: "They showed me properties I didn't even know existed — off-market penthouses with breathtaking views. The Mandarin-speaking team made everything seamless. I've referred three friends already.",
    quoteCn: '他们向我展示了甚至我不知道存在的物业——拥有壮丽景色的非公开顶层公寓。华语团队让一切变得无缝衔接。我已经推荐了三位朋友。',
    property: 'Banyan Tree Residences',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900/50 to-charcoal-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="text-center mb-16 sm:mb-20">
          <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">Client Voices</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-beige-100 mb-4">
            Trusted by Those
            <span className="block text-gold-gradient">Who Demand the Best</span>
          </h2>
          <p className="text-beige-100/50 text-base sm:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Noto Serif SC', serif" }}>值得追求卓越者的信赖</p>
          <div className="luxury-divider-wide mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.15 }} className="group relative bg-charcoal-800/30 border border-gold-500/5 hover:border-gold-500/15 p-8 transition-all duration-500">
              <Quote size={32} className="text-gold-500/10 mb-6" />
              <p className="text-beige-100/60 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <p className="text-beige-100/30 text-xs leading-relaxed mb-8" style={{ fontFamily: "'Noto Serif SC', serif" }}>「{t.quoteCn}」</p>
              <div className="luxury-divider mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-500/20 flex-shrink-0">
                  <img src={t.image} alt={t.nameEn} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-base text-beige-100">{t.name}</span>
                    <span className="text-xs text-beige-100/30">{t.nameEn}</span>
                  </div>
                  <p className="text-xs text-beige-100/40 mt-0.5">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-1.5 bg-gold-500/5 border border-gold-500/10 px-3 py-1">
                <span className="text-[10px] text-gold-500/60 tracking-wider">{t.property}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
