import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MoneyRain } from "@/components/MoneyRain";
import ogImage from "@/assets/og-primo-tech.jpg";
import extensionAsset from "@/assets/vorax-extension.zip.asset.json";

const OG_IMAGE_URL = `https://demo-viewer.lovable.app${ogImage}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vorax Lovable — Domine o Lovable com Economia de Elite" },
      {
        name: "description",
        content:
          "A Extensão Vorax Lovable turbina seu workspace Lovable com economia real de até 70%. Ative planos premium, suporte VIP e teste grátis imediato.",
      },
      { property: "og:title", content: "Vorax Lovable — Domine o Lovable com Economia de Elite" },
      {
        property: "og:description",
        content:
          "A Extensão Vorax Lovable turbina seu workspace Lovable com economia real de até 70%. Ative planos premium, suporte VIP e teste grátis imediato.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vorax Lovable" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
  }),
  component: PrimoTechLanding,
});

const heartPath =
  "M12 21s-7.5-4.6-9.5-9.1C1 8.5 3 5 6.5 5c2 0 3.6 1.1 4.5 2.7C11.9 6.1 13.5 5 15.5 5 19 5 21 8.5 21.5 11.9 19.5 16.4 12 21 12 21z";

function Heart({
  size,
  className,
  style,
}: {
  size: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="url(#primo-heart-grad)"
      className={className}
      style={{ filter: "drop-shadow(0 0 10px rgba(236,72,153,0.35))", ...style }}
    >
      <path d={heartPath} />
    </svg>
  );
}

const WHATSAPP_NUMBER = "5565992203318";
const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const SPEND_MIN = 20;
const SPEND_MAX = 2000;
const clampSpend = (n: number) => {
  if (!Number.isFinite(n)) return SPEND_MIN;
  return Math.min(SPEND_MAX, Math.max(SPEND_MIN, Math.round(n)));
};
// Locale-stable currency formatting (avoids SSR/CSR hydration mismatch on Workers)
const formatBRL = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

function PrimoTechLanding() {
  const [muted, setMuted] = useState(true);
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [spend, setSpend] = useState(200);
  const safeSpend = clampSpend(spend);
  const savings = Math.round(safeSpend * 0.7);
  const yearly = savings * 12;

  const downloadExtension = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(extensionAsset.url, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Download indisponível: ${response.status}`);
      }

      const blob = await response.blob();
      if (blob.size === 0) {
        throw new Error("Arquivo de extensão vazio");
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "vorax-extension.zip";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      console.error("Falha ao baixar a extensão Vorax Lovable", error);
      window.open(extensionAsset.url, "_blank", "noopener,noreferrer");
    }
  };






  const plans = [
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


  const features = [
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
  ];

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${light ? "vorax-light" : "bg-[#050505] text-white"}`}>
      <MoneyRain />

      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="primo-heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="55%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 15% 10%, rgba(124,58,237,0.25), transparent 60%),radial-gradient(ellipse 70% 55% at 90% 20%, rgba(236,72,153,0.20), transparent 65%),radial-gradient(ellipse 90% 65% at 50% 110%, rgba(56,189,248,0.16), transparent 70%),radial-gradient(ellipse 60% 50% at 80% 85%, rgba(249,115,22,0.14), transparent 65%)",
          }}
        />
        <div className="absolute -top-40 -left-40 h-[50vh] w-[50vh] rounded-full bg-fuchsia-600/15 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[50vh] w-[50vh] rounded-full bg-orange-500/15 blur-[120px] animate-pulse [animation-delay:2s]" />

        {/* Floating hearts */}
        <Heart size={28} className="absolute top-[12%] left-[8%] animate-bounce [animation-duration:6s]" />
        <Heart size={20} className="absolute top-[22%] right-[12%] animate-bounce [animation-duration:7s] [animation-delay:1s]" />
        <Heart size={36} className="absolute top-[55%] left-[6%] animate-bounce [animation-duration:8s] [animation-delay:2s]" />
        <Heart size={16} className="absolute top-[70%] right-[8%] animate-bounce [animation-duration:5s] [animation-delay:0.5s]" />
        <Heart size={24} className="absolute top-[38%] right-[30%] animate-bounce [animation-duration:9s] [animation-delay:3s]" />
        <Heart size={32} className="absolute bottom-[10%] left-[35%] animate-bounce [animation-duration:7.5s] [animation-delay:1.5s]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />
      </div>

      {/* Skip link */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Pular para o conteúdo
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <a href="/" className="flex min-w-0 items-center gap-2" aria-label="Vorax Lovable — início">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-pink-500 to-orange-500 font-black">
              V
            </div>
            <span className="truncate text-base font-bold tracking-tight sm:text-lg">Vorax Lovable</span>
          </a>

          <div className="flex items-center gap-2">
            <nav aria-label="Principal" className="hidden gap-7 text-sm text-white/70 lg:flex">
              <a href="#recursos" className="transition hover:text-white">Recursos</a>
              <a href="#como-funciona" className="transition hover:text-white">Como funciona</a>
              <a href={extensionAsset.url} onClick={downloadExtension} download="vorax-extension.zip" className="transition hover:text-white">Download</a>
              <a href="#planos" className="transition hover:text-white">Planos</a>
              <a href="#faq" className="transition hover:text-white">FAQ</a>
            </nav>
            <a
              href={wa("Olá! Quero começar o teste grátis de 3 dias da Vorax Lovable. Podem me enviar as instruções?")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center rounded-full bg-white/10 px-5 text-sm font-semibold backdrop-blur transition hover:bg-white/20 sm:inline-flex"
            >
              Testar grátis
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 lg:hidden"
            >
              <span aria-hidden="true" className="text-lg">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="menu-mobile"
            aria-label="Menu mobile"
            className="border-t border-white/5 bg-black/70 px-4 py-3 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col text-sm text-white/80">
              {[
                { href: "#recursos", label: "Recursos" },
                { href: "#como-funciona", label: "Como funciona" },
                { href: "#calculadora", label: "Calculadora" },
                { href: "#planos", label: "Planos" },
                { href: "#comparativo", label: "Comparativo" },
                { href: "#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-11 items-center rounded-lg px-2 transition hover:bg-white/10 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={extensionAsset.url}
                  download="vorax-extension.zip"
                  onClick={(e) => {
                    setMenuOpen(false);
                    void downloadExtension(e);
                  }}
                  className="flex min-h-11 items-center rounded-lg px-2 transition hover:bg-white/10 hover:text-white"
                >
                  Baixar extensão
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main id="conteudo">
      {/* Hero */}
      <section aria-labelledby="hero-title" className="relative z-10 mx-auto max-w-5xl px-5 pt-12 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-24">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">

          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Nova versão 3.0 disponível
        </div>
        <h1 id="hero-title" className="mx-auto max-w-4xl text-balance bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-4xl font-bold leading-[1.08] tracking-tight text-transparent sm:text-6xl lg:text-7xl">
          Domine o Lovable com{" "}
          <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Economia de Elite
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
          A Extensão Vorax Lovable turbina seu workspace Lovable com economia real de até{" "}
          <span className="font-semibold text-white">70%</span>. Ative planos premium, suporte VIP e teste grátis imediato.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={wa("Olá! Vim pela landing da Vorax Lovable e quero começar meu teste grátis agora. 🚀")}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] transition hover:scale-[1.03]"
          >

            <span className="relative z-10">Começar teste grátis →</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
          <a
            href={extensionAsset.url}
            onClick={downloadExtension}
            download="vorax-extension.zip"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/20 hover:scale-[1.03]"
          >
            <span className="relative z-10">⬇️ Baixar extensão</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
          <a
            href="#recursos"
            className="rounded-full border border-white/15 px-8 py-3.5 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Ver recursos
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12">
          {[
            { k: "70%", v: "Economia média" },
            { k: "12k+", v: "Devs ativos" },
            { k: "4.9★", v: "Avaliação" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="bg-gradient-to-br from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="recursos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">Recursos</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Tudo que você precisa para escalar</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-600/40 to-pink-500/40 text-2xl">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">Como funciona</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Comece a economizar em 3 passos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Simples, rápido e sem complicação. Em menos de 2 minutos você está economizando.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-3">
          {/* Linha conectora (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent md:block"
          />

          {[
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
          ].map((s) => (
            <div
              key={s.step}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="relative mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 via-pink-500 to-orange-500 text-3xl shadow-[0_10px_30px_-10px_rgba(236,72,153,0.6)]">
                {s.icon}
                <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-[#050505] text-xs font-bold text-white/90">
                  {s.step}
                </span>
              </div>
              <h3 className="text-center text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={wa("Olá! Já entendi como funciona a Vorax Lovable e quero começar agora. Como faço o passo a passo?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] transition hover:scale-[1.03]"
          >
            Quero começar agora →
          </a>

        </div>
      </section>

      {/* Calculadora */}
      <section id="calculadora" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">Calculadora</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Quanto você economizaria?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Arraste o valor que você gasta hoje no Lovable e veja o quanto sobra no bolso com a Vorax.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
          <div className="flex items-baseline justify-between">
            <label htmlFor="spend" className="text-sm font-semibold text-white/70">
              Gasto mensal atual
            </label>
            <div className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              R$ {formatBRL(safeSpend)}
            </div>
          </div>
          <input
            id="spend"
            type="range"
            min={SPEND_MIN}
            max={SPEND_MAX}
            step={10}
            value={safeSpend}
            onChange={(e) => setSpend(clampSpend(Number(e.target.value)))}
            className="mt-4 w-full accent-pink-500"
            aria-label="Gasto mensal no Lovable em reais"
          />
          <div className="mt-2 flex justify-between text-xs text-white/50">
            <span>R$ 20</span>
            <span>R$ 2.000</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Economia mensal
              </div>
              <div className="mt-2 bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                R$ {formatBRL(savings)}
              </div>
              <div className="mt-1 text-xs text-white/50">com desconto de 70%</div>
            </div>
            <div className="rounded-2xl border border-transparent bg-gradient-to-br from-violet-600/25 via-pink-500/15 to-orange-500/20 p-6 text-center shadow-[0_10px_40px_-15px_rgba(236,72,153,0.6)]">
              <div className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Economia anual
              </div>
              <div className="mt-2 bg-gradient-to-r from-violet-300 via-pink-300 to-orange-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                R$ {formatBRL(yearly)}
              </div>
              <div className="mt-1 text-xs text-white/70">no seu bolso todo ano 💸</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={wa(
                `Olá! Simulei na calculadora da Vorax Lovable: gasto atual R$ ${formatBRL(safeSpend)}/mês, economia de R$ ${formatBRL(savings)}/mês (R$ ${formatBRL(
                  yearly,
                )}/ano). Quero começar a economizar!`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] transition hover:scale-[1.03]"
            >
              Quero economizar isso →
            </a>

          </div>
        </div>
      </section>

      {/* Pricing */}

      <section id="planos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">Planos</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Escolha o seu nível de elite</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Cancele quando quiser. Sem fidelidade. Teste 3 dias sem custo.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`plan-card relative rounded-3xl border p-8 backdrop-blur ${
                p.highlight
                  ? "border-transparent bg-gradient-to-b from-violet-600/20 via-pink-500/10 to-orange-500/10 shadow-[0_20px_60px_-20px_rgba(236,72,153,0.5)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}

            >
              {p.highlight && (
                <div className="absolute inset-x-0 -top-3 mx-auto w-fit rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                  {p.badge}
                </div>
              )}
              <div className="text-sm font-semibold text-white/70">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">{p.price}</span>
                <span className="text-white/50">{p.period}</span>
              </div>
              {!p.highlight && <div className="mt-2 text-xs text-white/50">{p.badge}</div>}
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/80">
                    <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-[10px]">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={wa(p.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white hover:scale-[1.02]"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Ativar agora
              </a>

            </div>
          ))}
        </div>
      </section>

      {/* Comparativo */}
      <section id="comparativo" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">Comparativo</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Compare os planos lado a lado
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Comparativo de recursos entre os planos Starter, Pro Elite e Studio</caption>
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-white/50">
                <th scope="col" className="p-5 font-semibold">Recurso</th>
                <th scope="col" className="p-5 font-semibold text-center">Starter</th>
                <th scope="col" className="p-5 font-semibold text-center">
                  <span className="inline-flex items-center gap-2">
                    <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                      Pro Elite
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                      TOP
                    </span>
                  </span>
                </th>
                <th scope="col" className="p-5 font-semibold text-center">Studio</th>
              </tr>
            </thead>
            <tbody className="text-white/80">
              {[
                { label: "Economia em créditos", values: ["Até 40%", "Até 70%", "Até 70%"] },
                { label: "Workspaces Lovable", values: ["1", "3", "Ilimitados"] },
                { label: "Suporte", values: ["Comunidade", "VIP prioritário", "24/7 dedicado"] },
                { label: "Templates exclusivos", values: [false, true, true] },
                { label: "SLA garantido", values: [false, false, true] },
                { label: "White-label", values: [false, false, "Opcional"] },
                { label: "Gerente de conta", values: [false, false, true] },
                { label: "Teste grátis", values: ["3 dias", "3 dias", "3 dias"] },
              ].map((row, i) => (
                <tr key={row.label} className={i % 2 ? "bg-white/[0.02]" : ""}>
                  <th scope="row" className="p-4 text-left font-medium text-white/90">{row.label}</th>
                  {row.values.map((v, idx) => (
                    <td
                      key={idx}
                      className={`p-4 text-center ${idx === 1 ? "bg-gradient-to-b from-pink-500/5 to-violet-500/5" : ""}`}
                    >
                      {v === true ? (
                        <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xs text-white">✓</span>
                      ) : v === false ? (
                        <span className="text-white/30">—</span>
                      ) : (
                        v
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}

      <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">Dúvidas</div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Perguntas frequentes</h2>
        </div>
        <div className="space-y-3">
          {[
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
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {item.q}
                <span className="transition group-open:rotate-45 text-2xl text-white/50">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/60">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-pink-500/10 to-orange-500/20 p-10 text-center backdrop-blur sm:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Pronto para economizar de verdade?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Ative agora e comece a testar em menos de 2 minutos. Sem cartão. Sem enrolação.
          </p>
          <a
            href={wa("Olá! Estou pronto para ativar meu teste grátis da Vorax Lovable. Bora começar? 💸")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-10 py-4 font-semibold shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] transition hover:scale-105"
          >
            Ativar teste grátis →
          </a>

        </div>
      </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 pb-28 pt-10 text-center text-sm text-white/40 sm:pb-10">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Vorax Lovable. Todos os direitos reservados.
      </footer>

      {/* CTA fixo no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-xl sm:hidden">
        <div className="flex items-center gap-3 pb-3">
          <a
            href={wa("Olá! Quero ativar meu teste grátis de 3 dias da Vorax Lovable. 💸")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.7)]"
          >
            Testar grátis
          </a>
          <a
            href={extensionAsset.url}
            download="vorax-extension.zip"
            onClick={downloadExtension}
            className="flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white"
          >
            Baixar
          </a>
        </div>
      </div>

      {/* Mute button */}
      <button
        type="button"
        onClick={() => setMuted((m) => !m)}
        aria-pressed={!muted}
        className="fixed bottom-24 left-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/60 backdrop-blur transition hover:scale-110 hover:bg-white/10 sm:bottom-6 sm:left-6"
        title={muted ? "Ativar sons" : "Desativar sons"}
        aria-label="Alternar sons"
      >
        <span aria-hidden="true" className="text-sm">{muted ? "🔇" : "🔊"}</span>
      </button>

      {/* Theme toggle */}
      <button
        type="button"
        onClick={() => setLight((l) => !l)}
        aria-pressed={light}
        className="fixed bottom-24 left-[4.5rem] z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/60 backdrop-blur transition hover:scale-110 hover:bg-white/10 sm:bottom-6 sm:left-20"
        title={light ? "Modo escuro" : "Modo claro"}
        aria-label="Alternar tema"
      >
        <span aria-hidden="true" className="text-sm">{light ? "🌙" : "☀️"}</span>
      </button>


    </div>
  );
}
