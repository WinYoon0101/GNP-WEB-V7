"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const slides = [
  { image: "/banner.jpg" },
  { image: "/hero-1.jpg" },
  { image: "/hero-2.jpg" },
  { image: "/hero-3.jpg" },
];

const heroContent = {
  badge: "Trung tâm Anh ngữ uy tín",
  title: "Nâng tầm tiếng Anh",
  highlight: "mở rộng tương lai",
  description:
    "Chương trình đào tạo tiếng Anh toàn diện cho mọi lứa tuổi — từ giao tiếp cơ bản đến luyện thi chứng chỉ quốc tế IELTS, TOEIC, Cambridge.",
  stats: [
    { value: "2000+", label: "Học viên" },
    { value: "100%", label: "Hài lòng" },
    { value: "10+", label: "Năm kinh nghiệm" },
  ],
};

export function Hero() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch swipe for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
    setTouchStart(null);
  };

  return (
    <section
      className="relative overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── BACKGROUND SLIDER ── */}
      <div className="relative h-[100svh] min-h-[600px] max-h-[900px] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(.77,0,.175,1)] ${
              index === currentSlide
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`GNP English Academy - Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* ── GRADIENT OVERLAY (multi-layer) ── */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/85 via-slate-900/50 to-transparent" />

        {/* ── CONTENT ── */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div
                className={`transition-all duration-1000 delay-200 `}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">
                    {heroContent.badge}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] text-white mb-5 tracking-tight">
                  {heroContent.title}
                  <br />
                  <span className="relative inline-block mt-1">
                    <span className="relative z-10 text-[#F2701A]">
                      {heroContent.highlight}
                    </span>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-lg mb-8">
                  {heroContent.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 lg:mb-12">
                  <Button
                    asChild
                    size="lg"
                    className="group/btn bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 shadow-[0_8px_30px_-6px_rgba(249,115,22,0.5)] hover:shadow-[0_12px_40px_-6px_rgba(249,115,22,0.6)] transition-all duration-300 hover:-translate-y-0.5 font-bold px-8 py-6 text-base rounded-xl"
                  >
                    <Link href="/lien-he" className="flex items-center gap-2">
                      Đăng ký học thử miễn phí
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 px-8 py-6 text-base rounded-xl"
                  >
                    <Link href="/khoa-hoc" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Khám phá khóa học
                    </Link>
                  </Button>
                </div>

                {/* Stats Bar */}
                <div className="flex items-center gap-6 sm:gap-8">
                  {heroContent.stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-6 sm:gap-8"
                    >
                      {index > 0 && <div className="w-px h-10 bg-white/20" />}
                      <div className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-[11px] sm:text-xs text-white/60 font-medium uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: empty on desktop - slide images fill the background */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>

        {/* ── SLIDE INDICATORS + PROGRESS ── */}
        <div className="absolute bottom-8 left-0 right-0 z-30">
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-4">
              {/* Slide Number */}
              <span className="text-white/60 text-sm font-mono tabular-nums hidden sm:block">
                {String(currentSlide + 1).padStart(2, "0")}{" "}
                <span className="text-white/30">/</span>{" "}
                {String(slides.length).padStart(2, "0")}
              </span>

              {/* Progress Bars */}
              <div className="flex gap-2 flex-1 max-w-[200px]">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="relative h-[3px] flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer group/dot"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div
                      ref={index === currentSlide ? progressRef : null}
                      className={`absolute inset-y-0 left-0 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-orange-400 animate-hero-progress"
                          : index < currentSlide
                            ? "bg-white/60 w-full"
                            : "bg-transparent w-0"
                      }`}
                      style={
                        index === currentSlide
                          ? { animationDuration: "6s" }
                          : undefined
                      }
                    />
                    <div className="absolute inset-y-0 left-0 w-full bg-white/40 rounded-full scale-x-0 group-hover/dot:scale-x-100 transition-transform origin-left" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── DECORATIVE ELEMENTS ── */}
        {/* Floating Gradient Orb */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] z-10 pointer-events-none animate-float" />
        <div className="absolute bottom-32 left-[10%] w-56 h-56 bg-blue-500/8 rounded-full blur-[80px] z-10 pointer-events-none" />

        {/* Bottom edge gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      </div>

      {/* Intersection observer trigger */}
      <div ref={ref} className="h-px w-full" />

      {/* Required keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes hero-progress {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-hero-progress {
            animation: hero-progress linear forwards;
          }
        `,
        }}
      />
    </section>
  );
}
