"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Sunset,
  Brain,
  Users,
  Wrench,
  Sprout,
  Lightbulb,
  UserPlus,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function DailyStructure() {
  return (
    <section className="py-32 lg:py-48 bg-white relative overflow-hidden font-sans">
      {/* Immersive Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
      </div>

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 relative z-10">
        {/* Main Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-32 lg:mb-48 flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-100 mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
              Daily Routine
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-[-0.04em] mb-8 relative">
            CẤU TRÚC MỘT NGÀY
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl text-balance leading-relaxed">
            Mỗi ngày là một hành trình được thiết kế chuyên biệt để đem lại sự cân bằng hoàn hảo giữa <strong className="text-blue-600 font-semibold">Tập trung</strong> và <strong className="text-orange-500 font-semibold">Sáng tạo</strong>.
          </motion.p>
        </motion.div>

        {/* Timeline Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* Extremely subtle central dividing line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-slate-100 via-slate-200/80 to-slate-100 -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
            
            {/* LEFT COLUMN: Morning */}
            <div className="md:pr-16 lg:pr-24 flex flex-col md:items-end z-10 w-full">
              {/* Section Header */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8 mb-20 w-full md:justify-start"
              >
                {/* Massive Premium Icon */}
                <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center p-1 shrink-0 shadow-[0_20px_60px_rgba(37,99,235,0.25)] relative group">
                  <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2rem]"></div>
                  <div className="w-full h-full rounded-[1.8rem] flex items-center justify-center bg-gradient-to-b from-white/20 to-transparent border border-white/30 backdrop-blur-md">
                    <Sun className="w-12 h-12 text-white drop-shadow-md" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="md:text-right text-left flex-1">
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                    Buổi sáng
                    <span className="font-light text-slate-400 block sm:inline sm:ml-2">
                      | GPS
                    </span>
                  </h3>
                  <p className="mt-4 uppercase tracking-[0.2em] font-bold text-sm text-blue-600">
                    Morning Focus
                  </p>
                </div>
              </motion.div>

              {/* Items List */}
              <div className="flex flex-col gap-12 w-full md:max-w-md">
                <Item
                  align="right"
                  icon={<Brain className="w-6 h-6" />}
                  vi="Tư duy phát triển"
                  en="Growth mindset"
                  theme="blue"
                />
                <Item
                  align="right"
                  icon={<Users className="w-6 h-6" />}
                  vi="Con người"
                  en="People & Interactions"
                  theme="blue"
                />
                <Item
                  align="right"
                  icon={<Wrench className="w-6 h-6" />}
                  vi="Kỹ năng"
                  en="Essential Skills"
                  theme="blue"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Afternoon */}
            <div className="md:pl-16 lg:pl-24 flex flex-col items-start z-10 md:mt-64 pt-20 md:pt-0 relative w-full">
              
              {/* Divider for mobile to separate Morning and Afternoon */}
              <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-slate-200" />
              
              {/* Section Header */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20 w-full"
              >
                {/* Massive Premium Icon */}
                <div className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-[#F97316] to-[#FB923C] flex items-center justify-center p-1 shrink-0 shadow-[0_20px_60px_rgba(249,115,22,0.25)] relative group">
                  <div className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-[2rem]"></div>
                  <div className="w-full h-full rounded-[1.8rem] flex items-center justify-center bg-gradient-to-b from-white/20 to-transparent border border-white/30 backdrop-blur-md">
                    <Sunset className="w-12 h-12 text-white drop-shadow-md" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="text-left flex-1">
                  <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                    Buổi chiều
                    <span className="font-light text-slate-400 block sm:inline sm:ml-2">
                      | GNP
                    </span>
                  </h3>
                  <p className="mt-4 uppercase tracking-[0.2em] font-bold text-sm text-orange-500">
                    Afternoon Expression
                  </p>
                </div>
              </motion.div>

              {/* Items List */}
              <div className="flex flex-col gap-12 w-full md:max-w-md">
                <Item
                  align="left"
                  icon={<Sprout className="w-6 h-6" />}
                  vi="Trải nghiệm"
                  en="Growth through experience"
                  theme="orange"
                />
                <Item
                  align="left"
                  icon={<Lightbulb className="w-6 h-6" />}
                  vi="Sáng tạo"
                  en="Novelty activities"
                  theme="orange"
                />
                <Item
                  align="left"
                  icon={<UserPlus className="w-6 h-6" />}
                  vi="Xã hội"
                  en="Team & social activities"
                  theme="orange"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Minimal & Elegant Item Component
function Item({
  align,
  icon,
  vi,
  en,
  theme,
}: {
  align: "left" | "right";
  icon: React.ReactNode;
  vi: string;
  en: string;
  theme: "blue" | "orange";
}) {
  const isRight = align === "right"; // Indicates position relative to the center timeline (Right means left column looking right)

  return (
    <motion.div
      variants={itemVariants}
      className={`group flex items-center gap-6 md:gap-8 cursor-default ${
        isRight ? "md:flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] flex items-center justify-center shrink-0 transition-all duration-500 border
          ${
            theme === "blue"
              ? "border-blue-100/50 bg-blue-50/50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]"
              : "border-orange-100/50 bg-orange-50/50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.35)]"
          }
        `}
      >
        <div className="transform group-hover:scale-110 transition-transform duration-500 ease-out">
          {icon}
        </div>
      </div>

      <div className={`flex flex-col flex-1 ${isRight ? "md:text-right" : "text-left"}`}>
        <h4 className="text-2xl lg:text-[28px] font-bold text-slate-800 tracking-[-0.02em] group-hover:text-black transition-colors">
          {vi}
        </h4>
        <p className="text-slate-500 font-medium text-base lg:text-lg mt-2 tracking-wide group-hover:text-slate-600 transition-colors">
          {en}
        </p>
      </div>
    </motion.div>
  );
}
