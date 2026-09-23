export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  isMain?: boolean;
  tag?: string;
  details: string[];
}

export interface RealProject {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  category: string;
  badge: string;
  description: string;
  highlight: string;
  tags: string[];
  metrics: string;
  image: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Marcio",
    age: 42,
    experienceYears: "20+",
    brandTitle: "Marcio • Engenharia & Presença Digital",
    role: "Desenvolvimento de Sistemas, Sites & Alta Performance",
    eyebrow: "SISTEMAS • SITES • E-COMMERCE • ALTA PERFORMANCE",
    headline: "Soluções digitais sólidas, sistemas sob medida e páginas que geram resultados.",
    subheadline: "Tenho 42 anos e mais de 20 anos de experiência em TI. Desenvolvo sistemas web complexos, e-commerces completos, sites corporativos e landing pages de alta conversão com engenharia robusta e velocidade máxima.",
    location: "Brasil • Atendimento Nacional",
    status: {
      available: true,
      label: "Disponível para novos projetos & consultoria",
    },
    whatsappNumber: "5511999999999",
    whatsappUrl: "https://wa.me/5511999999999?text=Ol%C3%A1%20Marcio!%20Vi%20seus%20projetos%20no%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20digital%20para%20minha%20empresa.",
    social: {
      github: "https://github.com/marciomsilvadev",
      linkedin: "https://linkedin.com",
      email: "marciomsilva.dev@gmail.com",
    },
    stats: [
      { label: "Experiência em TI", value: "+20 Anos" },
      { label: "Sistemas & Sites Entregues", value: "50+" },
      { label: "Padrão de Carregamento", value: "< 0.8s" },
      { label: "Disponibilidade de Operação", value: "99.9%" },
    ],
  },

  autoridade: {
    badge: "Maturidade de Engenharia",
    title: "Mais de 20 anos em TI aplicados ao crescimento do seu negócio",
    lead: "Desenvolver para a web hoje vai muito além de páginas estáticas. Você precisa de software seguro, integrações que funcionam sem falhas e plataformas que acompanham o ritmo do seu negócio.",
    pilares: [
      {
        title: "Engenharia de Software Completa (Full Stack)",
        description: "Do banco de dados relacional e APIs até a interface final do usuário: domino o ciclo completo de tecnologia para entregar sistemas web, painéis de gestão e e-commerces escaláveis.",
      },
      {
        title: "Velocidade & Core Web Vitals no Verde",
        description: "Páginas pesadas custam vendas e derrubam posições no Google. Minhas aplicações são construídas em Next.js e React para abrir instantaneamente em qualquer dispositivo móvel.",
      },
      {
        title: "Comunicação Direta & Clareza Executiva",
        description: "Aos 42 anos, trago a segurança de quem tem compromisso rigoroso com prazos, arquitetura estável e atendimento consultivo, sem delegar seu projeto para terceiros ou estagiários.",
      },
    ],
  },

  services: [
    {
      id: "sistemas-web",
      title: "Sistemas Web, Dashboards & SaaS",
      category: "Aplicações Sob Medida",
      description: "Painéis de gestão operacional, plataformas de rotas/frotas, áreas de membros e ferramentas internas para automatizar os processos da sua empresa.",
      icon: "cpu",
      isMain: true,
      tag: "Engenharia Sob Medida",
      details: ["Dashboards em tempo real", "Autenticação & controle de acesso", "Integração com bancos de dados"],
    },
    {
      id: "e-commerce-lojas",
      title: "E-commerce & Lojas Virtuais de Alta Performance",
      category: "Vendas Online",
      description: "Lojas exclusivas com catálogo dinâmico, checkout transparente (Mercado Pago, Stripe, PIX), cálculo de frete e gestão de estoque sem a lentidão de plataformas engessadas.",
      icon: "shopping-bag",
      tag: "Conversão & Vendas",
      details: ["Checkout 1-click sem atrito", "PIX e Cartão integrados", "Painel de catálogo e produtos"],
    },
    {
      id: "sites-institucionais",
      title: "Sites Institucionais & Portais Corporativos",
      category: "Presença Digital",
      description: "Sites que posicionam sua marca como líder do setor, com design visual premium, SEO técnico estruturado para o Google e total adaptação para celulares.",
      icon: "globe",
      details: ["Design autoral no Figma", "SEO técnico para o Google", "100% responsivo e acessível"],
    },
    {
      id: "landing-pages",
      title: "Landing Pages de Alta Conversão",
      category: "Tráfego & Vendas",
      description: "Páginas de vendas para lançamentos, infoprodutos e captação de leads B2B, com carregamento sub-segundo e narrativa persuasiva orientada à ação.",
      icon: "layout",
      details: ["Carregamento em < 0.7s", "Gatilhos de persuasão e copy", "Pixels e API de Conversões"],
    },
    {
      id: "integracoes-apis",
      title: "Automações, APIs & Meios de Pagamento",
      category: "Conectividade",
      description: "Conexão de sistemas com WhatsApp Business, Webhooks, CRMs, plataformas de pagamento e bancos de dados em nuvem.",
      icon: "link",
      details: ["Disparos automáticos no WhatsApp", "Integrações via API REST", "Webhooks em tempo real"],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "betaxlog-rotas",
      title: "BetaX Log — Sistema de Gestão de Rotas & Frotas",
      url: "https://gerenciamento-rotas-betaxlog.vercel.app/painel",
      displayUrl: "gerenciamento-rotas-betaxlog.vercel.app",
      category: "SaaS & Sistema Web Operacional",
      badge: "SaaS em Produção",
      image: "/projects/betaxlog.png",
      description: "Plataforma operacional para gestão logística diária: escala de motoristas ativos, distribuição de vagas e monitoramento em tempo real do status de rotas concluídas.",
      highlight: "Painel autenticado com roteamento reativo, processamento em tempo real e atualização dinâmica de frota.",
      tags: ["React", "TanStack Router", "Dashboard", "SaaS Logístico", "Full Stack"],
      metrics: "Operação logística diária • Uptime 99.9%",
    },
    {
      id: "diamond-relics",
      title: "Diamond Relics — E-commerce de Memorabilia Esportiva",
      url: "https://gofastbuyonline.com/",
      displayUrl: "gofastbuyonline.com",
      category: "E-commerce & Plataforma de Vendas",
      badge: "E-commerce Ativo",
      image: "/projects/diamond-relics.png",
      description: "Loja virtual de memorabilia e itens esportivos de colecionador. Catálogo estruturado, carrinho interativo, busca dinâmica e checkout integrado com Mercado Pago SDK.",
      highlight: "Design luxo dark/gold com layout imersivo, integração com Supabase para mídia e processamento seguro de pagamentos.",
      tags: ["Next.js", "Mercado Pago SDK", "Supabase", "E-commerce", "Tailwind CSS"],
      metrics: "Checkout transparente • PIX e parcelamento integrados",
    },
    {
      id: "lp-mentoria-highticket",
      title: "Página de Vendas para Programa Executivo",
      url: "https://example.com/demo-mentoria",
      displayUrl: "mentoriaexecutiva.com.br",
      category: "Landing Page de Alta Conversão",
      badge: "Página de Vendas",
      image: "/projects/mentoria.jpg",
      description: "Landing page estruturada com prova social em vídeo, quebra de objeções progressiva e integração de checkout com Kiwify e Meta Pixel API.",
      highlight: "Otimizada para suportar picos de mais de 15.000 cliques de anúncios por dia sem oscilação.",
      tags: ["Next.js", "Kiwify Checkout", "Meta API", "Alta Performance"],
      metrics: "+5.2% de Conversão • Carregamento em 0.6s",
    },
    {
      id: "portal-corporativo-b2b",
      title: "Portal Corporativo & Captação B2B",
      url: "https://example.com/demo-b2b",
      displayUrl: "solucoescorporativas.com.br",
      category: "Site Institucional & Leads",
      badge: "Presença Digital B2B",
      image: "/projects/portal-b2b.jpg",
      description: "Portal institucional focado em posicionamento de autoridade, apresentação de soluções empresariais e funil dinâmico de orçamento integrado com WhatsApp.",
      highlight: "Score 99/100 no Google PageSpeed e estrutura completa de SEO para ranqueamento orgânico.",
      tags: ["Next.js 16", "SEO Avançado", "WhatsApp Lead Funnel", "TypeScript"],
      metrics: "Aumento de 65% em solicitações de proposta",
    },
  ] as RealProject[],

  processo: [
    {
      number: "01",
      phase: "Diagnóstico & Arquitetura",
      title: "Entendimento do Negócio",
      description: "Mapeamento dos requisitos técnicos, regras de negócio, perfil dos usuários e objetivos comerciais da aplicação.",
      deliverables: ["Definição de escopo e arquitetura", "Fluxos de navegação e telas", "Prazos e cronograma"],
    },
    {
      number: "02",
      phase: "UI/UX & Estruturação",
      title: "Design de Interface",
      description: "Criação de layouts elegantes, intuitivos e 100% responsivos no Figma, combinando usabilidade moderna com identidade de marca.",
      deliverables: ["Prototipagem Mobile e Desktop", "Design system e componentes", "Validação de experiência"],
    },
    {
      number: "03",
      phase: "Engenharia & Desenvolvimento",
      title: "Código Limpo & Velocidade",
      description: "Implementação com as tecnologias mais modernas do ecossistema React/Next.js, TypeScript e bancos de dados seguros.",
      deliverables: ["Carregamento sub-segundo", "APIs e integrações de pagamento", "Padrão de código limpo"],
    },
    {
      number: "04",
      phase: "Testes & Publicação",
      title: "Homologação & Go-Live",
      description: "Configuração de domínio com SSL, publicação em infraestrutura em nuvem global e testes completos de funcionamento.",
      deliverables: ["Publicação em nuvem com alta capacidade", "Testes de ponta a ponta", "Garantia e suporte pós-entrega"],
    },
  ] as ProcessStep[],

  faq: [
    {
      question: "Você desenvolve apenas sites simples ou também sistemas complexos?",
      answer: "Desenvolvo todo o ecossistema digital. Tenho mais de 20 anos em TI, o que me permite criar desde landing pages rápidas e sites institucionais até sistemas web complexos (SaaS), painéis administrativos com autenticação e plataformas de e-commerce completas, como demonstram meus projetos em produção.",
    },
    {
      question: "Qual o prazo médio para o desenvolvimento de um projeto?",
      answer: "Páginas de alta conversão e sites institucionais levam em média de 5 a 10 dias úteis. Lojas virtuais e sistemas web sob medida variam conforme a complexidade dos módulos (geralmente entre 2 e 4 semanas). Todo o cronograma é acordado formalmente antes do início.",
    },
    {
      question: "Quais tecnologias você utiliza e por que elas são superiores?",
      answer: "Trabalho primariamente com Next.js, React, TypeScript, Tailwind CSS e bancos modernos como PostgreSQL e Supabase. Diferente de construtores pesados e cheios de plugins lentos, essas tecnologias são as mesmas adotadas por empresas globais, garantindo carregamento instantâneo, segurança máxima contra invasões e estabilidade em picos de acessos.",
    },
    {
      question: "Como funciona a hospedagem e a manutenção após a entrega?",
      answer: "Publico as aplicações em servidores em nuvem modernos e globais (como Vercel, AWS e Cloudflare) com certificado de segurança SSL gratuito. Todo projeto conta com garantia de entrega e disponibilidade para suporte e evolução contínua.",
    },
    {
      question: "Posso integrar meios de pagamento e WhatsApp no meu projeto?",
      answer: "Sim! Integro checkouts transparentes com Mercado Pago, Stripe, Kiwify, Hotmart, gateways de PIX automático e botões de atendimento direto no WhatsApp com mensagens personalizadas.",
    },
    {
      question: "Qual o diferencial de contratar um profissional sênior de 42 anos com 20+ anos em TI?",
      answer: "A maturidade técnica evita retrabalho, lentidão e erros graves de arquitetura. Você tem a tranquilidade de lidar com um profissional experiente, com diálogo claro, compromisso com o seu negócio e responsabilidade com prazos.",
    },
  ] as FaqItem[],
};
