import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Car, ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TourCard from "@/components/cards/TourCard";
import { destinations, getDestinationBySlug } from "@/lib/data/destinations";
import { tours } from "@/lib/data/tours";
import { accommodations } from "@/lib/data/accommodation";
import AccommodationCard from "@/components/cards/AccommodationCard";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return { title: destination.name, description: destination.shortDescription };
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const relatedTours = tours.filter((t) => t.relatedDestinationSlugs.includes(destination.slug));
  const relatedStays = accommodations.filter((a) => a.location.toLowerCase().includes(destination.name.toLowerCase().split(" ")[0]));

  return (
    <>
      <PageHero title={destination.name} subtitle={destination.shortDescription} imageSeed={`${destination.slug}-hero`} imageAlt={destination.heroImage.alt} />
      <Breadcrumbs items={[{ label: "Destinations", href: "/destinations" }, { label: destination.name }]} />

      <section className="py-16">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-ink-500">{destination.overview}</p>

            <div className="mt-10">
              <h3 className="font-display text-lg text-forest-950">Things to do</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {destination.thingsToDo.map((t) => (
                  <li key={t} className="rounded-sm bg-sand-100 px-3 py-2 text-sm text-ink-700">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <CalendarDays className="h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="font-medium text-forest-950">Best time to visit</p>
                  <p className="mt-1 text-sm text-ink-500">{destination.bestTimeToVisit}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Car className="h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="font-medium text-forest-950">Transport options</p>
                  <ul className="mt-1 space-y-1 text-sm text-ink-500">
                    {destination.transportOptions.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {destination.gallery.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display text-lg text-forest-950">Gallery</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {destination.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-sm">
                      <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-sm border border-line bg-white p-6 lg:sticky lg:top-24">
              <h3 className="font-display text-lg text-forest-950">Book your trip</h3>
              <p className="mt-2 text-sm text-ink-500">
                Tell us your dates and we&apos;ll put together transport, a tour and accommodation
                for {destination.name}.
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <WhatsAppButton
                  message={`Hello JoseAli Safaris, I am interested in visiting ${destination.name}.`}
                  className="w-full"
                />
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-forest-900 px-5 py-3 text-sm font-medium text-forest-900 hover:bg-forest-900 hover:text-white"
                >
                  Book Your Trip
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedTours.length > 0 && (
        <section className="bg-sand-100 py-16">
          <div className="container-edge">
            <h3 className="font-display text-2xl text-forest-950">Popular tours here</h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedStays.length > 0 && (
        <section className="py-16">
          <div className="container-edge">
            <h3 className="font-display text-2xl text-forest-950">Where to stay</h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStays.map((a) => (
                <AccommodationCard key={a.slug} accommodation={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
