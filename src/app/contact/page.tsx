import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CallButton from "@/components/ui/CallButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactForm from "@/components/booking/ContactForm";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { siteConfig, telLink, mailtoLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with JoseAli Safaris for transport, tours, safaris and accommodation enquiries across Kenya.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help plan your next journey." imageSeed="contact-hero" imageAlt="JoseAli Safaris office contact" />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="py-16">
        <div className="container-edge grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-forest-950">Get in Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              We&apos;re here to help you plan your next journey. Reach out via phone,
              WhatsApp or the contact form.
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <div>
                  <p className="text-sm text-ink-500">{siteConfig.contact.directorLabel}: {siteConfig.contact.directorName}</p>
                  <a href={telLink()} className="font-medium text-forest-950 hover:text-gold-600">
                    {siteConfig.contact.phoneDisplay} — {siteConfig.contact.altContactName}
                  </a>
                  <p className="text-xs text-ink-500">{siteConfig.contact.altContactRole}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <a href={mailtoLink()} className="font-medium text-forest-950 hover:text-gold-600">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                <p className="font-medium text-forest-950">{siteConfig.contact.city}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton variant="solid" />
              <WhatsAppButton />
            </div>

            <div className="mt-7 flex items-center gap-4">
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-forest-900 hover:text-gold-600">
                <FacebookIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-forest-900 hover:text-gold-600">
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.youtube} aria-label="YouTube" className="text-forest-900 hover:text-gold-600">
                <YoutubeIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-sm border border-line bg-sand-100">
              <div className="flex h-52 flex-col items-center justify-center gap-2 text-center">
                <MapPin className="h-6 w-6 text-ink-500" aria-hidden="true" />
                <p className="text-sm text-ink-500">Our Location</p>
                <p className="text-xs text-ink-500">
                  Map placeholder — exact business location to be confirmed.
                </p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
