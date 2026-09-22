"use client";

import { useMemo, useState } from "react";
import { fareRoutes } from "@/lib/data/fares";
import { formatKsh } from "@/lib/format";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FareCalculator() {
  const origins = useMemo(() => Array.from(new Set(fareRoutes.map((r) => r.origin))), []);
  const [origin, setOrigin] = useState(origins[0] ?? "");
  const destinationsForOrigin = useMemo(
    () => Array.from(new Set(fareRoutes.filter((r) => r.origin === origin).map((r) => r.destination))),
    [origin]
  );
  const [destination, setDestination] = useState(destinationsForOrigin[0] ?? "");
  const [passengers, setPassengers] = useState(2);

  const match = fareRoutes.find(
    (r) =>
      r.origin === origin &&
      r.destination === (destinationsForOrigin.includes(destination) ? destination : destinationsForOrigin[0])
  );

  return (
    <div className="rounded-sm border border-line bg-white p-6">
      <h3 className="font-display text-lg text-forest-950">Fare Calculator</h3>
      <p className="mt-1 text-xs text-ink-500">
        Estimated fares for common routes. Final pricing is confirmed by our team.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">Pickup</span>
          <select
            value={origin}
            onChange={(e) => {
              setOrigin(e.target.value);
              const newDests = Array.from(
                new Set(fareRoutes.filter((r) => r.origin === e.target.value).map((r) => r.destination))
              );
              setDestination(newDests[0] ?? "");
            }}
            className="input-field"
          >
            {origins.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">Destination</span>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="input-field">
            {destinationsForOrigin.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">Passengers</span>
          <input
            type="number"
            min={1}
            max={20}
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            className="input-field"
          />
        </label>
      </div>

      <div className="mt-5 rounded-sm bg-sand-100 p-4">
        {match && match.priceKsh > 0 ? (
          <p className="text-sm text-ink-700">
            Estimated fare ({match.vehicleType}, {match.passengerRange} passengers):{" "}
            <span className="font-display text-xl text-forest-900">{formatKsh(match.priceKsh)}</span>
          </p>
        ) : (
          <p className="text-sm text-ink-700">
            We don&apos;t have a fixed price on file for this route yet —{" "}
            <span className="font-medium text-forest-900">contact us for a quote</span>.
          </p>
        )}
      </div>

      <div className="mt-4">
        <WhatsAppButton
          message={`Hello JoseAli Tours, I'd like a fare quote from ${origin} to ${destination} for ${passengers} passenger(s).`}
        />
      </div>
    </div>
  );
}
