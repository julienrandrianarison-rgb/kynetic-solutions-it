import { ArrowRight, Activity, Boxes, HardDrive, Network, ShieldCheck } from 'lucide-react'
import { contact } from '@/lib/site'

const stats = [
  { value: '1', label: 'interlocuteur unique' },
  { value: '24/7', label: 'supervision du parc' },
  { value: '< 2h', label: 'prise en charge incident' },
  { value: '100%', label: 'documenté & transmis' },
]

const statusRows = [
  { icon: Network, label: 'Réseau siège', value: '99,98 %', tone: 'text-cyan' },
  { icon: ShieldCheck, label: 'Pare-feu & VPN', value: 'Actif', tone: 'text-cyan' },
  { icon: HardDrive, label: 'Sauvegarde nuit', value: 'OK · 03:12', tone: 'text-cyan' },
  { icon: Boxes, label: 'ERP · 8 modules', value: 'En ligne', tone: 'text-cyan' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden pb-16 pt-32">
      <div className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -left-40 top-10 -z-10 size-[560px] rounded-full bg-electric/25 blur-[140px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 -z-10 size-[520px] rounded-full bg-violet/25 blur-[140px]" aria-hidden="true" />
      <div className="absolute right-1/3 top-1/4 -z-10 size-[300px] rounded-full bg-cyan/15 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-14 px-4 md:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <span className="eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-muted-foreground">
            <span className="size-1.5 animate-pulse-soft rounded-full bg-cyan" aria-hidden="true" />
            Solutions IT · Antananarivo, Madagascar
          </span>

          <h1 className="text-5xl font-semibold leading-[1.02] md:text-6xl xl:text-7xl">
            Votre informatique, <span className="text-gradient">pilotée de bout en bout.</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Réseau installé de zéro, serveurs supervisés, données protégées et gestion unifiée par ERP.
            Kynetic Solutions conçoit, déploie et fait vivre le système d&apos;information de votre entreprise.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="bg-brand-gradient group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-medium text-background shadow-[0_10px_40px_-10px] shadow-electric/60 transition-transform hover:-translate-y-0.5"
            >
              Demander un diagnostic gratuit
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Écrire sur WhatsApp
            </a>
          </div>

          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1 bg-background/80 p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold text-foreground md:text-3xl">{s.value}</dd>
                <dd className="text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroConsole />
      </div>
    </section>
  )
}

function HeroConsole() {
  const bars = [38, 52, 44, 68, 57, 74, 63, 82, 71, 88, 79, 92]
  return (
    <div className="relative" aria-label="Aperçu du tableau de bord de supervision Kynetic" role="img">
      <div className="absolute -inset-px rounded-3xl bg-brand-gradient opacity-40 blur-sm" aria-hidden="true" />
      <div className="relative flex flex-col gap-5 rounded-3xl border border-border bg-surface p-5 md:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
          </div>
          <span className="font-mono text-xs text-muted-foreground">kynetic://supervision</span>
        </div>

        <div className="rounded-2xl border border-border bg-background/60 p-5">
          <div className="flex items-start justify-between">
            <div>
              <p className="eyebrow text-muted-foreground">Disponibilité du SI</p>
              <p className="mt-2 text-4xl font-semibold text-foreground">99,9 %</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-2.5 py-1 font-mono text-xs text-cyan">
              <Activity className="size-3.5" />
              En direct
            </span>
          </div>
          <div className="mt-6 flex h-28 items-end gap-1.5">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-electric/30 to-cyan"
                style={{ height: `${h}%`, opacity: 0.45 + i * 0.045 }}
              />
            ))}
          </div>
        </div>

        <ul className="grid gap-2.5 sm:grid-cols-2">
          {statusRows.map((row) => (
            <li key={row.label} className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-surface-2">
                <row.icon className="size-4 text-cyan" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm text-foreground">{row.label}</span>
                <span className={`font-mono text-xs ${row.tone}`}>{row.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
