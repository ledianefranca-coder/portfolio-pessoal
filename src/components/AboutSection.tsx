import React from 'react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Sprout, 
  Sun, 
  Leaf, 
  Flower2, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Heart, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

interface AboutSectionProps {
  theme: ThemeMode;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  const growthIcons: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="w-5 h-5 text-[#10b981]" />,
    Sun: <Sun className="w-5 h-5 text-[#f59e0b]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#8b5cf6]" />,
    Flower2: <Flower2 className="w-5 h-5 text-[#ec4899]" />
  };

  return (
    <section
      id="about"
      className="py-24 border-b border-current/10 relative overflow-hidden"
    >
      {/* Subtle organic gradient contour in background */}
      <div 
        className="absolute top-1/2 -right-48 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #ec4899 0%, #a855f7 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-current/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] mb-2 font-bold">
              <span>02</span>
              <span>•</span>
              <span>SOBRE MIM &amp; TRAJETÓRIA</span>
            </div>
            <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl text-current">
              O Florescer da Identidade
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono opacity-60 uppercase max-w-xs md:text-right">
            Integração harmoniosa de tecnologia, criatividade, método e desenvolvimento humano.
          </p>
        </div>

        {/* Top Editorial Bio: Integrated Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Main Long Text */}
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg leading-relaxed font-sans text-current/90">
            <p className="text-xl sm:text-2xl font-editorial italic font-normal text-[#8b5cf6] dark:text-[#c084fc] leading-relaxed">
              “Acredito que diferentes conhecimentos não competem entre si — eles se integram e enriquecem uma mesma identidade profissional.”
            </p>

            <p>
              Sou <strong>Lediane França</strong>, uma profissional organizada, dedicada e movida pela curiosidade. Minha jornada é marcada pela vivência prática em diferentes áreas nas quais construí disciplina rigorosa, responsabilidade e sensibilidade para lidar com pessoas, demandas complexas e processos.
            </p>

            <p>
              Ao longo do meu percurso, busquei expandir continuamente meus saberes através de cursos e projetos práticos em <strong>Tecnologia e Inteligência Artificial</strong>, <strong>Criação de Conteúdo Digital</strong>, <strong>Personal Organizer &amp; Harmonia de Ambientes</strong> e <strong>Jardinagem / Sensibilidade Botânica</strong>.
            </p>

            <p>
              Em cada projeto que desenvolvo, meu propósito é unir <strong>clareza técnica</strong>, <strong>estética acolhedora</strong> e <strong>foco total na excelência da entrega</strong>. Aprender continuamente é minha principal ferramenta de transformação.
            </p>

            {/* Core Values Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-display font-bold text-[#7e22ce] dark:text-[#d8b4fe]">
                  <Sparkles className="w-4 h-4" />
                  <span>Criatividade com Propósito</span>
                </div>
                <p className="text-xs text-current/75 leading-relaxed">
                  Transformar ideias e sensações em projetos visuais claros, acolhedores e funcionais.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-display font-bold text-[#ec4899]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Organização &amp; Rigor</span>
                </div>
                <p className="text-xs text-current/75 leading-relaxed">
                  Estruturação de rotinas, planejamento minucioso e gestão impecável de processos.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-display font-bold text-[#10b981]">
                  <Sprout className="w-4 h-4" />
                  <span>Sensibilidade Botânica</span>
                </div>
                <p className="text-xs text-current/75 leading-relaxed">
                  Compreensão dos ciclos da natureza aplicados à paciência e ao cultivo sustentável.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-current/10 bg-current/5 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-display font-bold text-[#f59e0b]">
                  <Compass className="w-4 h-4" />
                  <span>Evolução Contínua</span>
                </div>
                <p className="text-xs text-current/75 leading-relaxed">
                  Abertura constante para aprender novas linguagens, ferramentas de IA e competências humanas.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Summary Card & Personal Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              className={`p-6 sm:p-7 rounded-3xl border shadow-xl backdrop-blur-md ${
                isDark 
                  ? 'bg-[#1b1226]/85 border-[#3b2752]' 
                  : 'bg-[#ffffff]/85 border-[#dec8ed]'
              }`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-current/10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7e22ce] to-[#ec4899] text-white flex items-center justify-center font-display font-black text-base shadow-md">
                  LF
                </div>
                <div>
                  <h3 className="font-display font-bold text-base">Lediane França</h3>
                  <span className="text-xs text-current/70 block">Brasília / Brasil</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-current/5">
                  <span className="opacity-70">Disponibilidade:</span>
                  <span className="font-semibold text-[#10b981] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                    Projetos &amp; Remoto
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-current/5">
                  <span className="opacity-70">Aplicações Web:</span>
                  <span className="font-mono font-bold">Deploy na Vercel</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-current/5">
                  <span className="opacity-70">Canais Criativos:</span>
                  <span className="font-medium">Instagram, TikTok, YouTube</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-current/5">
                  <span className="opacity-70">Especialidades:</span>
                  <span className="font-medium">Organização, IA &amp; Conteúdo</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-current/10">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-current/20 hover:border-current transition-all"
                >
                  <span>Iniciar Conversa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Metáfora Visual do Florescer (Growth Stages) */}
        <div className="pt-8 mt-8 border-t border-current/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7e22ce] dark:text-[#d8b4fe] font-bold block mb-2">
              ✦ METÁFORA DO FLORESCER ✦
            </span>
            <h3 className="font-editorial italic text-3xl sm:text-4xl text-current">
              O Ciclo de Crescimento Profissional
            </h3>
            <p className="text-xs sm:text-sm text-current/75 font-sans mt-2">
              Como na natureza, cada projeto e competência amadurece através de fases interdependentes de nutrição, método e expansão.
            </p>
          </div>

          {/* 4 Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {PERSONAL_INFO.growthStages.map((stage, idx) => (
              <div
                key={stage.phase}
                className={`p-6 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative overflow-hidden ${
                  isDark
                    ? 'bg-[#1e142c]/75 border-[#3d2757] hover:border-[#c084fc]/60'
                    : 'bg-[#ede2f4]/60 border-[#dec7ec] hover:border-[#7e22ce]/60'
                }`}
              >
                {/* Stage Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#7e22ce] dark:text-[#d8b4fe] px-2.5 py-1 rounded-full bg-current/5 border border-current/10">
                    FASE {stage.phase}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-current/5 border border-current/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {growthIcons[stage.icon] || <Sprout className="w-5 h-5" />}
                  </div>
                </div>

                <h4 className="font-display font-bold text-lg text-current mb-0.5">
                  {stage.title}
                </h4>
                <span className="text-xs font-editorial italic text-[#7e22ce] dark:text-[#d8b4fe] block mb-2 font-medium">
                  {stage.subtitle}
                </span>

                <p className="text-xs text-current/80 leading-relaxed font-sans">
                  {stage.desc}
                </p>

                {/* Bottom subtle progress line */}
                <div className="mt-4 pt-4 border-t border-current/10 flex items-center justify-between text-[10px] font-mono opacity-50">
                  <span>ETAPA 0{idx + 1}</span>
                  <span>●●●○</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
