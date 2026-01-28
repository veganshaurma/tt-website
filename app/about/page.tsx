"use client"

import { Target, ShieldCheck, Sparkles, Handshake, Users, Building2, Phone, Mail, MapPin, ChevronsUpDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"
import { useState } from "react"

const values = [
  { icon: ShieldCheck, key: "reliability" },
  { icon: Sparkles, key: "transparency" },
  { icon: Target, key: "quality" },
  { icon: Handshake, key: "partnership" },
]

export default function AboutPage() {
  const { t } = useI18n()
  const [hkDetailsOpen, setHkDetailsOpen] = useState(false)
  const [kgDetailsOpen, setKgDetailsOpen] = useState(false)

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/90 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl text-balance">
            {t("about.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70 text-pretty">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Target className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t("about.mission.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("about.mission.description")}
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted/30">
        <SectionHeader title={t("about.values.title")} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.key} className="border-border/50 text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground">
                    {t(`about.values.items.${value.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(`about.values.items.${value.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t("about.howWeWork.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("about.howWeWork.description")}
          </p>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Users className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t("about.team.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("about.team.description")}
          </p>
          {/* Abstract team avatars */}
          <div className="mt-8 flex justify-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-primary text-sm font-medium text-primary-foreground"
                  aria-hidden="true"
                />
              ))}
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-muted text-sm font-medium text-muted-foreground">
                +
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Entities */}
      <Section>
        <SectionHeader
          title={t("about.legal.title")}
          subtitle={t("about.legal.subtitle")}
        />
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Hong Kong */}
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">{t("about.legal.hongKong.title")}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t("about.legal.hongKong.company")}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span className="text-muted-foreground">{t("about.legal.hongKong.address")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+996700707739" className="text-muted-foreground hover:text-foreground">
                  +996-700-707-739
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:help@forko-it.com" className="text-muted-foreground hover:text-foreground">
                  help@forko-it.com
                </a>
              </div>

              {/* Collapsible Bank Details */}
              <Collapsible open={hkDetailsOpen} onOpenChange={setHkDetailsOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full justify-between mt-2">
                    {t("about.legal.details")}
                    <ChevronsUpDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 space-y-2 rounded-lg bg-muted/50 p-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">{t("about.legal.bank")}:</span>
                    <span className="ml-2 text-muted-foreground">{t("about.legal.bankName")}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{t("about.legal.bankAddress")}:</span>
                    <span className="ml-2 text-muted-foreground">{t("about.legal.bankAddressValue")}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{t("about.legal.bic")}:</span>
                    <span className="ml-2 font-mono text-muted-foreground">044525411</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{t("about.legal.corrAccount")}:</span>
                    <span className="ml-2 font-mono text-muted-foreground">30101810145250000411</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">{t("about.legal.rubAccount")}:</span>
                    <span className="ml-2 font-mono text-muted-foreground">40807810300810005951</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>

          {/* Kyrgyzstan */}
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">{t("about.legal.kyrgyzstan.title")}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t("about.legal.kyrgyzstan.company")}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <span className="font-medium text-foreground">{t("about.legal.kyrgyzstan.legalAddress")}:</span><br />
                  {t("about.legal.kyrgyzstan.address")}
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="tel:+996700707739" className="text-muted-foreground hover:text-foreground">
                  +996-700-707-739
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href="mailto:help@forko-it.com" className="text-muted-foreground hover:text-foreground">
                  help@forko-it.com
                </a>
              </div>

              {/* Placeholder for Kyrgyzstan details */}
              <Collapsible open={kgDetailsOpen} onOpenChange={setKgDetailsOpen}>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="w-full justify-between mt-2">
                    {t("about.legal.details")}
                    <ChevronsUpDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 space-y-2 rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                  <p>Forko IT Technologies LLC</p>
                  <p>Kyrgyz Republic, Bishkek</p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  )
}
