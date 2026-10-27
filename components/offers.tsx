'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Plan = { name: string; price: string; unit?: string; desc: string; features: string[]; featured?: boolean }

const groups: { id: string; label: string; plans: Plan[] }[] = [
  {
    id: 'it',
    label: 'Accompagnement IT',
    plans: [
      {
        name: 'Sérénité Start',
        price: '900 000',
        unit: 'Ar HT / mois',
        desc: 'Pour les petites structures jusqu’à 15 postes.',
        features: ['Helpdesk à distance', 'Supervision du parc', 'Sauvegardes gérées', 'Rapport mensuel'],
      },
      {
        name: 'Sérénité Business',
        price: '2 800 000',
        unit: 'Ar HT / mois',
        desc: 'Pour les PME de 15 à 60 postes.',
        features: ['Tout Start inclus', 'Interventions sur site', 'Pilotage IT à temps partagé', 'Cybersécurité renforcée', 'Comité mensuel'],
        featured: true,
      },
      {
        name: 'Sérénité Premium',
        price: '5 500 000',
        unit: 'Ar HT / mois',
        desc: 'Pour les groupes et sites multiples.',
        features: ['Tout Business inclus', 'Responsable IT dédié', 'Plan de reprise d’activité', 'Engagement de délai garanti'],
      },
    ],
  },
  {
    id: 'reseau',
    label: 'Installation réseau',
    plans: [
      {
        name: 'Réseau Bureau',
        price: 'Sur devis',
        desc: 'Jusqu’à 20 prises, un étage.',
        features: ['Câblage Cat6', 'Baie murale', 'Wi-Fi pro', 'Dossier technique'],
      },
      {
        name: 'Réseau PME',
        price: 'Sur devis',
        desc: '20 à 100 prises, plusieurs zones.',
        features: ['Câblage Cat6A', 'Switchs administrables PoE', 'Pare-feu & VLAN', 'Wi-Fi multi-bornes', 'Certification des prises'],
        featured: true,
      },
      {
        name: 'Réseau Site',
        price: 'Sur devis',
        desc: 'Bâtiments, entrepôts, campus.',
        features: ['Fibre inter-bâtiments', 'Redondance double opérateur', 'Supervision continue', 'Contrat de maintenance'],
      },
    ],
  },
  {
    id: 'erp',
    label: 'Solutions ERP',
    plans: [
      {
        name: 'ERP Essentiel',
        price: 'dès 2 500 000',
        unit: 'Ar HT',
        desc: 'Ventes, achats, stock et facturation.',
        features: ['3 modules', 'Paramétrage standard', 'Reprise des données', 'Formation 2 jours'],
      },
      {
        name: 'ERP Gestion',
        price: 'dès 5 000 000',
        unit: 'Ar HT',
        desc: 'La gestion complète de votre entreprise.',
        features: ['Jusqu’à 6 modules', 'Comptabilité malgache', 'Workflows sur mesure', 'Formation par rôle', '3 mois de support'],
        featured: true,
      },
      {
        name: 'ERP Groupe',
        price: 'Sur devis',
        desc: 'Multi-sociétés, multi-sites.',
        features: ['Modules illimités', 'Consolidation', 'Développements spécifiques', 'Hébergement géré'],
      },
    ],
  },
]

export function Offers() {
  const [active, setActive] = useState(groups[0].id)
  const group = groups.find((g) => g.id === active) ?? groups[0]

  return (
    <section id="offres" className="relative scroll-mt-24 border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Nos offres"
          title="Des formules claires,"
          highlight="sans surprise."
          description="Choisissez le niveau d’accompagnement adapté à votre structure. Chaque projet démarre par un diagnostic gratuit."
          align="center"
        />

        <div role="tablist" aria-label="Catégories d’offres" className="mx-auto mt-12 flex w-fit flex-wrap justify-center gap-1 rounded-2xl border border-border bg-background p-1.5">
          {groups.map((g) => (
            <button
              key={g.id}
              role="tab"
              type="button"
              aria-selected={g.id === active}
              aria-controls={`panel-${g.id}`}
              onClick={() => setActive(g.id)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-colors ${
                g.id === active ? 'bg-brand-gradient text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div id={`panel-${group.id}`} role="tabpanel" className="mt-12 grid gap-4 lg:grid-cols-3">
          {group.plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col gap-8 rounded-3xl border p-8 ${
                plan.featured ? 'border-cyan/50 bg-surface-2' : 'border-border bg-background/60'
              }`}
            >
              {plan.featured && (
                <>
                  <div className="absolute -inset-px -z-10 rounded-3xl bg-brand-gradient opacity-30 blur-xl" aria-hidden="true" />
                  <span className="bg-brand-gradient absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-medium text-background">
                    Recommandé
                  </span>
                </>
              )}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-muted-foreground">{plan.desc}</p>
              </div>
              <p className="flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-semibold">{plan.price}</span>
                {plan.unit && <span className="text-sm text-muted-foreground">{plan.unit}</span>}
              </p>
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`rounded-xl px-5 py-3 text-center font-medium transition-opacity hover:opacity-90 ${
                  plan.featured ? 'bg-brand-gradient text-background' : 'border border-border bg-surface text-foreground'
                }`}
              >
                Demander un devis
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
