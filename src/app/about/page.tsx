import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Repeat, BadgeCheck, HeartHandshake, Smile, Sofa } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import { placeholderImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about JoseAli Safaris, a Kenyan travel and transport company offering transfers, tours, safaris and accommodation across the coast.",
};

const values = [
  { icon: ShieldCheck, label: "Safety" },
  { icon: Repeat, label: "Reliability" },
  { icon: BadgeCheck, label: "Professionalism" },
  { icon: HeartHandshake, label: "Integrity" },
  { icon: Smile, label: "Customer Satisfaction" },
  { icon: Sofa, label: "Comfort" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About JoseAli Safaris"
        subtitle="Your trusted travel and transport partner."
        imageSeed="about-hero"
        imageAlt="JoseAli Safaris vehicle on a Kenyan coastal road"
      />
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <section className="py-16">
        <div className="container-edge grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our story" title="Our Story" />
            <p className="mt-5 text-base leading-relaxed text-ink-500">
              JoseAli Safaris is a Kenyan travel and transport company based on the coast,
              built around a simple idea: getting travellers where they need to go, safely
              and on time, whether that&apos;s an early-morning airport run, an SGR pickup, or a
              multi-day safari into Tsavo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-500">
              We work with local and international travellers, families, couples, corporate
              clients and hotel partners — coordinating transport, tours, accommodation
              recommendations and marine excursions around each traveller&apos;s plans.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src={placeholderImage("about-story", 900, 700)}
              alt="Traveller with a guide on safari"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-16">
        <div className="container-edge grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-line bg-white p-7">
            <h3 className="font-display text-xl text-forest-950">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              To provide exceptional travel services that exceed our customers&apos;
              expectations while promoting Kenya&apos;s natural beauty and culture.
            </p>
          </div>
          <div className="rounded-sm border border-line bg-white p-7">
            <h3 className="font-display text-xl text-forest-950">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              To be a leading travel and transport company in Kenya and East Africa, known
              for reliability, professionalism and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-edge">
          <SectionHeading eyebrow="What we stand for" title="Our Values" align="center" className="mx-auto" />
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900/5 text-forest-900">
                  <v.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm text-ink-700">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-950 py-16">
        <div className="container-edge flex flex-col items-center text-center">
          <h2 className="font-display text-2xl text-white sm:text-3xl">Ready to plan your journey?</h2>
          <Link
            href="/book"
            className="mt-6 inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            Plan Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
