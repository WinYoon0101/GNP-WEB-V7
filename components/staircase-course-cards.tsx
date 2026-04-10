"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  BookOpen,
  Rocket,
  Star,
  Flag,
  Cloud,
  MoveRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BarChart3,
  ArrowUpRight,
  ChevronDown,
  Heart,
  Lightbulb,
  Sparkles,
  Target,
  Brain,
  Users,
  Zap,
  Award,
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { BenefitsSection } from "./BenefitsSection";
import { FAQSection } from "./FAQSection";

// ── Course data ──────────────────────────────────────────────────────────────
const courses = [
  {
    id: "explorer",
    title: "EXPLORER",
    accordionTitle: "EXPLORER",
    age: "3.5 - 6 tuổi",
    color: "#FF8A00",
    bgLight: "#FFF4E6",
    icon: Trophy,
    link: "/khoa-hoc/explorer",
    delay: "0ms",
    studentImage: "/explorer.jpg",
    psychoPoints: [
      {
        icon: Heart,
        text: "Đây là giai đoạn tiếp thu ngôn ngữ tự nhiên. Tiếng Việt & Tiếng Anh đều trong giai đoạn phát triển mạnh nếu có môi trường đúng.",
      },
      {
        icon: Lightbulb,
        text: "Độ tập trung ngắn, rất nhiều năng lượng. Nhanh nhớ nhanh quên.",
      },
      {
        icon: Sparkles,
        text: "Chơi mà học, con yêu thích các hoạt động sôi nổi cạnh tranh.",
      },
    ],
    focusPoints: [
      {
        icon: Target,
        text: "Hình thành phản xạ ngôn ngữ và cách diễn đạt tự nhiên với phát âm chuẩn trong các đoạn hội thoại đơn giản.",
      },
      {
        icon: Brain,
        text: "Hình thành tư duy sáng tạo và phản biện, đồng thời tự tin thể hiện kỹ năng giao tiếp, hợp tác trong hoạt động thường ngày.",
      },
      {
        icon: BookOpen,
        text: "Con nhận biết âm và đọc được từ đơn. Con nói được cả câu hoàn chỉnh, ngoài ra có thể chủ động tự viết chữ cái.",
      },
    ],
    curriculumTitle: "GIÁO TRÌNH ĐỒNG BỘ VỚI NHÀ XUẤT BẢN HÀNG ĐẦU THẾ GIỚI",
  },
  {
    id: "innovator",
    title: "INNOVATOR",
    accordionTitle: "INNOVATOR",
    age: "6 - 10 tuổi",
    color: "#E91E8C",
    bgLight: "#FDE8F4",
    icon: BookOpen,
    link: "/khoa-hoc/innovator",
    delay: "100ms",
    studentImage: "/innovator.jpg",
    psychoPoints: [
      {
        icon: Heart,
        text: "Trẻ bắt đầu tư duy logic, ham học hỏi và thích khám phá thế giới xung quanh qua ngôn ngữ.",
      },
      {
        icon: Lightbulb,
        text: "Trí nhớ phát triển mạnh, dễ ghi nhớ từ vựng và cấu trúc ngữ pháp khi được học qua câu chuyện.",
      },
      {
        icon: Users,
        text: "Thích hoạt động nhóm, vui khi được khen, dễ tự tin hơn khi có sự thừa nhận từ bạn bè và thầy cô.",
      },
    ],
    focusPoints: [
      {
        icon: Target,
        text: "Con tự tin giao tiếp trôi chảy bằng tiếng Anh, chủ động nhận biết và hoàn thiện các lỗi ngôn ngữ đọc, viết.",
      },
      {
        icon: Brain,
        text: "Con hình thành và phát triển bộ kỹ năng thế kỷ 21: giao tiếp, hợp tác, sáng tạo, tư duy phản biện.",
      },
      {
        icon: Award,
        text: "Con thành thạo cả 4 kỹ năng tiếng Anh và hình thành thói quen học tập chủ động. Con sẵn sàng chinh phục kỳ thi quốc tế phù hợp với độ tuổi.",
      },
    ],
    curriculumTitle: "GIÁO TRÌNH ĐỒNG BỘ VỚI NHÀ XUẤT BẢN HÀNG ĐẦU THẾ GIỚI",
  },
  {
    id: "leader",
    title: "LEADER",
    accordionTitle: "LEADER",
    age: "11 - 15 tuổi",
    color: "#2563EB",
    bgLight: "#EEF4FF",
    icon: Rocket,
    link: "/khoa-hoc/leader",
    delay: "200ms",
    studentImage: "/leader.jpg",
    psychoPoints: [
      {
        icon: Heart,
        text: "Giai đoạn chuyển tiếp quan trọng – con muốn được tôn trọng, có chính kiến riêng và khẳng định bản thân.",
      },
      {
        icon: Lightbulb,
        text: "Khả năng tư duy trừu tượng phát triển, có thể tiếp thu ngữ pháp phức tạp và phân tích văn bản sâu hơn.",
      },
      {
        icon: Zap,
        text: "Cạnh tranh lành mạnh và áp lực học tập tăng – con cần môi trường học tích cực, thúc đẩy tự chủ.",
      },
    ],
    focusPoints: [
      {
        icon: Target,
        text: "Nâng cao 4 kỹ năng học thuật: đọc hiểu văn bản phức tạp, viết essay, nghe và nói trong ngữ cảnh thực tế.",
      },
      {
        icon: Brain,
        text: "Phát triển kỹ năng thuyết trình, tranh luận và lãnh đạo bằng tiếng Anh – tự tin trước đám đông.",
      },
      {
        icon: Award,
        text: "Định hướng lộ trình IELTS từ sớm – nắm vững nền tảng để chinh phục band 6.0+ sau khi tốt nghiệp.",
      },
    ],
    curriculumTitle: "GIÁO TRÌNH ĐỒNG BỘ VỚI NHÀ XUẤT BẢN HÀNG ĐẦU THẾ GIỚI",
  },
  {
    id: "ielts",
    title: "IELTS ACHIEVER",
    accordionTitle: "IELTS ACHIEVER",
    age: "Từ 15 tuổi",
    color: "#F9A825",
    bgLight: "#FFFDE7",
    icon: Star,
    link: "/khoa-hoc/ielts",
    delay: "300ms",
    studentImage: "/ielts.jpg",
    psychoPoints: [
      {
        icon: Heart,
        text: "Học viên có mục tiêu rõ ràng – du học, học bổng, hoặc thăng tiến nghề nghiệp là động lực học mạnh mẽ nhất.",
      },
      {
        icon: Lightbulb,
        text: "Cần phương pháp học có hệ thống, chiến lược làm bài thi cụ thể và phản hồi chi tiết từ giáo viên.",
      },
      {
        icon: Target,
        text: "Áp lực điểm số cao – cần môi trường ôn thi chuyên sâu, nhiều bài tập thực hành theo format thật.",
      },
    ],
    focusPoints: [
      {
        icon: Target,
        text: "Luyện tập toàn diện 4 kỹ năng IELTS: Listening, Reading, Writing task 1&2, Speaking part 1-3.",
      },
      {
        icon: Brain,
        text: "Chiến lược làm bài, quản lý thời gian và kỹ thuật xử lý câu khó trong từng section.",
      },
      {
        icon: Award,
        text: "Cam kết đầu ra bằng văn bản – học viên đạt band mục tiêu hoặc được học lại miễn phí.",
      },
    ],
    curriculumTitle: "GIÁO TRÌNH CAMBRIDGE IELTS OFFICIAL PREPARATION",
  },
  {
    id: "communicator",
    title: "COMMUNICATOR",
    accordionTitle: "COMMUNICATOR",
    age: "Sinh viên & Đi làm",
    color: "#1E3A8A",
    bgLight: "#EEF2FF",
    icon: Flag,
    link: "/khoa-hoc/communicator",
    delay: "400ms",
    studentImage: "/communicator.jpg",
    psychoPoints: [
      {
        icon: Heart,
        text: "Người lớn học có mục đích rõ ràng – giao tiếp công việc, hội nhập quốc tế hay phát triển bản thân.",
      },
      {
        icon: Lightbulb,
        text: "Tư duy phân tích cao nhưng thường ngại nói vì sợ sai – cần môi trường khích lệ và thực hành nhiều.",
      },
      {
        icon: Users,
        text: "Thích học theo tình huống thực tế, liên kết bài học với công việc và cuộc sống hàng ngày.",
      },
    ],
    focusPoints: [
      {
        icon: Target,
        text: "Giao tiếp tự tin, trôi chảy trong môi trường công sở quốc tế – họp, thuyết trình, email chuyên nghiệp.",
      },
      {
        icon: Brain,
        text: "Phát triển kỹ năng phản xạ ngôn ngữ tự nhiên và xử lý tình huống giao tiếp linh hoạt.",
      },
      {
        icon: Award,
        text: "Chuẩn bị cho TOEIC 600+, IELTS 6.5+ và các chứng chỉ quốc tế phục vụ sự nghiệp.",
      },
    ],
    curriculumTitle: "GIÁO TRÌNH BUSINESS ENGLISH THỰC TIỄN",
  },
];

// ── Main component ───────────────────────────────────────────────────────────
export function StaircaseCourseCards() {
  const [mounted, setMounted] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current)
      scrollContainerRef.current.scrollBy({
        left: -window.innerWidth,
        behavior: "smooth",
      });
  };
  const scrollRight = () => {
    if (scrollContainerRef.current)
      scrollContainerRef.current.scrollBy({
        left: window.innerWidth,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-16 md:py-24 overflow-hidden relative bg-[#FDFBF7]">
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

      {/* Floating icons */}
      <div className="absolute top-4 right-[5%] text-orange-400 animate-[bounce_6s_infinite] opacity-15 z-0 hidden md:block pointer-events-none">
        <TrendingUp className="w-16 h-16" />
      </div>
      <div className="absolute bottom-40 left-[5%] text-blue-400 animate-[float_6s_ease-in-out_infinite] opacity-10 z-0 hidden md:block pointer-events-none">
        <BarChart3 className="w-14 h-14" />
      </div>

      <div className="hidden md:block absolute top-28 left-60 w-16 h-16 z-30 pointer-events-none opacity-70">
    <Image
      src="/rocket.png"
      alt="education"
      fill
      className="object-contain"
    />
  </div>

  <div className="absolute top-250 left-[3%] w-20 h-20 opacity-60">
  <Image
    src="/shooting-stars.png"
    alt="stars decoration"
    fill
    className="object-contain"
  />
</div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10 w-full flex flex-col">
        {/* ── Section Header ── */}
       <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 `}
        >
         

          {/* Title */}
          <h2 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#FD9800] leading-[1.15] tracking-tight">
            Cam kết kết quả đầu ra
            <br />
            <span className="text-[#FD9800]">
              theo từng trình độ
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#8b7355] text-sm sm:text-base lg:text-lg font-medium mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed">
            Chuẩn{" "}
            <span className="text-[#1a1a2e] font-semibold">
              CEFR & Cambridge
            </span>{" "}
            — Lộ trình rõ ràng, khoa học cho{" "}
            <span className="text-orange-600 font-semibold">mọi độ tuổi</span>
          </p>
        </div>

        {/* ── ROCKET TREE (Replaces Desktop Staircase & Mobile Dots) ── */}
        <div className="flex flex-col items-center justify-center w-full min-h-[500px] pt-10 pb-12 z-10 relative">
          <div className="flex flex-col items-center w-full max-w-5xl relative">
            
            {/* Rocket Top Glow */}
             <div className="absolute top-[-30px] w-20 h-20 bg-yellow-300 rounded-full blur-2xl opacity-50 animate-pulse pointer-events-none" />

            {[...courses].reverse().map((course, idx) => {
              // idx 0 = Top layer (Communicator), idx 4 = Bottom layer (Explorer)
              const originalIndex = courses.length - 1 - idx;
              const isLeft = originalIndex % 2 === 0;

              // Styles for the layered rocket body
              let borderRadius = "50% 50% 50% 50% / 20% 20% 25% 25%";
              let padding = "py-[25px] sm:py-[30px] md:py-[40px]";
              let margin = "-mt-6 md:-mt-8";
              
              if (idx === 0) {
                 // Top layer
                 borderRadius = "50% 50% 50% 50% / 100% 100% 20% 20%";
                 padding = "pt-[60px] pb-[25px] sm:pt-[70px] sm:pb-[30px] md:pt-[90px] md:pb-[40px]";
                 margin = "mt-0";
              } else if (idx === 4) {
                 // Bottom layer
                 borderRadius = "50% 50% 50% 50% / 20% 20% 100% 100%";
                 padding = "pt-[25px] pb-[50px] sm:pt-[30px] sm:pb-[60px] md:pt-[40px] md:pb-[80px]";
              }

              return (
                <div key={course.id} className={`flex items-center w-full z-${50 - idx*10} relative ${margin}`}>
                   
                   {/* LEFT BRANCH */}
                   <div className="flex-1 flex justify-end pr-2 sm:pr-4 md:pr-8">
                     {isLeft && (
                       <RocketNode course={course} index={originalIndex} isLeft={true} onClick={() => toggle(course.id)} />
                     )}
                   </div>

                   {/* CENTRAL ROCKET LAYER */}
                   <div 
                      onClick={() => toggle(course.id)}
                      className="cursor-pointer w-[140px] sm:w-[180px] md:w-[240px] px-2 flex items-center justify-center text-center shadow-[0_-5px_15px_rgba(0,0,0,0.15)] hover:brightness-110 transition-all z-10 relative group"
                      style={{ 
                          backgroundColor: course.color,
                          borderRadius: borderRadius,
                          paddingTop: padding.split(' ')[0].replace('pt-[','').replace(']',''),
                          paddingBottom: padding.split(' ')[1] ? padding.split(' ')[1].replace('pb-[','').replace(']','') : ''
                      }}>
                      {/* Optional Fins on Leader layer (idx 2) */}
                      {idx === 2 && (
                         <>
                           <div className="absolute left-[-20px] md:left-[-30px] bottom-[10px] w-[35px] md:w-[50px] h-[70px] md:h-[90px] bg-pink-500 origin-bottom-right -rotate-[20deg] rounded-tl-full rounded-bl-3xl -z-10 drop-shadow-md transition-transform group-hover:-rotate-[25deg]" />
                           <div className="absolute right-[-20px] md:right-[-30px] bottom-[10px] w-[35px] md:w-[50px] h-[70px] md:h-[90px] bg-pink-500 origin-bottom-left rotate-[20deg] rounded-tr-full rounded-br-3xl -z-10 drop-shadow-md transition-transform group-hover:rotate-[25deg]" />
                         </>
                      )}
                      
                      <span className="text-white font-black text-sm sm:text-base md:text-xl uppercase tracking-wider md:tracking-widest leading-tight drop-shadow-md px-1" style={{ paddingTop: idx===0? '35px': '0', paddingBottom: idx===4? '25px':'0' }}>
                         {course.title.includes(' ') ? (
                             <>
                               {course.title.split(' ')[0]}<br className="hidden sm:block"/>
                               <span className="text-xs sm:text-sm md:text-lg">{course.title.split(' ').slice(1).join(' ')}</span>
                             </>
                         ) : course.title}
                      </span>
                   </div>

                   {/* RIGHT BRANCH */}
                   <div className="flex-1 flex justify-start pl-2 sm:pl-4 md:pl-8">
                     {!isLeft && (
                       <RocketNode course={course} index={originalIndex} isLeft={false} onClick={() => toggle(course.id)} />
                     )}
                   </div>
                </div>
              );
            })}

            {/* ROCKET FLAME */}
            <div className="w-[60px] md:w-[80px] h-[80px] md:h-[120px] bg-gradient-to-t from-yellow-300 via-orange-400 to-red-500 -mt-4 md:-mt-8 rounded-[50%_50%_50%_50%_/_70%_70%_100%_100%] animate-pulse shadow-[0_10px_30px_rgba(255,100,0,0.8)] relative z-0 flex justify-center">
                 <div className="absolute bottom-[10px] w-[30px] md:w-[40px] h-[50px] md:h-[70px] bg-gradient-to-t from-white to-yellow-300 rounded-[50%_50%_50%_50%_/_70%_70%_100%_100%] animate-bounce mix-blend-overlay" />
            </div>

          </div>
        </div>

        {/* ── Accordion: 5 colored bars ── */}
        <div className="w-full mt-2 mb-12 space-y-3 z-10">
          {courses.map((course) => {
            const isOpen = openId === course.id;
            return (
              <div
                key={`acc-${course.id}`}
                className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-white/60"
              >
                {/* Header Bar */}
                <button
                  onClick={() => toggle(course.id)}
                  className="group w-full flex items-center justify-between px-5 py-4 md:px-7 md:py-5 text-left transition-all duration-300 hover:brightness-110 active:brightness-95"
                  style={{ backgroundColor: course.color }}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <course.icon
                      className={`w-5 h-5 md:w-6 md:h-6 text-white transition-transform duration-300 ${isOpen ? "rotate-12" : "group-hover:rotate-12"}`}
                    />
                    <span className="text-white font-black text-sm md:text-base uppercase tracking-widest drop-shadow-sm">
                      {course.accordionTitle}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 text-white/90 transition-transform duration-400 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Expandable Body */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "9999px" : "0px" }}
                >
                  <AccordionBody course={course} />
                </div>
              </div>
            );
          })}
        </div>

        <BenefitsSection />

      </div>
   

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes dash { to { stroke-dashoffset: -1000; } }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideDown { animation: fadeSlideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `,
        }}
      />
         
    </section>
    
  );
}

// ── Rocket Node Component ─────────────────────────────────────────────────────────────
function RocketNode({ course, index, isLeft, onClick }: any) {
  return (
    <div 
       className={`flex flex-col ${isLeft ? "items-end text-right" : "items-start text-left"} cursor-pointer group`}
       onClick={onClick}
    >
       <p className="text-slate-500 font-bold text-[9px] sm:text-xs md:text-sm mb-1 px-1 sm:px-2 group-hover:text-orange-500 transition-colors">Độ tuổi: {course.age}</p>
       <div className={`flex items-center ${isLeft ? "flex-row-reverse" : "flex-row"} gap-0`}>
           {/* Connector Line */}
           <div className="w-4 sm:w-8 md:w-16 lg:w-24 h-[2px] relative transition-transform origin-center group-hover:scale-x-110" style={{ backgroundColor: course.color }}>
               <div className={`absolute ${isLeft ? "right-0" : "left-0"} top-1/2 -mt-1 w-2 h-2 rounded-full shadow-sm`} style={{ backgroundColor: course.color }} />
           </div>
           {/* Bubble */}
           <div className="bg-white rounded-full border-[3px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex flex-col items-center justify-center relative z-10 transition-transform group-hover:scale-110 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                style={{ borderColor: course.color }}>
                <span className="text-lg sm:text-xl md:text-2xl font-black leading-none drop-shadow-sm" style={{ color: course.color }}>
                    0{index + 1}
                </span>
                <course.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-current opacity-40 absolute bottom-1.5 sm:bottom-2" style={{ color: course.color }} />
           </div>
       </div>
    </div>
  )
}

// ── Accordion expanded body ───────────────────────────────────────────────────
function AccordionBody({ course }: { course: (typeof courses)[number] }) {
  return (
    <div
      className="animate-fadeSlideDown"
      style={{ backgroundColor: course.bgLight }}
    >
      {/* Top divider line */}
      <div
        className="h-[3px] w-full opacity-30"
        style={{ backgroundColor: course.color }}
      />

      <div className="p-5 md:p-8 lg:p-10">
        {/* ── 3-column grid: psycho | image | focus ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px_1fr] lg:grid-cols-[1fr_260px_1fr] gap-6 md:gap-8 items-start">
          {/* LEFT: Tâm lý lứa tuổi */}
          <div>
            <h4
              className="text-xs md:text-sm font-black uppercase tracking-[0.15em] mb-4 pb-2.5 border-b-2 inline-flex items-center gap-2"
              style={{ color: course.color, borderColor: course.color }}
            >
              TÂM LÝ LỨA TUỔI
            </h4>
            <ul className="space-y-5">
              {course.psychoPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover/item:scale-110"
                    style={{ backgroundColor: `${course.color}1A` }}
                  >
                    <pt.icon
                      className="w-4 h-4"
                      style={{ color: course.color }}
                    />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {pt.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* CENTER: Student image + CTA button */}
          <div className="flex flex-col items-center justify-start gap-4 order-first md:order-none">
            <div
              className="relative w-full aspect-[3/4] max-w-[220px] md:max-w-none rounded-2xl overflow-hidden shadow-xl border-[3px]"
              style={{ borderColor: course.color }}
            >
              <Image
                src={course.studentImage}
                alt={course.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 220px, 260px"
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 flex items-end justify-center pb-4"
                style={{
                  background: `linear-gradient(to top, ${course.color}E6, transparent)`,
                }}
              >
                <Link
                  href={course.link}
                  className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-xs font-black uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg"
                  style={{ backgroundColor: course.color }}
                  onClick={(e) => e.stopPropagation()}
                >
                  TÌM HIỂU THÊM <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Trọng tâm đào tạo */}
          <div>
            <h4
              className="text-xs md:text-sm font-black uppercase tracking-[0.15em] mb-4 pb-2.5 border-b-2 inline-flex items-center gap-2"
              style={{ color: course.color, borderColor: course.color }}
            >
              TRỌNG TÂM ĐÀO TẠO
            </h4>
            <ul className="space-y-5">
              {course.focusPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 transition-transform duration-300 group-hover/item:scale-110"
                    style={{ backgroundColor: `${course.color}1A` }}
                  >
                    <pt.icon
                      className="w-4 h-4"
                      style={{ color: course.color }}
                    />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {pt.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom: Curriculum ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 mt-8 pt-6 border-t-2"
          style={{ borderColor: `${course.color}30` }}
        >
          <p
            className="font-black uppercase tracking-wide text-sm md:text-base leading-snug max-w-[260px] text-left"
            style={{ color: course.color }}
          >
            {course.curriculumTitle}
          </p>
          <div className="flex items-end gap-2 md:gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden shadow-lg border-2 border-white transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-xl"
                style={{
                  width: i === 1 ? "72px" : "60px",
                  height: i === 1 ? "90px" : "76px",
                  transform: `rotate(${(i - 1) * 5}deg)`,
                  zIndex: i === 1 ? 10 : 5,
                  marginBottom: i === 1 ? "6px" : "0",
                }}
              >
                <Image
                  src="/giaotrinh.png"
                  alt={`Giáo trình ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
