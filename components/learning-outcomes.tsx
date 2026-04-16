"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Users, Star, BookMarked, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }, 
  },
};

export function LearningOutcomes() {
  const outcomes = [
    {
      vi: "Kỹ năng giao tiếp",
      en: "Communication",
      icon: MessageCircle,
      theme: "blue",
      colSpan: ""
    },
    {
      vi: "Quản lý thời gian",
      en: "Time management",
      icon: Clock,
      theme: "orange",
      colSpan: ""
    },
    {
      vi: "Kỹ năng nhóm",
      en: "Teamwork",
      icon: Users,
      theme: "blue",
      colSpan: ""
    },
    {
      vi: "Sự tự tin",
      en: "Confidence",
      icon: Star,
      theme: "orange",
      colSpan: ""
    },
    {
      vi: "Hồ sơ & Dự án",
      en: "Portfolio & project",
      icon: BookMarked,
      theme: "blue",
      colSpan: "sm:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <section className="relative py-28 lg:py-40 bg-[#0F172A] font-sans overflow-hidden">
      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-slate-50">
          <path d="M0,0 C300,80 900,80 1200,0 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Animated Subtle Background Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
           animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
           animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-orange-500/10 rounded-full blur-[140px]"
        />
      </div>

      <div className="max-w-[85rem] mx-auto px-5 lg:px-10 relative z-10">
        
        {/* TOP ROW: Text & KV Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20 inline-block"
            >
              Learning Outcomes
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-[1.1]"
            >
              Học viên đạt được
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-lg leading-relaxed"
            >
              Chương trình trang bị bộ kỹ năng thiết yếu, tạo đà bứt phá cho năm học mới và sự tự tin bước vào tương lai vững chắc.
            </motion.p>

            <motion.div variants={itemVariants} className="relative group/btn inline-flex">
              {/* Glowing pulse behind button */}
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-40 group-hover/btn:opacity-80 animate-pulse transition-opacity duration-500 pointer-events-none"></div>
              
              <button
                onClick={() => window.dispatchEvent(new Event('open-summer-register'))}
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white hover:from-[#ea580c] hover:to-[#f97316] px-8 py-3.5 rounded-full font-bold transition-all duration-300 text-base md:text-lg group-hover/btn:scale-[1.03] shadow-lg"
              >
                Nhận tư vấn chi tiết
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT: KV Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-7/12 relative group z-0"
          >
            {/* Glow backing */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />
            
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 ">
               <img 
                 src="/images/summer-course/KV_2.jpg" 
                 alt="Tổng quan chương trình Summer Course" 
                 className="w-full h-full object-contain transition-transform duration-1000"
                 onError={(e) => {
                   e.currentTarget.src = "/KV_2.jpg";
                 }}
               />

            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW: Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="relative"
        >
          {/* Soft radial glass-backing glow for cards */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/[0.02] blur-[80px] rounded-[50px] -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {outcomes.map((item, idx) => {
              const isBlue = item.theme === "blue";
              
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`group bg-white/95 backdrop-blur-md rounded-[20px] p-6 lg:p-7 transition-all duration-500 hover:-translate-y-[6px] cursor-default border border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${
                    isBlue 
                      ? 'hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200' 
                      : 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] hover:border-orange-200'
                  } ${item.colSpan || ""}`}
                >
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.1] group-hover:-rotate-3 ${
                        isBlue 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'bg-orange-50 text-orange-500'
                      }`}
                    >
                      <item.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 tracking-tight transition-colors">
                        {item.vi}
                      </h4>
                      <p className="text-[11px] font-bold text-slate-500 mt-1 uppercase tracking-wider">
                        {item.en}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-[#f0f4ff]">
            <path d="M0,120 C300,0 900,0 1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
}
