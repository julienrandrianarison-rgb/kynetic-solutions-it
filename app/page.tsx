import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { OdooSection } from '@/components/odoo-section'
import { Offers } from '@/components/offers'
import { Method } from '@/components/method'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <OdooSection />
        <Offers />
        <Method />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
