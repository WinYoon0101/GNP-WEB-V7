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
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <ChevronLeft className="w-4 h-4 text-slate-500" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
            className="w-7 h-7 rounded-full hover:bg-orange-100 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-slate-500" />
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
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/30 font-bold"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
      <div className="bg-slate-900 px-6 py-8 text-center relative overflow-hidden">
        {/* Modern decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">
            Tư vấn & Kiểm tra
          </h3>
          <p className="text-orange-400 font-medium tracking-wide uppercase text-sm">
            Hoàn toàn miễn phí
          </p>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-all outline-none"
              placeholder="Họ và tên phụ huynh"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-all outline-none"
              placeholder="Số điện thoại"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <input
              className="w-full bg-slate-50 border border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 transition-all outline-none"
              placeholder="E-mail (tùy chọn)"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Đăng ký ngay
            </button>
          </div>
        </form>
        <p className="text-xs text-slate-400 text-center mt-4">
          Bằng việc đăng ký, bạn đồng ý với{" "}
          <Link href="/chinh-sach-bao-mat" className="text-orange-500 hover:underline">
            chính sách bảo mật
          </Link>{" "}
          của chúng tôi.
        </p>
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

  // Lọc danh mục duy nhất
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
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
            <Filter className="w-10 h-10 text-orange-500" />
          </div>
          <p className="text-slate-500 font-medium">Chưa có bài viết nào được đăng.</p>
        </main>
        <Footer />
      </div>
    );
  }

  // Phân chia layout: 1 Nổi bật, 4 Tin nhỏ, còn lại là Grid
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
        {/* ══════ MODERN HERO BANNER ══════ */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">
          {/* Abstract Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-b from-orange-500/20 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl opacity-50" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Tin tức & Sự kiện
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Cập nhật thông tin <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  mới nhất từ GNP
                </span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Khám phá các bài viết chia sẻ kiến thức, kinh nghiệm học tập và thông tin sự kiện nổi bật dành cho học sinh và phụ huynh.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════ CATEGORY FILTER ══════ */}
        <div className="sticky top-[72px] lg:top-[80px] z-30 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    setShowCount(6);
                  }}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.slug
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
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
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-700 mb-2">Không tìm thấy bài viết</h3>
              <p className="text-slate-500">Chưa có bài viết nào trong danh mục này.</p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-6 text-orange-500 font-medium hover:underline"
              >
                Xem tất cả tin tức
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
                    className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group"
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
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {featured.category}
                      </div>
                    </Link>
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          {new Date(featured.date).toLocaleDateString("vi-VN", { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-orange-500" />
                          {featured.readTime}
                        </span>
                      </div>
                      <Link href={`/tin-tuc/${featured.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                          {featured.title}
                        </h2>
                      </Link>
                      <p className="text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                        {featured.description}
                      </p>
                      <Link
                        href={`/tin-tuc/${featured.slug}`}
                        className="inline-flex items-center gap-2 text-orange-600 font-semibold group/btn"
                      >
                        Đọc tiếp
                        <span className="bg-orange-100 p-1.5 rounded-full group-hover/btn:bg-orange-500 group-hover/btn:text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* Trending Grid (Next 4 posts) */}
                {sideNews.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-orange-500 rounded-full inline-block"></span>
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
                          <Link href={`/tin-tuc/${a.slug}`} className="group flex gap-4 bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-50 hover:shadow-lg transition-all duration-300">
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
                              <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-2">
                                {a.category}
                              </span>
                              <h4 className="text-base font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors leading-snug">
                                {a.title}
                              </h4>
                              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
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
                    <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3 border-t border-slate-200 pt-8">
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
                          <Link href={`/tin-tuc/${a.slug}`} className="group block h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <Image
                                src={a.image}
                                alt={a.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width:768px) 100vw, 350px"
                              />
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                                {a.category}
                              </div>
                            </div>
                            <div className="p-6">
                              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                                <span className="flex items-center gap-1.5">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {new Date(a.date).toLocaleDateString("vi-VN")}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-slate-800 line-clamp-2 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                                {a.title}
                              </h3>
                              <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                                {a.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    {hasMore && (
                      <div className="flex justify-center mt-12">
                        <Button
                          onClick={() => setShowCount((c) => c + 6)}
                          className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
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
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6">
                    <MiniCalendar />
                  </div>

                  {/* Upcoming Events Widget */}
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
                    <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
                      <h3 className="font-bold text-slate-800 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-orange-500" />
                        Sự kiện sắp diễn ra
                      </h3>
                    </div>
                    <div className="p-4">
                      {upcoming.length > 0 ? (
                        <div className="space-y-1">
                          {upcoming.slice(0, 4).map((ev) => (
                            <Link key={ev.id} href={`/tin-tuc/${ev.slug}`} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                              <div className="w-12 h-12 rounded-xl bg-orange-50 flex flex-col items-center justify-center shrink-0 border border-orange-100 group-hover:bg-orange-500 transition-colors">
                                <span className="text-[10px] font-bold text-orange-600 group-hover:text-white uppercase leading-none mb-1">
                                  {new Date(ev.date).toLocaleDateString("vi-VN", { month: "short" })}
                                </span>
                                <span className="text-lg font-black text-orange-600 group-hover:text-white leading-none">
                                  {new Date(ev.date).getDate()}
                                </span>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-slate-700 line-clamp-2 group-hover:text-orange-600 transition-colors mb-1">
                                  {ev.title}
                                </h4>
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {new Date(ev.date).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' })}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-sm text-slate-500">
                            Chưa có sự kiện nào trong thời gian tới.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
