import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TourCard from "@/components/cards/TourCard";
import { tours } from "@/lib/data/tours";

export default function ToursSection() {
  return (
    <section className="py-20">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Tours & travel"
            title="Travel experiences worth remembering"
          />
          <Link href="/tours" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-900 link-underline">
            View all packages
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.slice(0, 6).map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
