'use client'

import React from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f] text-gray-400 py-10 sm:py-16 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div className="flex flex-col">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#f97316] p-2 flex items-center justify-center mb-6 rounded-sm">
              <Image
                src="/images/gnp-logo.png"
                alt="GNP English Academy"
                fill
                className="object-contain rounded-full"
              />
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
              Hệ thống đào tạo Tiếng Anh chuẩn Quốc tế, tiên phong ứng dụng công nghệ hiện đại.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">
              HỆ THỐNG CƠ SỞ
            </h4>

            <ul className="space-y-4">
              {[
                { title: 'Trụ sở chính:', addr: '33B Trần Bình Trọng, phường Bình Lợi Trung, Tp.HCM' },
                { title: 'Cơ sở 1:', addr: '46A Trần Bình Trọng, phường Bình Lợi Trung, Tp.HCM' },
                { title: 'Cơ sở 2:', addr: '145 Nguyễn Văn Thương, phường Thạnh Mỹ Tây, Tp.HCM' },
                { title: 'Cơ sở 3:', addr: '134 Nơ Trang Long, phường Bình Thạnh, Tp.HCM' },
              ].map((loc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#f97316] mt-1 shrink-0" />
                  <div>
                    <span className="text-[#f97316] font-semibold block text-sm">
                      {loc.title}
                    </span>
                    <p className="text-gray-300 text-sm leading-snug">
                      {loc.addr}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:ml-20">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide">
              LIÊN HỆ
            </h4>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#f97316]" />
                <div className="text-white font-semibold text-sm">
                  <p>0286.286.2934</p>
                  <p>0286.286.2931</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle size={20} className="text-[#f97316]" />
                <p className="text-white font-semibold text-sm">
                  Zalo: 0968322382
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#f97316]" />
                <span className="text-white font-semibold text-sm">
                  info@gnp.edu.vn
                </span>
              </div>

            </div>
          </div>

        </div>

      

      </div>
    </footer>
  )
}