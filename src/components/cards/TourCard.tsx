import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { Tour } from "@/lib/types";
import { formatKsh } from "@/lib/format";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-line bg-white">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={tour.cardImage.src}
          alt={tour.cardImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-forest-900">
          {tour.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-forest-950">{tour.name}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-500">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {tour.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {tour.durationLabel}
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{tour.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <div>
            {/* <p className="text-[11px] uppercase tracking-wide text-ink-500">From</p> */}
            <p className="font-display text-lg text-forest-900">{formatKsh(tour.startingPriceKsh)}</p>
          </div>
          <Link
            href={`/tours/${tour.slug}`}
            className="rounded-sm bg-forest-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-forest-800"
          >
            View package
          </Link>
        </div>
      </div>
    </div>
  );
}
