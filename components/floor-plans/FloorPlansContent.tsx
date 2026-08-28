"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, ZoomIn, ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { Section, ButtonLink } from "@/components/shared/Section";
import { project } from "@/lib/data";
import type { Flat } from "@/types";
import { cn } from "@/lib/utils";

function FlatDetail({ flat, isOpen, onToggle }: { flat: Flat; isOpen: boolean; onToggle: () => void }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div id={`flat-${flat.id}`} className="scroll-mt-28">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-sm border border-navy/10 bg-white px-6 py-5 text-left transition-colors hover:border-navy/20"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="font-serif text-xl text-navy sm:text-2xl">
            {flat.size} sq.ft — {flat.facing} Facing
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-base text-charcoal/70">
            <Compass size={16} aria-hidden />
            {flat.config}
          </p>
        </div>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-charcoal/50 transition-transform",
            isOpen && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="border border-t-0 border-navy/10 bg-white px-6 pb-6">
          <div className="grid gap-8 pt-6 lg:grid-cols-2">
            <div>
              <button
                type="button"
                onClick={() => setZoomed(true)}
                className="group relative block w-full overflow-hidden rounded-sm bg-cream-200"
                aria-label={`Zoom ${flat.size} sq.ft floor plan`}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={flat.image}
                    alt={`${flat.size} sq.ft ${flat.facing} facing floor plan`}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-sm bg-navy/80 px-3 py-1.5 text-sm text-cream opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn size={14} aria-hidden />
                  Click to zoom
                </span>
              </button>
            </div>

            <div>
              <h4 className="text-lg font-medium text-navy">Room Specifications</h4>
              <div className="mt-4 overflow-hidden rounded-sm border border-navy/10">
                <table className="w-full text-base">
                  <thead>
                    <tr className="bg-cream">
                      <th className="px-4 py-3 text-left font-medium text-navy">Room</th>
                      <th className="px-4 py-3 text-left font-medium text-navy">Dimensions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flat.rooms.map((room, i) => (
                      <tr
                        key={room.name}
                        className={i % 2 === 0 ? "bg-white" : "bg-cream/50"}
                      >
                        <td className="px-4 py-3 text-charcoal">{room.name}</td>
                        <td className="px-4 py-3 text-charcoal/80">{room.dimensions}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-base text-charcoal/75">{flat.notes}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {flat.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-sm bg-accent/10 px-3 py-1 text-sm text-accent-dark"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <ButtonLink href={`/contact?flat=${flat.id}`}>
                  Enquire About This Flat
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      )}

      {zoomed && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed floor plan"
          onClick={() => setZoomed(false)}
          onKeyDown={(e) => e.key === "Escape" && setZoomed(false)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-sm bg-cream/10 px-4 py-2 text-base text-cream hover:bg-cream/20"
            onClick={() => setZoomed(false)}
          >
            Close
          </button>
          <div className="relative max-h-[90vh] max-w-5xl overflow-auto">
            <Image
              src={flat.image}
              alt={`${flat.size} sq.ft floor plan — zoomed`}
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function FloorPlansContent() {
  const [openId, setOpenId] = useState<string>(project.flats[0]?.id ?? "");

  return (
    <>
      <section className="bg-cream pt-28 pb-12">
        <div className="container-content px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-3xl text-navy sm:text-4xl">
              Floor Plans
            </h1>
            <p className="mt-4 max-w-2xl text-base text-charcoal/80 sm:text-lg">
              Four thoughtfully planned 3BHK layouts from 1543 to 1726 sq.ft.
              Select a flat to view detailed room dimensions and zoomable floor plans.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section background="white" className="!pt-8">
        <div className="mb-8 hidden gap-2 lg:flex" role="tablist" aria-label="Flat sizes">
          {project.flats.map((flat) => (
            <button
              key={flat.id}
              type="button"
              role="tab"
              aria-selected={openId === flat.id}
              onClick={() => setOpenId(flat.id)}
              className={cn(
                "rounded-sm px-5 py-2.5 text-base font-medium transition-colors",
                openId === flat.id
                  ? "bg-navy text-cream"
                  : "bg-cream text-charcoal hover:bg-cream-200"
              )}
            >
              {flat.size} sq.ft
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {project.flats.map((flat, index) => (
            <FadeIn key={flat.id} delay={index * 0.05}>
              <FlatDetail
                flat={flat}
                isOpen={openId === flat.id}
                onToggle={() =>
                  setOpenId(openId === flat.id ? "" : flat.id)
                }
              />
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
