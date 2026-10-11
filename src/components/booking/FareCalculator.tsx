"use client";

import { useState } from "react";
import { fareRegions, fareRoutes, fareVehicles, findFare } from "@/lib/data/fares";
import { FareVehicle } from "@/lib/types";
import { formatKsh } from "@/lib/format";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FareCalculator() {
  const [destination, setDestination] = useState(fareRoutes[0]?.destination ?? "");
  const [vehicle, setVehicle] = useState<FareVehicle>("saloon");
  const match = findFare(destination);
  const price = match?.prices[vehicle];
  const vehicleLabel = fareVehicles.find((item) => item.type === vehicle)?.label ?? "";

  return (
    <div className="min-w-0 rounded-sm border border-line bg-white p-6">
      <h3 className="font-display text-lg text-[#18364a]">Fare Calculator</h3>
      <p className="mt-1 text-xs leading-relaxed text-ink-500">
        Choose your destination and vehicle to view the fare. Our team will confirm pickup details and final pricing.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4">
        <label className="flex min-w-0 flex-col gap-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">Destination</span>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="input-field w-full min-w-0">
            {fareRegions.map((region) => (
              <optgroup key={region} label={region}>
                {fareRoutes.filter((route) => route.region === region).map((route) => (
                  <option key={route.destination} value={route.destination}>{route.destination}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">Vehicle</span>
          <select value={vehicle} onChange={(e) => setVehicle(e.target.value as FareVehicle)} className="input-field">
            {fareVehicles.map((item) => (
              <option key={item.type} value={item.type}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div role="status" aria-live="polite" aria-atomic="true" className="mt-5 rounded-sm bg-sand-100 p-4">
        <p className="text-xs font-medium text-ink-500">{vehicleLabel}</p>
        <p className="mt-1 font-display text-2xl text-forest-900">
          {price != null ? formatKsh(price) : "Contact for price"}
        </p>
        <p className="mt-2 break-words text-xs leading-relaxed text-ink-700">
          {destination.split("/").join(" / ")}
        </p>
        <p className="mt-2 text-xs text-ink-500">
          {match?.distanceKm != null ? `Distance: ${match.distanceKm} km` : "Distance: contact us for details"}
        </p>
      </div>

      <div className="mt-4">
        <WhatsAppButton
          message={`Hello JoseAli Tours, I'd like to enquire about a transfer to ${destination}. Vehicle: ${vehicleLabel}.${match?.distanceKm != null ? ` Distance: ${match.distanceKm} km.` : ""}${price != null ? ` Listed fare: ${formatKsh(price)}.` : " Please provide a fare quote."} Please confirm pickup details and availability.`}
          label={price != null ? "Enquire on WhatsApp" : "Request a quote"}
        />
      </div>
    </div>
  );
}
