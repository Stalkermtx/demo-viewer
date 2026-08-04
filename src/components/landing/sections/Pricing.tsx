import { memo } from "react";
import { PLANS } from "@/lib/landing";
import type { Plan } from "@/lib/landing";
import { SectionHeading, WhatsAppCta } from "../ui";

const PlanCard = memo(function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`plan-card group relative rounded-3xl border p-8 backdrop-blur-xl ${
        plan.highlight
          ? "border-pink-500/30 bg-white/[0.05] ring-1 ring-pink-500/20"
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      }`}
    >
      {plan.badge && (
        <div className={`absolute inset-x-0 -top-3 mx-auto w-fit rounded-full px-4 py-1 text-[10px] font-bold uppercase tracking-wider shadow-lg ${
          plan.highlight 
            ? "bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white" 
            : "bg-white/10 text-white/80 border border-white/10 backdrop-blur-md"
        }`}>
          {plan.badge}
        </div>
      )}
      <div className="text-sm font-semibold text-white/70 uppercase tracking-widest">{plan.name}</div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tight text-white">{plan.price}</span>
        <span className="text-white/50">{plan.period}</span>
      </div>
      
      <ul className="mt-8 space-y-4 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-white/80">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pink-500/10 text-pink-400 text-[10px]">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <WhatsAppCta
        message={plan.waMessage}
        variant={plan.highlight ? "gradient" : "outline"}
        className={`mt-10 w-full py-3.5 text-sm transition-all duration-300 ${plan.highlight ? "" : "bg-white/5 hover:bg-white/10"}`}
      >
        Selecionar {plan.name}
      </WhatsAppCta>
    </div>
  );
});

export const Pricing = memo(function Pricing() {
  return (
    <section id="planos" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <SectionHeading
        eyebrow="Planos"
        title="Escolha o seu nível de elite"
        subtitle="Cancele quando quiser. Sem fidelidade. Teste 3 dias sem custo."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {PLANS.map((p) => (
          <PlanCard key={p.name} plan={p} />
        ))}
      </div>
    </section>
  );
});
