import Image from "next/image";
import Link from "next/link";
import { Plane, TrainFront, PawPrint, Bed, Compass, Anchor, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { placeholderImage } from "@/lib/images";

const items = [
  {
    icon: Plane,
    name: "Airport Transfers",
    description: "Comfortable and reliable airport pickups and drop-offs.",
    href: "/services/airport-transfers",
    seed: "svc-airport",
  },
  {
    icon: TrainFront,
    name: "SGR Transfers",
    description: "Stress-free transfers between SGR stations and your destination.",
    href: "/services/sgr-transfers",
    seed: "svc-sgr",
  },
  {
    icon: PawPrint,
    name: "Bush Safaris",
    description: "Explore Kenya's wildlife and unforgettable safari destinations.",
    href: "/services/bush-safaris",
    seed: "svc-bush",
  },
  {
    icon: Bed,
    name: "Accommodation",
    description: "Comfortable stays selected to suit your journey and budget.",
    href: "/accommodation",
    seed: "svc-accommodation",
  },
  {
    icon: Compass,
    name: "Tours & Travel",
    description: "Discover Kenya through carefully planned travel experiences.",
    href: "/tours",
    seed: "svc-tours",
  },
  {
    icon: Anchor,
    name: "Marine Experiences",
    description: "Explore the coast, islands and unforgettable ocean experiences.",
    href: "/services/marine-experiences",
    seed: "svc-marine",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20">
      <div className="container-edge">
        <SectionHeading
          eyebrow="What we offer"
          title="Our services"
          subtitle="Reliable travel solutions designed around your journey."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.href} className="group flex flex-col overflow-hidden rounded-sm border border-line bg-white">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={placeholderImage(item.seed)}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-sm bg-forest-950/85 text-gold-400">
                  <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg text-forest-950">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-forest-900 link-underline"
                >
                  View service
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
