"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/banner.jpg"
          alt="GNP English Academy - Nâng tầm tiếng Anh, mở rộng tương lai"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div
              ref={ref}
              className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6">
                🎓 Trung tâm Anh ngữ uy tín
              </div>
              <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl mb-6">
                Nâng tầm tiếng Anh, <span className="text-orange-400">mở rộng tương lai</span>
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-white/90 mb-8 max-w-2xl mx-auto">
                Chương trình đào tạo tiếng Anh toàn diện cho mọi lứa tuổi - từ giao tiếp cơ bản đến luyện thi chứng chỉ
                quốc tế IELTS, TOEIC, Cambridge.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Button
                  asChild
                  size="lg"
                  className="group bg-orange-500 text-white hover:bg-orange-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl font-bold"
                >
                  <Link href="/lien-he">
                    Đăng ký học thử miễn phí
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 shadow-sm transition-all hover:scale-105"
                >
                  <Link href="/khoa-hoc">Khám phá khóa học</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
