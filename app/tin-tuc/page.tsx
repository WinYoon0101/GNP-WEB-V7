"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsCarousel } from "@/components/news-carousel"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const newsCategories = [
  {
    id: "khuyen-mai",
    name: "Khuyến mãi",
    articles: [
      {
        id: 1,
        title: "Ưu đãi đặc biệt khóa học IELTS Tết 2025",
        description: "Giảm 30% học phí cho khóa IELTS đăng ký trước Tết Nguyên Đán",
        date: "2025-01-14",
        time: "09:00 AM",
        readTime: "3 phút đọc",
        category: "Khuyến mãi",
        image: "/ielts-course-promotion-discount.jpg",
      },
      {
        id: 2,
        title: "Tặng tài liệu học tập trị giá 2 triệu đồng",
        description: "Nhận ngay bộ tài liệu độc quyền khi đăng ký khóa học dài hạn",
        date: "2025-01-11",
        time: "02:00 PM",
        readTime: "3 phút đọc",
        category: "Khuyến mãi",
        image: "/free-study-materials-books.jpg",
      },
    ],
  },
  {
    id: "su-kien",
    name: "Sự kiện",
    articles: [
      {
        id: 1,
        title: "VIỆT NAM VÔ ĐỊCH!",
        description: "QUÁ TỰ HÀO RỒI VIỆT NAM ƠI!",
        date: "2025-12-19",
        time: "12:02 AM",
        readTime: "5 phút đọc",
        category: "Sự kiện",
        image: "/summer-english-class-opening-ceremony.jpg",
      },
      {
        id: 2,
        title: "Ngày hội Tiếng Anh GNP 2025",
        description: "Sự kiện giao lưu văn hóa và trải nghiệm tiếng Anh sống động cho học viên",
        date: "2025-01-10",
        time: "10:00 AM",
        readTime: "4 phút đọc",
        category: "Sự kiện",
        image: "/english-festival-event.jpg",
      },
      {
        id: 3,
        title: "KIẾN THỨC CŨNG CỐ – ĐỘT PHÁ ĐIỂM SỐ",
        description: "Những lý do bạn nên tăng tốc để đạt được điểm cao vào cuối kỳ thi",
        date: "2025-12-17",
        time: "07:15 AM",
        readTime: "6 phút đọc",
        category: "Sự kiện",
        image: "/english-festival-event.jpg",
      },
      {
        id: 4,
        title: "HỆ THỐNG GIÁO DỤC GNP ĐỒNG HÀNH CÙNG SINH VIÊN HỌC VIÊN CĂN BỘ TP. HỒ...",
        description:
          "Ngày 08/12/2025, Đại hội Chi hội KSC-LUAT nhiệm kỳ 2025 - 2026 (Chi hội thuộc Hội Sinh viên Học viên Cán bộ TP.HCM) đã diễn ra tại...",
        date: "2025-12-13",
        time: "02:55 PM",
        readTime: "5 phút đọc",
        category: "Sự kiện",
        image: "/english-festival-event.jpg",
      },
      {
        id: 5,
        title: "ĐỐI BÓNG GNP SỐI NỖI THAM GIA MÔN BÓNG ĐÁ TẠI ĐẠI HỘI TDTT LIÊN PHƯỜNG...",
        description:
          "Sáng ngày 10/12/2025, trong khuôn khổ Đại hội Thể dục Thể thao Liên phường năm 2025, đội bóng đã thống giáo dục GNP đã ra quân...",
        date: "2025-12-10",
        time: "09:39 PM",
        readTime: "4 phút đọc",
        category: "Sự kiện",
        image: "/english-festival-event.jpg",
      },
    ],
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function TinTucPage() {
  const allArticles = newsCategories.flatMap(cat => cat.articles);
  const featuredArticle = allArticles[0]; // Picking the first one as featured for now

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden text-slate-900">
      <Header />
      <main className="relative">
        {/* Modern Dark Blue Hero Section */}
        <section className="relative pt-32 pb-40 bg-slate-900 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 mb-8 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Tin tức & Sự kiện</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight uppercase leading-snug">
                Khai Phá <br /> <span className="text-primary italic mr-4 inline-block">Tri Thức</span> Mới
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                Cập nhật những chuyển động mới nhất từ GNP English Academy - nơi nhịp đập giáo dục không bao giờ ngừng lại.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured News & Content Container */}
        <div className="container mx-auto px-4 relative z-20 pt-20">

          {/* Main News Sections */}
          <div className="space-y-32 mb-32">
            {newsCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center justify-between mb-12 gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-2 h-12 bg-primary rounded-full" />
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                      {category.name}
                    </h2>
                  </div>
                  <div className="hidden md:flex h-px flex-1 bg-slate-200" />
                </div>

                <NewsCarousel
                  categoryId={category.id}
                  categoryName={category.name}
                  articles={category.articles}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
