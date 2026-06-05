import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { AnimatedArticleView } from "@/components/animated-article-view"

export const dynamicParams = false

// DATA
const articles = [
  {
    id: "1",
    category: "su-kien",
    title: "Lễ khai giảng khóa học Mùa Hè 2025",
    date: "2025-01-15",
    readTime: "5 phút đọc",
    image: "/summer-english-class-opening-ceremony.jpg",
    content: `
      <p>Ngày 15/01/2025, GNP English Academy đã tổ chức Lễ khai giảng khóa học tiếng Anh Mùa Hè 2025 với sự tham gia của hơn 200 học viên và phụ huynh.</p>

      <h2>Chương trình đặc sắc</h2>

      <p>Buổi lễ khai giảng diễn ra trong không khí vui tươi với nhiều hoạt động:</p>

      <ul>
        <li>Tiết mục văn nghệ</li>
        <li>Trò chơi tiếng Anh</li>
        <li>Giao lưu học viên</li>
      </ul>
    `,
  },

  {
    id: "3",
    category: "thanh-tich",
    title: "Học viên GNP đạt IELTS 8.5 sau 6 tháng học",
    date: "2025-01-12",
    readTime: "6 phút đọc",
    image: "/student-achievement-ielts-certificate.jpg",
    content: `
      <p>
        Chúng tôi tự hào chia sẻ thành tích xuất sắc của học viên Nguyễn Văn A.
      </p>
    `,
  },

  {
    id: "5",
    category: "khuyen-mai",
    title: "Ưu đãi đặc biệt khóa học IELTS Tết 2025",
    date: "2025-01-14",
    readTime: "3 phút đọc",
    image: "/ielts-course-promotion-discount.jpg",
    content: `
      <p>
        Chào mừng Tết Nguyên Đán 2025, GNP English Academy triển khai chương trình ưu đãi đặc biệt.
      </p>
    `,
  },

  {
    id: "7",
    category: "phuong-phap-hoc",
    title: "5 bí quyết học từ vựng hiệu quả",
    date: "2025-01-13",
    readTime: "7 phút đọc",
    image: "/vocabulary-learning-methods.jpg",
    content: `
      <p>
        Học từ vựng là một trong những thử thách lớn nhất khi học tiếng Anh.
      </p>
    `,
  },
]

// BUILD STATIC PATHS
export async function generateStaticParams() {
  return articles.map((article) => ({
    category: article.category,
    id: article.id,
  }))
}

export default function ArticlePage({
  params,
}: {
  params: {
    category: string
    id: string
  }
}) {
  const { category, id } = params

  const article = articles.find(
    (item) => item.id === id && item.category === category,
  )

  if (!article) {
    notFound()
  }

  const allArticles = articles.map((item) => ({
    id: item.id,
    title: item.title,
    date: item.date,
    image: item.image,
    category: item.category,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      <Header />

      <main className="py-8 md:py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />

          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-blue-500/5 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 mb-8">
          <Button
            asChild
            variant="ghost"
            className="gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Link href={`/tin-tuc/${category}`}>
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

              <span>Quay lại trang danh mục</span>
            </Link>
          </Button>
        </div>

        <AnimatedArticleView
          article={article}
          allArticles={allArticles}
          id={id}
        />
      </main>

      <Footer />
    </div>
  )
}