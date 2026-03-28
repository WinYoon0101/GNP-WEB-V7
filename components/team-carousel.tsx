"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { teamMembers } from "@/lib/constants";

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else if (window.innerWidth < 1280) setCardsToShow(3);
      else setCardsToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentCardsToShow = mounted ? cardsToShow : 4;
  const maxIndex = Math.max(0, teamMembers.length - cardsToShow);
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);
  const totalDots = maxIndex > 0 ? maxIndex + 1 : 0;

  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6 md:gap-12 mb-12 text-center md:text-left">
          <div className="w-full md:w-[45%] flex justify-center md:justify-start">
            <h2 className="text-[#F2701A] text-3xl md:text-[38px] font-bold leading-tight uppercase">
              Đội ngũ giáo viên <br className="hidden lg:block" /> chuẩn hệ
              thống GNP
            </h2>
          </div>
          <div className="w-full md:w-[55%] flex flex-col sm:flex-row items-center sm:items-center justify-center md:justify-between gap-6">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
              100% giáo viên được đảm bảo bởi chất lượng đào tạo, tổ chức uy tín
              hàng đầu trong khu vực về chuẩn đào tạo giáo viên nghiêm ngặt.
            </p>
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F2701A] flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg mx-auto md:mx-0">
              GNP
            </div>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative">
          <div className="overflow-hidden px-1 py-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${safeCurrentIndex * (100 / currentCardsToShow)}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 lg:px-3"
                  style={{ width: `${100 / currentCardsToShow}%` }}
                >
                  <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-gray-200 mb-5 relative group shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-1 text-center flex flex-col items-center justify-center">
                    <h4 className="text-[17px] md:text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-[15px]">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Pagination */}
        {totalDots > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 md:mt-12">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${safeCurrentIndex === idx
                  ? "w-8 bg-[#F2701A]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
