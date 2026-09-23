import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Compass, PenTool, Code2, CheckCheck } from "lucide-react";

export function Process() {
  const { processo } = PORTFOLIO_DATA;

  const stepIcons = [
    <Compass key="1" className="w-6 h-6 text-amber-400" />,
    <PenTool key="2" className="w-6 h-6 text-amber-400" />,
    <Code2 key="3" className="w-6 h-6 text-amber-400" />,
    <CheckCheck key="4" className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section id="metodologia" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="METODOLOGIA DE EXECUÇÃO"
          title="O caminho técnico do diagnóstico ao faturamento."
          description="Um processo estruturado com rigor de engenharia para que você acompanhe cada fase da entrega sem surpresas ou atrasos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processo.map((step, idx) => (
            <div
              key={step.number}
              className="rounded-2xl bg-zinc-900/60 border border-white/[0.08] p-7 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 group relative"
            >
              <div>
                {/* Header Row: Icon & Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-extrabold text-zinc-700 group-hover:text-amber-400/40 transition-colors font-mono">
                    {step.number}
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-1 font-semibold">
                  {step.phase}
                </span>

                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <ul className="space-y-1.5 mb-2">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.05]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                  Fase {step.number} de 04
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
