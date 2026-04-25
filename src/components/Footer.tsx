import { Shield, BadgeCheck, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center">
                <span className="font-serif text-gold-500 text-xl font-bold">H</span>
              </div>
              <div>
                <span className="font-serif text-lg text-beige-100 tracking-wide block leading-tight">HAMPTONS</span>
                <span className="text-[10px] text-gold-500/60 tracking-[0.25em] uppercase">Real Estate</span>
              </div>
            </div>
            <p className="text-beige-100/40 text-sm leading-relaxed mb-4">Ultra-luxury real estate specialist focused exclusively on KLCC and Bukit Bintang, Kuala Lumpur.</p>
            <p className="text-beige-100/25 text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>专注吉隆坡KLCC与武吉免登的超豪华房地产专家</p>
          </div>

          <div>
            <h4 className="font-serif text-sm text-beige-100 tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Residences', href: '#residences' },
                { label: 'Properties', href: '#properties' },
                { label: 'Why Hamptons', href: '#why-choose' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#enquiry' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-beige-100/40 hover:text-gold-500 text-sm transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-beige-100 tracking-wider uppercase mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-beige-100/40">
              <p>B-2-18, Block B, Pusat Perniagaan</p>
              <p>Seksyen 8 (8 Avenue)</p>
              <p>Jalan Sungai Jernih 8/1</p>
              <p>Petaling Jaya, Selangor</p>
              <p className="pt-2">+6012-351 5121</p>
              <p>bernice.ahpb@gmail.com</p>
              <p className="pt-2 text-gold-500/60">WeChat: HamptonsKL</p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <span className="inline-flex items-center gap-1.5 bg-gold-500/5 border border-gold-500/15 px-2.5 py-1">
                <BadgeCheck size={11} className="text-gold-500/70" />
                <span className="text-[10px] text-gold-500/70 tracking-wider">REN 81580</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-gold-500/5 border border-gold-500/15 px-2.5 py-1">
                <Smartphone size={11} className="text-gold-500/70" />
                <span className="text-[10px] text-gold-500/70 tracking-wider">LPEPH Verified</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <h4 className="font-serif text-sm text-beige-100 tracking-wider uppercase mb-6">WeChat</h4>
            <div className="w-28 h-28 bg-white p-2 mb-4">
              <div className="w-full h-full bg-charcoal-950 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="25" height="25" rx="2" stroke="#C9A96E" strokeWidth="3" fill="none"/>
                  <rect x="10" y="10" width="15" height="15" rx="1" fill="#C9A96E"/>
                  <rect x="70" y="5" width="25" height="25" rx="2" stroke="#C9A96E" strokeWidth="3" fill="none"/>
                  <rect x="75" y="10" width="15" height="15" rx="1" fill="#C9A96E"/>
                  <rect x="5" y="70" width="25" height="25" rx="2" stroke="#C9A96E" strokeWidth="3" fill="none"/>
                  <rect x="10" y="75" width="15" height="15" rx="1" fill="#C9A96E"/>
                  <rect x="35" y="5" width="5" height="5" fill="#C9A96E"/>
                  <rect x="45" y="5" width="5" height="5" fill="#C9A96E"/>
                  <rect x="55" y="5" width="5" height="5" fill="#C9A96E"/>
                  <rect x="35" y="15" width="5" height="5" fill="#C9A96E"/>
                  <rect x="50" y="15" width="5" height="5" fill="#C9A96E"/>
                  <rect x="35" y="25" width="5" height="5" fill="#C9A96E"/>
                  <rect x="45" y="25" width="5" height="5" fill="#C9A96E"/>
                  <rect x="5" y="35" width="5" height="5" fill="#C9A96E"/>
                  <rect x="15" y="35" width="5" height="5" fill="#C9A96E"/>
                  <rect x="25" y="40" width="5" height="5" fill="#C9A96E"/>
                  <rect x="35" y="35" width="5" height="5" fill="#C9A96E"/>
                  <rect x="45" y="40" width="5" height="5" fill="#C9A96E"/>
                  <rect x="55" y="35" width="5" height="5" fill="#C9A96E"/>
                  <rect x="65" y="40" width="5" height="5" fill="#C9A96E"/>
                  <rect x="75" y="35" width="5" height="5" fill="#C9A96E"/>
                  <rect x="85" y="40" width="5" height="5" fill="#C9A96E"/>
                  <rect x="5" y="50" width="5" height="5" fill="#C9A96E"/>
                  <rect x="15" y="55" width="5" height="5" fill="#C9A96E"/>
                  <rect x="25" y="50" width="5" height="5" fill="#C9A96E"/>
                  <rect x="35" y="55" width="5" height="5" fill="#C9A96E"/>
                  <rect x="45" y="50" width="5" height="5" fill="#C9A96E"/>
                  <rect x="55" y="55" width="5" height="5" fill="#C9A96E"/>
                  <rect x="65" y="50" width="5" height="5" fill="#C9A96E"/>
                  <rect x="75" y="55" width="5" height="5" fill="#C9A96E"/>
                  <rect x="85" y="50" width="5" height="5" fill="#C9A96E"/>
                  <rect x="35" y="65" width="5" height="5" fill="#C9A96E"/>
                  <rect x="50" y="70" width="5" height="5" fill="#C9A96E"/>
                  <rect x="65" y="65" width="5" height="5" fill="#C9A96E"/>
                  <rect x="75" y="70" width="5" height="5" fill="#C9A96E"/>
                  <rect x="85" y="65" width="5" height="5" fill="#C9A96E"/>
                  <rect x="35" y="80" width="5" height="5" fill="#C9A96E"/>
                  <rect x="50" y="85" width="5" height="5" fill="#C9A96E"/>
                  <rect x="65" y="80" width="5" height="5" fill="#C9A96E"/>
                  <rect x="75" y="85" width="5" height="5" fill="#C9A96E"/>
                  <rect x="85" y="80" width="5" height="5" fill="#C9A96E"/>
                  <rect x="70" y="70" width="25" height="25" rx="2" stroke="#C9A96E" strokeWidth="3" fill="none"/>
                  <rect x="78" y="78" width="10" height="10" rx="1" fill="#C9A96E"/>
                </svg>
              </div>
            </div>
            <p className="text-beige-100/30 text-xs">Scan to add on WeChat</p>
            <p className="text-beige-100/20 text-xs" style={{ fontFamily: "'Noto Serif SC', serif" }}>扫码添加微信</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <Shield size={14} className="text-gold-500/40" />
                <span className="text-beige-100/30 text-xs">Licensed — E (3) 2124</span>
              </div>
              <span className="hidden sm:inline text-beige-100/15">|</span>
              <div className="flex items-center gap-3">
                <BadgeCheck size={14} className="text-gold-500/40" />
                <span className="text-beige-100/30 text-xs">REN 81580 Verified</span>
              </div>
              <span className="hidden sm:inline text-beige-100/15">|</span>
              <div className="flex items-center gap-3">
                <Smartphone size={14} className="text-gold-500/40" />
                <span className="text-beige-100/30 text-xs">Mobile on LPEPH Verified</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-beige-100/20 text-xs">
              <span>© {new Date().getFullYear()} Hamptons Real Estate</span>
              <span className="hidden md:inline">|</span>
              <span style={{ fontFamily: "'Noto Serif SC', serif" }}>汉普顿房地产 版权所有</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
