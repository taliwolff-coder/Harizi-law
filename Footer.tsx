import { Link } from 'react-router'
import { Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { CONTACT, PRACTICE_AREAS } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory" role="contentinfo">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-2xl font-semibold">עוזי חריזי</p>
            <p className="mt-1 text-xs tracking-[0.18em] text-ivory/50 uppercase">משרד עורכי דין</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              ליווי משפטי מדויק בעסקאות, נכסים וחברות — מתוך הבנה משפטית ועסקית של התמונה המלאה.
            </p>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-bronze-light"
              aria-label="LinkedIn של עו״ד עוזי חריזי"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          {/* Practice areas */}
          <nav aria-label="תחומי עיסוק — תחתית">
            <h3 className="text-sm font-semibold tracking-wide text-bronze-light">תחומי עיסוק</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link to={`/practice/${area.slug}`} className="text-ivory/70 transition-colors hover:text-ivory">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-bronze-light">יצירת קשר</h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory/70">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-bronze-light" />
                <a href={`tel:${CONTACT.phoneIntl}`} className="hover:text-ivory" dir="ltr">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-bronze-light" />
                <a href={`tel:${CONTACT.mobileIntl}`} className="hover:text-ivory" dir="ltr">
                  {CONTACT.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-bronze-light" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ivory">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-bronze-light" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <nav aria-label="עמודי האתר — תחתית">
            <h3 className="text-sm font-semibold tracking-wide text-bronze-light">האתר</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/about" className="text-ivory/70 transition-colors hover:text-ivory">המשרד</Link></li>
              <li><Link to="/attorney" className="text-ivory/70 transition-colors hover:text-ivory">עו״ד עוזי חריזי</Link></li>
              <li><Link to="/insights" className="text-ivory/70 transition-colors hover:text-ivory">מידע ומאמרים</Link></li>
              <li><Link to="/contact" className="text-ivory/70 transition-colors hover:text-ivory">צור קשר</Link></li>
            </ul>
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 border-t border-ivory/10 pt-7">
          <p className="max-w-4xl text-xs leading-relaxed text-ivory/50">
            המידע באתר הינו מידע כללי בלבד ואינו מהווה ייעוץ משפטי או תחליף לייעוץ משפטי. קבלת ייעוץ משפטי מחייבת
            בחינה פרטנית של נסיבות כל מקרה. גלישה באתר או פנייה באמצעותו אינם יוצרים יחסי עורך דין–לקוח.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-ivory/50 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} {CONTACT.firmName}. כל הזכויות שמורות.</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="קישורים משפטיים">
              <Link to="/privacy" className="transition-colors hover:text-ivory">מדיניות פרטיות</Link>
              <Link to="/accessibility" className="transition-colors hover:text-ivory">הצהרת נגישות</Link>
              <Link to="/terms" className="transition-colors hover:text-ivory">תנאי שימוש</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
