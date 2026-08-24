import React from 'react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { Mail, Instagram, Github, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps { theme: ThemeMode; }

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const essentialLinks = SOCIAL_LINKS.filter((link) => ['github', 'instagram'].includes(link.id));

  const iconFor = (id: string) => id === 'github' ? <Github className="w-5 h-5" /> : <Instagram className="w-5 h-5" />;

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] font-bold">04 • Contato</span>
        <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl mt-3">Vamos criar algo juntos?</h2>
        <p className="text-sm sm:text-base text-current/65 mt-5 max-w-xl mx-auto">Para projetos, oportunidades ou colaborações em tecnologia e criação digital, entre em contato.</p>

        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a href={`mailto:${PERSONAL_INFO.email}`} className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold transition-all ${isDark ? 'border-[#4a3366] hover:border-[#c084fc]' : 'border-[#dec7ec] hover:border-[#7e22ce]'}`}>
            <Mail className="w-5 h-5" /><span>E-mail</span><ArrowUpRight className="w-4 h-4 opacity-60" />
          </a>
          {essentialLinks.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full border text-sm font-semibold transition-all ${isDark ? 'border-[#4a3366] hover:border-[#c084fc]' : 'border-[#dec7ec] hover:border-[#7e22ce]'}`}>
              {iconFor(link.id)}<span>{link.name}</span><ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
          ))}
        </div>

        <p className="mt-14 text-xs text-current/40">Brasília • DF</p>
      </div>
    </section>
  );
};
