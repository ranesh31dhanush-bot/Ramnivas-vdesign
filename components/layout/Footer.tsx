import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";
import { navigation, project } from "@/lib/data";
import { formatPhoneDisplay } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy/10 bg-navy text-cream">
      <div className="container-content section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl text-cream">{project.name}</h3>
            <p className="mt-3 text-base text-cream/75">{project.tagline}</p>
            <p className="mt-4 flex items-start gap-2 text-base text-cream/75">
              <MapPin size={18} className="mt-1 shrink-0" aria-hidden />
              {project.location.area}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold uppercase tracking-wide text-cream/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-base text-cream/75 transition-colors hover:text-accent-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold uppercase tracking-wide text-cream/90">
              Contact
            </h4>
            <ul className="space-y-3">
              {project.contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-base text-cream/75 transition-colors hover:text-accent-light"
                  >
                    <Phone size={16} aria-hidden />
                    {formatPhoneDisplay(phone)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={project.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base text-cream/75 transition-colors hover:text-accent-light"
                >
                  <Instagram size={16} aria-hidden />
                  {project.contact.instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold uppercase tracking-wide text-cream/90">
              Financing Partner
            </h4>
            <p className="text-base text-cream/75">
              {project.financing.bank}
              <br />
              {project.financing.branch}
            </p>
            <p className="mt-2 text-base text-accent-light">
              {project.financing.tagline}
            </p>
            <p className="mt-6 text-sm text-cream/60">{project.rera.number}</p>
            <p className="mt-2 text-sm text-cream/50">
              {project.rera.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-sm text-cream/60">
            © {currentYear} {project.developer}. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-sm text-accent-light transition-colors hover:text-cream"
          >
            Book a site visit →
          </Link>
        </div>
      </div>
    </footer>
  );
}
