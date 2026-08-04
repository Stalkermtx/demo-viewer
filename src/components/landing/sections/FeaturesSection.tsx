import { memo } from "react";
import { FEATURES } from "@/lib/landing";
import { SectionHeading } from "../ui";

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section id="recursos" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Recursos"
        title="Tudo o que você precisa"
        subtitle="Funcionalidades desenhadas para maximizar sua produtividade e minimizar custos."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/15 backdrop-blur-sm"
          >
            <div className="absolute -right-4 -top-4 text-8xl opacity-[0.02] transition-transform duration-500 group-hover:scale-150 group-hover:rotate-12 pointer-events-none">
              {f.icon}
            </div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/10 to-pink-500/10 text-3xl shadow-inner group-hover:from-violet-500/20 group-hover:to-pink-500/20 transition-colors">
              {f.icon}
            </div>
            <h3 className="mb-3 text-lg font-bold text-white group-hover:text-pink-400 transition-colors">{f.title}</h3>
            <p className="text-sm leading-relaxed text-white/60">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
});