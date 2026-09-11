import Hero from "@/components/home/Hero";
import BookingWidget from "@/components/home/BookingWidget";
import ServicesSection from "@/components/home/ServicesSection";
import DestinationsSection from "@/components/home/DestinationsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import ToursSection from "@/components/home/ToursSection";
import AccommodationSection from "@/components/home/AccommodationSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookingWidget />
      <ServicesSection />
      <DestinationsSection />
      <WhyChooseUs />
      <AboutPreview />
      <ToursSection />
      <AccommodationSection />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <CTASection />
    </>
  );
}
