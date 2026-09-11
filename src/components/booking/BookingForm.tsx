"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { BookingServiceType } from "@/lib/types";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";

const serviceTypes: BookingServiceType[] = [
  "Airport Transfer",
  "SGR Transfer",
  "Other Transport",
  "Tour",
  "Safari",
  "Accommodation",
  "Marine Experience",
];

const needsRouteFields: BookingServiceType[] = ["Airport Transfer", "SGR Transfer", "Other Transport"];

type Props = {
  defaultService?: BookingServiceType;
};

export default function BookingForm({ defaultService = "Airport Transfer" }: Props) {
  const [service, setService] = useState<BookingServiceType>(defaultService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [flightOrTrain, setFlightOrTrain] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const showRoute = needsRouteFields.includes(service);
  const showFlight = service === "Airport Transfer";
  const showTrain = service === "SGR Transfer";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  }

  function summaryMessage() {
    let msg = `Hello JoseAli Safaris, I would like to request a booking.\nService: ${service}\nName: ${name}\nPhone: ${phone}`;
    if (showRoute) msg += `\nPickup: ${pickup}\nDestination: ${destination}`;
    if (date) msg += `\nDate: ${date}${time ? " " + time : ""}`;
    if (passengers) msg += `\nPassengers: ${passengers}`;
    if (flightOrTrain) msg += `\n${showFlight ? "Flight" : "Train"} details: ${flightOrTrain}`;
    if (notes) msg += `\nNotes: ${notes}`;
    return msg;
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-line bg-white p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
          <div>
            <h3 className="font-display text-xl text-forest-950">Thank you</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              Your request has been received. JoseAli Safaris will contact you to confirm
              availability and final pricing.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton message={summaryMessage()} label="Send details on WhatsApp" />
          <CallButton />
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink-700 hover:bg-sand-50"
          >
            Make another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-line bg-white p-6 sm:p-8">
      <Field label="Service Required">
        <select
          value={service}
          onChange={(e) => setService(e.target.value as BookingServiceType)}
          className="input-field"
        >
          {serviceTypes.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input required value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Your name" />
        </Field>
        <Field label="Phone">
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" placeholder="07XX XXX XXX" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Email (optional)">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="you@example.com" />
        </Field>
      </div>

      {showRoute && (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label="Pickup">
            <input required value={pickup} onChange={(e) => setPickup(e.target.value)} className="input-field" placeholder="Pickup location" />
          </Field>
          <Field label="Destination">
            <input required value={destination} onChange={(e) => setDestination(e.target.value)} className="input-field" placeholder="Destination" />
          </Field>
        </div>
      )}

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
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
      </div>

      {(showFlight || showTrain) && (
        <div className="mt-5">
          <Field label={showFlight ? "Flight Number" : "Train / Journey Details"}>
            <input
              value={flightOrTrain}
              onChange={(e) => setFlightOrTrain(e.target.value)}
              className="input-field"
              placeholder={showFlight ? "e.g. KQ 310" : "e.g. Nairobi–Mombasa, 08:00 departure"}
            />
          </Field>
        </div>
      )}

      <div className="mt-5">
        <Field label="Special Requirements (optional)">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="input-field resize-none"
            placeholder="Child seat, extra luggage, accessibility needs..."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-gold-500 px-5 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400 sm:w-auto"
      >
        Request Booking
      </button>
      <p className="mt-3 text-xs text-ink-500">
        Submitting a request does not confirm a booking. Our team will follow up to confirm
        availability and pricing.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">{label}</span>
      {children}
    </label>
  );
}
