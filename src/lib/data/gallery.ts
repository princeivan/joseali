import { GalleryItem } from "@/lib/types";
import { placeholderImage } from "@/lib/images";

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Vehicles", image: { src: placeholderImage("gallery-vehicle-1"), alt: "JoseAli Safaris transfer vehicle" } },
  { id: "g2", category: "Vehicles", image: { src: placeholderImage("gallery-vehicle-2"), alt: "Safari vehicle with pop-up roof" } },
  { id: "g3", category: "Beach", image: { src: placeholderImage("gallery-beach-1"), alt: "Diani beach shoreline" } },
  { id: "g4", category: "Beach", image: { src: placeholderImage("gallery-beach-2"), alt: "Palm-lined Kenyan coast" } },
  { id: "g5", category: "Safari", image: { src: placeholderImage("gallery-safari-1"), alt: "Elephants on a game drive" } },
  { id: "g6", category: "Safari", image: { src: placeholderImage("gallery-safari-2"), alt: "Giraffes in Tsavo" } },
  { id: "g7", category: "Tours", image: { src: placeholderImage("gallery-tours-1"), alt: "Guided Old Town Mombasa tour" } },
  { id: "g8", category: "Marine", image: { src: placeholderImage("gallery-marine-1"), alt: "Dhow boat near Wasini Island" } },
  { id: "g9", category: "Marine", image: { src: placeholderImage("gallery-marine-2"), alt: "Snorkelling off the Kenyan coast" } },
  { id: "g10", category: "Accommodation", image: { src: placeholderImage("gallery-accommodation-1"), alt: "Beachfront resort room" } },
  { id: "g11", category: "Accommodation", image: { src: placeholderImage("gallery-accommodation-2"), alt: "Resort pool" } },
  { id: "g12", category: "Travel", image: { src: placeholderImage("gallery-travel-1"), alt: "SGR train travel" } },
];
