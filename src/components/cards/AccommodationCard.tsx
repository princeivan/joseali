import Image from "next/image";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { Accommodation } from "@/lib/types";
import { formatPriceRange } from "@/lib/format";

export default function AccommodationCard({ accommodation }: { accommodation: Accommodation }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-line bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={accommodation.cardImage.src}
          alt={accommodation.cardImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!accommodation.isConfirmedPartner && (
          <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-forest-900">
            Recommended
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg text-forest-950">{accommodation.name}</h3>
          <span className="mt-1 inline-flex items-center gap-1 text-xs text-gold-600">
            <Star className="h-3.5 w-3.5 fill-gold-500 text-gold-500" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-500">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {accommodation.location} · {accommodation.propertyType}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{accommodation.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-ink-500">From</p>
            <p className="font-display text-base text-forest-900">{formatPriceRange(accommodation.priceRangeKsh)}</p>
          </div>
          <Link
            href={`/accommodation/${accommodation.slug}`}
            className="rounded-sm border border-forest-900 px-4 py-2 text-xs font-medium text-forest-900 transition-colors hover:bg-forest-900 hover:text-white"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}
