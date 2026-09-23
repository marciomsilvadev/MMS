"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Diferenciais", href: "#autoridade" },
    { name: "Projetos", href: "#projetos" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/90 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-extrabold text-zinc-100">
                {PORTFOLIO_DATA.profile.name}
                <span className="text-amber-400 font-mono text-sm ml-0.5">.design</span>
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase font-medium">
                Engenharia & Soluções
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/80 border border-white/[0.08] px-3.5 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/5 uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              href={PORTFOLIO_DATA.profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full gap-2 border-white/15 hover:border-amber-500/50 text-zinc-200 text-xs uppercase tracking-wider font-semibold"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-white/[0.08] px-4 pt-4 pb-6 mt-3 backdrop-blur-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Button
                variant="whatsapp"
                href={PORTFOLIO_DATA.profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                Iniciar conversa no WhatsApp
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
