import { Destination } from "@/lib/types";
import { placeholderImage } from "@/lib/images";

export const destinations: Destination[] = [
  {
    slug: "diani-beach",
    name: "Diani Beach",
    category: "Coast",
    shortDescription: "Relax on the pristine Kenyan coast.",
    overview:
      "Diani's white sand and calm, reef-protected water make it the coast's most popular beach town — with a laid-back strip of beachfront hotels, restaurants and watersports operators a short transfer from Mombasa.",
    heroImage: { src: placeholderImage("diani-beach-hero"), alt: "White sand beach and palm trees at Diani" },
    cardImage: { src: placeholderImage("diani-beach-card"), alt: "Diani Beach coastline" },
    gallery: [
      { src: placeholderImage("diani-1"), alt: "Diani beach shoreline" },
      { src: placeholderImage("diani-2"), alt: "Palm trees along Diani" },
      { src: placeholderImage("diani-3"), alt: "Diani beach at sunset" },
    ],
    thingsToDo: ["Kitesurfing and watersports", "Kaya Kinondo sacred forest walk", "Diani Beach walks at low tide", "Day trip to Wasini Island"],
    bestTimeToVisit: "January–March and July–October offer the driest, sunniest conditions.",
    transportOptions: ["Private transfer from Mombasa (approx. 45 min)", "SGR to Mombasa Terminus, then road transfer"],
    startingPriceKsh: null,
  },
  {
    slug: "tsavo",
    name: "Tsavo",
    category: "Safari",
    shortDescription: "Experience the wild.",
    overview:
      "Split into Tsavo East and Tsavo West, this is one of Kenya's largest protected areas — known for red-dust elephants, wide-open plains and, in the west, the Mzima Springs and volcanic scenery.",
    heroImage: { src: placeholderImage("tsavo-hero"), alt: "Elephants in Tsavo National Park" },
    cardImage: { src: placeholderImage("tsavo-card"), alt: "Tsavo landscape" },
    gallery: [
      { src: placeholderImage("tsavo-1"), alt: "Tsavo savanna" },
      { src: placeholderImage("tsavo-2"), alt: "Elephant herd in Tsavo" },
      { src: placeholderImage("tsavo-3"), alt: "Mzima Springs" },
    ],
    thingsToDo: ["Game drives", "Mzima Springs hippo pool", "Lugard Falls", "Photography safaris"],
    bestTimeToVisit: "June–October (dry season) for easier wildlife viewing.",
    transportOptions: ["Private safari vehicle from Mombasa (approx. 3 hours to Tsavo East)"],
    startingPriceKsh: null,
  },
  {
    slug: "wasini-island",
    name: "Wasini Island",
    category: "Marine",
    shortDescription: "Discover marine adventures.",
    overview:
      "A small coral island off Shimoni with no cars, a coral garden boardwalk, and some of the best dolphin-watching and snorkelling on the south coast.",
    heroImage: { src: placeholderImage("wasini-hero"), alt: "Dhow boat near Wasini Island" },
    cardImage: { src: placeholderImage("wasini-card"), alt: "Wasini Island coastline" },
    gallery: [
      { src: placeholderImage("wasini-1"), alt: "Wasini coral garden" },
      { src: placeholderImage("wasini-2"), alt: "Snorkelling near Wasini" },
    ],
    thingsToDo: ["Dolphin watching", "Snorkelling at Kisite-Mpunguti Marine Park", "Coral garden boardwalk", "Seafood lunch on the island"],
    bestTimeToVisit: "Year-round, with calmest seas December–March.",
    transportOptions: ["Road transfer to Shimoni, then boat crossing"],
    startingPriceKsh: null,
  },
  {
    slug: "mombasa",
    name: "Mombasa",
    category: "City",
    shortDescription: "History, culture and coastal life.",
    overview:
      "Kenya's coastal capital blends Swahili, Arab, Portuguese and Indian history — from Fort Jesus and the narrow lanes of Old Town to the modern port city that anchors the whole coast.",
    heroImage: { src: placeholderImage("mombasa-hero"), alt: "Mombasa Old Town street" },
    cardImage: { src: placeholderImage("mombasa-card"), alt: "Mombasa cityscape" },
    gallery: [
      { src: placeholderImage("mombasa-1"), alt: "Fort Jesus, Mombasa" },
      { src: placeholderImage("mombasa-2"), alt: "Mombasa Old Town" },
    ],
    thingsToDo: ["Fort Jesus", "Old Town walking tour", "Nyali and Bamburi beaches", "Haller Park"],
    bestTimeToVisit: "Year-round; January–March is driest.",
    transportOptions: ["SGR from Nairobi", "Moi International Airport transfers", "Local transfers around the city"],
    startingPriceKsh: null,
  },
  {
    slug: "malindi",
    name: "Malindi",
    category: "Coast",
    shortDescription: "Explore Kenya's beautiful north coast.",
    overview:
      "North of Mombasa, Malindi mixes a long Italian-influenced beach strip with the Malindi Marine National Park and easy access to Watamu's coral reefs.",
    heroImage: { src: placeholderImage("malindi-hero"), alt: "Malindi coastline" },
    cardImage: { src: placeholderImage("malindi-card"), alt: "Malindi beach" },
    gallery: [
      { src: placeholderImage("malindi-1"), alt: "Malindi beach" },
      { src: placeholderImage("malindi-2"), alt: "Malindi Marine Park" },
    ],
    thingsToDo: ["Malindi Marine National Park", "Gede Ruins", "Watamu day trip", "Vasco da Gama Pillar"],
    bestTimeToVisit: "January–March and July–October.",
    transportOptions: ["Road transfer from Mombasa (approx. 2 hours)", "Domestic flights to Malindi Airport"],
    startingPriceKsh: null,
  },
  {
    slug: "amboseli",
    name: "Amboseli",
    category: "Safari",
    shortDescription: "Wildlife beneath the shadow of Kilimanjaro.",
    overview:
      "Amboseli is known for its large elephant herds photographed against Mount Kilimanjaro's backdrop, along with swamps that draw wildlife year-round.",
    heroImage: { src: placeholderImage("amboseli-hero"), alt: "Elephants with Kilimanjaro in the background" },
    cardImage: { src: placeholderImage("amboseli-card"), alt: "Amboseli landscape" },
    gallery: [
      { src: placeholderImage("amboseli-1"), alt: "Amboseli swamp wildlife" },
      { src: placeholderImage("amboseli-2"), alt: "Kilimanjaro view from Amboseli" },
    ],
    thingsToDo: ["Game drives with Kilimanjaro views", "Observation Hill", "Maasai cultural visits"],
    bestTimeToVisit: "June–October for clearer Kilimanjaro views and dry-season wildlife viewing.",
    transportOptions: ["Road transfer from Nairobi (approx. 4 hours)", "Fly-in safari option"],
    startingPriceKsh: null,
  },
  {
    slug: "maasai-mara",
    name: "Maasai Mara",
    category: "Safari",
    shortDescription: "Experience one of Africa's greatest wildlife destinations.",
    overview:
      "Kenya's most famous reserve, home to the Great Migration between roughly July and October and reliably strong wildlife viewing throughout the year.",
    heroImage: { src: placeholderImage("maasai-mara-hero"), alt: "Wildebeest crossing in the Maasai Mara" },
    cardImage: { src: placeholderImage("maasai-mara-card"), alt: "Maasai Mara plains" },
    gallery: [
      { src: placeholderImage("mara-1"), alt: "Maasai Mara savanna" },
      { src: placeholderImage("mara-2"), alt: "Lions in the Maasai Mara" },
    ],
    thingsToDo: ["Game drives", "Great Migration river crossings (seasonal)", "Hot air balloon safaris", "Maasai village visits"],
    bestTimeToVisit: "July–October for the migration; good wildlife viewing year-round.",
    transportOptions: ["Road transfer from Nairobi (approx. 5–6 hours)", "Fly-in safari option"],
    startingPriceKsh: null,
  },
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
