import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const steps = [
  { title: 'Visite & relevé du site', text: 'Plans des locaux, nombre de postes, contraintes électriques et besoins futurs.' },
  { title: 'Conception de l’architecture', text: 'Schéma réseau, plan d’adressage, VLAN, emplacement de la baie et des bornes Wi-Fi.' },
  { title: 'Câblage structuré', text: 'Tirage Cat6 / Cat6A ou fibre, goulottes, prises RJ45 et brassage dans une baie propre.' },
  { title: 'Équipements actifs', text: 'Installation et configuration des switchs, routeur, pare-feu, onduleur et points d’accès.' },
  { title: 'Tests & certification', text: 'Test de chaque prise, mesure du débit, couverture Wi-Fi et sécurité des accès.' },
  { title: 'Remise du dossier', text: 'Plan de câblage étiqueté, schéma, identifiants et contrat de maintenance au choix.' },
]

const specs = [
  { label: 'Câblage', value: 'Cat6 · Cat6A · Fibre' },
  { label: 'Baie', value: 'Brassage, onduleur' },
  { label: 'Cœur de réseau', value: 'Switchs PoE' },
  { label: 'Sécurité', value: 'Pare-feu, VPN, VLAN' },
  { label: 'Sans fil', value: 'Wi-Fi 6 multi-bornes' },
  { label: 'Connexion', value: 'Double opérateur + 4G' },
]

export function NetworkSection() {
  return (
    <section id="reseaux" className="relative scroll-mt-24 overflow-hidden border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="absolute -left-40 top-1/3 size-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-[1600px] gap-16 px-4 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Installation réseau"
            title="Un réseau neuf,"
            highlight="partant de zéro."
            description="Nouveaux bureaux, agence, entrepôt ou école : nous concevons et installons l’intégralité de votre infrastructure réseau, livrée testée et documentée."
          />

          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/network-install.png"
              alt="Technicien installant une baie réseau avec câblage structuré"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" aria-hidden="true" />
            <dl className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-px bg-border/50 sm:grid-cols-3">
              {specs.map((s) => (
                <div key={s.label} className="glass flex flex-col gap-1 p-4">
                  <dt className="eyebrow text-[10px] text-cyan">{s.label}</dt>
                  <dd className="text-sm text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <ol className="relative flex flex-col gap-3 lg:pt-6">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="group flex gap-5 rounded-2xl border border-border bg-background/60 p-6 transition-colors hover:border-cyan/40"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface font-mono text-sm text-cyan transition-colors group-hover:bg-brand-gradient group-hover:text-background">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
