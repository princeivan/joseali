import Image from "next/image";
import Link from "next/link";
import { Plane, TrainFront, Bed, Compass, Anchor, Briefcase, Car, ArrowRight } from "lucide-react";
import { Service } from "@/lib/types";

const icons = {
  plane: Plane,
  train: TrainFront,
  bus: TrainFront,
  bed: Bed,
  compass: Compass,
  anchor: Anchor,
  briefcase: Briefcase,
  car: Car,
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-line bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.cardImage.src}
          alt={service.cardImage.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-sm bg-forest-950/85 text-gold-400">
          <Icon className="h-4.5 w-4.5" aria-hidden="true" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg text-forest-950">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{service.shortDescription}</p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-900 link-underline"
        >
          View service
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
