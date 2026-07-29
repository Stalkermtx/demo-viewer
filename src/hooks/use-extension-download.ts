import { useCallback } from "react";
import extensionAsset from "@/assets/vorax-extension.zip.asset.json";
import { EXTENSION_FILENAME } from "@/lib/landing-data";

export const EXTENSION_URL = extensionAsset.url;

/**
 * Baixa o .zip da extensão via blob (funciona em previews/CDN) com
 * fallback para abrir a URL direta caso o fetch falhe.
 * A callback é estável, então não causa re-render em componentes memoizados.
 */
export function useExtensionDownload() {
  return useCallback(async (event?: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();

    try {
      const response = await fetch(EXTENSION_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`Download indisponível: ${response.status}`);

      const blob = await response.blob();
      if (blob.size === 0) throw new Error("Arquivo de extensão vazio");

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = EXTENSION_FILENAME;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      console.error("Falha ao baixar a extensão Vorax Lovable", error);
      window.open(EXTENSION_URL, "_blank", "noopener,noreferrer");
    }
  }, []);
}

export type ExtensionDownloadHandler = ReturnType<typeof useExtensionDownload>;
