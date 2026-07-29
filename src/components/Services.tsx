import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Server, Headphones, ArrowLeft } from 'lucide-react';

interface ServicesProps {
  onOpenStartModal: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenStartModal }) => {
  const serviceList = [
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'تطوير المتاجر والمنصات الرقمية',
      subtitle: 'Quantum E-Commerce',
      desc: 'بناء منصات ومتاجر إلكترونية متكاملة مع بوابات دفع وسريعة الاستجابة لكافة الأجهزة.',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'software',
      icon: Server,
      title: 'الأنظمة والحلول البرمجية المتكاملة',
      subtitle: 'Quantum Software Solutions',
      desc: 'تطوير أنظمة سحابية وتطبيقات جوال مخصصة تلبي احتياجات سوقك بدقة عالية.',
      color: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'الدعم الفني وتطوير الأداء المستمر',
      subtitle: 'Quantum Technical Support',
      desc: 'حماية وأمان وحلول استضافة فائقة السرعة مع صيانة وتحديثات دورية على مدار الساعة.',
      color: 'bg-teal-50 text-teal-700 border-teal-200',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f8fafc] text-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 text-center">
        
        {/* Text & Service Items Side */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold mb-4">
            <span>خدماتنا المتميزة | Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            هل ترغب في تسريع نمو <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600">
              مشروعك الرقمي؟
            </span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            نقدم حزمة شاملة من الخدمات التقنية المصممة خصيصاً للارتقاء بأعمالك وتزويدك بالميزة التنافسية.
          </p>

          {/* Service Item Cards List */}
          <div className="space-y-4 mb-10 text-right">
            {serviceList.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ x: -6 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                  onClick={() => onOpenStartModal(item.title)}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-semibold text-blue-600 mb-1">{item.subtitle}</div>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={() => onOpenStartModal()}
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-700 to-sky-500 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 gap-2"
          >
            <span>طلب كافة الخدمات</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};


