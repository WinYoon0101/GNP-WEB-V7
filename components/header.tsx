"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Khóa học", href: "/khoa-hoc" },
    { name: "Tuyển dụng", href: "/tuyen-dung" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/gnp-logo.png" alt="GNP English Academy" width={140} height={48} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-foreground/80 transition-all hover:text-primary hover:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            <Link href="/kiem-tra-trinh-do">Kiểm tra trình độ</Link>
          </Button>
          <Button
            asChild
            className="bg-primary shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/lien-he">Đăng ký tư vấn</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/kiem-tra-trinh-do" onClick={() => setMobileMenuOpen(false)}>
                  Kiểm tra trình độ
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/#dang-ky-tu-van" onClick={() => setMobileMenuOpen(false)}>
                  Đăng ký tư vấn
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
