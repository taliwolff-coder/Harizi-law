import { type FormEvent } from 'react'
import { CONTACT } from '../data/content'

const SUBJECTS = [
  'נדל״ן ומקרקעין',
  'נדל״ן מסחרי',
  'מיסוי מקרקעין',
  'משפט מסחרי ועסקי',
  'חברות ותאגידים',
  'מסחר בינלאומי',
  'אחר',
]

const inputCls =
  'w-full border border-line bg-paper px-4 py-3.5 text-ink placeholder:text-stone/70 transition-colors focus:border-bronze focus:outline-none'

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const subject = String(form.get('subject') || 'פנייה מהאתר')
    const body = [
      `שם: ${String(form.get('name') || '')}`,
      `טלפון: ${String(form.get('phone') || '')}`,
      `אימייל: ${String(form.get('email') || '')}`,
      '',
      String(form.get('message') || ''),
    ].join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`פנייה מהאתר — ${subject}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="טופס יצירת קשר">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="sr-only">שם מלא</label>
          <input id="cf-name" name="name" required placeholder="שם מלא" className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="cf-phone" className="sr-only">טלפון</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            required
            placeholder="טלפון"
            className={inputCls}
            autoComplete="tel"
            dir="rtl"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-email" className="sr-only">אימייל</label>
          <input id="cf-email" name="email" type="email" required placeholder="אימייל" className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="cf-subject" className="sr-only">נושא הפנייה</label>
          <select id="cf-subject" name="subject" required defaultValue="" className={`${inputCls} appearance-none`}>
            <option value="" disabled>
              נושא הפנייה
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="sr-only">הודעה</label>
        <textarea id="cf-message" name="message" rows={5} placeholder="בכמה מילים — במה מדובר?" className={inputCls} />
      </div>
      <button
        type="submit"
        className="mt-2 bg-navy px-8 py-4 text-base font-medium text-ivory transition-colors duration-300 hover:bg-navy-light"
      >
        שליחת פנייה בדוא״ל
      </button>
      <p className="text-xs leading-relaxed text-stone">
        שליחת הפנייה פותחת הודעת דוא״ל מוכנה במכשיר שלך ואינה יוצרת יחסי עורך דין–לקוח. בהתאם ל
        <a href="/#/privacy" className="underline">מדיניות הפרטיות</a>.
      </p>
    </form>
  )
}
