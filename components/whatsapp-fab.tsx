import { MessageCircle } from 'lucide-react'
import { contact } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-brand-gradient fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full text-background shadow-[0_10px_40px_-8px] shadow-electric/70 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="sr-only">Nous écrire sur WhatsApp</span>
    </a>
  )
}
