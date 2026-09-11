import { Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { siteConfig, telLink, mailtoLink, whatsappLink } from "@/lib/config";

export default function TopBar() {
  return (
    <div className="hidden bg-forest-950 text-sand-100 lg:block">
      <div className="container-edge flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-5">
          <a href={telLink()} className="flex items-center gap-1.5 hover:text-gold-400">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.contact.directorLabel}: {siteConfig.contact.directorName}
          </a>
          <a href={telLink()} className="flex items-center gap-1.5 border-l border-white/15 pl-5 hover:text-gold-400">
            {siteConfig.contact.phoneDisplay} — {siteConfig.contact.altContactName}
            <span className="text-sand-100/60">({siteConfig.contact.altContactRole})</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400">
            WhatsApp
          </a>
          <a href={mailtoLink()} className="flex items-center gap-1.5 hover:text-gold-400">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
          <div className="flex items-center gap-3 border-l border-white/15 pl-4">
            <a href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-gold-400">
              <FacebookIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-gold-400">
              <InstagramIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" className="hover:text-gold-400">
              <YoutubeIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
