import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "مع يمن بلاس، تحولت رؤيتنا الرقمية إلى واقع ملموس يتجاوز التوقعات. احترافية عالية وسرعة استثنائية في التنفيذ.",
      author: "م. أحمد العمودي",
      role: "المدير التنفيذي - شركة الأفق الرقمي",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote: "فريق عمل يمن بلاس يمتلك شغفاً حقيقياً بالابتكار والجودة. الدعم الفني المستمر هو سبب استمرار نجاح متجرنا الإلكتروني.",
      author: "سارة خالد باوزير",
      role: "مديرة التسويق - مجموعة سدرة",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      quote: "المنصة وتطبيقات الجوال التي تم تطويرها غيرت تجربة عملائنا جذرياً، وساهمت في زيادة مبيعاتنا بنسبة تزيد عن 60%.",
      author: "عبدالله اليافعي",
      role: "مؤسس - تطبيق تراك اللوجستي",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative bg-gradient-to-br from-[#2a0e66] via-[#1d074d] to-[#120335] text-white py-24 overflow-hidden">
      
      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc] fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,90 350,-40 500,65 C650,170 900,10 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-20 pt-10 sm:pt-14 text-center">
        
        {/* Top Centered Avatar Image (Matches Image 8) */}
        <div className="relative inline-block mb-8">
          <motion.div 
            key={current.image}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.5)] overflow-hidden mx-auto bg-purple-900"
          >
            <img
              src={current.image}
              alt={current.author}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-2 right-1/2 translate-x-1/2 w-7 h-7 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white shadow-md">
            <Quote className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>

        {/* Carousel Quote Area with Navigation Arrows */}
        <div className="relative flex items-center justify-between gap-4">
          
          {/* Right Arrow (RTL Next) */}
          <button
            onClick={handleNext}
            aria-label="التالي"
            className="w-11 h-11 rounded-full bg-purple-900/60 border border-purple-400/40 text-purple-200 hover:bg-purple-600 hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Quote Text */}
          <div className="flex-1 px-4 sm:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed mb-6 text-purple-50">
                  "{current.quote}"
                </h3>
                <div className="text-sm font-black text-purple-200 uppercase tracking-widest">
                  {current.author}
                </div>
                <div className="text-xs text-purple-300/70 mt-1 font-semibold">
                  {current.role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow (RTL Prev) */}
          <button
            onClick={handlePrev}
            aria-label="السابق"
            className="w-11 h-11 rounded-full bg-purple-900/60 border border-purple-400/40 text-purple-200 hover:bg-purple-600 hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

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
