import React, { useState } from 'react';
import { Logo } from './Logo';
import { Send, ArrowUp, Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // 1. Save locally
      try {
        const existing = JSON.parse(localStorage.getItem('yemplus_subscribers') || '[]');
        localStorage.setItem('yemplus_subscribers', JSON.stringify([...existing, { email, date: new Date().toISOString() }]));
      } catch {
        // Fallback
      }

      // 2. Dispatch email notification to info@yemplus.com
      const subject = `اشتراك جديد في النشرة البريدية: ${email}`;
      const body = `مرحباً فريق يمن بلاس،\n\nتم تسجيل اشتراك جديد في النشرة البريدية عبر الموقع:\n- البريد الإلكتروني: ${email}\n- التاريخ: ${new Date().toLocaleString('ar-YE')}\n\n---\nتم الإرسال عبر yemplus.com`;
      const mailtoUrl = `mailto:info@yemplus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error('Mail dispatch error:', err);
      }

      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 6000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#071324] via-[#091b36] to-[#040e1f] text-white pt-16 pb-12 overflow-hidden border-t border-slate-800/80">
      
      {/* World Map Background Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-20 text-center">
        
        {/* Newsletter Header (Stay Always In Touch - Section 10) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/40 text-sky-200 text-xs font-bold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>النشرة البريدية | Stay Always In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 leading-tight">
            ابقَ على تواصل دائم مع جديدنا
          </h2>
          <p className="text-slate-300 text-sm">
            اشترك في نشرتنا ليصلك أحدث المقالات والنصائح والابتكارات التقنية فور صدورها.
          </p>

          {/* Email Subscription Input Pill Container */}
          <form onSubmit={handleSubscribe} className="mt-8 max-w-md mx-auto">
            <div className="relative flex items-center bg-white rounded-full p-1.5 shadow-2xl border-2 border-blue-400">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني..."
                required
                className="w-full bg-transparent px-6 py-2.5 text-slate-800 text-sm focus:outline-none placeholder:text-slate-400 text-right font-medium"
              />
              <button
                type="submit"
                className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white flex items-center justify-center shrink-0 shadow-md transition-all duration-300 hover:scale-105"
                title="إرسال"
              >
                <Send className="w-4 h-4 transform rotate-180 ml-0.5" />
              </button>
            </div>
            {subscribed && (
              <p className="text-xs font-bold text-emerald-400 mt-3 animate-in fade-in">
                ✓ تم اشتراكك بنجاح! شكراً لتواصلك معنا.
              </p>
            )}
          </form>
        </motion.div>

        {/* Brand Logo Centered */}
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>

        {/* Links Navigation Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-slate-300 mb-10 border-t border-slate-800/80 pt-8">
          <a href="#hero" className="hover:text-sky-400 transition-colors">الرئيسية</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">عن الشركة</a>
          <a href="#services" className="hover:text-sky-400 transition-colors">خدماتنا</a>
          <a href="#portfolio" className="hover:text-sky-400 transition-colors">مشاريعنا</a>
          <a href="#team" className="hover:text-sky-400 transition-colors">فريق العمل</a>
          <a href="#video" className="hover:text-sky-400 transition-colors">منهجية العمل</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">تواصل معنا</a>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <a 
            href="https://www.facebook.com/yempluscom" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-200 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a 
            href="https://www.instagram.com/yempluscom" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-200 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://x.com/yempluscom" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter X"
            className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-200 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll Top Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} <span className="text-white font-bold">يمن بلاس | YEMEN PLUS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/80 border border-blue-500/30 text-sky-200 hover:bg-blue-600 hover:text-white transition-all text-xs"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

