"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate as fmAnimate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { teamMembers } from "@/lib/constants";

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(5);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(2);
      else if (window.innerWidth < 768) setCardsToShow(3);
      else if (window.innerWidth < 1024) setCardsToShow(4);
      else setCardsToShow(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentCardsToShow = mounted ? cardsToShow : 5;
  const maxIndex = Math.max(0, teamMembers.length - currentCardsToShow);
  const gap = 16;

  // Tính toán vị trí x dựa trên container width
  const getSlideOffset = useCallback(() => {
    if (!trackRef.current) return 0;
    const containerWidth = trackRef.current.parentElement?.clientWidth || 0;
    const cardWidth =
      (containerWidth - gap * (currentCardsToShow - 1)) / currentCardsToShow;
    return cardWidth + gap;
  }, [currentCardsToShow, gap]);

  // Animate khi index thay đổi
  useEffect(() => {
    const offset = getSlideOffset();
    fmAnimate(x, -currentIndex * offset, {
      type: "spring",
      stiffness: 300,
      damping: 35,
      mass: 0.8,
    });
  }, [currentIndex, currentCardsToShow, getSlideOffset, x]);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;

    const interval = setInterval(() => {
      goNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, goNext]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 mb-12 text-center md:text-left">
          <div className="w-full md:w-[45%]">
            <h2 className="text-[#F2701A] text-3xl md:text-[38px] font-bold leading-tight uppercase">
              Đội ngũ giáo viên <br className="hidden lg:block" /> chuẩn hệ
              thống GNP
            </h2>
          </div>

          <div className="w-full md:w-[55%] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
              100% giáo viên được đảm bảo bởi chất lượng đào tạo, tổ chức uy tín
              hàng đầu trong khu vực về chuẩn đào tạo giáo viên nghiêm ngặt.
            </p>

            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F2701A] flex items-center justify-center text-white font-bold text-xl shadow-lg">
              GNP
            </div>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative group/carousel">
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              goPrev();
              handleInteraction();
            }}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#F2701A] hover:border-[#F2701A]/30 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              goNext();
              handleInteraction();
            }}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-[#F2701A] hover:border-[#F2701A]/30 transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex cursor-grab active:cursor-grabbing select-none"
              style={{ x, gap: `${gap}px` }}
              drag="x"
              dragConstraints={{
                left: -(maxIndex * getSlideOffset()),
                right: 0,
              }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={() => setIsAutoPlaying(false)}
              onDragEnd={(_, info) => {
                const offset = info.offset.x;
                const velocity = info.velocity.x;

                let newIndex = currentIndex;

                if (offset < -60 || velocity < -400) {
                  newIndex++;
                } else if (offset > 60 || velocity > 400) {
                  newIndex--;
                }

                newIndex = Math.max(0, Math.min(newIndex, maxIndex));
                setCurrentIndex(newIndex);

                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${gap * (currentCardsToShow - 1)}px) / ${currentCardsToShow})`,
                  }}
                >
                  {/* Card */}
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md hover:shadow-xl transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        draggable={false}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      />

                      {/* Hover overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="mt-3 text-center px-1">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 leading-tight line-clamp-2">
                        {member.name}
                      </h4>
                      <p className="text-gray-500 text-xs md:text-sm mt-1 leading-snug line-clamp-2">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* DOTS */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  handleInteraction();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-7 bg-[#F2701A]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
