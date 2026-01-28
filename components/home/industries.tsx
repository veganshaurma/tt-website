"use client"

import { Landmark, ShoppingCart, Truck, Factory, Briefcase } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const industries = [
  { icon: Landmark, key: "finance" },
  { icon: ShoppingCart, key: "retail" },
  { icon: Truck, key: "logistics" },
  { icon: Factory, key: "manufacturing" },
  { icon: Briefcase, key: "services" },
]

export function Industries() {
  const { t } = useI18n()

  return (
    <Section>
      <SectionHeader
        title={t("industries.title")}
        subtitle={t("industries.subtitle")}
      />
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        {industries.map((industry) => {
          const Icon = industry.icon
          return (
            <div
              key={industry.key}
              className="flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {t(`industries.${industry.key}`)}
              </span>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
