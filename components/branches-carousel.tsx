"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const branches = [
  {
    title: "Trụ sở chính",
    address: "33B Trần Bình Trọng, P. Bình Lợi Trung",
    image: "/co_so_1.jpg",
  },
  {
    title: "Cơ sở 1",
    address: "46A Trần Bình Trọng, P. Bình Lợi Trung",
    image: "/co_so_1.jpg",
  },
  {
    title: "Cơ sở 2",
    address: "145 Nguyễn Văn Thương, P. Thanh Mỹ Tây",
    image: "/co_so_3.jpg",
  },
  {
    title: "Cơ sở 3",
    address: "134 Nơ Trang Long, P. Bình Thạnh",
    image: "/co_so_3.jpg",
  },
];

export function BranchesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % branches.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % branches.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + branches.length) % branches.length);
    setIsAutoPlaying(false);
  };

  const getVisibleBranches = () => {
    const branchesToShow = [];
    const count = isMobile ? 1 : 3;
    for (let i = 0; i < count; i++) {
      branchesToShow.push(branches[(currentIndex + i) % branches.length]);
    }
    return branchesToShow;
  };

  const cardWidth = isMobile ? "w-full" : "w-[calc(33.333%-1rem)]";

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
            HỆ THỐNG CƠ SỞ GNP ENGLISH
          </h2>
          <p className="text-gray-700 text-sm md:text-lg max-w-3xl mx-auto">
            Khám phá các chi nhánh hiện đại của chúng tôi tại các địa điểm chiến
            lược trong TP. HCM
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg -ml-3 md:-ml-6 h-10 w-10 md:h-12 md:w-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="overflow-hidden px-4 md:px-8">
            <div className="flex gap-3 md:gap-6 justify-center transition-transform duration-500 ease-in-out">
              {getVisibleBranches().map((branch, index) => (
                <div
                  key={`${branch.title}-${index}`}
                  className={`flex-shrink-0 ${cardWidth} transition-all duration-500`}
                >
                  <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={branch.image || "/placeholder.svg"}
                      alt={branch.title}
                      width={400}
                      height={300}
                      className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold text-lg">{branch.title}</p>
                      <p className="text-sm">{branch.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg -mr-3 md:-mr-6 h-10 w-10 md:h-12 md:w-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {branches.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
