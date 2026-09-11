import Image from "next/image";
import Link from "next/link";
import { placeholderImage } from "@/lib/images";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container-edge grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={placeholderImage("about-preview-main", 900, 1100)}
              alt="JoseAli Safaris transfer vehicle on a coastal road"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-52 overflow-hidden rounded-sm border-4 border-sand-50 shadow-lg sm:block">
            <Image
              src={placeholderImage("about-preview-secondary", 400, 320)}
              alt="Traveller boarding a JoseAli Safaris vehicle"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">About us</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-forest-950 sm:text-4xl">
            Your journey. Our priority.
          </h2>
          <span className="mt-4 block h-[3px] w-14 bg-gold-500" aria-hidden="true" />
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500">
            JoseAli Safaris provides reliable transport, tours, travel and accommodation
            services designed to make travelling across Kenya simple, comfortable and
            memorable.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-sm bg-forest-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-forest-800"
            >
              About JoseAli Safaris
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm border border-forest-900 px-5 py-3 text-sm font-medium text-forest-900 transition-colors hover:bg-forest-900 hover:text-white"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
