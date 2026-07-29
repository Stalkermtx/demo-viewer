import { memo } from "react";

/** Cabeçalho padrão de seção (eyebrow + título + subtítulo opcional). */
export const SectionHeading = memo(function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "mb-14",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-xs font-semibold uppercase tracking-widest text-pink-400">{eyebrow}</div>
      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-white/60">{subtitle}</p>}
    </div>
  );
});
