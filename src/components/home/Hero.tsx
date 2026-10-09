import Image from "next/image";
import Link from "next/link";
import { Compass, Phone } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { placeholderImage } from "@/lib/images";
import { siteConfig, telLink } from "@/lib/config";

export default function Hero() {
  return (
    // <section className="relative overflow-hidden ">
    //   <div className="absolute inset-0">
    //     <Image
    //       src={placeholderImage("hero1", 980, 720)}
    //       alt="Tropical coastal road along the Kenyan coast with a safari transfer vehicle"
    //       fill
    //       priority
    //       sizes="100vw"
    //       className="object-cover opacity-70"
    //     />
    //    <div className="absolute inset-0 bg-gradient-to-r from-forest-950/92 via-forest-950/55 to-forest-950/10" />
    //    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
    //   </div>

      
    //   <div className="container-edge relative flex min-h-[460px] flex-col justify-center py-10 sm:min-h-[520px] sm:py-24">
    //     <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px] ">
    //       <div className="max-w-[720px]">
    //          <p className="mb-3 font-serif text-2xl italic text-[#c99312] sm:text-3xl">
    //           Welcome to JoseAli Tours
    //         </p>

    //         {/* Main heading */}
    //       <h1 className="mt-5 font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[3.3rem]">
    //         Discover Kenya&apos;s
    //         <br />
    //         <span className="text-emerald-600">Breathtaking Beauty</span>
    //       </h1>

    //         {/* Services line */}
    //         <p className="mt-5 text-lg font-semibold text-[#d5ebe7] sm:text-xl">
    //           Travel | Tours | Accommodation | Transfers | Car Hire
    //         </p>
    //         {/* Description */}
    //         <p className="mt-3 max-w-[560px] text-base leading-7 text-[#d5ebe7] sm:text-lg">
    //           We offer reliable transport, unforgettable tours and comfortable
    //           accommodation across Kenya.
    //         </p>
    //       <div className="mt-8 flex flex-wrap gap-3">
    //         <Link
    //           href="/book"
    //           className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
    //         >
    //           Book a Transfer
    //         </Link>
    //         <WhatsAppButton variant="outline" className="!text-white border-white/70 hover:!bg-white hover:!text-forest-950" />
    //       </div>
    //       </div>
    //     </div>
     
    //   </div>
    // </section>
    <section className="relative h-[470px] overflow-visible text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero7.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002d25]/90 via-[#00372d]/60 to-black/5" />

        <div className="relative mx-auto flex h-full max-w-[1240px] items-center px-6">
          <div className="-mt-12 max-w-[570px]">
            <div className="text-[13px] font-extrabold tracking-[3px]">WELCOME TO JOSEALI TOURS</div>
            <div className="my-4 h-[3px] w-7 bg-[#28a953]" />
            <h1 className="text-[42px] font-extrabold leading-[1.04] tracking-[-1.5px] sm:text-[46px]">
              Discover Kenya&apos;s
              <br />
              <span className="text-[#4ed16a]">Breathtaking Beauty</span>
            </h1>
            <p className="mt-4 max-w-[510px] text-[15px] leading-6">
              From stunning beaches to thrilling safaris, cultural experiences
              and unforgettable adventures,We create journeys that inspire
              and stay with you forever.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="destinations" className="inline-flex items-center gap-2 rounded-lg bg-[#168f4b] px-5 py-3.5 text-sm font-bold transition hover:bg-[#107b3e]">
                <Compass size={18} /> Explore Our Tours
              </a>
              <a href="gallery" className="inline-flex items-center gap-2 rounded-lg border border-white/85 px-5 py-3.5 text-sm font-bold">
                <span className="text-[10px]">▶</span> Watch Our Story
              </a>
            </div>
          </div>
        </div>
        </section>
  );
}
