import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" imageSeed="privacy-hero" imageAlt="JoseAli Safaris office" />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="py-16">
        <div className="container-edge max-w-3xl space-y-6 text-sm leading-relaxed text-ink-700">
          <p className="text-xs uppercase tracking-wide text-ink-500">
            Placeholder content — to be reviewed by JoseAli Safaris and a legal advisor before publishing.
          </p>
          <div>
            <h2 className="font-display text-xl text-forest-950">Information we collect</h2>
            <p className="mt-2">
              When you make a booking enquiry or contact us through this website, we collect
              information such as your name, phone number, email address and travel details,
              solely to respond to your request and arrange the services you&apos;ve asked
              about.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-forest-950">How we use your information</h2>
            <p className="mt-2">
              Information you provide is used to process booking requests, communicate with
              you about your trip, and improve our services. We do not sell your personal
              information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-forest-950">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to {siteConfig.contact.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
