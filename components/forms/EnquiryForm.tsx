"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { enquirySchema, type EnquirySchema } from "@/lib/validations";
import { flatSizeOptions } from "@/lib/data";
import {
  buildEnquiryWhatsAppMessage,
  openWhatsApp,
} from "@/lib/whatsapp";
import { Toast, useToast } from "@/components/shared/Toast";
import { cn } from "@/lib/utils";

function EnquiryFormInner() {
  const searchParams = useSearchParams();
  const { message, visible, showToast, hideToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preselectedFlat = searchParams.get("flat");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<EnquirySchema>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      flatSize: "not-sure",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (
      preselectedFlat &&
      ["1543", "1641", "1694", "1726"].includes(preselectedFlat)
    ) {
      setValue("flatSize", preselectedFlat as EnquirySchema["flatSize"]);
    }
  }, [preselectedFlat, setValue]);

  const onSubmit = async (data: EnquirySchema) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error ?? "Submission failed");
      }

      showToast("Thank you! Opening WhatsApp to complete your enquiry...");
      reset();

      setTimeout(() => {
        openWhatsApp(buildEnquiryWhatsAppMessage(data));
      }, 800);
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div>
          <label htmlFor="name" className="mb-2 block text-base font-medium text-navy">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            {...register("name")}
            className={cn(
              "w-full rounded-sm border bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
              errors.name ? "border-red-400" : "border-navy/15"
            )}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-base font-medium text-navy">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={cn(
              "w-full rounded-sm border bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
              errors.phone ? "border-red-400" : "border-navy/15"
            )}
            placeholder="10-digit mobile number"
          />
          {errors.phone && (
            <p className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-base font-medium text-navy">
            Email <span className="text-sm font-normal text-charcoal/60">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={cn(
              "w-full rounded-sm border bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
              errors.email ? "border-red-400" : "border-navy/15"
            )}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="flatSize" className="mb-2 block text-base font-medium text-navy">
            Preferred Flat Size <span className="text-accent">*</span>
          </label>
          <select
            id="flatSize"
            {...register("flatSize")}
            className={cn(
              "w-full rounded-sm border bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent",
              errors.flatSize ? "border-red-400" : "border-navy/15"
            )}
          >
            {flatSizeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.flatSize && (
            <p className="mt-1.5 text-sm text-red-600" role="alert">
              {errors.flatSize.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-base font-medium text-navy">
            Message <span className="text-sm font-normal text-charcoal/60">(optional)</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="w-full resize-y rounded-sm border border-navy/15 bg-white px-4 py-3 text-base text-charcoal transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Any questions or preferred visit time..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Enquiry
            </>
          )}
        </button>

        <p className="text-sm text-charcoal/60">
          After submitting, WhatsApp will open with your enquiry pre-filled.
          Please tap Send to complete.{" "}
          {/* TODO: Integrate WhatsApp Business API for automated notifications */}
        </p>
      </form>

      <Toast message={message} visible={visible} onClose={hideToast} />
    </>
  );
}

export function EnquiryForm() {
  return (
    <Suspense fallback={<div className="text-base text-charcoal/60">Loading form...</div>}>
      <EnquiryFormInner />
    </Suspense>
  );
}
