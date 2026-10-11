"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle, X } from "lucide-react";

import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CallButton from "@/components/ui/CallButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const successNotificationRef = useRef<HTMLDivElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (status !== "success") return;

    successNotificationRef.current?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "submitting") return;

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, phone number and message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: service.trim(),
          travelDate: travelDate.trim(),
          message: message.trim(),

          // Honeypot must remain empty for normal users
          website: "",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        setStatus("error");

        setErrorMessage(
          data.message ||
            "Something went wrong. Please try again or contact us directly."
        );

        console.error("Contact form error:", data);

        return;
      }

      setShowSuccessNotification(true);
      setStatus("success");
    } catch (error) {
      console.error("Contact form request failed:", error);

      setStatus("error");

      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again, or contact us directly."
      );
    }
  }

  function summaryMessage() {
    let msg = `Hello JoseAli Tours, my name is ${name}.`;

    if (service) {
      msg += `\nService: ${service}`;
    }

    if (travelDate) {
      msg += `\nTravel Date: ${travelDate}`;
    }

    msg += `\nMessage: ${message}`;

    return msg;
  }

  if (status === "success") {
    return (
      <>
        {showSuccessNotification && (
          <div
            ref={successNotificationRef}
            role="status"
            aria-live="polite"
            aria-atomic="true"
            tabIndex={-1}
            className="fixed inset-x-4 top-4 z-[60] mx-auto flex max-w-xl items-start gap-3 rounded-sm border border-green-200 bg-green-50 p-4 text-green-950 shadow-lg focus:outline-none sm:top-6"
          >
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-600" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <p className="font-semibold">Message sent</p>
              <p className="mt-1 text-sm leading-relaxed">
                Thank you, {name.trim().split(/\s+/)[0]}. Our team will get back to you shortly.
              </p>
            </div>
            <button
              type="button"
              aria-label="Dismiss success notification"
              onClick={() => {
                setShowSuccessNotification(false);
                successHeadingRef.current?.focus({ preventScroll: true });
              }}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm hover:bg-green-100"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="rounded-sm border border-green-200 bg-white p-6 text-center sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
            <CheckCircle2
              className="h-9 w-9 text-green-600"
              aria-hidden="true"
            />
          </div>

          <h3 ref={successHeadingRef} tabIndex={-1} className="mt-5 font-display text-2xl text-[#18364a]">
            Message sent
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            Thank you, {name.trim().split(/\s+/)[0]}. Our team will get back to you
            shortly.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <WhatsAppButton
              message={summaryMessage()}
              label="Follow up on WhatsApp"
            />

            <CallButton />
          </div>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-sm border border-blue-200 px-5 py-3 text-sm font-medium text-blue-700 hover:bg-blue-50"
          >
            Send another message
          </button>
        </div>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative min-w-0 rounded-sm border border-blue-100 bg-white p-5 sm:p-8"
      noValidate
    >
      {/* Honeypot */}
      <div
        className="absolute h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Website</label>

        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <h3 className="font-display text-2xl text-[#18364a]">
        Send us a message
      </h3>
      <span className="mt-4 block h-0.5 w-12 bg-green-600" aria-hidden="true" />

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field min-w-0 max-w-full"
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone Number">
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field min-w-0 max-w-full"
            placeholder="07XX XXX XXX"
          />
        </Field>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field min-w-0 max-w-full"
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Service Required">
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="input-field min-w-0 max-w-full"
          >
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
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="input-field min-w-0 max-w-full"
          />
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
        <div role="alert" className="mt-5 flex items-start gap-2 rounded-sm bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle
            className="mt-0.5 h-4 w-4 shrink-0"
            aria-hidden="true"
          />

          <p>{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" && (
          <Loader2
            className="h-4 w-4 animate-spin"
            aria-hidden="true"
          />
        )}

        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-1.5">
      <span className="text-[11px] font-medium uppercase tracking-wide text-ink-500">
        {label}
      </span>

      {children}
    </label>
  );
}
