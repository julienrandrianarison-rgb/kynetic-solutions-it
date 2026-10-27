import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Kynetic Solutions | Pilotage IT, réseaux, ERP & cybersécurité à Madagascar',
  description:
    "Kynetic Solutions accompagne les PME et groupes de Madagascar : pilotage IT à temps partagé, installation réseau de zéro, infogérance, cybersécurité, solutions ERP et formation. Un interlocuteur unique.",
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-symbol.png',
    apple: '/images/logo-symbol.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0c16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
