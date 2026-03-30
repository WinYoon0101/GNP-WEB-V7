"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

// ── Data ─────────────────────────────────────────────────────────────────────
type FaqItem = { q: string; a: string };
type Category = { id: string; label: string; items: FaqItem[] };

const categories: Category[] = [
  {
    id: "chung",
    label: "Câu hỏi chung",
    items: [
      { q: "Học phí mỗi tháng khi học tại GNP là bao nhiêu?", a: "Học phí tại GNP được cá nhân hóa theo lộ trình và trình độ từng học viên. Vui lòng liên hệ hotline hoặc đến trực tiếp trung tâm để được tư vấn học phí chi tiết và phù hợp nhất." },
      { q: "Bé bao nhiêu tuổi có thể bắt đầu học? GNP có các cấp độ nào?", a: "GNP nhận học viên từ 3.5 tuổi với chương trình Explorer. Các cấp độ: Explorer (3.5–6 tuổi), Innovator (6–10 tuổi), Leader (11–15 tuổi), IELTS Achiever (15+) và Communicator (Sinh viên & Đi làm)." },
      { q: "GNP có chi nhánh ở đâu?", a: "GNP English hiện có các cơ sở tại TP.HCM và đang mở rộng ra nhiều tỉnh thành. Vui lòng truy cập trang Liên hệ để xem danh sách chi nhánh gần nhất." },
      { q: "GNP có chương trình học thử không?", a: "Có! GNP cung cấp buổi học thử miễn phí để học viên và phụ huynh trải nghiệm phương pháp giảng dạy trước khi đăng ký chính thức." },
      { q: "Làm thế nào để đăng ký khóa học tại GNP English?", a: "Bạn có thể đăng ký qua website, gọi hotline, hoặc đến trực tiếp cơ sở. Đội ngũ tư vấn sẽ kiểm tra trình độ miễn phí và xếp lớp phù hợp cho bạn." },
      { q: "Có các chương trình khuyến mãi nào không?", a: "GNP thường xuyên có ưu đãi học phí, học bổng và sự kiện đặc biệt. Theo dõi fanpage hoặc đăng ký email để cập nhật ưu đãi mới nhất." },
    ],
  },
  {
    id: "giang-day",
    label: "Chất lượng giảng dạy",
    items: [
      { q: "Chương trình học có vui không hay chỉ là học lý thuyết khô khan?", a: "Giờ học tại GNP rất sôi động với hoạt động tương tác, trò chơi ngôn ngữ, thuyết trình và dự án nhóm. Học viên học qua thực hành thực tế, không thuộc lòng lý thuyết." },
      { q: "Học hoàn toàn bằng tiếng Anh, con có hiểu bài không?", a: "GNP áp dụng phương pháp immersion có kiểm soát — giáo viên dùng tiếng Anh là ngôn ngữ chính nhưng điều chỉnh theo trình độ lớp, đảm bảo học viên hiểu và tiến bộ tự nhiên." },
      { q: "Trẻ 3–5 tuổi học tiếng Anh sớm có bị loạn ngôn ngữ không?", a: "Nghiên cứu khoa học chứng minh học đa ngôn ngữ từ nhỏ giúp não bộ phát triển tốt hơn, không gây loạn ngôn ngữ khi có môi trường học đúng và đủ cả hai ngôn ngữ." },
      { q: "Làm sao biết chương trình này có phù hợp với con mình không?", a: "GNP cung cấp bài kiểm tra đầu vào miễn phí và tư vấn 1-1 với chuyên gia. Sau buổi học thử, phụ huynh nhận báo cáo đánh giá chi tiết về khả năng của con." },
      { q: "Lớp học có bao nhiêu học viên?", a: "Mỗi lớp tại GNP tối đa 12–15 học viên để đảm bảo giáo viên có thể chú ý và tương tác với từng em trong suốt buổi học." },
    ],
  },
  {
    id: "giao-vien",
    label: "Chất lượng giáo viên",
    items: [
      { q: "Giáo viên tại GNP có trình độ như thế nào?", a: "100% giáo viên có chứng chỉ CELTA/DELTA hoặc bằng Sư phạm tiếng Anh, kinh nghiệm tối thiểu 2 năm, lý lịch tư pháp trong sạch." },
      { q: "GNP có sử dụng giáo viên nước ngoài không?", a: "GNP có cả giáo viên người Việt và người nước ngoài bản ngữ (Anh, Mỹ, Úc, Canada), đều được đào tạo theo chuẩn chương trình GNP." },
      { q: "Nếu không hài lòng với giáo viên, tôi có thể đổi lớp không?", a: "Có! GNP luôn lắng nghe phản hồi. Bạn có thể yêu cầu đổi lớp hoặc giáo viên bất kỳ lúc nào qua bộ phận chăm sóc học viên." },
      { q: "Giáo viên có được đào tạo thường xuyên không?", a: "Tất cả giáo viên GNP tham gia đào tạo nội bộ hàng tháng, dự giờ chéo và được giám sát chất lượng định kỳ bởi Academic Director." },
    ],
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export function FAQSection() {
  const [activeTab, setActiveTab] = useState("chung");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const active = categories.find((c) => c.id === activeTab)!;
  const toggle = (i: number) => setOpenIndex((p) => (p === i ? null : i));

  return (
    <section className="relative overflow-hidden">

      {/* ── Hero-style colored header block ── */}
      <div className="relative bg-gradient-to-br from-[#FF8A00] via-[#FF9A1E] to-[#FFB347] pt-16 pb-24 md:pb-32 px-4">
        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Decorative circle accents */}
        <div className="absolute top-8 left-8 w-32 h-32 rounded-full border-[3px] border-white/20 pointer-events-none" />
        <div className="absolute top-14 left-14 w-16 h-16 rounded-full border-[2px] border-white/15 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-[3px] border-white/15 pointer-events-none hidden md:block" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-[2px] border-white/20 pointer-events-none hidden md:block" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
        

          {/* Main title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-widest leading-tight drop-shadow-md">
            Câu hỏi thường gặp
          </h2>
          <p className="mt-3 text-white/80 text-sm sm:text-base font-medium max-w-md mx-auto leading-relaxed">
            Giải đáp mọi thắc mắc trước khi bạn bắt đầu hành trình tiếng Anh cùng GNP
          </p>

          {/* Tab pills — inside the colored block */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(null); }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-white text-orange-600 shadow-lg shadow-black/10 scale-105"
                    : "bg-white/20 text-white hover:bg-white/35 backdrop-blur-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Clean wave ── */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full block h-20 md:h-28"
          >
            {/* Single smooth arch: flat at edges, peaks gently in centre */}
            <path
              d="M0,80 Q720,0 1440,80 L1440,120 L0,120 Z"
              fill="#FFFAF5"
            />
          </svg>
        </div>
      </div>

      {/* ── Accordion cards ── */}
      <div className="bg-[#FFFAF5] pb-20 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-3">
            {active.items.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "shadow-lg shadow-orange-100 ring-1 ring-orange-300"
                      : "shadow-sm hover:shadow-md ring-1 ring-orange-100"
                  } bg-white`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left group"
                  >
                    <span className="flex items-center gap-3 flex-1 min-w-0">
                      {/* Number badge */}
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-orange-500 text-white"
                            : "bg-orange-100 text-orange-500 group-hover:bg-orange-200"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                          isOpen ? "text-orange-600" : "text-slate-800 group-hover:text-orange-500"
                        }`}
                      >
                        {item.q}
                      </span>
                    </span>

                    <ChevronDown
                      className={`flex-shrink-0 w-5 h-5 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-orange-500" : "text-slate-300 group-hover:text-orange-400"
                      }`}
                    />
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{ maxHeight: isOpen ? "500px" : "0px" }}
                  >
                    <div className="px-6 pb-5">
                      <div className="ml-10 pl-4 border-l-2 border-orange-200">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
