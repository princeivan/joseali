import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CTASection() {
  return (
    <section className="bg-forest-950 py-20">
      <div className="container-edge flex flex-col items-center text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Ready to start your journey?
        </h2>
        <span className="mt-4 block h-[3px] w-14 bg-gold-500" aria-hidden="true" />
        <p className="mt-5 max-w-xl text-base leading-relaxed text-sand-100/85">
          Whether you need an airport transfer, SGR pickup, safari, accommodation or a
          complete travel experience, JoseAli Safaris is ready to assist.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-sm bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
          >
            Book Your Journey
          </Link>
          <WhatsAppButton
            variant="outline"
            className="!text-white border-white/70 hover:!bg-white hover:!text-forest-950"
          />
        </div>
      </div>
    </section>
  );
}
