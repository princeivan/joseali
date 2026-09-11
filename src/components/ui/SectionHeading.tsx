type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-white" : "text-forest-950";
  const subColor = tone === "light" ? "text-sand-100/80" : "text-ink-500";

  return (
    <div className={`${isCenter ? "text-center mx-auto" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-gold-600 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl leading-tight ${titleColor}`}>
        {title}
      </h2>
      <span
        className={`mt-4 block h-[3px] w-14 bg-gold-500 ${isCenter ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {subtitle && <p className={`mt-4 text-base leading-relaxed ${subColor}`}>{subtitle}</p>}
    </div>
  );
}
