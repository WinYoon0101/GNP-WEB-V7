"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Zap, ArrowRight, Gift, Sparkles } from "lucide-react";
import Image from "next/image";

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 3,
    minutes: 21,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    const contactSection = document.getElementById("dang-ky-tu-van");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/lien-he";
    }
  };

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] bg-[#F2701A]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="bg-white rounded-[28px] md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row items-center relative group/card">
          {/* Decorative Corner Flairs on the card */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#F2701A]/5 -z-10 rounded-br-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F2701A]/5 -z-10 rounded-tl-[200px] pointer-events-none"></div>

          {/* Left: Promotional Content */}
          <div className="w-full lg:w-[55%] xl:w-[50%] p-8 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center gap-6 z-10">
            {/* Header with Title */}
            <div className="flex flex-col gap-4 relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFF2EA] border border-[#F2701A]/20 text-[#F2701A] text-[11px] md:text-xs font-bold tracking-wider uppercase rounded-full w-fit shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Ưu đãi khai trương cơ sở mới</span>
              </div>

              <h2 className="text-[32px] md:text-[42px] lg:text-[48px] xl:text-[54px] font-black text-slate-900 tracking-tight leading-[1.1]">
                CHỨNG CHỈ CỰC{" "}
                <span className="text-[#F2701A] relative whitespace-nowrap">
                  PRO
                  <div className="absolute -bottom-1 left-0 w-full h-3 bg-[#F2701A]/10 -skew-x-12"></div>
                </span>
                <br />
                ƯU ĐÃI CỰC MAX
              </h2>
            </div>

            {/* Value Proposition */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 leading-snug flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-lg w-fit">
                  Giảm 25%
                </span>
                <span>học phí khi đăng ký từ 6 tháng</span>
              </h3>


            </div>

            {/* Countdown Timer */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                <Clock className="h-4 w-4 text-[#F2701A]" />
                Kết thúc trong:
              </div>

              <div className="flex gap-2 sm:gap-3 md:gap-4 max-w-full md:max-w-[400px]">
                {[
                  { label: "Ngày", value: timeLeft.days },
                  { label: "Giờ", value: timeLeft.hours },
                  { label: "Phút", value: timeLeft.minutes },
                  { label: "Giây", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center flex-1 group/timer cursor-default min-w-0"
                  >
                    <div className="bg-white border-[1.5px] border-slate-200 shadow-sm rounded-xl md:rounded-2xl w-full aspect-square flex flex-col items-center justify-center transition-all duration-300 group-hover/timer:border-[#F2701A] group-hover/timer:shadow-[0_8px_16px_-6px_rgba(242,112,26,0.3)] group-hover/timer:-translate-y-1 py-1 md:py-0">
                      <span
                        className="text-[20px] sm:text-2xl md:text-3xl lg:text-3xl font-black text-[#F2701A] tracking-tighter leading-none"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        {String(item.value).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1 md:mt-0.5 group-hover/timer:text-[#F2701A]/80 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <Button
                size="lg"
                onClick={handleRegisterClick}
                className="bg-[#F2701A] hover:bg-[#D96010] text-white font-bold h-14 px-8 text-base rounded-xl shadow-[0_8px_20px_-6px_rgba(242,112,26,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(242,112,26,0.6)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto group/btn flex items-center justify-center gap-2"
              >
                <span>Nhận tư vấn ngay</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right: Course Sale Image Section */}
          <div className="w-full lg:w-[45%] xl:w-[50%] relative h-full min-h-[280px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[655px] flex items-center justify-center p-6 lg:p-10 overflow-hidden">
            {/* Elegant Background Shape - Solid Color */}
            <div className="absolute inset-0 bg-[#FFF2EA] clip-path-slant-modern"></div>

            {/* Floating Elements Background */}
            <div className="absolute top-1/4 right-8 w-16 h-16 bg-white border border-[#F2701A]/20 rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-bounce-slow opacity-60">
              <Zap className="h-8 w-8 text-[#F2701A]" />
            </div>

            <div className="relative w-full max-w-[460px] aspect-[4/3] md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl group border-[6px] border-white z-10 transition-transform duration-700">
              <Image
                src="/img_sale.jpg"
                alt="Khóa học giảm giá GNP English"
                fill
                className="object-cover object-center transition-transform duration-700"
              />
              {/* Soft overlay at bottom - Solid color */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Required CSS for custom shapes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .clip-path-slant-modern {
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%) rotate(12deg); }
          50% { transform: translateY(5%) rotate(16deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `,
        }}
      />
    </section>
  );
}
