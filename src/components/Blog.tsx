import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, Calendar, ArrowLeft } from 'lucide-react';

export const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      category: 'الأمان والسيبرانية',
      title: 'أهم 5 معايير لحماية برمجياتك وموقعك من الهجمات الرقمية',
      date: '15 فبراير 2026',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      category: 'الذكاء الاصطناعي',
      title: 'كيف يغير الذكاء الاصطناعي مستقبل تطوير التطبيقات والمتاجر؟',
      date: '10 فبراير 2026',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      category: 'استراتيجيات التكنولوجيا',
      title: 'دليلك الشامل لبناء منصة سحابية سريعة قابلة للتوسع والنمو',
      date: '02 فبراير 2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold mb-4">
              <Newspaper className="w-3.5 h-3.5" />
              <span>المدونة والأخبار | Our Blog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              أحدث المقالات والرؤى الرقمية
            </h2>
          </motion.div>

          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-purple-700 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors self-start md:self-auto">
            <span>جميع المقالات</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Articles Grid (Matches Screenshot 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-purple-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-3">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug mb-4">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center gap-2 text-xs font-bold text-purple-700 group-hover:text-indigo-600">
                <span>اقرأ التفاصيل</span>
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
