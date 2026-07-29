import { memo } from "react";

const heartPath =
  "M12 21s-7.5-4.6-9.5-9.1C1 8.5 3 5 6.5 5c2 0 3.6 1.1 4.5 2.7C11.9 6.1 13.5 5 15.5 5 19 5 21 8.5 21.5 11.9 19.5 16.4 12 21 12 21z";

function Heart({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="url(#primo-heart-grad)"
      className={className}
      style={{ filter: "drop-shadow(0 0 10px rgba(236,72,153,0.35))" }}
    >
      <path d={heartPath} />
    </svg>
  );
}

const HEARTS = [
  { size: 28, className: "top-[12%] left-[8%] [animation-duration:6s]" },
  { size: 20, className: "top-[22%] right-[12%] [animation-duration:7s] [animation-delay:1s]" },
  { size: 36, className: "top-[55%] left-[6%] [animation-duration:8s] [animation-delay:2s]" },
  { size: 16, className: "top-[70%] right-[8%] [animation-duration:5s] [animation-delay:0.5s]" },
  { size: 24, className: "top-[38%] right-[30%] [animation-duration:9s] [animation-delay:3s]" },
  { size: 32, className: "bottom-[10%] left-[35%] [animation-duration:7.5s] [animation-delay:1.5s]" },
];

const GRADIENT_MESH =
  "radial-gradient(ellipse 80% 60% at 15% 10%, rgba(124,58,237,0.25), transparent 60%),radial-gradient(ellipse 70% 55% at 90% 20%, rgba(236,72,153,0.20), transparent 65%),radial-gradient(ellipse 90% 65% at 50% 110%, rgba(56,189,248,0.16), transparent 70%),radial-gradient(ellipse 60% 50% at 80% 85%, rgba(249,115,22,0.14), transparent 65%)";

/** Fundo decorativo estático — memoizado para nunca re-renderizar. */
export const Background = memo(function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="primo-heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="55%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ backgroundImage: GRADIENT_MESH }} />
      <div className="absolute -top-40 -left-40 h-[50vh] w-[50vh] animate-pulse rounded-full bg-fuchsia-600/15 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[50vh] w-[50vh] animate-pulse rounded-full bg-orange-500/15 blur-[120px] [animation-delay:2s]" />

      {HEARTS.map((h) => (
        <Heart key={h.className} size={h.size} className={`absolute animate-bounce ${h.className}`} />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/80" />
    </div>
  );
});
