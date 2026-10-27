import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: 'Kynetic Solutions | Direction IT externalisée, ERP & services IT à Madagascar',
  description:
    "Kynetic Solutions accompagne les PME et groupes de Madagascar : direction IT à temps partagé, infogérance, cybersécurité, intégration ERP et formation. Une solution IT complète avec un interlocuteur unique.",
  generator: 'v0.app',
  icons: {
    icon: '/images/logo-symbol.png',
    apple: '/images/logo-symbol.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#120d2b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
