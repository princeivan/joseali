import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, CheckCircle2, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { accommodations, getAccommodationBySlug } from "@/lib/data/accommodation";
import { formatPriceRange } from "@/lib/format";

export function generateStaticParams() {
  return accommodations.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const acc = getAccommodationBySlug(slug);
  if (!acc) return {};
  return { title: acc.name, description: acc.shortDescription };
}

export default async function AccommodationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const acc = getAccommodationBySlug(slug);
  if (!acc) notFound();

  return (
    <>
      <PageHero title={acc.name} subtitle={`${acc.location} · ${acc.propertyType}`} imageSeed={`${acc.slug}-hero`} imageAlt={acc.heroImage.alt} />
      <Breadcrumbs items={[{ label: "Accommodation", href: "/accommodation" }, { label: acc.name }]} />

      {!acc.isConfirmedPartner && (
        <div className="border-b border-line bg-gold-500/15">
          <div className="container-edge py-2.5 text-center text-xs font-medium text-forest-900">
            Recommended Accommodation — not yet a confirmed JoseAli Safaris partner property
          </div>
        </div>
      )}

      <section className="py-16">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {acc.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {acc.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-sm">
                    <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            <p className="mt-8 text-base leading-relaxed text-ink-500">{acc.description}</p>

            <div className="mt-10">
              <h3 className="font-display text-lg text-forest-950">Rooms</h3>
              <div className="mt-4 space-y-3">
                {acc.rooms.map((room) => (
                  <div key={room.name} className="rounded-sm border border-line p-4">
                    <p className="font-medium text-forest-950">{room.name}</p>
                    <p className="mt-1 text-sm text-ink-500">{room.description}</p>
                    <p className="mt-1 text-xs text-ink-500">Occupancy: {room.occupancy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-display text-lg text-forest-950">Facilities</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {acc.facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-sm border border-line bg-white p-6 lg:sticky lg:top-24">
              <p className="inline-flex items-center gap-1.5 text-sm text-ink-500">
                <MapPin className="h-4 w-4 text-gold-600" aria-hidden="true" /> {acc.location}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-ink-500">Price range</p>
              <p className="font-display text-2xl text-forest-900">{formatPriceRange(acc.priceRangeKsh)}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-500">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Check-in {acc.checkIn} · Check-out {acc.checkOut}
              </div>
              <div className="mt-5">
                <WhatsAppButton
                  message={`Hello JoseAli Safaris, I would like to request a booking enquiry for ${acc.name}.`}
                  label="Request Booking"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
