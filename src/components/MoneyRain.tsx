import { useEffect, useState } from "react";

type Drop = { id: number; x: number; y: number; dx: number; rot: number; size: number };

let idCounter = 0;

export function MoneyRain() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const handler = (e: PointerEvent | MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("input, textarea, select")) return;

      const count = 8 + Math.floor(Math.random() * 4);
      const newDrops: Drop[] = Array.from({ length: count }).map(() => ({
        id: ++idCounter,
        x: e.clientX,
        y: e.clientY,
        dx: (Math.random() - 0.5) * 220,
        rot: (Math.random() - 0.5) * 720,
        size: 22 + Math.random() * 22,
      }));
      setDrops((prev) => [...prev, ...newDrops]);

      const ids = new Set(newDrops.map((d) => d.id));
      window.setTimeout(() => {
        setDrops((prev) => prev.filter((d) => !ids.has(d.id)));
      }, 1800);
    };

    // capture phase + pointerdown ensures we catch it even if inner handlers stopPropagation
    window.addEventListener("pointerdown", handler, true);
    return () => window.removeEventListener("pointerdown", handler, true);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {drops.map((d) => (
        <span
          key={d.id}
          className="absolute select-none money-drop"
          style={{
            left: d.x,
            top: d.y,
            fontSize: d.size,
            // @ts-expect-error CSS custom properties
            "--dx": `${d.dx}px`,
            "--rot": `${d.rot}deg`,
            transform: "translate(-50%, -50%)",
          }}
        >
          💸
        </span>
      ))}
    </div>
  );
}
