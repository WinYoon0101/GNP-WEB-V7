"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, BookOpen, Rocket, Star, Flag, Cloud, Sparkles, MoveRight, Circle, ChevronLeft, ChevronRight, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { BenefitsSection } from "./BenefitsSection";

const courses = [
  {
    id: "explorer",
    title: "EXPLORER",
    age: "3.5 - 6 tuổi",
    color: "#FF8A00", // Cam
    icon: Trophy,
    link: "/khoa-hoc/mau-giao",
    delay: "0ms",
  },
  {
    id: "innovator",
    title: "INNOVATOR",
    age: "6 - 10 tuổi",
    color: "#FFB057", // Cam nhạt
    icon: BookOpen,
    link: "/khoa-hoc/mua-he",
    delay: "100ms",
  },
  {
    id: "leader",
    title: "LEADER",
    age: "11 - 15 tuổi",
    color: "#2563EB", // Xanh dương
    icon: Rocket,
    link: "/khoa-hoc/thieu-nien",
    delay: "200ms",
  },
  {
    id: "ielts",
    title: "IELTS ACHIEVER",
    age: "Từ 15 tuổi",
    color: "#E67A00", // Cam đậm
    icon: Star,
    link: "/khoa-hoc/ielts",
    delay: "300ms",
  },
  {
    id: "communicator",
    title: "COMMUNICATOR",
    age: "Sinh viên + Đi làm",
    color: "#1E3A8A", // Xanh dương đậm
    icon: Flag,
    link: "/khoa-hoc/communicator",
    delay: "400ms",
  },
];

export function StaircaseCourseCards() {
  const [mounted, setMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden relative min-h-screen md:min-h-[800px] bg-[#FDFBF7] flex flex-col justify-center">
      {/* Background Subtle Gradient & Shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EA] opacity-80 z-0 pointer-events-none" />

      {/* Upward Growth Graph Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.06]">
        <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800">
           <path 
              d="M-100,700 C300,600 500,400 900,300 C1100,250 1300,150 1600,0" 
              fill="none" stroke="#1E3A8A" strokeWidth="8" strokeDasharray="30 20" 
              className="animate-[dash_60s_linear_infinite]"
           />
           <path 
              d="M-100,700 C300,600 500,400 900,300 C1100,250 1300,150 1600,0 L1600,800 L-100,800 Z" 
              fill="url(#growth-gradient)" 
           />
           <defs>
             <linearGradient id="growth-gradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0" />
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.5" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      {/* Playful Floating Shapes & Trending Icons - Low opacity, minimal intrusion */}
      <div className="absolute top-24 left-[10%] text-orange-400 animate-[bounce_6s_infinite] opacity-20 z-0 hidden md:block pointer-events-none">
        <TrendingUp className="w-20 h-20" />
      </div>
      <div className="absolute top-[25%] right-[15%] text-blue-400 animate-[pulse_5s_infinite] opacity-20 z-0 hidden lg:block pointer-events-none">
        <ArrowUpRight className="w-24 h-24" />
      </div>
      <div className="absolute bottom-32 left-[15%] text-orange-400 animate-[float_6s_ease-in-out_infinite] opacity-20 z-0 pointer-events-none">
        <BarChart3 className="w-16 h-16" />
      </div>
      <div className="absolute top-1/2 right-[8%] text-blue-400 opacity-10 z-0 animate-[float_8s_ease-in-out_infinite] hidden md:block pointer-events-none">
        <Cloud className="w-32 h-32 fill-current" />
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10 w-full flex flex-col h-full">

        {/* Header - Subtle gradient */}
        <div className="text-center mb-10 md:mb-16 relative z-10 shrink-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tight drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] to-[#1E3A8A]">
            KHÓA HỌC THEO LỨA TUỔI
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg font-medium leading-relaxed">
            Hành trình chinh phục tiếng Anh được thiết kế như những bậc thang vững chắc,
            phù hợp với sự phát triển tự nhiên của con bạn.
          </p>
        </div>

        {/* --- DESKTOP LAYOUT (STRICT STAIRCASE) --- */}
        {/* Use items-end so cards align bottom, then translateY pushes them up strictly */}
        <div className="hidden lg:flex flex-row items-end justify-center gap-4 xl:gap-6 w-full min-h-[500px] pt-40 pb-10 z-10 shrink-0">
          {courses.map((course, index) => {
            // 0px, 40px, 80px, 120px, 160px
            // Because we use items-end, moving them UP requires negative translateY.
            // We want strict increasing heights: Explorer lowest (0px), Communicator highest (160px).
            const yOffset = index * 40;
            return (
              <Link
                key={`desktop-${course.id}`}
                href={course.link}
                className={`group flex flex-col w-[210px] xl:w-[230px] shrink-0 transition-all duration-500 ease-out hover:scale-105 hover:z-30 ${!mounted ? 'opacity-0 translate-y-20' : 'opacity-100'} z-10`}
                style={{
                  transitionDelay: mounted ? course.delay : '0ms',
                  transform: mounted ? `translateY(-${yOffset}px)` : 'translateY(20px)'
                }}
              >
                <CardContent course={course} isDesktop={true} />
              </Link>
            )
          })}
        </div>

        {/* --- MOBILE LAYOUT (HORIZONTAL SCROLL) --- */}
        {/* 1 Card exactly fits the screen. Container has no padding, inner card uses px-6. */}
        <div className="lg:hidden relative w-full pb-12 pt-8 z-10 shrink-0">
          <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory w-full hide-scrollbar scroll-smooth relative">
            {courses.map((course) => (
              <Link
                key={`mobile-${course.id}`}
                href={course.link}
                // w-full and flex-[0_0_100%] force it to be exactly 1 full viewport width inside the container
                className={`group flex flex-col w-full flex-[0_0_100%] snap-center px-6 transition-all duration-300 ${!mounted ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}
                style={{ transitionDelay: mounted ? course.delay : '0ms' }}
              >
                <CardContent course={course} isDesktop={false} />
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.preventDefault(); scrollLeft(); }}
            className="absolute left-1 top-[45%] -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur shadow-md rounded-full text-[#1E3A8A] hover:bg-white hover:scale-110 transition-all border border-slate-100"
            aria-label="Previous Course"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); scrollRight(); }}
            className="absolute right-1 top-[45%] -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur shadow-md rounded-full text-[#1E3A8A] hover:bg-white hover:scale-110 transition-all border border-slate-100"
            aria-label="Next Course"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

     <BenefitsSection/>

      </div>

      {/* Global CSS for hiding scrollbar & custom animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}} />
    </section>
  );
}

// Sub-component for Card interior to avoid duplication
function CardContent({ course, isDesktop }: { course: any, isDesktop: boolean }) {
  return (
    <div className="flex flex-col items-center w-full h-full group-hover:-translate-y-2 transition-transform duration-500">
      {/* Icon Wrapper */}
      <div className={`mb-[-2rem] transition-transform duration-500 group-hover:scale-110 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md border-4 z-20 relative`} style={{ borderColor: course.color }}>
        <course.icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-12 group-hover:animate-bounce" style={{ color: course.color }} />
      </div>

      {/* Card Body */}
      <div className={`w-full flex-1 flex flex-col bg-white rounded-[24px] shadow-[0_4px_20px_rgb(0,0,0,0.05)] group-hover:shadow-[0_15px_30px_rgb(0,0,0,0.12)] transition-shadow duration-500 overflow-hidden border-2 border-transparent group-hover:border-slate-100 z-10 relative`}>

        {/* Top Grade/Vibrant Banner */}
        <div className={`w-full pt-12 pb-6 px-1 lg:px-2 text-center relative overflow-hidden flex-shrink-0 transition-colors duration-300`} style={{ backgroundColor: course.color }}>
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <h3 className={`text-white font-black text-xl ${course.title.length > 10 && !course.title.includes(" ") ? 'md:text-[18px] lg:text-[19px] xl:text-[20px] tracking-tighter' : 'md:text-[22px] tracking-tight'} leading-tight uppercase relative z-10 w-full px-1`}>
            {course.title.includes(" ") ? (
              <>
                {course.title.split(" ")[0]}
                <br />
                {course.title.split(" ").slice(1).join(" ")}
              </>
            ) : (
              <span className="block mt-3">{course.title}</span>
            )}
          </h3>
        </div>

        {/* Bottom Info Section */}
        <div className="py-6 px-4 text-center bg-white flex flex-col items-center justify-center gap-3 flex-1 min-h-[140px]">
          <span className="inline-block px-4 py-1.5 bg-[#FDFBF7] rounded-full text-slate-700 font-bold text-sm border border-slate-100 shadow-sm">
            {course.age}
          </span>
          <div className="mt-auto pt-2 text-slate-400 opacity-80 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-sm font-bold" style={{ color: course.color }}>
            Tìm hiểu thêm <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
