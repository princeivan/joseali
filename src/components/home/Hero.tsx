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
    // <section className="relative h-[570px] overflow-visible text-white">
    //     <div
    //       className="absolute inset-0 bg-cover bg-center"
    //       style={{ backgroundImage: "url('/images/hero7.png')" }}
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-r from-[#002d25]/90 via-[#00372d]/60 to-black/5" />

    //     <div className="relative mx-auto items-center justify-center text-center flex h-full max-w-[1240px] items-center px-6">
    //       <div className=" max-w-[570px]">
    //         {/* <div className="text-[13px] font-extrabold tracking-[3px]">WELCOME TO JOSEALI TOURS</div>
    //         <div className="my-4 h-[3px] w-7 bg-[#28a953]" /> */}
    //         <h1 className="mt-4 text-[36px]  font-extrabold leading-[1.04] tracking-[-1.1px] sm:text-[46px]">
    //           Explore Kenya&apos;s beauty
             
    //           <br />
    //           <span className="text-[#4ed16a]">With Us</span>
    //         </h1>
    //         {/* <p className="mt-4 max-w-[510px] text-[15px] leading-[1.6] text-white sm:text-base">
    //           From stunning beaches to thrilling safaris, cultural experiences
    //           and unforgettable adventures,We create journeys that inspire
    //           and stay with you forever.
    //         </p> */}
    //         <div className="mt-5 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row min-[420px]:items-center">
    //           <a href="destinations" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#168447] px-5 py-3 text-sm font-bold text-white hover:bg-[#0F713B]]">
    //             <Compass size={18} /> Explore Our Tours
    //           </a>
    //           <a href="gallery" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/80 bg-black/10 px-5 py-3 text-sm font-bold text-white">
    //             <span className="text-[10px]">▶</span> Watch Our Story
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     </section>

<section className="relative overflow-hidden text-white">

  {/* MOBILE LAYOUT */}
  <div className="md:hidden">
    {/* Image directly below the header */}
    <div className="relative h-[260px] w-full">
      <img
        src="/images/hero7.png"
        alt="Discover Kenya with JoseAli Tours"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>

    {/* Text beneath the image */}
    <div className="bg-[#073C32] px-5 pb-8 pt-7 text-center">
      <p className="text-xs font-semibold uppercase tracking-[2px] text-[#D6A23B]">
        Welcome to JoseAli Tours
      </p>

      <h1 className="mx-auto mt-3 max-w-[400px] text-[32px] font-extrabold leading-[1.12] tracking-tight">
        Explore Kenya&apos;s Beauty
        <span className="mt-1 block text-[#4ED16A]">
          With Us
        </span>
      </h1>

      <p className="mx-auto mt-4 max-w-[360px] text-[15px] leading-6 text-white/85">
        Airport/Sgr transfers, coastal tours and safaris. Local service from Diani.
      </p>

      <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:justify-center">
        <a
          href="/destinations"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#168447] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#126F3B]"
        >
          <Compass size={18} />
          Explore Our Tours
        </a>

        <a
          href="/gallery"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Watch Our Story
          <span className="text-[#D6A23B]">▶</span>
        </a>
      </div>
    </div>
  </div>

  {/* DESKTOP LAYOUT */}
  <div className="relative hidden min-h-[570px] items-center justify-center md:flex">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero7.png')" }}
    />

    <div className="absolute inset-0 bg-gradient-to-r from-[#002D25]/85 via-[#00372D]/55 to-black/10" />

    <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[3px] text-[#D6A23B]">
        Welcome to JoseAli Tours
      </p>

      <h1 className="mx-auto mt-4 max-w-[760px] text-[46px] font-extrabold leading-[1.08] tracking-tight lg:text-[58px]">
        Explore Kenya&apos;s Beauty
        <span className="block text-[#4ED16A]">With Us</span>
      </h1>

      <p className="mx-auto mt-5 max-w-[590px] text-base leading-7 text-white/90 lg:text-lg">
        Airport/Sgr transfers, coastal tours and safaris. Local service from Diani.
      </p>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <a
          href="/destinations"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#168447] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#126F3B]"
        >
          <Compass size={18} />
          Explore Our Tours
        </a>

        <a
          href="/gallery"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/70 bg-black/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Watch Our Story
          <span className="text-[#D6A23B]">▶</span>
        </a>
      </div>
    </div>
  </div>
</section>
  );
}
