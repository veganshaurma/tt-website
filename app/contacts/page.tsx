"use client"

import React from "react"

import { useState } from "react"
import { Building2, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Section, SectionHeader } from "@/components/section"
import { useI18n } from "@/lib/i18n"

export default function ContactsPage() {
  const { t } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-foreground via-foreground to-primary/90 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl md:text-5xl text-balance">
            {t("contacts.title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-background/70 text-pretty">
            {t("contacts.subtitle")}
          </p>
        </div>
      </section>

      {/* Form and Offices */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">{t("contacts.form.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <p className="text-lg font-medium text-foreground">
                      {t("contacts.form.success")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contacts.form.name")} *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder={t("contacts.form.name")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t("contacts.form.company")} *</Label>
                        <Input
                          id="company"
                          name="company"
                          required
                          placeholder={t("contacts.form.company")}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contacts.form.email")} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="email@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {t("contacts.form.phone")}{" "}
                          <span className="text-muted-foreground">({t("contacts.form.phoneOptional")})</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contacts.form.message")} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder={t("contacts.form.messagePlaceholder")}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={consent}
                        onCheckedChange={(checked) => setConsent(checked === true)}
                        aria-describedby="consent-label"
                      />
                      <Label htmlFor="consent" id="consent-label" className="text-sm font-normal text-muted-foreground cursor-pointer">
                        {t("contacts.form.consent")} *
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={!consent}>
                      {t("contacts.form.submit")}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Office Cards */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-foreground">{t("contacts.offices.title")}</h2>
            <div className="space-y-4">
              {/* Hong Kong */}
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("about.legal.hongKong.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("about.legal.hongKong.company")}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{t("about.legal.hongKong.address")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <a href="tel:+996700707739" className="text-muted-foreground hover:text-foreground">
                        +996-700-707-739
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <a href="mailto:help@forko-it.com" className="text-muted-foreground hover:text-foreground">
                        help@forko-it.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Kyrgyzstan */}
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("about.legal.kyrgyzstan.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("about.legal.kyrgyzstan.company")}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{t("about.legal.kyrgyzstan.address")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <a href="tel:+996700707739" className="text-muted-foreground hover:text-foreground">
                        +996-700-707-739
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <a href="mailto:help@forko-it.com" className="text-muted-foreground hover:text-foreground">
                        help@forko-it.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
