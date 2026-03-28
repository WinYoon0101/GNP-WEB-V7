"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { CheckCircle2, Sparkles, Brain, Users } from "lucide-react";

export function GPSPhilosophy() {
  const { ref: headerRef, isIntersecting: headerVisible } =
    useIntersectionObserver({ threshold: 0.1 });
  const { ref: cardsRef, isIntersecting: cardsVisible } =
    useIntersectionObserver({ threshold: 0.1 });

  const philosophyCards = [
    {
      title: "Growth Mindset",
      subtitle: "Tư Duy Phát Triển",

      shortDesc: "Phát triển tư duy tích cực, sẵn sàng học hỏi",
      description:
        "Phát triển tư duy tích cực, luôn sẵn sàng học hỏi từ những sai lầm và vượt qua thách thức.",
      highlights: [
        "Không ngại sai – Không sợ thất bại",
        "Sẵn sàng học hỏi – Hoàn thiện bản thân",
        "Học tập chủ động – Hợp tác – Bền bỉ",
      ],
      frontBg: "bg-gradient-to-br from-[#EBF7DA] to-[#D4F0B7]",
      backBg: "bg-emerald-50",
      image: "/snapedit_1772899898767.png",
      decorativeShapeColor: "bg-[#CFEF9B]",
      dotColor: "text-emerald-500",
      glowColor: "shadow-emerald-200/50",
    },
    {
      title: "People",
      subtitle: "Trách Nhiệm Xã Hội",

      shortDesc: "Biết sống vì người khác",
      description:
        "Xây dựng những công dân có trách nhiệm, biết sống vì người khác và đóng góp cho cộng đồng.",
      highlights: [
        "Luôn biết sống vì người khác",
        "Trách nhiệm với gia đình và xã hội",
        "Tạo ra giá trị cho cộng đồng trước",
      ],
      frontBg: "bg-gradient-to-br from-[#FFE1DF] to-[#FFC4C0]",
      backBg: "bg-rose-50",
      image: "/people.jpg",
      decorativeShapeColor: "bg-[#FFBDB8]",
      dotColor: "text-rose-400",
      glowColor: "shadow-rose-200/50",
    },
    {
      title: "Skills",
      subtitle: "Kỹ Năng Hội Nhập",

      shortDesc: "Bản lĩnh bước ra thế giới",
      description:
        "Phát triển các kỹ năng thực tế giúp học viên thành công trong học tập và cuộc sống toàn cầu.",
      highlights: [
        "Kỹ năng Ngôn ngữ, Giao tiếp & Quản lý cảm xúc",
        "Làm việc nhóm & Thuyết trình",
        "Tư duy phản biện và xử lý vấn đề",
      ],
      frontBg: "bg-gradient-to-br from-[#E1F0FF] to-[#BEDDFF]",
      backBg: "bg-sky-50",
      image: "/KY-NANG-HOI-NHAP.jpg",
      decorativeShapeColor: "bg-[#BADFFF]",
      dotColor: "text-sky-500",
      glowColor: "shadow-sky-200/50",
    },
  ];

  return (
    <section
      id="gps-philosophy"
      className="relative bg-[#FAFBFF] py-24 md:py-32 overflow-hidden"
    >
      {/* Engaging Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Abstract blur shapes */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#F2701A]/10 rounded-full blur-[100px] mix-blend-multiply opacity-70 " />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply opacity-60" />

        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        />

        {/* Soft waves divider visually connecting to the background */}
        <svg
          className="absolute bottom-0 w-full h-auto text-white"
          viewBox="0 0 1440 120"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header Section */}
        <div
          ref={headerRef}
          className={`mx-auto mb-20 max-w-4xl text-center transition-all duration-1000 ${headerVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
            }`}
        >
          {/* Main Title - Arched Text */}
          <div className="relative w-full h-[100px] sm:h-[140px] md:h-[200px] lg:h-[280px] mb-4 md:mb-8 flex justify-center items-end overflow-visible">
            <svg
              viewBox="0 0 1600 400"
              className="w-[150%] sm:w-[130%] min-w-[500px] sm:min-w-[700px] max-w-[1400px] h-auto absolute bottom-0 left-1/2 -translate-x-1/2 drop-shadow-sm overflow-visible"
            >
              <path
                id="mainCurve"
                d="M -100 400 C 400 0, 1200 0, 1700 400"
                fill="transparent"
              />
              <text
                className="font-black fill-slate-900 tracking-tight"
                style={{ fontSize: "85px" }}
              >
                <textPath
                  href="#mainCurve"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  Training Philosophy{" "}
                  <tspan className="fill-[#F2701A]">G.P.S</tspan>
                </textPath>
              </text>
            </svg>
          </div>

          <p className="text-pretty text-[14px] md:text-lg leading-relaxed text-slate-700 font-medium max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10 -translate-y-15">
            Trong bối cảnh thế giới hội nhập sâu rộng, tiếng Anh ngày nay không
            chỉ là một môn học, mà là{" "}
            <span className="font-bold text-[#F2701A] text-[15px] md:text-lg">
              chìa khóa mở ra tri thức, cơ hội và tương lai
            </span>
            . Tại GNP English, chúng tôi cam kết xây dựng một lộ trình phát
            triển toàn diện nhất.
          </p>
        </div>

        {/* 3D Flip Cards Grid */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 perspective-1000 transition-all duration-1000 delay-300 ${cardsVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0"
            }`}
        >
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              className={`group h-[480px] lg:h-[540px] w-full cursor-pointer perspective-1000 ]`}
            >
              <div
                className={`relative w-full h-full transition-all duration-1000 transform-preserve-3d group-hover:rotate-y-180 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:${card.glowColor} group-hover:shadow-2xl`}
              >
                {/* --- Front Side --- */}
                <div
                  className={`absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden flex flex-col pt-10 px-8 ${card.frontBg} border-4 border-white`}
                >
                  {/* Decorative Abstract Shapes */}
                  <div
                    className={`absolute bottom-[-10%] right-[-10%] w-[120%] h-[60%] ${card.decorativeShapeColor} rounded-full blur-3xl opacity-60 mix-blend-overlay`}
                  ></div>

                  <div className="text-center mt-2 z-10">
                    <h3 className="text-3xl lg:text-4xl font-black text-slate-800 tracking-tight drop-shadow-sm">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base font-bold text-slate-600 mt-2 uppercase tracking-widest opacity-90 inline-block bg-white/50 px-3 py-1 rounded-full">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="relative flex-1 w-full rounded-t-[2.5rem] overflow-hidden z-10 border-t-8 border-l-8 border-r-8 border-white/60 shadow-inner mt-8 -mb-2 transform transition-transform duration-1000 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* --- Back Side --- */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180 rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-start text-left shadow-inner bg-slate-900 border-4 border-slate-800 overflow-hidden`}
                >
                  {/* Soft Background Patches */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-white rounded-full blur-[60px]"></div>
                    <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-white/80 rounded-full blur-[60px]"></div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between pt-2 pb-1">
                    <div className="text-center">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-1 leading-none tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-[0_2px_15px_rgb(0,0,0,0.1)] border border-white/10 mx-1">
                      <p className="text-white text-[14px] md:text-[15px] font-semibold italic text-center leading-snug">
                        "{card.description}"
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-3 px-2">
                        <div className="h-px bg-slate-300/60 flex-1"></div>
                        <p className="font-extrabold text-[10px] md:text-[11px] uppercase tracking-widest text-[#F2701A] text-center drop-shadow-sm bg-white/60 rounded-full px-3 py-1 shrink-0 border border-white">
                          RÈN LUYỆN
                        </p>
                        <div className="h-px bg-slate-300/60 flex-1"></div>
                      </div>

                      <ul className="space-y-2.5 px-1">
                        {card.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 md:p-3.5 rounded-xl transition-all shadow-sm border border-white/10 group/item hover:bg-white/10 hover:shadow-md hover:-translate-y-0.5"
                          >
                            <div
                              className={`p-1 rounded-full bg-slate-800 shadow-[0_2px_10px_rgb(0,0,0,0.2)] flex-shrink-0 group-hover/item:scale-110 transition-transform`}
                            >
                              <CheckCircle2
                                className={`w-4 h-4 md:w-5 md:h-5 ${card.dotColor}`}
                              />
                            </div>
                            <span className="text-[13px] md:text-[14px] lg:text-[15px] text-slate-200 leading-tight font-semibold">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Required CSS for 3D Flip effect */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .perspective-1000 {
          perspective: 1200px;
        }
        .transform-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      
      `,
        }}
      />
    </section>
  );
}
