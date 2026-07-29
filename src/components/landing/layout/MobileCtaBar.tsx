import { memo } from "react";
import { WA_MESSAGES } from "@/lib/landing";
import type { ExtensionDownloadHandler } from "@/hooks/use-extension-download";
import { DownloadLink, WhatsAppCta } from "../ui";

export const MobileCtaBar = memo(function MobileCtaBar({
  onDownload,
}: {
  onDownload: ExtensionDownloadHandler;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur-xl sm:hidden">
      <div className="flex items-center gap-3 pb-3">
        <WhatsAppCta message={WA_MESSAGES.mobileTrial} className="min-h-12 flex-1 px-5 text-sm">
          Testar grátis
        </WhatsAppCta>
        <DownloadLink
          onDownload={onDownload}
          className="flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white"
        >
          Baixar
        </DownloadLink>
      </div>
    </div>
  );
});
