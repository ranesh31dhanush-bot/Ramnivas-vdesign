import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

export function buildMapEmbedUrl(lat: number, lng: number, zoom = 18): string {
  return `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;
}

export function buildGoogleMapsUrl(lat: number, lng: number, zoom = 18): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}`;
}
