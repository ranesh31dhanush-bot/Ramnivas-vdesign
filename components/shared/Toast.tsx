"use client";

import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-24 right-6 z-50 flex max-w-sm items-start gap-3 rounded-sm bg-navy px-5 py-4 text-cream shadow-card transition-all",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <CheckCircle size={20} className="mt-0.5 shrink-0 text-accent-light" />
      <p className="flex-1 text-base">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="shrink-0 rounded-sm p-1 hover:bg-cream/10"
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}

export function useToast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setVisible(true);
  };

  const hideToast = () => setVisible(false);

  return { message, visible, showToast, hideToast };
}
