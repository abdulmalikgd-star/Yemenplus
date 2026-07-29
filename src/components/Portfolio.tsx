import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ArrowLeft, Layers, Sparkles } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const projects = [
    {
      id: 1,
      title: 'منصة حجز واستشارات سريعة',
      category: 'apps',
      categoryLabel: 'تطبيق جوال',
      desc: 'تطبيق جوال شامل لحجز المواعيد والاستشارات الطبية والفنية مع نظام إشعارات فورية ودفع إلكتروني.',
      tags: ['React Native', 'Node.js', 'Tailwind', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      stats: '100k+ تنزيل',
    },
    {
      id: 2,
      title: 'متجر إلكتروني فاخر للمنتجات الرقمية',
      category: 'web',
      categoryLabel: 'موقع إلكتروني',
      desc: 'منصة تجارة إلكترونية سريعة تدعم تعدد العملات واللغات مع تجربة تسوق سلسة ولوحة تحكم متقدمة.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      stats: '+45% زيادة المبيعات',
    },
    {
      id: 3,
      title: 'هوية بصرية كاملة لشركة استثمار رقمي',
      category: 'branding',
      categoryLabel: 'هوية تجارية',
      desc: 'تصميم شعار، دليل هوية بصري، مطبوعات، وواجهات رقمية تعكس الاحترافية والفخامة.',
      tags: ['Branding', 'Figma', 'Logo Design', 'UI Kit'],
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop',
      stats: 'هوية متكاملة 100%',
    },
    {
      id: 4,
      title: 'تطبيق توصيل وخدمات لوجستية',
      category: 'apps',
      categoryLabel: 'تطبيق جوال',
      desc: 'نظام توصيل ذكي مع تتبع حي للخرائط GPS وتوزيع آلي للطلبات للمندوبين والعملاء.',
      tags: ['Flutter', 'Firebase', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop',
      stats: '+10,000 طلب يومياً',
    },
    {
      id: 5,
      title: 'بوابة تعليمية وتدريب تفاعلي',
      category: 'web',
      categoryLabel: 'موقع إلكتروني',
      desc: 'منصة تعليمية تقدم دورات بالفيديو، اختبارات تفاعلية، وشهادات تلقائية مع لوحة تحكم للمعلمين.',
      tags: ['React', 'Express', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
      stats: '50k+ طالب',
    },
    {
      id: 6,
      title: 'لوحة تحكم وتحليل بيانات الذكاء الاصطناعي',
      category: 'web',
      categoryLabel: 'موقع إلكتروني',
      desc: 'داشبورد تفاعلي يحلل بيانات المشاريع ويصدر تقارير فورية باستخدام رسوم بيانية خفيفة ومتقدمة.',
      tags: ['Recharts', 'TypeScript', 'REST API'],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
      stats: 'تحليل لحظي',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="relative bg-gradient-to-br from-[#0a1e3b] via-[#0e2a52] to-[#061224] text-white py-24 overflow-hidden">
      
      {/* Top Wave Divider - Subpixel Overlap Fix */}
      <div className="absolute -top-1 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc] fill-current scale-y-[1.05] origin-top" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-20 pt-8 sm:pt-12">
        
        {/* Header Content - Centered as requested */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-sky-200 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>مشاريعنا المميزة | Our Projects</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              نبتكر مشاريع رقمية <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-blue-300 to-indigo-200">
                تترك انطباعاً دائمًا
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              نستعرض باقة من أبرز المشاريع والواجهات الرقمية المبتكرة التي نفذها فريقنا باحترافية لتلبي تطلعات عملائنا.
            </p>

            {/* Filter Tabs - Centered */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {[
                { id: 'all', label: 'جميع المشاريع' },
                { id: 'web', label: 'مواقع إلكترونية' },
                { id: 'apps', label: 'تطبيقات جوال' },
                { id: 'branding', label: 'هويات بصريّة' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    filter === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/40 border border-blue-300/40 scale-105'
                      : 'bg-blue-950/70 text-sky-200 hover:bg-blue-900/80 border border-blue-700/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Portfolio Grid Cards - 3 columns across mobile, tablet, and desktop */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-32 sm:h-48 md:h-60 overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-blue-600/90 backdrop-blur-md text-white border border-blue-400/40 text-[9px] sm:text-xs font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md">
                      {project.categoryLabel}
                    </span>

                    <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[9px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg shadow-md">
                      {project.stats}
                    </span>
                  </div>

                  <div className="p-3 sm:p-5 md:p-6 text-right">
                    <h3 className="text-xs sm:text-base md:text-xl font-black text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-[10px] sm:text-xs leading-relaxed mb-2 sm:mb-4 line-clamp-2">
                      {project.desc}
                    </p>

                    <div className="hidden sm:flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-4">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] sm:text-[11px] font-bold bg-sky-50 text-blue-700 px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md border border-sky-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-3 pb-3 sm:px-6 sm:pb-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 sm:py-3 bg-blue-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500 text-blue-700 hover:text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold border border-blue-200 shadow-sm transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group/btn"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>التفاصيل</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,-40 900,60 C1050,110 1150,40 1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto text-right">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 left-4 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
            >
              ✕
            </button>

            <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-xs font-bold mb-3">
              {selectedProject.categoryLabel}
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-3">{selectedProject.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">{selectedProject.desc}</p>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">التقنيات المستخدمة:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-sky-50 text-blue-700 rounded-lg text-xs font-bold border border-sky-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-md"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

