import Image from 'next/image'
import { ArrowRight, MessageCircle, ShieldCheck, Server, Boxes, LineChart } from 'lucide-react'
import { contact } from '@/lib/site'

const stats = [
  { value: '6', label: "domaines d'expertise" },
  { value: '1', label: 'interlocuteur unique' },
  { value: '70 %', label: 'de parc renouvelé' },
  { value: '24 h', label: 'pour un diagnostic' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[120px]"
      />

      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-screen-2xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.15fr_1fr] lg:px-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand-cyan" />
            Direction IT externalisée · Infogérance · Solutions ERP — Madagascar
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] md:text-6xl xl:text-7xl">
            Votre direction informatique <span className="text-gradient">clé en main</span>, pour le prix d&apos;un
            technicien.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Kynetic Solutions sécurise, stabilise et modernise le système d&apos;information des PME et groupes
            malgaches : gouvernance, infrastructure, cybersécurité et intégration de votre ERP Odoo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Réserver un Diagnostic Flash
              <ArrowRight className="size-4" />
            </a>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-card"
            >
              <MessageCircle className="size-4 text-brand-cyan" />
              Écrire sur WhatsApp
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-semibold">{s.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  const tiles = [
    { icon: ShieldCheck, title: 'Sécurité', value: '100 %', note: 'sauvegardes testées' },
    { icon: Server, title: 'Disponibilité', value: '99,8 %', note: 'supervision 24/7' },
    { icon: Boxes, title: 'Odoo ERP', value: '12', note: 'modules déployés' },
    { icon: LineChart, title: 'Pilotage', value: 'Mensuel', note: 'comité & reporting' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative rounded-3xl border border-border bg-card/70 p-6 shadow-2xl shadow-brand-indigo/40 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-symbol.png" alt="" width={40} height={43} className="h-10 w-auto" />
            <div>
              <p className="text-sm font-semibold">Tableau de bord SI</p>
              <p className="text-xs text-muted-foreground">Client — Groupe Pharma, 45 postes</p>
            </div>
          </div>
          <span className="rounded-full bg-brand-cyan/15 px-2.5 py-1 text-xs font-medium text-brand-cyan">En ligne</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {tiles.map((t) => (
            <div key={t.title} className="rounded-2xl border border-border bg-background/60 p-4">
              <t.icon className="size-5 text-brand-cyan" aria-hidden />
              <p className="mt-3 text-xs text-muted-foreground">{t.title}</p>
              <p className="font-heading text-xl font-semibold">{t.value}</p>
              <p className="text-xs text-muted-foreground">{t.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-border bg-background/60 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Feuille de route 2027</span>
            <span className="font-medium">68 %</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue" />
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute -bottom-6 -right-6 -z-10 size-40 rounded-3xl bg-gradient-to-br from-brand-cyan/40 to-brand-indigo blur-2xl"
      />
    </div>
  )
}
