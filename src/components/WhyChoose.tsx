import { motion } from 'framer-motion';
import { Compass, MessageSquareText, Eye, Sparkles, Plane, ShieldCheck } from 'lucide-react';

const benefits = [
  { icon: Compass, title: 'Feng Shui Guidance', titleCn: '风水指导', description: 'Every property in our portfolio is assessed for optimal Qi flow, orientation, and elemental harmony — because your home should nourish your prosperity.' },
  { icon: MessageSquareText, title: 'Mandarin-Speaking Team', titleCn: '华语专属团队', description: 'From initial enquiry to lease signing, communicate entirely in Mandarin or your preferred dialect. No miscommunication, no cultural friction.' },
  { icon: Eye, title: 'Off-Market Inventory', titleCn: '非公开房源', description: 'Access exclusive properties never listed publicly — penthouses, diplomatic residences, and pre-launch units reserved for our most valued clients.' },
  { icon: Sparkles, title: 'White-Glove Concierge', titleCn: '白手套礼宾服务', description: 'From airport pickup to furniture procurement, school enrollment to domestic staff — we orchestrate your entire transition to Kuala Lumpur.' },
  { icon: Plane, title: 'Relocation Expertise', titleCn: '移居专长', description: "Navigating Malaysia's MM2H programme, visa requirements, and banking setup can be complex. Our specialists make it seamless." },
  { icon: ShieldCheck, title: 'Privacy & Discretion', titleCn: '隐私与谨慎', description: 'We understand that prominence demands discretion. Your identity, preferences, and transactions are handled with absolute confidentiality.' },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-crimson-700/3 rounded-full blur-3xl translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="text-center mb-16 sm:mb-20">
          <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">Culturally Intelligent Service</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-beige-100 mb-4">
            Why Chinese Families
            <span className="block text-gold-gradient">Choose Hamptons</span>
          </h2>
          <p className="text-beige-100/50 text-base sm:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Noto Serif SC', serif" }}>为何华人家庭选择汉普顿</p>
          <div className="luxury-divider-wide mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group relative p-8 bg-charcoal-800/50 border border-gold-500/5 hover:border-gold-500/15 backdrop-blur-sm transition-all duration-500">
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/0 group-hover:via-gold-500/30 to-transparent transition-all duration-500" />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all duration-500">
                  <benefit.icon size={20} className="text-gold-500/60 group-hover:text-gold-500 transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-beige-100 mb-1 group-hover:text-gold-400 transition-colors duration-300">{benefit.title}</h3>
                  <span className="text-xs text-beige-100/30 block mb-3" style={{ fontFamily: "'Noto Serif SC', serif" }}>{benefit.titleCn}</span>
                  <p className="text-beige-100/50 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
