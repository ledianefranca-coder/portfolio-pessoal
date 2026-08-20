import React, { useState, useEffect } from 'react';
import { NavigationSection, ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Moon, Sun, ArrowUpRight, FileText, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: NavigationSection;
  setActiveSection: (section: NavigationSection) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  theme,
  toggleTheme,
  onOpenCV
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: NavigationSection) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0f0e13]/85 backdrop-blur-md border-b border-[#2b2438]/80 py-3 shadow-lg'
            : 'bg-[#faf7fc]/85 backdrop-blur-md border-b border-[#ebdcf5]/80 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Monogram & Signature */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-3 transition-transform hover:opacity-90 active:scale-98 cursor-pointer shrink-0"
          title="Voltar ao início"
        >
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center font-display font-black text-sm tracking-wider border shrink-0 transition-all duration-300 group-hover:scale-105 ${
              isDark
                ? 'bg-gradient-to-br from-[#241a33] to-[#171022] border-[#4a3466] text-[#e9d5ff] shadow-sm'
                : 'bg-gradient-to-br from-[#ffffff] to-[#f4e8fc] border-[#d8b4fe] text-[#6b21a8] shadow-xs'
            }`}
          >
            LF.
          </div>
          <div className="min-w-0">
            <span className="font-display font-bold tracking-tight text-sm sm:text-base block leading-tight text-current group-hover:text-[#9333ea] dark:group-hover:text-[#c084fc] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span
              className={`text-[11px] font-sans tracking-wide block truncate ${
                isDark ? 'text-[#a998be]' : 'text-[#775f8a]'
              }`}
            >
              Criatividade • Tecnologia • Natureza
            </span>
          </div>
        </button>

        {/* Right Action Tools: CV and Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Curriculum / Qualifications Button */}
          <button
            id="header-cv-btn"
            onClick={onOpenCV}
            className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${
              isDark
                ? 'bg-[#241935]/80 border-[#4a3466] text-[#f3e8ff] hover:border-[#c084fc]'
                : 'bg-[#ede0f6]/80 border-[#d8b4fe] text-[#6b21a8] hover:border-[#9333ea]'
            }`}
            title="Abrir Resumo de Qualificações e Trajetória"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Currículo</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
              isDark
                ? 'bg-[#221633] border-[#3f2a59] text-[#e9d5ff] hover:text-[#ffffff] hover:border-[#c084fc]'
                : 'bg-[#ede2f4] border-[#dec7ec] text-[#6b21a8] hover:text-[#281838] hover:border-[#9333ea]'
            }`}
            title={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
          >
            {isDark ? <Sun className="w-4 h-4 text-[#facc15]" /> : <Moon className="w-4 h-4 text-[#7e22ce]" />}
          </button>
        </div>
      </div>
    </header>
  );
};
