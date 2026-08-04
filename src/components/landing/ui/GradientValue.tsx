import { memo } from "react";

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
      className={`bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400 bg-clip-text font-bold text-transparent transition-all duration-300 hover:brightness-110 ${className}`}
    >
      {children}
    </span>
  );
});
