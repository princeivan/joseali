import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import AccommodationFilterList from "@/components/accommodation/AccommodationFilterList";

export const metadata: Metadata = {
  title: "Accommodation",
  description: "Recommended hotels, resorts and stays along the Kenyan coast, selected to suit your journey and budget.",
};

export default function AccommodationPage() {
  return (
    <>
      <PageHero
        title="Accommodation"
        subtitle="Comfortable stays selected to suit your journey and budget."
        imageSeed="accommodation-hero"
        imageAlt="Beachfront resort pool"
      />
      <Breadcrumbs items={[{ label: "Accommodation" }]} />
      <section className="py-16">
        <div className="container-edge">
          <SectionHeading eyebrow="Where to stay" title="Recommended accommodation" subtitle="These are recommended stays, not confirmed business partnerships." />
          <div className="mt-10">
            <AccommodationFilterList />
          </div>
        </div>
      </section>
    </>
  );
}
