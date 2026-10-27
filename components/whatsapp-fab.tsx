import { MessageCircle } from 'lucide-react'
import { contact } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-primary-foreground shadow-xl shadow-brand-blue/40 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden />
      <span className="sr-only">Nous écrire sur WhatsApp</span>
    </a>
  )
}
