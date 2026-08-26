import React from 'react';
import { ThemeMode } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps { theme: ThemeMode; }

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-current/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] font-bold">02 • Sobre</span>
            <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl mt-3 mb-8">Criatividade que ganha forma.</h2>
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-current/80 max-w-3xl">
              <p>Sou <strong className="text-current">Lediane França</strong>. Transformo aprendizado e ideias em projetos digitais com criatividade, clareza e atenção aos detalhes.</p>
              <p>Meu foco está em <strong className="text-current">tecnologia e criação digital</strong>. Como diferencial, minha experiência com jardinagem e paisagismo amplia meu olhar para composição, cuidado e transformação — uma conexão sutil com a ideia de florescer.</p>
            </div>
            <a href="#projects" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#7e22ce] dark:text-[#d8b4fe] hover:gap-3 transition-all">Conheça meus projetos <ArrowUpRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};
