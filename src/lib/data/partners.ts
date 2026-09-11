import { Partner } from "@/lib/types";

// None of these are confirmed partnerships. They represent the categories
// of organisations JoseAli Safaris typically works alongside on a trip
// (the airline you flew, the railway you rode, the hotel you stayed at).
// Swap in real, confirmed partner names/logos once agreements are signed —
// see brief section 13 & 47.
export const partners: Partner[] = [
  { name: "Kenya Airways", category: "Airlines", isConfirmed: false },
  { name: "SGR Kenya Railways", category: "SGR / Railway", isConfirmed: false },
  { name: "KAA", category: "Airlines", isConfirmed: false },
  { name: "Hotels & Resorts", category: "Hotels & Resorts", isConfirmed: false },
  { name: "Safaricom", category: "Travel Operators", isConfirmed: false },
  { name: "M-Pesa", category: "Payments", isConfirmed: false },
];
