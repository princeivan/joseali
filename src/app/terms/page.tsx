import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" imageSeed="terms-hero" imageAlt="JoseAli Safaris vehicle" />
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
      <section className="py-16">
        <div className="container-edge max-w-3xl space-y-6 text-sm leading-relaxed text-ink-700">
          <p className="text-xs uppercase tracking-wide text-ink-500">
            Placeholder content — to be reviewed by JoseAli Safaris and a legal advisor before publishing.
          </p>
          <div>
            <h2 className="font-display text-xl text-forest-950">Bookings</h2>
            <p className="mt-2">
              Submitting a booking or enquiry through this website is a request for
              services, not a confirmed booking. All requests are subject to vehicle and
              service availability, confirmed in writing or via WhatsApp by our team.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-forest-950">Pricing</h2>
            <p className="mt-2">
              Prices displayed are estimates unless otherwise confirmed. Final pricing
              depends on vehicle type, route, group size and season, and will be confirmed
              before travel.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-forest-950">Cancellations</h2>
            <p className="mt-2">
              Cancellation terms will be confirmed with each booking. Please contact us as
              early as possible if your plans change.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-forest-950">Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact {siteConfig.contact.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
