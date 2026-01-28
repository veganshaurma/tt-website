"use client"

import React from "react"

import { useState } from "react"
import { TrendingUp, Code2, MapPin, Laptop, Upload, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const benefits = [
  { icon: TrendingUp, key: "growth" },
  { icon: Code2, key: "culture" },
  { icon: MapPin, key: "remote" },
  { icon: Laptop, key: "equipment" },
]

export default function CareersPage() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/90 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl text-balance">
            {t("careers.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70 text-pretty">
            {t("careers.subtitle")}
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t("careers.intro")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("careers.introDescription")}
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-muted/30">
        <SectionHeader title={t("careers.benefits.title")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <Card key={benefit.key} className="border-border/50 text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {t(`careers.benefits.items.${benefit.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`careers.benefits.items.${benefit.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Open Positions */}
      <Section>
        <SectionHeader 
          title={t("careers.openings.title")} 
          description={t("careers.openings.description")}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {/* Backend Python Middle */}
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Backend-разработчик (Python)</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-300/20">
                  Middle
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10">
                  Полная занятость
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-950 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                  Удалённо
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2">Требования:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Опыт разработки на Python 3+ года</li>
                  <li>Уверенное знание Django или FastAPI</li>
                  <li>Опыт работы с PostgreSQL, Redis</li>
                  <li>Проектирование и реализация REST API</li>
                  <li>Опыт работы с Docker и CI/CD</li>
                  <li>Английский: Intermediate+</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2">Будет плюсом:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Опыт асинхронного программирования (asyncio, aiohttp)</li>
                  <li>Знание Celery, RabbitMQ/Kafka</li>
                  <li>Опыт работы с AWS или GCP</li>
                </ul>
              </div>
              <Button className="w-full mt-4" asChild>
                <a href="#application-form">Откликнуться</a>
              </Button>
            </CardContent>
          </Card>

          {/* Frontend React Senior */}
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Frontend-разработчик (React)</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-950 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-300/20">
                  Senior
                </span>
                <span className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10">
                  Полная занятость
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-950 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                  Удалённо
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2">Требования:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Опыт разработки на React 5+ лет</li>
                  <li>Экспертное знание TypeScript, Next.js</li>
                  <li>State management (Redux, Zustand, React Query)</li>
                  <li>Современный CSS (Tailwind, CSS-in-JS)</li>
                  <li>Экспертиза в оптимизации производительности</li>
                  <li>Опыт руководства командой</li>
                  <li>Английский: Upper-Intermediate+</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-2">Будет плюсом:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Опыт работы с GraphQL, tRPC</li>
                  <li>Знание React Native</li>
                  <li>Проекты в Web3/blockchain</li>
                </ul>
              </div>
              <Button className="w-full mt-4" asChild>
                <a href="#application-form">Откликнуться</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Application Form */}
      <Section id="application-form">
        <div className="mx-auto max-w-xl">
          <Card className="border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{t("careers.form.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <p className="text-lg font-medium text-foreground">
                    {t("careers.form.success")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("careers.form.name")}</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={t("careers.form.name")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t("careers.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">{t("careers.form.role")}</Label>
                    <Input
                      id="role"
                      name="role"
                      required
                      placeholder={t("careers.form.role")}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("careers.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t("careers.form.message")}
                    />
                  </div>

                  {/* File Upload UI (mock) */}
                  <div className="space-y-2">
                    <Label htmlFor="resume">{t("careers.form.file")}</Label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 cursor-pointer opacity-0"
                        aria-describedby="file-hint"
                      />
                      <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-3">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {fileName || t("careers.form.file")}
                        </span>
                      </div>
                    </div>
                    <p id="file-hint" className="text-xs text-muted-foreground">
                      {t("careers.form.fileHint")}
                    </p>
                  </div>

                  <Button type="submit" className="w-full">
                    {t("careers.form.submit")}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
