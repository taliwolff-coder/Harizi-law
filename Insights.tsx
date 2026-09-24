import { Link } from 'react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { INSIGHTS } from '../data/insights'
import { MEDIA_COVERAGE } from '../data/mediaCoverage'

export default function Insights() {
  return (
    <>
      <Seo
        title="מידע ומאמרים | עסקאות נדל״ן, משפט מסחרי ונדל״ן בינלאומי | חריזי עורכי דין | עו״ד עוזי חריזי"
        description="מידע משפטי, מאמרים וקישורים לפרסומים בתקשורת בנושאי נדל״ן בישראל ובחו״ל, עסקאות מסחריות, נאמנות, מיסוי והיבטים משפטיים בעסקאות."
        path="/insights"
      />
      <PageHero
        kicker="מידע ומאמרים"
        title="מבט משפטי על עסקאות, נכסים וכסף"
        description="שאלות, סיכונים, עסקאות ומנגנונים שכדאי להכיר — לצד פרסומים נבחרים מהתקשורת הכלכלית והמשפטית."
        crumbs={[{ label: 'מידע ומאמרים' }]}
      />

      {/* Media coverage — links to original external publications, not republished articles */}
      <section className="bg-paper py-20 lg:py-28" aria-labelledby="media-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">פרסומים בתקשורת</p>
              <h2 id="media-heading" className="mt-4 text-4xl font-semibold text-ink md:text-5xl">
                עסקאות וסוגיות שכדאי להכיר
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-stone">
              כותרות נבחרות מהתקשורת בנושאי נדל״ן, משפט ועסקים. כל קישור מוביל לפרסום המקורי באתר גוף התקשורת.
            </p>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {MEDIA_COVERAGE.map((item, i) => (
              <Reveal key={`${item.source}-${item.title}`} delay={i * 35}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 bg-paper px-2 py-7 transition-colors hover:bg-ivory md:grid-cols-[190px_1fr_auto] md:items-center md:px-6"
                  aria-label={`${item.title} — ${item.source}, נפתח באתר חיצוני`}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-semibold text-bronze">{item.category}</span>
                    <span className="text-stone">{item.source}</span>
                    <span className="text-stone/70">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-bronze md:text-2xl">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors group-hover:text-ink">
                    לפרסום <ExternalLink size={15} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-stone">
            הקישורים מפנים לאתרי צד שלישי. התכנים הם באחריות גופי התקשורת שפרסמו אותם ואינם מהווים ייעוץ משפטי של המשרד.
          </p>
        </div>
      </section>

      {/* Original firm articles */}
      <section className="bg-ivory py-20 lg:py-28" aria-labelledby="articles-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">מאמרים משפטיים</p>
              <h2 id="articles-heading" className="mt-4 text-4xl font-semibold text-ink md:text-5xl">מה כדאי לבדוק לפני שמתקדמים</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">עסקאות טובות נבנות משילוב של מידע, בדיקות ומנגנונים משפטיים נכונים. כאן אנו מרכזים תוכן מקצועי על נדל״ן בינלאומי, נאמנות ובטוחות, עסקאות מסחריות ומגמות שוק — מנקודת מבט משפטית.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((article, i) => (
              <Reveal key={article.slug} delay={i * 45}>
                <Link to={`/insights/${article.slug}`} className="group flex h-full flex-col border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-bronze/50 hover:shadow-xl">
                  <div className="flex items-center justify-between gap-4 text-xs text-stone"><span>{article.eyebrow}</span><span>{article.readTime}</span></div>
                  <h3 className="mt-5 flex-1 text-2xl font-semibold leading-snug text-ink transition-colors group-hover:text-bronze">{article.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone">{article.excerpt}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-bronze">לקריאה <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" /></span>
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
