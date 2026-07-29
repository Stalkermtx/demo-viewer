import { memo } from "react";
import { EXTENSION_FILENAME } from "@/lib/landing-data";
import { EXTENSION_URL, type ExtensionDownloadHandler } from "@/hooks/use-extension-download";
import { WhatsAppCta } from "./ui";

export const MobileCtaBar = memo(function MobileCtaBar({
  onDownload,
}: {
  onDownload: ExtensionDownloadHandler;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-xl sm:hidden">
      <div className="flex items-center gap-3 pb-3">
        <WhatsAppCta
          message="Olá! Quero ativar meu teste grátis de 3 dias da Vorax Lovable. 💸"
          className="min-h-12 flex-1 px-5 text-sm"
        >
          Testar grátis
        </WhatsAppCta>
        <a
          href={EXTENSION_URL}
          download={EXTENSION_FILENAME}
          onClick={onDownload}
          className="flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white"
        >
          Baixar
        </a>
      </div>
    </div>
  );
});

const TOGGLE_CLASS =
  "fixed z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/60 backdrop-blur transition hover:scale-110 hover:bg-white/10";

export const FloatingControls = memo(function FloatingControls({
  muted,
  onToggleMute,
  light,
  onToggleTheme,
}: {
  muted: boolean;
  onToggleMute: () => void;
  light: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <>
      <button
        type="button"
        onClick={onToggleMute}
        aria-pressed={!muted}
        className={`${TOGGLE_CLASS} bottom-24 left-4 sm:bottom-6 sm:left-6`}
        title={muted ? "Ativar sons" : "Desativar sons"}
        aria-label="Alternar sons"
      >
        <span aria-hidden="true" className="text-sm">{muted ? "🔇" : "🔊"}</span>
      </button>

      <button
        type="button"
        onClick={onToggleTheme}
        aria-pressed={light}
        className={`${TOGGLE_CLASS} bottom-24 left-[4.5rem] sm:bottom-6 sm:left-20`}
        title={light ? "Modo escuro" : "Modo claro"}
        aria-label="Alternar tema"
      >
        <span aria-hidden="true" className="text-sm">{light ? "🌙" : "☀️"}</span>
      </button>
    </>
  );
});
