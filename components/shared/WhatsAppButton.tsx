"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { project } from "@/lib/data";

export function WhatsAppButton() {
  const shouldReduceMotion = useReducedMotion();

  const message = `Hello, I'm interested in ${project.name} at ${project.location.area}. Please share more details.`;
  const href = buildWhatsAppUrl(message);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
