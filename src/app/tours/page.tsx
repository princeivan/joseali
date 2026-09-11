import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ToursFilterList from "@/components/tours/ToursFilterList";

export const metadata: Metadata = {
  title: "Tours & Travel",
  description: "Browse JoseAli Safaris' tour packages — coastal getaways, bush safaris, city tours and marine experiences across Kenya.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        title="Tours & Travel"
        subtitle="Carefully planned travel experiences across Kenya."
        imageSeed="tours-hero"
        imageAlt="Safari vehicle on a tour"
      />
      <Breadcrumbs items={[{ label: "Tours & Travel" }]} />
      <section className="py-16">
        <div className="container-edge">
          <SectionHeading eyebrow="Find your trip" title="Our tour packages" />
          <div className="mt-10">
            <Suspense fallback={null}>
              <ToursFilterList />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
