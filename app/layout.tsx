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
  title: 'ТТ АС — Надёжные IT-решения для бизнеса',
  description: 'Разрабатываем веб и мобильные приложения, Telegram-боты, оказываем консалтинг в области IT-стратегии и инфраструктурные решения для компаний в России, СНГ и Европе.',
  generator: 'v0.app',
  keywords: ['IT решения', 'разработка приложений', 'веб разработка', 'мобильная разработка', 'IT консалтинг', 'Telegram боты', 'разработка программного обеспечения', 'корпоративные решения'],
  authors: [{ name: 'ООО ТОРГОВЫЕ ТЕХНОЛОГИИ АС' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'ТТ АС — Надёжные IT-решения для бизнеса',
    description: 'Разрабатываем веб и мобильные приложения, Telegram-боты, оказываем консалтинг в области IT-стратегии и инфраструктурные решения.',
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
