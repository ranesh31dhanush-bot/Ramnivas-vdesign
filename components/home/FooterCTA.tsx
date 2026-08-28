import { FadeIn } from "@/components/shared/FadeIn";
import { Section, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";

export function FooterCTA() {
  return (
    <Section background="navy" className="!py-20">
      <FadeIn>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            {project.status.label}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl">
            Your premium home awaits at {project.name}
          </h2>
          <p className="mt-4 text-base text-cream/75 sm:text-lg">
            Limited flats available. Schedule a site visit or send an enquiry
            today — {project.financing.tagline.toLowerCase()}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact" className="btn-primary">
              Send Enquiry
            </ButtonLink>
            <ButtonLink
              href={`tel:${project.contact.phones[0]}`}
              variant="secondary"
              className="border-cream/30 text-cream hover:border-cream/50 hover:bg-cream/10"
            >
              Call {project.contact.phones[0]}
            </ButtonLink>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
