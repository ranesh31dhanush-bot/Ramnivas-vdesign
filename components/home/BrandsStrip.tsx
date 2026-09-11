import Image from "next/image";
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
          {project.brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-20 items-center justify-center rounded-sm border border-navy/10 bg-white px-4 py-3 shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-soft"
              title={brand.name}
            >
              {brand.logo ? (
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={140}
                    height={48}
                    className="max-h-10 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ) : (
                <span className="text-sm font-medium text-charcoal/80 transition-colors group-hover:text-navy">
                  {brand.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
