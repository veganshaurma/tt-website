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

const jobOpenings = {
  ru: [
    {
      title: "Backend-разработчик (Python)",
      level: "Middle",
      employment: "Полная занятость",
      location: "Удалённо",
      requirements: {
        title: "Требования:",
        items: [
          "Опыт разработки на Python 3+ года",
          "Уверенное знание Django или FastAPI",
          "Опыт работы с PostgreSQL, Redis",
          "Проектирование и реализация REST API",
          "Опыт работы с Docker и CI/CD",
          "Английский: Intermediate+",
        ],
      },
      bonus: {
        title: "Будет плюсом:",
        items: [
          "Опыт асинхронного программирования (asyncio, aiohttp)",
          "Знание Celery, RabbitMQ/Kafka",
          "Опыт работы с AWS или GCP",
        ],
      },
      applyText: "Откликнуться",
    },
    {
      title: "Frontend-разработчик (React)",
      level: "Senior",
      employment: "Полная занятость",
      location: "Удалённо",
      requirements: {
        title: "Требования:",
        items: [
          "Опыт разработки на React 5+ лет",
          "Экспертное знание TypeScript, Next.js",
          "State management (Redux, Zustand, React Query)",
          "Современный CSS (Tailwind, CSS-in-JS)",
          "Экспертиза в оптимизации производительности",
          "Опыт руководства командой",
          "Английский: Upper-Intermediate+",
        ],
      },
      bonus: {
        title: "Будет плюсом:",
        items: [
          "Опыт работы с GraphQL, tRPC",
          "Знание React Native",
          "Проекты в Web3/blockchain",
        ],
      },
      applyText: "Откликнуться",
    },
  ],
  en: [
    {
      title: "Backend Developer (Python)",
      level: "Middle",
      employment: "Full-time",
      location: "Remote",
      requirements: {
        title: "Requirements:",
        items: [
          "3+ years of Python development experience",
          "Strong knowledge of Django or FastAPI",
          "Experience with PostgreSQL, Redis",
          "REST API design and implementation",
          "Experience with Docker and CI/CD",
          "English: Intermediate+",
        ],
      },
      bonus: {
        title: "Nice to have:",
        items: [
          "Async programming experience (asyncio, aiohttp)",
          "Knowledge of Celery, RabbitMQ/Kafka",
          "Experience with AWS or GCP",
        ],
      },
      applyText: "Apply",
    },
    {
      title: "Frontend Developer (React)",
      level: "Senior",
      employment: "Full-time",
      location: "Remote",
      requirements: {
        title: "Requirements:",
        items: [
          "5+ years of React development experience",
          "Expert knowledge of TypeScript, Next.js",
          "State management (Redux, Zustand, React Query)",
          "Modern CSS (Tailwind, CSS-in-JS)",
          "Performance optimization expertise",
          "Team leadership experience",
          "English: Upper-Intermediate+",
        ],
      },
      bonus: {
        title: "Nice to have:",
        items: [
          "Experience with GraphQL, tRPC",
          "React Native knowledge",
          "Web3/blockchain projects",
        ],
      },
      applyText: "Apply",
    },
  ],
}

export default function CareersPage() {
  const { t, locale } = useI18n()
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
          {jobOpenings[locale].map((job, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                    job.level === "Senior" || job.level === "Старший"
                      ? "bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 ring-purple-700/10 dark:ring-purple-300/20"
                      : "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 ring-blue-700/10 dark:ring-blue-300/20"
                  }`}>
                    {job.level}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-gray-50 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 ring-1 ring-inset ring-gray-500/10">
                    {job.employment}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-950 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                    {job.location}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">{job.requirements.title}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    {job.requirements.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">{job.bonus.title}</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    {job.bonus.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4" asChild>
                  <a href="#application-form">{job.applyText}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
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
