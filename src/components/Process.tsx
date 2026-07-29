import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Code, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'التحليل والاستكشاف',
      icon: Search,
      desc: 'نجلس معك لنفهم تفاصيل فكرتك، نحدد الأهداف الذكية ونحلل المنافسين لضمان بداية صحيحة وخارطة طريق مدروسة.',
    },
    {
      num: '02',
      title: 'التخطيط والتصميم',
      icon: Compass,
      desc: 'نرسم تجربة المستخدم (UX) ونصمم الواجهات البصرية (UI) بأسلوب عصري جذّاب يعكس قيمة عمليتك التجارية.',
    },
    {
      num: '03',
      title: 'التطوير والتنفيذ',
      icon: Code,
      desc: 'يحول فريقنا المطور التصاميم إلى شفرات برمجية سريعة، آمنة ومبنية بأعلى معايير البرمجة العالمية الحديثة.',
    },
    {
      num: '04',
      title: 'الاختبار والإطلاق',
      icon: Rocket,
      desc: 'نفحص جميع الوظائف والأداء بدقة على كافة الشاشات، ثم نطلق مشروعك بثقة ونسير معك في مرحلة الدعم والتطوير.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#091322] relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full inline-block mb-4">
            منهجية العمل
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            كيف نعمل لتحقيق أهدافك؟
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            رحلة منسقة بأعلى درجات الاحترافية تحول أفكارك من مجرد تصور نُسخ إلى منتج رقمي متكامل ينافس في السوق.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-600/10 via-blue-500/40 to-blue-600/10 -translate-y-8 z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative z-10 bg-[#0d1727] border border-slate-800 hover:border-blue-500/50 rounded-2xl p-7 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(2,132,199,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-sky-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-slate-700 font-mono group-hover:text-sky-400 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-sky-400">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  <span>خطوة رسمية موثقة</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
