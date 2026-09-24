import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import { METHOD_ITEMS, CLIENT_TYPES } from '../data/content'

export default function About() {
  return (
    <>
      <Seo
        title="המשרד | חריזי עורכי דין"
        description="משרד בוטיק משפטי-מסחרי ברמת גן: ניסיון משפטי, חשיבה עסקית, דיסקרטיות וליווי אישי בעסקאות נדל״ן, חברות ומסחר."
        path="/about"
      />
      <PageHero
        kicker="המשרד"
        title="ניסיון משפטי. חשיבה עסקית."
        description="משרד בוטיק משפטי-מסחרי ברמת גן, המלווה עסקאות, נכסים וחברות — בשפה של אנשי עסקים."
        crumbs={[{ label: 'המשרד' }]}
      />

      <section className="bg-ivory py-20 lg:py-28" aria-labelledby="about-main">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal>
              <h2 id="about-main" className="font-serif text-3xl leading-snug text-ink text-balance md:text-4xl">
                בצומת שבה משפט, נדל״ן, מיסוי ועסקים נפגשים — שם אנחנו נמצאים.
              </h2>
              <img
                src="/images/facade-detail.jpg"
                alt="פרט אדריכלי — אבן, זכוכית ומתכת במבנה משרדים"
                className="mt-10 w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-ink/75">
              <p>
                רוב הבעיות המשפטיות בעסקאות לא נוצרות בבית המשפט — הן נוצרות מסביב לשולחן העריכה, בסעיף שלא
                נכתב או בסיכון שלא זוהה בזמן. המשרד הוקם מתוך הבנה שייעוץ משפטי טוב מתחיל הרבה לפני המסמך:
                בהבנת העסקה, המטרה של הלקוח, והכוחות שפועלים סביב השולחן.
              </p>
              <p>
                עבודת המשרד מתבססת על מספר עקרונות פשוטים: הבנת העסקה כמכלול לפני מתן תשובה; זיהוי סיכונים
                בשלב שבו עוד אפשר למנוע אותם; בניית מבנה משפטי שמשרת את העסקה ולא מסבך אותה; ומשא ומתן
                מתוך אסטרטגיה — לא מתוך תבניות.
              </p>
              <p>
                הליווי הוא אישי. לכל לקוח יש כתובת ברורה לאורך כל הדרך, דיסקרטיות מלאה וזמינות אמיתית —
                כולל בעסקאות שנמשכות מעבר לשעות המקובלות, כי עסקאות לא תמיד מסתיימות בשש בערב.
              </p>
              <p>
                ההסתכלות היא ארוכת טווח: המשרד מלווה לקוחות לאורך עסקאות, נכסים ושנים — ומודד את הצלחתו
                בכך שהלקוח חוזר לעסקה הבאה.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="border-y border-line bg-paper py-20 lg:py-28" aria-labelledby="method-about">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.3em] text-bronze uppercase">הדרך שבה אנחנו עובדים</p>
            <h2 id="method-about" className="mt-4 font-serif text-4xl text-ink md:text-5xl">
              חמישה עקרונות. ללא קיצורי דרך.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {METHOD_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="border-t-2 border-ink/10 pt-6">
                  <span className="font-serif text-3xl text-bronze/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-stone">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-ivory py-20 lg:py-24" aria-labelledby="clients-about">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="text-center">
            <p className="text-xs font-medium tracking-[0.3em] text-bronze uppercase">אנחנו מלווים</p>
            <h2 id="clients-about" className="mt-4 font-serif text-4xl text-ink">את מי שמנהל נכסים, חברות ועסקאות</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {CLIENT_TYPES.map((client, i) => (
              <Reveal key={client} delay={i * 40}>
                <div className="flex h-full items-center justify-center bg-paper px-4 py-8 text-center">
                  <span className="font-serif text-lg text-ink">{client}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
