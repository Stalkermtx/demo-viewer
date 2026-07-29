export const WHATSAPP_NUMBER = "5565992203318";

/** Monta o link de WhatsApp com mensagem pré-preenchida. */
export const wa = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
