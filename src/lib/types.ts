// Shared content types for JoseAli Safaris.
// Static, typed data is used for this initial build (see /src/lib/data).
// The shapes below are intentionally backend-agnostic so this data can later
// be sourced from PostgreSQL/Prisma, Supabase, or a Django REST API without
// changing any UI component.

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  icon: "plane" | "train" | "bus" | "bed" | "compass" | "anchor" | "briefcase" | "car";
  whatOffered: string[];
  whoItsFor: string[];
  popularRoutes?: string[];
  faqs: { question: string; answer: string }[];
};

export type Destination = {
  slug: string;
  name: string;
  category: "Coast" | "Safari" | "City" | "Marine" | "Adventure";
  shortDescription: string;
  overview: string;
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  gallery: ImageAsset[];
  thingsToDo: string[];
  bestTimeToVisit: string;
  transportOptions: string[];
  /** null = not yet supplied by the business; render "Contact for pricing" */
  startingPriceKsh: number | null;
};

export type Tour = {
  slug: string;
  name: string;
  location: string;
  durationDays: number;
  durationLabel: string;
  type: "Coastal" | "Safari" | "City" | "Marine" | "Multi-Day";
  shortDescription: string;
  overview: string;
  itinerary: { day: string; title: string; description: string }[];
  included: string[];
  notIncluded: string[];
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  gallery: ImageAsset[];
  startingPriceKsh: number | null;
  relatedDestinationSlugs: string[];
};

export type PropertyType = "Hotel" | "Resort" | "Beach Cottage" | "Boutique Lodge" | "Guesthouse";

export type Accommodation = {
  slug: string;
  name: string;
  location: string;
  propertyType: PropertyType;
  shortDescription: string;
  description: string;
  facilities: string[];
  rooms: { name: string; description: string; occupancy: string }[];
  heroImage: ImageAsset;
  cardImage: ImageAsset;
  gallery: ImageAsset[];
  priceRangeKsh: { from: number; to: number } | null;
  checkIn: string;
  checkOut: string;
  isConfirmedPartner: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  isDemo: boolean;
};

export type Partner = {
  name: string;
  category: "Airlines" | "SGR / Railway" | "Hotels & Resorts" | "Travel Operators" | "Payments";
  isConfirmed: boolean;
};

export type FareRoute = {
  origin: string;
  destination: string;
  vehicleType: "Sedan" | "Private Van" | "SUV" | "Minibus" | "Coaster Bus";
  passengerRange: string;
  /** 0 = price not yet supplied; UI should show "Contact for price" */
  priceKsh: number;
};

export type GalleryCategory =
  | "Vehicles"
  | "Beach"
  | "Safari"
  | "Tours"
  | "Marine"
  | "Accommodation"
  | "Travel";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: ImageAsset;
};

export type BookingServiceType =
  | "Airport Transfer"
  | "SGR Transfer"
  | "Other Transport"
  | "Tour"
  | "Car Hire"
  | "Safari"
  | "Accommodation"
  | "Marine Experience";

export type BookingStatus = "Pending" | "Contacted" | "Confirmed" | "Cancelled" | "Completed";

export type FAQItem = { question: string; answer: string };
