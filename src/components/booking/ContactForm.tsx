"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !phone || !message) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-700" aria-hidden="true" />
        <h3 className="mt-3 font-display text-xl text-forest-950">Message sent</h3>
        <p className="mt-2 text-sm text-ink-500">
          Thank you, {name.split(" ")[0]}. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-sm font-medium text-forest-900 link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm border border-line bg-white p-6 sm:p-8">
      <h3 className="font-display text-xl text-forest-950">Send us a message</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input required value={name} onChange={(e) => setName(e.target.value)} className="input-field" placeholder="Your name" />
        </Field>
        <Field label="Phone Number">
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="input-field" placeholder="07XX XXX XXX" />
        </Field>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="you@example.com" />
        </Field>
        <Field label="Service Required">
          <select value={service} onChange={(e) => setService(e.target.value)} className="input-field">
            <option value="">Select a service</option>
            <option>Airport Transfer</option>
            <option>SGR Transfer</option>
            <option>Local Transfer</option>
            <option>Tour / Safari</option>
            <option>Accommodation</option>
            <option>Marine Experience</option>
            <option>Corporate Transport</option>
            <option>Other</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Travel Date (optional)">
          <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} className="input-field" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-field resize-none"
            placeholder="Tell us about your trip..."
          />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-sm bg-forest-900 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 sm:w-auto"
      >
        Send Message
      </button>
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
