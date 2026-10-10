"use client";

import { useState, FormEvent } from "react";
import { Plane, TrainFront, Car, CheckCircle2, Calendar, Search, ChevronDown, CalendarDays, Clock3, LocateIcon, } from "lucide-react";
import { findFare } from "@/lib/data/fares";
import { formatKsh } from "@/lib/format";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";

type Tab = "Airport Transfer" | "SGR Transfer" | "Other Transfers";
const tabs: { id: string; key: Tab; icon: typeof Plane }[] = [
  { id: "airport", key: "Airport Transfer", icon: Plane },
  { id: "sgr", key: "SGR Transfer", icon: TrainFront },
  { id: "other", key: "Other Transfers", icon: Car },
];

type Result = { type: "fare"; amount: number } | { type: "quote" } | null;

export default function BookingWidget() {
  const [tab, setTab] = useState<Tab>("Airport Transfer");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [result, setResult] = useState<Result>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!pickup || !dropoff || !date) return;

    const fare = findFare(pickup, dropoff);
    if (fare && fare.priceKsh > 0) {
      setResult({ type: "fare", amount: fare.priceKsh });
    } else {
      setResult({ type: "quote" });
    }
    setSubmitted(true);
  }

  function reset() {
    setSubmitted(false);
    setResult(null);
  }

  return (
    
<div className="mx-auto w-full max-w-7xl px-0 sm:px-5 lg:px-6">
  <div className="overflow-hidden border-y border-[#E6DED0] bg-white shadow-[0_8px_28px_rgba(15,45,38,0.10)] sm:rounded-xl sm:border">

    {/* Transfer tabs */}
    <div className="grid grid-cols-3 border-b border-[#E6DED0] bg-[#FAF8F2]">
      {tabs.map(({ id, key, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => {
            setTab(key);
            reset();
          }}
          aria-pressed={tab === key}
          className={`flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-3 text-xs font-semibold transition sm:flex-row sm:gap-2 sm:text-sm ${
            tab === key
              ? "bg-[#073C32] text-white"
              : "text-[#43574F] hover:bg-[#EAF3EE]"
          }`}
        >
          <Icon size={18} aria-hidden="true" />
          <span className="hidden min-[370px]:inline">{key}</span>
          <span className="min-[370px]:hidden">
            {id === "airport"
              ? "Airport"
              : id === "sgr"
                ? "SGR"
                : "Other"}
          </span>
        </button>
      ))}
    </div>

    {!submitted ? (
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-x-4 gap-y-4 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-3 xl:grid-cols-6"
      >
        <Field label="Pickup Location" className="min-w-0">
          <input
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder={
              tab === "SGR Transfer"
                ? "Mombasa SGR Terminus"
                : "Moi International Airport"
            }
            className="input-field w-full min-w-0"
          />
        </Field>

        <Field label="Drop-off Location" className="min-w-0">
          <input
            required
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            placeholder="Diani, Nyali, Mombasa..."
            className="input-field w-full min-w-0"
          />
        </Field>

        <Field label="Date" className="min-w-0">
          <input
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={new Date().toISOString().slice(0, 10)}
            className="input-field w-full min-w-0"
          />
        </Field>

        <Field label="Time" className="min-w-0">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="input-field w-full min-w-0"
          />
        </Field>

        <Field label="Passengers" className="min-w-0">
          <select
            required
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="input-field w-full min-w-0"
          >
            {["1", "2", "3", "4", "5", "6+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Field>

        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <button
            type="submit"
            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#168447] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#126F3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168447] focus-visible:ring-offset-2"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Get Fare / Book
          </button>
        </div>
      </form>
    ) : (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700"
            aria-hidden="true"
          />

          <div className="min-w-0">
            <h3 className="font-display text-lg text-forest-950">
              Booking Request Submitted
            </h3>

            <p className="mt-1 text-sm leading-6 text-ink-500">
              Our team will confirm vehicle availability and the final fare
              with you.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-md bg-sand-50 p-4 sm:p-5">
          {result?.type === "fare" ? (
            <p className="break-words text-sm leading-6 text-ink-700">
              Estimated fare for {pickup} → {dropoff}:{" "}
              <span className="font-display text-lg text-forest-900">
                {formatKsh(result.amount)}
              </span>

              <br />

              <span className="text-xs leading-5 text-ink-500">
                The final price will be confirmed by our team based on the
                vehicle and exact pickup point.
              </span>
            </p>
          ) : (
            <p className="break-words text-sm leading-6 text-ink-700">
              We don&apos;t have a fixed fare on file for {pickup} → {dropoff}
              yet.{" "}
              <span className="font-medium text-forest-900">
                Request a Quote
              </span>{" "}
              — our team will get back to you with pricing.
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <div className="w-full sm:w-auto">
            <WhatsAppButton
              message={`Hello JoseAli Tours, I would like to book a ${tab.toLowerCase()} from ${pickup} to ${dropoff} on ${date}${time ? " at " + time : ""} for ${passengers} passenger(s).`}
            />
          </div>

          <div className="w-full sm:w-auto">
            <CallButton />
          </div>

          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-medium text-ink-700 transition hover:bg-sand-50 sm:w-auto"
          >
            Make another request
          </button>
        </div>
      </div>
    )}
  </div>
</div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-1.5 text-left ${className}`}>
      <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">{label}</span>
      {children}
    </label>
  );
}
