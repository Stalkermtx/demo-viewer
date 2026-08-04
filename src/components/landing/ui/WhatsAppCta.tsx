import { memo } from "react";
import { wa } from "@/lib/landing";

export type CtaVariant = "gradient" | "outline" | "soft";

const BASE =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none active:scale-95";

export const CTA_VARIANTS: Record<CtaVariant, string> = {
  gradient:
    "bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500 text-white shadow-[0_10px_40px_-10px_rgba(236,72,153,0.7)] hover:scale-[1.03] hover:shadow-[0_15px_50px_-10px_rgba(236,72,153,0.8)]",
  outline: "border border-white/15 text-white/90 backdrop-blur-md hover:bg-white/10 hover:border-white/25",
  soft: "border border-white/15 bg-white/10 text-white/90 backdrop-blur-md hover:bg-white/20 hover:scale-[1.03] hover:border-white/25",
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
  variant?: CtaVariant;
  className?: string;
}) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${BASE} ${CTA_VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
});
