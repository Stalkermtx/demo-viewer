import { memo } from "react";
import { COMPARISON_ROWS } from "@/lib/landing";

function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-pink-500 text-xs text-white">
        ✓
      </span>
    );
  }
  if (value === false) return <span className="text-white/30">—</span>;
  return <>{value}</>;
}

export const ComparisonTable = memo(function ComparisonTable() {
  return (
    <section id="comparativo" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <SectionHeadingLazy />

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
                    <CellValue value={v} />
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

function SectionHeadingLazy() {
  const { SectionHeading } = require("../ui") as typeof import("../ui");
  return <SectionHeading eyebrow="Comparativo" title="Compare os planos lado a lado" className="mb-10" />;
}
