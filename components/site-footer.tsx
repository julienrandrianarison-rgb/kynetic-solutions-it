import { Brand } from '@/components/brand'
import { contact, navLinks } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-6 py-12 lg:px-12 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Brand />
          <p className="max-w-xs text-sm text-muted-foreground">
            Direction IT externalisée, services IT managés et intégration ERP à Madagascar.
          </p>
        </div>
        <nav aria-label="Pied de page">
          <ul className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-muted-foreground">
          <a href={`mailto:${contact.email}`} className="block hover:text-foreground">
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="block hover:text-foreground">
            {contact.phone}
          </a>
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © 2026 Kynetic Solutions. Tous droits réservés.
      </p>
    </footer>
  )
}
