import React from 'react';
import { motion } from 'motion/react';
import heroSceneArt from '../assets/images/yemen_plus_exact_hero_scene_1785293983868.jpg';

interface HeroProps {
  onOpenStartModal: () => void;
  onDiscoverMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverMore }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] lg:min-h-[850px] pt-32 sm:pt-36 pb-28 lg:py-0 flex items-center overflow-hidden bg-[#061220]"
    >
      {/* 3D Atmospheric Background Scene matching Reference Image 1 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Widescreen 3D Scene Art */}
        <img
          src={heroSceneArt}
          alt="Yemen Plus Studio Scene"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-left-center sm:object-center opacity-90 transform scale-105"
        />

        {/* Soft Vignette and Text Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#061220]/50 to-[#061220]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061220] via-transparent to-[#061220]/50" />

        {/* Ambient Star Sparkles & Glowing Flares */}
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-white rounded-full blur-[1px] shadow-[0_0_12px_#ffffff] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-sky-300 rounded-full blur-[1px] shadow-[0_0_10px_#38bdf8] animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-amber-200 rounded-full blur-[1px] shadow-[0_0_8px_#fde68a]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          
          {/* Right Column (Arabic text content - exactly matching Image 1) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 lg:col-start-6 text-right flex flex-col items-start lg:items-start"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.2] mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              ماذا تريد أن <br />
              نبني لك؟
            </h1>

            {/* Paragraph / Subtitle Description */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-xl text-justify sm:text-right drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              نحوّل أفكارك إلى علامة تجارية ومشاريع رقمية تنمو وتحقق نتائج. من الفكرة إلى الإطلاق، فريق واحد يهتم بكل التفاصيل.
            </p>

            {/* Glassy Pill Button "اكتشف المزيد" */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onDiscoverMore}
                className="group relative inline-flex items-center justify-center px-10 py-3 text-base sm:text-lg font-bold text-white transition-all duration-300 bg-[#162c4c]/85 backdrop-blur-md rounded-full border border-sky-400/50 hover:border-sky-300 shadow-[0_4px_25px_rgba(2,132,199,0.4)] hover:shadow-[0_6px_35px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">اكتشف المزيد</span>
                <div className="absolute inset-0 rounded-full bg-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Organic Smooth White Bottom Wave Curve (Matches Image 1 bottom wave) */}
      <div className="absolute -bottom-1 left-0 right-0 pointer-events-none z-30 overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-16 sm:h-24 lg:h-36 text-[#f8fafc] fill-current scale-y-[1.05] origin-bottom" 
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
        >
          <path d="M0,64 C280,120 450,10 750,70 C1050,130 1300,30 1440,55 L1440,140 L0,140 Z"></path>
        </svg>
      </div>
    </section>
  );
};


