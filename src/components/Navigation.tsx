import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const navItems = [
  { label: 'Residences', labelCn: '住宅', href: '#residences' },
  { label: 'Properties', labelCn: '物业', href: '#properties' },
  { label: 'Why Hamptons', labelCn: '为何选择', href: '#why-choose' },
  { label: 'Testimonials', labelCn: '客户评价', href: '#testimonials' },
  { label: 'Contact', labelCn: '联系我们', href: '#enquiry' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-charcoal-950/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-gold-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border border-gold-500/60 flex items-center justify-center group-hover:bg-gold-500/10 transition-colors duration-300">
                <span className="font-serif text-gold-500 text-xl font-bold">H</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl text-beige-100 tracking-wide leading-tight">HAMPTONS</span>
                <span className="text-[10px] text-gold-500/70 tracking-[0.25em] uppercase">Real Estate</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="group relative text-beige-100/70 hover:text-gold-500 transition-colors duration-300 text-sm tracking-wider uppercase">
                  <span>{item.label}</span>
                  <span className="block text-[9px] text-beige-100/30 group-hover:text-gold-500/50 transition-colors font-sans">{item.labelCn}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <span className="text-[10px] text-beige-100/40 tracking-wider">E (3) 2124</span>
              <a href="#enquiry" className="flex items-center gap-2 bg-[#07C160] hover:bg-[#06AD56] text-white px-5 py-2.5 text-sm tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#07C160]/20">
                <MessageCircle size={16} />
                WeChat
              </a>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-beige-100/70 hover:text-gold-500 transition-colors p-2">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 bg-charcoal-950/98 backdrop-blur-2xl pt-24">
            <div className="flex flex-col items-center gap-8 py-12">
              {navItems.map((item, i) => (
                <motion.a key={item.href} href={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} onClick={() => setMobileOpen(false)} className="text-2xl font-serif text-beige-100/80 hover:text-gold-500 transition-colors">
                  {item.label}
                  <span className="block text-sm text-beige-100/30 mt-1">{item.labelCn}</span>
                </motion.a>
              ))}
              <div className="luxury-divider-wide mt-4" />
              <span className="text-xs text-beige-100/40 tracking-wider">E (3) 2124</span>
              <a href="#enquiry" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 bg-[#07C160] text-white px-8 py-3 text-sm tracking-wider mt-4">
                <MessageCircle size={18} />
                WeChat 咨询
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
