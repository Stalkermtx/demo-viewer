import { useEffect, useRef, useState } from "react";

type Drop = { id: number; x: number; y: number; dx: number; rot: number; size: number };

const MAX_DROPS = 100;
const DROP_TTL_MS = 1600;
const THROTTLE_MS = 60;

let idCounter = 0;

export function MoneyRain() {
  const [drops, setDrops] = useState<Drop[]>([]);
  const timeoutsRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const mountedRef = useRef(true);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    mountedRef.current = true;
    const timeouts = timeoutsRef.current;

    const handler = (e: MouseEvent) => {
      try {
        const now = Date.now();
        if (now - lastSpawnRef.current < THROTTLE_MS) return;
        lastSpawnRef.current = now;

        const target = e.target as HTMLElement | null;
        if (target?.closest?.("input, textarea, select")) return;

        const count = 1 + Math.floor(Math.random() * 2);
        const newDrops: Drop[] = Array.from({ length: count }).map(() => ({
          id: ++idCounter,
          x: e.clientX,
          y: e.clientY,
          dx: (Math.random() - 0.5) * 180,
          rot: (Math.random() - 0.5) * 720,
          size: 18 + Math.random() * 18,
        }));

        setDrops((prev) => {
          const merged = [...prev, ...newDrops];
          return merged.length > MAX_DROPS ? merged.slice(merged.length - MAX_DROPS) : merged;
        });

        const ids = new Set(newDrops.map((d) => d.id));
        const t = setTimeout(() => {
          timeouts.delete(t);
          if (!mountedRef.current) return;
          setDrops((prev) => prev.filter((d) => !ids.has(d.id)));
        }, DROP_TTL_MS);
        timeouts.add(t);
      } catch (err) {
        console.error("MoneyRain handler failed", err);
      }
    };

    window.addEventListener("mousemove", handler, { passive: true });
    return () => {
      mountedRef.current = false;
      window.removeEventListener("mousemove", handler);
      timeouts.forEach((t) => clearTimeout(t));
      timeouts.clear();
    };
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
