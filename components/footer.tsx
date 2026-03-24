"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-12 lg:py-16">
        <div className="flex flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Left Section: Logo & Description */}
          <div className="flex-1 min-w-0">
            <Link href="/" className="mb-2 sm:mb-4 inline-block">
              <Image
                src="/images/gnp-logo.png"
                alt="GNP English Academy"
                width={180}
                height={60}
                className="h-10 sm:h-12 md:h-16 w-auto"
              />
            </Link>
            <p className="mb-3 sm:mb-6 text-[10px] sm:text-xs md:text-sm leading-relaxed text-slate-300">
              Hệ thống đào tạo Tiếng Anh chuẩn Quốc tế, tiên phong ứng dụng công nghệ tiên tiến vào dạy và giảng dạy.
            </p>
            <div className="flex gap-2 sm:gap-4">
              <a
                href="https://www.facebook.com/gnpngoaingutinhoc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 sm:h-9 md:h-10 w-7 sm:w-9 md:w-10 items-center justify-center rounded-full border border-slate-700 text-orange-500 transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5" />
              </a>
              <a
                href="https://www.youtube.com/@gnpnhantam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 sm:h-9 md:h-10 w-7 sm:w-9 md:w-10 items-center justify-center rounded-full border border-slate-700 text-orange-500 transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500"
                aria-label="YouTube"
              >
                <Youtube className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@nhantamenglishcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 sm:h-9 md:h-10 w-7 sm:w-9 md:w-10 items-center justify-center rounded-full border border-slate-700 text-orange-500 transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500"
                aria-label="TikTok"
              >
                <svg className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z" />
                </svg>
              </a>
              <a
                href="https://zalo.me/0968322382"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 sm:h-9 md:h-10 w-7 sm:w-9 md:w-10 items-center justify-center rounded-full border border-slate-700 text-orange-500 transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500"
                aria-label="Zalo"
              >
                <svg className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8 2H3.2C1.6 2 0.5 3.1 0.5 4.7v14.6c0 1.6 1.1 2.7 2.7 2.7h13.2l3.9 2.3v-2.3h0.5c1.6 0 2.7-1.1 2.7-2.7V4.7c0-1.6-1.1-2.7-2.7-2.7zm-1.5 14.2H4c-0.4 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h15.3c0.4 0 0.8 0.4 0.8 0.8s-0.4 0.8-0.8 0.8zm0-3.2H4c-0.4 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h15.3c0.4 0 0.8 0.4 0.8 0.8s-0.4 0.8-0.8 0.8zm0-3.2H4c-0.4 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h15.3c0.4 0 0.8 0.4 0.8 0.8s-0.4 0.8-0.8 0.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Section: Branch Information */}
          <div className="flex-1 min-w-0">
            <h3 className="mb-2 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-lg font-bold text-white tracking-wide">HỆ THỐNG CƠ SỞ</h3>
            <div className="space-y-1.5 sm:space-y-2 md:space-y-4">
              <div className="flex gap-1.5 sm:gap-3">
                <MapPin className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-semibold text-orange-500 text-[9px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">Trụ sở chính:</p>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">33B Trần Bình Trọng, P. Bình Lợi Trung, TP. HCM</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <MapPin className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-semibold text-orange-500 text-[9px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">Cơ sở 1:</p>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">46A Trần Bình Trọng, P. Bình Lợi Trung, TP. HCM</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <MapPin className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-semibold text-orange-500 text-[9px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">Cơ sở 2:</p>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">145 Nguyễn Văn Thương, P. Thanh Mỹ Tây, TP. HCM</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <MapPin className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="font-semibold text-orange-500 text-[9px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">Cơ sở 3:</p>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">134 Nơ Trang Long, P. Bình Thạnh, TP. HCM</p>
                </div>
              </div>
            </div>
          </div>


          {/* Right Section: Contact Information */}
          <div className="flex-1 min-w-0">
            <h3 className="mb-2 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-lg font-bold text-white tracking-wide">LIÊN HỆ</h3>
            <div className="space-y-1.5 sm:space-y-2 md:space-y-4">
              <div className="flex gap-1.5 sm:gap-3">
                <Phone className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">0286.286.2934</p>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">0286.286.2931</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <svg
                  className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.8 2H3.2C1.6 2 0.5 3.1 0.5 4.7v14.6c0 1.6 1.1 2.7 2.7 2.7h13.2l3.9 2.3v-2.3h0.5c1.6 0 2.7-1.1 2.7-2.7V4.7c0-1.6-1.1-2.7-2.7-2.7zm-1.5 14.2H4c-0.4 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h15.3c0.4 0 0.8 0.4 0.8 0.8s-0.4 0.8-0.8 0.8zm0-3.2H4c-0.4 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h15.3c0.4 0 0.8 0.4 0.8 0.8s-0.4 0.8-0.8 0.8zm0-3.2H4c-0.4 0-0.8-0.4-0.8-0.8s0.4-0.8 0.8-0.8h15.3c0.4 0 0.8 0.4 0.8 0.8s-0.4 0.8-0.8 0.8z" />
                </svg>
                <div>
                  <p className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm">Zalo: 0968322382</p>
                </div>
              </div>
              <div className="flex gap-1.5 sm:gap-3">
                <Mail className="h-3.5 sm:h-4 md:h-5 w-3.5 sm:w-4 md:w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:info@gnp.edu.vn"
                    className="text-slate-300 text-[8px] sm:text-[10px] md:text-sm hover:text-orange-500 transition-colors break-all"
                  >
                    info@gnp.edu.vn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 md:pt-8">
          <p className="text-center text-[10px] sm:text-xs md:text-sm text-slate-400">
            © {new Date().getFullYear()} GNP English Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
