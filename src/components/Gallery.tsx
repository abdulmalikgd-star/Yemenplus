import React from 'react';
import { motion } from 'motion/react';
import { Image, ArrowLeft, Sparkles } from 'lucide-react';
import galleryCollage from '../assets/images/gallery_grid_collage_1785292273932.jpg';

interface GalleryProps {
  onDiscoverMore?: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onDiscoverMore }) => {
  return (
    <section id="gallery" className="relative bg-gradient-to-br from-[#2a0e66] via-[#1d074d] to-[#120335] text-white py-24 overflow-hidden">
      
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-20 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Collage Imagery Grid (Right side visual in RTL, Matches Image 6) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-purple-400/40 shadow-2xl group">
              <img
                src={galleryCollage}
                alt="Yemen Plus Innovation Gallery Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120335]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute bottom-6 right-6 bg-purple-950/90 backdrop-blur-md border border-purple-400/50 p-4 rounded-2xl shadow-xl max-w-xs text-right">
                <div className="text-xs font-bold text-purple-300">ابتكارات برمجية فائقة</div>
                <div className="text-[11px] text-purple-100/70">رؤية مستقبلية في الذكاء الاصطناعي وواجهات المستقبل.</div>
              </div>
            </div>
          </motion.div>

          {/* Text Content (Left side in RTL) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-right order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-400/40 text-purple-200 text-xs font-bold mb-4">
              <Image className="w-3.5 h-3.5 text-purple-300" />
              <span>معرض ابتكاراتنا | Our Gallery</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
              استكشف معرض الأعمال <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-300 to-sky-300">
                والتجارب البصرية الملهمة
              </span>
            </h2>

            <p className="text-purple-100/80 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              تصفح معرضنا للاطلاع على فلسفتنا في التصميم والبرمجة وكيفية تحويل الأفكار الرقمية المعقدة إلى بيئة عمل سهلة وممتعة.
            </p>

            <button
              onClick={onDiscoverMore}
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 gap-2"
            >
              <span>تصفح المعرض</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,90 600,-30 900,60 C1050,110 1150,40 1200,20 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};
