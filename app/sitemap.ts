import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

const routes = [
  "",
  "/floor-plans",
  "/amenities",
  "/location",
  "/gallery",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
