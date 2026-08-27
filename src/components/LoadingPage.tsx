import { useState, useEffect, useCallback, useRef } from "react";

type ThemeId = "matrix" | "neon" | "vaporwave" | "ocean" | "galaxy" | "minimal";

interface Theme {
  id: ThemeId;
  label: string;
  icon: string;
  bg: string;
  accent: string;
  accentAlt: string;
  textColor: string;
  subTextColor: string;
}

const THEMES: Theme[] = [
  {
    id: "matrix",
    label: "Matrix",
    icon: "01",
    bg: "#000000",
    accent: "#00ff41",
    accentAlt: "#008f11",
    textColor: "#00ff41",
    subTextColor: "#00cc33",
  },
  {
    id: "neon",
    label: "Neon",
    icon: "\u26a1",
    bg: "#0a0a1a",
    accent: "#ff006e",
    accentAlt: "#8338ec",
    textColor: "#ff006e",
    subTextColor: "#c9184a",
  },
  {
    id: "vaporwave",
    label: "Vaporwave",
    icon: "\u2615",
    bg: "#1a0a2e",
    accent: "#ff71ce",
    accentAlt: "#01cdfe",
    textColor: "#ff71ce",
    subTextColor: "#b967ff",
  },
  {
    id: "ocean",
    label: "Oceano",
    icon: "\ud83c\udf0a",
    bg: "#001220",
    accent: "#00d4ff",
    accentAlt: "#0077b6",
    textColor: "#00d4ff",
    subTextColor: "#0096c7",
  },
  {
    id: "galaxy",
    label: "Galaxia",
    icon: "\u2b50",
    bg: "#0d0221",
    accent: "#a855f7",
    accentAlt: "#6366f1",
    textColor: "#a855f7",
    subTextColor: "#7c3aed",
  },
  {
    id: "minimal",
    label: "Minimal",
    icon: "\u25cb",
    bg: "#fafafa",
    accent: "#171717",
    accentAlt: "#525252",
    textColor: "#171717",
    subTextColor: "#737373",
  },
];

interface LoadingPageProps {
  onComplete: () => void;
}

export function LoadingPage({ onComplete }: LoadingPageProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeId>("galaxy");
  const [isStarting, setIsStarting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const theme = THEMES.find((t) => t.id === selectedTheme)!;
  const isMinimal = selectedTheme === "minimal";

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [selectedTheme]);

  const startLoading = useCallback(() => {
    if (isStarting) return;
    setIsStarting(true);
    setProgress(0);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12 + 3;
        if (next >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setLoaded(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return next;
      });
    }, 120);
  }, [isStarting, onComplete]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Animated particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: isMinimal ? theme.accent : theme.accent,
              opacity: isMinimal ? 0.15 : 0.6,
              animation: `particle-float ${3 + p.delay}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
              filter: isMinimal ? "none" : `blur(${p.size > 3 ? 1 : 0}px)`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6">
        {/* Logo / Title */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className="text-6xl font-black tracking-tighter sm:text-8xl"
            style={{ color: theme.textColor }}
          >
            VORAX
          </h1>
          <p
            className="text-sm font-medium tracking-[0.3em] uppercase"
            style={{ color: theme.subTextColor }}
          >
            {isMinimal ? "Seletor de Tema" : "Escolha seu Tema"}
          </p>
        </div>

        {/* Theme grid */}
        {!isStarting && (
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTheme(t.id)}
                className="group relative flex flex-col items-center gap-2 rounded-2xl border-2 px-5 py-4 transition-all duration-300 sm:px-7 sm:py-5"
                style={{
                  borderColor:
                    selectedTheme === t.id
                      ? t.accent
                      : isMinimal
                        ? "rgba(0,0,0,0.1)"
                        : "rgba(255,255,255,0.1)",
                  backgroundColor:
                    selectedTheme === t.id
                      ? `${t.accent}15`
                      : isMinimal
                        ? "rgba(0,0,0,0.02)"
                        : "rgba(255,255,255,0.03)",
                }}
              >
                <span className="text-2xl">{t.icon}</span>
                <span
                  className="text-xs font-bold tracking-wider uppercase"
                  style={{
                    color:
                      selectedTheme === t.id
                        ? t.accent
                        : isMinimal
                          ? "rgba(0,0,0,0.4)"
                          : "rgba(255,255,255,0.5)",
                  }}
                >
                  {t.label}
                </span>
                {selectedTheme === t.id && (
                  <div
                    className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: t.accent }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Start button */}
        {!isStarting && (
          <button
            onClick={startLoading}
            className="group relative mt-2 overflow-hidden rounded-full border-2 px-12 py-4 font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              borderColor: theme.accent,
              color: isMinimal ? "#fff" : theme.bg,
              backgroundColor: theme.accent,
            }}
          >
            <span className="relative z-10">Entrar</span>
            <div
              className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(90deg, transparent, ${theme.accentAlt}, transparent)`,
              }}
            />
          </button>
        )}

        {/* Loading bar */}
        {isStarting && (
          <div className="flex flex-col items-center gap-4">
            {/* Progress bar */}
            <div
              className="h-1 w-64 overflow-hidden rounded-full sm:w-80"
              style={{
                backgroundColor: isMinimal
                  ? "rgba(0,0,0,0.1)"
                  : "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{
                  width: `${progress}%`,
                  backgroundColor: theme.accent,
                  boxShadow: isMinimal ? "none" : `0 0 20px ${theme.accent}`,
                }}
              />
            </div>

            {/* Percentage */}
            <span
              className="text-4xl font-black tabular-nums"
              style={{ color: theme.textColor }}
            >
              {Math.round(progress)}%
            </span>

            {/* Loading text */}
            <p
              className="text-xs tracking-[0.25em] uppercase"
              style={{ color: theme.subTextColor }}
            >
              {loaded ? "Pronto!" : "Carregando..."}
            </p>
          </div>
        )}
      </div>

      {/* Theme accent glow */}
      {!isMinimal && !isStarting && (
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
          style={{ backgroundColor: theme.accent }}
        />
      )}

      {/* Fade out when loaded */}
      {loaded && (
        <div
          className="absolute inset-0 z-20 animate-fade-out"
          style={{ backgroundColor: theme.bg }}
        />
      )}
    </div>
  );
}
