import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink, Sparkles } from "lucide-react";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projetos" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="PROJETOS & PRODUÇÃO"
          title="Sistemas e aplicações desenvolvidas na prática."
          description="Aplicações reais em funcionamento: de plataformas SaaS de logística e gestão diária até e-commerces completos com checkout integrado."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-white/[0.08] bg-zinc-900/60 overflow-hidden flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-black/30"
            >
              <div>
                {/* Browser Top Chrome Bar (Inspired by Daniel Soberanis) */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/95 border-b border-white/[0.08] text-xs text-zinc-500">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-red-500/70 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-amber-500/70 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 group-hover:bg-emerald-500/70 transition-colors" />
                    </div>
                    <span className="ml-2 font-mono text-[11px] text-zinc-400 truncate">
                      {project.displayUrl}
                    </span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-amber-400 transition-colors p-1 shrink-0"
                    title={`Abrir ${project.displayUrl}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Project Visual Screenshot Preview */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden bg-zinc-950 group/preview border-b border-white/[0.06]"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300" />

                  {/* Floating Action Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[1px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-2xl">
                      <span>Ver Projeto ao Vivo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Content Area */}
                <div className="p-7">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md font-semibold">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-white/[0.05] mb-6 flex items-start gap-2 text-xs text-zinc-400">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{project.highlight}</span>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-zinc-300 bg-zinc-800/80 border border-white/[0.06] px-2.5 py-1 rounded-md font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 py-4 bg-zinc-950/60 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  {project.metrics}
                </span>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Acessar Projeto</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
