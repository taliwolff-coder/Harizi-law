import { useEffect } from 'react'
import { absoluteUrl } from '../lib/site'

interface SeoProps {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

/** Per-page SEO: title, description, canonical, robots, OG/Twitter + optional JSON-LD. */
export default function Seo({ title, description, path, image = '/images/hero-tower.jpg', type = 'website', jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector: string, attrName: string, attrValue: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const canonicalUrl = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1')
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'he_IL')
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'חריזי עורכי דין')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    document.getElementById('page-jsonld')?.remove()
    if (jsonLd) {
      const ld = document.createElement('script')
      ld.type = 'application/ld+json'
      ld.id = 'page-jsonld'
      ld.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(ld)
    }

    return () => {
      document.getElementById('page-jsonld')?.remove()
    }
  }, [title, description, path, image, type, jsonLd])

  return null
}
