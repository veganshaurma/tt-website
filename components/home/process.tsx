"use client"

import { Search, FileText, Code, TestTube, Rocket, HeartHandshake } from "lucide-react"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

const steps = [
  { icon: Search, key: "discovery", number: "01" },
  { icon: FileText, key: "proposal", number: "02" },
  { icon: Code, key: "delivery", number: "03" },
  { icon: TestTube, key: "qa", number: "04" },
  { icon: Rocket, key: "launch", number: "05" },
  { icon: HeartHandshake, key: "support", number: "06" },
]

export function Process() {
  const { t } = useI18n()

  return (
    <Section className="bg-muted/30">
      <SectionHeader
        title={t("process.title")}
        subtitle={t("process.subtitle")}
      />
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={step.key} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="absolute right-0 top-8 hidden h-0.5 w-8 translate-x-full bg-border lg:block" />
              )}
              
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mt-2 text-xs font-medium text-muted-foreground">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {t(`process.steps.${step.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`process.steps.${step.key}.description`)}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
