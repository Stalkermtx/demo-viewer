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
      <div className="inline-block rounded-full bg-pink-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-pink-400 border border-pink-500/20">
        {eyebrow}
      </div>
      <h2 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{subtitle}</p>}
    </div>
  );
});
