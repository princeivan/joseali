"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "@/lib/data/gallery";
import { GalleryCategory } from "@/lib/types";

const categories: Array<GalleryCategory | "All"> = [
  "All",
  "Vehicles",
  "Beach",
  "Safari",
  "Tours",
  "Marine",
  "Accommodation",
  "Travel",
];

export default function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = category === "All" ? galleryItems : galleryItems.filter((g) => g.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              category === c ? "bg-forest-900 text-white" : "border border-line text-ink-700 hover:bg-sand-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative block w-full overflow-hidden rounded-sm break-inside-avoid"
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={500}
              height={400 + (i % 3) * 80}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950/95 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close gallery"
            onClick={() => setLightboxIndex(null)}
            className="absolute right-5 top-5 text-white/80 hover:text-white"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : i))}
            className="absolute left-3 text-white/80 hover:text-white sm:left-8"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden="true" />
          </button>
          <div className="relative h-[70vh] w-full max-w-3xl">
            <Image
              src={filtered[lightboxIndex].image.src}
              alt={filtered[lightboxIndex].image.alt}
              fill
              sizes="80vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : i))}
            className="absolute right-3 text-white/80 hover:text-white sm:right-8"
          >
            <ChevronRight className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
