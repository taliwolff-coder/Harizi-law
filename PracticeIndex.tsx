import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { PRACTICE_AREAS } from '../data/content'

export default function PracticeIndex() {
  return (
    <>
      <Seo
        title="תחומי עיסוק | חריזי עורכי דין"
        description="נדל״ן ומקרקעין, נדל״ן מסחרי, מיסוי מקרקעין, משפט מסחרי, חברות ותאגידים ומסחר בינלאומי — ליווי משפטי בעל ראייה עסקית."
        path="/practice"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'בית', item: 'https://uzilaw.co.il/' },
            { '@type': 'ListItem', position: 2, name: 'תחומי עיסוק' },
          ],
        }}
      />
      <PageHero
        kicker="תחומי עיסוק"
        title="המומחיות של המשרד"
        description="שמונה תחומים, תפיסה אחת: ליווי משפטי שמבין את ההיגיון העסקי שמאחורי כל עסקה."
        crumbs={[{ label: 'תחומי עיסוק' }]}
      />
      <section className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-px border border-line bg-line md:grid-cols-2">
            {PRACTICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 60}>
                <Link
                  to={`/practice/${area.slug}`}
                  className="group flex h-full flex-col bg-paper p-10 transition-colors duration-300 hover:bg-navy"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-serif text-sm text-bronze transition-colors group-hover:text-bronze-light">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <ArrowLeft size={20} className="text-line transition-all duration-300 group-hover:-translate-x-1 group-hover:text-bronze-light" />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl text-ink transition-colors group-hover:text-ivory">{area.title}</h2>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-stone transition-colors group-hover:text-ivory/70">
                    {area.short}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
