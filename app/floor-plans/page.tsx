import type { Metadata } from "next";
import { FloorPlansContent } from "@/components/floor-plans/FloorPlansContent";
import { project } from "@/lib/data";

export const metadata: Metadata = {
  title: "Floor Plans",
  description: `Explore 3BHK floor plans at ${project.name}: 1543, 1641, 1694 & 1726 sq.ft with North, West & East facing options.`,
};

export default function FloorPlansPage() {
  return <FloorPlansContent />;
}
