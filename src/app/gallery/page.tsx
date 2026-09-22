import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of JoseAli Tours vehicles, destinations, tours and stays across Kenya.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="A look at our vehicles, tours and destinations." imageSeed="gallery-hero" imageAlt="Collage of JoseAli Tours travel photography" />
      <Breadcrumbs items={[{ label: "Gallery" }]} />
      <section className="py-16">
        <div className="container-edge">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
