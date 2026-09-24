import Breadcrumbs from './Breadcrumbs'
import Reveal from './Reveal'

interface PageHeroProps {
  kicker: string
  title: string
  description?: string
  crumbs: { label: string; to?: string }[]
}

/** Navy hero band for inner pages (keeps transparent header readable). */
export default function PageHero({ kicker, title, description, crumbs }: PageHeroProps) {
  return (
    <section className="bg-navy pt-36 pb-16 lg:pt-44 lg:pb-20" aria-labelledby="page-title">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <Breadcrumbs items={crumbs} light />
          <p className="text-xs font-medium tracking-[0.3em] text-bronze-light uppercase">{kicker}</p>
          <h1 id="page-title" className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ivory text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/70 md:text-lg">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
