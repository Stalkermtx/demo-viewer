import { memo } from "react";
import { wa } from "@/lib/landing-data";

type Variant = "gradient" | "outline" | "soft";

const BASE =
  "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none";

const VARIANTS: Record<Variant, string> = {
  gradient:
    "bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] hover:scale-[1.03]",
  outline: "border border-white/15 text-white/90 backdrop-blur hover:bg-white/10",
  soft: "border border-white/15 bg-white/10 text-white/90 backdrop-blur hover:bg-white/20 hover:scale-[1.03]",
};

/** Link de CTA para o WhatsApp, reutilizado em toda a landing. */
export const WhatsAppCta = memo(function WhatsAppCta({
  message,
  children,
  variant = "gradient",
  className = "px-8 py-3.5 text-base",
}: {
  message: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
});

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

/** Valor com gradiente (usado em stats e na calculadora). */
export const GradientValue = memo(function GradientValue({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text font-bold text-transparent ${className}`}
    >
      {children}
    </span>
  );
});
