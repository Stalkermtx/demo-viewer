import { memo } from "react";
import { EXTENSION_FILENAME, FEATURES, STATS, STEPS } from "@/lib/landing-data";
import { EXTENSION_URL, type ExtensionDownloadHandler } from "@/hooks/use-extension-download";
import { GradientValue, SectionHeading, WhatsAppCta } from "./ui";

export const Hero = memo(function Hero({ onDownload }: { onDownload: ExtensionDownloadHandler }) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative z-10 mx-auto max-w-5xl px-5 pt-12 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-24"
    >
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        Nova versão 3.0 disponível
      </div>

      <h1
        id="hero-title"
        className="mx-auto max-w-4xl text-balance bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-4xl font-bold leading-[1.08] tracking-tight text-transparent sm:text-6xl lg:text-7xl"
      >
        Domine o Lovable com{" "}
        <span className="bg-gradient-to-r from-violet-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
          Economia de Elite
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
        A Extensão Vorax Lovable turbina seu workspace Lovable com economia real de até{" "}
        <span className="font-semibold text-white">70%</span>. Ative planos premium, suporte VIP e teste
        grátis imediato.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <WhatsAppCta message="Olá! Vim pela landing da Vorax Lovable e quero começar meu teste grátis agora. 🚀">
          Começar teste grátis →
        </WhatsAppCta>
        <a
          href={EXTENSION_URL}
          onClick={onDownload}
          download={EXTENSION_FILENAME}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-base font-semibold text-white/90 backdrop-blur transition hover:scale-[1.03] hover:bg-white/20"
        >
          ⬇️ Baixar extensão
        </a>
        <a
          href="#recursos"
          className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
        >
          Ver recursos
        </a>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12">
        {STATS.map((s) => (
          <div key={s.v} className="text-center">
            <GradientValue className="text-3xl sm:text-4xl">{s.k}</GradientValue>
            <div className="mt-1 text-xs text-white/60 sm:text-sm">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
});

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section id="recursos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Recursos" title="Tudo que você precisa para escalar" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
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
  );
});

export const HowItWorks = memo(function HowItWorks() {
  return (
    <section id="como-funciona" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Como funciona"
        title="Comece a economizar em 3 passos"
        subtitle="Simples, rápido e sem complicação. Em menos de 2 minutos você está economizando."
      />

      <div className="relative grid gap-6 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent md:block"
        />
        {STEPS.map((s) => (
          <div
            key={s.step}
            className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06]"
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
        <WhatsAppCta message="Olá! Já entendi como funciona a Vorax Lovable e quero começar agora. Como faço o passo a passo?">
          Quero começar agora →
        </WhatsAppCta>
      </div>
    </section>
  );
});
