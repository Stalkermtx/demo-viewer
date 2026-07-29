import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { MoneyRain } from "@/components/MoneyRain";
import {
  Background,
  FloatingControls,
  MobileCtaBar,
  SiteFooter,
  SiteHeader,
} from "@/components/landing/layout";
import {
  Calculator,
  ComparisonTable,
  Faq,
  FeaturesSection,
  FinalCta,
  Hero,
  HowItWorks,
  Pricing,
} from "@/components/landing/sections";
import { useExtensionDownload } from "@/hooks/use-extension-download";
import ogImage from "@/assets/og-primo-tech.jpg";

const OG_IMAGE_URL = `https://demo-viewer.lovable.app${ogImage}`;
const TITLE = "Vorax Lovable — Domine o Lovable com Economia de Elite";
const DESCRIPTION =
  "A Extensão Vorax Lovable turbina seu workspace Lovable com economia real de até 70%. Ative planos premium, suporte VIP e teste grátis imediato.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vorax Lovable" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
  }),
  component: VoraxLandingPage,
});

function VoraxLandingPage() {
  const [muted, setMuted] = useState(true);
  const [light, setLight] = useState(false);

  const downloadExtension = useExtensionDownload();
  const toggleMute = useCallback(() => setMuted((m) => !m), []);
  const toggleTheme = useCallback(() => setLight((l) => !l), []);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${light ? "vorax-light" : "bg-[#050505] text-white"}`}
    >
      <MoneyRain />
      <Background />

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
      >
        Pular para o conteúdo
      </a>

      <SiteHeader onDownload={downloadExtension} />

      <main id="conteudo">
        <Hero onDownload={downloadExtension} />
        <FeaturesSection />
        <HowItWorks />
        <Calculator />
        <Pricing />
        <ComparisonTable />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />

      <MobileCtaBar onDownload={downloadExtension} />
      <FloatingControls
        muted={muted}
        onToggleMute={toggleMute}
        light={light}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}
