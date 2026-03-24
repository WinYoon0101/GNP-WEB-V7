"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsCarousel } from "@/components/news-carousel"
import { motion } from "framer-motion"

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <Header />
      <main className="py-16 md:py-24 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6 text-sm font-medium text-primary shadow-sm border border-primary/20 backdrop-blur-sm">
              Tin tức mới nhất từ GNP
            </div>
            <h1 className="mb-6 text-balance text-5xl font-extrabold md:text-7xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Tin Tức <span className="text-primary">&</span> Sự Kiện
            </h1>
            <p className="text-pretty text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Cập nhật những thông tin mới nhất về các chương trình đào tạo, sự kiện nổi bật, thành tích học viên và chương trình ưu đãi đặc biệt.
            </p>
          </motion.div>

          {/* News by Category - Animated Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24"
          >
            {newsCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <NewsCarousel
                  categoryId={category.id}
                  categoryName={category.name}
                  articles={category.articles}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
