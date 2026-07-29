import { memo } from "react";
import { FEATURES } from "@/lib/landing";
import { SectionHeading } from "../ui";

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
