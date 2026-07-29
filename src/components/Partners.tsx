import React from 'react';
import { motion } from 'motion/react';

export const Partners: React.FC = () => {
  const partners = [
    { name: 'Ripple', logo: 'ripple' },
    { name: 'Bitcoin', logo: 'bitcoin' },
    { name: 'NEM', logo: 'nem' },
    { name: 'Ethereum', logo: 'ethereum' },
    { name: 'Komodo', logo: 'komodo' },
    { name: 'Litecoin', logo: 'litecoin' },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-100 text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-6">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            شركاء النجاح والثقة الرقمية
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 opacity-70 hover:opacity-100 transition-opacity">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-slate-600 font-bold text-lg sm:text-xl tracking-tight cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-slate-200/80 flex items-center justify-center text-xs font-black text-slate-700">
                ●
              </div>
              <span className="font-sans lowercase">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
