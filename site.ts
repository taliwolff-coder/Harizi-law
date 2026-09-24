const DEFAULT_SITE_URL = 'https://harizilaw.com'

export function getSiteUrl() {
  if (typeof window !== 'undefined') {
    return import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
  }
  return import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL
}

export function absoluteUrl(path = '/') {
  const base = getSiteUrl().replace(/\/$/, '')
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}`
}
