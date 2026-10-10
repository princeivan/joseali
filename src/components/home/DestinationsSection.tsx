import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationCard from "@/components/cards/DestinationCard";
import { destinations } from "@/lib/data/destinations";

export default function DestinationsSection() {
  return (
    
<section className="py-8 sm:py-10 lg:py-14">
  <div className="container-edge">

    {/* Section heading */}
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <SectionHeading
          eyebrow="PLACES WORTH DISCOVERING"
          title="Explore Kenya"
        />
        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
          From the coast to the wild, find a destination for your next trip.
        </p>
      </div>

      <Link
        href="/destinations"
        className="inline-flex min-h-10 w-fit items-center gap-2 text-sm font-semibold text-green-800 transition-colors hover:text-green-600"
      >
        View all destinations
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </div>

    {/* Destination cards */}
    <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4 lg:gap-5">
      {destinations.slice(0, 4).map((d) => (
        <DestinationCard
          key={d.slug}
          destination={d}
        />
      ))}
    </div>

  </div>
</section>
  );
}
