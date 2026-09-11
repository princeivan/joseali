import { FAQItem } from "@/lib/types";
import { Plus } from "lucide-react";

export default function FAQ({ items, title = "Frequently asked questions" }: { items: FAQItem[]; title?: string }) {
  if (!items.length) return null;
  return (
    <div>
      <h3 className="font-display text-2xl text-forest-950">{title}</h3>
      <div className="mt-5 divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <details key={i} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-ink-900">
              {item.question}
              <Plus
                className="h-4 w-4 shrink-0 text-gold-600 transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
