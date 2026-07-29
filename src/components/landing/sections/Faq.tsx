import { memo } from "react";
import { FAQ_ITEMS } from "@/lib/landing";
import { SectionHeading } from "../ui";

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
