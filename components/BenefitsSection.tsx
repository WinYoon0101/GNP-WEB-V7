'use client'


import Image from 'next/image'
import { Handshake } from 'lucide-react'

const features = [
  {
    icon: (
      <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    text: 'Nhiều năm trong kinh nghiệm giảng dạy',
  },
  {
    icon: (
      <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    text: (
      <>
        Giảng viên suất sắc nhất đều đạt <br className="hidden sm:block" />
        <strong className="text-black font-bold">TOEIC 950+, IELTS 8.5+</strong> trong các lần thi thực tế
      </>
    ),
  },
  {
    icon: (
      <svg className="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    text: 'Đầy đủ chứng chỉ sư phạm',
  },
]

export function BenefitsSection() {
  return (
    <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-10 right-[10%] w-16 h-16 md:w-24 md:h-24 opacity-80 z-20 mt-5 md:mt-0">
  <Image
    src="/graduation.png"
    alt="education decoration"
    fill
    className="object-contain"
  />
</div>
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">

        {/* Main Content Box */}
        <div className="bg-orange-50/50 w-full rounded-2xl relative p-5 sm:p-12 lg:p-16 mb-16 sm:mb-24 shadow-sm border border-orange-100">

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
            {/* Left Side: Text and Features */}
            <div className="animate-fade-in-up">
              <h2 className="text-xl sm:text-4xl lg:text-5xl font-black text-[#1a365d] mb-6 sm:mb-8 lg:mb-10 leading-tight uppercase tracking-wide drop-shadow-sm sm:w-max sm:pr-12">
                ĐỘI NGŨ GIÁO VIÊN<br />
                CHUYÊN NGHIỆP
              </h2>

              <div className="space-y-5 sm:space-y-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 sm:gap-6 group">
                    <div className="flex-shrink-0 relative">
                      {/* Outer border container */}
                      <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl border-[2px] sm:border-[3px] border-blue-600 p-1 sm:p-1.5 transition-transform duration-300 group-hover:scale-110">
                        {/* Inner filled container */}
                        <div className="w-full h-full bg-[#f97316] rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-4 shadow-inner shadow-black/20">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-lg lg:text-xl font-medium leading-snug">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Image */}
            <div
              className="relative aspect-[4/3] sm:aspect-video w-full animate-fade-in-up group"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-orange-400 rounded-2xl sm:rounded-[2rem] blur-[40px] sm:blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
              
              {/* Floating elements - hidden on small mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-40 animate-pulse" />
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-16 h-16 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Floating Sparkles - hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 left-1/4 w-8 h-8 text-orange-400 opacity-60 animate-bounce" style={{ animationDuration: '3s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
              </div>
              <div className="hidden sm:block absolute bottom-1/4 -right-8 w-6 h-6 text-blue-500 opacity-50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
              </div>

              {/* Offset border - smaller on mobile */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-[2rem] border-[3px] sm:border-[4px] border-[#f97316] translate-x-2 translate-y-2 sm:translate-x-6 sm:translate-y-6 z-0 opacity-80" />

              <div className="relative w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)] sm:shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-10 group-hover:scale-[1.02] transition-transform duration-500">
                          <Image
  src="/giao_vien.png"
  alt="Đội ngũ giáo viên GNP ENGLISH ACADEMY"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
  priority
/>
              </div>
            </div>
          </div>

          {/* Bottom Commitment Banner (Overlapping) */}
          <div className="absolute bottom-[-40px] sm:bottom-[-110px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[80%] max-w-[800px] z-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#1e40af] rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 flex items-center justify-center gap-3 sm:gap-6 lg:gap-10 shadow-2xl shadow-blue-500/30 border border-blue-400">

              {/* Decorative Icon inside banner */}
              <div className="flex-shrink-0">
                <Handshake className="w-10 h-10 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white" />
              </div>

              <div className="text-left w-full sm:w-auto">
                <h3 className="text-white text-sm sm:text-2xl lg:text-3xl font-black uppercase tracking-wide leading-tight drop-shadow-md">
                  TRUNG TÂM CAM KẾT <br className="hidden sm:block" />
                  ĐẦU RA BẰNG VĂN BẢN
                </h3>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
