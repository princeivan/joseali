import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationsFilterList from "@/components/destinations/DestinationsFilterList";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Discover Kenya's coast, safari parks, cities and marine destinations with JoseAli Safaris.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        title="Destinations"
        subtitle="Discover breathtaking places and create unforgettable memories."
        imageSeed="destinations-hero"
        imageAlt="Kenyan coastline aerial view"
      />
      <Breadcrumbs items={[{ label: "Destinations" }]} />
      <section className="py-16">
        <div className="container-edge">
          <SectionHeading eyebrow="Explore" title="Discover Kenya" />
          <div className="mt-10">
            <DestinationsFilterList />
          </div>
        </div>
      </section>
    </>
  );
}
