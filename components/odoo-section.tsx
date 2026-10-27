import Image from 'next/image'
import {
  ShoppingCart,
  Package,
  Calculator,
  Users,
  Handshake,
  Store,
  FolderKanban,
  Truck,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const modules = [
  { icon: ShoppingCart, name: 'Ventes & Facturation' },
  { icon: Truck, name: 'Achats' },
  { icon: Package, name: 'Stock & Inventaire' },
  { icon: Calculator, name: 'Comptabilité' },
  { icon: Handshake, name: 'CRM' },
  { icon: Users, name: 'RH & Paie' },
  { icon: Store, name: 'Point de vente' },
  { icon: FolderKanban, name: 'Projets' },
]

const steps = [
  { title: 'Cadrage', text: 'Analyse de vos processus, choix des modules et de l’édition (Community ou Enterprise).' },
  { title: 'Paramétrage', text: 'Configuration sur mesure : plan comptable malgache, TVA, workflows, droits d’accès.' },
  { title: 'Migration', text: 'Reprise de vos données Excel ou anciens logiciels : clients, articles, stocks, soldes.' },
  { title: 'Formation', text: 'Formation par rôle et guides en français pour une adoption rapide.' },
  { title: 'Support', text: 'Hébergement géré, mises à jour, sauvegardes et assistance au quotidien.' },
]

export function OdooSection() {
  return (
    <section id="erp" className="relative overflow-hidden border-y border-border bg-card/30 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute -right-40 top-20 h-[480px] w-[480px] rounded-full bg-brand-indigo/60 blur-[120px]"
      />
      <div className="relative mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Solutions ERP"
              title={
                <>
                  Toute votre entreprise dans <span className="text-gradient">un seul outil</span>.
                </>
              }
              description="Fini les fichiers Excel dispersés et les doubles saisies. Nous déployons Odoo, l’ERP open source de référence, adapté aux réalités des entreprises malgaches — sans développement inutile, par configuration."
            />
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {modules.map((m) => (
                <li
                  key={m.name}
                  className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-background/50 p-4"
                >
                  <m.icon className="size-5 text-brand-cyan" aria-hidden />
                  <span className="text-sm font-medium leading-snug">{m.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/erp-team.png"
                alt="Consultant Kynetic présentant un tableau de bord ERP Odoo à une équipe"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-border bg-background/90 p-5 backdrop-blur sm:left-auto sm:right-8 sm:w-72">
              <p className="text-xs text-muted-foreground">Gain moyen constaté</p>
              <p className="mt-1 font-heading text-3xl font-semibold text-gradient">−40 %</p>
              <p className="mt-1 text-sm text-muted-foreground">de temps administratif après 3 mois sur Odoo</p>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <h3 className="text-2xl font-semibold">Notre démarche d&apos;intégration Odoo</h3>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-border bg-background/50 p-5">
                <span className="font-heading text-sm font-semibold text-brand-cyan">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-semibold">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline"
          >
            Demander une démo Odoo gratuite
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
