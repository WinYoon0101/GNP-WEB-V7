"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const steps = [
  {
    num: "01",
    subtitle: "7:30 – 9:30 | MỞ ĐẦU",
    title: "Khởi động ngày mới với năng lượng tích cực",
    desc: "Bắt đầu ngày mới không vội vã. Các kỹ năng tư duy và quản lý cảm xúc được sắp xếp hài hòa sẽ là nền tảng vững vàng để con sẵn sàng bắt nhịp vào hành trình học tập và trải nghiệm thực tiễn phía trước.",
    points: [
      "Sinh hoạt và tương tác đầu ngày để kết nối bạn bè.",
      "Rèn luyện Tư duy phát triển tập trung vào sự tích cực.",
      "Làm quen với thói quen tự lập và kỷ luật cá nhân."
    ],
    badge: "Năng lượng tích cực",
    images: {
      main: "/images/summer-course/img-1.jpg",
      topRight: "/images/summer-course/img-2.jpg",
      bottomLeft: "/images/summer-course/img-3.jpg",
    }
  },
  {
    num: "02",
    subtitle: "9:30 – 11:30 | KỸ NĂNG",
    title: "Thực hành kỹ năng mềm, thấu hiểu giá trị",
    desc: "Đây là lúc các con đi sâu vào hiểu mình và đồng cảm cùng môi trường thông qua các chủ đề kỹ năng được lồng ghép. Lớp học trở thành không gian để các bạn tương tác đa chiều dưới sự gợi mở của đội ngũ học vụ.",
    points: [
      "Thực hành truyền đạt ý tưởng mạch lạc, tự tin.",
      "Hiểu cách điều phối cảm xúc của bản thân.",
      "Dành không gian tĩnh tâm để phản tư (Reflection)."
    ],
    badge: "Hiểu mình và kết nối",
    images: {
      main: "/images/summer-course/img-4.jpg",
      topRight: "/images/summer-course/img-5.jpg",
      bottomLeft: "/images/summer-course/img-1.jpg",
    }
  },
  {
    num: "03",
    subtitle: "13:00 – 15:30 | DỰ ÁN",
    title: "Khơi nguồn sáng tạo vào dự án thực tế",
    desc: "Khoảng thời gian năng động nhất trong ngày được đan xen bởi nghệ thuật, thiết kế tư duy và đặc biệt là những dự án nhóm với định hướng giải quyết vấn đề cộng đồng nhỏ.",
    points: [
      "Hợp tác làm dự án theo chủ đề của tuần.",
      "Đánh thức sự khéo léo qua các workshop nghệ thuật.",
      "Thực hành giải quyết vấn đề bằng trải nghiệm."
    ],
    badge: "Sáng tạo không rào cản",
    images: {
      main: "/images/summer-course/img-2.jpg",
      topRight: "/images/summer-course/img-3.jpg",
      bottomLeft: "/images/summer-course/img-4.jpg",
    }
  },
  {
    num: "04",
    subtitle: "15:30 – 17:00 | CUỐI NGÀY",
    title: "Vận động, tổng kết và lưu giữ nụ cười",
    desc: "Chúng tôi coi những trò chơi thể chất tập thể không chỉ giúp tái tạo thể lực mà còn là sợi dây kết nối thân thiết. Để khi tạm biệt nhau, các con đều ra về với tâm trạng tự hào về một ngày ý nghĩa.",
    points: [
      "Phát triển sức bền và sự khéo léo cá nhân.",
      "Tôn vinh, khích lệ các giá trị nhỏ bé con làm được.",
      "Xây dựng hành trang gắn bó xuyên suốt mùa hè."
    ],
    badge: "Thân thiện và tích cực",
    images: {
      main: "/images/summer-course/img-5.jpg",
      topRight: "/images/summer-course/img-1.jpg",
      bottomLeft: "/images/summer-course/img-2.jpg",
    }
  }
];

export function DailyStructure() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Kéo lấy giá trị cuộn BÊN TRONG thẻ div chứa nội dung (Tránh lỗi giật lag JS Animation khi cuộn bằng chuột)
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Trích xuất index dựa trên tỷ lệ cuộn
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepSize = 1 / (steps.length - 1);
    let newIndex = Math.round(latest / stepSize);
    if (newIndex >= steps.length) newIndex = steps.length - 1;
    if (newIndex < 0) newIndex = 0;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <div className="w-full">
      {/* ── BẢN DESKTOP (SỬ DỤNG VÙNG CUỘN CỤC BỘ BẢO ĐẢM CSS STICKY MƯỢT 100%) ── */}
      <section className="bg-[#FFFDFB] relative font-sans w-full hidden lg:block py-16 overflow-hidden">
        
        {/* Decorative Flares */}
        <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-orange-100/60 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-100/40 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="container mx-auto px-5 lg:px-8 max-w-[88rem] relative z-10 w-full flex flex-col justify-center">
          
          {/* Header */}
          <div className="text-center mb-0 shrink-0 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-600">
                Nhịp điệu một ngày
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-[-0.03em] mb-10">
              LỊCH TRÌNH TIÊU BIỂU
            </h2>
          </div>

          {/* VÙNG CUỘN ĐỘC LẬP - MIỄN NHIỄM VỚI LỖI GIẬT VÀ OVERFLOW CỦA WEB */}
          <div 
             ref={scrollContainerRef}
             className="w-full h-[75vh] overflow-y-auto flex gap-12 xl:gap-20 relative overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2"
          >
              
              {/* Bên trái: Hộp ảnh ghim cục bộ - Cứng chắc mượt mà hoàn toàn bằng phần cứng đồ họa */}
              <div className="w-1/2 sticky top-0 h-[75vh] shrink-0 py-[3vh] z-10">
                <div className="w-full h-full bg-slate-50/70 rounded-[3.5rem] p-8 relative flex items-center justify-center border border-orange-100/80 shadow-md overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl bg-white p-2">
                        <img src={steps[activeIndex].images.main} className="w-full h-full object-cover rounded-[1.5rem]" />
                      </div>
                      <div className="absolute top-[6%] right-[6%] w-[32%] h-[32%] rounded-2xl overflow-hidden shadow-xl rotate-[8deg] ring-[6px] ring-white bg-white">
                        <img src={steps[activeIndex].images.topRight} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-[8%] left-[6%] w-[32%] h-[32%] rounded-2xl overflow-hidden shadow-xl -rotate-[8deg] ring-[6px] ring-white bg-white">
                        <img src={steps[activeIndex].images.bottomLeft} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute bottom-[6%] right-[4%] bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-5 rounded-2xl shadow-xl shadow-orange-500/20 max-w-[55%] z-10 transform hover:scale-105 transition-transform duration-300">
                        <p className="font-bold text-[14px] leading-snug">
                          {steps[activeIndex].badge}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Bên phải: Hộp text cuộn */}
              <div className="w-1/2 flex-1 flex flex-col pt-0 pb-[0vh]">
                    {steps.map((step, index) => (
                      <div 
                        key={index} 
                        className="w-full h-[75vh] flex flex-col justify-center shrink-0 pr-6 lg:pr-10"
                        style={{ 
                            opacity: activeIndex === index ? 1 : 0.3, 
                            scale: activeIndex === index ? 1 : 0.98,
                            transformOrigin: "left center",
                            transition: "all 0.4s ease-out" 
                        }}
                      >
                        <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-black text-xl mb-6 shadow-sm border border-orange-200">
                          {step.num}
                        </div>
                        <h4 className="text-orange-500 font-black uppercase tracking-widest text-sm mb-3">
                          {step.subtitle}
                        </h4>
                        <h2 className="text-slate-900 font-black text-[2.2rem] leading-[1.25] tracking-tight mb-5">
                          {step.title}
                        </h2>
                        <p className="text-slate-600 font-medium text-[1.05rem] leading-relaxed mb-7">
                          {step.desc}
                        </p>
                        <ul className="space-y-4">
                          {step.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 mt-2 shrink-0" />
                              <p className="text-slate-600 font-medium text-[15px] leading-relaxed">{pt}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
              </div>

            </div>
          </div>
      </section>

      {/* ── BẢN MOBILE (Layout kéo dọc xếp khối thẳng tự động cho mobile cực kỳ mượt & ổn định) ── */}
      <section className="bg-[#FFFDFB] relative font-sans w-full block lg:hidden py-16 overflow-hidden">
         <div className="absolute top-[5%] left-[-10%] w-[300px] h-[300px] bg-orange-100/60 rounded-full blur-[100px] pointer-events-none" />
          
         <div className="container mx-auto px-5 relative z-10 w-full">
            <div className="text-center mb-10 shrink-0 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-600">
                  Nhịp điệu một ngày
                </span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-[-0.03em]">
                LỊCH TRÌNH MỘT NGÀY
              </h2>
            </div>

            <div className="flex flex-col gap-12">
               {steps.map((step, index) => (
                 <div key={index} className="w-full flex flex-col gap-6 relative">
                    
                    {/* Hình ảnh */}
                    <div className="w-full aspect-[4/3] bg-slate-50/70 rounded-[2.5rem] p-4 relative flex items-center justify-center border border-orange-100/80 shadow-sm overflow-hidden z-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-[1.5rem] overflow-hidden shadow-xl bg-white p-1.5">
                          <img src={step.images.main} className="w-full h-full object-cover rounded-[1rem]" />
                        </div>
                        <div className="absolute top-[6%] right-[6%] w-[32%] h-[32%] rounded-xl overflow-hidden shadow-lg rotate-[8deg] ring-[4px] ring-white bg-white">
                          <img src={step.images.topRight} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[8%] left-[6%] w-[32%] h-[32%] rounded-xl overflow-hidden shadow-lg -rotate-[8deg] ring-[4px] ring-white bg-white">
                          <img src={step.images.bottomLeft} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute bottom-[6%] right-[4%] bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-3 rounded-xl shadow-lg shadow-orange-500/20 max-w-[65%] z-10">
                          <p className="font-bold text-[11px] leading-snug shadow-sm">
                            {step.badge}
                          </p>
                        </div>
                    </div>

                    {/* Nội dung */}
                    <div className="w-full px-2">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-black text-lg mb-4 shadow-sm border border-orange-200">
                          {step.num}
                        </div>
                        <h4 className="text-orange-500 font-black uppercase tracking-widest text-[11px] mb-2">
                          {step.subtitle}
                        </h4>
                        <h2 className="text-slate-900 font-black text-2xl leading-[1.25] tracking-tight mb-4">
                          {step.title}
                        </h2>
                        <p className="text-slate-600 font-medium text-sm leading-relaxed mb-5">
                          {step.desc}
                        </p>
                        <ul className="space-y-3">
                          {step.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 mt-2 shrink-0" />
                              <p className="text-slate-600 font-medium text-[13px] leading-relaxed">{pt}</p>
                            </li>
                          ))}
                        </ul>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}

