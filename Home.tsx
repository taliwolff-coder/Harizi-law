import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import { PRACTICE_AREAS, METHOD_ITEMS, CLIENT_TYPES, CONTACT } from '../data/content'
import { INSIGHTS } from '../data/insights'
import { absoluteUrl } from '../lib/site'

export default function Home() {
  return (
    <>
      <Seo
        title="עו״ד עוזי חריזי | חריזי עורכי דין | נדל״ן ומשפט מסחרי"
        description="עורך דין עוזי חריזי | חריזי עורכי דין — ליווי בעסקאות נדל״ן, נדל״ן מסחרי, מיסוי מקרקעין, חברות, מסחר ועסקאות בינלאומיות."
        path="/"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': ['LegalService', 'LocalBusiness'],
            '@id': `${absoluteUrl('/')}#law-firm`,
            name: 'חריזי עורכי דין',
            alternateName: ['עו״ד עוזי חריזי', 'עורך דין עוזי חריזי', 'Uzi Harizi Law Office'],
            url: absoluteUrl('/'),
            image: absoluteUrl('/images/attorney-main.webp'),
            telephone: '+972-3-6095595',
            email: 'uzi@uzilaw.co.il',
            sameAs: [CONTACT.linkedin],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+972-3-6095595',
              contactType: 'customer service',
              availableLanguage: ['he', 'en'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ז׳בוטינסקי 7, מגדל משה אביב',
              addressLocality: 'רמת גן',
              addressCountry: 'IL',
            },
            founder: { '@id': `${absoluteUrl('/attorney')}#uzi-harizi` },
            areaServed: ['ישראל', 'עסקאות בינלאומיות'],
            knowsAbout: ['נדל״ן ומקרקעין', 'נדל״ן מסחרי', 'מיסוי מקרקעין', 'משפט מסחרי', 'חברות', 'מסחר בינלאומי'],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${absoluteUrl('/')}#website`,
            url: absoluteUrl('/'),
            name: 'חריזי עורכי דין',
            inLanguage: 'he-IL',
            publisher: { '@id': `${absoluteUrl('/')}#law-firm` },
          },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-navy" aria-labelledby="hero-title">
        <img
          src="/images/hero-tower.jpg"
          alt="מגדל משרדים מודרני בשעת דמדומים"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-100 brightness-[1.45] contrast-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy/28 via-navy/10 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/45 to-transparent" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-10">
          <Reveal>
            <p className="text-base font-semibold tracking-[0.12em] text-bronze-light uppercase md:text-lg">
              חריזי עורכי דין
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              id="hero-title"
              className="mt-6 font-sans text-5xl leading-[1.02] font-light text-ivory md:text-7xl lg:text-8xl"
            >
              משפט. עסקים.
              <br />
              <span className="text-bronze-light">נדל״ן.</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/80 md:text-xl">
              ליווי משפטי מדויק לעסקאות, נכסים וחברות — מתוך הבנה משפטית ועסקית של התמונה המלאה.
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-ivory/70 md:text-base">
              עו״ד עוזי חריזי · נדל״ן · מסחר · חברות · עסקאות בינלאומיות
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="border border-ivory bg-ivory px-8 py-4 text-center text-base font-medium text-navy transition-all duration-300 hover:bg-transparent hover:text-ivory"
              >
                לקביעת פגישת ייעוץ
              </Link>
              <Link
                to="/practice"
                className="border border-ivory/40 px-8 py-4 text-center text-base text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                תחומי העיסוק
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 md:flex" aria-hidden>
          <span className="text-[10px] tracking-[0.3em]">גללו</span>
          <span className="h-10 w-px animate-pulse bg-ivory/30" />
        </div>
      </section>

      {/* ── המשרד ────────────────────────────────────────── */}
      <section className="bg-ivory py-24 lg:py-36" aria-labelledby="about-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">המשרד</p>
              <h2 id="about-heading" className="mt-4 font-serif text-4xl leading-tight text-ink text-balance md:text-5xl">
                ניסיון משפטי.
                <br />
                חשיבה עסקית.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 text-lg leading-relaxed text-ink/75">
                המשרד מלווה לקוחות בצמתים שבהם משפט, נדל״ן, מיסוי ועסקים נפגשים — הנקודות שבהן החלטה אחת
                משפיעה על כל שאר התמונה. העבודה מתחילה בהבנת העסקה כמכלול: המטרה העסקית, מבנה העסקה, הסיכונים
                הגלויים והנסתרים — ורק אז המסמך המשפטי.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink/75">
                הגישה: זיהוי סיכונים לפני שהם הופכים לבעיה, בניית מבנה משפטי נכון, משא ומתן מתוך אסטרטגיה,
                וליווי אישי ודיסקרטי שמסתכל על האינטרס של הלקוח לטווח הארוך.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-base font-medium text-bronze transition-colors hover:text-ink"
              >
                עוד על המשרד <ArrowLeft size={17} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <img
              src="/images/facade-detail.jpg"
              alt="פרט אדריכלי של חזית אבן וזכוכית במבנה משרדים"
              className="w-full object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full border border-bronze/40" aria-hidden />
          </Reveal>
        </div>
      </section>

      {/* ── עו״ד עוזי חריזי ────────────────────────────── */}
      <section className="bg-paper py-24 lg:py-36" aria-labelledby="attorney-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
          <div>
            <Reveal>
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">עו״ד עוזי חריזי</p>
              <h2 id="attorney-heading" className="mt-4 text-4xl leading-tight text-balance text-ink md:text-5xl lg:text-6xl font-semibold">
                ניסיון שמאפשר לראות
                <br />
                מעבר לסעיף הבא בחוזה
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 text-lg leading-relaxed text-ink/75">
                עו״ד עוזי חריזי מלווה לקוחות בעסקאות ובהחלטות משפטיות שבהן נדל״ן, מסחר, חברות ומיסוי נפגשים.
                הגישה משלבת הבנה משפטית עם הסתכלות עסקית על המטרה, הסיכונים והדרך הנכונה לקדם את העסקה.
              </p>
              <ul className="mt-8 grid gap-x-10 gap-y-4 text-base text-ink/80 sm:grid-cols-2">
                {[
                  'נדל״ן ומקרקעין',
                  'נדל״ן מסחרי',
                  'משפט מסחרי ועסקי',
                  'חברות ומסחר בינלאומי',
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-6 shrink-0 bg-bronze" aria-hidden />
                    {fact}
                  </li>
                ))}
              </ul>
              <Link
                to="/attorney"
                className="mt-9 inline-flex items-center gap-2 text-base font-medium text-bronze transition-colors hover:text-ink"
              >
                הפרופיל המלא <ArrowLeft size={17} />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <img
              src="/images/attorney-main.webp"
              alt="עו״ד עוזי חריזי"
              className="aspect-[4/5] w-full object-cover object-top shadow-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-6 right-6 bg-ivory/95 px-6 py-4 shadow-lg backdrop-blur-sm">
              <p className="text-xl font-semibold text-ink">עו״ד עוזי חריזי</p>
              <p className="mt-1 text-xs tracking-[0.18em] text-stone uppercase">נדל״ן · מסחר · חברות</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── תחומי עיסוק ──────────────────────────────────── */}
      <section className="border-y border-line bg-paper py-24 lg:py-32" aria-labelledby="practice-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">תחומי עיסוק</p>
              <h2 id="practice-heading" className="mt-4 font-serif text-4xl text-ink md:text-5xl">
                שמונה שכבות של אותה עסקה
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-stone">
              כל תחום הוא חלק מתמונה אחת: עסקאות, נכסים, חברות והמס שביניהם.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area, i) => (
              <Reveal key={area.slug} delay={i * 70}>
                <Link
                  to={`/practice/${area.slug}`}
                  className="group flex h-full flex-col bg-paper p-8 transition-colors duration-300 hover:bg-navy lg:p-10"
                >
                  <span className="font-serif text-sm text-bronze transition-colors group-hover:text-bronze-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-ink transition-colors group-hover:text-ivory">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone transition-colors group-hover:text-ivory/70">
                    {area.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-bronze transition-all group-hover:gap-3 group-hover:text-bronze-light">
                    לקריאה <ArrowLeft size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── הדרך שבה אנחנו עובדים ────────────────────────── */}
      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="method-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal>
            <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">הדרך שבה אנחנו עובדים</p>
            <h2 id="method-heading" className="mt-4 max-w-2xl font-serif text-4xl text-ink text-balance md:text-5xl">
              ליווי שמתחיל לפני החוזה — ונמשך אחריו
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {METHOD_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-t-2 border-ink/10 pt-6">
                  <span className="font-serif text-4xl text-bronze/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-stone">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── אנחנו מלווים ─────────────────────────────────── */}
      <section className="border-y border-line bg-paper py-24 lg:py-28" aria-labelledby="clients-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="text-center">
            <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">אנחנו מלווים</p>
            <h2 id="clients-heading" className="mt-4 font-serif text-4xl text-ink md:text-5xl">
              מי שמנהל נכסים, חברות ועסקאות
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
            {CLIENT_TYPES.map((client, i) => (
              <Reveal key={client} delay={i * 50}>
                <div className="flex h-full items-center justify-center bg-paper px-4 py-8 text-center transition-colors duration-300 hover:bg-ivory">
                  <span className="font-serif text-lg text-ink md:text-xl">{client}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── International Desk ─────────────────────────────── */}
      <section className="bg-ivory py-24 lg:py-32" aria-labelledby="international-heading">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-10">
          <Reveal delay={120} className="order-2 lg:order-1">
            <div className="relative overflow-hidden shadow-2xl">
              <img
                src="/images/tower-portrait.jpg"
                alt="מגדלים וקו רקיע עירוני"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" aria-hidden />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">International Real Estate & Transactions</p>
              <h2 id="international-heading" className="mt-4 text-4xl leading-tight text-balance text-ink md:text-5xl lg:text-6xl font-semibold">
                עסקה בחו״ל צריכה כתובת משפטית אחת
                <br />
                שמחברת את כל הקצוות
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-7 text-lg leading-relaxed text-ink/75">
                דין מקומי, מיסוי בישראל, רישום, מקור כספים, בנקאות, נאמנות וניהול מרחוק — עסקה בינלאומית טובה היא עסקה שבה כל השכבות מדברות זו עם זו.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-ink/70">
                {['נדל״ן בינלאומי', 'בדיקות נאותות', 'נאמנות ובטוחות', 'תיאום עם יועצים מקומיים', 'עסקאות מסחריות'].map((item) => (
                  <span key={item} className="border border-line bg-paper px-4 py-2">{item}</span>
                ))}
              </div>
              <Link to="/practice/international-real-estate" className="mt-9 inline-flex items-center gap-2 font-medium text-bronze transition hover:text-ink">
                לנדל״ן בינלאומי <ArrowLeft size={17} />
              </Link>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  ['לפני העברת כסף', 'בוחנים בעלות, מסמכים, מנגנון תשלום ובטוחות.'],
                  ['לפני החתימה', 'בודקים מי הדין החל, מה התנאים המתלים ואיך יוצאים מהעסקה.'],
                  ['בזמן ההשלמה', 'מתאמים בין בנק, נאמנות, יועצי מס ועורך הדין המקומי.'],
                  ['אחרי הרכישה', 'חושבים על רישום, ניהול, השכרה, מס ויציאה עתידית.'],
                ].map(([title, text]) => (
                  <div key={title} className="border border-line bg-paper p-7 shadow-sm">
                    <h3 className="text-2xl font-semibold text-ink">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── מידע ומאמרים ──────────────────────────────────── */}
      <section className="border-t border-line bg-paper py-24 lg:py-28" aria-labelledby="insights-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">מידע ומאמרים</p>
              <h2 id="insights-heading" className="mt-4 font-serif text-4xl text-ink md:text-5xl">
                מבט מקצועי על מה שמשתנה
              </h2>
            </div>
            <Link to="/insights" className="inline-flex items-center gap-2 text-base font-medium text-bronze transition-colors hover:text-ink">
              כל הכתבות <ArrowLeft size={17} />
            </Link>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {INSIGHTS.slice(0, 3).map((article, i) => (
              <Reveal key={article.slug} delay={i * 80}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group flex h-full flex-col border border-line bg-ivory p-8 transition-all duration-300 hover:border-bronze/50 hover:shadow-lg"
                >
                  <span className="text-xs text-stone">{article.eyebrow} · {article.readTime}</span>
                  <h3 className="mt-4 flex-1 font-serif text-2xl leading-snug text-ink transition-colors group-hover:text-bronze">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-stone">{article.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-bronze">
                    לקריאה <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
                  </span>
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
