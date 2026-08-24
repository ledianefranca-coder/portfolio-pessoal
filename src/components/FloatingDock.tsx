import React, { useState, useEffect } from 'react';
import { NavigationSection, ThemeMode } from '../types';
import { Sparkles, User, FolderGit2, Mail } from 'lucide-react';

interface FloatingDockProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  theme: ThemeMode;
  onOpenCV?: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({ activeSection, onNavigate, theme }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';
  const navItems: { id: NavigationSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Início', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'about', label: 'Sobre', icon: <User className="w-3.5 h-3.5" /> },
    { id: 'projects', label: 'Projetos', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'contact', label: 'Contato', icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <aside
      id="floating-capsule-dock"
      aria-label="Navegação principal"
      className={`fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] select-none transition-all duration-500 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-95'}`}
    >
      <nav className={`flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-xl transition-all duration-300 ${isDark ? 'bg-[#120d1c]/90 border-[#3d2954]/80 text-[#f4ebf8] shadow-xl' : 'bg-white/90 border-[#e5d5ef] text-[#281838] shadow-xl'}`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${isActive ? (isDark ? 'bg-[#c084fc] text-[#100b19]' : 'bg-[#6b21a8] text-white') : (isDark ? 'text-[#c4b5d4] hover:text-white' : 'text-[#6b5182] hover:text-[#281838]')}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
