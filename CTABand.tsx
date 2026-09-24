import { Link } from 'react-router'
import Reveal from './Reveal'

/** Conversion band — soft, confident invitation to talk. */
export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-ivory" aria-labelledby="cta-heading">
      <img src="/images/cta-band.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-ivory/70" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-base font-semibold tracking-[0.10em] text-bronze uppercase">שיחה ראשונה</p>
          <h2 id="cta-heading" className="mt-5 text-3xl leading-snug text-ink text-balance md:text-4xl lg:text-5xl font-bold">
            עומדים בפני עסקה או החלטה משפטית משמעותית?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/85 md:text-lg">
            שיחה מוקדמת יכולה לעזור להבין את האפשרויות, לזהות את הסיכונים ולבחור את הדרך הנכונה להתקדם.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="w-full border border-ink bg-ink px-8 py-4 text-base font-medium text-ivory transition-all duration-300 hover:bg-transparent hover:text-ink sm:w-auto"
            >
              לתיאום שיחה עם המשרד
            </Link>
            <a
              href="tel:+97236095595"
              className="w-full border border-ink/20 bg-paper/80 px-8 py-4 text-base text-ink transition-all duration-300 hover:border-ink sm:w-auto"
              dir="ltr"
            >
              03-6095595
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
