
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

const allNews = {
  "khuyen-mai": {
    name: "Khuyến mãi",
    articles: [
      {
        id: 1,
        title: "Ưu đãi đặc biệt khóa học IELTS Tết 2025",
        description:
          "Giảm 30% học phí cho khóa IELTS đăng ký trước Tết Nguyên Đán",
        date: "2025-01-14",
        time: "09:00 AM",
        image: "/ielts-course-promotion-discount.jpg",
      },
      {
        id: 2,
        title: "Tặng tài liệu học tập trị giá 2 triệu đồng",
        description:
          "Nhận ngay bộ tài liệu độc quyền khi đăng ký khóa học dài hạn",
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
        description:
          "Sự kiện giao lưu văn hóa và trải nghiệm tiếng Anh sống động cho học viên",
        date: "2025-01-10",
        time: "10:00 AM",
        image: "/english-festival-event.jpg",
      },
    ],
  },
}

// QUAN TRỌNG
export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(allNews).map((category) => ({
    category,
  }))
}

export default function CategoryNewsPage({
  params,
}: {
  params: {
    category: string
  }
}) {
  const { category } = params

  const categoryData =
    allNews[category as keyof typeof allNews]

  if (!categoryData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <Link href="/tin-tuc">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Quay lại trang tin tức</span>
              </Link>
            </Button>
          </div>

          <div className="mx-auto mb-16 max-w-3xl text-center fade-in-up">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6 text-sm font-medium text-primary shadow-sm border border-primary/20 backdrop-blur-sm">
              Danh mục tin tức
            </div>

            <h1 className="mb-6 text-4xl font-extrabold md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {categoryData.name}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Tất cả bài viết thuộc danh mục{" "}
              {categoryData.name.toLowerCase()}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categoryData.articles.map((article) => (
              <div key={article.id} className="fade-in-up">
                <Link
                  href={`/tin-tuc/${category}/${article.id}`}
                  className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                >
                  <Card className="h-full flex flex-col overflow-hidden border-transparent bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-2xl">

                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
                      <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
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
                            {new Date(article.date).toLocaleDateString("vi-VN")}
                          </span>
                        </div>

                        <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}