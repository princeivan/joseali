import { FareRoute } from "@/lib/types";

/**
 * FARE CONFIGURATION
 * ------------------------------------------------------------------
 * This is the single data structure that drives the fare calculator.
 * Prices are placeholders (priceKsh: 0 means "not yet configured" and
 * the UI will show "Contact for price"). Once JoseAli Safaris confirms
 * real pricing, an admin or developer edits this array only — no UI
 * code needs to change.
 */
export const fareRoutes: FareRoute[] = [
  { origin: "Moi International Airport", destination: "Nyali", vehicleType: "Sedan", passengerRange: "1-3", priceKsh: 2500 },
  { origin: "Moi International Airport", destination: "Nyali", vehicleType: "Private Van", passengerRange: "4-6", priceKsh: 3500 },
  { origin: "Moi International Airport", destination: "Diani", vehicleType: "Sedan", passengerRange: "1-3", priceKsh: 3500 },
  { origin: "Moi International Airport", destination: "Diani", vehicleType: "Private Van", passengerRange: "4-6", priceKsh: 4500 },
  { origin: "Moi International Airport", destination: "Mombasa Island", vehicleType: "Sedan", passengerRange: "1-3", priceKsh: 2000 },
  { origin: "Mombasa Terminus (SGR)", destination: "Nyali", vehicleType: "Sedan", passengerRange: "1-3", priceKsh: 2000 },
  { origin: "Mombasa Terminus (SGR)", destination: "Diani", vehicleType: "Private Van", passengerRange: "4-6", priceKsh: 4000 },
  { origin: "Mombasa Terminus (SGR)", destination: "Mombasa Island", vehicleType: "Sedan", passengerRange: "1-3", priceKsh: 1800 },
  // Routes without a configured price fall back to "Request a Quote" in the UI.
  { origin: "Mombasa", destination: "Malindi", vehicleType: "Private Van", passengerRange: "1-6", priceKsh: 0 },
  { origin: "Mombasa", destination: "Tsavo East", vehicleType: "SUV", passengerRange: "1-6", priceKsh: 0 },
];

export function findFare(origin: string, destination: string): FareRoute | undefined {
  const norm = (s: string) => s.trim().toLowerCase();
  return fareRoutes.find(
    (r) => norm(r.origin) === norm(origin) && norm(r.destination) === norm(destination)
  );
}
