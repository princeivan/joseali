import { Partner } from "@/lib/types";

// None of these are confirmed partnerships. They represent the categories
// of organisations JoseAli Safaris typically works alongside on a trip
// (the airline you flew, the railway you rode, the hotel you stayed at).
// Swap in real, confirmed partner names/logos once agreements are signed —
// see brief section 13 & 47.
export const partners: Partner[] = [
  { name: "Kenya Airways", category: "Airlines", logo: "/images/partners/kenya-airways.svg", isConfirmed: false },
  { name: "Kenya Railways", category: "SGR / Railway", logo: "/images/partners/kenya-railways.svg", isConfirmed: false },
  { name: "Kenya Airports Authority", category: "Airports", logo: "/images/partners/kaa.png", isConfirmed: false },
  { name: "Hotels & Resorts", category: "Hotels & Resorts", isConfirmed: false },
  { name: "Safaricom", category: "Connectivity", logo: "/images/partners/safaricom.png", isConfirmed: false },
  { name: "M-Pesa", category: "Payments", logo: "/images/partners/mpesa.png", isConfirmed: false },
];
