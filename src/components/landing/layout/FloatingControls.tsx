import { memo } from "react";

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
