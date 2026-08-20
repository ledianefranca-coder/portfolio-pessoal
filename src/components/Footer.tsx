import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavigationSection, ThemeMode } from '../types';
import { ArrowUp, Sparkles, Sprout } from 'lucide-react';

interface FooterProps {
  theme: ThemeMode;
  onNavigate: (section: NavigationSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onNavigate }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="pt-16 pb-28 sm:pb-24 border-t border-current/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Banner */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-current/10">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center font-display font-black text-sm tracking-wider border shrink-0 ${
                isDark
                  ? 'bg-gradient-to-br from-[#241a33] to-[#171022] border-[#4a3466] text-[#e9d5ff]'
                  : 'bg-gradient-to-br from-[#ffffff] to-[#f4e8fc] border-[#d8b4fe] text-[#6b21a8]'
              }`}
            >
              LF.
            </div>
            <div>
              <span className="font-display font-bold text-base block leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-editorial italic text-[#7e22ce] dark:text-[#d8b4fe]">
                Tecnologia • Criatividade • Organização • Natureza
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#7e22ce] dark:hover:text-[#d8b4fe] transition-colors cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#7e22ce] dark:hover:text-[#d8b4fe] transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#7e22ce] dark:hover:text-[#d8b4fe] transition-colors cursor-pointer"
            >
              Projetos
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-[#7e22ce] dark:hover:text-[#d8b4fe] transition-colors cursor-pointer"
            >
              Habilidades
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#7e22ce] dark:hover:text-[#d8b4fe] transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-current/15 hover:border-current transition-all hover:scale-110 active:scale-95 cursor-pointer text-xs flex items-center gap-2"
            title="Voltar ao Topo"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="hidden sm:inline font-mono">Topo</span>
          </button>
        </div>

        {/* Bottom Signature */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono opacity-60">
          <p>© {new Date().getFullYear()} Lediane França • Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>Criado com rigor estético &amp; tecnologia contemporânea.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
