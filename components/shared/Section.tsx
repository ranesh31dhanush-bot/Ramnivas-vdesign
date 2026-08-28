import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "cream" | "white" | "navy";
}

export function Section({
  children,
  className,
  id,
  background = "cream",
}: SectionProps) {
  const bgClass = {
    cream: "bg-cream",
    white: "bg-white",
    navy: "bg-navy text-cream",
  }[background];

  return (
    <section id={id} className={cn("section-padding", bgClass, className)}>
      <div className="container-content">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("mb-12", align === "center" && "text-center mx-auto max-w-3xl")}
    >
      <h2
        className={cn(
          "section-heading",
          light && "text-cream",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "section-subheading",
            light && "text-cream/80",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClass, className)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(baseClass, className)}>
      {children}
    </Link>
  );
}
