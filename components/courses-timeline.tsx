"use client"

import Link from "next/link"
import React from "react"
import { cn } from "@/lib/utils"

interface Course {
  id: string
  title: string
  ageRange: string
  href: string
  icon: string
  gradient: string
  shadow: string
  ring: string
  iconColor: string
  features: string[]
  accentColor: string
  delay: string
}

const courses: Course[] = [
  {
    id: "explorer",
    title: "EXPLORER",
    ageRange: "3.5 - 6 tuổi",
    href: "/khoa-hoc/mau-giao",
    icon: "⭐",
    gradient: "from-orange-400 to-orange-600",
    shadow: "group-hover:shadow-orange-500/30",
    ring: "group-hover:ring-orange-200",
    iconColor: "text-orange-100",
    accentColor: "text-orange-500",
    delay: "0s",
    features: [
      "Làm quen tiếng Anh tự nhiên",
      "Học qua trò chơi & bài hát",
      "Phát triển tư duy ngôn ngữ"
    ]
  },
  {
    id: "innovator",
    title: "INNOVATOR",
    ageRange: "6 - 10 tuổi",
    href: "/khoa-hoc/mua-he",
    icon: "🎨",
    gradient: "from-pink-500 to-rose-500",
    shadow: "group-hover:shadow-pink-500/30",
    ring: "group-hover:ring-pink-200",
    iconColor: "text-pink-100",
    accentColor: "text-pink-500",
    delay: "0.5s",
    features: [
      "Xây dựng nền tảng ngữ pháp",
      "Giao tiếp phản xạ tự tin",
      "Chuẩn đầu ra Cambridge"
    ]
  },
  {
    id: "leader",
    title: "LEADER",
    ageRange: "11 - 15 tuổi",
    href: "/khoa-hoc/thieu-nien",
    icon: "⚡",
    gradient: "from-blue-600 to-indigo-600",
    shadow: "group-hover:shadow-blue-500/30",
    ring: "group-hover:ring-blue-200",
    iconColor: "text-blue-100",
    accentColor: "text-blue-600",
    delay: "1s",
    features: [
      "Tư duy phản biện sắc bén",
      "Kỹ năng thuyết trình hùng biện",
      "Chinh phục chứng chỉ KET/PET"
    ]
  },
  {
    id: "ielts",
    title: "IELTS ACHIEVER",
    ageRange: "Từ 15 tuổi",
    href: "/khoa-hoc/ielts",
    icon: "🚀",
    gradient: "from-red-600 to-orange-600",
    shadow: "group-hover:shadow-red-500/30",
    ring: "group-hover:ring-red-200",
    iconColor: "text-red-100",
    accentColor: "text-red-600",
    delay: "1.5s",
    features: [
      "Chiến thuật làm bài chuyên sâu",
      "Lộ trình cá nhân hóa",
      "Cam kết đầu ra bằng văn bản"
    ]
  },
  {
    id: "communicator",
    title: "COMMUNICATOR",
    ageRange: "Sinh viên + Đi làm",
    href: "/khoa-hoc/communicator",
    icon: "🎓",
    gradient: "from-slate-700 to-slate-900",
    shadow: "group-hover:shadow-slate-500/30",
    ring: "group-hover:ring-slate-200",
    iconColor: "text-slate-100",
    accentColor: "text-slate-700",
    delay: "2s",
    features: [
      "Tiếng Anh giao tiếp công sở",
      "Viết Email & Báo cáo chuẩn",
      "Mở rộng cơ hội thăng tiến"
    ]
  },
]

export function CoursesTimeline() {
  return (
    <div className="w-full relative">
      <div className="relative mx-auto max-w-7xl px-4 md:px-0">
        
        {/* Layout Track */}
        <div className={cn(
          "flex flex-col gap-6",
          "lg:flex-row lg:justify-between lg:items-start lg:gap-0" 
        )}>
          {courses.map((course, index) => {
            const mobileAlign = index % 2 === 0 ? "self-start" : "self-end"

            // Desktop Staircase Steps
            const desktopMarginTop = [
              "lg:mt-0",
              "lg:mt-24",
              "lg:mt-48",
              "lg:mt-72",
              "lg:mt-96",
            ][index] || "lg:mt-0"

            return (
              <div
                key={course.id}
                className={cn(
                  "relative transition-all duration-500",
                  
                  // Widths
                  "w-[290px] md:w-[340px]", 
                  "lg:w-[19%]",
                  
                  mobileAlign,
                  "lg:self-auto",
                  desktopMarginTop,
                  
                  "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                )}
                style={{
                   animationDelay: `${index * 150}ms`
                }}
              >
                <Link href={course.href} className="block group w-full h-full perspective-[1000px]">
                  <div
                    className={cn(
                      // Card Base
                      "bg-white rounded-[2rem] overflow-hidden relative flex flex-col h-full",
                      "shadow-lg", 
                      
                      // Hover Effects
                      "transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)", 
                      "group-hover:-translate-y-3 group-hover:scale-[1.03] group-hover:shadow-2xl", 
                      course.shadow, 
                      
                      "ring-1 ring-transparent",
                      course.ring
                    )}
                  >
                    
                    {/* ANIMATED SHINE EFFECT */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out_forwards] z-50 pointer-events-none">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </div>

                    {/* Header with Background Pattern */}
                    <div className={cn(
                      "bg-gradient-to-br relative overflow-hidden flex-shrink-0",
                      "p-6 lg:p-5 xl:p-6",
                      course.gradient
                    )}>
                      
                      {/* Floating Icon */}
                      <div className="z-10 relative flex flex-col items-center text-center">
                         <span className={cn(
                           "block mb-2 transition-transform duration-500 ease-in-out",
                           "group-hover:scale-110 group-hover:-rotate-12 group-hover:drop-shadow-lg",
                           "text-4xl lg:text-3xl xl:text-5xl",
                           course.iconColor,
                           "drop-shadow-sm",
                           // ANIMATION: Constant gentle bobbing
                           "animate-[float_4s_ease-in-out_infinite]"
                         )} style={{ animationDelay: course.delay }}>
                            {course.icon}
                         </span>
                         
                         <h3 className="font-extrabold text-white uppercase tracking-wider leading-tight w-full
                           text-lg lg:text-sm xl:text-lg drop-shadow-md">
                            {course.title}
                          </h3>
                      </div>

                      {/* Animated Deco Circles */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-white opacity-10 rounded-full blur-xl animate-[pulse-slow_4s_ease-in-out_infinite]" />
                      <div className="absolute top-1/2 -left-4 w-12 h-12 bg-white opacity-10 rounded-full blur-md animate-[pulse-slow_5s_ease-in-out_infinite_1s]" />
                    </div>

                    {/* Body - ENRICHED CONTENT */}
                    <div className="bg-white flex flex-col flex-1 p-5 lg:p-4 xl:p-6 relative z-10">
                      
                      {/* Age Tag */}
                      <div className="text-center mb-4 border-b border-slate-100 pb-3">
                         <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] lg:text-[9px] xl:text-[10px] mb-1">
                          Dành cho
                        </p>
                        <p className="text-slate-800 font-bold text-base lg:text-sm xl:text-base">
                          {course.ageRange}
                        </p>
                      </div>

                      {/* Feature List */}
                      <ul className="space-y-2 mb-6 flex-1">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm lg:text-[11px] xl:text-sm leading-tight group-hover:text-slate-900 transition-colors">
                            <svg 
                                className={cn("w-4 h-4 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110", course.accentColor)} 
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <div className={cn(
                        "mt-auto flex items-center justify-center gap-1 font-bold text-sm uppercase tracking-wide transition-all group-hover:gap-2",
                        course.accentColor
                      )}>
                         Xem chi tiết
                         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                           <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                         </svg>
                      </div>

                    </div>
                    
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
