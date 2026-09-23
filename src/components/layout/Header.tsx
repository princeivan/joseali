"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Compass, Phone } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";
import { siteConfig } from "@/lib/config";
import { placeholderImage } from "@/lib/images";
import Image from "next/image";

const servicesLinks = [
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "SGR Transfers", href: "/services/sgr-transfers" },
  { label: "Local Transfers", href: "/services/other-transfers" },
  { label: "Corporate Transport", href: "/services/corporate-transport" },
  { label: "Accommodation", href: "/accommodation" },
];

const toursLinks = [
  { label: "Coastal Tours", href: "/tours?type=Coastal" },
  { label: "Bush Safaris", href: "/services/bush-safaris" },
  { label: "Marine Experiences", href: "/services/marine-experiences" },
  { label: "Day Trips", href: "/tours?type=City" },
  { label: "Multi-Day Safaris", href: "/tours?type=Safari" },
  { label: "Travel Packages", href: "/tours" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", dropdown: servicesLinks },
  { label: "Tours & Travel", href: "/tours", dropdown: toursLinks },
  // { label: "Accommodation", href: "/accommodation" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="container-edge flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              width={220}
              height={70}
              priority
              className="h-auto w-[60px] object-contain sm:w-[60px] md:w-[60px]"
            />
          </div>
          
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-forest-950">JOSEALI <span className="text-orange-600">TOURS</span></span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-ink-500">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className="group relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-ink-900 hover:text-forest-900"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <div
                  className={`absolute left-0 top-full w-60 rounded-sm border border-line bg-white py-2 shadow-lg transition-all ${
                    openDropdown === link.label
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-1"
                  }`}
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-ink-700 hover:bg-sand-50 hover:text-forest-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-900 hover:text-forest-900"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/book"
            className="rounded-sm bg-orange-400 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-sm p-2 text-forest-950 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-forest-950/40 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[85%] max-w-sm transform bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-display text-base text-forest-950">Menu</span>
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
            <X className="h-5 w-5 text-forest-950" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 overflow-y-auto px-5 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <div key={link.href} className="border-b border-line py-2">
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-1.5 text-sm font-medium text-ink-900"
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="ml-3 flex flex-col gap-1 pb-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-1 text-xs text-ink-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-6 px-5 py-5">
          <CallButton variant="outline" />
          <WhatsAppButton variant="solid" />
          <Link
            href="/book"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-sm bg-orange-400 px-5 py-3 text-sm font-semibold text-forest-950"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
