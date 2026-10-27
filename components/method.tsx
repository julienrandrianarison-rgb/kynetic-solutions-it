import { SectionHeading } from '@/components/section-heading'

const steps = [
  { title: 'Diagnostic Flash', text: 'Une demi-journée chez vous pour cartographier risques, coûts et urgences.' },
  { title: 'Plan d’action', text: 'Une feuille de route priorisée, chiffrée et alignée sur votre activité.' },
  { title: 'Mise en œuvre', text: 'Réseau, sécurité, sauvegardes, ERP : nous exécutons et documentons.' },
  { title: 'Pilotage continu', text: 'Comité mensuel, indicateurs et amélioration permanente de votre SI.' },
]

export function Method() {
  return (
    <section id="methode" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <SectionHeading eyebrow="Notre méthode" title="Quatre étapes," highlight="zéro zone d’ombre." />

        <ol className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-cyan/60 via-electric/60 to-violet/60 lg:block" aria-hidden="true" />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex flex-col gap-5">
              <span className="relative z-10 flex size-20 items-center justify-center rounded-2xl border border-border bg-background font-mono text-2xl text-gradient">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2 rounded-3xl border border-border bg-surface p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
