import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import { CONTACT } from '../data/content'

type LegalKind = 'privacy' | 'accessibility' | 'terms'

const META: Record<LegalKind, { title: string; seo: string }> = {
  privacy: { title: 'מדיניות פרטיות', seo: 'מדיניות הפרטיות של חריזי עורכי דין — איסוף ושימוש במידע באתר.' },
  accessibility: { title: 'הצהרת נגישות', seo: 'הצהרת הנגישות של אתר חריזי עורכי דין.' },
  terms: { title: 'תנאי שימוש', seo: 'תנאי השימוש באתר חריזי עורכי דין.' },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-3 space-y-4 leading-relaxed text-ink/75">{children}</div>
    </div>
  )
}

export default function Legal({ kind }: { kind: LegalKind }) {
  const meta = META[kind]
  return (
    <>
      <Seo title={`${meta.title} | חריזי עורכי דין`} description={meta.seo} path={`/${kind}`} />
      <PageHero kicker="מידע משפטי" title={meta.title} crumbs={[{ label: meta.title }]} />
      <section className="bg-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          <Reveal>
            {kind === 'privacy' && (
              <>
                <Section title="כללי">
                  <p>
                    חריזי עורכי דין (להלן: "המשרד") מכבד את פרטיות המשתמשים באתר. מדיניות זו
                    מסבירה אילו פרטים נאספים וכיצד נעשה בהם שימוש.
                  </p>
                </Section>
                <Section title="איסוף מידע">
                  <p>
                    בעת מילוי טופס יצירת קשר נאספים הפרטים שמסרתם: שם, טלפון, אימייל ותוכן הפנייה. בנוסף,
                    ייתכן איסוף של מידע טכני אנונימי לצורכי תפעול ושיפור האתר.
                  </p>
                </Section>
                <Section title="שימוש במידע">
                  <p>
                    המידע ישמש לצורך חזרה אליכם ומתן מענה לפנייה בלבד. המידע לא יימסור לצדדים שלישיים,
                    למעט כנדרש על פי דין.
                  </p>
                </Section>
                <Section title="זכויותיכם">
                  <p>
                    על פי חוק הגנת הפרטיות, תשמ"א-1981, כל אדם זכאי לעיין במידע שנאסף עליו ולבקש את תיקונו
                    או מחיקתו. לפניות בנושא: <a href={`mailto:${CONTACT.email}`} className="text-bronze underline">{CONTACT.email}</a>.
                  </p>
                </Section>
                <Section title="עדכונים">
                  <p>[יש לעדכן תאריך תחילת תוקף ופרטי רכז פרטיות לפני פרסום האתר.]</p>
                </Section>
              </>
            )}

            {kind === 'accessibility' && (
              <>
                <Section title="מחויבות לנגישות">
                  <p>
                    המשרד פועל כדי שהאתר יהיה נגיש לכלל המשתמשים, לרבות אנשים עם מוגבלות, בהתאם לתקנות שוויון
                    זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013 ולתקן הישראלי ת"י 5568.
                  </p>
                </Section>
                <Section title="התאמות שבוצעו באתר">
                  <p>
                    האתר נבנה באמצעות HTML סמנטי, היררכיית כותרות תקינה, תמיכה בניווט מקלדת, טקסט חלופי
                    לתמונות, ניגודיות צבעים מתאימה ותמיכה בהגדלת גופנים ובקוראי מסך.
                  </p>
                </Section>
                <Section title="נתקלתם בבעיית נגישות?">
                  <p>
                    נשמח לקבל פניות ולטפל בהן בהקדם: טלפון <a href={`tel:${CONTACT.phoneIntl}`} className="text-bronze underline" dir="ltr">{CONTACT.phone}</a> או
                    באימייל <a href={`mailto:${CONTACT.email}`} className="text-bronze underline">{CONTACT.email}</a>.
                  </p>
                </Section>
                <Section title="עדכונים">
                  <p>[יש לעדכן פרטי רכז נגישות ותאריך עדכון ההצהרה לפני פרסום האתר.]</p>
                </Section>
              </>
            )}

            {kind === 'terms' && (
              <>
                <Section title="כללי">
                  <p>
                    ברוכים הבאים לאתר חריזי עורכי דין. השימוש באתר כפוף לתנאים שלהלן. עיון באתר
                    מהווה הסכמה לתנאים אלה.
                  </p>
                </Section>
                <Section title="אין ייעוץ משפטי">
                  <p>
                    המידע באתר הינו מידע כללי בלבד ואינו מהווה ייעוץ משפטי או תחליף לייעוץ משפטי. קבלת ייעוץ
                    משפטי מחייבת בחינה פרטנית של נסיבות כל מקרה. גלישה באתר, או פנייה באמצעותו, אינם יוצרים
                    יחסי עורך דין–לקוח.
                  </p>
                </Section>
                <Section title="קניין רוחני">
                  <p>
                    כל הזכויות בתכני האתר, לרבות טקסטים, עיצוב ותמונות, שמורות למשרד. אין להעתיק, לשכפל או
                    להשתמש בתכנים ללא רשות מראש ובכתב.
                  </p>
                </Section>
                <Section title="אחריות">
                  <p>
                    המשרד פועל לדיוק המידע באתר, אולם אינו מתחייב שהמידע שלם, מעודכן או נטול טעויות, ולא יישא
                    באחריות לכל נזק הנובע מהסתמכות על המידע באתר.
                  </p>
                </Section>
                <Section title="דין וסמכות">
                  <p>על תנאים אלה יחולו דיני מדינת ישראל. [סמכות שיפוט — להשלמה לפני פרסום.]</p>
                </Section>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
