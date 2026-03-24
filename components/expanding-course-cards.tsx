"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const courses = [
  {
    id: "mau-giao",
    age: "3.5-6 tuổi",
    title: "EXPLORER",
    desc: "Khơi dậy tiềm năng",
    image: "/TA_1.jpg",
    link: "/khoa-hoc/mau-giao",
  },
  {
    id: "thieu-nhi",
    age: "6-10 tuổi",
    title: "INNOVATOR",
    desc: "Giao tiếp phản xạ tự tin",
    image: "/TA_2.jpg",
    link: "/khoa-hoc/mua-he",
  },
  {
    id: "thieu-nien",
    age: "11-15 tuổi",
    title: "LEADER",
    desc: "Vững tiếng Anh Học - thi hiệu quả",
    image: "/TA_3.jpg",
    link: "/khoa-hoc/thieu-nien",
  },
  {
    id: "ielts",
    age: "Từ 15 tuổi",
    title: "IELTS ACHIEVER",
    desc: "Cam kết đầu ra",
    image: "/TA_5.jpg",
    link: "/khoa-hoc/ielts",
  },
  {
    id: "communicate",
    age: "Sinh viên + Đi làm",
    title: "COMMUNICATOR",
    desc: "Tự tin giao tiếp",
    image: "/teenagers-studying-ielts-english-in-modern-classro.jpg",
    link: "/khoa-hoc/communicator",
  },
];

export function ExpandingCourseCards() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const renderCourseCard = (course: any) => (
    <Link
      key={course.id}
      href={course.link}
      className="group relative rounded-3xl overflow-hidden bg-slate-50 transition-all duration-500 ease-in-out flex-1 hover:flex-[1.2] md:hover:flex-[2.5] flex-shrink-0 md:flex-shrink cursor-pointer h-full"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[45%] md:h-[55%] group-hover:h-full transition-all duration-500 ease-in-out z-0">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500"></div>
      </div>
      <div className="relative z-10 p-5 md:p-6 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-3 md:gap-4 transition-all duration-500">
          <span className="w-fit px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white text-xs md:text-sm font-medium text-gray-800 shadow-sm transition-all duration-500">
            {course.age}
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-500 mb-1 md:mb-2">
              {course.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-200 transition-colors duration-500 max-w-[200px] line-clamp-2 md:line-clamp-none">
              {course.desc}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 bg-black/40 group-hover:bg-[#F2701A] w-fit pl-3 pr-1 py-1 md:pl-4 md:pr-1.5 md:py-1.5 rounded-full transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-none mt-4">
          <span className="text-white font-medium text-xs md:text-sm duration-500 whitespace-nowrap">
            Tìm hiểu thêm
          </span>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-gray-900" />
          </div>
        </div>
      </div>
    </Link>
  );

  const renderMobileCourseCard = (course: any) => (
    <Link
      key={course.id}
      href={course.link}
      className="block relative rounded-3xl overflow-hidden bg-white h-full border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
    >
      {/* Top text content */}
      <div className="p-6 flex flex-col gap-4 h-[45%]">
        <span className="w-fit px-3 py-1 rounded-full border border-gray-100 bg-white text-xs font-semibold text-gray-800 shadow-sm">
          {course.age}
        </span>
        <div>
          <h3 className="text-xl font-bold text-[#1F2937] mb-2 uppercase tracking-tight">
            {course.title}
          </h3>
          <p className="text-[15px] text-gray-500 font-medium">
            {course.desc}
          </p>
        </div>
      </div>

      {/* Bottom image content */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] w-full">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Button */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#423126]/90 pl-4 pr-1.5 py-1.5 rounded-full backdrop-blur-md">
          <span className="text-white font-semibold text-sm mr-1">Tìm hiểu thêm</span>
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
            <ArrowRight className="w-3 h-3 text-[#1F2937] stroke-[3]" />
          </div>
        </div>
      </div>
    </Link>
  );
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#F2701A] mb-2 leading-tight">
            "Đo ni đóng giày":
            <br />
            Thấu hiểu con - Minh bạch tiến độ - Cam kết đầu ra
          </h2>
        </div>

        
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row gap-4 w-full h-[450px]">
          {courses.map((course) => renderCourseCard(course))}
        </div>

        {/* Mobile Layout (Carousel) */}
        <div className="md:hidden w-full relative pb-8 mt-6">
          <Carousel setApi={setApi} opts={{ align: "center", loop: false }} className="w-full">
            <CarouselContent className="-ml-3 pb-4">
              {courses.map((course, index) => (
                <CarouselItem key={index} className="pl-3 basis-full sm:basis-[80%] relative h-[420px]">
                  {renderMobileCourseCard(course)}
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="absolute left-[2%] top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] h-12 w-12 text-gray-700 border-none" />
            <CarouselNext className="absolute right-[2%] top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] h-12 w-12 text-gray-700 border-none" />
            
            <div className="flex justify-center gap-2 mt-6">
              {courses.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}