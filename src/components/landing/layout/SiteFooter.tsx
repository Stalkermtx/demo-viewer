import { memo } from "react";

export const SiteFooter = memo(function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 pb-28 pt-10 text-center text-sm text-white/40 sm:pb-10">
      © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Vorax Lovable. Todos os
      direitos reservados.
    </footer>
  );
});
