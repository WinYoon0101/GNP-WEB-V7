import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Trophy, Globe, TrendingUp, CheckCircle2, Award, Clock, Users, BookOpen, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function IELTSPage() {

   return (
      <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-red-200">

         {/* Custom Keyframes */}
         <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes shine {
          100% { left: 125%; }
        }
      `}} />

         <Header />

         <main className="">

            {/* 
          HERO SECTION - Red/Orange Theme
        */}
            <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 min-h-[auto] lg:min-h-[90vh] flex items-center py-20 lg:py-0">

               {/* Background Decorations */}
               <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <div className="absolute -top-[10%] -right-[20%] w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-white opacity-5 rounded-full blur-3xl animate-[spin_60s_linear_infinite]"
                     style={{ backgroundImage: 'conic-gradient(from 0deg, transparent 0deg, white 20deg, transparent 40deg)' }} />

                  <div className="absolute -bottom-[10%] -left-[10%] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-yellow-400 rounded-full blur-[80px] lg:blur-[120px] opacity-20" />

                  {/* Floating Icons */}
                  <div className="absolute top-[10%] right-[10%] lg:top-[15%] lg:right-[10%] text-white/10 animate-[float-slow_6s_ease-in-out_infinite]">
                     <Trophy className="w-16 h-16 lg:w-32 lg:h-32 rotate-12" />
                  </div>
                  <div className="absolute bottom-[15%] left-[5%] text-orange-100/20 animate-[float-slow_8s_ease-in-out_infinite_1s]">
                     <Globe className="w-12 h-12 lg:w-24 lg:h-24 -rotate-6" />
                  </div>
               </div>

               {/* Content */}
               <div className="container mx-auto px-4 md:px-24 relative z-20">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                     {/* Text Content */}
                     <div className="text-white space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 text-center lg:text-left order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-50 font-bold text-xs lg:text-sm tracking-wide shadow-lg mx-auto lg:mx-0">
                           <Award className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-300 fill-yellow-300" />
                           IELTS ACHIEVER PROGRAM
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
                           Chinh phục <br />
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                              Cánh cửa quốc tế
                           </span>
                        </h1>

                        <p className="text-lg lg:text-2xl text-orange-50 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0 opacity-90 px-4 lg:px-0">
                           Dành cho học sinh <strong>từ 15 tuổi</strong>. Lộ trình tin gọn, cam kết đầu ra, sẵn sàng du học.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start w-full sm:w-auto">
                           <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 hover:text-red-700 font-bold px-8 lg:px-10 h-14 rounded-full shadow-2xl shadow-red-900/20 transition-transform hover:-translate-y-1 w-full sm:w-auto" asChild>
                              <Link href="/lien-he">Đăng ký học thử</Link>
                           </Button>
                           <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-transparent h-14 rounded-full px-8 lg:px-10 w-full sm:w-auto" asChild>
                              <Link href="#lo-trinh">
                                 Xem lộ trình
                              </Link>
                           </Button>
                        </div>
                     </div>

                     {/* Hero Image */}
                     <div className="relative animate-in fade-in zoom-in duration-700 delay-200 flex justify-center lg:block order-1 lg:order-2">
                        <div className="relative z-10 w-[80vw] lg:w-full max-w-[400px] lg:max-w-[500px] aspect-[4/3] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl transform  transition-all duration-700 border-[6px] lg:border-[8px] border-white/20 mx-auto">
                           <Image
                              src="/ielts.jpg"
                              alt="IELTS Students"
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-1000"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent opacity-60" />
                        </div>
                        {/* Backdrops */}
                        <div className="absolute top-6 lg:top-10 left-4 lg:-left-4 w-full h-full max-w-[400px] lg:max-w-[500px] bg-white opacity-10 rounded-[2.5rem] rotate-3 z-0 pointer-events-none" />
                     </div>
                  </div>
               </div>
            </section>

            {/* 
           STATS BAR
        */}
            <ScrollReveal animation="fadeInUp"><section className="relative -mt-16 lg:-mt-12 z-30 pb-16 lg:pb-20">
               <div className="container mx-auto px-4 md:px-24">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-red-500/10 border border-white/50">
                     {[
                        { icon: TrendingUp, val: "7.0+", sub: "Band Score Target" },
                        { icon: Users, val: "10-12", sub: "Học viên / Lớp" },
                        { icon: Clock, val: "3-4 Tháng", sub: "Thời gian khóa học" },
                        { icon: Award, val: "Cam kết", sub: "Đầu ra bằng văn bản" }
                     ].map((item, idx) => (
                        <div key={idx} className="text-center group">
                           <div className="mx-auto w-10 h-10 lg:w-14 lg:h-14 bg-red-50 rounded-xl lg:rounded-2xl flex items-center justify-center mb-2 lg:mb-4 group-hover:bg-red-500 transition-colors duration-500 shadow-sm">
                              <item.icon className="w-5 h-5 lg:w-7 lg:h-7 text-red-500 group-hover:text-white transition-colors duration-500" />
                           </div>
                           <h3 className="font-bold text-base lg:text-lg text-slate-800 mb-0.5 lg:mb-1">{item.val}</h3>
                           <p className="text-xs lg:text-sm text-slate-500 font-medium">{item.sub}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </section></ScrollReveal>

            {/* 
           WHY CHOOSE? 
        */}
            <ScrollReveal animation="fadeInUp"><section className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
               <div className="container mx-auto px-4 md:px-24 relative z-10">
                  <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
                     <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 lg:mb-6 tracking-tight">
                        Giải pháp <span className="text-red-500 relative inline-block">
                           toàn diện
                           <svg className="absolute w-full h-2 lg:h-3 -bottom-1 left-0 text-red-200" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" /></svg>
                        </span>
                     </h2>
                     <p className="text-base lg:text-lg text-slate-600 leading-relaxed px-4">
                        Phương pháp đào tạo tập trung vào chiến thuật làm bài và thực hành chuyên sâu 4 kỹ năng.
                     </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
                     {[
                        {
                           title: "Chiến thuật làm bài",
                           desc: "Nắm vững các dạng bài thi, mẹo làm bài nhanh và chính xác để tối ưu hóa điểm số.",
                           iconChar: "🎯",
                           borderColor: "border-red-400"
                        },
                        {
                           title: "Thực hành sâu",
                           desc: "Giải đề thi thử (Mock test) thường xuyên với độ khó tương đương đề thi thật.",
                           iconChar: "📝",
                           borderColor: "border-orange-400"
                        },
                        {
                           title: "Feedback chi tiết",
                           desc: "Được chấm chữa bài Writing và Speaking trực tiếp 1:1 với giáo viên 8.0+.",
                           iconChar: "🗣️",
                           borderColor: "border-yellow-400"
                        }
                     ].map((card, i) => (
                        <div key={i} className={`bg-white p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-lg shadow-slate-200/50 border-t-4 ${card.borderColor} hover:-translate-y-2 transition-all duration-300 group`}>
                           <div className="text-5xl lg:text-6xl mb-6 lg:mb-8 transform group-hover:scale-110 transition-transform duration-300">{card.iconChar}</div>
                           <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">{card.title}</h3>
                           <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                              {card.desc}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </section></ScrollReveal>

            {/* 
           ROADMAP
        */}
            <ScrollReveal animation="fadeInUp"><section id="lo-trinh" className="py-20 lg:py-32 bg-white relative">
               <div className="container mx-auto px-4 md:px-24">
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                     {/* Left: Sticky Info */}
                     <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <span className="text-red-500 font-extrabold uppercase tracking-widest text-sm mb-2 lg:mb-3 block">Lộ trình IELTS</span>
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6 lg:mb-8 leading-tight">
                           Bứt phá <br className="hidden lg:block" />điểm số
                        </h2>
                        <p className="text-slate-600 text-base lg:text-lg mb-6 lg:mb-8 leading-relaxed">
                           Chúng tôi xây dựng lộ trình riêng biệt phù hợp với trình độ đầu vào của từng học viên.
                        </p>

                        <div className="bg-gradient-to-br from-red-50 to-white p-6 lg:p-8 rounded-3xl border border-red-100 shadow-lg">
                           <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2 text-lg lg:text-xl">
                              <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-red-500 fill-red-500" />
                              Hỗ trợ đặc biệt
                           </h4>
                           <ul className="space-y-3 lg:space-y-4">
                              {["Thư viện đề thi phong phú", "Phòng thi thử chuẩn quốc tế", "Hỗ trợ đăng ký thi IDP/BC"].map(item => (
                                 <li key={item} className="flex items-center gap-3 text-slate-700 font-medium text-sm lg:text-base">
                                    <Star className="w-4 h-4 text-red-500 flex-shrink-0 fill-red-500" /> {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     {/* Right: Levels */}
                     <div className="lg:w-2/3 space-y-8 lg:space-y-12 relative pt-2 lg:pt-4">
                        {/* Vertical Line */}
                        <div className="absolute left-[39px] lg:left-[39px] top-6 bottom-16 w-1 bg-slate-100" />

                        {[
                           {
                              step: "4.0+",
                              name: "FOUNDATION",
                              desc: "Xây dựng nền tảng ngữ pháp và từ vựng IELTS. Làm quen với cấu trúc bài thi.",
                              color: "bg-orange-500",
                              shadow: "shadow-orange-500/30"
                           },
                           {
                              step: "5.5+",
                              name: "INTERMEDIATE",
                              desc: "Phát triển chiến thuật làm bài Reading & Listening. Nâng cao kỹ năng Writing Task 1.",
                              color: "bg-red-500",
                              shadow: "shadow-red-500/30"
                           },
                           {
                              step: "6.5+",
                              name: "ADVANCED",
                              desc: "Hoàn thiện 4 kỹ năng. Luyện đề cường độ cao và chữa bài chi tiết để đạt band điểm mục tiêu.",
                              color: "bg-rose-600",
                              shadow: "shadow-rose-600/30"
                           }
                        ].map((item, idx) => (
                           <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                              {/* Number Bubble */}
                              <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${item.color} ${item.shadow} text-white flex items-center justify-center font-bold text-lg shadow-lg z-10 group-hover:scale-110 transition-transform duration-300 relative text-center leading-tight px-2`}>
                                 {item.step}
                              </div>

                              {/* Card Content */}
                              <div className="flex-1 p-6 lg:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-red-100 relative overflow-hidden ml-4 md:ml-0">
                                 {/* Hover Shine */}
                                 <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1s_ease-in-out_forwards] z-0 pointer-events-none">
                                    <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-slate-50/50 to-transparent skew-x-12" />
                                 </div>

                                 <div className="relative z-10">
                                    <h3 className={`text-xl lg:text-2xl font-bold ${item.color.replace('bg-', 'text-')} mb-2 lg:mb-3`}>{item.name}</h3>
                                    <p className="text-slate-600 text-base lg:text-lg leading-relaxed">{item.desc}</p>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section></ScrollReveal>

            {/* 
           CTA 
        */}
            <ScrollReveal animation="fadeInUp"><section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />

               <div className="container mx-auto px-4 relative z-10 text-center">
                  <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 lg:mb-8 tracking-tight drop-shadow-lg">
                     Sẵn sàng <span className="text-red-500">Vươn ra biển lớn</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto mb-8 lg:mb-12 leading-relaxed">
                     Đăng ký thi thử miễn phí để xác định trình độ hiện tại của bạn.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                     <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 h-14 lg:h-16 px-10 lg:px-12 rounded-full text-base lg:text-lg font-bold shadow-2xl shadow-red-600/30 transition-transform hover:-translate-y-1 w-full sm:w-auto" asChild>
                        <Link href="/lien-he">Đăng ký ngay</Link>
                     </Button>
                  </div>
               </div>
            </section></ScrollReveal>

         </main>

         <Footer />
      </div>
   )
}
