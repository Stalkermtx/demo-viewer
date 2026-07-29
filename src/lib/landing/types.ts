export type NavLink = { href: string; label: string };

export type Stat = { k: string; v: string };

export type Feature = { title: string; desc: string; icon: string };

export type Step = { step: string; title: string; desc: string; icon: string };

export type Plan = {
  name: string;
  price: string;
  period: string;
  badge: string;
  features: string[];
  highlight: boolean;
  waMessage: string;
};

export type ComparisonRow = { label: string; values: (string | boolean)[] };

export type FaqItem = { q: string; a: string };
