"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    image: "/banner.jpg",
  },
  {
    image: "/hero-1.jpg",
  },
  {
    image: "/hero-2.jpg",
  },
  {
    image: "/hero-3.jpg",
  },
]

const heroContent = {
  title: "Nâng tầm tiếng Anh, ",
  highlight: "mở rộng tương lai",
  description: "Chương trình đào tạo tiếng Anh toàn diện cho mọi lứa tuổi - từ giao tiếp cơ bản đến luyện thi chứng chỉ quốc tế IELTS, TOEIC, Cambridge.",
}

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative overflow-hidden group">
      <div className="relative h-[500px] md:h-[700px] w-full transition-all duration-700">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={slide.image}
              alt={`GNP English Academy - ${heroContent.title}${heroContent.highlight}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div
                  className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                >
                  <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white mb-6 animate-fade-in">
                    🎓 Trung tâm Anh ngữ uy tín
                  </div>
                  <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl mb-6 shadow-sm">
                    {heroContent.title}<span className="text-orange-400">{heroContent.highlight}</span>
                  </h1>
                  <p className="text-pretty text-lg leading-relaxed text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
                    {heroContent.description}
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="group bg-orange-500 text-white hover:bg-orange-600 shadow-lg transition-all hover:scale-105 hover:shadow-xl font-bold px-8 py-6 text-lg"
                    >
                      <Link href="/lien-he">
                        Đăng ký học thử miễn phí
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="border-2 border-white bg-transparent text-white hover:bg-white/10 shadow-sm transition-all hover:scale-105 px-8 py-6 text-lg"
                    >
                      <Link href="/khoa-hoc">Khám phá khóa học</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-orange-500/80 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-orange-500/80 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
      <div ref={ref} className="h-px w-full" />
    </section>
  )
}
