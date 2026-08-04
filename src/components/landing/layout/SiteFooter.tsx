import { memo } from "react";
import { FOOTER_LINKS, WA_MESSAGES, wa } from "@/lib/landing";

export const SiteFooter = memo(function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050505] pt-20 pb-28 text-left sm:pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 text-xl font-black tracking-tighter">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 via-pink-500 to-orange-500 text-white shadow-lg shadow-pink-500/20">
                V
              </div>
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">Vorax Lovable</span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              A ferramenta definitiva para quem busca economia e performance no Lovable. 
              Junte-se a milhares de desenvolvedores que já otimizaram seus fluxos.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">Navegação</h4>
            <ul className="mt-6 space-y-4">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/50 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/90">Suporte</h4>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={wa(WA_MESSAGES.footerSupport)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition hover:text-white"
                >
                  WhatsApp VIP
                </a>
              </li>
              <li>
                <a href="mailto:contato@vorax.tech" className="text-sm text-white/50 transition hover:text-white">
                  contato@vorax.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="text-xs text-white/30" suppressHydrationWarning>
            © {year} Vorax Lovable. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});