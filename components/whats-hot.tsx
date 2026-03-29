"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface HotArticle {
  id: number
  title: string
  description: string
  date: string
  category: string
  categorySlug: string
  image: string
}

const hotArticles: HotArticle[] = [
  {
    id: 1,
    title: "ƯU ĐÃI KHAI TRƯƠNG – GIẢM ĐẾN 25% HỌC PHÍ",
    description:
      "GNP English Academy dành tặng ưu đãi đặc biệt nhân dịp khai trương: Giảm đến 25% học phí khi đăng ký khóa học từ 6 tháng. Tặng 01 lượt quay may mắn – 100% có quà!",
    date: "2026-03-25",
    category: "Khuyến mãi",
    categorySlug: "khuyen-mai",
    image: "/gnp-english-course-sale-offer.jpg",
  },
  {
    id: 2,
    title: "KIẾN THỨC CŨNG CỐ – ĐỘT PHÁ ĐIỂM SỐ",
    description:
      "Những lý do bạn nên tăng tốc để đạt được điểm cao vào cuối kỳ thi. Đăng ký ngay khóa luyện thi cuối kỳ tại GNP English Academy!",
    date: "2026-03-20",
    category: "Sự kiện",
    categorySlug: "su-kien",
    image: "/ielts-test-preparation.jpg",
  },
  {
    id: 3,
    title: "NGÀY HỘI TIẾNG ANH GNP 2026 – TRẢI NGHIỆM ĐỈNH CAO",
    description:
      "Sự kiện giao lưu văn hóa và trải nghiệm tiếng Anh sống động cho học viên. Tham gia các hoạt động phong phú và nhận quà hấp dẫn!",
    date: "2026-03-15",
    category: "Sự kiện",
    categorySlug: "su-kien",
    image: "/english-festival-event.jpg",
  },
  {
    id: 4,
    title: "KHÓA HỌC IELTS MÙA HÈ 2026 – ĐĂNG KÝ SỚM GIẢM 20%",
    description:
      "Chuẩn bị cho kỳ thi IELTS với đội ngũ giáo viên chuyên nghiệp. Ưu đãi đặc biệt cho học viên đăng ký sớm trước 30/04/2026.",
    date: "2026-03-10",
    category: "Khuyến mãi",
    categorySlug: "khuyen-mai",
    image: "/ielts-course-promotion-discount.jpg",
  },
]

export function WhatsHot() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % hotArticles.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Restart auto-play after 10s
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const article = hotArticles[currentIndex]

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-primary tracking-tight leading-tight">
            GNP English Academy
            <br className="hidden sm:block" />
            <span className="inline sm:block"> có gì HOT?</span>
          </h2>
          <Link
            href="/tin-tuc/su-kien"
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-800 text-slate-800 font-bold text-sm hover:bg-slate-800 hover:text-white transition-all duration-300 group whitespace-nowrap"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100/80">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
  key={currentIndex}
  custom={direction}

  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.25}
  dragMomentum={false}

  // 👇 QUAN TRỌNG: kéo bằng chuột luôn
  dragListener={true}

  onDragEnd={(e, info) => {
    const threshold = 100

    if (info.offset.x < -threshold) {
      // kéo sang trái → next
      nextSlide()
    } else if (info.offset.x > threshold) {
      // kéo sang phải → prev
      setDirection(-1)
      setCurrentIndex((prev) =>
        prev === 0 ? hotArticles.length - 1 : prev - 1
      )
    }
  }}

  initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 25,
  }}

  // 👇 UX xịn
  className="flex flex-col md:flex-row cursor-grab active:cursor-grabbing select-none"
>
              {/* Text Content */}
              <div className="select-none flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
                <span className="text-primary font-semibold text-sm mb-4 block tracking-wide">
                  {formatDate(article.date)}
                </span>

                <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-extrabold text-slate-900 leading-snug mb-5 tracking-tight">
                  {article.title}
                </h3>

                <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-8 line-clamp-3">
                  {article.description}
                </p>

                <Link
                  href={`/tin-tuc/${article.categorySlug}/${article.id}`}
                  className="inline-flex items-center gap-2 w-fit px-7 py-3.5 bg-primary text-white font-bold text-sm rounded-full hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
                >
                  Tìm hiểu thêm
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Image */}
              <div className="relative w-full md:w-[50%] lg:w-[48%] aspect-[4/3] md:aspect-auto md:min-h-[380px] lg:min-h-[420px] order-1 md:order-2">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  draggable={false}
                  priority
                />
                {/* Category Badge */}
                <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10">
                  <span className="bg-primary/90 backdrop-blur-sm text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-primary/20">
                    {article.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {hotArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] ${
                index === currentIndex
                  ? "w-10 h-3 bg-primary shadow-md shadow-primary/30"
                  : "w-3 h-3 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Xem bài viết ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile: Xem tất cả button */}
        <div className="flex sm:hidden justify-center mt-8">
          <Link
            href="/tin-tuc/su-kien"
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-800 text-slate-800 font-bold text-sm hover:bg-slate-800 hover:text-white transition-all duration-300 group"
          >
            Xem tất cả
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
