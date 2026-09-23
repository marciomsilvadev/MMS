import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, Cpu, ShoppingBag, Globe, Layout, Link2, Sparkles } from "lucide-react";

export function Services() {
  const { profile } = PORTFOLIO_DATA;

  const buildWhatsAppLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Olá Marcio! Gostaria de conversar sobre o serviço de ${serviceName} para a minha empresa.`
    );
    return `https://wa.me/${profile.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="servicos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SOLUÇÕES & ESPECIALIDADES"
          title="Engenharia de software e produtos digitais completos."
          description="De plataformas de gestão complexas a e-commerces e páginas de vendas: desenvolvo soluções robustas que resolvem problemas reais e impulsionam o seu faturamento."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card Principal: Sistemas Web, Dashboards & SaaS */}
          <div className="md:col-span-2 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-500/30 p-8 sm:p-10 flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden shadow-xl shadow-amber-500/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400">
                  <Cpu className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5" /> Engenharia Sob Medida
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                Sistemas Web, Dashboards & SaaS
              </h3>

              <p className="text-zinc-300 text-base leading-relaxed mb-6 max-w-xl">
                Desenvolvo plataformas operacionais e softwares como serviço (SaaS), desde sistemas de rotas e logística em tempo real até áreas de membros e painéis administrativos com autenticação e relatórios dinâmicos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {["Dashboards em Tempo Real", "Autenticação & Permissões", "Bancos Relacionais (PostgreSQL)"].map((detail) => (
                  <div key={detail} className="p-3 rounded-xl bg-zinc-950/70 border border-white/[0.06] text-xs font-medium text-zinc-300">
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href={buildWhatsAppLink("Sistemas Web e SaaS")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Solicitar proposta para sistemas web</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: E-commerce & Lojas Virtuais */}
          <div className="rounded-2xl bg-zinc-900/70 border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/35 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Mercado Pago & Stripe
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                E-commerce & Lojas Virtuais
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Lojas exclusivas de alta performance com catálogo dinâmico, carrinho inteligente e checkout de 1 clique sem lentidão.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={buildWhatsAppLink("E-commerce e Lojas Virtuais")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Sites Institucionais */}
          <div className="rounded-2xl bg-zinc-900/70 border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/35 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Sites Institucionais & Corporativos
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Posicione sua empresa com um site institucional moderno, design autoral no Figma e SEO técnico preparado para o Google.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={buildWhatsAppLink("Sites Institucionais")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Landing Pages de Alta Conversão */}
          <div className="rounded-2xl bg-zinc-900/70 border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/35 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Landing Pages de Alta Conversão
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Páginas de vendas para lançamentos e produtos físicos/digitais com narrativa persuasiva e carregamento sub-segundo.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={buildWhatsAppLink("Landing Pages")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 5: Automações, APIs & Integrações */}
          <div className="rounded-2xl bg-zinc-900/70 border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-amber-500/35 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Link2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                Automações, APIs & Integrações
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Conexão entre sistemas, disparos automáticos no WhatsApp, webhooks em tempo real e integração com meios de pagamento.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href={buildWhatsAppLink("Automações e APIs")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <span>Saiba mais</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
