const sectors = [
  'PME & ETI de services',
  'Pharmacies & cliniques',
  'Centres d’appels & BPO',
  'Écoles & formation',
  'Finance & microfinance',
  'ONG, hôtels, associations',
]

export function Marquee() {
  const items = [...sectors, ...sectors]
  return (
    <section aria-label="Secteurs accompagnés" className="border-y border-border bg-surface/40 py-6">
      <div className="flex items-center gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-12">
          {items.map((s, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap text-lg text-muted-foreground">
              {s}
              <span className="size-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
