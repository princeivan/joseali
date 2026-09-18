"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { BookingServiceType } from "@/lib/types";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";

const serviceTypes: BookingServiceType[] = [
  "Airport Transfer",
  "SGR Transfer",
  "Other Transport",
  "Car Hire",
  "Tour",
  "Safari",
  "Accommodation",
  "Marine Experience",
];

const transferServices: BookingServiceType[] = ["Airport Transfer", "SGR Transfer", "Other Transport", "Marine Experience", "Safari"];

type Props = {
  defaultService?: BookingServiceType;
};

export default function BookingForm({ defaultService = "Airport Transfer" }: Props) {
  const [service, setService] = useState<BookingServiceType>(defaultService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Transfer-style fields
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [flightOrTrainDetails, setFlightOrTrainDetails] = useState("");

  // Car Hire fields
  const [vehicleType, setVehicleType] = useState("");
  const [hireStartDate, setHireStartDate] = useState("");
  const [hireEndDate, setHireEndDate] = useState("");
  const [driverPreference, setDriverPreference] = useState<"With Driver" | "Self Drive" | "">("");

  // Accommodation fields
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("1");
  const [accommodationPreference, setAccommodationPreference] = useState("");

  // Tours fields
  const [tourOrDestination, setTourOrDestination] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("1");

  const [notes, setNotes] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isCarHire = service === "Car Hire";
  const isAccommodation = service === "Accommodation";
  const isTour = service === "Tour";
  const isTransfer = transferServices.includes(service);
  const showFlight = service === "Airport Transfer";
  const showTrain = service === "SGR Transfer";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return; // prevent duplicate submissions
    if (!name || !phone) return;

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      service,
      name,
      phone,
      email,
      pickup,
      destination,
      date,
      time,
      passengers,
      flightOrTrainDetails,
      vehicleType,
      hireStartDate,
      hireEndDate,
      driverPreference,
      checkInDate,
      checkOutDate,
      guests,
      accommodationPreference,
      tourOrDestination,
      preferredDate,
      numberOfPeople,
      notes,
      website,
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again or contact us directly.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("We couldn't reach the server. Please check your connection and try again, or contact us directly.");
    }
  }

  function summaryMessage() {
    let msg = `Hello JoseAli Tours, I would like to request a booking.\nService: ${service}\nName: ${name}\nPhone: ${phone}`;
    if (isCarHire) {
      msg += `\nVehicle Type: ${vehicleType}\nHire Start: ${hireStartDate}\nHire End: ${hireEndDate}\nDriver Preference: ${driverPreference}\nPickup: ${pickup}`;
    } else if (isAccommodation) {
      msg += `\nCheck-in: ${checkInDate}\nCheck-out: ${checkOutDate}\nGuests: ${guests}\nPreference: ${accommodationPreference}`;
    } else if (isTour) {
      msg += `\nTour/Destination: ${tourOrDestination}\nPreferred Date: ${preferredDate}\nPeople: ${numberOfPeople}\nPickup: ${pickup}`;
    } else if (isTransfer) {
      msg += `\nPickup: ${pickup}\nDestination: ${destination}\nDate: ${date}${time ? " " + time : ""}\nPassengers: ${passengers}`;
      if (flightOrTrainDetails) msg += `\n${showFlight ? "Flight" : "Train"} details: ${flightOrTrainDetails}`;
    }
    if (notes) msg += `\nNotes: ${notes}`;
    return msg;
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-white p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
          <div>
            <h3 className="font-display text-xl text-forest-950">Thank you</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              Your booking request has been received. Our team will contact you shortly to
              confirm availability and final pricing.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton message={summaryMessage()} label="Send details on WhatsApp" />
          <CallButton />
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center rounded-sm border border-line px-5 py-3 text-sm font-medium text-ink-700 hover:bg-sand-50"
          >
            Make another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-sm border border-line bg-white p-6 sm:p-8" noValidate>
      {/* Honeypot — hidden from real users, visible to bots */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <Field label="Service Required">
        <select value={service} onChange={(e) => setService(e.target.value as BookingServiceType)} className="input-field">
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
        <Field label="Phone Number">
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" placeholder="07XX XXX XXX" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Email">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="you@example.com" />
        </Field>
      </div>

      {isCarHire && (
        <div className="mt-6 space-y-5 rounded-sm bg-sand-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Car Hire details</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Vehicle Type">
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} className="input-field">
                <option value="">Select a vehicle type</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Van / Minibus</option>
                <option>Other / Not sure</option>
              </select>
            </Field>
            <Field label="With Driver / Self Drive">
              <select value={driverPreference} onChange={(e) => setDriverPreference(e.target.value as "With Driver" | "Self Drive" | "")} className="input-field">
                <option value="">Select an option</option>
                <option value="With Driver">With Driver</option>
                <option value="Self Drive">Self Drive</option>
              </select>
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Hire Start Date">
              <input required type="date" value={hireStartDate} onChange={(e) => setHireStartDate(e.target.value)} className="input-field" />
            </Field>
            <Field label="Hire End Date">
              <input required type="date" value={hireEndDate} onChange={(e) => setHireEndDate(e.target.value)} className="input-field" />
            </Field>
          </div>
          <Field label="Pickup Location">
            <input required value={pickup} onChange={(e) => setPickup(e.target.value)} className="input-field" placeholder="Where should we deliver the vehicle?" />
          </Field>
        </div>
      )}

      {isAccommodation && (
        <div className="mt-6 space-y-5 rounded-sm bg-sand-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Accommodation details</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Check-in Date">
              <input required type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} className="input-field" />
            </Field>
            <Field label="Check-out Date">
              <input required type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} className="input-field" />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Number of Guests">
              <input required type="number" min={1} value={guests} onChange={(e) => setGuests(e.target.value)} className="input-field" />
            </Field>
            <Field label="Accommodation Preference">
              <input value={accommodationPreference} onChange={(e) => setAccommodationPreference(e.target.value)} className="input-field" placeholder="e.g. beachfront, budget, family-friendly" />
            </Field>
          </div>
        </div>
      )}

      {isTour && (
        <div className="mt-6 space-y-5 rounded-sm bg-sand-100 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Tour details</p>
          <Field label="Tour / Destination">
            <input required value={tourOrDestination} onChange={(e) => setTourOrDestination(e.target.value)} className="input-field" placeholder="e.g. Tsavo Safari, Wasini Island" />
          </Field>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Preferred Date">
              <input required type="date" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} className="input-field" />
            </Field>
            <Field label="Number of People">
              <input required type="number" min={1} value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} className="input-field" />
            </Field>
          </div>
          <Field label="Pickup Location">
            <input value={pickup} onChange={(e) => setPickup(e.target.value)} className="input-field" placeholder="Your hotel or pickup point" />
          </Field>
        </div>
      )}

      {isTransfer && (
        <div className="mt-6 space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Pickup Location">
              <input required value={pickup} onChange={(e) => setPickup(e.target.value)} className="input-field" placeholder="Pickup location" />
            </Field>
            <Field label="Destination">
              <input required value={destination} onChange={(e) => setDestination(e.target.value)} className="input-field" placeholder="Destination" />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
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
            <Field label={showFlight ? "Flight Number" : "Train / Journey Details"}>
              <input
                value={flightOrTrainDetails}
                onChange={(e) => setFlightOrTrainDetails(e.target.value)}
                className="input-field"
                placeholder={showFlight ? "e.g. KQ 310" : "e.g. Nairobi–Mombasa, 08:00 departure"}
              />
            </Field>
          )}
        </div>
      )}

      <div className="mt-5">
        <Field label="Additional Information">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="input-field resize-none"
            placeholder="Child seat, extra luggage, accessibility needs..."
          />
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-sm bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending request..." : "Request Booking"}
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
