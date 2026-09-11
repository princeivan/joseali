import { Testimonial } from "@/lib/types";

// These are clearly marked DEMO testimonials for the initial design.
// Replace with real, consented customer reviews before launch —
// do not present these as genuine reviews (see brief section 12 & 47).
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Wanjiku",
    location: "Nairobi",
    rating: 5,
    quote: "Excellent service from booking to arrival. The driver was punctual, professional and very helpful.",
    isDemo: true,
  },
  {
    id: "t2",
    name: "David Mwangi",
    location: "Mombasa",
    rating: 5,
    quote: "Our Mombasa tour was amazing. Everything was well organised, from transport to accommodation. Keep it up!",
    isDemo: true,
  },
  {
    id: "t3",
    name: "Lilian Achieng",
    location: "Kisumu",
    rating: 5,
    quote: "Reliable, professional and friendly team. The airport transfer was smooth and on time. I will definitely book again!",
    isDemo: true,
  },
  {
    id: "t4",
    name: "James Otieno",
    location: "Nairobi",
    rating: 4,
    quote: "Good communication throughout and a comfortable vehicle for our Tsavo trip. Would recommend to friends visiting the coast.",
    isDemo: true,
  },
];
