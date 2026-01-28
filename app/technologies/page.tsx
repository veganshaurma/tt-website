"use client"

import { Shield, Scaling, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Redux", "Zustand"],
  backend: ["Node.js", "NestJS", "Python", "FastAPI", "Java", ".NET", "Go"],
  mobile: ["Flutter", "React Native", "Swift", "Kotlin", "SwiftUI", "Jetpack Compose"],
  devops: ["Docker", "Kubernetes", "Terraform", "Ansible", "Nginx", "GitHub Actions", "GitLab CI"],
  cloud: ["AWS", "Google Cloud", "Azure", "Yandex Cloud", "DigitalOcean"],
  data: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Kafka", "ClickHouse"],
  qa: ["Playwright", "Cypress", "Jest", "PyTest", "Selenium", "k6"],
  observability: ["Prometheus", "Grafana", "ELK Stack", "Sentry", "Datadog", "Jaeger"],
}

const architectureFeatures = [
  { icon: Shield, key: "reliability" },
  { icon: Scaling, key: "scaling" },
  { icon: Lock, key: "security" },
]

export default function TechnologiesPage() {
  const { t } = useI18n()

  const categories = [
    { key: "frontend", labelKey: "technologies.frontend" },
    { key: "backend", labelKey: "technologies.backend" },
    { key: "mobile", labelKey: "technologies.mobile" },
    { key: "devops", labelKey: "technologies.devops" },
    { key: "cloud", labelKey: "technologies.cloud" },
    { key: "data", labelKey: "technologies.data" },
    { key: "qa", labelKey: "technologies.qa" },
    { key: "observability", labelKey: "technologies.observability" },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/90 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl text-balance">
            {t("technologies.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70 text-pretty">
            {t("technologies.subtitle")}
          </p>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card key={category.key} className="border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{t(category.labelKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack[category.key as keyof typeof techStack].map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Architecture Approach */}
      <Section className="bg-muted/30">
        <SectionHeader
          title={t("technologies.architecture.title")}
          subtitle={t("technologies.architecture.subtitle")}
        />
        
        <div className="grid gap-6 md:grid-cols-3">
          {architectureFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.key} className="border-border/50 bg-card">
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {t(`technologies.architecture.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`technologies.architecture.${feature.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>
    </>
  )
}
