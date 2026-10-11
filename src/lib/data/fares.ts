import { FareRoute, FareVehicle } from "@/lib/types";

export const fareVehicles: { type: FareVehicle; label: string }[] = [
  { type: "saloon", label: "Saloon Car" },
  { type: "noah", label: "7 Seater Noah" },
  { type: "van11", label: "11 Seater Van" },
  { type: "van16", label: "16 Seater Van" },
];

export const fareRegions = ["Mombasa", "North and West Coast", "Mombasa South Coast", "Other Areas"] as const;

// Prices and destination names transcribed from the supplied rate card.
// null preserves a blank cell; no distance or price is inferred.
export const fareRoutes: FareRoute[] = [
  { destination: "CHANGAMWE AREA/KPA", region: "Mombasa", distanceKm: 10, prices: { saloon: 1500, noah: 2000, van11: 3000, van16: 5000 } },
  { destination: "TOWN/ROYAL COURT/SAPPHIRE/CASTLE/GPO", region: "Mombasa", distanceKm: 20, prices: { saloon: 2200, noah: 2650, van11: 3650, van16: 5650 } },
  { destination: "LOTUS/SAIROSE/PANDYA/AGHA KHAN/PC HQ", region: "Mombasa", distanceKm: 22, prices: { saloon: 2200, noah: 2650, van11: 3650, van16: 5650 } },
  { destination: "KIZINGO/OUTERIGER/LIWATONI SOUTHERN", region: "Mombasa", distanceKm: 22, prices: { saloon: 2200, noah: 2650, van11: 3650, van16: 5650 } },
  { destination: "TAMARIND/ORCHID BAY/KONGOWEA/RATINA", region: "North and West Coast", distanceKm: 25, prices: { saloon: 3000, noah: 3500, van11: 4500, van16: 6500 } },
  { destination: "KISAUNI/NYALI BEACH/MAMBA VILLAGE", region: "North and West Coast", distanceKm: 28, prices: { saloon: 3500, noah: 4000, van11: 5000, van16: 7000 } },
  { destination: "NYALI NAIVAS/MOMBASA BEACH HOTEL", region: "North and West Coast", distanceKm: 30, prices: { saloon: 3500, noah: 4000, van11: 5000, van16: 7000 } },
  { destination: "BAMBURI/BAOBAB RESORT/MILELE/ BAHARI/VOYGER/REEF", region: "North and West Coast", distanceKm: 30, prices: { saloon: 4000, noah: 4000, van11: 5000, van16: 7000 } },
  { destination: "SAIROCK/WHITESAND/KENYA BAY/KAHAMA/TRAVELLERS", region: "North and West Coast", distanceKm: 32, prices: { saloon: 4200, noah: 4550, van11: 5550, van16: 7550 } },
  { destination: "SERENA/SHANZU/CONTINENTAL/FLAMINGO RESORT", region: "North and West Coast", distanceKm: null, prices: { saloon: 4400, noah: 4800, van11: 5800, van16: 7800 } },
  { destination: "KENYA MARINE/MTWAPA/PANGONI", region: "North and West Coast", distanceKm: 40, prices: { saloon: 4750, noah: 4800, van11: 5800, van16: 7800 } },
  { destination: "NORTH COAST BEACH HOTEL/SUN NSAND/KANAMAI AREAS", region: "North and West Coast", distanceKm: 45, prices: { saloon: 4750, noah: 5050, van11: 6050, van16: 8050 } },
  { destination: "MOMBASA PARADISE BEACH HOTEL", region: "North and West Coast", distanceKm: 48, prices: { saloon: 6500, noah: 5050, van11: 6050, van16: 8050 } },
  { destination: "FOUR WAY COTTAGES/GOLF COURSE", region: "North and West Coast", distanceKm: 60, prices: { saloon: 6500, noah: 7000, van11: 8000, van16: 10000 } },
  { destination: "MNARANI/KILIFI TOWN/TAKAUNGU", region: "North and West Coast", distanceKm: 65, prices: { saloon: 6600, noah: 7150, van11: 8150, van16: 10150 } },
  { destination: "SEA HORSE/KILIFI BAY/BOFFA", region: "North and West Coast", distanceKm: 65, prices: { saloon: 6600, noah: 7150, van11: 8150, van16: 10150 } },
  { destination: "WATAMU/HEMINGWAYS/TURTLE BAY", region: "North and West Coast", distanceKm: 120, prices: { saloon: 11000, noah: 13000, van11: 14000, van16: 16000 } },
  { destination: "MALINDI/EDEN ROCK/CORAL KEY/DRIFT WOOD", region: "North and West Coast", distanceKm: 130, prices: { saloon: 13000, noah: 15000, van11: 16000, van16: 18000 } },
  { destination: "MAMRUI/ANGELS BAY/KARBIN VILLA/MAYUGU", region: "North and West Coast", distanceKm: 165, prices: { saloon: 16500, noah: 18000, van11: 19000, van16: 21000 } },
  { destination: "SHERRY BEACH HOTEL/LIKONI FLATS", region: "Mombasa South Coast", distanceKm: 25, prices: { saloon: 3120, noah: 3800, van11: 4800, van16: 6800 } },
  { destination: "ROSE BECH COTTAGES/KENYA NAVY BASE/", region: "Mombasa South Coast", distanceKm: 27, prices: { saloon: 3120, noah: 3800, van11: 4800, van16: 6800 } },
  { destination: "TIWI AREA/MAWENI/TWIGA LODGE", region: "Mombasa South Coast", distanceKm: 40, prices: { saloon: 4800, noah: 5600, van11: 6600, van16: 8600 } },
  { destination: "UKUNDA AREAS", region: "Mombasa South Coast", distanceKm: 50, prices: { saloon: 5500, noah: 6000, van11: 7000, van16: 9000 } },
  { destination: "SWAHILI BEACH/DIANI LEAF/LEOPARD/CORAL KEY", region: "Mombasa South Coast", distanceKm: 55, prices: { saloon: 6000, noah: 6600, van11: 7600, van16: 9600 } },
  { destination: "LEISURE/FORTY THEIVES AREAS", region: "Mombasa South Coast", distanceKm: 55, prices: { saloon: 6500, noah: 7600, van11: 8600, van16: 10600 } },
  { destination: "SOUTHERN PALM/DIANISEA LODGE/I.O.B.C CLUB", region: "Mombasa South Coast", distanceKm: 60, prices: { saloon: 6500, noah: 7800, van11: 8800, van16: 10800 } },
  { destination: "AFRICANA/JADINI/SAFARI BEACH NOMAND", region: "Mombasa South Coast", distanceKm: 60, prices: { saloon: 6500, noah: 7800, van11: 8800, van16: 10800 } },
  { destination: "OCEAN VILLAGE CLUB/PAPPILLION/BAOBAB/KWALE", region: "Mombasa South Coast", distanceKm: 60, prices: { saloon: 7800, noah: 8200, van11: 9200, van16: 11200 } },
  { destination: "DIANI BEACHLET/GALU SEA LODGE", region: "Mombasa South Coast", distanceKm: 60, prices: { saloon: 7800, noah: 8500, van11: 9500, van16: 11500 } },
  { destination: "NEPTUNE VILLAGE/PARADISE/LANTANA BEACH", region: "Mombasa South Coast", distanceKm: 65, prices: { saloon: 8000, noah: 8600, van11: 9600, van16: 11600 } },
  { destination: "PINEWOOD VILLAGE RESORT", region: "Mombasa South Coast", distanceKm: 65, prices: { saloon: 8000, noah: 8600, van11: 9600, van16: 11600 } },
  { destination: "TREETOP SHIMBA", region: "Mombasa South Coast", distanceKm: 65, prices: { saloon: 8120, noah: 8800, van11: 9800, van16: 11800 } },
  { destination: "MSAMBWENI/CHALE ISLAND", region: "Mombasa South Coast", distanceKm: 90, prices: { saloon: null, noah: 10600, van11: 11600, van16: 13600 } },
  { destination: "WASINI SHIMONI AREA", region: "Mombasa South Coast", distanceKm: 110, prices: { saloon: 10000, noah: 11000, van11: 12000, van16: 15000 } },
  { destination: "LUNGALUNGA/TAZANIA BORDER", region: "Mombasa South Coast", distanceKm: 130, prices: { saloon: 13000, noah: 15000, van11: 16000, van16: 18000 } },
  { destination: "MAZERAS", region: "Other Areas", distanceKm: 20, prices: { saloon: 2000, noah: 2800, van11: 3800, van16: 58000 } },
  { destination: "MARIAKANI", region: "Other Areas", distanceKm: 40, prices: { saloon: 4000, noah: 4500, van11: 5500, van16: 75000 } },
  { destination: "MAUNGU", region: "Other Areas", distanceKm: 140, prices: { saloon: 15000, noah: 18000, van11: 19000, van16: 21000 } },
  { destination: "VOI", region: "Other Areas", distanceKm: 160, prices: { saloon: 16000, noah: 19000, van11: 20000, van16: 22000 } },
  { destination: "SALT LICK", region: "Other Areas", distanceKm: 184, prices: { saloon: 18400, noah: 20000, van11: 21000, van16: 23000 } },
  { destination: "TAITA TAVETA BORDER", region: "Other Areas", distanceKm: 270, prices: { saloon: 27000, noah: 30000, van11: 31000, van16: 33000 } },
  { destination: "NAIROBI", region: "Other Areas", distanceKm: 500, prices: { saloon: 50000, noah: 60000, van11: 61000, van16: 63000 } },
];

export function findFare(destination: string): FareRoute | undefined {
  return fareRoutes.find((route) => route.destination.toLowerCase() === destination.trim().toLowerCase());
}
