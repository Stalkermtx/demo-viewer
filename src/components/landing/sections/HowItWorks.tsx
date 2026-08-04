import { memo } from "react";
import { STEPS, WA_MESSAGES } from "@/lib/landing";
import { SectionHeading, WhatsAppCta } from "../ui";

export const HowItWorks = memo(function HowItWorks() {
  return (
    <section id="como-funciona" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Passo a passo"
        title="Simples como deve ser"
        subtitle="Em menos de 2 minutos você já estará economizando créditos no seu workspace."
      />

      <div className="relative mt-16 grid gap-12 md:grid-cols-3">
        {/* Linha conectora desktop */}
        <div 
          aria-hidden="true"
          className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" 
        />

        {STEPS.map((step) => (
          <div key={step.step} className="group relative flex flex-col items-center text-center">
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] text-4xl shadow-2xl transition-all duration-500 backdrop-blur-xl group-hover:scale-110 group-hover:border-pink-500/30 group-hover:bg-white/10">
              <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-500 text-[10px] font-black text-white shadow-lg">
                {step.step}
              </div>
              {step.icon}
            </div>
            <h3 className="mt-8 text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{step.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-[280px]">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <WhatsAppCta message={WA_MESSAGES.howItWorks} className="px-10 py-4">
          Quero começar agora →
        </WhatsAppCta>
      </div>
    </section>
  );
});