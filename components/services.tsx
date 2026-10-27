import { Boxes, Cable, Compass, GraduationCap, Server, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
  tag?: string
  span: string
}

const services: Service[] = [
  {
    icon: Cable,
    title: 'Installation réseau de zéro',
    description: 'Du plan de câblage à la mise en service : un réseau neuf, propre et documenté.',
    points: ['Câblage Cat6 / fibre', 'Baie de brassage', 'Wi-Fi professionnel'],
    tag: 'Nouveau',
    span: 'lg:col-span-2',
  },
  {
    icon: Boxes,
    title: 'Solutions ERP',
    description: 'Une gestion unifiée : ventes, stock, comptabilité, RH et CRM.',
    points: ['Paramétrage local', 'Migration des données', 'Formation des équipes'],
    span: 'lg:col-span-2',
  },
  {
    icon: Compass,
    title: 'Conseil & pilotage IT',
    description: 'Un pilotage IT à temps partagé, sans recruter en interne.',
    points: ['Schéma directeur', 'Budget IT maîtrisé'],
    span: '',
  },
  {
    icon: Server,
    title: 'Infrastructure & infogérance',
    description: 'Un parc et des serveurs fiables, supervisés au quotidien.',
    points: ['Supervision 24/7', 'Helpdesk utilisateurs'],
    span: '',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersécurité & continuité',
    description: 'Vos données protégées et votre activité capable de redémarrer.',
    points: ['Sauvegardes 3-2-1', 'Audit & PRA'],
    span: '',
  },
  {
    icon: Sparkles,
    title: 'Digitalisation & IA',
    description: 'Les bons outils SaaS et l’IA, réellement adoptés par vos équipes.',
    points: ['Microsoft 365 / Google', 'Automatisation'],
    span: '',
  },
  {
    icon: GraduationCap,
    title: 'Formation & talents IT',
    description: 'Faire monter vos équipes en compétence, durablement.',
    points: ['Sessions sur site', 'Guides en français'],
    span: 'lg:col-span-4',
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Nos services"
            title="Tout votre système d’information,"
            highlight="un seul partenaire."
          />
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            Sept expertises complémentaires pour concevoir, sécuriser et faire évoluer votre informatique.
          </p>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li
              key={s.title}
              className={`group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-cyan/40 ${s.span}`}
            >
              <div
                className="absolute -right-20 -top-20 size-56 rounded-full bg-electric/0 blur-3xl transition-colors duration-500 group-hover:bg-electric/25"
                aria-hidden="true"
              />
              <div className="relative flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-background">
                  <s.icon className="size-5 text-cyan" aria-hidden="true" />
                </span>
                {s.tag && (
                  <span className="bg-brand-gradient rounded-full px-3 py-1 text-xs font-medium text-background">{s.tag}</span>
                )}
              </div>
              <div className="relative flex flex-1 flex-col gap-3">
                <h3 className="text-xl font-semibold md:text-2xl">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
              <ul className="relative flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li key={p} className="rounded-full border border-border bg-background/60 px-3 py-1 text-sm text-muted-foreground">
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
