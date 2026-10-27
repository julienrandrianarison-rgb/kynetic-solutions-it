export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}
