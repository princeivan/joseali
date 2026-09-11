"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

const PAGE_SIZE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(testimonials.length / PAGE_SIZE);
  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="py-20">
      <div className="container-edge">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Client stories" title="What our clients say" />
          {pages > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-700 hover:bg-sand-50"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => setPage((p) => (p + 1) % pages)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-700 hover:bg-sand-50"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/contact" className="text-sm font-medium text-forest-900 link-underline">
            View all reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
