import React, { useState } from 'react';
import { Project, ProjectCategory, ThemeMode } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Sparkles, Filter, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  theme: ThemeMode;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: string[] = [
    'Todos',
    'Tecnologia',
    'Design e Criação Digital',
    'Conteúdo para Redes Sociais',
    'Organização',
    'Jardinagem e Paisagismo',
    'Projetos Acadêmicos & Profissionais'
  ];

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const isDark = theme === 'dark';

  return (
    <section
      id="projects"
      className="py-24 border-b border-current/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-current/10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] mb-2 font-bold">
              <span>03</span>
              <span>•</span>
              <span>GALERIA DE CRIAÇÕES &amp; PROJETOS</span>
            </div>
            <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl text-current">
              Projetos &amp; Obras
            </h2>
            <p className="text-xs sm:text-sm font-sans text-current/75 mt-2 max-w-xl">
              Composição editorial de aplicações web com deploy ativo, metodologias autorais, produções audiovisuais e projetos de paisagismo.
            </p>
          </div>

          <div className="text-xs font-mono opacity-60">
            TOTAL: {filteredProjects.length} PROJETOS REGISTRADOS
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mb-12 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <span className="text-xs font-mono uppercase opacity-50 flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtro:</span>
          </span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 shrink-0 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-gradient-to-r from-[#7e22ce] to-[#a855f7] text-white shadow-md font-bold'
                      : 'bg-gradient-to-r from-[#6b21a8] to-[#9333ea] text-white shadow-md font-bold'
                    : isDark
                      ? 'bg-[#1f152d]/70 text-[#c8b9d8] hover:bg-[#2e1f42] hover:text-white border border-[#3b2754]'
                      : 'bg-[#ede2f4]/70 text-[#543b66] hover:bg-[#f5ecfa] hover:text-[#281838] border border-[#dbc4eb]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Collage / Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`${project.colSpanClass} group cursor-pointer`}
                onClick={() => setActiveProject(project)}
              >
                <div
                  className={`rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl relative ${
                    isDark
                      ? 'bg-[#1b1227]/85 border-[#3b2654] hover:border-[#c084fc]/70'
                      : 'bg-[#ffffff]/90 border-[#dec7ec] hover:border-[#7e22ce]/70'
                  }`}
                >
                  {/* Image Container with Editorial Mask & Zoom */}
                  <div className={`relative overflow-hidden ${project.aspectClass} w-full bg-black/10`}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-0.5"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95 flex flex-col justify-between p-5 sm:p-7 text-white" />

                    {/* Top Metadata Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-white/80 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-md">
                        #{project.number}
                      </span>
                    </div>

                    {/* Bottom Floating Info Over Image */}
                    <div className="absolute bottom-5 left-5 right-5 z-10 text-white transition-transform duration-300 group-hover:-translate-y-1">
                      <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl leading-tight">
                        {project.title}
                      </h3>
                      <p className="font-editorial italic text-sm sm:text-base text-purple-200 mt-1 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* Reveal on Hover: Open Case Study Indicator */}
                      <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-1.5 text-yellow-300">
                          <span>Ver Estudo de Caso Completo</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        {project.primaryLink && (
                          <span className="font-mono text-[11px] opacity-75 hidden sm:inline">
                            Deploy Ativo ↗
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Description Snippet Below Image */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <p className="text-xs sm:text-sm text-current/80 font-sans leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-current/10 text-xs">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-current/15 bg-current/5 opacity-75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="font-mono text-[11px] font-bold text-[#7e22ce] dark:text-[#d8b4fe] group-hover:underline">
                        Abrir [ + ]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Structured Case Study Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        theme={theme}
      />
    </section>
  );
};
