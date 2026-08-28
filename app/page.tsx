import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { QuickFacts } from "@/components/home/QuickFacts";
import { AmenitiesPreview } from "@/components/home/AmenitiesPreview";
import { FlatPreview } from "@/components/home/FlatPreview";
import { BrandsStrip } from "@/components/home/BrandsStrip";
import { LocationTeaser } from "@/components/home/LocationTeaser";
import { FooterCTA } from "@/components/home/FooterCTA";
import { project } from "@/lib/data";

export const metadata: Metadata = {
  title: "Premium 3BHK Flats in Temple Alwal",
  description: `${project.name} — ${project.tagline} at ${project.location.area}. ${project.status.label}. 1543 to 1726 sq.ft. ${project.location.roadFrontage}.`,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickFacts />
      <FlatPreview />
      <AmenitiesPreview />
      <BrandsStrip />
      <LocationTeaser />
      <FooterCTA />
    </>
  );
}
