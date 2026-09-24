import { Phone, MessageCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { CONTACT } from '../data/content'

/** Subtle sticky contact bar — mobile only. */
export default function StickyMobileCTA() {
  const location = useLocation()
  if (location.pathname === '/contact') return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-line bg-paper/95 backdrop-blur-md lg:hidden" role="navigation" aria-label="יצירת קשר מהירה">
      <Link to="/contact" className="flex-1 bg-navy py-3.5 text-center text-sm font-medium text-ivory">
        קביעת פגישה
      </Link>
      <a
        href={`tel:${CONTACT.mobileIntl}`}
        className="flex flex-1 items-center justify-center gap-2 border-x border-line py-3.5 text-sm text-ink"
        aria-label={`חיוג למשרד ${CONTACT.mobile}`}
      >
        <Phone size={16} /> חיוג
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm text-ink"
        aria-label="שליחת הודעת וואטסאפ למשרד"
      >
        <MessageCircle size={16} /> וואטסאפ
      </a>
    </div>
  )
}
