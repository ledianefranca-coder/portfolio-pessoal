import React from 'react';
import { ThemeMode } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface AboutSectionProps { theme: ThemeMode; }

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-current/10 relative overflow-hidden">
      <div className="botanical-glow absolute inset-0 pointer-events-none" aria-hidden="true" />

      <svg
        className="botanical-watermark absolute z-[15] -right-24 sm:right-0 top-1/2 -translate-y-1/2 w-[430px] sm:w-[560px] lg:w-[680px] h-auto pointer-events-none text-[#9333ea] dark:text-[#d8b4fe]"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <g className="botanical-flower" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M316 565C307 481 313 410 306 330" />
          <path d="M310 465C264 444 236 411 224 371C265 376 296 402 310 440" />
          <path d="M311 410C352 390 376 359 384 324C348 331 321 354 309 384" />
          <ellipse cx="306" cy="257" rx="45" ry="98" />
          <ellipse cx="306" cy="257" rx="45" ry="98" transform="rotate(60 306 257)" />
          <ellipse cx="306" cy="257" rx="45" ry="98" transform="rotate(120 306 257)" />
          <circle cx="306" cy="257" r="29" />
          <path d="M288 253C299 240 317 239 326 253C318 268 299 271 288 253Z" />
        </g>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="about-content-panel rounded-[2rem] p-6 sm:p-9 lg:p-11 border border-current/10 backdrop-blur-[2px]">
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
