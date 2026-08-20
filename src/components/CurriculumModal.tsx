import React from 'react';
import { PERSONAL_INFO, TECHNICAL_SKILLS, INTERPERSONAL_SKILLS, PROJECTS } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { X, Printer, Download, CheckCircle2, Mail, MapPin, Globe } from 'lucide-react';

interface CurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const CurriculumModal: React.FC<CurriculumModalProps> = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="curriculum-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="curriculum-modal-content"
        className={`w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 shadow-2xl relative animate-in zoom-in-95 duration-200 ${
          isDark
            ? 'bg-[#181124] border-[#3f2e57] text-[#f4ebf8]'
            : 'bg-[#faf4fc] border-[#dec7ec] text-[#281838]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls */}
        <div className="absolute top-5 right-5 flex items-center gap-2 print:hidden">
          <button
            id="curriculum-print-btn"
            onClick={handlePrint}
            className="p-2 rounded-full border border-current/20 hover:border-current transition-all text-xs flex items-center gap-1.5 px-3 cursor-pointer"
            title="Imprimir ou Salvar em PDF"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>
          <button
            id="curriculum-close-btn"
            onClick={onClose}
            className="p-2 rounded-full border border-current/20 hover:border-current transition-all cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Curriculum Header */}
        <div className="border-b border-current/15 pb-8 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7e22ce] dark:text-[#d8b4fe] block mb-1 font-bold">
            SÍNTESE CURRICULAR &amp; QUALIFICAÇÕES
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-base font-editorial italic text-current/80 mt-1">
            {PERSONAL_INFO.role}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono opacity-80 mt-4">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#7e22ce] dark:text-[#d8b4fe]" />
              {PERSONAL_INFO.email}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#7e22ce] dark:text-[#d8b4fe]" />
              {PERSONAL_INFO.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#7e22ce] dark:text-[#d8b4fe]" />
              vercel.com/lediane
            </span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] mb-3 font-bold">
            01. APRESENTAÇÃO &amp; VISÃO INTEGRADA
          </h2>
          <p className="text-sm leading-relaxed text-current/90 font-sans">
            {PERSONAL_INFO.bioEditorial}
          </p>
        </div>

        {/* Technical Competencies Matrix (8 Items) */}
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] mb-3 font-bold">
            02. CONHECIMENTOS TÉCNICOS &amp; INSTRUMENTAIS (8)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {TECHNICAL_SKILLS.map((skill, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border ${
                  isDark ? 'bg-[#221633] border-[#3f2e57]' : 'bg-[#ede2f4] border-[#dec7ec]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-semibold text-xs uppercase tracking-wider">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono opacity-60">[{skill.proficiency}]</span>
                </div>
                <p className="text-xs text-current/80 font-sans mb-2">
                  {skill.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skill.tools.map((t) => (
                    <span key={t} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-current/5 border border-current/10 opacity-75">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Interpersonal Attributes (8 Items) */}
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] mb-3 font-bold">
            03. COMPETÊNCIAS INTERPESSOAIS (8)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {INTERPERSONAL_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="p-3 rounded-xl border border-current/10 bg-current/5 text-center"
              >
                <span className="font-display font-bold text-xs block text-current">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono text-[#7e22ce] dark:text-[#d8b4fe] block mt-0.5 font-medium">
                  {skill.highlightTag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects and Demonstrations */}
        <div className="mb-8">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] mb-3 font-bold">
            04. PROJETOS EM DESTAQUE COM DEPLOY NA VERCEL
          </h2>
          <div className="space-y-3">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDark ? 'bg-[#221633] border-[#3f2e57]' : 'bg-[#ede2f4] border-[#dec7ec]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm">{proj.title}</span>
                    <span className="text-[10px] font-mono opacity-60">[{proj.category}]</span>
                  </div>
                  <p className="text-xs text-current/75 mt-0.5">{proj.description}</p>
                </div>
                {proj.primaryLink && proj.primaryLink.startsWith('http') && (
                  <span className="text-[11px] font-mono text-[#7e22ce] dark:text-[#d8b4fe] shrink-0 font-semibold">
                    {proj.primaryLink}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-6 border-t border-current/15 flex items-center justify-between text-xs font-mono opacity-50">
          <span>Lediane França • Portfólio Profissional</span>
          <span>Atualizado em 2025 / 2026</span>
        </div>
      </div>
    </div>
  );
};
