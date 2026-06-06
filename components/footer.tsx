'use client'

import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function Footer({ branches }: { branches: any[] }) {
  return (
    <footer id="contact" className="bg-gradient-to-r from-[#0a192f] via-[#112240] to-[#0a192f] text-gray-400 py-10 sm:py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div className="flex flex-col">
          <div className="relative w-20 h-20 bg-[#f97316] p-2 flex items-center justify-center mb-6 rounded-sm">
            <Image src="/images/gnp-logo.png" alt="GNP English Academy" fill className="object-contain" />
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
            Hệ thống đào tạo Tiếng Anh chuẩn Quốc tế, tiên phong ứng dụng công nghệ hiện đại.
          </p>
        </div>

        {/* Dynamic Locations */}
        <div>
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">Hệ thống cơ sở</h4>
          <ul className="space-y-4">
            {branches.map((loc) => (
              <li key={loc.id} className="flex items-start gap-3">
                <MapPin size={18} className="text-[#f97316] mt-1 shrink-0" />
                <div>
                  <span className="text-[#f97316] font-semibold block text-sm">{loc.title}</span>
                  <p className="text-gray-300 text-sm leading-snug">{loc.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:ml-20">
          <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase">LIÊN HỆ</h4>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-[#f97316]" />
              <p className="text-white font-semibold text-sm">083 999 0997</p>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={20} className="text-[#f97316]" />
              <p className="text-white font-semibold text-sm">Zalo: 0839990997</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-[#f97316]" />
              <span className="text-white font-semibold text-sm">info@gnp.edu.vn</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}