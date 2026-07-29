import { memo } from "react";
import { STEPS, WA_MESSAGES } from "@/lib/landing";
import { SectionHeading, WhatsAppCta } from "../ui";

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
        <WhatsAppCta message={WA_MESSAGES.howItWorks}>Quero começar agora →</WhatsAppCta>
      </div>
    </section>
  );
});
