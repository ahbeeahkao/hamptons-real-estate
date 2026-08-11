import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingButtons() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <>
      <motion.a href="https://wa.me/60123515121" target="_blank" rel="noopener noreferrer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2, duration: 0.5, type: 'spring' }} className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300 pulse-ring" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>

      <motion.button onClick={() => setShowWeChat(!showWeChat)} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2.3, duration: 0.5, type: 'spring' }} className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#07C160] rounded-full flex items-center justify-center shadow-2xl shadow-[#07C160]/30 hover:scale-110 transition-transform duration-300 pulse-wechat" aria-label="Chat on WeChat">
        {showWeChat ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </motion.button>

      <AnimatePresence>
        {showWeChat && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} transition={{ duration: 0.3 }} className="fixed bottom-40 right-6 z-50 bg-charcoal-800 border border-gold-500/20 p-6 shadow-2xl w-64">
            <div className="text-center">
              <p className="text-gold-500 text-xs tracking-wider uppercase mb-3">WeChat</p>
              <div className="w-32 h-32 bg-white p-1.5 mx-auto mb-3">
                <div className="w-full h-full bg-charcoal-950 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-28 h-28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <p className="text-beige-100 font-medium text-sm">HamptonsKL</p>
              <p className="text-beige-100/40 text-xs mt-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>扫码添加微信</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
