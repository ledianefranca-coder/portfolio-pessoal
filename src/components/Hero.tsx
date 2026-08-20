import React, { useState, useEffect, useRef } from 'react';
import { NavigationSection, ThemeMode } from '../types';
import { PERSONAL_INFO, PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';
import { 
  ArrowUpRight, 
  Sparkles, 
  Sprout, 
  Globe, 
  FolderGit2, 
  Layers, 
  FileText,
  ChevronDown
} from 'lucide-react';

interface HeroProps {
  onNavigate: (section: NavigationSection) => void;
  theme: ThemeMode;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, theme, onOpenCV }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax / subtle mouse movement effect on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10px to +10px
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-16 overflow-hidden border-b border-current/10"
    >
      {/* Background Soft Organic Glows & Floral Contours */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none opacity-25 dark:opacity-20 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, #ec4899 45%, rgba(147,51,234,0) 70%)',
          transform: `translate(calc(-50% + ${mousePos.x * -0.5}px), calc(-50% + ${mousePos.y * -0.5}px))`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Top Status Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 text-xs font-mono tracking-wider uppercase transition-all duration-300 backdrop-blur-md bg-current/5 border-current/10">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span className="text-[#7e22ce] dark:text-[#d8b4fe] font-bold">
            {PERSONAL_INFO.title}
          </span>
          <span className="opacity-40">•</span>
          <span className="opacity-80">2025 / 2026</span>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Headline & Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-current">
              Lediane <br />
              <span className="font-editorial italic font-normal text-[#8b5cf6] dark:text-[#c084fc]">
                França
              </span>
            </h1>

            {/* Core statement requested: Criatividade, Tecnologia e Transformação */}
            <p className="text-lg sm:text-xl md:text-2xl text-current/85 font-sans font-light leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroTagline}
            </p>

            {/* Four Integrated Core Pillars (Natureza, Tecnologia com IA, Conteúdo, Organização) */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="p-3 rounded-2xl border border-current/10 bg-current/5 transition-all hover:bg-current/10">
                <span className="text-xs font-mono text-[#7e22ce] dark:text-[#d8b4fe] block font-bold">01. TECH</span>
                <span className="text-xs font-medium block mt-0.5">Tecnologia &amp; IA</span>
              </div>
              <div className="p-3 rounded-2xl border border-current/10 bg-current/5 transition-all hover:bg-current/10">
                <span className="text-xs font-mono text-[#ec4899] block font-bold">02. CRIAÇÃO</span>
                <span className="text-xs font-medium block mt-0.5">Conteúdo Digital</span>
              </div>
              <div className="p-3 rounded-2xl border border-current/10 bg-current/5 transition-all hover:bg-current/10">
                <span className="text-xs font-mono text-[#a855f7] block font-bold">03. MÉTODO</span>
                <span className="text-xs font-medium block mt-0.5">Organização</span>
              </div>
              <div className="p-3 rounded-2xl border border-current/10 bg-current/5 transition-all hover:bg-current/10">
                <span className="text-xs font-mono text-[#10b981] block font-bold">04. BOTÂNICA</span>
                <span className="text-xs font-medium block mt-0.5">Jardinagem &amp; Vida</span>
              </div>
            </div>

            {/* Action Buttons & Direct Links */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#a855f7] text-[#ffffff] hover:shadow-[0_10px_25px_rgba(147,51,234,0.4)]"
              >
                <span>Explorar Projetos</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                id="hero-about-btn"
                onClick={() => onNavigate('about')}
                className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold border border-current/20 hover:border-current transition-all duration-200 flex items-center gap-2 cursor-pointer bg-current/5 hover:bg-current/10"
              >
                <span>Conhecer Trajetória</span>
                <span className="font-mono text-[11px] opacity-60">[ Sobre ]</span>
              </button>

              {onOpenCV && (
                <button
                  id="hero-cv-btn"
                  onClick={onOpenCV}
                  className="px-4 py-3.5 rounded-full text-xs font-medium opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Síntese Curricular</span>
                </button>
              )}
            </div>

            {/* Quick Social Badges */}
            <div className="pt-2 flex items-center gap-2 text-xs opacity-75">
              <span className="font-mono uppercase text-[10px] tracking-wider font-bold">Canais:</span>
              <a 
                href="https://www.instagram.com/lediane.franca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#ec4899] transition-colors underline"
              >
                Instagram
              </a>
              <span>•</span>
              <a 
                href="https://www.tiktok.com/@lediane.franca" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#c084fc] transition-colors underline"
              >
                TikTok
              </a>
              <span>•</span>
              <a 
                href="https://github.com/lediane" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#a855f7] transition-colors underline"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="mailto:lediane.franca@gmail.com" 
                className="hover:text-[#7e22ce] transition-colors underline"
              >
                E-mail
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Composition with Imagery & Projects */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative transition-transform duration-500 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${mousePos.y * -0.4}deg)`
              }}
            >
              {/* Primary Visual Showcase Card */}
              <div 
                className={`p-6 sm:p-7 rounded-3xl border shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-500 group ${
                  isDark
                    ? 'bg-gradient-to-br from-[#201530]/90 to-[#140c20]/95 border-[#452f5e]'
                    : 'bg-gradient-to-br from-[#ffffff]/95 to-[#f7f0fc]/95 border-[#dfcaee]'
                }`}
              >
                {/* Live App Badge */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-current/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping opacity-80" />
                    <span className="text-xs font-mono font-bold tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] uppercase">
                      Destaque em Produção
                    </span>
                  </div>
                  <span className="text-[11px] font-mono opacity-60">Vercel Deploy</span>
                </div>

                {/* Big Visual Imagery Collage Frame */}
                <div className="relative rounded-2xl overflow-hidden mb-4 border border-current/10 group-hover:shadow-lg transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1507842229451-79b1be886a27?auto=format&fit=crop&w=900&q=80"
                    alt="Palavra Diária - Aplicação Web"
                    className="w-full h-52 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/20 backdrop-blur-xs font-bold mb-1 inline-block">
                        Palavra Diária
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg leading-tight">
                        Plataforma Web de Reflexão &amp; Inspiração
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Direct Action Inside Preview */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="text-xs text-current/80">
                    <span className="font-bold">Deploy ativo:</span> palavra-di-ria.vercel.app
                  </div>
                  <a
                    href="https://palavra-di-ria.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 bg-gradient-to-r from-[#fde047] to-[#eab308] text-[#422006] hover:scale-105 transition-transform"
                    title="Acessar projeto ao vivo"
                  >
                    <span>Visitar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Secondary Mini Badges (Florescer Diário & Sementes) */}
                <div className="mt-4 pt-4 border-t border-current/10 grid grid-cols-2 gap-2 text-xs">
                  <a
                    href="https://florescer-di-rio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-current/10 hover:border-[#ec4899] bg-current/5 transition-all flex items-center justify-between group/link"
                  >
                    <span className="truncate font-medium">Florescer Diário</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 shrink-0" />
                  </a>
                  <a
                    href="https://sementes-de-plenitude.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl border border-current/10 hover:border-[#a855f7] bg-current/5 transition-all flex items-center justify-between group/link"
                  >
                    <span className="truncate font-medium">Sementes Plenitude</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/link:opacity-100 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Floating Botanical / Organic Accent Badge */}
              <div 
                className={`absolute -bottom-5 -left-5 p-3.5 rounded-2xl border shadow-xl backdrop-blur-md flex items-center gap-3 transition-transform duration-500 hover:scale-105 hidden sm:flex ${
                  isDark 
                    ? 'bg-[#1e132c]/95 border-[#6b21a8]/50 text-[#f3e8ff]' 
                    : 'bg-[#ffffff]/95 border-[#d8b4fe] text-[#281838]'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-[#10b981]/20 flex items-center justify-center text-[#10b981]">
                  <Sprout className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase block text-[#7e22ce] dark:text-[#d8b4fe] font-bold">
                    Conceito &amp; Essência
                  </span>
                  <span className="text-xs font-semibold">Florescer &amp; Evolução Contínua</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-4 w-full pt-8 flex items-center justify-between text-xs font-mono opacity-60">
        <button
          onClick={() => onNavigate('about')}
          className="flex items-center gap-2 hover:opacity-100 transition-opacity cursor-pointer group"
        >
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-1 transition-transform" />
          <span>ROLANDO PARA DESCOBRIR A TRAJETÓRIA</span>
        </button>
        <span className="hidden sm:inline">[ CAPÍTULO 01 / 05 ]</span>
      </div>
    </section>
  );
};
