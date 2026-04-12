"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Users, Star, BookMarked, ArrowRight } from "lucide-react";
import Link from "next/link";

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
      en: "Communication skills",
      icon: MessageCircle,
      theme: "blue"
    },
    {
      vi: "Quản lý thời gian",
      en: "Time management",
      icon: Clock,
      theme: "orange"
    },
    {
      vi: "Kỹ năng làm việc nhóm",
      en: "Teamwork",
      icon: Users,
      theme: "blue"
    },
    {
      vi: "Sự tự tin",
      en: "Confidence",
      icon: Star,
      theme: "orange"
    },
    {
      vi: "Hồ sơ & Dự án",
      en: "Portfolio & project",
      icon: BookMarked,
      theme: "blue",
      colSpan: "sm:col-span-2",
    },
  ];

  return (
    <section className="relative py-28 lg:py-40 bg-[#0F172A] font-sans overflow-hidden">
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

      <div className="max-w-[85rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full lg:w-5/12 flex flex-col items-start"
          >
            <motion.p
              variants={itemVariants}
              className="text-[#F97316] font-bold uppercase tracking-[0.2em] text-xs mb-6 bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20"
            >
              Learning Outcomes
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-white tracking-wide mb-8 leading-[1.1]"
            >
              Học viên đạt được
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-300 font-medium mb-12 max-w-lg leading-[1.8]"
            >
              Chương trình trang bị bộ kỹ năng toàn diện, tạo đà bứt phá cho năm học mới và sự tự tin bước vào tương lai vững chắc.
            </motion.p>

            <motion.div variants={itemVariants} className="relative group/btn inline-flex">
              {/* Glowing pulse behind button */}
              <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-40 group-hover/btn:opacity-80 animate-pulse transition-opacity duration-500 pointer-events-none"></div>
              
              <Link
                href="/lien-he"
                className="relative inline-flex items-center gap-3 bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white hover:from-[#ea580c] hover:to-[#f97316] px-9 py-4 rounded-full font-bold transition-all duration-300 text-lg group-hover/btn:scale-[1.03] shadow-lg"
              >
                Nhận tư vấn chi tiết
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT: Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full lg:w-7/12 relative"
          >
            {/* Soft radial glass-backing glow for cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/[0.02] blur-[80px] rounded-[50px] -z-10 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {outcomes.map((item, idx) => {
                const isBlue = item.theme === "blue";
                
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`group bg-white/95 backdrop-blur-md rounded-[20px] p-7 md:p-8 transition-all duration-500 hover:-translate-y-[6px] cursor-default border border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.06)] ${
                      isBlue 
                        ? 'hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:border-blue-200' 
                        : 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] hover:border-orange-200'
                    } ${item.colSpan || ""}`}
                  >
                    <div className="flex flex-col gap-6">
                      <div
                        className={`w-[68px] h-[68px] rounded-[18px] flex items-center justify-center shrink-0 transition-transform duration-500 ease-out group-hover:scale-[1.1] group-hover:rotate-[3deg] ${
                          isBlue 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'bg-orange-50 text-orange-500'
                        }`}
                      >
                        <item.icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight transition-colors">
                          {item.vi}
                        </h4>
                        <p className="text-[13px] font-semibold text-slate-500 mt-1.5 uppercase tracking-wider">
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
      </div>
    </section>
  );
}
