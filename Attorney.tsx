import { Linkedin } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { CONTACT } from '../data/content'
import { absoluteUrl } from '../lib/site'

const CORE_AREAS = [
  'נדל״ן ומקרקעין',
  'נדל״ן מסחרי',
  'מיסוי מקרקעין',
  'משפט מסחרי ועסקי',
  'חברות ותאגידים',
  'מסחר בינלאומי',
]

export default function Attorney() {
  return (
    <>
      <Seo
        title="עו״ד עוזי חריזי | חריזי עורכי דין"
        description="עו״ד עוזי חריזי — ליווי משפטי בעסקאות נדל״ן, מקרקעין, משפט מסחרי, חברות ומסחר בינלאומי."
        path="/attorney"
        type="profile"
        image="/images/attorney-main.webp"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${absoluteUrl('/attorney')}#uzi-harizi`,
          name: 'עו״ד עוזי חריזי',
          alternateName: ['עוזי חריזי', 'עורך דין עוזי חריזי', 'Uzi Harizi'],
          url: absoluteUrl('/attorney'),
          image: absoluteUrl('/images/attorney-main.webp'),
          jobTitle: 'עורך דין',
          worksFor: { '@id': `${absoluteUrl('/')}#law-firm` },
          knowsAbout: CORE_AREAS,
          sameAs: [CONTACT.linkedin],
        }}
      />
      <PageHero
        kicker="עורך דין"
        title="עו״ד עוזי חריזי"
        description="ליווי משפטי אישי, מדויק ודיסקרטי — מתוך הבנה של העסקה והתמונה העסקית שמאחוריה."
        crumbs={[{ label: 'עו״ד עוזי חריזי' }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-5 lg:px-10">
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden bg-paper shadow-xl">
              <img
                src="/images/attorney-main.webp"
                alt="עו״ד עוזי חריזי"
                className="aspect-[3/4] w-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="mt-6 border border-line bg-paper p-6">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-bronze transition-colors hover:text-ink"
              >
                <Linkedin size={16} /> פרופיל LinkedIn
              </a>
            </div>
          </Reveal>

          <div className="lg:col-span-3">
            <Reveal>
              <p className="text-xl leading-relaxed text-ink/80">
                עו״ד עוזי חריזי מלווה לקוחות בעסקאות ובהחלטות משפטיות שבהן נדל״ן, מסחר, חברות ומיסוי נפגשים.
                נקודת המוצא היא להבין את המטרה העסקית ואת מכלול הסיכונים — ורק לאחר מכן לבנות את המסגרת המשפטית המתאימה.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                הגישה במשרד משלבת חשיבה מסחרית, ירידה לפרטים, משא ומתן ממוקד וליווי אישי לאורך כל שלבי העסקה.
                המטרה היא לא רק לנסח מסמכים, אלא לסייע ללקוח לקבל החלטה מדויקת ולשמור על האינטרסים שלו לאורך הדרך.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-14 font-serif text-3xl text-ink">תחומי עיסוק מרכזיים</h2>
              <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
                {CORE_AREAS.map((area) => (
                  <div key={area} className="bg-paper px-6 py-5 text-base text-ink/80">
                    {area}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <h2 className="font-serif text-3xl text-ink">ייעוץ שמתחיל בהבנת העסקה</h2>
                  <p className="mt-4 text-base leading-relaxed text-stone">
                    בעסקאות מורכבות, השאלה המשפטית היא רק חלק מהתמונה. המשרד מבקש להבין גם את היעד, לוחות הזמנים,
                    מבנה ההתקשרות והמשמעות הכלכלית — כדי שהייעוץ המשפטי ישרת את העסקה ולא יעמוד בדרכה.
                  </p>
                </div>
                <img
                  src="/images/attorney-warm.webp"
                  alt="עו״ד עוזי חריזי במשרד"
                  className="aspect-[4/3] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
