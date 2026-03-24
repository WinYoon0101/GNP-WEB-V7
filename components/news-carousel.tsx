"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

interface Article {
  id: number
  title: string
  description: string
  date: string
  time: string
  readTime: string
  category: string
  image: string
}

interface NewsCarouselProps {
  categoryId: string
  categoryName: string
  articles: Article[]
}

export function NewsCarousel({ categoryId, categoryName, articles }: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(1) // 1 for right, -1 for left
  const [itemsPerView, setItemsPerView] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const actualItemsPerView = Math.min(itemsPerView, articles.length)
  const canScroll = articles.length > itemsPerView

  useEffect(() => {
    if (!isAutoPlaying || !canScroll) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % articles.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, articles.length, canScroll])

  const nextSlide = () => {
    if (!canScroll) return
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % articles.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    if (!canScroll) return
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)
    setIsAutoPlaying(false)
  }

  const getVisibleArticles = () => {
    const articlesToShow = []
    for (let i = 0; i < actualItemsPerView; i++) {
      articlesToShow.push(articles[(currentIndex + i) % articles.length])
    }
    return articlesToShow
  }

  const getCardWidthStyle = () => {
    if (itemsPerView === 1) return { width: "100%" }
    if (itemsPerView === 2) return { width: "calc(50% - 0.75rem)" }
    return { width: "calc(33.3333% - 1rem)" }
  }

  // Variants for smooth sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    })
  }

  return (
    <section className="mb-16 relative">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight relative">
          <span className="relative z-10">{categoryName}</span>
          <span className="absolute bottom-1 left-0 w-1/3 h-3 bg-primary/20 -z-10 rounded-full" />
        </h2>
        <Button asChild variant="ghost" className="gap-2 group text-primary hover:text-primary/80 hover:bg-primary/5 transition-all">
          <Link href={`/tin-tuc/${categoryId}`}>
            <span className="font-semibold text-sm">Xem tất cả</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      <div className="relative max-w-7xl mx-auto group/carousel" ref={containerRef}>
        {canScroll && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-md hover:bg-background shadow-lg shadow-black/5 border-muted/50 -ml-3 md:-ml-6 h-10 w-10 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            onClick={prevSlide}
            aria-label="Previous news"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}

        <div className="overflow-hidden px-4 md:px-8 -mx-4 md:-mx-8">
          <div className="flex gap-3 md:gap-6 relative min-h-[360px]">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              {getVisibleArticles().map((article, index) => (
                <motion.div
                  key={`${article.id}-${article.category}-${currentIndex + index}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  style={getCardWidthStyle()}
                  className="flex-shrink-0 relative"
                >
                  <Link href={`/tin-tuc/${categoryId}/${article.id}`} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                    <Card className="group h-full overflow-hidden border-transparent bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-2xl flex flex-col">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
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
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </motion.div>
                        <div className="absolute right-3 top-3 z-20 rounded-full bg-background/90 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-foreground shadow-sm">
                          {article.category}
                        </div>
                      </div>
                      <CardHeader className="flex-1 pb-3 px-5 pt-4">
                        <CardTitle className="line-clamp-2 text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-2 text-sm text-muted-foreground/90 font-medium">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0 pb-4 px-5 mt-auto">
                        <div className="flex items-center justify-between border-t border-border/50 pt-3">
                          <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5 text-primary/70" />
                            <span>
                              {new Date(article.date).toLocaleDateString("vi-VN")}
                            </span>
                          </div>
                          <span className="text-[10px] md:text-xs font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded-md">
                            {article.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {canScroll && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-md hover:bg-background shadow-lg shadow-black/5 border-muted/50 -mr-3 md:-mr-6 h-10 w-10 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300"
            onClick={nextSlide}
            aria-label="Next news"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>

      {canScroll && (
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${index === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              aria-label={`Go to article ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
