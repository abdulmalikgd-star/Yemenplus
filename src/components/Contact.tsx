import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'تطوير تطبيق جوال',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Direct mailto dispatch to info@yemplus.com
    const subject = `رسالة جديدة من الموقع: ${formData.name} - ${formData.service}`;
    const body = `مرحباً فريق يمن بلاس،\n\nتلقيتم رسالة جديدة عبر النموذج في الموقع:\n\n- الاسم: ${formData.name}\n- البريد الإلكتروني: ${formData.email}\n- رقم الهاتف / الواتساب: ${formData.phone}\n- الخدمة المطلوبة: ${formData.service}\n\nتفاصيل الرسالة:\n${formData.message}\n\n---\nتم الإرسال عبر yemplus.com`;

    const mailtoUrl = `mailto:info@yemplus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Dispatch mailto link directly to user's email client
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.error('Mailto error:', err);
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-[#091322] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-blue-950/80 border border-blue-500/30 px-4 py-1.5 rounded-full inline-block mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            لنبدأ بتجسيد رؤيتك اليوم
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            يسعدنا مناقشة تطلعات مشروعك وتقديم استشارة تقنية وتصميمية مجانية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details (Left side in RTL) */}
          <div className="lg:col-span-5 bg-[#0d1727] border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              فريق يمن بلاس جاهز للإجابة على استفساراتك وتزويدك بالخطط والحلول المناسبة لأعمالك.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">البريد الإلكتروني</div>
                  <a href="mailto:info@yemplus.com" className="text-sm font-bold text-white hover:text-sky-400 transition-colors">
                    info@yemplus.com
                  </a>
                </div>
              </div>

              {/* Direct Phone Call */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">الاتصال المباشر</div>
                  <a href="tel:+967770767776" className="block text-right">
                    <span 
                      dir="ltr" 
                      className="inline-block text-base font-bold text-white hover:text-sky-400 transition-colors font-mono tracking-wider"
                      style={{ unicodeBidi: 'bidi-override', direction: 'ltr' }}
                    >
                      +967 770 767 776
                    </span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Service */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-1">الواتساب</div>
                  <a href="https://wa.me/967738880088" target="_blank" rel="noreferrer" className="block text-right">
                    <span 
                      dir="ltr" 
                      className="inline-block text-base font-bold text-white hover:text-emerald-400 transition-colors font-mono tracking-wider"
                      style={{ unicodeBidi: 'bidi-override', direction: 'ltr' }}
                    >
                      +967 738 880 088
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Callout */}
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-300">متواجدون الآن على الواتساب</span>
              </div>
              <a
                href="https://wa.me/967738880088"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all"
              >
                محادثة فورية
              </a>
            </div>

          </div>

          {/* Contact Form (Right side in RTL) */}
          <div className="lg:col-span-7 bg-[#0d1727] border border-slate-800 rounded-2xl p-8 shadow-xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">تم تجهيز وإرسال رسالتك!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-2 leading-relaxed">
                  تم توجيه طلبك مباشرة إلى البريد الإلكتروني الخاص بنا:
                </p>
                <div className="inline-block px-4 py-2 bg-blue-950/80 border border-blue-500/40 text-sky-300 font-mono font-bold text-sm rounded-xl mb-6">
                  info@yemplus.com
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      const subject = `تأكيد طلب: ${formData.name}`;
                      const body = `الاسم: ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nالخدمة: ${formData.service}\nالرسالة:\n${formData.message}`;
                      window.location.href = `mailto:info@yemplus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    }}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>إعادة إرسال بالبريد المباشر</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all"
                  >
                    إرسال رسالة جديدة
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-2">أرسل لنا استفسارك</h3>
                <p className="text-xs text-slate-400 mb-6">احصل على تقييم وعرض سعر لمشروعك</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      placeholder="أدخل اسمك"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">رقم الهاتف / الواتساب</label>
                    <input
                      type="tel"
                      required
                      placeholder="00967..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">الخدمة المطلوبة</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                      <option value="تطوير موقع إلكتروني">تطوير موقع إلكتروني</option>
                      <option value="تطبيق جوال (iOS / Android)">تطبيق جوال (iOS / Android)</option>
                      <option value="هوية بصرية و UI/UX">هوية بصرية و UI/UX</option>
                      <option value="تسويق رقمي وحملات">تسويق رقمي وحملات</option>
                      <option value="حلول سحابية وبرمجية">حلول سحابية وبرمجية</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">تفاصيل المشروع</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="اكتب هنا فكرة المشروع أو متطلباتك بالتفصيل..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>جاري الإرسال...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>إرسال الطلب</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
