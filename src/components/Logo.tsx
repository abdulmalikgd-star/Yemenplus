import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const [srcIndex, setSrcIndex] = useState(0);

  // مصادر الصور المرفوعة في مجلد public لديك
  const sources = [
    '/logo.webp',
    '/logo.png'
  ];

  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.35 : 1;
  const heightStyle = size === 'sm' ? 'h-9 sm:h-10' : size === 'lg' ? 'h-14 sm:h-16' : 'h-11 sm:h-13';

  // 1. تجربة عرض الصور المرفوعة في public بالترتيب
  if (srcIndex < sources.length) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src={sources[srcIndex]}
          alt="يمن بلاس | Yemen Plus"
          onError={() => setSrcIndex((prev) => prev + 1)}
          className={`${heightStyle} w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]`}
        />
      </div>
    );
  }

  // 2. كود الـ SVG الاحتياطي المضمون 100% في حال حدوث أي خلل
  return (
    <div 
      dir="ltr" 
      className={`inline-flex items-center gap-3 select-none ${className}`}
    >
      <div 
        className="relative flex items-center justify-center shrink-0" 
        style={{ width: `${46 * scale}px`, height: `${46 * scale}px` }}
      >
        <svg 
          viewBox="0 0 120 120" 
          className="w-full h-full drop-shadow-[0_4px_14px_rgba(37,99,235,0.45)] overflow-visible"
        >
          <defs>
            <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>

          <g transform="rotate(-30 60 60)">
            <rect x="43" y="12" width="34" height="96" rx="17" fill="url(#silverGradient)" />
          </g>

          <g transform="rotate(30 60 60)">
            <rect x="43" y="12" width="34" height="96" rx="17" fill="url(#blueGradient)" opacity="0.95" />
          </g>
        </svg>
      </div>

      <div className="flex flex-col text-right justify-center" dir="rtl">
        <div className="flex items-center gap-1.5">
          <span 
            className="font-black text-white tracking-tight leading-none"
            style={{ fontSize: `${23 * scale}px`, fontFamily: "'Cairo', sans-serif" }}
          >
            يمن بلاس
          </span>
          <span 
            className="inline-block rounded-full bg-blue-500 shadow-[0_0_8px_#38bdf8]" 
            style={{ width: `${5.5 * scale}px`, height: `${5.5 * scale}px` }}
          />
        </div>
        <div className="flex items-center gap-1.5 mt-0.5" dir="ltr">
          <span 
            className="font-black text-slate-200 tracking-wider leading-none uppercase"
            style={{ fontSize: `${9.5 * scale}px`, letterSpacing: `${1.2 * scale}px` }}
          >
            YEMEN PLUS
          </span>
          <div className="flex gap-1 items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_4px_#38bdf8]"></span>
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_4px_#38bdf8]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
