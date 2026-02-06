"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/70 to-primary/80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Tagline */}
          <div className="mb-6 inline-flex items-center rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-sm text-background/80 backdrop-blur-sm">
            {t("hero.tagline")}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-background sm:text-5xl md:text-6xl text-balance">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/70 text-pretty">
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="bg-background text-foreground hover:bg-background/90">
              <Link href="/contacts">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-background/30 text-background hover:bg-background/10 bg-transparent">
              <Link href="/services">
                {t("hero.ctaSecondary")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
