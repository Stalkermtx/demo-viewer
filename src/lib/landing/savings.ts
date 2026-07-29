export const SPEND_MIN = 20;
export const SPEND_MAX = 2000;
export const SAVINGS_RATE = 0.7;

export const clampSpend = (n: number) => {
  if (!Number.isFinite(n)) return SPEND_MIN;
  return Math.min(SPEND_MAX, Math.max(SPEND_MIN, Math.round(n)));
};

/** Formatação estável entre SSR e cliente (evita hydration mismatch). */
export const formatBRL = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/** Calcula economia mensal e anual a partir do gasto informado. */
export function calcSavings(spend: number) {
  const safeSpend = clampSpend(spend);
  const monthly = Math.round(safeSpend * SAVINGS_RATE);
  return { safeSpend, monthly, yearly: monthly * 12 };
}
