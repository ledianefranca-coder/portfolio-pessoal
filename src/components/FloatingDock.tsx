import React, { useState, useEffect } from 'react';
import { NavigationSection, ThemeMode } from '../types';
import { Sparkles, User, FolderGit2, Layers, Mail, ArrowUpRight, FileText } from 'lucide-react';

interface FloatingDockProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  theme: ThemeMode;
  onOpenCV?: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  activeSection,
  onNavigate,
  theme,
  onOpenCV,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  const navItems: { id: NavigationSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Início', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'about', label: 'Sobre', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'Projetos', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'skills', label: 'Habilidades', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Contato', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <aside
      id="floating-capsule-dock"
      aria-label="Navegação em cápsula flutuante"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 max-w-[96vw] sm:max-w-fit pointer-events-auto select-none"
    >
      <nav
        className={`flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          isDark
            ? 'bg-[#120d1c]/90 border-[#3d2954]/90 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.18)] text-[#f4ebf8]'
            : 'bg-[#ffffff]/90 border-[#d8b4fe]/90 shadow-[0_20px_45px_rgba(126,34,206,0.18),0_0_25px_rgba(168,85,247,0.12)] text-[#281838]'
        }`}
      >
        {/* Navigation Items (Início | Sobre | Projetos | Habilidades | Contato) */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`dock-btn-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-xs font-sans transition-all duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap group ${
                  isActive
                    ? isDark
                      ? 'bg-gradient-to-r from-[#8b5cf6] to-[#c084fc] text-[#0f0e13] font-bold shadow-[0_0_20px_rgba(192,132,252,0.5)] scale-[1.03]'
                      : 'bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-[#ffffff] font-bold shadow-[0_0_18px_rgba(147,51,234,0.35)] scale-[1.03]'
                    : isDark
                      ? 'text-[#c4b5d4] hover:text-[#ffffff] hover:bg-[#281c39]/80'
                      : 'text-[#6b5182] hover:text-[#281838] hover:bg-[#f3e8ff]/80'
                }`}
                title={`Navegar para ${item.label}`}
              >
                <span className={`${isActive ? 'opacity-100 scale-110' : 'opacity-70 group-hover:opacity-100'} transition-transform`}>
                  {item.icon}
                </span>
                <span className="font-medium tracking-wide">{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                )}
              </button>
            );
          })}
        </div>

        {/* Optional CV Quick Shortcut on the dock */}
        {onOpenCV && (
          <>
            <div className="w-[1px] h-5 bg-current/15 mx-1 shrink-0 hidden md:block" />
            <button
              id="dock-cv-shortcut"
              onClick={onOpenCV}
              className={`hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                isDark
                  ? 'bg-[#291740] border border-[#a855f7]/40 text-[#e9d5ff] hover:border-[#c084fc]'
                  : 'bg-[#ede2f4] border border-[#dec7ec] text-[#6b21a8] hover:border-[#9333ea]'
              }`}
              title="Abrir Currículo de Lediane França"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </button>
          </>
        )}
      </nav>
    </aside>
  );
};
