import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationCard from "@/components/cards/DestinationCard";
import { destinations } from "@/lib/data/destinations";

export default function DestinationsSection() {
  return (
    <section className=" py-6 sm:py-10 lg:py-12">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Where to go" title="Explore Kenya" />
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 link-underline"
          >
            View all destinations
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {destinations.slice(0, 4).map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
