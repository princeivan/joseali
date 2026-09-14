/**
 * Central business configuration.
 *
 * This is the single place to update JoseAli Safaris' contact details.
 * Change a number or email here and it updates everywhere on the site
 * (header, footer, WhatsApp buttons, contact page, booking forms, JSON-LD).
 */

export const siteConfig = {
  name: "JoseAli Safaris",
  tagline: "Safe Journeys. Memorable Experiences.",
  description:
    "JoseAli Safaris provides reliable airport and SGR transfers, tours, safaris, accommodation and travel experiences across Kenya.",
  url: "https://www.josealisafaris.co.ke",

  contact: {
    directorLabel: "Director",
    directorName: "JoseAli Safaris",
    // Primary WhatsApp / booking number
    altContactName: "Joseph",
    altContactRole: "SGR & Airport Transfers",
    phoneDisplay: "0726 887 951",
    phoneE164: "+254726887951",
    email: "info@josealisafaris.co.ke",
    // Location is intentionally general until the client confirms an exact address.
    city: "Mombasa, Kenya",
    addressConfirmed: false,
  },

  whatsapp: {
    // WhatsApp number in international format, no + or leading zeros.
    number: "254726887951",
    defaultMessage: "Hello JoseAli Safaris, I would like to enquire about your services.",
  },

  social: {
    facebook: "https://facebook.com/josealisafaris",
    instagram: "https://instagram.com/josealisafaris",
    tiktok: "https://tiktok.com/@josealisafaris",
    youtube: "https://youtube.com/@josealisafaris",
  },

  // Flip to true only once the business confirms these figures.
  stats: {
    published: false,
  },
} as const;

/** Build a WhatsApp deep link with a contextual, pre-filled message. */
export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

/** Build a tel: link from the display phone number. */
export function telLink(): string {
  return `tel:${siteConfig.contact.phoneE164}`;
}

export function mailtoLink(): string {
  return `mailto:${siteConfig.contact.email}`;
}
