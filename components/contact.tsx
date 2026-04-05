"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Star,
  Sparkles,
  Navigation,
} from "lucide-react";

export function Contact() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", phone: "", email: "", course: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const branches = [
    {
      name: "Trụ sở chính",
      address: "33B Trần Bình Trọng, P. Bình Lợi, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752921c1ad4ddd%3A0x7c1c3d3b3f5e5e5e!2s33B%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20B%C3%ACnh%20L%E1%BB%A3i%20Trung%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Cơ sở 1",
      address: "46A Trần Bình Trọng, P. Bình Lợi, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752918cb29f037%3A0x6201ea5e48504015!2s46A%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20P.%20B%C3%ACnh%20L%E1%BB%A3i%2C%20TP.%20HCM!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Cơ sở 2",
      address: "145 Nguyễn Văn Thương, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Cơ sở 3",
      address: "134 Nơ Trang Long, P. Bình Thạnh, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState(0);

  return (
    <section
      id="dang-ky-tu-van"
      className="relative py-20 lg:py-22 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-orange-50/50 z-0 pointer-events-none" />

      <div className="absolute top-20 left-[5%] text-orange-200 animate-[bounce_6s_infinite] opacity-40 z-0 hidden lg:block pointer-events-none">
        <Star className="w-16 h-16 fill-current" />
      </div>
      <div className="absolute bottom-40 right-[10%] text-blue-200 animate-[pulse_5s_infinite] opacity-40 z-0 hidden lg:block pointer-events-none">
        <Sparkles className="w-20 h-20 fill-current" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-12 lg:mb-20 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            Khởi đầu hành trình mới
          </span>
          <h2 className="mb-4 text-balance text-4xl lg:text-5xl font-black text-[#FD9800] tracking-tight">
            Liên hệ & Đăng ký
          </h2>
          <p className="text-pretty text-lg text-slate-600 font-medium">
            Đăng ký tư vấn học tập và trải nghiệm phương pháp giáo dục hiện đại
            tại GNP ngay hôm nay!
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Registration Form */}
          <div
            className={`lg:col-span-5 w-full transition-all duration-700 transform ${!mounted ? "opacity-0 translate-y-12" : "opacity-100 translate-y-0"}`}
          >
            <Card className="border-0 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden rounded-[2rem] bg-white relative">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF8A00] to-[#FFB057]" />

              <div className="p-8 lg:p-10">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-4xl font-black text-slate-800 mb-2">
                    Đăng ký tư vấn
                  </h3>
                  <p className="text-slate-500 font-medium text-sm">
                    Điền thông tin và chúng tôi sẽ gọi lại cho bạn trong 24h.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center animate-in fade-in duration-500 min-h-[400px]">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      Đăng ký thành công!
                    </h4>
                    <p className="text-green-600 text-sm font-medium">
                      Cảm ơn bạn đã quan tâm. Đội ngũ tư vấn viên sẽ liên hệ với
                      bạn trong thời gian sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 animate-in fade-in duration-500"
                  >
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="name"
                        className="text-sm font-bold text-slate-700"
                      >
                        Họ và tên *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Nhập họ và tên của bạn"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-[#FF8A00] focus:ring-[#FF8A00] transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-bold text-slate-700"
                      >
                        Số điện thoại *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-[#FF8A00] focus:ring-[#FF8A00] transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="email"
                        className="text-sm font-bold text-slate-700"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-[#FF8A00] focus:ring-[#FF8A00] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="course"
                        className="text-sm font-bold text-slate-700"
                      >
                        Khóa học quan tâm
                      </Label>
                      <Input
                        id="course"
                        placeholder="VD: IELTS, Thiếu nhi, Giao tiếp..."
                        value={formData.course}
                        onChange={(e) =>
                          setFormData({ ...formData, course: e.target.value })
                        }
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-[#FF8A00] focus:ring-[#FF8A00] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-sm font-bold text-slate-700"
                      >
                        Lời nhắn
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Bạn có mục tiêu hay câu hỏi gì cần giải đáp?"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="resize-none rounded-xl bg-slate-50 border-slate-200 focus:bg-white focus:border-[#FF8A00] focus:ring-[#FF8A00] transition-colors"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 mt-4 bg-gradient-to-r from-[#FF8A00] to-[#E67A00] hover:from-[#E67A00] hover:to-[#D97700] text-white rounded-xl text-lg font-bold shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Đang gửi...
                        </div>
                      ) : (
                        <span className="flex items-center gap-2">
                          Đăng ký ngay
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Card>
          </div>

          {/* RIGHT: Contact Info & Map */}
          <div
            className={`lg:col-span-7 w-full transition-all duration-700 delay-150 transform ${!mounted ? "opacity-0 translate-y-12" : "opacity-100 translate-y-0"}`}
          >
            <Card className="border-0 shadow-2xl overflow-hidden rounded-[2rem] bg-[#1E3A8A] text-white flex flex-col h-full relative">
              <div className="p-8 lg:p-10 flex-shrink-0 relative z-10">
                <h3 className="text-2xl lg:text-3xl font-black mb-8">
                  Thông tin liên hệ
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sky-200 text-sm font-semibold mb-1 uppercase tracking-wider">
                        Hotline
                      </p>
                      <p className="font-bold text-lg md:text-xl tracking-tight">
                        083 999 0997
                      </p>

                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sky-200 text-sm font-semibold mb-1 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="font-medium text-base break-all">
                        info@gnp.edu.vn
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:col-span-2">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sky-200 text-sm font-semibold mb-1 uppercase tracking-wider">
                        Giờ làm việc
                      </p>
                      <p className="font-medium text-base">
                        Thứ 2 - Thứ 7:{" "}
                        <span className="font-bold ">
                          8:00 - 20:00
                        </span>
                      </p>
                      <p className="font-medium text-base">
                        Chủ nhật:{" "}
                        <span className="font-bold ">
                          8:00 - 17:00
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Branch Selection Pills */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Navigation className="w-5 h-5 text-sky-200" />
                    <p className="text-sky-200 text-sm font-semibold uppercase tracking-wider">
                      Hệ thống chi nhánh
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {branches.map((branch, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedBranch(index)}
                        className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${selectedBranch === index
                          ? "bg-[#FF8A00] text-white shadow-lg shadow-orange-500/40 translate-y-[-2px]"
                          : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                      >
                        {branch.name}
                      </button>
                    ))}
                  </div>

                  {/* Selected Branch Address Info */}
                  <div className="mt-4 flex items-center gap-2 text-white/90 font-medium bg-black/20 p-3 rounded-xl border border-white/5">
                    <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-sm md:text-base">
                      {branches[selectedBranch].address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Embed - Fills remaining bottom space completely */}
              <div className="flex-1 w-full min-h-[300px] lg:min-h-[350px] relative bg-slate-200">
                <iframe
                  src={branches[selectedBranch].mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-100"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
