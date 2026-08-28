import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { project } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-cream pt-24">
      <div className="container-content grid min-h-[calc(90vh-6rem)] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn className="order-2 lg:order-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            New Project by {project.developer}
          </p>
          <h1 className="font-serif text-[2rem] leading-tight text-navy sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
            {project.name}
          </h1>
          <p className="mt-4 font-serif text-xl italic text-charcoal/80 sm:text-2xl">
            {project.tagline}
          </p>
          <p className="mt-6 max-w-lg text-base text-charcoal/80 sm:text-lg">
            Thoughtfully designed 3BHK homes on {project.location.roadFrontage} at{" "}
            {project.location.area}. {project.status.label} —{" "}
            {project.status.sublabel.toLowerCase()}.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Enquire Now
              <ArrowRight size={18} />
            </Link>
            <Link href="/floor-plans" className="btn-secondary">
              View Floor Plans
            </Link>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-sm border border-accent/30 bg-accent/10 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span className="text-base font-medium text-navy">
              {project.status.label}
            </span>
            <span className="text-base text-charcoal/70">
              · {project.status.sublabel}
            </span>
          </div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2" delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-card sm:aspect-[3/4] lg:aspect-[4/5]">
            <Image
              src="/images/elevation/elevation-1.jpeg"
              alt={`${project.name} building elevation`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
