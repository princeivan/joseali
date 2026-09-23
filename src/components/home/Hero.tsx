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
          src={placeholderImage("hero1", 980, 720)}
          alt="Tropical coastal road along the Kenyan coast with a safari transfer vehicle"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/65 to-forest-950/20" />
        
      </div>

      {/* <div className="container-edge relative flex min-h-[560px] flex-col justify-center py-3.5 sm:min-h-[620px]"> */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-5 pb-32 pt-10 sm:px-8 lg:px-12 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] ">
          <div className="max-w-[720px]">
             <p className="mb-3 font-serif text-2xl italic text-[#c99312] sm:text-3xl">
              Welcome to JoseAli Tours
            </p>

            {/* Main heading */}
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-[#d5ebe7] sm:text-6xl lg:text-7xl xl:text-[78px]">
              Explore Kenya&apos;s
              <br />
              <span className="text-[#d5ebe7]">Beauty</span>
            </h1>

            {/* Services line */}
            <p className="mt-5 text-lg font-semibold text-[#d5ebe7] sm:text-xl">
              Travel | Tours | Accommodation | Transfers | Car Hire
            </p>
            {/* Description */}
            <p className="mt-3 max-w-[560px] text-base leading-7 text-[#d5ebe7] sm:text-lg">
              We offer reliable transport, unforgettable tours and comfortable
              accommodation across Kenya.
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
          {/* <div className="hidden justify-self-end lg:block">
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
          </div> */}
         
          
        </div>

        
      </div>
    </section>
  );
}
