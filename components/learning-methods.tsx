"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Target, Lightbulb, Globe } from "lucide-react";

const methods = [
  {
    id: "m1",
    icon: BookOpen,
    title: "Tiếp Cận Tự Nhiên",
    description:
      "Cảm thụ ngôn ngữ tự nhiên như tiếng mẹ đẻ, tiếp thu kiến thức bền vững.",
    pos: { r: 420, angle: -160 }, // Top Left
  },
  {
    id: "m4",
    icon: Lightbulb,
    title: "Học Qua Dự Án",
    description:
      "Phát triển tư duy logic và khả năng sáng tạo qua các bài thuyết trình.",
    pos: { r: 420, angle: -20 }, // Top Right
  },
  {
    id: "m2",
    icon: Users,
    title: "Giao Tiếp Làm Tâm",
    description:
      "Tối đa hoá cơ hội thực hành, tự tin giao tiếp trong mọi tình huống.",
    pos: { r: 350, angle: 155 }, // Bottom Left
  },
  {
    id: "m3",
    icon: Target,
    title: "Học Qua Nhiệm Vụ",
    description:
      "Thực hành bài tập thực tiễn có mục đích định hướng, rèn luyện kỹ năng.",
    pos: { r: 350, angle: 25 }, // Bottom Right
  },
  {
    id: "m5",
    icon: Globe,
    title: "Ngữ Pháp Ứng Dụng",
    description:
      "Học để dùng - Ứng dụng ngay khối lượng ngữ pháp vào thực tế hiện tại.",
    pos: { r: 250, angle: 90 }, // Bottom Center
  },
];

export function LearningMethods() {
  return (
    <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F2701A]/10 via-slate-900 to-slate-900 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[1000px] h-[1000px] bg-[#F2701A]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-2 relative z-10 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight md:translate-y-[120px]"
          >
            Phương Pháp{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2701A] to-[#ff9853]">
              Giảng Dạy
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 md:text-lg max-w-2xl mx-auto leading-relaxed md:translate-y-[140px]"
          >
            GNP English Academy áp dụng các phương pháp giảng dạy tiên tiến, kết
            hợp chặt chẽ giữa lý thuyết và thực hành để giúp học viên phát triển
            toàn diện nhất.
          </motion.p>
        </div>

        {/* Desktop Interactive Circular Graph */}
        <div className="hidden lg:flex relative w-full h-[900px] items-center justify-center mt-[-40px]">
          {/* Concentric Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 z-0 border-dashed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] h-[840px] rounded-full border border-white/10 z-0" />

          {/* Center Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 w-[240px] h-[240px] rounded-full overflow-hidden border-[10px] border-white shadow-[0_15px_40px_rgba(242,112,26,0.25)] flex items-center justify-center bg-[#F2701A]"
          >
            <div className="absolute inset-0 bg-[url('/images/gnp-logo.png')] bg-contain bg-center bg-no-repeat p-8 opacity-100 m-6 drop-shadow-md"></div>
            {/* Inner decorative spinner */}
            <div className="absolute inset-4 rounded-full border-2 border-dashed border-white/40 animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-solid border-white/20 animate-[spin_15s_linear_infinite_reverse]" />
          </motion.div>

          {/* Nodes */}
          {methods.map((method, index) => {
            const x =
              method.pos.r * Math.cos((method.pos.angle * Math.PI) / 180);
            const y =
              method.pos.r * Math.sin((method.pos.angle * Math.PI) / 180);

            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="absolute flex flex-col items-center group cursor-pointer"
                style={{
                  left: `50%`,
                  top: `50%`,
                  marginLeft: x,
                  marginTop: y,
                  zIndex: 40,
                }}
              >
                {/* Visual Wrapper positioned to center exactly on coordinates */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-[32px] w-[260px] flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="mb-4 relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_25px_rgba(242,112,26,0.12)] group-hover:shadow-[0_8px_30px_rgba(242,112,26,0.25)] transition-all duration-300 z-10 overflow-hidden group-hover:-translate-y-1.5">
                    <div className="absolute inset-0 bg-[#F2701A] scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out origin-center" />
                    <div className="relative z-10 text-[#F2701A] group-hover:text-white transition-colors duration-300">
                      <method.icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Text Content Block (Always Visible) */}
                  <div className="text-center relative">
                    <h3 className="font-bold text-[15.5px] mb-2 text-white group-hover:text-[#F2701A] transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-slate-400 text-[13.5px] leading-relaxed px-2">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile / Tablet List Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mt-8 relative z-10 px-2">
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-5 border border-slate-700 shadow-sm hover:shadow-[0_10px_30px_rgba(242,112,26,0.12)] hover:border-[#F2701A]/30 transition-all flex items-start gap-4 group cursor-pointer overflow-hidden relative"
            >
              {/* Subtle hover background line */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F2701A] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-r-sm" />

              <div className="w-14 h-14 shrink-0 rounded-full bg-slate-900 group-hover:bg-[#F2701A] flex items-center justify-center transition-colors duration-300 border border-slate-700 group-hover:border-transparent">
                <method.icon className="w-[26px] h-[26px] text-[#F2701A] group-hover:text-white transition-colors duration-300 stroke-[2]" />
              </div>
              <div className="flex-1 mt-0.5">
                <h3 className="font-bold text-[16px] mb-1.5 text-white group-hover:text-[#F2701A] transition-colors">
                  {method.title}
                </h3>
                <p className="text-slate-400 text-[14px] leading-relaxed">
                  {method.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
