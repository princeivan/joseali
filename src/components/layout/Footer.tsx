import Link from "next/link";
import { Compass, Phone, Mail, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon, TiktokIcon } from "@/components/ui/SocialIcons";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig, telLink, mailtoLink } from "@/lib/config";
import { placeholderImage } from "@/lib/images";
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
    <footer className="bg-forest-950 text-sand-100">
      <div className="container-edge grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold-400">
              <Image
                         src={placeholderImage("logo", 40, 40)}
                         alt={`${siteConfig.name} logo`}
                         width={40}
                         height={40}
                         className="h-auto w-[180px] md:w-[220px]"
                         />
            </span>
            <span className="font-display text-lg text-white">{siteConfig.name}</span>
          </div>
          <p className="mt-3 text-sm text-gold-400">{siteConfig.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-sand-100/75">
            Reliable transport, tours, travel and accommodation services across Kenya.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="text-sand-100/75 hover:text-gold-400">
              <FacebookIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="text-sand-100/75 hover:text-gold-400">
              <InstagramIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.tiktok} aria-label="TikTok" className="text-sand-100/75 hover:text-gold-400">
              <TiktokIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="text-sand-100/75 hover:text-gold-400">
              <YoutubeIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-100/75">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-100/75">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/75">
            <li>
              {siteConfig.contact.directorLabel}: {siteConfig.contact.directorName}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={telLink()} className="hover:text-gold-400">
                {siteConfig.contact.phoneDisplay} — {siteConfig.contact.altContactName}
                <br />
                <span className="text-sand-100/60">{siteConfig.contact.altContactRole}</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <a href={mailtoLink()} className="hover:text-gold-400">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
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
        <div className="container-edge flex flex-col items-center justify-between gap-3 py-5 text-xs text-sand-100/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gold-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-400">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
