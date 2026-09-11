import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-sand-50">
      <div className="container-edge flex items-center gap-1.5 py-3 text-xs text-ink-500 overflow-x-auto">
        <Link href="/" className="flex items-center gap-1 hover:text-forest-900 shrink-0">
          <Home className="h-3.5 w-3.5" aria-hidden="true" />
          Home
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 shrink-0">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {item.href ? (
              <Link href={item.href} className="hover:text-forest-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-forest-900 font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}
