"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function CTA() {
  const { t } = useI18n()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-6 py-16 text-center shadow-2xl sm:px-12 md:py-20">
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <circle cx="16" cy="16" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              {t("hero.cta")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              {t("whyUs.subtitle")}
            </p>
            <div className="mt-8">
              <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contacts">
                  {t("nav.requestQuote")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
