"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { navigation, project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream/95 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-content flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-xl text-navy transition-colors group-hover:text-accent sm:text-2xl">
            {project.name}
          </span>
          <span className="text-sm text-charcoal/70">{project.developer}</span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base text-charcoal transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary py-2.5 text-base">
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-sm p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-[72px] z-40 bg-cream lg:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-4 py-6"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-sm px-4 py-3 text-lg text-charcoal transition-colors hover:bg-navy/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={`tel:${project.contact.phones[0]}`}
              className="mt-4 flex items-center gap-2 px-4 py-3 text-base text-accent"
            >
              <Phone size={18} />
              {project.contact.phones[0]}
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
