import { Link, useParams } from 'react-router'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { INSIGHTS } from '../data/insights'
import { absoluteUrl } from '../lib/site'

export default function InsightArticle() {
  const { slug } = useParams()
  const article = INSIGHTS.find((item) => item.slug === slug)

  if (!article) {
    return (
      <section className="bg-ivory py-32">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <h1 className="font-serif text-5xl text-ink">המאמר לא נמצא</h1>
          <Link to="/insights" className="mt-8 inline-flex text-bronze">חזרה למידע ומאמרים</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${article.title} | חריזי עורכי דין`}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
          inLanguage: 'he-IL',
          author: { '@type': 'Person', '@id': `${absoluteUrl('/attorney')}#uzi-harizi`, name: 'עו״ד עוזי חריזי' },
          publisher: { '@type': 'LegalService', '@id': `${absoluteUrl('/')}#law-firm`, name: 'חריזי עורכי דין' },
        }}
      />
      <article>
        <header className="bg-navy pt-36 pb-20 text-ivory lg:pt-44 lg:pb-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <Reveal>
              <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-ivory/60 transition hover:text-bronze-light">
                <ArrowRight size={15} /> חזרה למידע ומאמרים
              </Link>
              <p className="mt-10 text-xs font-medium tracking-[0.3em] text-bronze-light uppercase">{article.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-balance md:text-6xl">{article.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ivory/75">{article.excerpt}</p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ivory/60"><span>מאת עו״ד עוזי חריזי</span><span>·</span><span>{article.dateLabel}</span><span>·</span><span>{article.readTime}</span></div>
            </Reveal>
          </div>
        </header>

        <div className="bg-ivory py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_260px] lg:px-10">
            <div className="max-w-3xl">
              {article.sections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 40}>
                  <section className="mb-14 border-t border-line pt-8 first:border-t-0 first:pt-0">
                    <h2 className="font-serif text-3xl leading-tight text-ink md:text-4xl">{section.heading}</h2>
                    {section.body.map((p) => <p key={p} className="mt-5 text-lg leading-8 text-ink/75">{p}</p>)}
                    {section.bullets && (
                      <ul className="mt-6 space-y-3">
                        {section.bullets.map((item) => <li key={item} className="flex gap-3 text-base leading-7 text-ink/75"><span className="mt-3 h-px w-5 shrink-0 bg-bronze" />{item}</li>)}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ))}
              <div className="mt-14 border border-line bg-paper p-7 text-sm leading-7 text-stone">
                המידע במאמר הוא כללי בלבד ואינו מהווה ייעוץ משפטי. בכל עסקה יש לבחון את הדין, המסמכים והנסיבות הספציפיות.
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="border-t-2 border-bronze pt-6">
                <p className="font-serif text-2xl text-ink">מקורות והמשך קריאה</p>
                {article.sources?.length ? (
                  <div className="mt-5 space-y-4">
                    {article.sources.map((source) => (
                      <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm leading-6 text-stone transition hover:text-bronze">
                        <ExternalLink size={14} className="mt-1 shrink-0" /> {source.label}
                      </a>
                    ))}
                  </div>
                ) : <p className="mt-4 text-sm leading-6 text-stone">המאמר מבוסס על עקרונות כלליים של ליווי עסקאות ובדיקת נאותות.</p>}
              </div>
              <div className="mt-10 border border-line bg-paper p-6">
                <p className="font-serif text-xl text-ink">עומדים בפני עסקה?</p>
                <p className="mt-3 text-sm leading-6 text-stone">כדאי לבחון את המבנה, הבטוחות והסיכונים לפני התחייבות או העברת כספים.</p>
                <Link to="/contact" className="mt-5 inline-flex text-sm font-medium text-bronze">לתיאום שיחה</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
      <CTABand />
    </>
  )
}
