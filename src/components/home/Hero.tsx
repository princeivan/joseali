import Link from "next/link";
import { Compass } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
<section className="relative overflow-hidden text-white">

  {/* MOBILE LAYOUT */}
  <div className="md:hidden">
    {/* Image directly below the header */}
    <div className="relative h-[260px] w-full">
      <HeroCarousel />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>

    {/* Text beneath the image */}
    <div className="bg-[#073C32] px-5 pb-8 pt-7 text-center">
      <p className="text-xs font-semibold uppercase tracking-[2px] text-[#D6A23B]">
        Welcome to Joseali Tours
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
        <Link
          href="/destinations"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#168447] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#126F3B]"
        >
          <Compass size={18} />
          Explore Our Tours
        </Link>

        <Link
          href="/gallery"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Watch Our Story
          <span className="text-[#D6A23B]">▶</span>
        </Link>
      </div>
    </div>
  </div>

  {/* DESKTOP LAYOUT */}
  <div className="relative hidden min-h-[570px] items-center justify-center md:flex">
    <HeroCarousel />

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#002D25]/85 via-[#00372D]/55 to-black/10" />

    <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 pb-24 pt-16 text-center">
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
        <Link
          href="/destinations"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#168447] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#126F3B]"
        >
          <Compass size={18} />
          Explore Our Tours
        </Link>

        <Link
          href="/gallery"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/70 bg-black/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Watch Our Story
          <span className="text-[#D6A23B]">▶</span>
        </Link>
      </div>
    </div>
  </div>
</section>
  );
}
