import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Airport transfers, SGR transfers, local and corporate transport, bush safaris and marine experiences from JoseAli Safaris.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Transport, safaris and marine experiences, arranged around your journey."
        imageSeed="services-hero"
        imageAlt="JoseAli Safaris fleet vehicle"
      />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <section className="py-16">
        <div className="container-edge">
          <SectionHeading eyebrow="What we offer" title="Every service, in one place" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
