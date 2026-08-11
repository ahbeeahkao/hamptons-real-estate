import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle, BadgeCheck, Smartphone } from 'lucide-react';

export default function Enquiry() {
  const [formData, setFormData] = useState({ name: '', wechat: '', contactMethod: 'wechat', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          wechat_id: formData.wechat,
          preferred_contact: formData.contactMethod,
          message: formData.message,
          subject: 'New Enquiry — Hamptons Real Estate Website',
          from_name: formData.name,
        }),
      });
      const result = await response.json();
      if (result.success) { setSubmitted(true); }
    } catch { setSubmitted(true); }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="enquiry" className="relative py-24 sm:py-32 bg-charcoal-900">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gold-500/2 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
            <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">Begin Your Journey</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-beige-100 mb-2">Private Consultation</h2>
            <h3 className="font-serif text-2xl text-gold-gradient mb-4">私人咨询</h3>
            <p className="text-beige-100/50 text-sm leading-relaxed mb-10 max-w-md">Every exceptional residence begins with a conversation. Share your vision, and we'll curate a selection of properties that match your lifestyle, preferences, and aspirations.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center flex-shrink-0"><Phone size={16} className="text-gold-500/70" /></div>
                <div>
                  <p className="text-beige-100/80 text-sm">+6012-351 5121</p>
                  <p className="text-beige-100/30 text-xs mt-0.5">Monday – Saturday, 9AM – 7PM</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="inline-flex items-center gap-1 bg-gold-500/10 border border-gold-500/20 px-2 py-0.5">
                      <BadgeCheck size={10} className="text-gold-500" />
                      <span className="text-[10px] text-gold-500/80 tracking-wider">REN 81580</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-gold-500/10 border border-gold-500/20 px-2 py-0.5">
                      <Smartphone size={10} className="text-gold-500" />
                      <span className="text-[10px] text-gold-500/80 tracking-wider">LPEPH Verified</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center flex-shrink-0"><Mail size={16} className="text-gold-500/70" /></div>
                <div><p className="text-beige-100/80 text-sm">bernice.ahpb@gmail.com</p><p className="text-beige-100/30 text-xs mt-0.5">We respond within 2 hours</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center flex-shrink-0"><MapPin size={16} className="text-gold-500/70" /></div>
                <div><p className="text-beige-100/80 text-sm">B-2-18, Block B, Pusat Perniagaan Seksyen 8</p><p className="text-beige-100/30 text-xs mt-0.5">Jalan Sungai Jernih 8/1, Petaling Jaya, Selangor</p></div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-charcoal-800/50 border border-gold-500/10">
              <p className="text-gold-500 text-xs tracking-wider uppercase mb-2">WeChat ID</p>
              <p className="text-beige-100 font-serif text-2xl">HamptonsKL</p>
              <p className="text-beige-100/30 text-xs mt-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>扫码添加微信，专属顾问为您服务</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }}>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <CheckCircle size={48} className="text-gold-500 mx-auto mb-6" />
                  <h3 className="font-serif text-2xl text-beige-100 mb-2">Thank You</h3>
                  <p className="text-beige-100/50 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>感谢您的咨询</p>
                  <p className="text-beige-100/40 text-sm mt-4 max-w-sm">Our team will be in touch within 2 hours. We look forward to helping you find your perfect Kuala Lumpur residence.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <div className="bg-charcoal-800/30 border border-gold-500/5 p-8 sm:p-10">
                  <h3 className="font-serif text-xl text-beige-100 mb-8">Enquiry Form <span className="text-beige-100/30 text-sm" style={{ fontFamily: "'Noto Serif SC', serif" }}>咨询表</span></h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs text-beige-100/50 tracking-wider uppercase mb-2">Full Name <span className="text-beige-100/20" style={{ fontFamily: "'Noto Serif SC', serif" }}>姓名</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name / 您的姓名" className="w-full bg-charcoal-950/50 border border-gold-500/10 focus:border-gold-500/40 text-beige-100 px-4 py-3 text-sm placeholder-beige-100/20 outline-none transition-colors duration-300" />
                    </div>
                    <div>
                      <label className="block text-xs text-beige-100/50 tracking-wider uppercase mb-2">WeChat ID <span className="text-beige-100/20" style={{ fontFamily: "'Noto Serif SC', serif" }}>微信号</span></label>
                      <input type="text" name="wechat" value={formData.wechat} onChange={handleChange} placeholder="Your WeChat ID / 您的微信号" className="w-full bg-charcoal-950/50 border border-gold-500/10 focus:border-gold-500/40 text-beige-100 px-4 py-3 text-sm placeholder-beige-100/20 outline-none transition-colors duration-300" />
                    </div>
                    <div>
                      <label className="block text-xs text-beige-100/50 tracking-wider uppercase mb-2">Preferred Contact Method <span className="text-beige-100/20" style={{ fontFamily: "'Noto Serif SC', serif" }}>首选联系方式</span></label>
                      <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="w-full bg-charcoal-950/50 border border-gold-500/10 focus:border-gold-500/40 text-beige-100 px-4 py-3 text-sm outline-none transition-colors duration-300 appearance-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C9A96E' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}>
                        <option value="wechat">WeChat 微信</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="phone">Phone 电话</option>
                        <option value="email">Email 电邮</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-beige-100/50 tracking-wider uppercase mb-2">Message <span className="text-beige-100/20" style={{ fontFamily: "'Noto Serif SC', serif" }}>留言</span></label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your ideal residence... / 告诉我们您理想的居所..." className="w-full bg-charcoal-950/50 border border-gold-500/10 focus:border-gold-500/40 text-beige-100 px-4 py-3 text-sm placeholder-beige-100/20 outline-none transition-colors duration-300 resize-none" />
                    </div>
                  </div>
                  <button type="submit" disabled={loading} className="w-full mt-8 bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 text-charcoal-950 py-4 text-sm tracking-wider uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold-500/20">
                    {loading ? <span>Sending...</span> : <><Send size={16} />Send Enquiry</>}
                  </button>
                  <p className="text-beige-100/20 text-[10px] text-center mt-4">Your information is treated with strict confidentiality. <span style={{ fontFamily: "'Noto Serif SC', serif" }}>您的信息将严格保密</span></p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
