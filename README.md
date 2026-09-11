# JoseAli Safaris — Website

"Safe Journeys. Memorable Experiences."

A Next.js 15 (App Router, TypeScript, Tailwind CSS) marketing and booking site for
JoseAli Safaris — transport, SGR/airport transfers, tours, safaris, accommodation and
marine experiences in Kenya.

## Running the project

```bash
npm install
npm run dev
```

Then open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

Requires internet access on first build/dev run — the site uses `next/font/google`
(Fraunces + Work Sans), which Next.js fetches from Google Fonts.

## What's real vs. placeholder

Per the brief, **no business information has been invented**. Anything not yet
confirmed by JoseAli Safaris is clearly marked and easy to find:

- **Photography** — every image comes from one helper, `src/lib/images.ts`, currently
  wired to a seeded placeholder service (Picsum) so every subject gets a stable image.
  Swap in real photography by editing that one function (e.g. return
  `/images/${seed}.jpg` and drop files into `/public/images`), or edit individual
  `src/lib/data/*.ts` entries once real photos are ready.
- **Prices** — fares (`src/lib/data/fares.ts`), tour prices, and accommodation price
  ranges use `0`/`null` where no price was supplied. The UI automatically shows
  "Contact for price" / "Request a Quote" until a real number is entered.
- **Accommodation** — every property is labelled "Recommended Accommodation" (not a
  confirmed partner) per `isConfirmedPartner: false` in `src/lib/data/accommodation.ts`.
- **Partners** — logos/names in `src/lib/data/partners.ts` are placeholder categories,
  flagged `isConfirmed: false`.
- **Testimonials** — all four are explicitly labelled "Demo testimonial" in
  `src/lib/data/testimonials.ts`. Replace with real, consented reviews before launch.
- **Contact details** — phone, WhatsApp number, email and city all live in one file:
  `src/lib/config.ts`. Update once and it updates everywhere (header, footer, WhatsApp
  links, JSON-LD, contact page).
- **Legal pages** — Privacy Policy and Terms are clearly marked placeholder copy that
  needs review by JoseAli Safaris and a legal advisor before publishing.
- **Location** — the contact page map is a placeholder panel until an exact business
  address is confirmed.

## Project structure

```
src/
  app/                     Routes (App Router)
    page.tsx               Homepage
    about/                 /about
    services/              /services + /services/[slug] (6 services, one dynamic route)
    tours/                 /tours + /tours/[slug]
    accommodation/         /accommodation + /accommodation/[slug]
    destinations/          /destinations + /destinations/[slug]
    gallery/               /gallery
    contact/               /contact
    book/                  /book
    privacy-policy/, terms/
    sitemap.ts, robots.ts, not-found.tsx
  components/
    layout/                Header, TopBar, Footer, StickyMobileActions
    home/                  Homepage sections (Hero, BookingWidget, ServicesSection, ...)
    cards/                 ServiceCard, TourCard, DestinationCard, AccommodationCard, TestimonialCard
    booking/               BookingForm, ContactForm, FareCalculator
    tours/, accommodation/, destinations/, gallery/   Filterable listing components
    ui/                    SectionHeading, WhatsAppButton, CallButton, Breadcrumbs, FAQ, EmptyState, PageHero, SocialIcons
  lib/
    types.ts               Shared content types
    config.ts               Central business config (phone/WhatsApp/email)
    images.ts               Placeholder photography helper
    format.ts               Price formatting helpers
    data/                   Typed static content (services, tours, destinations, accommodation, fares, testimonials, partners, gallery)
```

### Why static typed data (for now)

Section 41/30 of the brief asked for content separated from UI and structured for a
future backend. All content lives in `src/lib/data/*.ts` with types in `src/lib/types.ts`.
Each file exports plain arrays and a `getXBySlug()` helper — swapping this for
PostgreSQL/Prisma, Supabase, or a Django REST API later means replacing the contents of
these files with fetch calls; no component needs to change.

### Fare calculator

`src/lib/data/fares.ts` is the single admin-editable table the fare calculator and
hero booking widget read from — route, vehicle type, passenger range, price. A price of
`0` means "not yet configured," and the UI shows "Contact for price" automatically.

### WhatsApp integration

Every WhatsApp button goes through `whatsappLink()` in `src/lib/config.ts`, with a
contextual pre-filled message per page (e.g. naming the specific tour or service the
visitor is on).

## Known limitation from this build environment

This project was built and verified (type-check, lint, and a full `next build`
producing all 41 static/SSG pages with zero errors) in a sandboxed environment without
general internet access, so the Google Fonts fetch used by `next/font/google` couldn't
be exercised end-to-end here. This is a very standard, widely-supported Next.js feature
that will fetch normally the first time you run `npm run dev` / `npm run build` with
normal internet access. If you ever need a fully offline build, swap `next/font/google`
for `next/font/local` with downloaded font files.

## Still to do before production

- Real photography, prices, and confirmed partner/testimonial content (see above)
- Wire `/book` and `/contact` form submissions to a real backend, email, and/or M-Pesa
  (currently client-side only — forms show a confirmation state but don't send data
  anywhere yet, matching the brief's "polished enough to demo, not yet connected to
  production backend" scope)
- Confirm exact business address for the contact page map
- Admin dashboard (intentionally out of scope for this phase per the brief)
# joseali
# joseali
