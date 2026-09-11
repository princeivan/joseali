import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { telLink, whatsappLink } from "@/lib/config";

export default function StickyMobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-line bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.06)] lg:hidden">
      <a
        href={telLink()}
        className="flex flex-col items-center gap-0.5 py-2.5 text-forest-900"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">Call</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 border-x border-line py-2.5 text-[#1DA851]"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">WhatsApp</span>
      </a>
      <Link href="/book" className="flex flex-col items-center gap-0.5 bg-gold-500 py-2.5 text-forest-950">
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-medium">Book Now</span>
      </Link>
    </div>
  );
}
