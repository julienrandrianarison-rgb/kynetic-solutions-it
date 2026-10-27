'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/lib/site'

const needs = ['Installation réseau', 'Solution ERP', 'Infogérance', 'Cybersécurité', 'Pilotage IT', 'Formation']

const channels = [
  { icon: Mail, label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: 'Téléphone', value: contact.phone, href: contact.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: contact.phone, href: contact.whatsappHref, external: true },
  { icon: MapPin, label: 'Adresse', value: contact.city },
]

export function Contact() {
  const [need, setNeed] = useState(needs[0])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const text = `Bonjour Kynetic Solutions,\n\nNom : ${name}\nEntreprise : ${company}\nBesoin : ${need}\n\n${message}`
    window.open(`https://wa.me/261324256394?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="absolute left-1/2 top-0 size-[700px] -translate-x-1/2 rounded-full bg-electric/15 blur-[160px]" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1600px] px-4 md:px-8">
        <div className="grid overflow-hidden rounded-[2rem] border border-border bg-surface lg:grid-cols-[1fr_1.2fr]">
          <div className="relative flex flex-col justify-between gap-12 overflow-hidden p-8 md:p-12">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative flex flex-col gap-5">
              <span className="eyebrow text-cyan">Contact</span>
              <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl">
                Parlons de votre <span className="text-gradient">projet.</span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                Diagnostic gratuit et réponse sous 24 h ouvrées. Dites-nous ce dont vous avez besoin.
              </p>
            </div>
            <ul className="relative grid gap-3 sm:grid-cols-2">
              {channels.map((c) => {
                const inner = (
                  <>
                    <c.icon className="size-5 text-cyan" aria-hidden="true" />
                    <span className="flex flex-col gap-0.5">
                      <span className="eyebrow text-[10px] text-muted-foreground">{c.label}</span>
                      <span className="break-all text-sm text-foreground">{c.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex h-full items-start gap-3 rounded-2xl border border-border bg-background/70 p-4 transition-colors hover:border-cyan/40"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-background/70 p-4">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 border-t border-border bg-background/50 p-8 md:p-12 lg:border-l lg:border-t-0">
            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-sm font-medium">Votre besoin</legend>
              <div className="flex flex-wrap gap-2">
                {needs.map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-pressed={need === n}
                    onClick={() => setNeed(n)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      need === n
                        ? 'border-transparent bg-brand-gradient text-background'
                        : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Nom complet" required autoComplete="name" />
              <Field name="company" label="Entreprise" autoComplete="organization" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Nombre de postes, sites, délais souhaités..."
                className="resize-none rounded-xl border border-input bg-surface px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-cyan focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-gradient group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-medium text-background transition-opacity hover:opacity-90"
            >
              Envoyer via WhatsApp
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <p className="text-sm text-muted-foreground">
              Vous préférez l&apos;e-mail ? Écrivez-nous à{' '}
              <a href={`mailto:${contact.email}`} className="text-cyan underline-offset-4 hover:underline">
                {contact.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ name, label, required, autoComplete }: { name: string; label: string; required?: boolean; autoComplete?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="rounded-xl border border-input bg-surface px-4 py-3 text-foreground focus:border-cyan focus:outline-none"
      />
    </div>
  )
}
