import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.35 : 1;

  return (
    <div 
      dir="ltr" 
      className={`inline-flex items-center gap-3 select-none ${className}`}
    >
      {/* 3D Intersecting Plus Icon Emblem */}
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
            
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Silver diagonal capsule (-30deg) */}
          <g transform="rotate(-30 60 60)">
            <rect 
              x="43" 
              y="12" 
              width="34" 
              height="96" 
              rx="17" 
              fill="url(#silverGradient)" 
            />
          </g>

          {/* Blue diagonal capsule (+30deg) */}
          <g transform="rotate(30 60 60)">
            <rect 
              x="43" 
              y="12" 
              width="34" 
              height="96" 
              rx="17" 
              fill="url(#blueGradient)" 
              opacity="0.95"
            />
          </g>
        </svg>
      </div>

      {/* Brand Typography matching official logo */}
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
