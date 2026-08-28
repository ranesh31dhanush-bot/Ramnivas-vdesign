"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section, SectionHeader } from "@/components/shared/Section";
import { galleryImages } from "@/lib/data";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "elevation", label: "Elevation" },
  { id: "brochure", label: "Brochures" },
  { id: "floorplan", label: "Floor Plans" },
] as const;

export function GalleryContent() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const navigate = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    const next =
      direction === "prev"
        ? (lightboxIndex - 1 + filtered.length) % filtered.length
        : (lightboxIndex + 1) % filtered.length;
    setLightboxIndex(next);
  };

  return (
    <>
      <section className="bg-cream pt-28 pb-12">
        <div className="container-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl">Gallery</h1>
            <p className="mt-4 max-w-2xl text-base text-charcoal/80 sm:text-lg">
              Explore building elevations, project brochures, and detailed floor plan renders.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section background="white" className="!pt-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={cn(
                "rounded-sm px-4 py-2 text-base transition-colors",
                filter === cat.id
                  ? "bg-navy text-cream"
                  : "bg-cream text-charcoal hover:bg-cream-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((image, index) => (
            <FadeIn key={image.src} delay={(index % 6) * 0.05}>
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-cream-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/20" />
              </button>
            </FadeIn>
          ))}
        </div>
      </Section>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
}) {
  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95"
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-sm p-2 text-cream hover:bg-cream/10"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("prev")}
        className="absolute left-4 z-10 rounded-sm p-2 text-cream hover:bg-cream/10"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        type="button"
        onClick={() => onNavigate("next")}
        className="absolute right-4 z-10 mr-12 rounded-sm p-2 text-cream hover:bg-cream/10"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative max-h-[85vh] max-w-5xl px-16">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          className="h-auto max-h-[85vh] w-auto object-contain"
        />
        <p className="mt-4 text-center text-base text-cream/80">{image.alt}</p>
      </div>
    </div>
  );
}
