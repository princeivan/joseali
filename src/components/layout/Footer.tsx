import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from "@/components/ui/SocialIcons";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig, telLink, mailtoLink } from "@/lib/config";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Tours & Travel", href: "/tours" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "SGR Transfers", href: "/services/sgr-transfers" },
  { label: "Bush Safaris", href: "/services/bush-safaris" },
  { label: "Tours & Travel", href: "/tours" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Marine Experiences", href: "/services/marine-experiences" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 pb-[calc(4rem+env(safe-area-inset-bottom))] text-center text-sand-100 lg:pb-0 lg:text-left">
      <div className="container-edge grid grid-cols-1 gap-x-6 gap-y-8 py-10 min-[360px]:grid-cols-2 sm:gap-x-10 sm:py-12 lg:grid-cols-[1.2fr_0.8fr_1fr_1.2fr] lg:gap-8 lg:py-14">
        <div className="min-w-0 min-[360px]:col-span-2 lg:col-span-1">
          <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex max-w-full items-center gap-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-white p-1.5">
              <Image
                src="/images/logo.png"
                alt=""
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0 font-display text-xl leading-tight text-white">{siteConfig.name}</span>
          </Link>
          <p className="mt-3 text-xs font-medium tracking-[0.14em] text-gold-400">EXPLORE · DISCOVER · EXPERIENCE</p>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-sand-100/75 lg:mx-0">
            Reliable transport, tours, travel and accommodation services across Kenya.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-sand-100/75 hover:border-gold-400 hover:text-gold-400">
              <FacebookIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-sand-100/75 hover:border-gold-400 hover:text-gold-400">
              <InstagramIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.tiktok} aria-label="TikTok" className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-sand-100/75 hover:border-gold-400 hover:text-gold-400">
              <TiktokIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-sand-100/75 hover:border-gold-400 hover:text-gold-400">
              <YoutubeIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer quick links" className="min-w-0 border-t border-white/10 pt-6 lg:border-0 lg:pt-0">
          <h3 className="font-display text-base text-white">Quick Links</h3>
          <ul className="mt-3 text-sm text-sand-100/75">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-11 items-center justify-center py-2 leading-5 lg:justify-start [overflow-wrap:anywhere] hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services" className="min-w-0 border-t border-white/10 pt-6 lg:border-0 lg:pt-0">
          <h3 className="font-display text-base text-white">Our Services</h3>
          <ul className="mt-3 text-sm text-sand-100/75">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-11 items-center justify-center py-2 leading-5 lg:justify-start [overflow-wrap:anywhere] hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 border-t border-white/10 pt-6 min-[360px]:col-span-2 lg:col-span-1 lg:border-0 lg:pt-0">
          <h3 className="font-display text-base text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/75">
            <li>
              {siteConfig.contact.directorLabel}: {siteConfig.contact.directorName}
            </li>
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={telLink()} className="min-w-0 py-1 leading-6 hover:text-gold-400">
                {siteConfig.contact.phoneDisplay} — {siteConfig.contact.altContactName}
                <br />
                <span className="text-sand-100/60">{siteConfig.contact.altContactRole}</span>
              </a>
            </li>
            <li className="flex items-start justify-center gap-2 lg:justify-start">
              <Mail className="mt-3 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={mailtoLink()} className="flex min-h-11 min-w-0 items-center py-2 [overflow-wrap:anywhere] hover:text-gold-400">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-start">
              <MapPin className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              {siteConfig.location.name}
            </li>
          </ul>
          <div className="mt-4">
            <WhatsAppButton variant="solid" label="WhatsApp Us" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-edge flex flex-col items-center justify-between gap-2 py-5 text-xs leading-relaxed text-sand-100/60 lg:flex-row">
          <p className="min-w-0">&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 lg:justify-start">
            <Link href="/privacy-policy" className="inline-flex min-h-11 items-center hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
