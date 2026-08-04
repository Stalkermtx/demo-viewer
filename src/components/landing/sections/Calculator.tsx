import { memo, useMemo, useState } from "react";
import {
  SPEND_MAX,
  SPEND_MIN,
  WA_MESSAGES,
  calcSavings,
  clampSpend,
  formatBRL,
  wa,
} from "@/lib/landing";
import { GradientValue, SectionHeading } from "../ui";

export const Calculator = memo(function Calculator() {
  const [spend, setSpend] = useState(200);
  const { safeSpend, monthly, yearly } = useMemo(() => calcSavings(spend), [spend]);

  return (
    <section id="calculadora" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Calculadora"
        title="Quanto você economizaria?"
        subtitle="Arraste o valor que você gasta hoje no Lovable e veja o quanto sobra no bolso com a Vorax."
        className="mb-10"
      />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-12 shadow-[0_0_100px_-20px_rgba(124,58,237,0.15)]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <label htmlFor="spend" className="text-sm font-semibold text-white/70 uppercase tracking-widest">
            Gasto mensal atual
          </label>
          <GradientValue className="text-4xl sm:text-5xl">R$ {formatBRL(safeSpend)}</GradientValue>
        </div>

        <div className="group relative mt-8">
          <input
            id="spend"
            type="range"
            min={SPEND_MIN}
            max={SPEND_MAX}
            step={10}
            value={safeSpend}
            onChange={(e) => setSpend(clampSpend(Number(e.target.value)))}
            className="w-full h-2 rounded-full appearance-none bg-white/10 accent-pink-500 cursor-pointer transition-all hover:bg-white/15"
            aria-label="Gasto mensal no Lovable em reais"
          />
          <div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-tighter text-white/40">
            <span>R$ {formatBRL(SPEND_MIN)}</span>
            <span>R$ {formatBRL(SPEND_MAX)}</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-center transition-all duration-300 hover:bg-black/60 hover:border-white/20">
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              Economia mensal
            </div>
            <GradientValue className="mt-3 block text-4xl sm:text-5xl">
              R$ {formatBRL(monthly)}
            </GradientValue>
            <div className="mt-2 text-xs text-white/50">com otimização inteligente</div>
          </div>
          <div className="group relative overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br from-violet-600/30 via-pink-500/20 to-orange-500/20 p-8 text-center shadow-[0_20px_60px_-15px_rgba(236,72,153,0.5)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_80px_-15px_rgba(236,72,153,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-white/70">
              Economia anual
            </div>
            <div className="relative z-10 mt-3 bg-gradient-to-r from-violet-300 via-pink-300 to-orange-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
              R$ {formatBRL(yearly)}
            </div>
            <div className="relative z-10 mt-2 text-xs font-medium text-white/80">no seu bolso todo ano 💸</div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <WhatsAppCta 
            message={WA_MESSAGES.calculator(safeSpend, monthly, yearly)}
            className="px-12 py-4 text-base"
          >
            Quero economizar isso →
          </WhatsAppCta>
        </div>
      </div>
    </section>
  );
});
