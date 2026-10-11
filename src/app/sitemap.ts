import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/data/services";
import { tours } from "@/lib/data/tours";
import { accommodations } from "@/lib/data/accommodation";
import { destinations } from "@/lib/data/destinations";

// Next.js serves this file as /sitemap.xml. Submit that URL to Search Console.
// Keep static paths in sync with public pages; detail pages come from their data.
const staticPaths = [
  "/",
  "/about",
  "/services",
  "/tours",
  "/accommodation",
  "/destinations",
  "/gallery",
  "/contact",
  "/book",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map(({ slug }) => `/services/${slug}`),
    ...tours.map(({ slug }) => `/tours/${slug}`),
    ...accommodations.map(({ slug }) => `/accommodation/${slug}`),
    ...destinations.map(({ slug }) => `/destinations/${slug}`),
  ];

  // Use canonical, absolute URLs and omit duplicates. Add lastModified only
  // when actual content modification dates are available, not the build date.
  const urls = paths.map((route) => new URL(route, siteConfig.url).href);
  return Array.from(new Set(urls), (url) => ({ url }));
}
