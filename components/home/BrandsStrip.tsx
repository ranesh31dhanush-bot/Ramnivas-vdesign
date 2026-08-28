import { FadeIn } from "@/components/shared/FadeIn";
import { Section, SectionHeader } from "@/components/shared/Section";
import { project } from "@/lib/data";

export function BrandsStrip() {
  return (
    <Section>
      <SectionHeader
        title="Trusted Brand Partners"
        subtitle="Quality materials from India's most respected names in construction and interiors."
        align="center"
      />

      <FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {project.brands.map((brand) => (
            <span
              key={brand.name}
              className="rounded-sm border border-navy/10 bg-white px-5 py-3 text-base font-medium text-charcoal/80 transition-colors hover:border-accent/30 hover:text-navy"
            >
              {brand.name}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
