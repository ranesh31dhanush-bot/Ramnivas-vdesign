import { MapPin, Navigation } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { ProjectMapEmbed } from "@/components/shared/ProjectMapEmbed";
import { Section, SectionHeader, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";

export function LocationTeaser() {
  return (
    <Section background="white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <SectionHeader
            title="Prime Location"
            subtitle={`${project.location.area} — a well-established residential neighbourhood with excellent connectivity and everyday conveniences nearby.`}
          />
          <ul className="space-y-3">
            {project.location.landmarks.map((landmark) => (
              <li
                key={landmark}
                className="flex items-center gap-3 text-base text-charcoal/80"
              >
                <Navigation size={16} className="text-accent" aria-hidden />
                {landmark}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2 text-base text-navy">
            <MapPin size={18} className="text-accent" aria-hidden />
            {project.location.roadFrontage}
          </div>
          <div className="mt-8">
            <ButtonLink href="/location" variant="secondary">
              View on Map
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ProjectMapEmbed
            showCaption
            showPinOverlay
            className="aspect-video overflow-hidden rounded-sm shadow-card"
          />
        </FadeIn>
      </div>
    </Section>
  );
}
