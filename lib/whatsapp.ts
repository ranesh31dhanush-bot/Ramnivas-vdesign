import { project, whatsappNumber } from "@/lib/data";
import type { EnquiryFormData } from "@/types";

/**
 * Builds a wa.me link with a prefilled message.
 *
 * NOTE: wa.me requires the user to tap Send — the message is NOT sent automatically.
 * TODO: Integrate WhatsApp Business API for automated lead notifications in production.
 *
 * IMPORTANT: Confirm NEXT_PUBLIC_WHATSAPP_NUMBER is the correct WhatsApp Business number.
 */
export function buildWhatsAppUrl(message: string): string {
  const number = whatsappNumber.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${number}?text=${encoded}`;
}

export function buildEnquiryWhatsAppMessage(data: EnquiryFormData): string {
  const flatLabel =
    data.flatSize === "not-sure"
      ? "Not sure yet"
      : `${data.flatSize} sq.ft`;

  const lines = [
    `Hello, I'm interested in ${project.name}.`,
    ``,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];

  if (data.email) {
    lines.push(`Email: ${data.email}`);
  }

  lines.push(`Flat Size: ${flatLabel}`);

  if (data.message) {
    lines.push(`Message: ${data.message}`);
  }

  lines.push(``, `Sent via ${project.contact.website}`);

  return lines.join("\n");
}

export function openWhatsApp(message: string): void {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
