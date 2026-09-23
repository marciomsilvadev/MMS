import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { ArrowDown, CheckCircle2, Shield, Zap, Code2, Database } from "lucide-react";

export function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Ambient background warm glows (neutral & soft, zero heavy blue) */}
      <div className="glow-warm bg-amber-500/10 top-1/4 -left-48" />
      <div className="glow-warm bg-amber-600/10 top-1/3 -right-48" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-semibold text-amber-400 mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{profile.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
              Soluções digitais sólidas,{" "}
              <span className="gradient-accent-text block">
                sistemas e páginas que geram resultados.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 mb-8 leading-relaxed font-normal max-w-xl">
              {profile.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button
                size="lg"
                variant="primary"
                href="#projetos"
                className="group"
              >
                <span>Ver Projetos em Produção</span>
                <ArrowDown className="w-4 h-4 ml-1 group-hover:translate-y-0.5 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="whatsapp"
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                <span>Conversar no WhatsApp</span>
              </Button>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Atendimento direto com o Marcio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sistemas Web & E-commerce</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Padrão de engenharia profissional</span>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-7 border border-white/10 shadow-2xl shadow-amber-500/5">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">
                    {profile.name} • 42 Anos
                  </span>
                </div>
                <span className="text-xs text-amber-400 font-mono bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-bold">
                  +20 Anos de TI
                </span>
              </div>

              {/* Pillars Display */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Sistemas Web & SaaS</span>
                      <span className="text-[11px] text-zinc-400">Dashboards e regras de negócio</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">Sob Medida</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">E-commerce & Lojas</span>
                      <span className="text-[11px] text-zinc-400">Catálogos e pagamentos digitais</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">1-Click Checkout</span>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Sites & Landing Pages</span>
                      <span className="text-[11px] text-zinc-400">Carregamento instantâneo & SEO</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">&lt; 0.8s</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="text-zinc-400">Infraestrutura em Nuvem</span>
                <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <Shield className="w-3 h-3" /> 99.9% Uptime
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {profile.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
