import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Gauge, CheckCheck, Award } from "lucide-react";

export function About() {
  const { autoridade } = PORTFOLIO_DATA;

  const pilarIcons = [
    <ShieldCheck key="shield" className="w-6 h-6 text-amber-400" />,
    <Gauge key="gauge" className="w-6 h-6 text-amber-400" />,
    <CheckCheck key="check" className="w-6 h-6 text-amber-400" />,
  ];

  return (
    <section id="autoridade" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Context & Bio */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>{autoridade.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {autoridade.title}
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {autoridade.lead}
              </p>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Garantia de Qualidade de Engenharia
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Sem plugins vulneráveis, sem temas sobrecarregados e sem quebras em navegadores móveis.
                </p>
              </div>
            </div>

            {/* Right Column: 3 Pillars */}
            <div className="lg:col-span-7 space-y-4">
              {autoridade.pilares.map((pilar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-zinc-950/60 border border-white/[0.06] hover:border-amber-500/35 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {pilarIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                      {pilar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}
