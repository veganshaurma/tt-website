"use client"

import { GitPullRequest, RefreshCw, FlaskConical, BookOpen, ShieldCheck, Award } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const guarantees = [
  { icon: GitPullRequest, key: "codeReview" },
  { icon: RefreshCw, key: "cicd" },
  { icon: FlaskConical, key: "testing" },
  { icon: BookOpen, key: "documentation" },
  { icon: ShieldCheck, key: "security" },
  { icon: Award, key: "compliance" },
]

export function Guarantees() {
  const { t } = useI18n()

  return (
    <Section dark>
      <SectionHeader
        title={t("guarantees.title")}
        subtitle={t("guarantees.subtitle")}
        dark
      />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guarantees.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.key} className="group rounded-2xl border border-background/10 bg-background/5 p-6 transition-all hover:bg-background/10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-background/10 text-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-background">
                {t(`guarantees.${item.key}.title`)}
              </h3>
              <p className="text-sm text-background/70">
                {t(`guarantees.${item.key}.description`)}
              </p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
