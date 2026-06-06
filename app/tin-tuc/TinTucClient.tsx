"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Loader2,
  CheckCircle2,
  MessageSquareText,
  User,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { FooterWrapper } from "@/components/FooterWrapper";

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
            className="w-7 h-7 rounded-full hover:bg-orange-100 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-orange-500" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="w-7 h-7 rounded-full hover:bg-orange-100 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-orange-500" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((n) => (
          <div
            key={n}
            className="text-center text-[10px] font-bold text-slate-400 py-1"
          >
            {n}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div key={i} className="flex items-center justify-center">
            {d ? (
              <div
                className={`w-7 h-7 rounded-full text-[11px] font-medium flex items-center justify-center transition-all ${
                  isToday(d)
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/40 font-bold"
                    : "text-slate-600 hover:bg-orange-50 hover:text-orange-600 cursor-pointer"
                }`}
              >
                {d}
              </div>
            ) : (
              <div className="w-7 h-7" />
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    // Khởi tạo Supabase client
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Gửi dữ liệu lên bảng consultations
    const { error } = await supabase
      .from('consultations')
      .insert([
        { 
          name: form.name, 
          phone: form.phone, 
          email: form.email || null 
        }
      ]);

    setIsLoading(false);

    if (error) {
      console.error("Lỗi khi lưu form:", error);
      setErrorMsg("Có lỗi xảy ra, vui lòng thử lại sau.");
    } else {
      setIsSuccess(true);
      setForm({ name: "", phone: "", email: "" });
      
      // Tự động ẩn thông báo thành công sau 5 giây
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden relative">
      {/* Vạch màu cam trang trí phía trên cùng */}
      <div className="h-1.5 w-full bg-orange-500 absolute top-0 left-0 z-10"></div>

      {/* Header form rõ ràng, gọn gàng */}
      <div className="pt-8 pb-4 px-6 text-center">
       
        <h3 className="text-2xl font-extrabold text-orange-500 mb-2">
          Nhận tư vấn miễn phí
        </h3>
        <p className="text-slate-500 text-sm font-medium px-2">
          Để lại thông tin, đội ngũ GNP English sẽ liên hệ hỗ trợ bạn sớm nhất!
        </p>
      </div>

      <div className="px-6 pb-8 pt-2">
        {isSuccess ? (
          <div className="text-center py-6 animate-in fade-in zoom-in duration-300 bg-green-50 rounded-2xl border border-green-100">
            <div className="w-14 h-14 bg-white text-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-green-800 mb-1">Thành công!</h4>
            <p className="text-sm text-green-600 px-4 pb-2">
              Chúng tôi đã nhận được thông tin của bạn.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center font-medium">
                {errorMsg}
              </div>
            )}
            
            {/* Input Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                placeholder="Họ và tên phụ huynh / học sinh"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={isLoading}
                required
              />
            </div>

            {/* Input Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-slate-400" />
              </div>
              <input
                className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                placeholder="Số điện thoại liên hệ"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                disabled={isLoading}
                required
              />
            </div>

            {/* Input Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                className="w-full bg-white border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                placeholder="E-mail (tùy chọn)"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-base py-3.5 rounded-xl shadow-[0_4px_12px_rgba(249,115,22,0.25)] hover:shadow-[0_6px_16px_rgba(249,115,22,0.35)] hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Đang xử lý...
                  </>
                ) : (
                  "Đăng ký ngay"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ──────────────────── MAIN PAGE ──────────────────── */
export default function TinTucClient({ posts }: { posts: any[] }) {
  const allArticles = useMemo(
    () =>
      posts.map((p) => ({
        id: p.id,
        title: p.title,
        description: p.excerpt || "",
        date: p.created_at,
        readTime: "3 phút đọc",
        category: p.category?.name || "Tin tức",
        categoryId: p.category?.slug || "tin-tuc",
        image: p.thumbnail || "/default-news.jpg",
        slug: p.slug,
      })),
    [posts]
  );

  const categories = useMemo(() => {
    const cats = new Map();
    cats.set("all", { name: "Tất cả tin tức", slug: "all" });
    allArticles.forEach((a) => {
      if (!cats.has(a.categoryId)) {
        cats.set(a.categoryId, { name: a.category, slug: a.categoryId });
      }
    });
    return Array.from(cats.values());
  }, [allArticles]);

  const [activeCategory, setActiveCategory] = useState("all");
  const [showCount, setShowCount] = useState(6);

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return allArticles;
    return allArticles.filter((a) => a.categoryId === activeCategory);
  }, [allArticles, activeCategory]);

  if (!allArticles.length) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center flex-col gap-4">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center shadow-inner">
            <Filter className="w-10 h-10 text-orange-500" />
          </div>
          <p className="text-slate-500 font-medium">Chưa có bài viết nào được đăng.</p>
        </main>
        <FooterWrapper />
      </div>
    );
  }

  const featured = filteredArticles[0];
  const sideNews = filteredArticles.slice(1, 5);
  const rest = filteredArticles.slice(5);

  const gridItems = rest.slice(0, showCount);
  const hasMore = showCount < rest.length;

  const upcoming = allArticles.filter(
    (a) => new Date(a.date) >= new Date()
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Header />
      <main className="relative">
        {/* ══════ MODERN ORANGE HERO BANNER ══════ */}
        <section className="relative pt-22 pb-14 lg:pt-24 lg:pb-24 overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/10 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-yellow-300/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Tin tức & Sự kiện
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
                Cập nhật thông tin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-200">
                  mới nhất từ GNP English
                </span>
              </h1>
              <p className="text-orange-50 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                Khám phá các bài viết chia sẻ kiến thức, kinh nghiệm học tập và thông tin sự kiện nổi bật dành cho học sinh và phụ huynh.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════ CATEGORY FILTER ══════ */}
        <div className="sticky top-[72px] lg:top-[80px] z-30 bg-white/90 backdrop-blur-xl border-b border-orange-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto md:px-18 py-4 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    setShowCount(6);
                  }}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                      : "bg-slate-50 border border-slate-100 text-slate-600 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-16 max-w-[1280px]">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-orange-100 shadow-sm max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Không tìm thấy bài viết</h3>
              <p className="text-slate-500">Chưa có bài viết nào trong danh mục này.</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-6 text-orange-500 font-bold hover:text-orange-600 hover:underline flex items-center justify-center gap-2 mx-auto"
              >
                Xem tất cả tin tức <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* ── MAIN CONTENT AREA (LEFT) ── */}
              <div className="lg:w-[65%] flex flex-col gap-10">
                {/* Featured Section */}
                {featured && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-orange-50 group hover:shadow-xl hover:border-orange-100 transition-all duration-300"
                  >
                    <Link href={`/tin-tuc/${featured.slug}`} className="md:w-1/2 block overflow-hidden rounded-2xl relative">
                      <div className="aspect-[4/3] md:aspect-[4/5] relative w-full h-full">
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width:768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                      <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                        {featured.category}
                      </div>
                    </Link>
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-4 bg-slate-50 w-fit px-3 py-1.5 rounded-lg border border-slate-100">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          {new Date(featured.date).toLocaleDateString("vi-VN", { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-orange-500" />
                          {featured.readTime}
                        </span>
                      </div>
                      <Link href={`/tin-tuc/${featured.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                          {featured.title}
                        </h2>
                      </Link>
                      <p className="text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                        {featured.description}
                      </p>
                      <Link
                        href={`/tin-tuc/${featured.slug}`}
                        className="inline-flex items-center gap-2 text-orange-600 font-bold group/btn w-fit"
                      >
                        Đọc tiếp
                        <span className="bg-orange-100 p-2 rounded-full group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* Trending Grid */}
                {sideNews.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full inline-block shadow-sm"></span>
                      Đáng chú ý
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {sideNews.map((a, i) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          key={a.id}
                        >
                          <Link href={`/tin-tuc/${a.slug}`} className="group flex gap-4 bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                            <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                              <Image
                                src={a.image}
                                alt={a.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="112px"
                              />
                            </div>
                            <div className="flex flex-col justify-center">
                              <span className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-2">
                                {a.category}
                              </span>
                              <h4 className="text-base font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                                {a.title}
                              </h4>
                              <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                                {new Date(a.date).toLocaleDateString("vi-VN")}
                              </span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Grid for remaining posts */}
                {gridItems.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-3 border-t border-slate-200 pt-10">
                      Tất cả bài viết
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      {gridItems.map((a, i) => (
                        <motion.div
                          key={a.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Link href={`/tin-tuc/${a.slug}`} className="group h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1 hover:border-orange-100 transition-all duration-300 flex flex-col">
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <Image
                                src={a.image}
                                alt={a.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width:768px) 100vw, 350px"
                              />
                              <div className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                {a.category}
                              </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                              <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5 text-orange-400" />
                                  {new Date(a.date).toLocaleDateString("vi-VN")}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                                {a.title}
                              </h3>
                              <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                                {a.description}
                              </p>
                              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-orange-500 text-sm font-bold group-hover:text-orange-600 transition-colors">
                                Xem chi tiết <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {hasMore && (
                      <div className="flex justify-center mt-12">
                        <Button
                          onClick={() => setShowCount((c) => c + 6)}
                          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                        >
                          Tải thêm bài viết
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* ── SIDEBAR (RIGHT) ── */}
              <div className="lg:w-[35%]">
                <div className="sticky top-[160px] space-y-8">
                  {/* Registration Form Widget */}
                  <SidebarForm />

                  {/* Calendar Widget */}
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-orange-100 transition-colors p-6">
                    <MiniCalendar />
                  </div>

                
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterWrapper />
    </div>
  );
}