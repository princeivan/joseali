import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, MapPin, CheckCircle2, XCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BookingForm from "@/components/booking/BookingForm";
import TourCard from "@/components/cards/TourCard";
import { tours, getTourBySlug } from "@/lib/data/tours";
import { formatKsh } from "@/lib/format";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return { title: tour.name, description: tour.shortDescription };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.slug !== tour.slug && t.type === tour.type).slice(0, 3);

  return (
    <>
      <PageHero title={tour.name} subtitle={`${tour.location} · ${tour.durationLabel}`} imageSeed={`${tour.slug}-hero`} imageAlt={tour.heroImage.alt} />
      <Breadcrumbs items={[{ label: "Tours & Travel", href: "/tours" }, { label: tour.name }]} />

      <section className="py-16">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-4 text-sm text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-gold-600" aria-hidden="true" /> {tour.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-gold-600" aria-hidden="true" /> {tour.durationLabel}
              </span>
            </div>

            <p className="mt-5 text-base leading-relaxed text-ink-500">{tour.overview}</p>

            <div className="mt-10">
              <h3 className="font-display text-lg text-forest-950">Itinerary</h3>
              <div className="mt-5 space-y-5 border-l-2 border-line pl-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative">
                    <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gold-500" aria-hidden="true" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">{day.day}</p>
                    <h4 className="mt-1 font-display text-base text-forest-950">{day.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg text-forest-950">What&apos;s included</h3>
                <ul className="mt-4 space-y-2.5">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest-950">What&apos;s not included</h3>
                <ul className="mt-4 space-y-2.5">
                  {tour.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {tour.gallery.length > 0 && (
              <div className="mt-10">
                <h3 className="font-display text-lg text-forest-950">Gallery</h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {tour.gallery.map((img, i) => (
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
              <p className="text-[11px] uppercase tracking-wide text-ink-500">Starting from</p>
              <p className="font-display text-2xl text-forest-900">{formatKsh(tour.startingPriceKsh)}</p>
              <p className="mt-1 text-xs text-ink-500">per person, subject to group size and season</p>
              <div className="mt-5">
                <WhatsAppButton
                  message={`Hello JoseAli Safaris, I am interested in the ${tour.name} package.`}
                  className="w-full"
                />
              </div>
            </div>
            <div className="mt-6">
              <BookingForm defaultService="Tour" />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-sand-100 py-16">
          <div className="container-edge">
            <h3 className="font-display text-2xl text-forest-950">Related tours</h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
