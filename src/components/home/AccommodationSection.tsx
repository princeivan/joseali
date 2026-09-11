import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AccommodationCard from "@/components/cards/AccommodationCard";
import { accommodations } from "@/lib/data/accommodation";

export default function AccommodationSection() {
  return (
    <section className="bg-sand-100 py-20">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Where to stay" title="Stay comfortably" />
          <Link href="/accommodation" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-900 link-underline">
            View all stays
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accommodations.slice(0, 6).map((a) => (
            <AccommodationCard key={a.slug} accommodation={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
