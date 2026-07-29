import React from 'react';
import { motion } from 'motion/react';
import { Users, ArrowLeft } from 'lucide-react';

interface TeamProps {
  onDiscoverMore?: () => void;
}

export const Team: React.FC<TeamProps> = ({ onDiscoverMore }) => {
  return (
    <section id="team" className="relative bg-gradient-to-br from-[#07172e] via-[#0d264a] to-[#040e1f] text-white py-24 overflow-hidden">
      
      {/* Top SVG Wave Divider */}
      <div className="absolute -top-1 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc] fill-current scale-y-[1.05] origin-top" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C200,80 400,-30 600,60 C800,150 1000,20 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-20 pt-8 sm:pt-12 text-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-sky-200 text-xs font-bold mb-4">
            <Users className="w-3.5 h-3.5 text-sky-300" />
            <span>فريق يمن بلاس | Meet Our Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            فريق متكامل من <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200">
              أبرز الخبراء والمهندسين
            </span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            نفخر بفريقنا الاستثنائي المتخصص في مجالات البرمجة، التصميم، والذكاء الاصطناعي، والذين يعملون بشغف لتحويل تطلعاتك إلى نتائج حقيقية.
          </p>

          <p className="text-slate-300/80 text-sm leading-relaxed max-w-xl mx-auto">
            كل عضو في فريقنا كُرس لتقديم أفضل حل برمج مخصص يتناسب تماماً مع متطلبات مشروعك وقيم شركتك.
          </p>
        </motion.div>

      </div>

      {/* Bottom SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-[#ffffff] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,-30 900,60 C1050,110 1150,40 1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

