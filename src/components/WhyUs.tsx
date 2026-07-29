import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Rocket, Award, Headphones, Users, Target } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: Rocket,
      title: 'سرعة في التسليم والالتزام',
      desc: 'نلتزم بالمواعيد الدقيقة دون التنازل عن أعلى معايير الجودة والتنفيذ.',
    },
    {
      icon: Award,
      title: 'جودة عالمية بأيادٍ محترفة',
      desc: 'نصمم ونبرمج وفق أحدث الممارسات التقنية والتصميمية العالمية.',
    },
    {
      icon: Users,
      title: 'فريق واحد يتكفل بكل التفاصيل',
      desc: 'من التحليل والتخطيط إلى التصميم، البرمجة والإطلاق، لا تحتاج للتعامل مع جهات متعددة.',
    },
    {
      icon: ShieldCheck,
      title: 'أمان استثنائي وعقود موثوقة',
      desc: 'نضمن حماية بياناتك وشفراتك البرمجية مع التزام كامل بالسرية والأمان.',
    },
    {
      icon: Headphones,
      title: 'دعم فني وتطوير مستمر',
      desc: 'نسير معك خطوة بخطوة بعد الإطلاق لضمان التحديثات والاستقرار الدائم.',
    },
    {
      icon: Target,
      title: 'تركيز حقيقي على النتائج',
      desc: 'لا نقدم مجرد كود أو تصميم، بل حلولاً تسهم فعلياً في زيادة مبيعاتك ونمو مشروعك.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#091322] relative overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full inline-block mb-4">
            لماذا يمن بلاس؟
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            شريكك الرقمي الموثوق لبناء المستقبل
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            نحن لا نكتفي بتقديم الخدمات البرمجية فحسب، بل نبني علاقات شراكة نجاح طويلة الأجل مع عملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#0e1a2c]/80 border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-7 transition-all duration-300 hover:bg-[#112036] hover:shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950/70 via-slate-900/90 to-blue-950/70 border border-blue-500/30 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-2xl">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 font-mono text-sky-400">+50</div>
            <div className="text-xs text-slate-300 font-medium">مشروع ناجح تم إطلاقه</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 font-mono text-sky-400">99.8%</div>
            <div className="text-xs text-slate-300 font-medium">نسبة رضا العملاء</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 font-mono text-sky-400">+25</div>
            <div className="text-xs text-slate-300 font-medium">خبير ومطور متفرغ</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white mb-1 font-mono text-sky-400">24/7</div>
            <div className="text-xs text-slate-300 font-medium">دعم فني ومتابعة مستمرة</div>
          </div>
        </div>

      </div>
    </section>
  );
};
