"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star, Rocket, Sparkles, Loader2 } from "lucide-react";
import { submitToGoogleSheets } from "@/lib/google-sheets";

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await submitToGoogleSheets({
      ...formData,
      formType: "General Consultation (Footer)"
    });

    setIsSubmitting(false);
    
    if (result.success) {
      alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.");
      setFormData({ name: "", phone: "", email: "" });
    } else {
      alert("Cảm ơn bạn! Thông tin của bạn đã được ghi nhận. (Lưu ý: Hệ thống đang được cấu hình)");
      setFormData({ name: "", phone: "", email: "" });
    }
  };

  return (
    <section id="dang-ky-tu-van" className="relative w-full py-16 md:py-32 overflow-hidden bg-slate-50">
      {/* Dynamic Background Decor Outside Card */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#F2701A] rounded-full blur-[120px] mix-blend-multiply"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[150px] mix-blend-multiply opacity-50"></div>

        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#F2701A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.1,
          }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-[950px]">
        {/* Main Card Container */}
        <div className="flex flex-col md:flex-row shadow-[0_25px_60px_-15px_rgba(15,23,42,0.15)] rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-slate-200 bg-white relative">
          {/* Card Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F2701A] via-[#FFD700] to-[#F2701A] opacity-30 blur-2xl -z-10"></div>

          {/* Left Side - Form */}
          <div className="w-full md:w-[50%] p-8 md:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center bg-gradient-to-br from-[#F2701A] via-[#FF8A3D] to-[#FFB066]">
            {/* Subtle light accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-[#FFD700] rounded-full blur-3xl"></div>
              <svg
                className="absolute w-full h-full opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="dot-pattern"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 uppercase text-white tracking-wide relative z-10 drop-shadow-md">
              Tư vấn miễn phí
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 max-w-sm mx-auto w-full relative z-10"
            >
              <div className="relative group">
                <Input
                  className="bg-white/95 text-gray-800 border-none rounded-2xl px-5 py-6 font-medium placeholder:font-normal placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-[#FFD700]/50 shadow-inner text-sm transition-all group-hover:shadow-md"
                  placeholder="Họ và tên phụ huynh (*)"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="relative group">
                <Input
                  className="bg-white/95 text-gray-800 border-none rounded-2xl px-5 py-6 font-medium placeholder:font-normal placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-[#FFD700]/50 shadow-inner text-sm transition-all group-hover:shadow-md"
                  placeholder="Số điện thoại (*)"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className="relative group">
                <Input
                  className="bg-white/95 text-gray-800 border-none rounded-2xl px-5 py-6 font-medium placeholder:font-normal placeholder:text-gray-400 focus-visible:ring-4 focus-visible:ring-[#FFD700]/50 shadow-inner text-sm transition-all group-hover:shadow-md"
                  placeholder="E-mail (Không bắt buộc)"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-[#F2701A] hover:bg-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.2)] font-extrabold text-base rounded-2xl py-6 mt-8 transition-all hover:scale-[1.03] shadow-[0_8px_20px_rgba(242,112,26,0.3)] hover:shadow-[0_12px_25px_rgba(242,112,26,0.5)] flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    ĐANG GỬI...
                  </>
                ) : (
                  "ĐĂNG KÝ NGAY"
                )}
              </Button>
            </form>

           
          </div>

          {/* Right Side - Bright Orange Background & tuvan_2.png */}
          <div className="w-full md:w-[50%] relative flex flex-col items-center justify-end overflow-hidden min-h-[350px] md:min-h-auto bg-gradient-to-br from-[#FFF5F0] via-[#FFE8D6] to-[#FFDCC2]">
            {/* Soft Glowing Nebula Effects in Warm Colors */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-[#F2701A]/20 rounded-full blur-[90px]"></div>
              <div className="absolute top-[-10%] left-[-10%] w-60 h-60 bg-[#FFD700]/40 rounded-full blur-[80px]"></div>
              <div className="absolute top-[30%] left-[40%] w-32 h-32 bg-[#FF9A4D]/30 rounded-full blur-[50px]"></div>
            </div>

            {/* Subtle Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none opacity-80 z-0">
              <Star className="absolute top-10 left-12 w-4 h-4 text-[#F2701A]/50 animate-[pulse_3s_ease-in-out_infinite] fill-[#F2701A]/30" />
              <Star className="absolute top-24 right-16 w-3 h-3 text-[#F2701A]/40 animate-[pulse_2s_ease-in-out_infinite] fill-[#F2701A]/20" />
              <Sparkles className="absolute top-1/3 left-1/4 w-6 h-6 text-[#F2701A]/30 animate-[pulse_4s_ease-in-out_infinite]" />
              <Star className="absolute bottom-1/3 right-1/4 w-4 h-4 text-[#F2701A]/40 animate-[pulse_2.5s_ease-in-out_infinite] fill-[#F2701A]/20" />
            </div>

            {/* Rocket & Dashed Path Animation */}
            <div className="absolute top-0 left-0 w-full h-[65%] pointer-events-none z-10">
              {/* SVG Dashed Flight Path */}
              <svg
                className="absolute inset-0 w-full h-[250px] overflow-visible opacity-70"
                viewBox="0 0 500 250"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  id="flight-path"
                  d="M -20,180 Q 150,20 300,100 T 550,60"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  strokeDasharray="8,10"
                  className="animate-[dash_20s_linear_infinite]"
                />
                <defs>
                  <linearGradient
                    id="pathGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="50%" stopColor="#F2701A" />
                    <stop offset="100%" stopColor="#FF6B00" />
                  </linearGradient>
                </defs>
              </svg>

             
            </div>

            {/* Main Character Image (tuvan_2.png) */}
            <div className="relative z-20 w-[95%] max-w-[340px] flex items-end justify-center px-4 self-center h-full mt-10 md:mt-16">
              {/* Elaborate Platform / Ground Light */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-20 bg-gradient-to-t from-white/60 to-transparent rounded-[100%] blur-xl -z-10" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-[#F2701A]/20 rounded-[100%] blur-lg -z-10" />

              <div className="relative w-full aspect-[4/4] drop-shadow-[0_20px_40px_rgba(242,112,26,0.25)] origin-bottom  transition-transform duration-500">
                <Image
                  src="/tuvan_2.png"
                  alt="Tư vấn viên GNP English"
                  fill
                  className="object-contain object-bottom scale-[1.15] md:scale-[1.5] origin-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Required CSS for offset path rocket animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes dash {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: -300; }
        }
        @keyframes follow-path {
          0% { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
        .rocket-trajectory {
          offset-path: path("M -20,180 Q 150,20 300,100 T 550,60");
          animation: follow-path 7s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
}
