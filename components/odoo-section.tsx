import Image from 'next/image'
import {
  BarChart3,
  Briefcase,
  Calculator,
  FolderKanban,
  Package,
  ShoppingCart,
  Store,
  Users,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const modules = [
  { icon: ShoppingCart, name: 'Ventes & Facturation' },
  { icon: Briefcase, name: 'Achats' },
  { icon: Package, name: 'Stock & Inventaire' },
  { icon: Calculator, name: 'Comptabilité' },
  { icon: BarChart3, name: 'CRM' },
  { icon: Users, name: 'RH & Paie' },
  { icon: Store, name: 'Point de vente' },
  { icon: FolderKanban, name: 'Projets' },
]

const phases = [
  { title: 'Cadrage', text: 'Analyse de vos processus et choix des modules adaptés à votre activité.' },
  { title: 'Paramétrage', text: 'Plan comptable malgache, TVA, workflows et droits d’accès sur mesure.' },
  { title: 'Migration', text: 'Reprise de vos données Excel ou anciens logiciels : clients, articles, stocks.' },
  { title: 'Formation', text: 'Formation par rôle et guides en français pour une adoption rapide.' },
  { title: 'Support', text: 'Hébergement géré, mises à jour, sauvegardes et assistance au quotidien.' },
]

export function OdooSection() {
  return (
    <section id="erp" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="absolute -right-40 top-20 size-[520px] rounded-full bg-violet/15 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Solutions ERP"
          title="Une seule plateforme pour"
          highlight="piloter toute votre entreprise."
          description="Fini les fichiers Excel dispersés. Nous intégrons un ERP modulaire, open source et évolutif, adapté aux règles fiscales et comptables de Madagascar."
          align="center"
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border border-border lg:row-span-2">
            <Image
              src="/images/erp-team.png"
              alt="Équipe consultant un tableau de bord de gestion ERP"
              width={900}
              height={1100}
              className="h-full min-h-80 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7">
              <p className="text-5xl font-semibold text-gradient">-40 %</p>
              <p className="text-muted-foreground">de temps administratif en moyenne après déploiement.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-7 lg:col-span-2">
            <p className="eyebrow text-muted-foreground">Modules disponibles</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {modules.map((m) => (
                <li
                  key={m.name}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-background/60 p-5 transition-colors hover:border-cyan/40"
                >
                  <m.icon className="size-6 text-cyan" aria-hidden="true" />
                  <span className="font-medium">{m.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-7 lg:col-span-2">
            <p className="eyebrow text-muted-foreground">Notre méthode d’intégration</p>
            <ol className="mt-6 grid gap-4 md:grid-cols-5">
              {phases.map((p, i) => (
                <li key={p.title} className="relative flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-brand-gradient flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold text-background">
                      {i + 1}
                    </span>
                    <span className="hidden h-px flex-1 bg-border md:block" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
