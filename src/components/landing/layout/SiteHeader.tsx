import { memo, useState } from "react";
import { DESKTOP_NAV_LINKS, NAV_LINKS, WA_MESSAGES } from "@/lib/landing";
import type { ExtensionDownloadHandler } from "@/hooks/use-extension-download";
import { DownloadLink, WhatsAppCta } from "../ui";

export const SiteHeader = memo(function SiteHeader({
  onDownload,
}: {
  onDownload: ExtensionDownloadHandler;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50 transition-all duration-300">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="group flex min-w-0 items-center gap-2" aria-label="Vorax Lovable — início">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-pink-500 to-orange-500 font-black shadow-lg shadow-pink-500/20 transition-transform group-hover:scale-110">
            V
          </div>
          <span className="truncate text-base font-bold tracking-tight sm:text-lg bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Vorax Lovable</span>
        </a>

        <div className="flex items-center gap-2">
          <nav aria-label="Principal" className="hidden gap-7 text-sm text-white/70 lg:flex">
            {DESKTOP_NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            ))}
            <DownloadLink onDownload={onDownload} className="transition hover:text-white">
              Download
            </DownloadLink>
          </nav>

          <WhatsAppCta
            message={WA_MESSAGES.headerTrial}
            variant="soft"
            className="hidden min-h-11 px-5 text-sm sm:inline-flex"
          >
            Testar grátis
          </WhatsAppCta>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:bg-white/10 lg:hidden"
          >
            <span aria-hidden="true" className="text-lg">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-t border-white/5 bg-black/70 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col text-sm text-white/80">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-2 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <DownloadLink
                onDownload={onDownload}
                onNavigate={() => setMenuOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-2 transition hover:bg-white/10 hover:text-white"
              >
                Baixar extensão
              </DownloadLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
});
