import Image from 'next/image'

export function Brand() {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/images/logo-symbol.png" alt="" width={32} height={34} className="h-8 w-auto" priority />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-semibold tracking-tight">
          Kynetic<span className="text-brand-cyan">.</span>
        </span>
        <span className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground">SOLUTIONS</span>
      </span>
    </span>
  )
}
