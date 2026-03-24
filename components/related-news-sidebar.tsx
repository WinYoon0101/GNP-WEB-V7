"use client"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface Article {
  id: number
  title: string
  date: string
  image: string
  category: string
}

interface RelatedNewsSidebarProps {
  articles: Article[]
  currentArticleId: number
}

function RelatedNewsSidebar({ articles, currentArticleId }: RelatedNewsSidebarProps) {
  const relatedArticles = articles
    .filter((article) => article.id !== currentArticleId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10)

  if (relatedArticles.length === 0) {
    return null
  }

  return (
    <aside className="hidden lg:block lg:w-80">
      <div className="sticky top-24 space-y-4">
        <h3 className="text-lg font-bold text-foreground">Tin tức khác</h3>
        <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
          {relatedArticles.map((article) => (
            <Link
              key={`${article.category}-${article.id}`}
              href={`/tin-tuc/${article.category}/${article.id}`}
              className="block"
            >
              <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                <div className="flex gap-3 p-3">
                  <div className="relative h-24 w-28 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <span className="inline-block mb-1 text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <h4 className="line-clamp-3 text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default RelatedNewsSidebar
