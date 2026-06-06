"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import clsx from "clsx"
import { motion, easeInOut } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Hiệu ứng thu nhỏ header khi cuộn chuột (tuỳ chọn thêm để web xịn hơn)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 🎯 animation lắc nhẹ cho icon Summer
  const shakeAnimation = {
    rotate: [0, -8, 8, -6, 6, -3, 3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 3,
      ease: easeInOut
    }
  }

  const navItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Tin tức", href: "/tin-tuc" },

    // 🌞 TAB SUMMER
    {
      name: "summer",
      href: "/khoa-hoc-mua-he",
      isSummer: true
    },

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

    { name: "Liên hệ", href: "/lien-he" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <header 
      className={clsx(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] py-1" 
          : "bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3"
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 ">
        
      
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center h-[60px]">

          {/* 1. KHỐI TRÁI: LOGO */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                <Image src="/images/gnp-logo.png" alt="GNP English" fill className="object-cover" priority />
              </div>
            </Link>
          </div>

          {/* 2. KHỐI GIỮA: MENU DESKTOP  */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="group relative flex items-center h-[60px]">

                <Link
                  href={item.href}
                  className={clsx(
                    "relative py-2 transition-all duration-300 flex items-center justify-center tracking-wide",
                    item.isSummer ? "px-1" : "px-4",
                    isActive(item.href) ? "text-orange-500 font-bold" : "text-slate-600 font-semibold hover:text-orange-500"
                  )}
                >
                  {item.isSummer ? (
                    <motion.div
                      animate={shakeAnimation}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      className="cursor-pointer flex items-center justify-center"
                    >
                      <Image
                        src="/summer-logo.png"
                        alt="Summer Camp"
                        width={64}
                        height={64}
                        className="object-contain drop-shadow-sm"
                        style={{ width: "auto", height: "40px" }} 
                      />
                    </motion.div>
                  ) : (
                    <>
                      {item.name}

                      {item.submenu && (
                        <ChevronDown
                          size={16}
                          strokeWidth={2.5}
                          className="ml-1.5 mt-[1px] group-hover:rotate-180 transition-transform duration-300 opacity-50"
                        />
                      )}

                      {/* Line gạch chân */}
                      <span
                        className={clsx(
                          "absolute left-4 right-4 -bottom-0 h-[3px] bg-orange-500 transition-all duration-300 rounded-t-md",
                          isActive(item.href) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                        )}
                      />
                    </>
                  )}
                </Link>

                {/* DROPDOWN SUBMENU */}
                {item.submenu && !item.isSummer && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-2.5 flex flex-col gap-1 relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45"></div>

                      {item.submenu.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          href={sub.href} 
                          className="group/item flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-orange-50 transition-colors relative z-10"
                        >
                          <div 
                            className="w-2.5 h-2.5 rounded-full shrink-0 group-hover/item:scale-150 transition-transform shadow-sm"
                            style={{ backgroundColor: sub.color }}
                          />
                          <div className="flex flex-col gap-0.5">
                            <span className="font-bold text-sm text-slate-800 group-hover/item:text-orange-600 uppercase tracking-wide">
                              {sub.title}
                            </span>
                            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
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

          {/* 3. KHỐI PHẢI: CTA & MOBILE BTN */}
          <div className="flex justify-end items-center gap-2">
            <div className="hidden lg:flex items-center gap-2">
              <Button asChild variant="outline" className="border-orange-200 text-orange-600 font-bold hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 rounded-full px-4 h-11 transition-all">
                <Link href="/kiem-tra-trinh-do">Kiểm tra trình độ</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-full px-4 h-11 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all">
                <Link href="/lien-he">Đăng ký tư vấn</Link>
              </Button>
            </div>

            {/* HAMBURGER BTN CHO MOBILE */}
            <button
              className="lg:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-2xl lg:hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] absolute w-full left-0 top-full">
          <nav className="mx-auto max-w-7xl flex flex-col px-4 py-4 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-slate-50 last:border-0">
                {item.submenu ? (
                  <details className="group py-1">
                    <summary className={clsx(
                      "flex items-center justify-between px-3 py-3.5 rounded-xl text-base font-bold cursor-pointer list-none [&::-webkit-details-marker]:hidden transition-colors",
                      isActive(item.href) ? "text-orange-500 bg-orange-50" : "text-slate-700 hover:bg-slate-50"
                    )}>
                      {item.name}
                      <ChevronDown size={18} className="group-open:rotate-180 transition-transform opacity-60" />
                    </summary>
                    <div className="flex flex-col gap-1.5 pl-5 pr-2 pb-3 mt-1">
                      {item.submenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-slate-600 hover:text-orange-600 hover:bg-orange-50/80 px-4 py-3 rounded-xl flex items-center gap-3.5 transition-colors"
                        >
                          <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: sub.color }} />
                          <div>
                            <div className="font-bold text-slate-800">{sub.title}</div>
                            <div className="text-[11px] font-medium text-slate-500 uppercase mt-0.5">{sub.age}</div>
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
                      "px-3 py-4 text-base font-bold transition-colors rounded-xl my-1",
                      isActive(item.href) ? "text-orange-500 bg-orange-50" : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {item.isSummer ? (
                      <div className="flex items-center h-[24px]">
                         <Image
                          src="/summer-logo.png"
                          alt="Summer Camp"
                          width={60}
                          height={30}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-100 px-2 pb-4">
               <Button asChild variant="outline" className="w-full border-orange-200 text-orange-600 font-bold h-12 rounded-full">
                <Link href="/kiem-tra-trinh-do" onClick={() => setMobileMenuOpen(false)}>Kiểm tra trình độ</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold h-12 rounded-full shadow-md">
                <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>Đăng ký tư vấn</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}