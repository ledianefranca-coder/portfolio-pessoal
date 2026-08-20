import React from 'react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sprout, Sun, Leaf, Flower2, Sparkles, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface AboutSectionProps { theme: ThemeMode; }

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const growthIcons: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="w-5 h-5 text-[#10b981]" />,
    Sun: <Sun className="w-5 h-5 text-[#f59e0b]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#8b5cf6]" />,
    Flower2: <Flower2 className="w-5 h-5 text-[#ec4899]" />
  };

  return (
    <section id="about" className="py-24 border-b border-current/10 relative overflow-hidden">
      <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle, #ec4899 0%, #a855f7 60%, transparent 80%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-current/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] mb-2 font-bold"><span>02</span><span>•</span><span>SOBRE MIM &amp; TRAJETÓRIA</span></div>
            <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl text-current">O Florescer da Identidade</h2>
          </div>
          <p className="text-xs sm:text-sm font-mono opacity-60 uppercase max-w-xs md:text-right">Tecnologia, criatividade, organização e natureza conectadas por propósito.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg leading-relaxed font-sans text-current/90">
            <p className="text-xl sm:text-2xl font-editorial italic font-normal text-[#8b5cf6] dark:text-[#c084fc] leading-relaxed">“Acredito que diferentes conhecimentos se integram e enriquecem uma mesma identidade profissional.”</p>
            <p>Sou <strong>Lediane França</strong>, profissional organizada, dedicada e curiosa. Minha trajetória reúne disciplina, responsabilidade, sensibilidade humana e vontade constante de transformar aprendizado em soluções práticas.</p>
            <p>Desenvolvo conhecimentos e projetos em <strong>Tecnologia e Inteligência Artificial</strong>, <strong>Criação de Conteúdo Digital</strong>, <strong>Organização de Ambientes</strong> e <strong>Jardinagem</strong>, conectando áreas diferentes por meio de criatividade, método e propósito.</p>
            <p>Em cada projeto, busco equilibrar <strong>clareza técnica</strong>, <strong>estética acolhedora</strong> e <strong>qualidade na entrega</strong>. Para mim, aprender continuamente é uma forma de evoluir, criar e gerar valor.</p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                [<Sparkles className="w-4 h-4" />, 'Criatividade com Propósito', 'Transformar ideias em experiências visuais claras, acolhedoras e funcionais.', 'text-[#7e22ce] dark:text-[#d8b4fe]'],
                [<ShieldCheck className="w-4 h-4" />, 'Organização & Método', 'Planejamento, estruturação de rotinas e atenção aos detalhes.', 'text-[#ec4899]'],
                [<Sprout className="w-4 h-4" />, 'Natureza & Jardinagem', 'Conhecimento prático, cuidado e conexão com os ciclos da natureza.', 'text-[#10b981]'],
                [<Compass className="w-4 h-4" />, 'Evolução Contínua', 'Aprendizado de novas ferramentas, IA e competências humanas.', 'text-[#f59e0b]']
              ].map(([icon, title, desc, color], i) => (
                <div key={i} className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                  <div className={`flex items-center gap-2 text-sm font-display font-bold ${color}`}>{icon}<span>{title}</span></div>
                  <p className="text-xs text-current/75 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className={`p-4 sm:p-5 rounded-3xl border shadow-xl backdrop-blur-md ${isDark ? 'bg-[#1b1226]/85 border-[#3b2752]' : 'bg-[#ffffff]/85 border-[#dec8ed]'}`}>
              <div className="relative overflow-hidden rounded-[1.35rem] mb-5 aspect-[4/5] border border-current/10 group bg-current/5">
                <img src="/assets/lediane-franca-portfolio.jpg" alt="Retrato profissional de Lediane França" className="w-full h-full object-cover object-[50%_36%] transition-transform duration-700 group-hover:scale-[1.025]" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute left-4 bottom-4 text-white"><span className="text-[10px] font-mono uppercase tracking-widest opacity-80">Portfólio pessoal</span><h3 className="font-display font-bold text-xl leading-tight">Lediane França</h3><span className="text-xs opacity-90">Brasília / DF</span></div>
              </div>
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between gap-4 py-1.5 border-b border-current/5"><span className="opacity-70">Disponibilidade:</span><span className="font-semibold text-[#10b981] flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />Projetos &amp; Remoto</span></div>
                <div className="flex items-center justify-between gap-4 py-1.5 border-b border-current/5"><span className="opacity-70">Foco:</span><span className="font-medium text-right">Tecnologia, IA &amp; Criação</span></div>
                <div className="flex items-center justify-between gap-4 py-1.5 border-b border-current/5"><span className="opacity-70">Diferenciais:</span><span className="font-medium text-right">Organização &amp; Jardinagem</span></div>
              </div>
              <div className="mt-5 pt-4 border-t border-current/10"><a href="#contact" className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-current/20 hover:border-current transition-all"><span>Vamos conversar</span><ArrowUpRight className="w-3.5 h-3.5" /></a></div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-current/10">
          <div className="text-center max-w-2xl mx-auto mb-12"><span className="text-xs font-mono uppercase tracking-widest text-[#7e22ce] dark:text-[#d8b4fe] font-bold block mb-2">✦ METÁFORA DO FLORESCER ✦</span><h3 className="font-editorial italic text-3xl sm:text-4xl text-current">O Ciclo de Crescimento Profissional</h3><p className="text-xs sm:text-sm text-current/75 font-sans mt-2">Como na natureza, cada competência amadurece por meio de curiosidade, método, prática e evolução.</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PERSONAL_INFO.growthStages.map((stage, idx) => (
              <div key={stage.phase} className={`p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${isDark ? 'bg-[#1e142c]/75 border-[#3d2757] hover:border-[#c084fc]/60' : 'bg-[#ede2f4]/60 border-[#dec7ec] hover:border-[#7e22ce]/60'}`}>
                <div className="flex items-center justify-between mb-4"><span className="font-mono text-xs font-bold text-[#7e22ce] dark:text-[#d8b4fe] px-2.5 py-1 rounded-full bg-current/5 border border-current/10">FASE {stage.phase}</span><div className="w-9 h-9 rounded-xl bg-current/5 border border-current/10 flex items-center justify-center group-hover:scale-110 transition-transform">{growthIcons[stage.icon] || <Sprout className="w-5 h-5" />}</div></div>
                <h4 className="font-display font-bold text-lg text-current mb-0.5">{stage.title}</h4><span className="text-xs font-editorial italic text-[#7e22ce] dark:text-[#d8b4fe] block mb-2 font-medium">{stage.subtitle}</span><p className="text-xs text-current/80 leading-relaxed font-sans">{stage.desc}</p><div className="mt-4 pt-4 border-t border-current/10 flex items-center justify-between text-[10px] font-mono opacity-50"><span>ETAPA 0{idx + 1}</span><span>●●●○</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
