"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import clsx from "clsx"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Khóa học", href: "/khoa-hoc" },
    { name: "Tuyển dụng", href: "/tuyen-dung" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b">
      
      {/* CONTAINER FIX */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/gnp-logo.png"
              alt="logo"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "relative px-3 py-2 font-medium transition",
                  isActive(item.href)
                    ? "text-orange-500"
                    : "text-gray-600 hover:text-black"
                )}
              >
                {item.name}

                {/* underline */}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 transition-all duration-300",
                    isActive(item.href) ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-orange-400 text-orange-500 hover:bg-orange-50"
            >
              <Link href="/kiem-tra-trinh-do">
                Kiểm tra trình độ
              </Link>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md hover:shadow-lg"
            >
              <Link href="/lien-he">
                Đăng ký tư vấn
              </Link>
            </Button>
          </div>

          {/* MOBILE BTN */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="mx-auto max-w-7xl flex flex-col gap-3 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm",
                  isActive(item.href)
                    ? "bg-orange-100 text-orange-500"
                    : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col gap-2 pt-3">
              <Button asChild variant="outline">
                <Link href="/kiem-tra-trinh-do">Kiểm tra trình độ</Link>
              </Button>

              <Button asChild>
                <Link href="/lien-he">Đăng ký tư vấn</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}