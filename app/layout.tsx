import React from "react"
import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const _inter = Inter({ subsets: ["latin", "cyrillic"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dewata Global Group — Reliable IT Solutions for Business',
  description: 'We develop web and mobile applications, Telegram bots, provide IT strategy consulting, and deliver infrastructure solutions for companies in Russia, CIS, Asia, and Europe.',
  generator: 'v0.app',
  keywords: ['IT solutions', 'app development', 'web development', 'mobile development', 'IT consulting', 'Telegram bots', 'software development', 'enterprise solutions'],
  authors: [{ name: 'Dewata Global Group' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Dewata Global Group — Reliable IT Solutions for Business',
    description: 'We develop web and mobile applications, Telegram bots, provide IT strategy consulting, and deliver infrastructure solutions.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
