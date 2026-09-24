import { Link } from 'react-router'
import { ChevronLeft } from 'lucide-react'

interface Crumb {
  label: string
  to?: string
}

export default function Breadcrumbs({ items, light = false }: { items: Crumb[]; light?: boolean }) {
  const base = light ? 'text-ivory/60' : 'text-stone'
  const current = light ? 'text-ivory' : 'text-ink'
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1.5 text-xs ${base}`}>
        <li>
          <Link to="/" className="transition-colors hover:text-bronze">עמוד הבית</Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronLeft size={12} aria-hidden />
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-bronze">{item.label}</Link>
            ) : (
              <span className={current} aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
