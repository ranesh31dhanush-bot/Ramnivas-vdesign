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

const iconMap = {
  car: Car,
  "arrow-up-down": ArrowUpDown,
  zap: Zap,
  camera: Camera,
  plug: Plug,
} as const;

export function AmenitiesPreview() {
  return (
    <Section background="white">
      <SectionHeader
        title="Modern Amenities"
        subtitle="Everything you need for comfortable, secure living — built into the project from day one."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.amenities.map((amenity, index) => {
          const Icon = iconMap[amenity.icon as keyof typeof iconMap] ?? Car;
          return (
            <FadeIn key={amenity.id} delay={index * 0.08}>
              <div className="flex gap-4 rounded-sm border border-navy/10 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy/5">
                  <Icon size={22} className="text-accent" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-navy">
                    {amenity.name}
                  </h3>
                  <p className="mt-1 text-base text-charcoal/75">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <ButtonLink href="/amenities">View All Amenities</ButtonLink>
      </div>
    </Section>
  );
}
