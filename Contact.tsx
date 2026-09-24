import { Phone, Mail, MapPin, Clock, MessageCircle, Linkedin } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { CONTACT } from '../data/content'

export default function Contact() {
  return (
    <>
      <Seo
        title="צור קשר | חריזי עורכי דין — רמת גן"
        description="לתיאום פגישת ייעוץ עם חריזי עורכי דין: מגדל משה אביב, ז׳בוטינסקי 7 רמת גן. טלפון 03-6095595."
        path="/contact"
      />
      <PageHero
        kicker="צור קשר"
        title="עומדים בפני עסקה או החלטה משפטית משמעותית?"
        description="שיחה מוקדמת יכולה לעזור להבין את האפשרויות, לזהות את הסיכונים ולבחור את הדרך הנכונה להתקדם."
        crumbs={[{ label: 'צור קשר' }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-5 lg:px-10">
          {/* Details */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-serif text-3xl text-ink">פרטי התקשרות</h2>
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><Phone size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">טלפון משרד</p>
                    <a href={`tel:${CONTACT.phoneIntl}`} className="text-lg text-ink transition-colors hover:text-bronze" dir="ltr">
                      {CONTACT.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><Phone size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">נייד</p>
                    <a href={`tel:${CONTACT.mobileIntl}`} className="text-lg text-ink transition-colors hover:text-bronze" dir="ltr">
                      {CONTACT.mobile}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><MessageCircle size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">WhatsApp</p>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-ink transition-colors hover:text-bronze"
                    >
                      שליחת הודעה
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><Mail size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">אימייל</p>
                    <a href={`mailto:${CONTACT.email}`} className="text-lg text-ink transition-colors hover:text-bronze">
                      {CONTACT.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><MapPin size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">כתובת</p>
                    <p className="text-lg text-ink">{CONTACT.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><Clock size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">שעות פעילות</p>
                    <p className="text-lg text-ink">{CONTACT.hours}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="border border-line bg-paper p-3 text-bronze"><Linkedin size={18} /></span>
                  <div>
                    <p className="text-sm text-stone">LinkedIn</p>
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-ink transition-colors hover:text-bronze"
                    >
                      פרופיל מקצועי
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="border border-line bg-paper p-8 lg:p-12">
              <h2 className="font-serif text-3xl text-ink">כתבו לנו</h2>
              <p className="mt-3 text-stone">נחזור אליך בהקדם האפשרי, בדיסקרטיות מלאה.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
