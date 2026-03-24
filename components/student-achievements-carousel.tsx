"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const achievements = [
  {
    name: "Nguyễn Minh Anh",
    achievement: "IELTS 7.5",
    image: "/vinh_danh_3.jpg",
  },
  {
    name: "Nguyễn Hoàng Anh",
    achievement: "TOEIC 990/990",
    image: "/vinh_danh_2.jpg",
  },
  {
    name: "Lê Thị Hương",
    achievement: "Cambridge C2",
    image: "/vinh_danh_1.jpg",
  },
  {
    name: "Võ Anh Trung",
    achievement: "Cambridge Flyers 13/15",
    image: "/vinh_danh_5.jpg",
  },
  {
    name: "Đỗ Phạm Bình Minh",
    achievement: "Cambridge Movers 15/15",
    image: "/vinh_danh_6.jpg",
  },
];

export function StudentAchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length,
    );
    setIsAutoPlaying(false);
  };

  const getVisibleMembers = () => {
    const members = [];
    const count = isMobile ? 1 : 3; // Show 1 on mobile, 3 on desktop
    for (let i = 0; i < count; i++) {
      members.push(achievements[(currentIndex + i) % achievements.length]);
    }
    return members;
  };

  const cardWidth = isMobile ? "w-full" : "w-[calc(33.333%-1rem)]";

  return (
    <section className="relative w-full bg-slate-50 font-sans mt-24">
      {/* Top Matching Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[60px] md:h-[120px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C320,-60 420,120 1440,60 L1440,120 L0,120 Z"
            className="fill-[#F2701A]" /* Match section top gradient color */
          ></path>
        </svg>
      </div>

      <div className="relative py-16 md:py-24 bg-[#F2701A] overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/10 opacity-10 rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          {/* Header Layout Similar to Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 md:mb-24 px-4 lg:px-12">
            {/* Left Title Area */}
            <div className="flex-1 text-center lg:text-left space-y-4 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm mb-2">
                BẢNG VÀNG THÀNH TÍCH
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white uppercase leading-[1.2] drop-shadow-lg">
                VINH DANH GƯƠNG MẶT
                <br />
                <span className="text-[#ffe066]">XUẤT SẮC NHẤT TẠI GNP</span>
              </h2>
            </div>

            {/* Right Achievement Badge */}
            <div className="flex flex-col items-center justify-center shrink-0 w-full lg:w-auto">
              <div className="relative flex items-center justify-center">
                <Trophy className="absolute top-3 right-0 lg:-right-7 text-white/30 w-24 h-24 lg:w-34 lg:h-34 scale-x-[-1]" />
                <div className="text-center relative z-10 px-4 lg:px-8 lg:translate-x-[-100px]">
                  <div className="text-6xl md:text-8xl font-black text-white relative pr-6 lg:pr-0">
                    90%
                  </div>
                </div>
              </div>
              <p className="text-white text-sm md:text-base font-bold uppercase tracking-widest mt-2 max-w-[280px] lg:max-w-[240px] text-center drop-shadow-md lg:translate-x-[-100px] leading-relaxed">
                HỌC SINH ĐẠT KẾT QUẢ ĐẦU RA CAO NHẤT
              </p>
            </div>
          </div>

          {/* Carousel Area */}
          <div className="relative max-w-7xl mx-auto px-2 md:px-12 mt-8">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-[-10px] md:left-0 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 text-white border border-white/20 rounded-full h-10 w-10 md:h-14 md:w-14 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
            </Button>

            <div className="overflow-hidden" ref={carouselRef}>
              <div className="flex gap-4 md:gap-6 justify-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                {getVisibleMembers().map((student, index) => (
                  <div
                    key={`${student.name}-${index}`}
                    className={`flex-shrink-0 ${cardWidth} transition-all duration-700`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 md:p-4 rounded-xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] group h-full">
                      <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-lg md:rounded-2xl overflow-hidden shadow-inner bg-black/10">
                        <Image
                          src={student.image || "/placeholder.svg"}
                          alt={student.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                        />
                        {/* Solid Overlay for Text Readability */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/60 opacity-80" />

                        {/* Title Overlay inside card */}
                        <div className="absolute bottom-4 left-0 w-full text-center px-2">
                          <div className="bg-white text-[#F2701A] text-[10px] md:text-sm font-bold uppercase py-1 px-3 md:py-1.5 md:px-4 rounded-full inline-block mb-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform">
                            {student.achievement}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 pb-2 text-center relative z-10">
                        <h4 className="font-bold text-base md:text-xl text-white mb-1 leading-snug drop-shadow-md">
                          {student.name}
                        </h4>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-[-10px] md:right-0 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 text-white border border-white/20 rounded-full h-10 w-10 md:h-14 md:w-14 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12 relative z-20">
            {achievements.map((_, index) => (
              <button
                key={index}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex
                    ? "w-10 md:w-12 bg-white"
                    : "w-2.5 md:w-3 bg-white/40 hover:bg-white/70"
                  }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Matching Wave (Flipped vertically to match top curve identically) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[99%]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[60px] md:h-[120px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C320,-60 420,120 1440,60 L1440,120 L0,120 Z"
            className="fill-[#d6550f]" /* Match section bottom gradient color */
            transform="scale(1, -1) translate(0, -120)"
          ></path>
        </svg>
      </div>
    </section>
  );
}
