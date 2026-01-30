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
  title: 'Forko IT — Надёжные IT-решения для бизнеса',
  description: 'Разрабатываем веб- и мобильные приложения, Telegram-ботов, консультируем по IT-стратегии и обеспечиваем инфраструктуру для компаний в России, СНГ, Азии и Европе.',
  generator: 'v0.app',
  keywords: ['IT-решения', 'разработка приложений', 'веб-разработка', 'мобильная разработка', 'IT-консалтинг', 'Telegram боты'],
  authors: [{ name: 'Forko IT' }],
  openGraph: {
    title: 'Forko IT — Надёжные IT-решения для бизнеса',
    description: 'Разрабатываем веб- и мобильные приложения, Telegram-ботов, консультируем по IT-стратегии и обеспечиваем инфраструктуру.',
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
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
