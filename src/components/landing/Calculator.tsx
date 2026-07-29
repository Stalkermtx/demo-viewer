import { memo, useMemo, useState } from "react";
import { SAVINGS_RATE, SPEND_MAX, SPEND_MIN, clampSpend, formatBRL, wa } from "@/lib/landing-data";
import { GradientValue, SectionHeading } from "./ui";

export const Calculator = memo(function Calculator() {
  const [spend, setSpend] = useState(200);

  const { safeSpend, savings, yearly } = useMemo(() => {
    const s = clampSpend(spend);
    const monthly = Math.round(s * SAVINGS_RATE);
    return { safeSpend: s, savings: monthly, yearly: monthly * 12 };
  }, [spend]);

  return (
    <section id="calculadora" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Calculadora"
        title="Quanto você economizaria?"
        subtitle="Arraste o valor que você gasta hoje no Lovable e veja o quanto sobra no bolso com a Vorax."
        className="mb-10"
      />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur sm:p-10">
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="spend" className="text-sm font-semibold text-white/70">
            Gasto mensal atual
          </label>
          <GradientValue className="text-3xl sm:text-4xl">R$ {formatBRL(safeSpend)}</GradientValue>
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
          <span>R$ {formatBRL(SPEND_MIN)}</span>
          <span>R$ {formatBRL(SPEND_MAX)}</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Economia mensal
            </div>
            <GradientValue className="mt-2 block text-4xl sm:text-5xl">
              R$ {formatBRL(savings)}
            </GradientValue>
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
              `Olá! Simulei na calculadora da Vorax Lovable: gasto atual R$ ${formatBRL(safeSpend)}/mês, economia de R$ ${formatBRL(savings)}/mês (R$ ${formatBRL(yearly)}/ano). Quero começar a economizar!`,
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
  );
});
