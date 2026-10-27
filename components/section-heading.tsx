export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
}) {
  const centered = align === 'center'
  return (
    <div className={`flex max-w-3xl flex-col gap-5 ${centered ? 'mx-auto items-center text-center' : ''}`}>
      <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-cyan">
        <span className="size-1.5 rounded-full bg-cyan" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
