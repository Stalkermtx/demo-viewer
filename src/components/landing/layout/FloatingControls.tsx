import { memo, useEffect, useState } from "react";

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
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

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
      {deferredPrompt && (
        <button
          type="button"
          onClick={handleInstallClick}
          className={`${TOGGLE_CLASS} bottom-24 left-[8rem] sm:bottom-6 sm:left-[8.5rem] bg-brand-gradient text-white border-none`}
          title="Instalar App Android"
          aria-label="Instalar App Android"
        >
          <span aria-hidden="true" className="text-sm">📲</span>
        </button>
      )}
    </>
  );
});
