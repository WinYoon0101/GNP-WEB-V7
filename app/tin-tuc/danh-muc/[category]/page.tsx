"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

// Sample data (in real app, this would come from database)
const allNews = {
  "khuyen-mai": {
    name: "Khuyến mãi",
    articles: [
      {
        id: 1,
        title: "Ưu đãi đặc biệt khóa học IELTS Tết 2025",
        description: "Giảm 30% học phí cho khóa IELTS đăng ký trước Tết Nguyên Đán",
        date: "2025-01-14",
        time: "09:00 AM",
        image: "/ielts-course-promotion-discount.jpg",
      },
      {
        id: 2,
        title: "Tặng tài liệu học tập trị giá 2 triệu đồng",
        description: "Nhận ngay bộ tài liệu độc quyền khi đăng ký khóa học dài hạn",
        date: "2025-01-11",
        time: "02:00 PM",
        image: "/free-study-materials-books.jpg",
      },
    ],
  },
  "su-kien": {
    name: "Sự kiện",
    articles: [
      {
        id: 1,
        title: "VIỆT NAM VÔ ĐỊCH!",
        description: "QUÁ TỰ HÀO RỒI VIỆT NAM ƠI!",
        date: "2025-12-19",
        time: "12:02 AM",
        image: "/summer-english-class-opening-ceremony.jpg",
      },
      {
        id: 2,
        title: "Ngày hội Tiếng Anh GNP 2025",
        description: "Sự kiện giao lưu văn hóa và trải nghiệm tiếng Anh sống động cho học viên",
        date: "2025-01-10",
        time: "10:00 AM",
        image: "/english-festival-event.jpg",
      },
      {
        id: 3,
        title: "KIẾN THỨC CŨNG CỐ – ĐỘT PHÁ ĐIỂM SỐ",
        description: "Những lý do bạn nên tăng tốc để đạt được điểm cao vào cuối kỳ thi",
        date: "2025-12-17",
        time: "07:15 AM",
        image: "/english-festival-event.jpg",
      },
      {
        id: 4,
        title: "HỆ THỐNG GIÁO DỤC GNP ĐỒNG HÀNH CÙNG SINH VIÊN HỌC VIÊN CĂN BỘ TP. HỒ...",
        description:
          "Ngày 08/12/2025, Đại hội Chi hội KSC-LUAT nhiệm kỳ 2025 - 2026 (Chi hội thuộc Hội Sinh viên Học viên Cán bộ TP.HCM) đã diễn ra tại...",
        date: "2025-12-13",
        time: "02:55 PM",
        image: "/english-festival-event.jpg",
      },
      {
        id: 5,
        title: "ĐỐI BÓNG GNP SỐI NỖI THAM GIA MÔN BÓNG ĐÁ TẠI ĐẠI HỘI TDTT LIÊN PHƯỜNG...",
        description:
          "Sáng ngày 10/12/2025, trong khuôn khổ Đại hội Thể dục Thể thao Liên phường năm 2025, đội bóng đã thống giáo dục GNP đã ra quân...",
        date: "2025-12-10",
        time: "09:39 PM",
        image: "/english-festival-event.jpg",
      },
    ],
  },
}

export default function CategoryNewsPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = React.use(params)
  const categoryData = allNews[resolvedParams.category as keyof typeof allNews]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <Link href="/tin-tuc">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Quay lại trang tin tức</span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6 text-sm font-medium text-primary shadow-sm border border-primary/20 backdrop-blur-sm">
              Danh mục tin tức
            </div>
            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {categoryData.name}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Tất cả bài viết và thông tin mới nhất thuộc danh mục {categoryData.name.toLowerCase()}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {categoryData.articles.map((article) => (
              <motion.div
                key={article.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                <Link href={`/tin-tuc/${resolvedParams.category}/${article.id}`} className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                  <Card className="h-full flex flex-col overflow-hidden border-transparent bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-2xl">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full"
                      >
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex-1">
                        <h3 className="mb-3 line-clamp-2 text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="mb-6 line-clamp-3 text-base text-muted-foreground/90 font-medium">
                          {article.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-border/50 pt-4 mt-auto">
                        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                          <Calendar className="h-4 w-4 text-primary/70" />
                          <span>
                            {new Date(article.date).toLocaleDateString("vi-VN")} {article.time && `- ${article.time}`}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16 flex justify-center items-center gap-2"
          >
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all">1</button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted font-medium transition-all">2</button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted font-medium transition-all">3</button>
            <span className="px-2 text-muted-foreground">...</span>
            <button className="flex items-center justify-center px-4 h-10 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-foreground hover:bg-muted font-medium transition-all group">
              Trang sau <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
