import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const packs = [
  {
    name: 'Sérénité Start',
    target: 'PME de 10 à 20 postes',
    price: '900 000',
    features: ['Infogérance Bronze (support à distance)', 'Sauvegarde gérée', '1 jour de conseil par mois', 'Rapport mensuel'],
  },
  {
    name: 'Sérénité Business',
    target: 'PME de 20 à 60 postes',
    price: '2 800 000',
    featured: true,
    features: [
      'Infogérance Argent + monitoring',
      'Direction IT à temps partagé (4 j/mois)',
      'Sauvegarde gérée & tests',
      'Audit SI annuel',
      'Accompagnement Odoo inclus',
    ],
  },
  {
    name: 'Sérénité Premium',
    target: 'Groupes, BPO, finance',
    price: '5 500 000',
    features: ['Infogérance Or + astreinte 2 h', 'Direction IT Premium (8 j/mois)', 'Cybersécurité & PRA', 'Reporting trimestriel'],
  },
]

const odooPacks = [
  { name: 'Odoo Essentiel', detail: 'Ventes, achats, stock et facturation pour démarrer.', price: '2 500 000' },
  { name: 'Odoo Gestion', detail: '+ comptabilité, CRM et tableau de bord dirigeant.', price: '5 000 000' },
  { name: 'Odoo Groupe', detail: 'Multi-sociétés, RH & paie, point de vente, projets.', price: 'Sur devis' },
]

export function Offers() {
  return (
    <section id="offres" className="py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <SectionHeading
          align="center"
          eyebrow="Offres"
          title={
            <>
              Des abonnements clairs, <span className="text-gradient">sans surprise</span>.
            </>
          }
          description="Commencez par un Diagnostic Flash à 150 000 Ar : une demi-journée sur site et une synthèse de 3 pages avec vos priorités."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {packs.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.featured
                  ? 'border-brand-cyan/50 bg-gradient-to-b from-brand-blue/25 via-card to-card shadow-2xl shadow-brand-blue/20'
                  : 'border-border bg-card/60'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Le plus choisi
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.target}</p>
              <p className="mt-8 text-sm text-muted-foreground">À partir de</p>
              <p className="font-heading text-4xl font-semibold">
                {p.price} <span className="text-base font-normal text-muted-foreground">Ar HT / mois</span>
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-cyan" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex justify-center rounded-full px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  p.featured ? 'bg-primary text-primary-foreground' : 'border border-border bg-background/50'
                }`}
              >
                Choisir {p.name}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card/40 p-8">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <h3 className="text-xl font-semibold">Projets d&apos;intégration Odoo</h3>
            <p className="text-sm text-muted-foreground">Mise en place forfaitaire, licences refacturées</p>
          </div>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {odooPacks.map((o) => (
              <li key={o.name} className="rounded-2xl border border-border bg-background/50 p-5">
                <p className="font-semibold">{o.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{o.detail}</p>
                <p className="mt-4 font-heading text-lg font-semibold text-brand-cyan">
                  {o.price === 'Sur devis' ? o.price : `dès ${o.price} Ar HT`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
