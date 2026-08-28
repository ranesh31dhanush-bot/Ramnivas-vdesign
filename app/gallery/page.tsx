import type { Metadata } from "next";
import { GalleryContent } from "@/components/shared/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View building elevations, project brochures, and floor plan renders for Virat Ramnivas.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
