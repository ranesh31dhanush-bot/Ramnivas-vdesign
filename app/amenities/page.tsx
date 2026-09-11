import type { Metadata } from "next";
import {
  Car,
  ArrowUpDown,
  Zap,
  Camera,
  Plug,
} from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section, SectionHeader, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";

export const metadata: Metadata = {
  title: "Amenities",
  description: `Amenities at ${project.name}: car parking, lift, generator backup, CCTV, and EV charging provision.`,
};

const iconMap = {
  car: Car,
  "arrow-up-down": ArrowUpDown,
  zap: Zap,
  camera: Camera,
  plug: Plug,
} as const;

export default function AmenitiesPage() {
  return (
    <>
      <section className="bg-cream pt-28 pb-12">
        <div className="container-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl">Amenities</h1>
            <p className="mt-4 max-w-2xl text-base text-charcoal/80 sm:text-lg">
              Modern conveniences designed for everyday comfort, security, and peace of mind.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section background="white" className="!pt-8">
        <SectionHeader
          title="Everything You Need"
          subtitle="From secure parking to power backup — amenities that make Virat Ramnivas a complete home."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {project.amenities.map((amenity, index) => {
            const Icon = iconMap[amenity.icon as keyof typeof iconMap] ?? Car;
            return (
              <FadeIn key={amenity.id} delay={index * 0.08} className="h-full">
                <article className="flex h-full gap-6 rounded-sm border border-navy/10 p-8 transition-shadow hover:shadow-soft">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                    <Icon size={26} className="text-accent" aria-hidden />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-navy">{amenity.name}</h2>
                    <p className="mt-3 text-base text-charcoal/75">
                      {amenity.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-16 rounded-sm bg-cream p-8 text-center">
          <h3 className="font-serif text-2xl text-navy">
            Ready to see it in person?
          </h3>
          <p className="mt-3 text-base text-charcoal/75">
            Schedule a site visit and experience the project firsthand.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact">Book a Visit</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
