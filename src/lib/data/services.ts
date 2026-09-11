import { Service } from "@/lib/types";
import { placeholderImage } from "@/lib/images";

export const services: Service[] = [
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    shortDescription: "Comfortable and reliable airport pickups and drop-offs.",
    description:
      "Landing in Mombasa or flying out for your next trip? We track your flight, meet you at arrivals and get you on the road without delay. The same applies in reverse — tell us your flight time and we'll have you at check-in with time to spare.",
    heroImage: { src: placeholderImage("airport-transfer-hero"), alt: "Private vehicle waiting at a Kenyan airport pickup point" },
    cardImage: { src: placeholderImage("airport-transfer-card"), alt: "Airport transfer vehicle" },
    icon: "plane",
    whatOffered: [
      "Flight tracking, so we adjust for early or delayed arrivals",
      "Meet & greet at the arrivals hall with a name board",
      "Luggage assistance",
      "Private vehicles for individuals, couples and families",
      "Group transfers for larger travel parties",
    ],
    whoItsFor: [
      "International and domestic travellers",
      "Business travellers on tight schedules",
      "Families arriving with luggage and children",
      "Groups and corporate delegations",
    ],
    popularRoutes: ["Moi International Airport – Nyali", "Moi International Airport – Diani", "Moi International Airport – Mombasa CBD"],
    faqs: [
      { question: "What happens if my flight is delayed?", answer: "We track your flight number, so your driver adjusts pickup time automatically at no extra charge." },
      { question: "Do you provide child seats?", answer: "Let us know when booking and we'll arrange one where available." },
      { question: "How do I find my driver?", answer: "Your driver will be waiting at arrivals with a name board, and we'll share their contact on WhatsApp before you land." },
    ],
  },
  {
    slug: "sgr-transfers",
    name: "SGR Transfers",
    shortDescription: "Stress-free transfers between SGR stations and your destination.",
    description:
      "Travelling by SGR between Nairobi and Mombasa? We handle the last leg of your journey — pickup from Mombasa Terminus or drop-off in good time for departure, with a driver who knows the train schedule.",
    heroImage: { src: placeholderImage("sgr-transfer-hero"), alt: "SGR train pulling into a Kenyan station" },
    cardImage: { src: placeholderImage("sgr-transfer-card"), alt: "SGR transfer vehicle" },
    icon: "train",
    whatOffered: [
      "Pickup from Mombasa Terminus (Miritini) to your hotel or home",
      "Drop-off timed to your train's departure",
      "Live coordination in case of train delays",
      "Luggage assistance",
    ],
    whoItsFor: ["SGR passengers travelling to or from the coast", "Families and groups with luggage", "Business travellers connecting onward"],
    popularRoutes: ["Mombasa Terminus – Nyali", "Mombasa Terminus – Diani", "Mombasa Terminus – Mombasa Island"],
    faqs: [
      { question: "How early should I book?", answer: "We recommend booking at least a day ahead, though we do accommodate same-day requests where a vehicle is available." },
      { question: "Can you track my train's arrival?", answer: "Yes — for pickups, our team monitors the schedule and adjusts if the train runs late." },
    ],
  },
  {
    slug: "other-transfers",
    name: "Local & Other Transfers",
    shortDescription: "Point-to-point transport around Mombasa and the coast, on your schedule.",
    description:
      "Not every trip is an airport run. Whether it's a hotel-to-hotel transfer, a day out along the coast, or transport for a group event, we arrange a vehicle that fits your route and party size.",
    heroImage: { src: placeholderImage("local-transfer-hero"), alt: "Coastal road transfer vehicle" },
    cardImage: { src: placeholderImage("local-transfer-card"), alt: "Local transfer vehicle" },
    icon: "car",
    whatOffered: ["Hotel-to-hotel and point-to-point transfers", "Full-day and half-day vehicle hire", "Event and group transport", "Flexible scheduling"],
    whoItsFor: ["Holidaymakers exploring the coast", "Event organisers", "Local travellers without their own transport"],
    faqs: [{ question: "Can I hire a vehicle for a full day?", answer: "Yes — let us know your itinerary and we'll quote a full-day or half-day rate." }],
  },
  {
    slug: "corporate-transport",
    name: "Corporate Transport",
    shortDescription: "Dependable transport arrangements for businesses and delegations.",
    description:
      "We support companies, NGOs and event organisers with recurring or one-off transport needs — staff transfers, delegate pickups, conference logistics and executive transport, coordinated through one point of contact.",
    heroImage: { src: placeholderImage("corporate-transport-hero"), alt: "Corporate delegation vehicle at a Mombasa hotel" },
    cardImage: { src: placeholderImage("corporate-transport-card"), alt: "Corporate transport vehicle" },
    icon: "briefcase",
    whatOffered: ["Delegate and staff transfers", "Conference and event logistics", "Executive vehicles", "Invoiced billing for registered businesses"],
    whoItsFor: ["Companies and NGOs", "Conference and event organisers", "Government and institutional delegations"],
    faqs: [{ question: "Do you offer invoicing for companies?", answer: "Yes — contact us to set up a corporate account with invoiced billing." }],
  },
  {
    slug: "bush-safaris",
    name: "Bush Safaris",
    shortDescription: "Explore Kenya's wildlife and unforgettable safari destinations.",
    description:
      "From Tsavo's red earth to the Mara's open plains, we arrange safari transport and packages with experienced drivers who know the parks, the wildlife and the best times to be on the road.",
    heroImage: { src: placeholderImage("bush-safari-hero"), alt: "Safari vehicle on a game drive in Tsavo" },
    cardImage: { src: placeholderImage("bush-safari-card"), alt: "Safari vehicle among wildlife" },
    icon: "compass",
    whatOffered: ["Day and multi-day safari packages", "Experienced, wildlife-savvy drivers", "Pop-up roof safari vehicles", "Park fees guidance and planning"],
    whoItsFor: ["First-time and repeat safari travellers", "Families and couples", "Photography-focused travellers"],
    popularRoutes: ["Mombasa – Tsavo East", "Mombasa – Tsavo West", "Mombasa – Amboseli", "Nairobi – Maasai Mara"],
    faqs: [{ question: "Are park entry fees included?", answer: "Park fees are quoted separately and confirmed with your itinerary, since they vary by park and nationality." }],
  },
  {
    slug: "marine-experiences",
    name: "Marine Experiences",
    shortDescription: "Explore the coast, islands and unforgettable ocean experiences.",
    description:
      "The Kenyan coast is as much about the water as the land. We arrange dhow trips, snorkelling excursions and island crossings to Wasini and beyond, paired with transport to and from your hotel.",
    heroImage: { src: placeholderImage("marine-experience-hero"), alt: "Traditional dhow boat off the Kenyan coast" },
    cardImage: { src: placeholderImage("marine-experience-card"), alt: "Marine excursion boat" },
    icon: "anchor",
    whatOffered: ["Dhow and boat excursions", "Snorkelling and dolphin-watching trips", "Wasini Island crossings", "Hotel-to-jetty transport"],
    whoItsFor: ["Beach holidaymakers", "Families and groups", "Couples looking for a day on the water"],
    popularRoutes: ["Diani – Wasini Island", "Mombasa – Shimoni"],
    faqs: [{ question: "Is snorkelling gear provided?", answer: "Most marine excursions include gear — we'll confirm exactly what's provided when you enquire." }],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
