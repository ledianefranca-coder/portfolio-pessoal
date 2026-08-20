import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { TECHNICAL_SKILLS, INTERPERSONAL_SKILLS } from '../data/portfolioData';
import { 
  Cpu, 
  Smartphone, 
  Clapperboard, 
  LayoutGrid, 
  Compass, 
  FolderKanban, 
  Globe, 
  Sprout,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Zap,
  RefreshCw,
  Users,
  ShieldCheck,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface SkillsSectionProps {
  theme: ThemeMode;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ theme }) => {
  const [activeTab, setActiveTab] = useState<'technical' | 'interpersonal'>('technical');

  const technicalIcons: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-[#8b5cf6]" />,
    Smartphone: <Smartphone className="w-5 h-5 text-[#ec4899]" />,
    Clapperboard: <Clapperboard className="w-5 h-5 text-[#f59e0b]" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#a855f7]" />,
    Compass: <Compass className="w-5 h-5 text-[#06b6d4]" />,
    FolderKanban: <FolderKanban className="w-5 h-5 text-[#3b82f6]" />,
    Globe: <Globe className="w-5 h-5 text-[#10b981]" />,
    Sprout: <Sprout className="w-5 h-5 text-[#22c55e]" />
  };

  const interpersonalIcons: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-[#ec4899]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#10b981]" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-[#8b5cf6]" />,
    Zap: <Zap className="w-5 h-5 text-[#f59e0b]" />,
    RefreshCw: <RefreshCw className="w-5 h-5 text-[#06b6d4]" />,
    Users: <Users className="w-5 h-5 text-[#a855f7]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#3b82f6]" />,
    BookOpen: <BookOpen className="w-5 h-5 text-[#f43f5e]" />
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="skills"
      className="py-24 border-b border-current/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-current/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] mb-2 font-bold">
              <span>04</span>
              <span>•</span>
              <span>COMPETÊNCIAS &amp; CONHECIMENTOS</span>
            </div>
            <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl text-current">
              Habilidades &amp; Saberes
            </h2>
            <p className="text-xs sm:text-sm font-sans text-current/75 mt-2 max-w-xl">
              Organização estruturada em duas dimensões essenciais: conhecimentos técnicos instrumentais e competências comportamentais integradas.
            </p>
          </div>

          {/* Toggle between Technical and Interpersonal */}
          <div
            className={`inline-flex p-1.5 rounded-2xl border text-xs font-semibold self-start md:self-auto ${
              isDark ? 'bg-[#1b1227]/90 border-[#3d2957]' : 'bg-[#ede2f4]/90 border-[#dec7ec]'
            }`}
          >
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-4 sm:px-5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === 'technical'
                  ? isDark
                    ? 'bg-gradient-to-r from-[#7e22ce] to-[#a855f7] text-white shadow-md'
                    : 'bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white shadow-md'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              Conhecimentos Técnicos (8)
            </button>

            <button
              onClick={() => setActiveTab('interpersonal')}
              className={`px-4 sm:px-5 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                activeTab === 'interpersonal'
                  ? isDark
                    ? 'bg-gradient-to-r from-[#7e22ce] to-[#a855f7] text-white shadow-md'
                    : 'bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white shadow-md'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              Competências Interpessoais (8)
            </button>
          </div>
        </div>

        {/* Tab 1: Conhecimentos Técnicos */}
        {activeTab === 'technical' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TECHNICAL_SKILLS.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#1b1227]/75 border-[#3b2654] hover:border-[#c084fc]/60'
                      : 'bg-[#ffffff]/85 border-[#dec8ed] hover:border-[#7e22ce]/60'
                  }`}
                >
                  <div>
                    {/* Card Top */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {technicalIcons[skill.iconName] || <Cpu className="w-5 h-5 text-[#8b5cf6]" />}
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-current/5 border border-current/10">
                        {skill.proficiency}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-current mb-1 group-hover:text-[#7e22ce] dark:group-hover:text-[#d8b4fe] transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-current/80 leading-relaxed font-sans mt-2">
                      {skill.details}
                    </p>
                  </div>

                  {/* Tools Strip */}
                  <div className="mt-5 pt-4 border-t border-current/10">
                    <span className="text-[10px] font-mono uppercase opacity-50 block mb-1.5 font-bold">
                      Ferramentas &amp; Práticas:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono border border-current/15 bg-current/5 opacity-80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Competências Interpessoais (Soft Skills) */}
        {activeTab === 'interpersonal' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {INTERPERSONAL_SKILLS.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#1b1227]/75 border-[#3b2654] hover:border-[#c084fc]/60'
                      : 'bg-[#ffffff]/85 border-[#dec8ed] hover:border-[#7e22ce]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-current/5 border border-current/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {interpersonalIcons[skill.iconName] || <Sparkles className="w-5 h-5 text-[#ec4899]" />}
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#ec4899] px-2.5 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/30">
                        {skill.highlightTag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-current mb-1 group-hover:text-[#ec4899] transition-colors">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-current/85 leading-relaxed font-sans mt-2">
                      {skill.definition}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-current/10 bg-current/5 p-3 rounded-2xl">
                    <span className="text-[10px] font-mono uppercase text-[#7e22ce] dark:text-[#d8b4fe] block font-bold mb-1">
                      Aplicação Prática:
                    </span>
                    <p className="text-[11px] text-current/80 italic font-sans leading-snug">
                      “{skill.inPractice}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
