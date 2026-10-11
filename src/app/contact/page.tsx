import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CallButton from "@/components/ui/CallButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactForm from "@/components/booking/ContactForm";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { siteConfig, telLink, mailtoLink } from "@/lib/config";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: "Get in touch with JoseAli Tours for transport, tours, safaris and accommodation enquiries across Kenya.",
  path: "/contact",
});

export default function ContactPage() {
  const mapQuery = encodeURIComponent("JOSEALI TOURS. LIMITED, Ukunda, Kenya");
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help plan your next journey." imageSeed="contact-hero" imageAlt="JoseAli Tours office contact" />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="bg-blue-50/40 py-8 sm:py-12 lg:py-16">
        <div className="container-edge grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="min-w-0 rounded-sm border border-blue-100 bg-white p-5 sm:p-8">
            <h2 className="font-display text-2xl text-[#18364a] sm:text-3xl">Get in Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              We&apos;re here to help you plan your next journey. Reach out via phone,
              WhatsApp or the contact form.
            </p>

            <div className="mt-6 space-y-5 border-t border-blue-100 pt-6">
              <div className="flex min-w-0 items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm text-ink-500">{siteConfig.contact.directorLabel}: {siteConfig.contact.directorName}</p>
                  <a href={telLink()} className="inline-block min-w-0 py-1 font-medium text-[#164b85] [overflow-wrap:anywhere] hover:text-green-600">
                    {siteConfig.contact.phoneDisplay} — {siteConfig.contact.altContactName}
                  </a>
                  <p className="text-xs text-ink-500">{siteConfig.contact.altContactRole}</p>
                </div>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                <a href={mailtoLink()} className="inline-block min-w-0 py-1 font-medium text-[#164b85] [overflow-wrap:anywhere] hover:text-green-600">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex min-w-0 items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="font-medium text-[#18364a]">{siteConfig.location.name}</p>
                  <p className="text-sm text-ink-500">{siteConfig.location.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CallButton variant="solid" className="w-full bg-blue-600 hover:bg-blue-500" />
              <WhatsAppButton className="w-full" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={siteConfig.social.facebook} aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center text-[#164b85] transition-colors hover:text-green-600">
                <FacebookIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.instagram} aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center text-[#164b85] transition-colors hover:text-green-600">
                <InstagramIcon className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.youtube} aria-label="YouTube" className="inline-flex h-11 w-11 items-center justify-center text-[#164b85] transition-colors hover:text-green-600">
                <YoutubeIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

          </div>

          <div className="min-w-0">
            <ContactForm />
          </div>

          <div className="min-w-0 overflow-hidden rounded-sm border border-blue-100 bg-white lg:col-span-2">
            <div className="flex flex-col gap-3 border-b border-blue-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="min-w-0">
                <p className="font-display text-xl text-[#18364a]">{siteConfig.location.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{siteConfig.location.address}</p>
              </div>
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-medium text-blue-700 hover:text-green-600">
                Open in Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <iframe
              title="Google Maps search for JOSEALI TOURS. LIMITED in Ukunda"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-72 w-full border-0 sm:h-96"
            />
          </div>
        </div>
      </section>
    </>
  );
}
