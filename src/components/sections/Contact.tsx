"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Check, Copy, Mail, MessageSquare, Sparkles } from "lucide-react";

export function Contact() {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceType: "Sistema Web ou Plataforma Sob Medida",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Redirect to WhatsApp with formatted text
    const text = encodeURIComponent(
      `Olá Marcio! Meu nome é ${formData.name}.\nTenho interesse em: ${formData.serviceType}.\nMensagem: ${formData.message || "Gostaria de solicitar uma estimativa de prazo e valor para o meu projeto."}`
    );
    window.open(`https://wa.me/${profile.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      <div className="glow-warm bg-amber-500/10 bottom-0 left-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 p-8 sm:p-14 text-center mb-16 shadow-2xl shadow-amber-500/5 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VAMOS CONVERSAR SOBRE SEU PRÓXIMO PASSO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Pronto para tirar seu projeto do papel com quem entende?
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Compartilhe sua ideia ou demanda e vamos desenhar a solução ideal com a maturidade de quem tem mais de 20 anos em TI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              variant="whatsapp"
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base px-8 py-4 shadow-xl font-bold"
            >
              <WhatsAppIcon className="w-5 h-5 mr-2.5" />
              <span>Iniciar conversa no WhatsApp</span>
            </Button>
          </div>
        </div>

        {/* Secondary Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Contato Direto com o Marcio
            </h3>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
              Você fala diretamente comigo, com clareza, transparência e sem intermediários comerciais.
            </p>

            {/* Email Box */}
            <div className="mb-6">
              <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-2 font-medium">
                E-mail Profissional
              </span>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-mono text-zinc-200 truncate">
                    {profile.social.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0 border border-white/5"
                  title="Copiar e-mail"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" /> E-mail copiado para a área de transferência!
                </p>
              )}
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Atendimento ágil em horário comercial de segunda a sexta, das 09h às 19h.</span>
            </div>
          </div>

          {/* Right: Briefing Quick Form */}
          <div className="lg:col-span-7 rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-8">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-amber-400" />
              Solicitar Estimativa de Projeto
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Envie os detalhes do que você precisa e receba uma orientação inicial diretamente no seu WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Mendes"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Seu WhatsApp / Telefone
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: (11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-zinc-950/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Tipo de Solução
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-zinc-950/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="Sistema Web ou Plataforma Sob Medida">Sistema Web ou Plataforma Sob Medida (SaaS)</option>
                  <option value="E-commerce ou Loja Virtual de Alta Performance">E-commerce ou Loja Virtual de Alta Performance</option>
                  <option value="Site Institucional ou Portal Corporativo">Site Institucional ou Portal Corporativo</option>
                  <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                  <option value="Automações, APIs ou Outro Projeto">Automações, APIs ou Outro Projeto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Breve descrição da sua necessidade (opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Compartilhe o objetivo principal ou o que sua empresa precisa alcançar..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="md"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                Enviar mensagem e falar no WhatsApp
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
