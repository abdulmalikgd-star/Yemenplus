import React from 'react';
import { motion } from 'motion/react';
import { Code, BarChart3, Palette, Cpu, ArrowLeft } from 'lucide-react';

interface AboutUsProps {
  onDiscoverMore?: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onDiscoverMore }) => {
  const diamonds = [
    {
      id: 1,
      title: 'البرمجة',
      subtitle: 'Development',
      icon: Code,
      color: 'from-blue-600 to-sky-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      id: 2,
      title: 'التحليل',
      subtitle: 'Analytics',
      icon: BarChart3,
      color: 'from-sky-500 to-blue-600',
      borderColor: 'border-sky-200',
      bgColor: 'bg-sky-50',
      textColor: 'text-sky-600',
    },
    {
      id: 3,
      title: 'التصميم',
      subtitle: 'UI/UX Design',
      icon: Palette,
      color: 'from-indigo-600 to-blue-600',
      borderColor: 'border-indigo-200',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
    {
      id: 4,
      title: 'الابتكار',
      subtitle: 'Innovation',
      icon: Cpu,
      color: 'from-teal-600 to-cyan-600',
      borderColor: 'border-teal-200',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Arabic Right Side): Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-6 text-right"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] sm:text-xs font-bold mb-3 sm:mb-4">
              <span>عن يمن بلاس | About The Company</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3 sm:mb-6">
              نصمم ونطور <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600">
                حلولاً رقمية تتجاوز التوقعات
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-6 max-w-xl text-justify sm:text-right">
              نحن فريق متكامل من المصممين والمطورين والمستشارين الرقميين الملتزمين بتحويل أفكارك الرائدة إلى مشاريع رقمية ذات أثر حقيقي ونمو مستدام.
            </p>

            <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed max-w-xl text-justify sm:text-right">
              نجمع بين دقة البرمجة وجماليات التصميم الحديث لتحقيق أعلى مستويات الأداء والأمان لمشروعك.
            </p>
          </motion.div>

          {/* Right Column (Arabic Left Side): 4-Diamond Rotated Tiles Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-6 flex justify-center items-center py-2 sm:py-8"
          >
            <div className="relative w-[170px] h-[170px] xs:w-[220px] xs:h-[220px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Outer Glowing Diamond Background Outline */}
              <div className="absolute inset-0 m-auto w-[140px] h-[140px] xs:w-[180px] xs:h-[180px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] bg-gradient-to-tr from-sky-100 to-blue-50 rounded-[20px] sm:rounded-[40px] rotate-45 border-2 border-dashed border-blue-200" />

              {/* Central Rotated Diamonds Layout */}
              <div className="absolute inset-0 grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-4 p-2 sm:p-4 transform rotate-45 scale-90 sm:scale-100 items-center justify-center">
                {diamonds.map((d) => {
                  const IconComp = d.icon;
                  return (
                    <motion.div
                      key={d.id}
                      whileHover={{ scale: 1.08 }}
                      className={`relative bg-white border sm:border-2 ${d.borderColor} rounded-xl sm:rounded-3xl p-2 xs:p-3 sm:p-6 shadow-md sm:shadow-xl flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer overflow-hidden`}
                    >
                      {/* Counter rotation for internal content to keep text upright */}
                      <div className="transform -rotate-45 flex flex-col items-center text-center">
                        <div className={`w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl ${d.bgColor} ${d.textColor} flex items-center justify-center mb-1 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm`}>
                          <IconComp className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-[10px] xs:text-xs sm:text-sm font-black text-slate-800 tracking-tight group-hover:text-blue-700 transition-colors">
                          {d.title}
                        </span>
                        <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5 hidden xs:block">
                          {d.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
