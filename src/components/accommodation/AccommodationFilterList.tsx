"use client";

import { useMemo, useState } from "react";
import AccommodationCard from "@/components/cards/AccommodationCard";
import EmptyState from "@/components/ui/EmptyState";
import { accommodations } from "@/lib/data/accommodation";
import { PropertyType } from "@/lib/types";

export default function AccommodationFilterList() {
  const [location, setLocation] = useState("All locations");
  const [type, setType] = useState<PropertyType | "All">("All");

  const locations = useMemo(
    () => ["All locations", ...Array.from(new Set(accommodations.map((a) => a.location)))],
    []
  );
  const types: Array<PropertyType | "All"> = [
    "All",
    "Hotel",
    "Resort",
    "Beach Cottage",
    "Boutique Lodge",
    "Guesthouse",
  ];

  const filtered = accommodations.filter((a) => {
    if (location !== "All locations" && a.location !== location) return false;
    if (type !== "All" && a.propertyType !== type) return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-3 rounded-sm border border-line bg-white p-4">
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="input-field w-auto">
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select value={type} onChange={(e) => setType(e.target.value as PropertyType | "All")} className="input-field w-auto">
          {types.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All property types" : t}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No accommodation found"
            description="Try a different location or property type, or contact us and we'll help find something that fits."
          />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <AccommodationCard key={a.slug} accommodation={a} />
          ))}
        </div>
      )}
    </div>
  );
}
