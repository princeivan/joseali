import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/lib/data/partners";

export default function Partners() {
  return (
    <section className="border-y border-line bg-sand-100 py-16">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Working together"
          title="Our partners"
          subtitle="We work with trusted travel and hospitality partners to make your journey seamless."
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0">
              <span className="font-display text-lg text-forest-900">{p.name}</span>
              <span className="text-[10px] uppercase tracking-wide text-ink-500">{p.category}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-500">
          Logos shown are representative placeholders pending confirmed partnership agreements.
        </p>
      </div>
    </section>
  );
}
