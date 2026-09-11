import { Building2, Compass, Route, Landmark } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section } from "@/components/shared/Section";
import { project } from "@/lib/data";

const facts = [
  {
    icon: Building2,
    label: "Flat Sizes",
    value: "1543 · 1641 · 1694 · 1726 sq.ft",
  },
  {
    icon: Compass,
    label: "Facing Options",
    value: "North, West & East facing",
  },
  {
    icon: Route,
    label: "Road Frontage",
    value: project.location.roadFrontage,
  },
  {
    icon: Landmark,
    label: "Location",
    value: project.location.area,
  },
];

export function QuickFacts() {
  return (
    <Section background="white">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <FadeIn key={fact.label} delay={index * 0.08} className="h-full">
            <div className="flex h-full flex-col rounded-sm border border-navy/10 bg-cream p-6 transition-shadow hover:shadow-soft">
              <fact.icon
                size={24}
                className="text-accent"
                aria-hidden
              />
              <p className="mt-4 text-sm font-medium uppercase tracking-wide text-charcoal/60">
                {fact.label}
              </p>
              <p className="mt-2 text-base font-medium text-navy">
                {fact.value}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
