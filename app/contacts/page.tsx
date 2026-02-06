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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const countryCodes = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+7", country: "RU/KZ", flag: "🇷🇺" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+62", country: "ID", flag: "🇮🇩" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+971", country: "AE", flag: "🇦🇪" },
  { code: "+380", country: "UA", flag: "🇺🇦" },
]

export default function ContactsPage() {
  const { t, locale } = useI18n()
  const [submitted, setSubmitted] = useState(false)
  const [consent, setConsent] = useState(false)
  const [countryCode, setCountryCode] = useState("+1")
  const [customCode, setCustomCode] = useState("")
  const [phone, setPhone] = useState("")
  const isOther = countryCode === "other"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!consent) return

    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      countryCode: isOther ? 'other' : countryCode,
      customCode: isOther ? customCode : '',
    }

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send message. Please try again.')
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, "")

    // If "Other" is selected, don't apply any formatting
    if (isOther) {
      return value
    }

    // Apply different masks based on country code
    if (countryCode === "+1") {
      // US/Canada format: (XXX) XXX-XXXX
      const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
      if (match) {
        return [match[1], match[2], match[3]]
          .filter(Boolean)
          .join(" ")
          .replace(/^(\d{3})/, "($1)")
          .replace(/\) (\d{3})/, ") $1-")
      }
    } else if (countryCode === "+7") {
      // Russia/Kazakhstan format: (XXX) XXX-XX-XX
      const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/)
      if (match) {
        const parts = [match[1], match[2], match[3], match[4]].filter(Boolean)
        let result = ""
        if (parts[0]) result = `(${parts[0]})`
        if (parts[1]) result += ` ${parts[1]}`
        if (parts[2]) result += `-${parts[2]}`
        if (parts[3]) result += `-${parts[3]}`
        return result
      }
    } else {
      // Default format: XXX XXX XXXX
      const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
      if (match) {
        return [match[1], match[2], match[3]].filter(Boolean).join(" ")
      }
    }

    return cleaned
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhone(formatted)
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
                        <div className="flex gap-2">
                          {isOther ? (
                            <>
                              <Input
                                type="text"
                                value={customCode}
                                onChange={(e) => setCustomCode(e.target.value)}
                                placeholder="+XX"
                                className="w-[100px]"
                                maxLength={5}
                              />
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder={locale === "ru" ? "Номер телефона" : "Phone number"}
                                className="flex-1"
                              />
                            </>
                          ) : (
                            <>
                              <Select value={countryCode} onValueChange={(value) => {
                                setCountryCode(value)
                                if (value !== "other") {
                                  setPhone("")
                                }
                              }}>
                                <SelectTrigger className="w-[140px]">
                                  <SelectValue placeholder="Code" />
                                </SelectTrigger>
                                <SelectContent>
                                  {countryCodes.map((country) => (
                                    <SelectItem key={country.code} value={country.code}>
                                      <span className="flex items-center gap-2">
                                        <span>{country.flag}</span>
                                        <span>{country.code}</span>
                                      </span>
                                    </SelectItem>
                                  ))}
                                  <SelectItem value="other">
                                    <span className="flex items-center gap-2">
                                      <span>🌍</span>
                                      <span>{locale === "ru" ? "Другая" : "Other"}</span>
                                    </span>
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder={countryCode === "+7" ? "(999) 999-99-99" : "(999) 999-9999"}
                                className="flex-1"
                              />
                            </>
                          )}
                        </div>
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

          {/* Office Card */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-foreground">{t("contacts.offices.title")}</h2>
            <div className="space-y-4">
              {/* Bali */}
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t("about.legal.bali.title")}</h3>
                      <p className="text-sm text-muted-foreground">{t("about.legal.bali.company")}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{t("about.legal.bali.address")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <a href="mailto:info@dewata-global.com" className="text-muted-foreground hover:text-foreground">
                        info@dewata-global.com
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
