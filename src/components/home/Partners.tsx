import Image from "next/image";
import { Hotel } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { partners } from "@/lib/data/partners";

export default function Partners() {
  return (
    <section aria-label="Our partners" className="border-y border-line bg-background py-12 sm:py-16 lg:py-20">
      <div className="container-edge">
        <SectionHeading
          eyebrow="Along your journey"
          title="Our partners"
          subtitle="Familiar names in travel, hospitality and everyday services across Kenya."
          align="center"
          className="mx-auto"
        />
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {partners.map((p) => (
            <li key={p.name} className="group flex min-w-0 flex-col items-center rounded-sm border border-line bg-white px-3 py-5 text-center transition-colors hover:border-emerald-600/40 sm:px-4 sm:py-6">
              <div className="relative flex h-20 w-full max-w-36 items-center justify-center sm:h-24">
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 144px, (min-width: 640px) 25vw, 40vw"
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand-100 text-emerald-700">
                    <Hotel className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                )}
              </div>
              <span aria-hidden="true" className="my-4 h-px w-8 bg-gold-400 transition-colors group-hover:bg-emerald-600" />
              <h3 className="flex min-h-10 items-center justify-center text-sm font-semibold leading-5 text-[#18364a]">{p.name}</h3>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.1em] text-ink-500">{p.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
