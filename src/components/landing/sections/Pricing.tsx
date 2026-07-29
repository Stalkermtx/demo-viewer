import { memo } from "react";
import { PLANS } from "@/lib/landing";
import type { Plan } from "@/lib/landing";
import { SectionHeading, WhatsAppCta } from "../ui";

const PlanCard = memo(function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`plan-card relative rounded-3xl border p-8 backdrop-blur ${
        plan.highlight
          ? "border-transparent bg-gradient-to-b from-violet-600/20 via-pink-500/10 to-orange-500/10 shadow-[0_20px_60px_-20px_rgba(236,72,153,0.5)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      }`}
    >
      {plan.highlight && (
        <div className="absolute inset-x-0 -top-3 mx-auto w-fit rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">
          {plan.badge}
        </div>
      )}
      <div className="text-sm font-semibold text-white/70">{plan.name}</div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
        <span className="text-white/50">{plan.period}</span>
      </div>
      {!plan.highlight && <div className="mt-2 text-xs text-white/50">{plan.badge}</div>}
      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-white/80">
            <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-[10px]">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
      <WhatsAppCta
        message={plan.waMessage}
        variant={plan.highlight ? "gradient" : "outline"}
        className={`mt-8 w-full py-3 text-sm ${plan.highlight ? "" : "bg-white/5"}`}
      >
        Ativar agora
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
