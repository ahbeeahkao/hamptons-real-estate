import { motion } from 'framer-motion';
import { Shield, Award, Users, BadgeCheck, Smartphone } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Licensed & Regulated', labelCn: '持牌合规', detail: 'E (3) 2124' },
  { icon: BadgeCheck, label: 'REN Verified', labelCn: '注册房产经纪人认证', detail: 'REN 81580' },
  { icon: Smartphone, label: 'LPEPH Mobile Verified', labelCn: 'LPEPH手机号已验证', detail: 'Identity Confirmed' },
  { icon: Award, label: '15+ Years of Excellence', labelCn: '十五年卓越服务', detail: 'Since 2009' },
  { icon: Users, label: 'Preferred by Chinese Expatriates', labelCn: '华人精英首选', detail: 'KLCC & Bukit Bintang' },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 sm:py-20 bg-charcoal-900 border-y border-gold-500/10">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 lg:gap-10">
          {trustItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.15 }} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 border border-gold-500/30 flex items-center justify-center mb-4 group-hover:border-gold-500/60 group-hover:bg-gold-500/5 transition-all duration-500">
                <item.icon size={24} className="text-gold-500/70 group-hover:text-gold-500 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-lg text-beige-100 mb-1">{item.label}</h3>
              <span className="text-xs text-beige-100/40 mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>{item.labelCn}</span>
              <p className="text-sm text-gold-500/60 tracking-wider">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
