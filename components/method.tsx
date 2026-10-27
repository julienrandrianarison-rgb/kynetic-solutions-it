import { Stethoscope, Headset, School, Landmark, Building2, HeartHandshake } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  { n: '01', title: 'Diagnostic Flash', text: 'Une demi-journée chez vous pour cartographier risques, coûts et urgences.' },
  { n: '02', title: 'Plan d’action', text: 'Une feuille de route priorisée, chiffrée et alignée sur votre activité.' },
  { n: '03', title: 'Mise en œuvre', text: 'Réseau, sécurité, sauvegardes, Odoo : nous exécutons et documentons.' },
  { n: '04', title: 'Pilotage continu', text: 'Comité mensuel, indicateurs et amélioration permanente de votre SI.' },
]

const sectors = [
  { icon: Building2, name: 'PME & ETI de services', note: '10 à 100 postes' },
  { icon: Stethoscope, name: 'Pharmacies & cliniques', note: 'Données sensibles' },
  { icon: Headset, name: 'Centres d’appels & BPO', note: 'Continuité réseau' },
  { icon: School, name: 'Écoles & formation', note: 'Parc & Wi-Fi' },
  { icon: Landmark, name: 'Finance & microfinance', note: 'Sécurité & PRA' },
  { icon: HeartHandshake, name: 'ONG, hôtels, associations', note: 'Budget maîtrisé' },
]

export function Method() {
  return (
    <section id="methode" className="border-t border-border bg-card/30 py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Méthode"
          title={
            <>
              Une démarche structurée, <span className="text-gradient">pragmatique</span> et mesurable.
            </>
          }
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-7">
              <span className="font-heading text-4xl font-semibold text-gradient">{s.n}</span>
              <p className="mt-5 text-lg font-semibold">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">Les secteurs que nous accompagnons</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Plus de 13 ans d&apos;expérience dans la pharmacie, les centres d&apos;appels, la formation, la finance et
              la presse — à Antananarivo et dans toute l&apos;île.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {sectors.map((s) => (
              <li key={s.name} className="flex items-center gap-4 rounded-2xl border border-border bg-background/50 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/20 text-brand-cyan">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{s.name}</span>
                  <span className="block text-xs text-muted-foreground">{s.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
