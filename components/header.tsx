"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/services", labelKey: "nav.services" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/technologies", labelKey: "nav.technologies" },
  { href: "/careers", labelKey: "nav.careers" },
  { href: "/contacts", labelKey: "nav.contacts" },
]

export function Header() {
  const { t } = useI18n()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-9 w-9" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Forko IT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                pathname === item.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/contacts">{t("nav.requestQuote")}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-3 sm:px-6" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
                  {t("nav.requestQuote")}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
