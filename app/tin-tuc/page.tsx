"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ──────────────────── DATA ──────────────────── */
const newsCategories = [
  {
    id: "workshop",
    name: "Workshop",
    articles: [
      {
        id: 1,
        title: "Jungle Adventure Workshop – Vừa học vừa chơi cực thú vị",
        description:
          "Workshop cuối tuần giúp bé khám phá thiên nhiên kết hợp học tiếng Anh thông qua trò chơi và hoạt động tương tác thực tế.",
        date: "2026-03-25",
        readTime: "3 phút đọc",
        category: "Workshop",
        image: "/workshop-jungle.jpg",
      },
      {
        id: 2,
        title: "Chỉ còn 2 ngày – Jungle Adventure chính thức diễn ra",
        description:
          "Sự kiện đặc biệt dành cho các bé với nhiều hoạt động trải nghiệm hấp dẫn, giúp tăng phản xạ tiếng Anh tự nhiên.",
        date: "2026-03-25",
        readTime: "2 phút đọc",
        category: "Workshop",
        image: "/workshop-jungle-2.jpg",
      },
      {
        id: 3,
        title: "Workshop đồng hành cùng con học tiếng Anh tại nhà",
        description:
          "Giúp ba mẹ hiểu đúng phương pháp học tiếng Anh để hỗ trợ con phát triển ngôn ngữ hiệu quả ngay tại nhà.",
        date: "2026-03-22",
        readTime: "4 phút đọc",
        category: "Workshop",
        image: "/workshop-parent.jpg",
      },
      {
        id: 4,
        title: "Giúp con học đúng – học vui – học hiệu quả",
        description:
          "Chia sẻ phương pháp học tiếng Anh tự nhiên thông qua trải nghiệm giúp trẻ tiếp thu nhanh và ghi nhớ lâu.",
        date: "2026-03-20",
        readTime: "3 phút đọc",
        category: "Workshop",
        image: "/workshop-learning.jpg",
      },
      {
        id: 5,
        title: "Workshop dành riêng cho phụ huynh GNP",
        description:
          "Cung cấp kiến thức và công cụ giúp phụ huynh đồng hành cùng con trong hành trình học tiếng Anh.",
        date: "2026-03-19",
        readTime: "3 phút đọc",
        category: "Workshop",
        image: "/workshop-parent-2.jpg",
      },
      {
        id: 6,
        title: "Khoảnh khắc workshop thực tế tại GNP",
        description:
          "Những hình ảnh chân thực từ workshop với nhiều hoạt động tương tác giúp học viên tự tin giao tiếp.",
        date: "2026-03-18",
        readTime: "2 phút đọc",
        category: "Workshop",
        image: "/workshop-real.jpg",
      },
      {
        id: 7,
        title: "Workshop học mà chơi – chơi mà học",
        description:
          "Phương pháp học thông qua trải nghiệm giúp trẻ phát triển phản xạ tiếng Anh tự nhiên.",
        date: "2026-03-15",
        readTime: "3 phút đọc",
        category: "Workshop",
        image: "/workshop-fun.jpg",
      },
      {
        id: 8,
        title: "Sự kiện cuối tuần dành cho trẻ em tại GNP",
        description:
          "Không gian học tập sáng tạo kết hợp vui chơi và phát triển kỹ năng tiếng Anh toàn diện.",
        date: "2026-03-12",
        readTime: "3 phút đọc",
        category: "Workshop",
        image: "/workshop-weekend.jpg",
      },
       {
        id: 9,
        title: " CUỘC THI “ENGLISH STARS” CHÍNH THỨC KHỞI ĐỘNG!",
        description:
          "Đây là sân chơi bổ ích để các em học sinh được trải nghiệm việc sử dụng tiếng Anh trong môi trường thực tế",
        date: "2026-03-12",
        readTime: "3 phút đọc",
        category: "Workshop",
        image: "/9_n.jpg",
      },
    ],
  },
];

/* ──────────────────── MINI CALENDAR ──────────────────── */
function MiniCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const isToday = (d: number) =>
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-slate-800 capitalize">
          {currentDate.toLocaleDateString("vi-VN", {
            month: "long",
            year: "numeric",
          })}
        </h4>
        <div className="flex gap-1">
          <button
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
            className="w-7 h-7 rounded-full hover:bg-primary/10 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4 text-slate-400" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="w-7 h-7 rounded-full hover:bg-primary/10 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-0.5 mb-2">
        {dayNames.map((n) => (
          <div
            key={n}
            className="text-center text-[10px] font-bold text-primary/60 py-1"
          >
            {n}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((d, i) => (
          <div key={i} className="flex items-center justify-center">
            {d ? (
              <div
                className={`w-8 h-8 rounded-full text-[11px] font-semibold flex items-center justify-center ${
                  isToday(d)
                    ? "bg-primary text-white shadow shadow-primary/30"
                    : "text-slate-500 hover:bg-primary/5"
                }`}
              >
                {d}
              </div>
            ) : (
              <div className="w-8 h-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────── SIDEBAR FORM ──────────────────── */
function SidebarForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-orange-200/60">
      {/* Header - Orange background with decorative cartoon text */}
      <div className="bg-gradient-to-br from-primary via-orange-500 to-amber-500 px-5 py-6 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/8 rounded-full" />
        <div className="absolute top-3 left-6 w-3 h-3 bg-white/20 rounded-full" />
        <div className="absolute bottom-4 right-8 w-2 h-2 bg-white/15 rounded-full" />

        {/* Stylized text with stroke effect */}
        <div className="relative z-10">
          <h3
            className="text-[22px] font-black uppercase leading-tight tracking-wide"
            style={{
              color: "#fff",
              textShadow:
                "-2px -2px 0 #c2410c, 2px -2px 0 #c2410c, -2px 2px 0 #c2410c, 2px 2px 0 #c2410c, 0 3px 6px rgba(0,0,0,0.15)",
              paintOrder: "stroke fill",
              WebkitTextStroke: "1.5px #c2410c",
            }}
          >
            Tư vấn & Kiểm tra
          </h3>
          <h3
            className="text-[22px] font-black uppercase leading-tight tracking-wide mt-0.5"
            style={{
              color: "#fff",
              textShadow:
                "-2px -2px 0 #c2410c, 2px -2px 0 #c2410c, -2px 2px 0 #c2410c, 2px 2px 0 #c2410c, 0 3px 6px rgba(0,0,0,0.15)",
              paintOrder: "stroke fill",
              WebkitTextStroke: "1.5px #c2410c",
            }}
          >
            Miễn phí
          </h3>
        </div>

        {/* Small pencil/pen decoration */}
        <div className="absolute -right-1 -bottom-1 rotate-[-30deg] opacity-20">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </div>
      </div>

      {/* Form body */}
      <div className="bg-white p-6 pt-7">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              className="w-full border-0 border-b-2 border-slate-200 focus:border-primary outline-none py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors bg-transparent"
              placeholder="Họ và tên phụ huynh"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              className="w-full border-0 border-b-2 border-slate-200 focus:border-primary outline-none py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors bg-transparent"
              placeholder="Số điện thoại"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              className="w-full border-0 border-b-2 border-slate-200 focus:border-primary outline-none py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-colors bg-transparent"
              placeholder="E-mail"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-extrabold text-sm py-3.5 rounded-full shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300/50 transition-all hover:scale-[1.02] uppercase tracking-wider border-2 border-orange-300/50"
            >
              Đăng ký
            </button>
          </div>
        </form>
        <p className="text-[10px] text-slate-400 text-center mt-4 leading-relaxed">
          *Thông tin được đồng ý tuân theo{" "}
          <span className="text-primary font-semibold cursor-pointer hover:underline">
            chính sách bảo mật
          </span>
          <br />
          và bảo vệ thông tin cá nhân.
        </p>
      </div>
    </div>
  );
}

/* ──────────────────── MAIN PAGE ──────────────────── */
export default function TinTucPage() {
  const allArticles = useMemo(
    () =>
      newsCategories
        .flatMap((cat) =>
          cat.articles.map((a) => ({ ...a, categoryId: cat.id }))
        )
        .sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        ),
    []
  );

  const featured = allArticles[0];
  const sideNews = allArticles.slice(1, 5);
  const rest = allArticles.slice(1);

  const [showCount, setShowCount] = useState(4);
  const gridItems = rest.slice(0, showCount);
  const hasMore = showCount < rest.length;

  const upcoming = allArticles.filter(
    (a) => new Date(a.date) >= new Date()
  );

  const todayStr = new Date().toLocaleDateString("vi-VN");

  return (
    <div className="min-h-screen bg-[#faf9f7] text-slate-900">
      <Header />
      <main className="relative overflow-hidden">
        {/* ══════ HERO BANNER ══════ */}
<div className="relative bg-gradient-to-br from-orange-100 via-orange-50 to-amber-100 pt-24 pb-20 overflow-hidden">

  {/* Glow cam mềm */}
  <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-orange-400/40 rounded-full blur-3xl" />
  <div className="absolute -bottom-16 left-10 w-[240px] h-[240px] bg-amber-300/40 rounded-full blur-2xl" />

  {/* Grid nhẹ */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(251,146,60,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,0.25) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  {/* Content */}
  <div className="relative z-10 text-center px-4">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-orange-200 rounded-full px-4 py-1.5 mb-4">
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
      <span className="text-[#20385D] text-xs font-semibold uppercase tracking-widest">
        Tin tức & Sự kiện
      </span>
    </div>

    {/* Title */}
    
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tight leading-normal drop-shadow-sm bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
             Tin mới nhất
          </h2>

    {/* Sub */}
    <p className="text-gray-700 mt-3 text-sm md:text-base">
      Cập nhật nhanh các sự kiện và thông tin nổi bật
    </p>

    {/* Divider */}
    <div className="flex items-center justify-center gap-2 mt-5">
      <div className="h-px w-10 bg-orange-300" />
      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-md shadow-orange-400/40" />
      <div className="h-px w-10 bg-orange-300" />
    </div>

  </div>

  {/* Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 60" className="w-full h-[50px]" preserveAspectRatio="none">
      <path
        d="M0 60C120 40 240 20 360 20C480 20 600 40 720 45C840 50 960 40 1080 30C1200 20 1320 10 1440 10V60H0Z"
        fill="#fff7ed"
      />
    </svg>
  </div>
</div>

        {/* ── Background decorations for content area ── */}
        <div className="absolute pointer-events-none" style={{ top: "500px", left: 0, right: 0, bottom: 0 }}>
          <div
            className="absolute top-0 right-[-100px] w-[400px] h-[400px] rounded-full opacity-[0.03]"
            style={{
              background: "radial-gradient(circle, #f97316, transparent)",
            }}
          />
          <div
            className="absolute top-[400px] left-[-100px] w-[300px] h-[300px] rounded-full opacity-[0.02]"
            style={{
              background: "radial-gradient(circle, #60a5fa, transparent)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-10 max-w-[1200px]">

          {/* ════════════════ FEATURED ROW ════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:flex-row gap-5 mb-10"
          >
            {/* Featured card */}
            <Link
              href="#"
              className="lg:w-[62%] group block"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 border border-slate-100 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width:1024px) 100vw, 62vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <h2 className="absolute bottom-4 left-4 right-4 text-white font-extrabold text-lg md:text-xl leading-snug drop-shadow-md">
                    {featured.title}
                  </h2>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4 flex-1">
                    {featured.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(featured.date).toLocaleDateString("vi-VN")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="text-primary font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Xem thêm <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side news */}
            <div className="lg:w-[38%] bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden flex flex-col">
              <div className="px-5 py-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm">
                  <div className="w-1 h-5 bg-primary rounded-full" />
                  Tin nổi bật
                </h3>
              </div>
              <div className="flex-1 divide-y divide-slate-50">
                {sideNews.map((a) => (
                  <Link
                    key={`${a.categoryId}-${a.id}`}
                     href="#"
                    className="group flex gap-3 p-4 hover:bg-orange-50/40 transition-colors"
                  >
                    <div className="relative w-[92px] h-[72px] rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="72px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-slate-700 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                        {a.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                        <Calendar className="w-2.5 h-2.5" />
                        {new Date(a.date).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ════════════════ MAIN CONTENT ════════════════ */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* ── Grid (left) ── */}
            <div className="lg:w-[62%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {gridItems.map((a, i) => (
                  <motion.div
                    key={`g-${a.categoryId}-${a.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <Link
                      href="#"
                      className="group block h-full"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-500 h-full flex flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <Image
                            src={a.image}
                            alt={a.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width:768px) 100vw, 350px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <h3 className="text-[15px] font-bold text-slate-800 line-clamp-2 group-hover:text-primary transition-colors leading-snug mb-2">
                            {a.title}
                          </h3>
                          <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed flex-1">
                            {a.description}
                          </p>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2.5 border-t border-slate-50">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {new Date(a.date).toLocaleDateString("vi-VN")}
                            </span>
                            <span className="font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                              Đọc tiếp
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => setShowCount((c) => c + 4)}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 text-sm"
                  >
                    Xem thêm
                  </Button>
                </div>
              )}
            </div>

            {/* ── Sidebar (right) ── */}
            <div className="lg:w-[38%]">
              <div className="lg:sticky lg:top-20 space-y-5">
                <SidebarForm />

                {/* Calendar */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <MiniCalendar />
                </div>

                {/* Upcoming events */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-100">
                    <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <div className="w-1 h-5 bg-primary rounded-full" />
                      Sự kiện sắp diễn ra
                    </h3>
                  </div>
                  <div className="p-4">
                    {upcoming.length > 0 ? (
                      <div className="space-y-2">
                        {upcoming.slice(0, 3).map((ev) => (
                          <Link
                            key={`ev-${ev.categoryId}-${ev.id}`}
                            href="#"
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors"
                          >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Calendar className="w-4 h-4 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-bold text-slate-700 line-clamp-2 group-hover:text-primary transition-colors">
                                {ev.title}
                              </h4>
                              <span className="text-[10px] text-slate-400 mt-0.5 block">
                                {new Date(ev.date).toLocaleDateString("vi-VN")}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400 py-2">
                        Ngày {todayStr} không có sự kiện nào.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
