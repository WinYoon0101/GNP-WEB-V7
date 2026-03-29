"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  readTime: string;
  category: string;
  image: string;
}

interface NewsCarouselProps {
  categoryId: string;
  categoryName: string;
  articles: Article[];
}

export function NewsCarousel({
  categoryId,
  categoryName,
  articles,
}: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [itemsPerView, setItemsPerView] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const actualItemsPerView = Math.min(itemsPerView, articles.length);
  const canScroll = articles.length > itemsPerView;

  useEffect(() => {
    if (!isAutoPlaying || !canScroll) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, articles.length, canScroll]);

  const nextSlide = () => {
    if (!canScroll) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % articles.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    if (!canScroll) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    setIsAutoPlaying(false);
  };

  const getVisibleArticles = () => {
    const articlesToShow = [];
    for (let i = 0; i < actualItemsPerView; i++) {
      articlesToShow.push(articles[(currentIndex + i) % articles.length]);
    }
    return articlesToShow;
  };

  const getCardWidthStyle = () => {
    if (itemsPerView === 1) return { width: "100%" };
    if (itemsPerView === 2) return { width: "calc(50% - 1rem)" };
    return { width: "calc(33.3333% - 1.5rem)" };
  };

  return (
    <section className="relative group/carousel-section">
      <div className="relative max-w-7xl mx-auto" ref={containerRef}>
        {/* Navigation Buttons - Larger and More Premium */}
        {canScroll && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-6 md:-left-12 top-[40%] -translate-y-1/2 z-30 bg-white/90 backdrop-blur-xl hover:bg-primary shadow-2xl shadow-primary/10 border-slate-100 h-14 w-14 rounded-2xl opacity-0 group-hover/carousel-section:opacity-100 transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-6 md:-right-12 top-[40%] -translate-y-1/2 z-30 bg-white/90 backdrop-blur-xl hover:bg-primary shadow-2xl shadow-primary/10 border-slate-100 h-14 w-14 rounded-2xl opacity-0 group-hover/carousel-section:opacity-100 transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        <div className="overflow-hidden pb-12">
          <div className="flex gap-4 md:gap-8 relative min-h-[480px]">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              {getVisibleArticles().map((article, index) => (
                <motion.div
                  key={`${article.id}-${article.category}-${currentIndex + index}`}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 50 : -50,
                    scale: 0.95,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -50 : 50,
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    opacity: { duration: 0.2 },
                  }}
                  style={getCardWidthStyle()}
                  className="flex-shrink-0 relative"
                >
                  <Link
                    href={`/tin-tuc/${categoryId}/${article.id}`}
                    className="block h-full cursor-default"
                  >
                    <Card className="group h-full overflow-hidden border-none bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 rounded-[2.5rem] flex flex-col group/card cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-slate-900/0 transition-colors duration-500" />
                        <div className="absolute left-6 top-6 z-20">
                          <span className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-primary/20 bg-primary/90 backdrop-blur-sm">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <CardHeader className="flex-1 pb-4 px-8 pt-8">
                        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(article.date).toLocaleDateString("vi-VN")}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl md:text-2xl font-black leading-tight text-slate-900 group-hover/card:text-primary transition-colors duration-300 tracking-tight">
                          {article.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pt-0 pb-8 px-8 mt-auto">
                        <p className="line-clamp-2 text-slate-500 mb-8 font-medium italic">
                          "{article.description}"
                        </p>
                        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                          <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/card:bg-primary transition-colors duration-500">
                            <ArrowRight className="h-5 w-5 text-slate-400 group-hover/card:text-white transition-colors" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Improved Progress Dots */}
        {canScroll && (
          <div className="flex justify-center gap-3 mt-4">
            {articles.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-700 ease-[0.16,1,0.3,1] ${
                  index === currentIndex
                    ? "w-12 bg-primary shadow-lg shadow-primary/20"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to article ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
