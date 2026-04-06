"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import clsx from "clsx"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Tin tức", href: "/tin-tuc" },
    { 
      name: "Khóa học", 
      href: "/khoa-hoc",
      submenu: [
        { title: "Explorer", age: "3.5 - 6 tuổi", href: "/khoa-hoc/explorer", color: "#FF8A00" },
        { title: "Innovator", age: "6 - 10 tuổi", href: "/khoa-hoc/innovator", color: "#E6007E" },
        { title: "Leader", age: "11 - 15 tuổi", href: "/khoa-hoc/leader", color: "#2563EB" },
        { title: "IELTS Achiever", age: "Từ 15 tuổi", href: "/khoa-hoc/ielts", color: "#F59E0B" },
        { title: "Communicator", age: "Sinh viên & Đi làm", href: "/khoa-hoc/communicator", color: "#1E3A8A" },
      ]
    },
    { name: "Tuyển dụng", href: "/tuyen-dung" },
    { name: "Liên hệ", href: "/lien-he" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="logo"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6 h-full">
            {navItems.map((item) => (
              <div key={item.name} className="group relative h-full flex items-center">
                <Link
                  href={item.href}
                  className={clsx(
                    "relative px-3 py-2 font-medium transition-colors duration-300 flex items-center gap-1.5",
                    isActive(item.href)
                      ? "text-orange-500"
                      : "text-gray-600 hover:text-orange-500" /* ĐÃ SỬA: hover thành màu cam */
                  )}
                >
                  {item.name}
                  
                  {/* Icon xổ xuống - Khi hover text thành cam thì icon cũng thành cam */}
                  {item.submenu && (
                    <ChevronDown size={14} className="mt-[2px] group-hover:rotate-180 group-hover:text-orange-500 transition-transform duration-300 opacity-70" />
                  )}

                  {/* Underline hiệu ứng */}
                  <span
                    className={clsx(
                      "absolute left-0 -bottom-1 h-[2px] w-full bg-orange-500 transition-all duration-300",
                      isActive(item.href) ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </Link>

                {/* SUBMENU DROPDOWN */}
                {item.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1 relative">
                      
                      {/* Mũi tên nhỏ chỉ lên (Tail) */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

                      {item.submenu.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          href={sub.href} 
                          className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors relative z-10"
                        >
                          {/* Chấm màu */}
                          <div 
                            className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-300 group-hover/item:scale-150 shadow-sm" 
                            style={{ backgroundColor: sub.color }}
                          />
                          
                          {/* Thông tin khóa học */}
                          <div className="flex flex-col">
                            {/* ĐÃ SỬA: Text khóa học đổi sang màu cam khi hover */}
                            <span className="font-semibold text-sm text-gray-800 group-hover/item:text-orange-500 transition-colors uppercase tracking-wide">
                              {sub.title}
                            </span>
                            <span className="text-xs text-gray-500 mt-0.5">
                              {sub.age}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-orange-400 text-orange-500 hover:bg-orange-50"
            >
              <Link href="/kiem-tra-trinh-do">Kiểm tra trình độ</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md hover:shadow-lg"
            >
              <Link href="/lien-he">Đăng ký tư vấn</Link>
            </Button>
          </div>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t bg-white md:hidden shadow-lg absolute w-full">
          <nav className="mx-auto max-w-7xl flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-gray-50 last:border-0">
                {item.submenu ? (
                  <details className="group py-2">
                    <summary className={clsx(
                      "flex items-center justify-between px-2 py-2 rounded-md text-sm font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:text-orange-500",
                      isActive(item.href) ? "text-orange-500" : "text-gray-700"
                    )}>
                      {item.name}
                      <ChevronDown size={16} className="mt-[1px] group-open:rotate-180 transition-transform opacity-50" />
                    </summary>
                    <div className="flex flex-col gap-1 pl-4 pr-2 pb-2 mt-1">
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2.5 rounded-md flex items-center gap-3 transition-colors"
                        >
                          <div 
                            className="w-2 h-2 rounded-full shrink-0" 
                            style={{ backgroundColor: sub.color }}
                          />
                          <div className="flex flex-col">
                            <span className="font-semibold">{sub.title}</span>
                            <span className="text-xs opacity-70">{sub.age}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "px-2 py-4 text-sm font-medium hover:text-orange-500 transition-colors",
                      isActive(item.href) ? "text-orange-500" : "text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-3 pt-6 pb-2">
              <Button asChild variant="outline" className="border-orange-400 text-orange-500 w-full h-10 hover:bg-orange-50 transition-colors">
                <Link href="/kiem-tra-trinh-do" onClick={() => setMobileMenuOpen(false)}>Kiểm tra trình độ</Link>
              </Button>
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 w-full h-10 transition-colors">
                <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>Đăng ký tư vấn</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}