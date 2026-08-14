import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  questionCn: string;
  answer: string;
  answerCn: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What areas does Hamptons Real Estate specialize in?',
    questionCn: '汉普顿房地产专注哪些区域？',
    answer: 'Hamptons Real Estate specializes exclusively in ultra-luxury properties within KLCC (Kuala Lumpur City Centre) and Bukit Bintang — the two most prestigious addresses in Kuala Lumpur. We do not operate in secondary locations, ensuring deep market expertise and access to the finest inventory.',
    answerCn: '我们专注于吉隆坡KLCC和武吉免登的超豪华物业，确保深度的市场专业知识和最优质的房源。',
  },
  {
    question: 'Is Hamptons Real Estate a licensed agency?',
    questionCn: '汉普顿房地产是持牌机构吗？',
    answer: 'Yes. Hamptons Real Estate is licensed under the Board of Valuers, Appraisers, Estate Agents & Property Managers with license number E (3) 2124. Our principal agent, Bernice Chan, holds REN 81580. All transactions are fully regulated and compliant with Malaysian law.',
    answerCn: '是的，我们持有马来西亚估价师、评估师、房地产代理及物业管理局执照，执照编号 E (3) 2124。主要代理陈雅琳持有 REN 81580。',
  },
  {
    question: 'Does Hamptons serve Chinese-speaking clients?',
    questionCn: '你们服务华语客户吗？',
    answer: 'Absolutely. Hamptons is the preferred agency for Chinese expatriates in Kuala Lumpur. Our entire team is fluent in Mandarin, Cantonese, and English. We provide culturally intelligent service including feng shui consultation, MM2H guidance, and WeChat-based communication — the platform most familiar to our Chinese clientele.',
    answerCn: '当然。我们是吉隆坡华人外派人士的首选代理。团队精通普通话、粤语和英语，提供风水咨询、MM2H指导及微信沟通服务。',
  },
  {
    question: 'What types of properties do you offer?',
    questionCn: '你们提供哪些类型的物业？',
    answer: 'We offer three categories: (1) Ultra-luxury serviced residences for short-term stay and long-term lease — fully furnished with hotel-style concierge; (2) Premium condominiums and penthouses for sale — including off-market and pre-launch opportunities; (3) Advisory and relocation services for families seeking permanent residence under the MM2H programme.',
    answerCn: '我们提供三类服务：超豪华服务式住宅（短租及长租）、优质公寓及顶层公寓出售，以及MM2H计划下的安家咨询服务。',
  },
  {
    question: 'Do you provide feng shui consultation?',
    questionCn: '你们提供风水咨询吗？',
    answer: 'Yes. Every property in our portfolio is assessed for optimal Qi flow, orientation, and elemental harmony before being presented to clients. We understand that for Chinese families, feng shui alignment is not a preference — it is essential when choosing a home. Our feng shui guidance is included at no additional cost.',
    answerCn: '是的。我们每套物业都会在推荐前进行风水评估，包括气流、朝向和五行和谐。风水指导免费包含在服务中。',
  },
  {
    question: 'What is the MM2H programme and how does Hamptons help?',
    questionCn: '什么是MM2H计划？汉普顿如何协助？',
    answer: 'The Malaysia My Second Home (MM2H) programme is a government initiative allowing foreigners to reside in Malaysia on a long-term Social Visit Pass (initially 5 years, renewable). Hamptons provides end-to-end MM2H application guidance, document preparation support, and property solutions that meet programme financial thresholds — all in Mandarin.',
    answerCn: 'MM2H是马来西亚政府的外国人长期居留计划。我们提供从申请到安家的一站式服务，全程华语沟通。',
  },
  {
    question: 'How can I schedule a private viewing?',
    questionCn: '如何预约私人看房？',
    answer: 'You can reach us through multiple channels: WhatsApp at +6012-351 5121 (fastest response), WeChat (HamptonsKL), email at enquiry@hamptonsre.com.my, or by completing the enquiry form on this website. We typically arrange private viewings within 24 hours, including weekends.',
    answerCn: '可通过WhatsApp（+6012-351 5121）、微信（HamptonsKL）、邮件或本站咨询表预约。我们通常24小时内安排私人看房。',
  },
  {
    question: 'Are your property prices negotiable?',
    questionCn: '物业价格是否可议？',
    answer: 'As a professional agency, we present properties at prices set by owners/developers. However, Bernice Chan leverages 15+ years of KLCC market relationships to negotiate the most favorable terms on your behalf. For off-market and pre-launch properties, pricing advantages are often significant.',
    answerCn: '作为专业代理，我们展示业主/开发商定价。但陈雅琳凭借15年KLCC人脉为您争取最优惠条件。私密及预售物业价格优势通常更大。',
  },
];

function FAQAccordionItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border-b border-gold-500/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="w-8 h-8 border border-gold-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-gold-500/60 transition-colors duration-300">
          <HelpCircle size={14} className="text-gold-500/50" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-lg text-beige-100 group-hover:text-gold-400 transition-colors duration-300">
            {faq.question}
          </h3>
          <span
            className="text-xs text-beige-100/30 block mt-1"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            {faq.questionCn}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown size={18} className="text-gold-500/40" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="pb-6 pl-12 pr-4">
          <p className="text-beige-100/60 text-sm leading-relaxed mb-3">{faq.answer}</p>
          <p
            className="text-beige-100/35 text-xs leading-relaxed"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            {faq.answerCn}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-charcoal-950"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500/60 text-xs tracking-[0.4em] uppercase block mb-4">
            Frequently Asked
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-beige-100 mb-4">
            Questions
          </h2>
          <p
            className="text-beige-100/50 text-base"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            常见问题
          </p>
          <div className="luxury-divider-wide mx-auto mt-8" />
        </motion.div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <FAQAccordionItem faq={faq} index={index} />
              {/* Hidden structured answer for crawlers */}
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="hidden">
                <meta itemProp="text" content={faq.answer} />
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-beige-100/30 text-sm mb-4">
            Still have questions?
            <span
              className="ml-2"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              还有疑问？
            </span>
          </p>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-2 text-gold-500 text-sm tracking-wider uppercase hover:gap-3 transition-all duration-300"
          >
            Contact Us
            <span
              className="text-beige-100/30 text-xs"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              联系我们
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
