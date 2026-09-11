import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/data/services";
import { tours } from "@/lib/data/tours";
import { accommodations } from "@/lib/data/accommodation";
import { destinations } from "@/lib/data/destinations";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
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
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
  }));
  const tourRoutes = tours.map((t) => ({
    url: `${siteConfig.url}/tours/${t.slug}`,
    lastModified: new Date(),
  }));
  const accommodationRoutes = accommodations.map((a) => ({
    url: `${siteConfig.url}/accommodation/${a.slug}`,
    lastModified: new Date(),
  }));
  const destinationRoutes = destinations.map((d) => ({
    url: `${siteConfig.url}/destinations/${d.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...tourRoutes, ...accommodationRoutes, ...destinationRoutes];
}
