import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section, SectionHeader, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";

export function FlatPreview() {
  return (
    <Section>
      <SectionHeader
        title="Choose Your Space"
        subtitle="Four distinct 3BHK layouts, each with generous room proportions and premium finishes."
      />

      <div className="grid gap-8 md:grid-cols-2">
        {project.flats.map((flat, index) => (
          <FadeIn key={flat.id} delay={index * 0.1}>
            <article className="group overflow-hidden rounded-sm border border-navy/10 bg-white shadow-soft transition-shadow hover:shadow-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <Image
                  src={flat.image}
                  alt={`${flat.size} sq.ft ${flat.facing} facing floor plan`}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-navy">
                      {flat.size} sq.ft
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-base text-charcoal/70">
                      <Compass size={16} aria-hidden />
                      {flat.facing} Facing · {flat.config}
                    </p>
                  </div>
                  <span className="rounded-sm bg-accent/10 px-3 py-1 text-sm font-medium text-accent-dark">
                    {flat.id} sft
                  </span>
                </div>
                <p className="mt-4 line-clamp-2 text-base text-charcoal/75">
                  {flat.notes}
                </p>
                <Link
                  href={`/floor-plans#flat-${flat.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-base font-medium text-accent transition-colors hover:text-accent-dark"
                >
                  View details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <div className="mt-12 text-center">
        <ButtonLink href="/floor-plans" variant="secondary">
          Explore All Floor Plans
        </ButtonLink>
      </div>
    </Section>
  );
}
