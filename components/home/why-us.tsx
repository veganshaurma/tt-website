"use client"

import { Shield, FileText, Lock, Building2, Code2, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const features = [
  { icon: Shield, key: "sla" },
  { icon: FileText, key: "transparency" },
  { icon: Lock, key: "security" },
  { icon: Building2, key: "enterprise" },
  { icon: Code2, key: "quality" },
  { icon: Headphones, key: "support" },
]

export function WhyUs() {
  const { t } = useI18n()

  return (
    <Section>
      <SectionHeader
        title={t("whyUs.title")}
        subtitle={t("whyUs.subtitle")}
      />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <Card key={feature.key} className="group border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`whyUs.${feature.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`whyUs.${feature.key}.description`)}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
