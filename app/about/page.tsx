import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section, SectionHeader, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `About ${project.name} by ${project.developer} — premium 3BHK flats at ${project.location.area}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-28 pb-12">
        <div className="container-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {project.developer}
            </p>
            <h1 className="mt-3 font-serif text-3xl text-navy sm:text-4xl">
              About {project.name}
            </h1>
          </FadeIn>
        </div>
      </section>

      <Section background="white" className="!pt-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-serif text-2xl text-navy sm:text-3xl">
              {project.about.headline}
            </h2>
            <div className="mt-6 space-y-4">
              {project.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base text-charcoal/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-card">
              <Image
                src="/images/elevation/elevation-2.jpeg"
                alt={`${project.name} building`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Our Values"
          subtitle="Quality, trust, and commitment — the foundation of every Virat project."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {project.about.values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <div className="rounded-sm border border-navy/10 bg-white p-8 text-center">
                <h3 className="font-serif text-xl text-navy">{value.title}</h3>
                <p className="mt-3 text-base text-charcoal/75">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </div>
      </Section>
    </>
  );
}
