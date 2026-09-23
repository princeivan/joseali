import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  imageSeed: string;
  imageAlt: string;
};

export default function PageHero({
  title,
  subtitle,
  imageSeed,
  imageAlt,
}: Props) {
  return (
    <section className="relative flex h-[280px] items-end overflow-hidden bg-forest-950 sm:h-[320px]">
      <Image
        src={`/images/heroes/${imageSeed}.jpg`}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover opacity-50"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/50 to-forest-950/20" />

      <div className="container-edge relative pb-8">
        <h1 className="font-display text-3xl text-white sm:text-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 max-w-lg text-sm text-sand-100/85">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}