import React, { useEffect } from 'react';
import { Project, ThemeMode } from '../types';
import { 
  X, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Calendar, 
  Tag, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  theme
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isDark = theme === 'dark';

  return (
    <div
      id="project-case-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/75 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl transition-all duration-300 p-6 sm:p-10 my-auto ${
          isDark
            ? 'bg-[#150f21] border-[#3e2759] text-[#f4ebf8] shadow-[0_25px_60px_rgba(0,0,0,0.8)]'
            : 'bg-[#ffffff] border-[#d8b4fe] text-[#281838] shadow-[0_25px_60px_rgba(126,34,206,0.2)]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className={`absolute top-5 right-5 sm:top-7 sm:right-7 p-2 rounded-full border transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 ${
            isDark
              ? 'bg-[#251838] border-[#4b336a] text-[#e9d5ff] hover:text-white'
              : 'bg-[#ede2f4] border-[#dec7ec] text-[#6b21a8] hover:text-black'
          }`}
          aria-label="Fechar estudo de caso"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-8 pb-6 border-b border-current/10 pr-12">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono mb-2">
            <span className="px-3 py-1 rounded-full bg-[#7e22ce]/20 text-[#7e22ce] dark:text-[#d8b4fe] font-bold border border-[#7e22ce]/30">
              PROJETO #{project.number}
            </span>
            <span className="opacity-60">•</span>
            <span className="font-semibold uppercase tracking-wider opacity-80">
              {project.category}
            </span>
            <span className="opacity-60">•</span>
            <span className="opacity-60">{project.year}</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-current leading-tight">
            {project.title}
          </h2>
          <p className="font-editorial italic text-base sm:text-xl text-[#7e22ce] dark:text-[#d8b4fe] mt-1">
            {project.subtitle}
          </p>

          {project.featuredQuote && (
            <p className="mt-3 text-sm text-current/80 font-sans italic border-l-2 border-[#7e22ce] dark:border-[#d8b4fe] pl-3 py-0.5">
              {project.featuredQuote}
            </p>
          )}
        </div>

        {/* Project Image Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 border border-current/10 max-h-72 sm:max-h-96">
          <img
            src={project.imageUrl}
            alt={project.title}
            decoding="async"
            className="w-full h-auto max-h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
            <span className="text-xs font-mono text-white/90 uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
              {project.category} • Caso de Estudo Autoral
            </span>
          </div>
        </div>

        {/* Case Study Structured 5-Step Breakdown (Contexto → Desafio → Processo → Solução → Resultado) */}
        <div className="space-y-8 font-sans">
          
          {/* Step 1: Contexto */}
          <div className="p-5 sm:p-6 rounded-2xl border border-current/10 bg-current/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] font-bold">
              <span>01</span>
              <span>•</span>
              <span>CONTEXTO</span>
            </div>
            <h3 className="font-display font-bold text-lg text-current">Origem &amp; Cenário</h3>
            <p className="text-sm sm:text-base text-current/85 leading-relaxed">
              {project.context}
            </p>
          </div>

          {/* Step 2: Desafio */}
          <div className="p-5 sm:p-6 rounded-2xl border border-current/10 bg-current/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ec4899] font-bold">
              <span>02</span>
              <span>•</span>
              <span>DESAFIO</span>
            </div>
            <h3 className="font-display font-bold text-lg text-current">Complexidade &amp; Objetivos</h3>
            <p className="text-sm sm:text-base text-current/85 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Step 3: Processo */}
          <div className="p-5 sm:p-6 rounded-2xl border border-current/10 bg-current/5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a855f7] font-bold">
              <span>03</span>
              <span>•</span>
              <span>PROCESSO &amp; METODOLOGIA</span>
            </div>
            <h3 className="font-display font-bold text-lg text-current">Etapas de Construção</h3>
            <ul className="space-y-2 text-sm sm:text-base text-current/85">
              {project.process.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-[#7e22ce] dark:text-[#d8b4fe] font-bold mt-1 shrink-0">
                    [{idx + 1}]
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 4: Solução */}
          <div className="p-5 sm:p-6 rounded-2xl border border-current/10 bg-current/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#10b981] font-bold">
              <span>04</span>
              <span>•</span>
              <span>SOLUÇÃO</span>
            </div>
            <h3 className="font-display font-bold text-lg text-current">Proposta Implementada</h3>
            <p className="text-sm sm:text-base text-current/85 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Step 5: Resultado */}
          <div className="p-5 sm:p-6 rounded-2xl border border-current/10 bg-current/5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#f59e0b] font-bold">
              <span>05</span>
              <span>•</span>
              <span>RESULTADO &amp; IMPACTO</span>
            </div>
            <h3 className="font-display font-bold text-lg text-current">Entrega &amp; Valor Gerado</h3>
            <p className="text-sm sm:text-base text-current/85 leading-relaxed">
              {project.result}
            </p>
          </div>

          {/* Deliverables Checklist */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="p-5 sm:p-6 rounded-2xl border border-current/10 space-y-3">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-current flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Entregáveis &amp; Recursos Concretos</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-current/80">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-[#7e22ce] dark:text-[#d8b4fe]">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono border border-current/15 bg-current/5 opacity-80"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Links Bar */}
          <div className="pt-6 border-t border-current/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.primaryLink && (
                <a
                  href={project.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl text-xs font-bold font-display uppercase tracking-wider transition-all duration-200 hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 bg-gradient-to-r from-[#7e22ce] to-[#a855f7] text-white"
                >
                  <span>Acessar Projeto Ao Vivo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl text-xs font-semibold border border-current/20 hover:border-current transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Repositório</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-mono opacity-70 hover:opacity-100 transition-opacity"
            >
              [ Fechar Janela ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
