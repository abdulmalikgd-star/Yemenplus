import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, CheckCircle, ArrowLeft, Building, Smartphone, Globe, Palette } from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose, initialService }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: initialService || 'تطوير موقع إلكتروني',
    budget: '$1,000 - $3,000',
    timeline: 'خلال أسبوعين',
    name: '',
    email: '',
    phone: '',
    details: '',
  });

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dispatch email to info@yemplus.com
    const subject = `طلب مشروع جديد: ${formData.serviceType} - ${formData.name}`;
    const body = `مرحباً فريق يمن بلاس،\n\nتلقيتم طلب بدء مشروع جديد:\n\n` +
      `- نوع الخدمة: ${formData.serviceType}\n` +
      `- الميزانية التقديرية: ${formData.budget}\n` +
      `- المدة الزمنية: ${formData.timeline}\n` +
      `- الاسم الكامل: ${formData.name}\n` +
      `- رقم الهاتف / الواتساب: ${formData.phone}\n` +
      `- البريد الإلكتروني: ${formData.email}\n` +
      `- تفاصيل إضافية:\n${formData.details || 'لا يوجد'}\n\n---\nتم الإرسال عبر yemplus.com`;

    const mailtoUrl = `mailto:info@yemplus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.error('Mail error:', err);
    }

    setSubmitted(true);
  };

  const resetAndClose = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0b1424] border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden text-right">
        
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 left-5 text-slate-400 hover:text-white bg-slate-800/80 p-2 rounded-full border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center">
            <div className="w-16 h-16 bg-blue-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/40">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">تهانينا! تم استلام طلبك</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              يقوم فريق يمن بلاس الآن بمراجعة تفاصيل مشروعك وسيُحدد موعداً لجلسة الاستشارة الأولى معكم.
            </p>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/30"
            >
              العودة للموقع
            </button>
          </motion.div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>بدء مشروع جديد مع يمن بلاس</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-6">ابدأ مشروعك الرقمي الآن</h3>

            {/* Step Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs font-bold">
              <span className={step >= 1 ? 'text-sky-400' : 'text-slate-500'}>1. نوع الخدمة</span>
              <span className="text-slate-600">—</span>
              <span className={step >= 2 ? 'text-sky-400' : 'text-slate-500'}>2. الميزانية والجدول</span>
              <span className="text-slate-600">—</span>
              <span className={step >= 3 ? 'text-sky-400' : 'text-slate-500'}>3. بيانات الاتصال</span>
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1: SERVICE SELECT */}
              {step === 1 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-slate-300">اختر نوع الخدمة التي ترغب بها:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: 'تطوير موقع إلكتروني', icon: Globe },
                      { label: 'تطبيق جوال (iOS/Android)', icon: Smartphone },
                      { label: 'هوية بصريّة و UI/UX', icon: Palette },
                      { label: 'حلول سحابية ومتكاملة', icon: Building },
                    ].map((item, i) => {
                      const IconComp = item.icon;
                      const selected = formData.serviceType === item.label;
                      return (
                        <button
                          type="button"
                          key={i}
                          onClick={() => setFormData({ ...formData, serviceType: item.label })}
                          className={`p-4 rounded-xl border text-right transition-all flex items-center gap-3 ${
                            selected
                              ? 'bg-blue-600/20 border-sky-400 text-white shadow-md'
                              : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${selected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-bold">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl flex items-center gap-2"
                    >
                      <span>التالي</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: BUDGET & TIMELINE */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">الميزانية التقديرية:</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm"
                    >
                      <option value="أقل من $1,000">أقل من $1,000</option>
                      <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                      <option value="$3,000 - $7,000">$3,000 - $7,000</option>
                      <option value="أكثر من $7,000">أكثر من $7,000</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">المدة الزمنية المرغوبة:</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm"
                    >
                      <option value="عاجل (خلال أسبوع)">عاجل (خلال أسبوع)</option>
                      <option value="خلال أسبوعين">خلال أسبوعين</option>
                      <option value="خلال شهر">خلال شهر</option>
                      <option value="غير محدد">غير محدد</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">ملاحظات إضافية:</label>
                    <textarea
                      rows={3}
                      placeholder="اذكر أي التفاصيل ترغب بإضافتها..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm resize-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 bg-slate-800 text-slate-300 hover:text-white font-bold text-sm rounded-xl"
                    >
                      السابق
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl flex items-center gap-2"
                    >
                      <span>التالي</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم</label>
                    <input
                      type="text"
                      required
                      placeholder="اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الجوال / الواتساب</label>
                    <input
                      type="tel"
                      required
                      placeholder="00967..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#070e17] border border-slate-700 rounded-xl text-white text-sm"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 bg-slate-800 text-slate-300 hover:text-white font-bold text-sm rounded-xl"
                    >
                      السابق
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/30"
                    >
                      تأكيد وإرسال الطلب
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
