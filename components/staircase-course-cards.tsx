"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, Book, Rocket, Star, Mountain, Flag } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const courses = [
  {
    id: "explorer",
    title: "EXPLORER",
    age: "3.5 - 6 tuổi",
    color: "#FFD65A",
    icon: Trophy,
    link: "/khoa-hoc/mau-giao",
    offset: "lg:mt-48 mt-4",
  },
  {
    id: "innovator",
    title: "INNOVATOR",
    age: "6 - 10 tuổi",
    color: "#E997B8",
    icon: Book,
    link: "/khoa-hoc/mua-he",
    offset: "lg:mt-32 mt-4",
  },
  {
    id: "leader",
    title: "LEADER",
    age: "11 - 15 tuổi",
    color: "#2175B8",
    icon: Rocket,
    link: "/khoa-hoc/thieu-nien",
    offset: "lg:mt-16 mt-4",
  },
  {
    id: "ielts",
    title: "IELTS ACHIEVER",
    age: "Từ 15 tuổi",
    color: "#E84F5A",
    icon: Star,
    link: "/khoa-hoc/ielts",
    offset: "lg:mt-0 mt-4",
  },
  {
    id: "communicator",
    title: "COMMUNICATOR",
    age: "Sinh viên + Đi làm",
    color: "#97A4A8",
    icon: Flag,
    link: "/khoa-hoc/communicator",
    offset: "lg:-mt-16 mt-4",
  },
];

export function StaircaseCourseCards() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const renderCourseCard = (course: any, index: number) => (
    <Link
      key={course.id}
      href={course.link}
      className={`group relative flex flex-col items-start w-full sm:w-64 transition-all duration-300 hover:-translate-y-2 ${course.offset}`}
    >
      <div className="mb-4 ml-4">
        <course.icon className="w-10 h-10 text-gray-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ color: index === 0 ? course.color : undefined }} />
      </div>
      <div className="w-full bg-white rounded-2xl shadow-md p-2 border border-gray-100">
        <div className="rounded-xl p-6 text-center" style={{ backgroundColor: course.color }}>
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight uppercase">
            {course.title.includes(" ") ? (
              <>
                {course.title.split(" ").slice(0, 2).join(" ")}
                <br />
                {course.title.split(" ").slice(2).join(" ")}
              </>
            ) : course.title}
          </h3>
        </div>
        <div className="py-4 px-2 text-center">
          <p className="text-gray-700 font-semibold text-sm">{course.age}</p>
        </div>
      </div>
    </Link>
  );
  return (
    <section className="py-20 bg-white overflow-hidden relative min-h-[800px]">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40C20 30 30 50 40 40C50 30 60 50 70 40C80 30 90 50 100 40" stroke="#2175B8" strokeWidth="2" strokeDasharray="5 5" />
        </svg>
      </div>
      <div className="absolute top-20 right-1/4 opacity-10">
        <Star className="w-12 h-12 text-[#FFD65A] fill-current" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1B4F91] mb-6 uppercase tracking-tight">
            KHÓA HỌC TIẾNG ANH THEO LỨA TUỔI
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
            Các khóa học tiếng anh tại Apollo English được cá nhân hóa dựa trên sự thấu hiểu
            và cá tính từng học sinh, giúp con có lộ trình học tập phù hợp với chính mình
          </p>
        </div>

        {/* Staircase Grid */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-4 mt-16 md:mt-24">
          
          {/* Main Content Area - Desktop */}
          <div className="hidden md:flex flex-col lg:flex-row items-end flex-wrap xl:flex-nowrap gap-6 lg:gap-4 w-full xl:w-4/5 pt-20 lg:pt-0">
            {courses.map((course, index) => renderCourseCard(course, index))}
          </div>

          {/* Main Content Area - Mobile Carousel */}
          <div className="md:hidden w-full relative pb-8 mt-12 z-20">
            <Carousel setApi={setApi} opts={{ align: "center", loop: false }} className="w-full">
              <CarouselContent className="-ml-3 pb-8">
                {courses.map((course, index) => (
                  <CarouselItem key={index} className="pl-3 basis-full sm:basis-[80%] relative">
                    {renderCourseCard(course, index)}
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg h-10 w-10 text-black border-none" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg h-10 w-10 text-black border-none" />
              
              <div className="flex justify-center gap-2 mt-2">
                {courses.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* Student Image Section */}
          <div className="hidden xl:block absolute -right-20 -bottom-20 w-[600px] z-20 pointer-events-none">
            <div className="relative h-[700px] w-full">
              <Image
                src="/female-student-happy.jpg"
                alt="Student"
                fill
                className="object-contain object-bottom transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Footer Text & Certs */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-32 pt-10 border-t border-blue-100 gap-8">
          <div className="text-left">
            <h4 className="text-[#1B4F91] font-bold text-2xl md:text-3xl mb-1 uppercase">
              CAM KẾT KẾT QUẢ ĐẦU RA THEO TỪNG TRÌNH ĐỘ
            </h4>
            <p className="text-blue-400 font-medium text-lg">
              (Chuẩn CEFR & Cambridge)
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#1B4F91] p-1 rounded">
                <Image src="/placeholder.svg" alt="Cambridge" width={40} height={40} className="invert" />
              </div>
              <div>
                <span className="block font-bold text-gray-800 text-lg uppercase leading-none">CAMBRIDGE</span>
                <span className="block text-gray-500 font-medium text-sm">English</span>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-gray-400 text-sm font-medium">
              Authorised Exam Centre
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
