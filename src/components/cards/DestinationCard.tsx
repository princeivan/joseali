import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Destination } from "@/lib/types";
import { formatKsh } from "@/lib/format";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block h-80 overflow-hidden rounded-sm"
    >
      <Image
        src={destination.cardImage.src}
        alt={destination.cardImage.alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-400">
          {destination.category}
        </span>
        <h3 className="mt-1 font-display text-xl text-white">{destination.name}</h3>
        <p className="mt-1 text-sm text-sand-100/85">{destination.shortDescription}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-sand-100/70">
             {formatKsh(destination.startingPriceKsh)}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-white">
            Explore
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
