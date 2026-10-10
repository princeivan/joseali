import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Destination } from "@/lib/types";
import { formatKsh } from "@/lib/format";

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    
<Link
  href={`/destinations/${destination.slug}`}
  className="group relative block h-[230px] overflow-hidden rounded-lg bg-[#073C32] sm:h-[300px] lg:h-[340px]"
>
  <Image
    src={destination.cardImage.src}
    alt={destination.cardImage.alt}
    fill
    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
  />

  {/* Dark overlay for readable text */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#052F28]/95 via-[#052F28]/35 to-transparent" />

  {/* Destination details */}
  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5">
    <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#E5BD63] sm:text-[11px]">
      {destination.category}
    </span>

    <h3 className="mt-1 text-base font-bold leading-snug text-white sm:text-xl">
      {destination.name}
    </h3>

    <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/85 sm:text-sm">
      {destination.shortDescription}
    </p>

    <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/20 pt-2.5">
      <span className="min-w-0 truncate text-[11px] font-medium text-white/90 sm:text-xs">
        {formatKsh(destination.startingPriceKsh)}
      </span>

      <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-white transition-colors group-hover:text-[#E5BD63] sm:text-sm">
        Explore
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </div>
  </div>
</Link>
  );
}
