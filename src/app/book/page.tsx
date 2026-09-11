import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BookingForm from "@/components/booking/BookingForm";
import FareCalculator from "@/components/booking/FareCalculator";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Request a transfer, tour, safari, accommodation or marine experience with JoseAli Safaris.",
};

export default function BookPage() {
  return (
    <>
      <PageHero title="Book Your Journey" subtitle="Tell us what you need — we'll confirm availability and pricing." imageSeed="book-hero" imageAlt="JoseAli Safaris vehicle ready for departure" />
      <Breadcrumbs items={[{ label: "Book Now" }]} />
      <section className="py-16">
        <div className="container-edge grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          <div className="lg:col-span-1">
            <FareCalculator />
          </div>
        </div>
      </section>
    </>
  );
}
