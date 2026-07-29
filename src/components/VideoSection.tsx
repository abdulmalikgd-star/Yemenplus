import React from 'react';
import { motion } from 'motion/react';
import { Video, CheckCircle2 } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-24 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>شاهد منهجية العمل | Our Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            كيف ننجز مشاريعنا <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500">
              بأعلى معايير الاحترافية؟
            </span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            نعتمد في يمن بلاس على منهجية عمل فائقة الدقة للتعرف على دورة حياة تطوير وتصميم المشاريع لدينا وكيف نضمن لك أعلى درجات الجودة والأداء.
          </p>

          <ul className="space-y-3 max-w-md mx-auto text-right">
            <li className="flex items-center gap-3 text-sm text-slate-700 font-semibold p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>تحليل وتخطيط معمارية النظام بحرفية عالية</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700 font-semibold p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>تصميم واجهات فائقة الاستجابة وسلسة الاستخدام</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-slate-700 font-semibold p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>اختبار أمان دقيق وضمان جودة متواصل بعد الإطلاق</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};


