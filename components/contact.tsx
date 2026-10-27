import Image from 'next/image'
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'
import { contact } from '@/lib/site'

const channels = [
  { icon: Mail, label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: 'Téléphone', value: contact.phone, href: contact.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: contact.phone, href: contact.whatsappHref, external: true },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-cyan/30 bg-gradient-to-br from-brand-indigo via-card to-background p-8 md:p-14">
          <Image
            src="/images/logo-symbol.png"
            alt=""
            width={420}
            height={450}
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-10 hidden w-96 opacity-15 md:block"
          />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-cyan">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Parlons de votre système d&apos;information.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                Diagnostic Flash, projet Odoo ou infogérance : réponse sous 24 h ouvrées.
              </p>
              <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-brand-cyan" aria-hidden />
                {contact.city}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-5 transition-colors hover:border-brand-cyan/50"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan to-brand-blue text-primary-foreground">
                      <c.icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block truncate font-semibold">{c.value}</span>
                    </span>
                    <ArrowUpRight
                      className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-cyan"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
