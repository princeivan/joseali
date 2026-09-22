"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return; // prevent duplicate submissions
    if (!name || !phone || !message) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, service, travelDate, message, website }),
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
    let msg = `Hello JoseAli Tours, my name is ${name}.`;
    if (service) msg += `\nService: ${service}`;
    if (travelDate) msg += `\nTravel Date: ${travelDate}`;
    msg += `\nMessage: ${message}`;
    return msg;
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-line bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-700" aria-hidden="true" />
        <h3 className="mt-3 font-display text-xl text-forest-950">Message sent</h3>
        <p className="mt-2 text-sm text-ink-500">
          Thank you, {name.split(" ")[0]}. Our team will get back to you shortly.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <WhatsAppButton message={summaryMessage()} label="Follow up on WhatsApp" />
          <CallButton />
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-medium text-forest-900 link-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative rounded-sm border border-line bg-white p-6 sm:p-8" noValidate>
      {/* Honeypot — hidden from real users, visible to bots */}
      <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>

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
            <option>Other Transfer</option>
            <option>Car Hire</option>
            <option>Tours & Travel</option>
            <option>Bush Safari</option>
            <option>Accommodation</option>
            <option>Marine Tour</option>
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

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-sm bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-forest-900 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === "submitting" ? "Sending..." : "Send Message"}
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
