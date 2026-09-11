import { Phone } from "lucide-react";
import { telLink, siteConfig } from "@/lib/config";

type Props = {
  label?: string;
  variant?: "solid" | "outline" | "text";
  className?: string;
};

export default function CallButton({ label, variant = "outline", className = "" }: Props) {
  const base = "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-forest-900 text-white hover:bg-forest-800"
      : variant === "outline"
        ? "border border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white"
        : "text-forest-900 underline underline-offset-4 hover:text-gold-600";

  return (
    <a href={telLink()} className={`${base} ${styles} ${className}`}>
      <Phone className="h-4 w-4" aria-hidden="true" />
      {label ?? `Call ${siteConfig.contact.phoneDisplay}`}
    </a>
  );
}
