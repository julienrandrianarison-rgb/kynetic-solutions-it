import { Compass, Network, ShieldCheck, Boxes, Cloud, GraduationCap, Check } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Compass,
    code: 'A',
    title: 'Conseil & gouvernance SI',
    description: 'Une direction IT externalisée pour piloter votre informatique.',
    items: ['Audit SI & Diagnostic Flash', 'Schéma directeur 3 ans', 'Direction IT à temps partagé', 'PMO & pilotage de projets'],
  },
  {
    icon: Network,
    code: 'B',
    title: 'Infrastructure & infogérance',
    description: 'Un parc, un réseau et des serveurs fiables, supervisés et documentés.',
    items: ['Support utilisateurs Bronze / Argent / Or', 'Réseau, Wi-Fi pro & VLAN', 'Administration serveurs Linux', 'Hébergement géré & Docker'],
  },
  {
    icon: ShieldCheck,
    code: 'C',
    title: 'Cybersécurité & continuité',
    description: 'Vos données protégées et votre activité capable de redémarrer.',
    items: ['Audit sécurité & politique SSI', 'Sauvegarde 3-2-1 gérée', "Plan de reprise d'activité", 'Sensibilisation au phishing'],
  },
  {
    icon: Boxes,
    code: 'D',
    title: 'Solutions ERP',
    description: 'Une gestion unifiée : ventes, stock, comptabilité, RH et CRM.',
    items: ['Cadrage & choix des modules', 'Paramétrage et migration', 'Formation des équipes', 'Support et évolution'],
    highlight: true,
  },
  {
    icon: Cloud,
    code: 'E',
    title: 'Digitalisation & IA',
    description: 'Les bons outils SaaS, adoptés par vos équipes.',
    items: ['Google Workspace / Microsoft 365', 'Messagerie & GED', "Ateliers d'adoption de l'IA", 'Automatisations simples'],
  },
  {
    icon: GraduationCap,
    code: 'F',
    title: 'Formation & talents IT',
    description: 'Faire monter vos équipes en compétence durablement.',
    items: ['Agile / Scrum & gestion de projet', 'Recrutement de profils IT', 'Mentorat technique', 'Coaching du responsable IT'],
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Nos expertises"
          title={
            <>
              Six piliers pour un système d&apos;information <span className="text-gradient">serein</span>.
            </>
          }
          description="De la stratégie à l'exploitation quotidienne, nous prenons en charge votre SI de bout en bout — avec un seul interlocuteur."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.code}
              className={`group relative flex flex-col rounded-3xl border p-7 transition-colors ${
                p.highlight
                  ? 'border-brand-cyan/40 bg-gradient-to-b from-brand-blue/20 to-card'
                  : 'border-border bg-card/60 hover:border-brand-cyan/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan to-brand-blue text-primary-foreground">
                  <p.icon className="size-6" aria-hidden />
                </span>
                {p.highlight ? (
                  <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-medium text-brand-cyan">Nouveau</span>
                ) : (
                  <span className="font-heading text-sm text-muted-foreground">Pilier {p.code}</span>
                )}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-cyan" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
