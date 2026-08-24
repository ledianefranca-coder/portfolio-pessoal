import React, { useState } from 'react';
import { Project, ThemeMode } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps { theme: ThemeMode; }

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ theme }) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const isDark = theme === 'dark';

  const primaryProjects = PROJECTS.filter((project) =>
    ['Tecnologia', 'Design e Criação Digital', 'Conteúdo para Redes Sociais', 'Projetos Acadêmicos & Profissionais'].includes(project.category)
  ).slice(0, 6);

  return (
    <section id="projects" className="py-24 sm:py-32 border-b border-current/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] font-bold">03 • Projetos</span>
          <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl mt-3">Trabalhos selecionados.</h2>
          <p className="text-sm sm:text-base text-current/65 mt-4">Uma seleção de projetos em tecnologia e criação digital. Clique para conhecer os detalhes de cada trabalho.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-10">
          {primaryProjects.map((project) => (
            <article key={project.id} onClick={() => setActiveProject(project)} className="group cursor-pointer">
              <div className={`overflow-hidden rounded-[1.75rem] border transition-all duration-500 ${isDark ? 'bg-[#1b1227] border-[#3b2654] hover:border-[#c084fc]/60' : 'bg-white border-[#dec7ec] hover:border-[#7e22ce]/50'}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-current/5">
                  <img src={project.imageUrl} alt={project.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                </div>
                <div className="p-5 sm:p-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-current/50">{project.category}</span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mt-1">{project.title}</h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-current/50 group-hover:text-[#7e22ce] dark:group-hover:text-[#d8b4fe] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} isOpen={!!activeProject} onClose={() => setActiveProject(null)} theme={theme} />
    </section>
  );
};
