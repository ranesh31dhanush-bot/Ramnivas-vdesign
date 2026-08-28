import { z } from "zod";

const indianPhoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;

export const enquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(10, "Enter a valid 10-digit mobile number")
    .regex(indianPhoneRegex, "Enter a valid Indian mobile number"),
  email: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  flatSize: z.enum(["1543", "1641", "1694", "1726", "not-sure"], {
    required_error: "Please select a flat size",
  }),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type EnquirySchema = z.infer<typeof enquirySchema>;

export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }
  return digits;
}
