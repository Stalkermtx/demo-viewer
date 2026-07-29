import { memo } from "react";
import { WA_MESSAGES } from "@/lib/landing";
import { WhatsAppCta } from "../ui";

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
        <WhatsAppCta message={WA_MESSAGES.finalCta} className="mt-8 px-10 py-4 text-base">
          Ativar teste grátis →
        </WhatsAppCta>
      </div>
    </section>
  );
});
