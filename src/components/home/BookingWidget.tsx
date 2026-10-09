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
    <div className="relative left-1/2 z-10 w-[calc(100%-48px)] max-w-[1240px] -translate-x-1/2 sm:-mt-8 sm:px-6 lg:-mt-12">
      <div className="overflow-hidden border-y border-[#E6DED0] bg-white shadow-[0_8px_28px_rgba(15,45,38,0.10)] sm:rounded-xl sm:border">
        {/* <div className="grid grid-cols-3 border-b border-[#E6DED0] bg-[#FAF8F2]">
          {tabs.map(({ key, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setTab(key);
                reset();
              }}
              className={`flex flex-1 items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
                tab === key
                  ? "bg-forest-900 text-white"
                  : "bg-sand-50 text-ink-700 hover:bg-sand-100"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">{key}</span>
            </button>
          ))}
        </div> */}
        <div className="grid grid-cols-3 border-b border-[#E6DED0] bg-[#FAF8F2]">
          {tabs.map(({id,key,icon: Icon})=><button key={id} type="button" onClick={() => {
                setTab(key);
                reset();
              }} aria-pressed={tab === key} className={`flex min-h-12 flex-col items-center justify-center gap-1 px-1 py-2 text-[11px] font-semibold sm:min-h-[58px] sm:flex-row sm:gap-2 sm:text-sm ${tab === key ? "bg-[#073C32] text-white" : "text-[#43574F] hover:bg-[#EAF3EE]"}`}><Icon size={17}/><span className="hidden min-[370px]:inline">{key}</span><span className="min-[370px]:hidden">{id==="airport"?"Airport":id==="sgr"?"SGR":"Other"}</span></button>)}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-5 sm:grid-cols-2 lg:grid-cols-6 lg:items-end">
            <Field label="Pickup Location" className="lg:col-span-1">
              <input
                required
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={tab === "SGR Transfer" ? "Mombasa Terminus (SGR)" : "Moi International Airport"}
                className="input-field"
              />
            </Field>
            <Field label="Drop-off Location" className="lg:col-span-1">
              <input
                required
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Diani, Nyali, Mombasa Island..."
                className="input-field"
              />
            </Field>
            
            <Field label="Date">
              <input required type="date" value={date} onChange={(e) => setDate(e.target.value)} className="input-field" />
            </Field>
            
            <Field label="Time">
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="input-field" />
            </Field>
            
            <Field label="Passengers">
              <select value={passengers} onChange={(e) => setPassengers(e.target.value)} className="input-field">
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <option key={n} value={n}>
                    {n}
                    
                  </option>
                ))}
                
              </select>
            </Field>
            <button
              type="submit"
              className="flex items-center justify-center rounded-sm bg-green-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 lg:col-span-1"
            >
              <Search className="mr-2 h-4.5 w-4.5" aria-hidden="true" />
              Get Fare / Book
            </button>
          </form>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
              <div>
                <h3 className="font-display text-lg text-forest-950">Booking Request Submitted</h3>
                <p className="mt-1 text-sm text-ink-500">
                  Our team will confirm vehicle availability and the final fare with you.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-sm bg-sand-50 p-4">
              {result?.type === "fare" ? (
                <p className="text-sm text-ink-700">
                  Estimated fare for {pickup} → {dropoff}:{" "}
                  <span className="font-display text-lg text-forest-900">{formatKsh(result.amount)}</span>
                  <br />
                  <span className="text-xs text-ink-500">
                    Final price is confirmed by our team based on vehicle and exact pickup point.
                  </span>
                </p>
              ) : (
                <p className="text-sm text-ink-700">
                  We don&apos;t have a fixed fare on file for {pickup} → {dropoff} yet.{" "}
                  <span className="font-medium text-forest-900">Request a Quote</span> — our team
                  will get back to you with pricing shortly.
                </p>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <WhatsAppButton
                message={`Hello JoseAli Tours, I would like to book a ${tab.toLowerCase()} from ${pickup} to ${dropoff} on ${date}${time ? " at " + time : ""} for ${passengers} passenger(s).`}
              />
              <CallButton />
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink-700 hover:bg-sand-50"
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
