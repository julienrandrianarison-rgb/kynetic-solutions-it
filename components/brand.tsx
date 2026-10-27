import Image from 'next/image'
import Link from 'next/link'

export function Brand({ className = '' }: { className?: string }) {
  return (
    <Link href="#top" className={`flex items-center gap-3 ${className}`} aria-label="Kynetic Solutions, accueil">
      <Image src="/images/logo-symbol.png" alt="" width={34} height={36} className="h-9 w-auto" priority />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Kynetic<span className="text-cyan">.</span>
        </span>
        <span className="mt-1 font-mono text-[10px] tracking-[0.3em] text-muted-foreground">SOLUTIONS</span>
      </span>
    </Link>
  )
}
