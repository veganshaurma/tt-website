"use client"

import { useI18n, type Locale } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const languages: { code: Locale; label: string }[] = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ]

  return (
    <div className="flex items-center rounded-lg border border-border bg-muted/50 p-0.5" role="group" aria-label="Language selection">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          onClick={() => setLocale(lang.code)}
          className={cn(
            "h-7 px-2.5 text-xs font-medium transition-all",
            locale === lang.code
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:bg-transparent hover:text-foreground"
          )}
          aria-pressed={locale === lang.code}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  )
}
