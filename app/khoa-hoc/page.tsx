import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StaircaseCourseCards } from "@/components/staircase-course-cards"
import { FAQSection } from "@/components/FAQSection"

export default function CoursesPage() {

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">

      {/* Clean Header Spacing */}

      <Header />
      <main className="flex-grow ">

        {/* 
          HERO SECTION 
          - Updated: Removed gradients and blurs
        */}
      

        {/* 
          COURSES SECTION
          - Redesigned to Staircase Layout
        */}
        <StaircaseCourseCards />

        {/* 
          ADDITIONAL INFO / CTA
        */}
        <section className="pb-24 bg-white border-t border-orange-100 relative">
            <FAQSection /> 
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-slate-900 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
              {/* Deco circles on card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide leading-tight">
                  Sẵn sàng cho hành trình <br />
                  <span className="text-orange-500">Công dân toàn cầu?</span>
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Đăng ký tư vấn ngay hôm nay để nhận lộ trình học tập chi tiết và ưu đãi học phí đặc biệt.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a href="/lien-he" className="inline-flex items-center justify-center px-10 py-5 bg-orange-500 text-white font-bold uppercase tracking-wider rounded-2xl hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-xl hover:shadow-orange-500/50 group/btn transform hover:-translate-y-1">
                  Đăng ký ngay
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
