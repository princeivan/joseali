"use client";

import { useState } from "react";
import DestinationCard from "@/components/cards/DestinationCard";
import EmptyState from "@/components/ui/EmptyState";
import { destinations } from "@/lib/data/destinations";
import { Destination } from "@/lib/types";

const categories: Array<Destination["category"] | "All"> = ["All", "Coast", "Safari", "City", "Marine", "Adventure"];

export default function DestinationsFilterList() {
  const [category, setCategory] = useState<Destination["category"] | "All">("All");
  const filtered = category === "All" ? destinations : destinations.filter((d) => d.category === category);

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

      {filtered.length === 0 ? (
        <div className="mt-8">
          <EmptyState title="No destination found" description="Try a different category." />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {filtered.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      )}
    </div>
  );
}
