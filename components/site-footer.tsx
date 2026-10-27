import { Brand } from '@/components/brand'
import { contact, navLinks } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-4 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-sm flex-col gap-4">
            <Brand />
            <p className="leading-relaxed text-muted-foreground">
              Réseaux, infrastructure, cybersécurité et solutions ERP pour les entreprises de Madagascar.
            </p>
          </div>
          <nav aria-label="Pied de page" className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <address className="flex flex-col gap-2 not-italic text-muted-foreground">
            <a href={`mailto:${contact.email}`} className="hover:text-foreground">
              {contact.email}
            </a>
            <a href={contact.phoneHref} className="hover:text-foreground">
              {contact.phone}
            </a>
            <span>{contact.city}</span>
          </address>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Kynetic Solutions. Tous droits réservés.</p>
          <p className="font-mono text-xs">Antananarivo · Madagascar</p>
        </div>
      </div>
    </footer>
  )
}
