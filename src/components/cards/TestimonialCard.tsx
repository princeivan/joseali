import { Star } from "lucide-react";
import { Testimonial } from "@/lib/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-sm border border-line bg-white p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 font-display text-base text-gold-400">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <figcaption className="text-sm font-medium text-forest-950">{testimonial.name}</figcaption>
          <p className="text-xs text-ink-500">{testimonial.location}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${i < testimonial.rating ? "fill-gold-500 text-gold-500" : "text-line"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      {testimonial.isDemo && (
        <p className="mt-4 text-[11px] uppercase tracking-wide text-ink-500/70">Demo testimonial</p>
      )}
    </figure>
  );
}
