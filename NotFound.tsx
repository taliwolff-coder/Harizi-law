import { Link } from 'react-router'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="העמוד לא נמצא | חריזי עורכי דין" description="העמוד שחיפשתם לא נמצא." path="/404" />
      <section className="flex min-h-svh items-center bg-navy text-ivory">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <p className="font-serif text-7xl text-bronze-light">404</p>
          <h1 className="mt-6 font-serif text-3xl">העמוד שחיפשתם לא נמצא</h1>
          <p className="mt-4 text-ivory/70">ייתכן שהקישור השתנה. נשמח לראותכם בעמוד הבית.</p>
          <Link
            to="/"
            className="mt-10 inline-block border border-ivory/50 px-8 py-3.5 text-base transition-colors hover:bg-ivory hover:text-navy"
          >
            חזרה לעמוד הבית
          </Link>
        </div>
      </section>
    </>
  )
}
