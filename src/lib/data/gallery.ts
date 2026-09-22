// import { GalleryItem } from "@/lib/types";
// import { placeholderImage } from "@/lib/images";

// export const galleryItems: GalleryItem[] = [
//   { id: "g1", category: "Vehicles", image: { src: placeholderImage("vehicle-1"), alt: "JoseAli Safaris transfer vehicle" } },
//   { id: "g2", category: "Vehicles", image: { src: placeholderImage("vehicle-2"), alt: "Safari vehicle with pop-up roof" } },
//   { id: "g3", category: "Beach", image: { src: placeholderImage("beach-1"), alt: "Diani beach shoreline" } },
//   { id: "g4", category: "Beach", image: { src: placeholderImage("beach-2"), alt: "Palm-lined Kenyan coast" } },
//   { id: "g5", category: "Safari", image: { src: placeholderImage("safari-1"), alt: "Elephants on a game drive" } },
//   { id: "g6", category: "Safari", image: { src: placeholderImage("safari-2"), alt: "Giraffes in Tsavo" } },
//   { id: "g7", category: "Tours", image: { src: placeholderImage("tours-1"), alt: "Guided Old Town Mombasa tour" } },
//   { id: "g8", category: "Marine", image: { src: placeholderImage("marine-1"), alt: "Dhow boat near Wasini Island" } },
//   { id: "g9", category: "Marine", image: { src: placeholderImage("marine-2"), alt: "Snorkelling off the Kenyan coast" } },
//   { id: "g10", category: "Accommodation", image: { src: placeholderImage("accommodation-1"), alt: "Beachfront resort room" } },
//   { id: "g11", category: "Accommodation", image: { src: placeholderImage("accommodation-2"), alt: "Resort pool" } },
//   { id: "g12", category: "Travel", image: { src: placeholderImage("travel-1"), alt: "SGR train travel" } },
// ];
import { GalleryItem } from "@/lib/types";

const galleryConfig = [
  {
    category: "Vehicles",
    folder: "vehicle",
    count: 37,
    alt: "JoseAli Tours vehicle",
  },
  {
    category: "Safari",
    folder: "safari",
    count: 30,
    alt: "Kenya safari experience",
  },
  {
    category: "Tours",
    folder: "tours",
    count: 15,
    alt: "JoseAli Tours travel experience",
  },
  {
    category: "Car Hire",
    folder: "car-hire",
    count: 10,
    alt: "JoseAli Tours car hire vehicle",
  },
  {
    category: "Beach",
    folder: "beach",
    count: 2,
    alt: "Diani Beach",
  },
  {
    category: "Marine",
    folder: "marine",
    count: 2,
    alt: "Kenyan coast marine experience",
  },
  {
    category: "Accommodation",
    folder: "accommodation",
    count: 2,
    alt: "Kenya accommodation",
  },
  {
    category: "Travel",
    folder: "travel",
    count: 1,
    alt: "Kenya travel",
  },
] as const;

export const galleryItems: GalleryItem[] = galleryConfig.flatMap(
  ({ category, folder, count, alt }) =>
    Array.from({ length: count }, (_, index) => {
      const number = index + 1;

      return {
        id: `${folder}-${number}`,
        category,
        image: {
          src: `/images/gallery/${folder}/${folder}-${number}.png`,
          alt: `${alt} ${number}`,
        },
      };
    })
);