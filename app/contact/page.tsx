import type { Metadata } from "next";
import { Phone, Instagram, Globe } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section } from "@/components/shared/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { project } from "@/lib/data";
import { formatPhoneDisplay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${project.name}. Call ${project.contact.phones.join(" or ")} or send an enquiry online.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-28 pb-12">
        <div className="container-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl text-base text-charcoal/80 sm:text-lg">
              Interested in {project.name}? Send an enquiry and we&apos;ll get back to you promptly.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section background="white" className="!pt-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-navy">Get in Touch</h2>
            <p className="mt-3 text-base text-charcoal/75">
              Call us directly or fill out the enquiry form. We&apos;re happy to arrange a site visit.
            </p>

            <ul className="mt-8 space-y-5">
              {project.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-base text-navy transition-colors hover:text-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10">
                      <Phone size={18} className="text-accent" aria-hidden />
                    </span>
                    {formatPhoneDisplay(phone)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={project.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-navy transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10">
                    <Instagram size={18} className="text-accent" aria-hidden />
                  </span>
                  {project.contact.instagram.handle}
                </a>
              </li>
              <li>
                <a
                  href={project.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-navy transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10">
                    <Globe size={18} className="text-accent" aria-hidden />
                  </span>
                  {project.contact.website.replace("https://", "")}
                </a>
              </li>
            </ul>

            <div className="mt-10 rounded-sm border border-navy/10 bg-cream p-6">
              <h3 className="text-base font-medium text-navy">Financing</h3>
              <p className="mt-2 text-base text-charcoal/75">
                {project.financing.bank}, {project.financing.branch}
              </p>
              <p className="mt-1 text-base text-accent">{project.financing.tagline}</p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-3" delay={0.1}>
            <div className="rounded-sm border border-navy/10 bg-cream p-6 sm:p-8">
              <h2 className="font-serif text-2xl text-navy">Send an Enquiry</h2>
              <div className="mt-6">
                <EnquiryForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
