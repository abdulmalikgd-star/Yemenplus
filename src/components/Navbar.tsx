import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenStartModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenStartModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'portfolio', 'team', 'video', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'عن الشركة' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'portfolio', label: 'مشاريعنا' },
    { id: 'team', label: 'فريق العمل' },
    { id: 'video', label: 'منهجية العمل' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8 lg:px-14 ${
        scrolled 
          ? 'bg-[#070e17]/90 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-slate-800/60 py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left CTA: "ابدأ الآن" Button (Matches Image 1 & 2) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenStartModal}
            className="group relative inline-flex items-center justify-center px-7 py-2.5 text-sm sm:text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 rounded-full shadow-[0_4px_22px_rgba(2,132,199,0.5)] hover:shadow-[0_6px_30px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 border border-sky-400/40"
          >
            <span className="relative z-10">ابدأ الآن</span>
          </button>
        </div>

        {/* Center Pill Navigation Bar (Matches Image 1 capsule) */}
        <nav className="hidden lg:flex items-center bg-white px-7 py-2.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-slate-200">
          <ul className="flex items-center text-slate-800 font-bold text-sm sm:text-base space-x-reverse space-x-1">
            {navItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <li>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`px-3 py-1 transition-all duration-200 rounded-full whitespace-nowrap hover:text-blue-600 ${
                      activeSection === item.id 
                        ? 'text-blue-600 font-extrabold' 
                        : 'text-slate-800 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
                {index < navItems.length - 1 && (
                  <span className="text-slate-400 font-normal mx-2 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Right Logo (Matches Image 1 & 2) */}
        <button 
          onClick={() => scrollTo('hero')} 
          className="text-right focus:outline-none"
        >
          <Logo size="md" />
        </button>

        {/* Mobile Navbar Controls (Matches Image 2) */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button
            onClick={onOpenStartModal}
            className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-full shadow-md shadow-blue-500/30"
          >
            ابدأ الآن
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-300 hover:text-white bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/80"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 bg-[#091322]/95 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-right py-3 px-4 rounded-xl text-sm font-bold transition-colors ${
                  activeSection === item.id 
                    ? 'bg-blue-600/20 text-sky-400 border border-blue-500/30' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStartModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                ابدأ الآن
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
