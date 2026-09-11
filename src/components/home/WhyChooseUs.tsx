import { ShieldCheck, UserCheck, Wallet, Clock, Sparkles, Headset } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  { icon: ShieldCheck, title: "Safe & Reliable", description: "Your safety and comfort come first, on every journey." },
  { icon: UserCheck, title: "Professional Drivers", description: "Experienced, courteous and customer-focused drivers." },
  { icon: Wallet, title: "Fair Pricing", description: "Competitive and transparent pricing, with no hidden charges." },
  { icon: Clock, title: "On-Time Service", description: "We value your time and aim to keep every journey on schedule." },
  { icon: Sparkles, title: "Personalized Experiences", description: "Travel arrangements designed around your needs." },
  { icon: Headset, title: "24/7 Customer Support", description: "Easy access to our team whenever assistance is required." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Why us"
          title="Why travel with JoseAli Safaris?"
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-900/5 text-forest-900">
                <f.icon className="h-5.5 w-5.5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-base text-forest-950">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
