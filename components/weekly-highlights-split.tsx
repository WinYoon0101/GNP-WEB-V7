"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"



const weeksData = [
    {
        week: 1,
        titleEN: "I Am Unique",
        titleVI: "Nhận diện bản thân",
        learnPoints: [
            "Nhận diện bản thân: tính cách – sở thích – điểm mạnh",
            "Nhật ký 'This is me'"
        ],
        activity: "Vẽ chân dung bản thân / My Identity Card"
    },
    {
        week: 2,
        titleEN: "Healthy Me",
        titleVI: "Thói quen lành mạnh",
        learnPoints: [
            "Thói quen lành mạnh: ăn uống – vận động – ngủ nghỉ – vệ sinh chung",
            "Kỹ năng: tự chăm sóc bản thân"
        ],
        activity: "Thiết kế '1 ngày khỏe mạnh của tôi'"
    },
    {
        week: 3,
        titleEN: "My Feelings Matter",
        titleVI: "Cảm xúc của tôi",
        learnPoints: [
            "Nhận diện & quản lý cảm xúc",
            "Giao tiếp khi buồn – giận – thất vọng"
        ],
        activity: "Emotion wheel / Role-play tình huống"
    },
    {
        week: 4,
        titleEN: "Growth Mindset in Action",
        titleVI: "Tư duy phát triển",
        learnPoints: [
            "Sai không xấu – bỏ cuộc mới đáng sợ",
            "Thử thách cá nhân hằng ngày"
        ],
        activity: "Fail & Learn Journal"
    },
    {
        week: 5,
        titleEN: "Time & Self-Management",
        titleVI: "Quản lý thời gian",
        learnPoints: [
            "Quản lý thời gian – việc học – giải trí",
            "Lập kế hoạch đơn giản"
        ],
        activity: "My Weekly Planner"
    },
    {
        week: 6,
        titleEN: "Communication & Teamwork",
        titleVI: "Giao tiếp & Làm việc nhóm",
        learnPoints: [
            "Lắng nghe – chia sẻ – làm việc nhóm",
            "Giải quyết mâu thuẫn"
        ],
        activity: "Team challenge / Cooperative games"
    },
    {
        week: 7,
        titleEN: "People Around Me",
        titleVI: "Người xung quanh tôi",
        learnPoints: [
            "Gia đình – thầy cô – bạn bè – cộng đồng",
            "Biết ơn & tôn trọng sự khác biệt"
        ],
        activity: "Gratitude project"
    },
    {
        week: 8,
        titleEN: "Little Citizens",
        titleVI: "Công dân nhỏ",
        learnPoints: [
            "Quyền & trách nhiệm của công dân nhỏ",
            "Giữ gìn môi trường – không gian chung"
        ],
        activity: "Green action / Community rules"
    },
    {
        week: 9,
        titleEN: "World of Work",
        titleVI: "Thế giới nghề nghiệp",
        learnPoints: [
            "Khám phá nghề nghiệp (phù hợp độ tuổi)",
            "Nhóm nhỏ: giúp việc gia đình",
            "Nhóm giữa: hỗ trợ lớp học / sự kiện",
            "Nhóm lớn: mini project – event – truyền thông"
        ],
        activity: "My First Job Proposal"
    },
    {
        week: 10,
        titleEN: "I Can Contribute",
        titleVI: "Tôi có thể đóng góp",
        learnPoints: [
            "Làm dự án cộng đồng nhỏ",
            "Làm việc thật – giá trị thật"
        ],
        activity: "Community Mini Project"
    },
    {
        week: 11,
        titleEN: "My Summer, My Growth",
        titleVI: "Mùa hè trưởng thành",
        learnPoints: [
            "Tổng kết – nhìn lại – trình bày hành trình",
            "Showcase cho phụ huynh"
        ],
        activity: "Presentation + Portfolio cá nhân"
    }
]

const phases = [
    {
        id: 0,
        label: "PHASE 1",
        title: "DISCOVER ME",
        subtitle: "Hiểu bản thân – hình thành thói quen – nền tảng tư duy",
        weeks: [1, 2, 3],
        gradient: "from-orange-400 to-orange-600",
        softBg: "bg-orange-50",
        border: "border-orange-200",
        ring: "ring-orange-400/30",
        text: "text-orange-500",
        dot: "bg-orange-400",
        hex: "#f97316",
        emoji: "🌟",
    },
    {
        id: 1,
        label: "PHASE 2",
        title: "GROW ME",
        subtitle: "Kỹ năng – tư duy – chủ động phát triển bản thân",
        weeks: [4, 5, 6],
        gradient: "from-blue-400 to-blue-600",
        softBg: "bg-blue-50",
        border: "border-blue-200",
        ring: "ring-blue-400/30",
        text: "text-blue-500",
        dot: "bg-blue-400",
        hex: "#3b82f6",
        emoji: "🌱",
    },
    {
        id: 2,
        label: "PHASE 3",
        title: "EXPLORE THE WORLD",
        subtitle: "Khám phá xã hội – nghề nghiệp – trách nhiệm",
        weeks: [7, 8, 9],
        gradient: "from-emerald-400 to-emerald-600",
        softBg: "bg-emerald-50",
        border: "border-emerald-200",
        ring: "ring-emerald-400/30",
        text: "text-emerald-500",
        dot: "bg-emerald-400",
        hex: "#10b981",
        emoji: "🌍",
    },
    {
        id: 3,
        label: "PHASE 4",
        title: "CONTRIBUTE & SHINE",
        subtitle: "Cho đi – thể hiện bản thân – tổng kết hành trình",
        weeks: [10, 11],
        gradient: "from-violet-400 to-violet-600",
        softBg: "bg-violet-50",
        border: "border-violet-200",
        ring: "ring-violet-400/30",
        text: "text-violet-500",
        dot: "bg-violet-400",
        hex: "#8b5cf6",
        emoji: "✨",
    },
]

export function WeeklyHighlightsSplit() {
    const [activePhase, setActivePhase] = useState(0)
    const [expandedWeek, setExpandedWeek] = useState<number | null>(1)

    const phase = phases[activePhase]
    const phaseWeeks = weeksData.filter(w => phase.weeks.includes(w.week))

    return (
        <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
            {/* Decorative BG blobs */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${phase.hex}12 0%, transparent 70%),
                                 radial-gradient(ellipse 50% 40% at 10% 80%, ${phase.hex}08 0%, transparent 70%)`
                }}
            />

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">

                {/* ── HEADER ── */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        key={activePhase + "h"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF7A00] mb-3 tracking-tight"
                    >
                        HÀNH TRÌNH 11 TUẦN
                    </motion.h2>
                    <h3 className="text-base sm:text-lg md:text-xl text-[#4A55A2] font-bold uppercase tracking-widest mb-4">
                        11-Week Learning Journey
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
                        Chương trình được thiết kế bài bản, kết hợp giữa kiến thức khoa học và câu chuyện thú vị, giúp các em phát triển toàn diện từng ngày.
                    </p>
                </div>

                {/* ── PHASE TABS ── */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-14">
                    {phases.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                setActivePhase(p.id)
                                setExpandedWeek(p.weeks[0])
                            }}
                            className={cn(
                                "relative px-5 py-3 rounded-2xl font-black text-sm md:text-base transition-all duration-300 border-2 group overflow-hidden",
                                activePhase === p.id
                                    ? `bg-gradient-to-r ${p.gradient} text-white border-transparent shadow-lg shadow-${p.dot}/20 scale-105`
                                    : `bg-white ${p.text} border-slate-100 hover:border-current hover:shadow-md`
                            )}
                        >
                            {/* Active pill glow */}
                          
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="text-[10px] font-black opacity-70 tracking-widest hidden sm:inline">{p.label}</span>
                                <span>{p.title}</span>
                            </span>
                        </button>
                    ))}
                </div>

                {/* ── MAIN CONTENT ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePhase}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-10 items-start"
                    >

                        {/* ── LEFT: Phase Info Card ── */}
                        <div className={cn("rounded-3xl p-7 md:p-8 border-2 sticky top-24", phase.softBg, phase.border)}>
                            {/* Phase badge */}
                            <div className={cn(
                                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white font-black text-xs uppercase tracking-widest mb-5 shadow-md bg-gradient-to-r",
                                phase.gradient
                            )}>
                                {phase.emoji}
                                {phase.label}
                            </div>

                            <h3 className={cn("text-2xl md:text-3xl font-black mb-2", phase.text)}>
                                {phase.title}
                            </h3>
                            <p className="text-slate-600 font-medium text-sm md:text-base mb-7 leading-relaxed">
                                {phase.subtitle}
                            </p>

                            {/* Week Navigation */}
                            <div className="flex flex-col gap-3 mb-2">
                                {phase.weeks.map(wn => {
                                    const wd = weeksData.find(w => w.week === wn)!
                                    const isActive = expandedWeek === wn
                                    return (
                                        <button
                                            key={wn}
                                            onClick={() => setExpandedWeek(isActive ? null : wn)}
                                            className={cn(
                                                "flex items-center gap-4 px-4 py-3 rounded-2xl text-left transition-all border-2",
                                                isActive
                                                    ? `bg-white ${phase.border} shadow-md`
                                                    : "bg-white/40 border-transparent hover:bg-white/80 hover:shadow-sm text-slate-500"
                                            )}
                                        >
                                            <span className={cn(
                                                "w-11 h-11 rounded-xl flex flex-col items-center justify-center flex-shrink-0 transition-all",
                                                isActive ? `bg-gradient-to-br ${phase.gradient} text-white shadow-md` : "bg-slate-100 text-slate-400"
                                            )}>
                                                <span className="text-[9px] uppercase font-black leading-none mb-0.5 opacity-80">Wk</span>
                                                <span className="text-lg font-black leading-none">{wn}</span>
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <div className={cn("text-sm font-black truncate", isActive ? "text-slate-800" : "")}>
                                                    {wd.titleVI}
                                                </div>
                                                <div className={cn("text-[11px] font-semibold truncate", isActive ? phase.text : "text-slate-400")}>
                                                    Tuần {wn} · {wd.titleEN}
                                                </div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Progress dots */}
                            <div className="mt-7 pt-6 border-t border-current/10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className={cn("h-1.5 rounded-full flex-1 bg-current/10")}>
                                        <div
                                            className={cn("h-full rounded-full bg-gradient-to-r transition-all duration-700", phase.gradient)}
                                            style={{ width: `${(activePhase + 1) / phases.length * 100}%` }}
                                        />
                                    </div>
                                </div>
                                <p className="text-slate-400 text-xs font-semibold">
                                    Giai đoạn {activePhase + 1} / {phases.length} · {phase.weeks.length} tuần
                                </p>
                            </div>
                        </div>

                        {/* ── RIGHT: Week Accordion Cards ── */}
                        <div className="space-y-4">
                            {phaseWeeks.map((week, idx) => {
                                const isOpen = expandedWeek === week.week
                                return (
                                    <motion.div
                                        key={week.week}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                                        className={cn(
                                            "rounded-2xl border-2 overflow-hidden transition-all duration-300 bg-white",
                                            isOpen ? `${phase.border} shadow-lg` : "border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md"
                                        )}
                                    >
                                        {/* Card Header */}
                                        <button
                                            className="w-full flex items-center gap-4 p-5 md:p-6 text-left group"
                                            onClick={() => setExpandedWeek(isOpen ? null : week.week)}
                                        >
                                            {/* Week Badge */}
                                            <div className={cn(
                                                "w-14 h-14 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 transition-all duration-300",
                                                isOpen
                                                    ? `bg-gradient-to-br ${phase.gradient} shadow-md text-white`
                                                    : "bg-slate-50 group-hover:bg-slate-100 text-slate-400"
                                            )}>
                                                <span className="text-[10px] uppercase font-black leading-none mb-1 opacity-80">Tuần</span>
                                                <span className="text-2xl font-black leading-none">{week.week}</span>
                                            </div>

                                            {/* Title block */}
                                            <div className="flex-1 min-w-0">
                                                <div className={cn("text-[10px] font-black uppercase tracking-widest mb-0.5", isOpen ? phase.text : "text-slate-400")}>
                                                    Tuần {week.week} · Week {week.week}
                                                </div>
                                                <h4 className="font-black text-lg md:text-xl text-slate-800 leading-tight">
                                                    {week.titleEN}
                                                </h4>
                                                <p className={cn("text-sm font-semibold truncate", isOpen ? phase.text : "text-slate-500")}>
                                                    {week.titleVI}
                                                </p>
                                            </div>

                                            {/* Expand icon */}
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={cn(
                                                    "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                                                    isOpen
                                                        ? `bg-gradient-to-br ${phase.gradient} text-white shadow-sm`
                                                        : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                                )}
                                            >
                                                <ChevronDown className="w-5 h-5" />
                                            </motion.div>
                                        </button>

                                        {/* Accordion Body */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className={cn("px-5 pb-6 md:px-6 md:pb-7 pt-0 border-t", phase.border)}>
                                                        <div className="pt-5 grid sm:grid-cols-2 gap-4">

                                                            {/* Học gì? */}
                                                            <div className={cn("rounded-2xl p-5", phase.softBg)}>
                                                                <div className="flex items-center gap-2 mb-4">
                                                                    <span className="text-lg">📚</span>
                                                                    <h5 className="font-black text-slate-800 text-sm">Con sẽ khám phá</h5>
                                                                </div>
                                                                <ul className="space-y-2.5">
                                                                    {week.learnPoints.map((pt, i) => (
                                                                        <li key={i} className="flex items-start gap-2.5">
                                                                            <div className={cn("w-2 h-2 rounded-full mt-1.5 flex-shrink-0", phase.dot)} />
                                                                            <p className="text-slate-700 text-sm font-medium leading-relaxed">{pt}</p>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Hoạt động */}
                                                            <div className="rounded-2xl p-5 bg-white border-2 border-current/10 flex flex-col justify-between">
                                                                <div className="flex items-center gap-2 mb-4">
                                                                    <span className="text-lg">🎯</span>
                                                                    <h5 className="font-black text-slate-800 text-sm">Hoạt động của tuần</h5>
                                                                </div>
                                                                <div className={cn(
                                                                    "rounded-xl px-4 py-3 mt-auto",
                                                                    phase.softBg
                                                                )}>
                                                                    <p className={cn("font-bold text-sm md:text-base", phase.text)}>
                                                                        {week.activity}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )
                            })}

                            {/* Navigation between phases */}
                            <div className="flex items-center justify-between pt-2">
                                <button
                                    onClick={() => {
                                        if (activePhase > 0) {
                                            setActivePhase(activePhase - 1)
                                            setExpandedWeek(phases[activePhase - 1].weeks[0])
                                        }
                                    }}
                                    disabled={activePhase === 0}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-500 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    ← Phase trước
                                </button>
                                <div className="flex gap-2">
                                    {phases.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setActivePhase(i)
                                                setExpandedWeek(phases[i].weeks[0])
                                            }}
                                            className={cn(
                                                "h-2 rounded-full transition-all duration-300",
                                                i === activePhase
                                                    ? `w-6 bg-gradient-to-r ${phases[i].gradient}`
                                                    : "w-2 bg-slate-200 hover:bg-slate-300"
                                            )}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => {
                                        if (activePhase < phases.length - 1) {
                                            setActivePhase(activePhase + 1)
                                            setExpandedWeek(phases[activePhase + 1].weeks[0])
                                        }
                                    }}
                                    disabled={activePhase === phases.length - 1}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-500 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                >
                                    Phase tiếp →
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    )
}
