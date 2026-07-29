import { memo } from "react";
import { EXTENSION_FILENAME } from "@/lib/landing";
import { EXTENSION_URL, type ExtensionDownloadHandler } from "@/hooks/use-extension-download";

/** Link único de download da extensão — evita repetir href/download/handler. */
export const DownloadLink = memo(function DownloadLink({
  onDownload,
  children,
  className = "",
  onNavigate,
}: {
  onDownload: ExtensionDownloadHandler;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <a
      href={EXTENSION_URL}
      download={EXTENSION_FILENAME}
      onClick={(event) => {
        onNavigate?.();
        void onDownload(event);
      }}
      className={className}
    >
      {children}
    </a>
  );
});
