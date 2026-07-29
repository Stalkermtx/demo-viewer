import { memo } from "react";
import { COMPARISON_ROWS, FAQ_ITEMS, PLANS } from "@/lib/landing-data";
import { SectionHeading, WhatsAppCta } from "./ui";

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
          <div
            key={p.name}
            className={`plan-card relative rounded-3xl border p-8 backdrop-blur ${
              p.highlight
                ? "border-transparent bg-gradient-to-b from-violet-600/20 via-pink-500/10 to-orange-500/10 shadow-[0_20px_60px_-20px_rgba(236,72,153,0.5)]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20"
            }`}
          >
            {p.highlight && (
              <div className="absolute inset-x-0 -top-3 mx-auto w-fit rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wider">
                {p.badge}
              </div>
            )}
            <div className="text-sm font-semibold text-white/70">{p.name}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">{p.price}</span>
              <span className="text-white/50">{p.period}</span>
            </div>
            {!p.highlight && <div className="mt-2 text-xs text-white/50">{p.badge}</div>}
            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-white/80">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-[10px]">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <WhatsAppCta
              message={p.waMessage}
              variant={p.highlight ? "gradient" : "outline"}
              className={`mt-8 w-full py-3 text-sm ${p.highlight ? "" : "bg-white/5"}`}
            >
              Ativar agora
            </WhatsAppCta>
          </div>
        ))}
      </div>
    </section>
  );
});

export const ComparisonTable = memo(function ComparisonTable() {
  return (
    <section id="comparativo" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Comparativo" title="Compare os planos lado a lado" className="mb-10" />

      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
        <table className="w-full min-w-[640px] text-left text-sm">
          <caption className="sr-only">
            Comparativo de recursos entre os planos Starter, Pro Elite e Studio
          </caption>
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-white/50">
              <th scope="col" className="p-5 font-semibold">Recurso</th>
              <th scope="col" className="p-5 text-center font-semibold">Starter</th>
              <th scope="col" className="p-5 text-center font-semibold">
                <span className="inline-flex items-center gap-2">
                  <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Pro Elite
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    TOP
                  </span>
                </span>
              </th>
              <th scope="col" className="p-5 text-center font-semibold">Studio</th>
            </tr>
          </thead>
          <tbody className="text-white/80">
            {COMPARISON_ROWS.map((row, i) => (
              <tr key={row.label} className={i % 2 ? "bg-white/[0.02]" : ""}>
                <th scope="row" className="p-4 text-left font-medium text-white/90">
                  {row.label}
                </th>
                {row.values.map((v, idx) => (
                  <td
                    key={`${row.label}-${idx}`}
                    className={`p-4 text-center ${idx === 1 ? "bg-gradient-to-b from-pink-500/5 to-violet-500/5" : ""}`}
                  >
                    {v === true ? (
                      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xs text-white">
                        ✓
                      </span>
                    ) : v === false ? (
                      <span className="text-white/30">—</span>
                    ) : (
                      v
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
});

export const Faq = memo(function Faq() {
  return (
    <section id="faq" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" className="mb-10" />
      <div className="space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-white/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
              {item.q}
              <span aria-hidden="true" className="text-2xl text-white/50 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-white/60">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
});

export const FinalCta = memo(function FinalCta() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-pink-500/10 to-orange-500/20 p-10 text-center backdrop-blur sm:p-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Pronto para economizar de verdade?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Ative agora e comece a testar em menos de 2 minutos. Sem cartão. Sem enrolação.
        </p>
        <WhatsAppCta
          message="Olá! Estou pronto para ativar meu teste grátis da Vorax Lovable. Bora começar? 💸"
          className="mt-8 px-10 py-4 text-base"
        >
          Ativar teste grátis →
        </WhatsAppCta>
      </div>
    </section>
  );
});
