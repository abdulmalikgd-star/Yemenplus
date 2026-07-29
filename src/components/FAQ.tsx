import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQProps {
  onOpenContact: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'ما هي المدة المتوقعة لإنجاز موقع أو تطبيق؟',
      a: 'تعتمد المدة على نطاق المشروع وتفاصيله؛ فالمواقع التعريفية تأخذ عادة بين 7 إلى 14 يوماً، بينما التطبيقات والمنصات المعقدة تتراوح بين 30 إلى 60 يوماً مع توفير الجدول الزمني بدقة قبل البدء.',
    },
    {
      q: 'هل توفرون خدمات الاستضافة وحجز النطاقات (Domain)؟',
      a: 'نعم، نوفر استضافة سحابية فائقة السرعة مع إعداد النطاقات الرسمية، وشهادات الأمان SSL، والنسخ الاحتياطي التلقائي.',
    },
    {
      q: 'ما الذي يميز يمن بلاس عن الشركات الأخرى؟',
      a: 'نتميز بتقديم فريق متكامل (تصميم، برمجة، تسويق) يهتم بالمشروع من الفكرة وحتى تحقيق الأهداف، مع الالتزام بالدقة العالية، السرعة، والدعم المستمر بعد التسليم.',
    },
    {
      q: 'هل نحصل على الدعم الفني بعد إطلاق المشروع؟',
      a: 'بالتأكيد! نوفر فترة ضمان ودعم فني مجاني بعد التسليم، بالإضافة إلى خطط صيانة وتطوير دورية تناسب احتياجاتك.',
    },
    {
      q: 'كيف تضمنون حقوق الطرفين والسرية البرمجية؟',
      a: 'نبدأ العمل دائماً بعقد رسميي يحدد كافة المخرجات والمواعيد الشفافة مع اتفاقية عدم الإفصاح (NDA) للحفاظ على سرية بياناتك وفكرتك التجاريّة.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#070e17] relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full inline-block mb-4">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            كل ما تود معرفته عن خدماتنا
          </h2>
          <p className="text-slate-400 text-base">
            إليك إجابات لأبرز الاستفسارات الأكثر تكراراً لدى عملائنا.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0c1626] border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-500/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-right p-6 font-bold text-white text-lg flex items-center justify-between gap-4 transition-colors hover:text-sky-400"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-400 shrink-0" />
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-800/60 px-6 py-5 text-slate-300 text-sm leading-relaxed bg-[#0a121f]/50"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-950/40 via-[#0a1526] to-blue-950/40 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h3 className="text-lg font-bold text-white mb-1">لديك سؤال آخر لم تجد إجابته؟</h3>
            <p className="text-xs text-slate-400">فريقنا متواجد ومستعد لمساعدتك والإجابة على استفساراتك.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/30 flex items-center gap-2 shrink-0 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>تحدث مع المستشار البرمجي</span>
          </button>
        </div>

      </div>
    </section>
  );
};
