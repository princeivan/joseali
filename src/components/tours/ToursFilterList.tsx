"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import TourCard from "@/components/cards/TourCard";
import EmptyState from "@/components/ui/EmptyState";
import { tours } from "@/lib/data/tours";
import { Tour } from "@/lib/types";

const types: Array<Tour["type"] | "All"> = ["All", "Coastal", "Safari", "City", "Marine", "Multi-Day"];
const durations = ["Any duration", "1 Day", "2-3 Days", "4+ Days"];

export default function ToursFilterList() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get("type") as Tour["type"]) || "All";

  const [type, setType] = useState<Tour["type"] | "All">(types.includes(initialType) ? initialType : "All");
  const [duration, setDuration] = useState(durations[0]);
  const [location, setLocation] = useState("All locations");

  const locations = useMemo(() => ["All locations", ...Array.from(new Set(tours.map((t) => t.location)))], []);

  const filtered = tours.filter((t) => {
    if (type !== "All" && t.type !== type) return false;
    if (location !== "All locations" && t.location !== location) return false;
    if (duration === "1 Day" && t.durationDays !== 1) return false;
    if (duration === "2-3 Days" && (t.durationDays < 2 || t.durationDays > 3)) return false;
    if (duration === "4+ Days" && t.durationDays < 4) return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-3 rounded-sm border border-line bg-white p-4">
        <select value={type} onChange={(e) => setType(e.target.value as Tour["type"] | "All")} className="input-field w-auto">
          {types.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "All tour types" : t}
            </option>
          ))}
        </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="input-field w-auto">
          {locations.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        <select value={duration} onChange={(e) => setDuration(e.target.value)} className="input-field w-auto">
          {durations.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No tours found"
            description="Try a different tour type, location or duration — or ask us directly for a custom itinerary."
          />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      )}
    </div>
  );
}
