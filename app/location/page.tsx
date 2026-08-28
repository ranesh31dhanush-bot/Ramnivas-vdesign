import type { Metadata } from "next";
import { MapPin, Navigation, Phone } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { ProjectMapEmbed } from "@/components/shared/ProjectMapEmbed";
import { Section, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";
import { formatPhoneDisplay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Location",
  description: `${project.name} is located at ${project.location.area} with ${project.location.roadFrontage}.`,
};

export default function LocationPage() {
  return (
    <>
      <section className="bg-cream pt-28 pb-12">
        <div className="container-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl">Location</h1>
            <p className="mt-4 max-w-2xl text-base text-charcoal/80 sm:text-lg">
              {project.location.address} — a well-connected residential neighbourhood
              with {project.location.roadFrontage}.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section background="white" className="!pt-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <FadeIn className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-navy">Address</h2>
                <p className="mt-3 flex items-start gap-2 text-base text-charcoal/80">
                  <MapPin size={18} className="mt-1 shrink-0 text-accent" aria-hidden />
                  {project.location.address}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-navy">Nearby Landmarks</h3>
                <ul className="mt-3 space-y-2">
                  {project.location.landmarks.map((landmark) => (
                    <li
                      key={landmark}
                      className="flex items-center gap-2 text-base text-charcoal/75"
                    >
                      <Navigation size={16} className="text-accent" aria-hidden />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-navy">Contact for Directions</h3>
                <ul className="mt-3 space-y-2">
                  {project.contact.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-base text-accent hover:text-accent-dark"
                      >
                        <Phone size={16} aria-hidden />
                        {formatPhoneDisplay(phone)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonLink
                href={project.location.googleMapsUrl}
                external
                variant="secondary"
              >
                Open in Google Maps
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.1}>
            <ProjectMapEmbed
              showCaption
              showPinOverlay
              className="aspect-[4/3] overflow-hidden rounded-sm shadow-card lg:aspect-auto lg:min-h-[500px]"
              iframeClassName="min-h-[400px] lg:min-h-[500px]"
            />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
