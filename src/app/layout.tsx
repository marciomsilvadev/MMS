import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Marcio | Desenvolvimento de Sistemas Web, E-commerce & Alta Performance",
  description:
    "42 anos e mais de 20 anos de experiência em TI. Desenvolvimento de sistemas web sob medida, e-commerces completos, sites corporativos e landing pages de alta conversão.",
  keywords: [
    "Sistemas Web",
    "Desenvolvedor Full Stack",
    "Desenvolvimento de SaaS",
    "E-commerce Next.js",
    "Landing Pages de Alta Conversão",
    "Marcio Web Design",
    "Criação de Sites",
    "Sistemas Logísticos",
  ],
  authors: [{ name: "Marcio" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://marcio.design",
    siteName: "Marcio • Engenharia & Presença Digital",
    title: "Marcio | Desenvolvimento de Sistemas Web, E-commerce & Alta Performance",
    description:
      "Soluções digitais sólidas, sistemas sob medida e páginas que geram resultados com mais de 20 anos em TI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcio | Desenvolvimento de Sistemas Web, E-commerce & Alta Performance",
    description:
      "Soluções digitais sólidas, sistemas sob medida e páginas que geram resultados com mais de 20 anos em TI.",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-amber-500 selection:text-black min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
