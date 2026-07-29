import { memo } from "react";
import { STATS, WA_MESSAGES } from "@/lib/landing";
import type { ExtensionDownloadHandler } from "@/hooks/use-extension-download";
import { DownloadLink, GradientValue, WhatsAppCta } from "../ui";

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
        <WhatsAppCta message={WA_MESSAGES.heroTrial}>Começar teste grátis →</WhatsAppCta>
        <DownloadLink
          onDownload={onDownload}
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-3.5 text-base font-semibold text-white/90 backdrop-blur transition hover:scale-[1.03] hover:bg-white/20"
        >
          ⬇️ Baixar extensão
        </DownloadLink>
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
