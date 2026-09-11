import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

type Props = {
  message?: string;
  label?: string;
  variant?: "solid" | "outline" | "text";
  className?: string;
};

export default function WhatsAppButton({
  message,
  label = "Chat on WhatsApp",
  variant = "solid",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-[#25D366] text-white hover:bg-[#1DA851]"
      : variant === "outline"
        ? "border border-current text-forest-900 hover:bg-forest-900 hover:text-white"
        : "text-forest-900 underline underline-offset-4 hover:text-gold-600";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
