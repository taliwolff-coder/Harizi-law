import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'
import { CONTACT, NAV_ITEMS, PRACTICE_AREAS } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [practiceOpen, setPracticeOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setPracticeOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const solid = scrolled || mobileOpen
  const tone = solid ? 'text-ink' : 'text-ivory'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_#E3DED2]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        {/* Brand */}
        <Link to="/" className={`group flex flex-col ${tone} transition-colors duration-500`} aria-label="חריזי עורכי דין — בית">
          <span className="text-lg leading-tight font-semibold tracking-tight md:text-xl">
            עוזי חריזי
          </span>
          <span className={`text-xs tracking-[0.18em] uppercase ${solid ? 'text-stone' : 'text-ivory/60'}`}>
            משרד עורכי דין
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={`hidden items-center gap-7 text-sm lg:flex ${tone}`} aria-label="ניווט ראשי">
          {NAV_ITEMS.map((item) =>
            item.label === 'תחומי עיסוק' ? (
              <div key={item.to} className="relative">
                <button
                  onClick={() => setPracticeOpen((v) => !v)}
                  onBlur={(e) => {
                    if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setPracticeOpen(false)
                  }}
                  aria-expanded={practiceOpen}
                  aria-haspopup="true"
                  className="link-underline flex items-center gap-1 py-2 transition-opacity hover:opacity-80"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${practiceOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full right-0 w-64 border border-line bg-paper shadow-xl transition-all duration-300 ${
                    practiceOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
                  }`}
                >
                  <Link to="/practice" className="block border-b border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-ivory">
                    כל תחומי העיסוק
                  </Link>
                  {PRACTICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/practice/${area.slug}`}
                      className="block px-5 py-3 text-sm text-ink/80 transition-colors hover:bg-ivory hover:text-bronze"
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `link-underline py-2 transition-opacity hover:opacity-80 ${isActive ? 'opacity-100' : 'opacity-90'}`
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contact"
            className={`border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              solid
                ? 'border-ink bg-ink text-ivory hover:bg-transparent hover:text-ink'
                : 'border-ivory/70 bg-transparent text-ivory hover:bg-ivory hover:text-navy'
            }`}
          >
            קביעת פגישה
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`p-2 lg:hidden ${tone}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-ivory transition-all duration-400 lg:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6" aria-label="ניווט נייד">
          {NAV_ITEMS.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-line py-4 text-2xl font-semibold ${
                    isActive ? 'text-bronze' : 'text-ink'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {item.label === 'תחומי עיסוק' && (
                <div className="grid grid-cols-2 gap-x-4 py-2">
                  {PRACTICE_AREAS.map((area) => (
                    <NavLink key={area.slug} to={`/practice/${area.slug}`} className="py-2 text-sm text-ink/70">
                      {area.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-8 bg-navy py-4 text-center text-lg font-medium text-ivory transition-colors hover:bg-navy-light"
          >
            קביעת פגישה
          </Link>
          <a href={`tel:${CONTACT.phoneIntl}`} className="mt-3 border border-ink/20 py-4 text-center text-lg text-ink">
            {CONTACT.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
