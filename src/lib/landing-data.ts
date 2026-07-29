export const WHATSAPP_NUMBER = "5565992203318";

/** Monta o link de WhatsApp com mensagem pré-preenchida. */
export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const SPEND_MIN = 20;
export const SPEND_MAX = 2000;
export const SAVINGS_RATE = 0.7;

export const clampSpend = (n: number) => {
  if (!Number.isFinite(n)) return SPEND_MIN;
  return Math.min(SPEND_MAX, Math.max(SPEND_MIN, Math.round(n)));
};

/** Formatação estável entre SSR e cliente (evita hydration mismatch). */
export const formatBRL = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

export const EXTENSION_FILENAME = "vorax-extension.zip";

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#planos", label: "Planos" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#faq", label: "FAQ" },
];

export const DESKTOP_NAV_LINKS: NavLink[] = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "FAQ" },
];

export const STATS = [
  { k: "70%", v: "Economia média" },
  { k: "12k+", v: "Devs ativos" },
  { k: "4.9★", v: "Avaliação" },
] as const;

export const FEATURES = [
  {
    title: "Economia de até 70%",
    desc: "Otimização inteligente do consumo de créditos no Lovable, sem sacrificar qualidade.",
    icon: "💸",
  },
  {
    title: "Ativação Imediata",
    desc: "Instale a extensão, faça login e comece a economizar em menos de 2 minutos.",
    icon: "⚡",
  },
  {
    title: "Suporte VIP",
    desc: "Atendimento humano prioritário via WhatsApp para resolver qualquer dúvida.",
    icon: "🎧",
  },
  {
    title: "Sempre Atualizado",
    desc: "Novas features toda semana acompanhando as atualizações do Lovable.",
    icon: "🚀",
  },
] as const;

export const STEPS = [
  {
    step: "01",
    title: "Instale a extensão",
    desc: "Baixe a Vorax Lovable na Chrome Web Store em um clique. Compatível com todos os navegadores baseados em Chromium.",
    icon: "⬇️",
  },
  {
    step: "02",
    title: "Conecte seu Lovable",
    desc: "Faça login com sua conta Lovable. A extensão se integra automaticamente ao seu workspace sem configuração manual.",
    icon: "🔗",
  },
  {
    step: "03",
    title: "Economize automaticamente",
    desc: "Pronto! A partir daqui todos os créditos passam pela otimização inteligente da Vorax Lovable. Você economiza sem fazer nada.",
    icon: "💰",
  },
] as const;

export type Plan = {
  name: string;
  price: string;
  period: string;
  badge: string;
  features: string[];
  highlight: boolean;
  waMessage: string;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "R$ 39",
    period: "/mês",
    badge: "Teste grátis 3 dias",
    features: [
      "Economia de até 40% em créditos",
      "Suporte via comunidade",
      "1 workspace Lovable",
      "Ativação em minutos",
    ],
    highlight: false,
    waMessage:
      "Olá! Quero ativar o plano *Starter* da Vorax Lovable (R$ 39/mês) e começar meu teste grátis de 3 dias. Pode me ajudar?",
  },
  {
    name: "Pro Elite",
    price: "R$ 89",
    period: "/mês",
    badge: "Mais escolhido",
    features: [
      "Economia real de até 70%",
      "Suporte VIP prioritário",
      "3 workspaces Lovable",
      "Atualizações premium ilimitadas",
      "Templates exclusivos",
    ],
    highlight: true,
    waMessage:
      "Olá! Quero ativar o plano *Pro Elite* da Vorax Lovable (R$ 89/mês) com economia de 70% e suporte VIP. Como faço para começar?",
  },
  {
    name: "Studio",
    price: "R$ 189",
    period: "/mês",
    badge: "Para agências",
    features: [
      "Workspaces ilimitados",
      "Gerente de conta dedicado",
      "SLA e suporte 24/7",
      "White-label opcional",
    ],
    highlight: false,
    waMessage:
      "Olá! Tenho uma agência e quero contratar o plano *Studio* da Vorax Lovable (R$ 189/mês). Gostaria de falar com um consultor.",
  },
];

export type ComparisonRow = { label: string; values: (string | boolean)[] };

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Economia em créditos", values: ["Até 40%", "Até 70%", "Até 70%"] },
  { label: "Workspaces Lovable", values: ["1", "3", "Ilimitados"] },
  { label: "Suporte", values: ["Comunidade", "VIP prioritário", "24/7 dedicado"] },
  { label: "Templates exclusivos", values: [false, true, true] },
  { label: "SLA garantido", values: [false, false, true] },
  { label: "White-label", values: [false, false, "Opcional"] },
  { label: "Gerente de conta", values: [false, false, true] },
  { label: "Teste grátis", values: ["3 dias", "3 dias", "3 dias"] },
];

export const FAQ_ITEMS = [
  {
    q: "Como funciona a economia de 70%?",
    a: "A extensão otimiza automaticamente o uso de créditos no seu workspace Lovable, reaproveitando contexto e evitando chamadas redundantes.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Não há fidelidade. Você cancela em um clique dentro do painel.",
  },
  {
    q: "O teste grátis exige cartão?",
    a: "Não. Ative os 3 dias grátis sem informar cartão de crédito.",
  },
  {
    q: "Preciso reinstalar a cada atualização?",
    a: "Não. A extensão se atualiza automaticamente em background.",
  },
] as const;
