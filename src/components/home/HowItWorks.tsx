import { ListChecks, MapPinned, Send, BadgeCheck, PartyPopper } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { icon: ListChecks, title: "Choose Your Service", description: "Transfer, tour, safari, accommodation or a marine experience." },
  { icon: MapPinned, title: "Select Your Destination", description: "Choose your pickup location, destination or package." },
  { icon: Send, title: "Send Your Request", description: "Enter your travel details through our booking form or WhatsApp." },
  { icon: BadgeCheck, title: "Get Confirmation", description: "Our team confirms availability and final pricing." },
  { icon: PartyPopper, title: "Enjoy Your Journey", description: "Travel comfortably with JoseAli Safaris." },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container-edge">
        <SectionHeading eyebrow="Getting started" title="How it works" align="center" className="mx-auto" />
        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div
            className="absolute top-6 left-0 right-0 hidden h-px bg-line lg:block"
            style={{ marginInline: "10%" }}
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 bg-sand-50 text-forest-900">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <span className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-gold-600">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-display text-base text-forest-950">{step.title}</h3>
              <p className="mt-1.5 max-w-[180px] text-xs leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
