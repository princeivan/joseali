import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { placeholderImage } from "@/lib/images";
import { siteConfig, telLink } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-950">
      <div className="absolute inset-0">
        <Image
          src={placeholderImage("hero-coastal-road", 1920, 1080)}
          alt="Tropical coastal road along the Kenyan coast with a safari transfer vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/65 to-forest-950/20" />
      </div>

      <div className="container-edge relative flex min-h-[560px] flex-col justify-center py-24 sm:min-h-[620px]">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
            Kenya Transport, Tours &amp; Safaris
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Travel safe.
            <br />
            Explore more.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-sand-100/90">
            Reliable transport, unforgettable tours and comfortable travel experiences
            across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
            >
              Book a Transfer
            </Link>
            <WhatsAppButton variant="outline" className="!text-white border-white/70 hover:!bg-white hover:!text-forest-950" />
          </div>
        </div>

        <div className="mt-12 w-full max-w-sm rounded-sm border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-400">
            Need Assistance?
          </p>
          <p className="mt-2 text-sm text-white">
            {siteConfig.contact.directorLabel}: {siteConfig.contact.directorName}
          </p>
          <a href={telLink()} className="mt-3 flex items-center gap-2 text-lg font-medium text-white hover:text-gold-400">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <p className="text-xs text-sand-100/70">
            {siteConfig.contact.altContactName} — {siteConfig.contact.altContactRole}
          </p>
        </div>
      </div>
    </section>
  );
}
