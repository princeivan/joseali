import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Users, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";
import BookingForm from "@/components/booking/BookingForm";
import { services, getServiceBySlug } from "@/lib/data/services";
import { BookingServiceType } from "@/lib/types";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.shortDescription };
}

const bookingServiceMap: Record<string, BookingServiceType> = {
  "airport-transfers": "Airport Transfer",
  "sgr-transfers": "SGR Transfer",
  "other-transfers": "Other Transport",
  "corporate-transport": "Other Transport",
  "bush-safaris": "Safari",
  "marine-experiences": "Marine Experience",
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.name} subtitle={service.shortDescription} imageSeed={`${service.slug}-hero`} imageAlt={service.heroImage.alt} />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name }]} />

      <section className="py-16">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base leading-relaxed text-ink-500">{service.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg text-forest-950">What we offer</h3>
                <ul className="mt-4 space-y-2.5">
                  {service.whatOffered.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg text-forest-950">Who it&apos;s for</h3>
                <ul className="mt-4 space-y-2.5">
                  {service.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {service.popularRoutes && (
              <div className="mt-10">
                <h3 className="font-display text-lg text-forest-950">Popular routes</h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {service.popularRoutes.map((route) => (
                    <li
                      key={route}
                      className="inline-flex items-center gap-1.5 rounded-sm bg-sand-100 px-3 py-1.5 text-xs text-ink-700"
                    >
                      <MapPin className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                      {route}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-3">
              <WhatsAppButton
                message={`Hello JoseAli Safaris, I am interested in your ${service.name} service.`}
              />
              <CallButton />
            </div>

            <div className="mt-14">
              <FAQ items={service.faqs} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <h3 className="mb-4 font-display text-lg text-forest-950">Request this service</h3>
              <BookingForm defaultService={bookingServiceMap[service.slug] ?? "Other Transport"} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-12">
        <div className="container-edge flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-ink-500">Looking for something else?</p>
          <Link href="/services" className="text-sm font-medium text-forest-900 link-underline">
            Browse all services
          </Link>
        </div>
      </section>
    </>
  );
}
