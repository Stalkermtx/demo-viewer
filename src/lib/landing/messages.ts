import { formatBRL } from "./savings";

/** Mensagens de WhatsApp centralizadas por contexto de CTA. */
export const WA_MESSAGES = {
  headerTrial:
    "Olá! Quero começar o teste grátis de 3 dias da Vorax Lovable. Podem me enviar as instruções?",
  mobileTrial: "Olá! Quero ativar meu teste grátis de 3 dias da Vorax Lovable. 💸",
  heroTrial: "Olá! Vim pela landing da Vorax Lovable e quero começar meu teste grátis agora. 🚀",
  howItWorks:
    "Olá! Já entendi como funciona a Vorax Lovable e quero começar agora. Como faço o passo a passo?",
  finalCta: "Olá! Estou pronto para ativar meu teste grátis da Vorax Lovable. Bora começar? 💸",
  calculator: (spend: number, monthly: number, yearly: number) =>
    `Olá! Simulei na calculadora da Vorax Lovable: gasto atual R$ ${formatBRL(spend)}/mês, economia de R$ ${formatBRL(monthly)}/mês (R$ ${formatBRL(yearly)}/ano). Quero começar a economizar!`,
} as const;
