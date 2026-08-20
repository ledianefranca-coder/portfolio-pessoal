import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { 
  Mail, 
  Instagram, 
  Music2, 
  Github, 
  Youtube, 
  Clapperboard, 
  Linkedin, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  MapPin
} from 'lucide-react';

interface ContactSectionProps {
  theme: ThemeMode;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ theme }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Contato Portfólio] ${formData.subject || 'Nova Oportunidade'} - ${formData.name}`
    )}&body=${encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const getSocialIcon = (id: string) => {
    switch (id) {
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'tiktok':
        return <Music2 className="w-5 h-5" />;
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'youtube':
        return <Youtube className="w-5 h-5" />;
      case 'kwai':
        return <Clapperboard className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const isDark = theme === 'dark';

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Soft Radial Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #7e22ce 0%, #ec4899 50%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-current/10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#7e22ce] dark:text-[#d8b4fe] mb-2 font-bold">
              <span>05</span>
              <span>•</span>
              <span>CONTATO &amp; CONEXÕES</span>
            </div>
            <h2 className="font-editorial italic text-4xl sm:text-5xl md:text-6xl text-current">
              Vamos Construir Algo Juntos?
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono opacity-60 uppercase max-w-xs md:text-right">
            Disponível para novos projetos, consultorias de organização, presença digital e parcerias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Action & Primary Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-current leading-tight">
                Entre em contato direto com <br />
                <span className="font-editorial italic font-normal text-[#8b5cf6] dark:text-[#c084fc]">
                  Lediane França
                </span>
              </h3>

              <p className="text-base sm:text-lg text-current/85 font-sans leading-relaxed">
                Seja para propor um projeto de tecnologia, consultoria em organização de rotinas, produção de conteúdo digital ou colaboração profissional, será um prazer conversar.
              </p>

              {/* Location and Availability Badges */}
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-current/10 bg-current/5">
                  <MapPin className="w-3.5 h-3.5 text-[#ec4899]" />
                  <span>Brasília / DF • Remoto &amp; Presencial</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span>Disponível para Oportunidades</span>
                </span>
              </div>
            </div>

            {/* Direct Email Highlight Card */}
            <div 
              className={`p-6 sm:p-7 rounded-3xl border shadow-xl relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-br from-[#231535] to-[#170e24] border-[#4a3366]' 
                  : 'bg-gradient-to-br from-[#ffffff] to-[#f9f3fc] border-[#dec7ec]'
              }`}
            >
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#7e22ce] dark:text-[#d8b4fe] font-bold block mb-1">
                E-mail Principal:
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display font-bold text-lg sm:text-xl text-current hover:text-[#7e22ce] dark:hover:text-[#d8b4fe] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all duration-200 cursor-pointer shrink-0 ${
                    copied
                      ? 'bg-[#10b981] text-white border-[#10b981]'
                      : 'bg-current/5 border-current/20 hover:border-current text-current'
                  }`}
                  title="Copiar endereço de e-mail"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Explicit 4 Core Channels Grid (Instagram, TikTok, GitHub, E-mail) */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase opacity-60 font-bold block">
                Canais Oficiais de Conexão:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.slice(0, 4).map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl border transition-all duration-300 group hover:-translate-y-0.5 hover:shadow-md flex items-center justify-between gap-3 ${
                      isDark
                        ? 'bg-[#1a1226]/80 border-[#382650] hover:border-[#c084fc]'
                        : 'bg-[#ede2f4]/60 border-[#dec7ec] hover:border-[#7e22ce]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-xl bg-current/5 border border-current/10 flex items-center justify-center text-[#7e22ce] dark:text-[#d8b4fe] group-hover:scale-110 transition-transform shrink-0">
                        {getSocialIcon(link.id)}
                      </div>
                      <div className="min-w-0">
                        <span className="font-display font-bold text-sm block truncate text-current">
                          {link.name}
                        </span>
                        <span className="text-[11px] font-mono opacity-60 block truncate">
                          {link.handle}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                ))}
              </div>

              {/* Secondary Channels (YouTube, Kwai, LinkedIn) */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="opacity-60 font-mono text-[11px]">Outros canais:</span>
                {SOCIAL_LINKS.slice(4).map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full border border-current/15 hover:border-current text-current/80 hover:text-current transition-all flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-6">
            <div 
              className={`p-6 sm:p-8 rounded-3xl border shadow-xl backdrop-blur-md ${
                isDark 
                  ? 'bg-[#1b1227]/90 border-[#3d2757]' 
                  : 'bg-[#ffffff]/90 border-[#dec7ec]'
              }`}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-current/10">
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-current">
                    Envie uma Mensagem Direta
                  </h4>
                  <p className="text-xs text-current/70 font-sans mt-0.5">
                    Preencha os campos abaixo para abrir seu cliente de e-mail pronto para envio.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#8b5cf6] shrink-0" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider opacity-75 mb-1 font-bold">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Ana Beatriz Silva"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                      isDark
                        ? 'bg-[#120c1d] border-[#382650] focus:border-[#c084fc] text-white'
                        : 'bg-[#faf6fc] border-[#dec7ec] focus:border-[#7e22ce] text-[#281838]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider opacity-75 mb-1 font-bold">
                    Seu E-mail de Resposta *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                      isDark
                        ? 'bg-[#120c1d] border-[#382650] focus:border-[#c084fc] text-white'
                        : 'bg-[#faf6fc] border-[#dec7ec] focus:border-[#7e22ce] text-[#281838]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider opacity-75 mb-1 font-bold">
                    Assunto / Tipo de Projeto
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Proposta de Projeto / Consultoria / Parceria"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none ${
                      isDark
                        ? 'bg-[#120c1d] border-[#382650] focus:border-[#c084fc] text-white'
                        : 'bg-[#faf6fc] border-[#dec7ec] focus:border-[#7e22ce] text-[#281838]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider opacity-75 mb-1 font-bold">
                    Mensagem Detalhada *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escreva como podemos colaborar e quais são os objetivos do projeto..."
                    className={`w-full px-4 py-3 rounded-xl border transition-colors outline-none resize-none ${
                      isDark
                        ? 'bg-[#120c1d] border-[#382650] focus:border-[#c084fc] text-white'
                        : 'bg-[#faf6fc] border-[#dec7ec] focus:border-[#7e22ce] text-[#281838]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-98 shadow-md flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#a855f7] text-white"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem para Lediane</span>
                </button>

                {sent && (
                  <p className="text-center text-xs text-[#10b981] font-medium pt-1">
                    ✓ Abrindo seu cliente de e-mail com a mensagem pré-configurada!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
