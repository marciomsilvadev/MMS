import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUp, Cpu } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950/90 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <span>
                {PORTFOLIO_DATA.profile.name}
                <span className="text-amber-400">.design</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Sistemas web sob medida, e-commerce e páginas de alta performance com a maturidade de quem tem mais de 20 anos de experiência em TI.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-5 text-xs text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">Início</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#autoridade" className="hover:text-white transition-colors">Diferenciais</a>
            <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-amber-400 transition-colors font-semibold">Contato</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500">
          <p>
            © {currentYear} Marcio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span>Desenvolvido com Next.js & Tailwind CSS</span>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-amber-500/30 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
