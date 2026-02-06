"use client"

import { Globe, Smartphone, Bot, Lightbulb, Server } from "lucide-react"
import { Section } from "@/components/section"
import { ServiceCard } from "@/components/service-card"
import { useI18n } from "@/lib/i18n"

const servicesData = {
  webApps: {
    icon: Globe,
    param: "web",
    itemsRu: ["Корпоративные порталы", "Административные панели", "CRM/ERP-модули", "REST и GraphQL API", "Интеграции с внешними системами", "Микросервисная архитектура"],
    itemsEn: ["Enterprise portals", "Admin panels", "CRM/ERP modules", "REST and GraphQL APIs", "Third-party integrations", "Microservices architecture"],
  },
  mobileApps: {
    icon: Smartphone,
    param: "mobile",
    itemsRu: ["iOS-приложения (Swift)", "Android-приложения (Kotlin)", "Кроссплатформенные решения (Flutter, React Native)", "Публикация и поддержка в сторах", "Аналитика и push-уведомления", "Интеграция с backend"],
    itemsEn: ["iOS applications (Swift)", "Android applications (Kotlin)", "Cross-platform (Flutter, React Native)", "Store publishing and support", "Analytics and push notifications", "Backend integration"],
  },
  telegramBots: {
    icon: Bot,
    param: "telegram",
    itemsRu: ["Боты поддержки клиентов", "Воронки продаж", "Интеграция с CRM/ERP", "Приём платежей", "Уведомления и рассылки", "Mini Apps в Telegram"],
    itemsEn: ["Customer support bots", "Sales funnels", "CRM/ERP integration", "Payment processing", "Notifications and broadcasts", "Telegram Mini Apps"],
  },
  consulting: {
    icon: Lightbulb,
    param: "consulting",
    itemsRu: ["Технический аудит", "Проектирование архитектуры", "IT-стратегия и roadmap", "Оптимизация процессов", "Due diligence", "Выбор технологий"],
    itemsEn: ["Technical audit", "Architecture design", "IT strategy and roadmap", "Process optimization", "Due diligence", "Technology selection"],
  },
  infrastructure: {
    icon: Server,
    param: "infrastructure",
    itemsRu: ["Облачная инфраструктура (AWS, GCP, Azure)", "On-premise решения", "Мониторинг и alerting", "Резервное копирование", "Безопасность и hardening", "CI/CD и DevOps"],
    itemsEn: ["Cloud infrastructure (AWS, GCP, Azure)", "On-premise solutions", "Monitoring and alerting", "Backup solutions", "Security and hardening", "CI/CD and DevOps"],
  },
}

const serviceKeys = Object.keys(servicesData) as Array<keyof typeof servicesData>

export default function ServicesPage() {
  const { t, locale } = useI18n()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-foreground via-foreground to-primary/90 py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/services-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/90 to-primary/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl text-balance">
            {t("services.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70 text-pretty">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => {
            const service = servicesData[key]
            return (
              <ServiceCard
                key={key}
                icon={service.icon}
                titleKey={`services.${key}.title`}
                descriptionKey={`services.${key}.description`}
                items={locale === "ru" ? service.itemsRu : service.itemsEn}
                serviceParam={service.param}
              />
            )
          })}
        </div>
      </Section>
    </>
  )
}
