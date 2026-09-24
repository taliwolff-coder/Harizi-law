import { Link, useParams, Navigate } from 'react-router'
import { Check } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { PRACTICE_AREAS, CONTACT } from '../data/content'
import { absoluteUrl } from '../lib/site'

export default function PracticeDetail() {
  const { slug } = useParams()
  const area = PRACTICE_AREAS.find((a) => a.slug === slug)

  if (!area) return <Navigate to="/practice" replace />

  const others = PRACTICE_AREAS.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <Seo
        title={area.seoTitle}
        description={area.seoDescription}
        path={`/practice/${area.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'עמוד הבית', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: 'תחומי עיסוק', item: absoluteUrl('/practice') },
            { '@type': 'ListItem', position: 3, name: area.title, item: absoluteUrl(`/practice/${area.slug}`) },
          ],
        }}
      />
      <PageHero
        kicker="תחום עיסוק"
        title={area.title}
        crumbs={[{ label: 'תחומי עיסוק', to: '/practice' }, { label: area.title }]}
      />

      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-relaxed">{area.intro}</p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="mt-16 font-serif text-3xl text-ink">שירותים עיקריים</h2>
              <ul className="mt-8 space-y-4">
                {area.services.map((service) => (
                  <li key={service} className="flex items-start gap-4 border-b border-line pb-4 text-lg text-ink/80">
                    <Check size={19} className="mt-1.5 shrink-0 text-bronze" aria-hidden />
                    {service}
                  </li>
                ))}
              </ul>
            </Reveal>

            {area.slug === 'real-estate-tax' && (
              <Reveal delay={140}>
                <p className="mt-10 border-r-2 border-bronze bg-paper p-6 text-sm leading-relaxed text-stone">
                  הערה: התוכן בעמוד זה הוא מידע כללי בלבד ואינו מהווה ייעוץ מס. כל עסקה מחייבת בחינה פרטנית של
                  נסיבותיה לפני קבלת החלטות.
                </p>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <Reveal delay={80}>
              <div className="border border-line bg-paper p-8">
                <h2 className="font-serif text-2xl text-ink">למי זה מתאים</h2>
                <ul className="mt-5 space-y-3 text-base text-ink/75">
                  {area.audiences.map((aud) => (
                    <li key={aud} className="flex items-start gap-3">
                      <span className="mt-2.5 h-px w-5 shrink-0 bg-bronze" aria-hidden />
                      {aud}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="bg-navy p-8 text-ivory">
                <h2 className="font-serif text-2xl">שואלים שאלה על {area.title}?</h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  שיחה קצרה יכולה לחסוך טעויות ארוכות. נשמח לשמוע במה מדובר.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 block border border-ivory/50 py-3 text-center text-sm font-medium transition-colors hover:bg-ivory hover:text-navy"
                >
                  לתיאום שיחה
                </Link>
                <a href={`tel:${CONTACT.phoneIntl}`} className="mt-3 block text-center text-sm text-bronze-light" dir="ltr">
                  {CONTACT.phone}
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Other areas */}
      <section className="border-t border-line bg-paper py-16" aria-labelledby="other-areas">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 id="other-areas" className="font-serif text-2xl text-ink">תחומי עיסוק נוספים</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to={`/practice/${other.slug}`}
                className="group border border-line bg-ivory p-6 transition-all duration-300 hover:border-bronze/50 hover:shadow-md"
              >
                <span className="font-serif text-xl text-ink transition-colors group-hover:text-bronze">{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
