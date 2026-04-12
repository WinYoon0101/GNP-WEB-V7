"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Target, BookOpen, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const mascots = {
    "Lion": "🦁",
    "Panda": "🐼",
    "Fox": "🦊",
    "Elephant": "🐘",
    "Rabbit": "🐰",
    "Bear": "🐻",
    "Cat": "🐱",
    "Dog": "🐶",
    "Owl": "🦉",
    "Penguin": "🐧",
    "Koala": "🐨"
}

const weeksData = [
    {
        week: 1,
        titleEN: "I Am Unique",
        titleVI: "Nhận diện bản thân",
        mascot: "Lion",
        learnPoints: [
            "Nhận diện bản thân: tính cách – sở thích – điểm mạnh",
            "Nhật ký “This is me”"
        ],
        activity: "Vẽ chân dung bản thân / My Identity Card"
    },
    {
        week: 2,
        titleEN: "Healthy Me",
        titleVI: "Thói quen lành mạnh",
        mascot: "Panda",
        learnPoints: [
            "Thói quen lành mạnh: ăn uống – vận động – ngủ nghỉ – vệ sinh chung",
            "Kỹ năng: tự chăm sóc bản thân"
        ],
        activity: "Thiết kế “1 ngày khỏe mạnh của tôi”"
    },
    {
        week: 3,
        titleEN: "My Feelings Matter",
        titleVI: "Cảm xúc của tôi",
        mascot: "Fox",
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
        mascot: "Elephant",
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
        mascot: "Rabbit",
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
        mascot: "Bear",
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
        mascot: "Cat",
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
        mascot: "Dog",
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
        mascot: "Owl",
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
        mascot: "Penguin",
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
        mascot: "Koala",
        learnPoints: [
            "Tổng kết – nhìn lại – trình bày hành trình",
            "Showcase cho phụ huynh"
        ],
        activity: "Presentation + Portfolio cá nhân"
    }
]

const phases = [
    {
        title: "PHASE 1: DISCOVER ME",
        subtitle: "Hiểu bản thân – hình thành thói quen – nền tảng tư duy",
        weeks: [1, 2, 3],
        color: "text-[#FF7A00]",
        bg: "bg-[#FF7A00]",
        ring: "ring-[#FF7A00]/40",
    },
    {
        title: "PHASE 2: GROW ME",
        subtitle: "Kỹ năng – tư duy – chủ động",
        weeks: [4, 5, 6],
        color: "text-[#1E90FF]",
        bg: "bg-[#1E90FF]",
        ring: "ring-[#1E90FF]/40",
    },
    {
        title: "PHASE 3: EXPLORE THE WORLD",
        subtitle: "Khám phá xã hội – nghề nghiệp – trách nhiệm",
        weeks: [7, 8, 9],
        color: "text-[#10B981]", // Emerald
        bg: "bg-[#10B981]",
        ring: "ring-[#10B981]/40"
    },
    {
        title: "PHASE 4: CONTRIBUTE ME & SHINE",
        subtitle: "Cho đi – thể hiện bản thân – tổng kết hành trình",
        weeks: [10, 11],
        color: "text-[#8B5CF6]", // Violet
        bg: "bg-[#8B5CF6]",
        ring: "ring-[#8B5CF6]/40"
    }
]

const containerVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.98 },
    visible: { 
        opacity: 1, x: 0, scale: 1,
        transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 } 
    },
    exit: { opacity: 0, x: 30, scale: 0.98, transition: { duration: 0.2, ease: "easeIn" } }
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
}

export function WeeklyHighlightsSplit() {
    const [activeWeek, setActiveWeek] = useState(1)
    const activeData = weeksData.find(w => w.week === activeWeek) || weeksData[0]

    // Find current phase color
    const currentPhase = phases.find(p => p.weeks.includes(activeWeek))
    const themeColor = currentPhase ? currentPhase.bg : "bg-[#FF7A00]"
    const themeText = currentPhase ? currentPhase.color : "text-[#FF7A00]"

    return (
        <div className="w-full bg-slate-50 py-16 md:py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] opacity-10 transition-colors duration-1000 ${themeColor} pointer-events-none -translate-y-1/2 translate-x-1/3`} />
            
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-10 md:mb-16 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FF7A00] mb-3 md:mb-4 tracking-tight drop-shadow-sm">HÀNH TRÌNH 11 TUẦN</h2>
                    <h3 className="text-base sm:text-lg md:text-xl text-[#1E90FF] font-bold uppercase tracking-widest">11-Week Learning Journey</h3>
                    <p className="mt-3 md:mt-4 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">Chương trình được thiết kế bài bản kết hợp giữa kiến thức khoa học và câu chuyện thú vị, giúp các em phát triển toàn diện từng ngày.</p>
                </div>

                {/* DASHBOARD CONTAINER */}
                <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col md:flex-row w-full h-[85vh] min-h-[750px] md:min-h-[650px] max-h-[950px] md:max-h-[900px] items-stretch">
                    
                    {/* MOBILE TOP SECTION - HORIZONTAL SCROLL SELECTOR */}
                    <div className="md:hidden w-full bg-slate-50/95 backdrop-blur-md pb-4 pt-4 border-b border-slate-200 z-40 shadow-sm relative">
                        <div className="flex gap-3 overflow-x-auto custom-scrollbar snap-x snap-mandatory pb-2 px-4 -mx-4">
                            {weeksData.map(week => {
                                const isActive = activeWeek === week.week
                                const weekPhase = phases.find(p => p.weeks.includes(week.week))
                                const activeColor = weekPhase ? weekPhase.bg : "bg-[#FF7A00]"
                                const activeRing = weekPhase ? weekPhase.ring : "ring-[#FF7A00]/40"
                                
                                return (
                                    <div 
                                        key={week.week}
                                        onClick={() => setActiveWeek(week.week)}
                                        className={cn(
                                            "flex-shrink-0 snap-center w-[110px] p-2.5 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all cursor-pointer",
                                            isActive 
                                                ? `${activeColor} text-white shadow-lg border-transparent scale-105 ring-2 ring-offset-2 ${activeRing} z-10` 
                                                : "bg-white text-slate-700 border-slate-100 hover:bg-slate-50 active:scale-95"
                                        )}
                                    >
                                        <motion.div 
                                            whileTap={{ scale: 0.8 }}
                                            className={cn(
                                                "w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-sm transition-transform",
                                                isActive ? "bg-white/20 animate-in zoom-in" : "bg-slate-50 border border-slate-100"
                                            )}
                                        >
                                            {mascots[week.mascot as keyof typeof mascots]}
                                        </motion.div>
                                        <div className="text-center w-full">
                                            <div className="text-[10px] font-black uppercase tracking-wider mb-0.5 opacity-80">Tuần {week.week}</div>
                                            <h4 className="font-bold text-xs truncate max-w-full">{week.titleEN}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* LEFT PANEL (100% Mobile, 65% Tablet, 60% Desktop) - Content Area */}
                    <div className="w-full md:w-[65%] lg:w-[60%] relative flex-shrink-0 h-full overflow-y-auto md:overflow-hidden bg-white custom-scrollbar">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeWeek}
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="relative flex flex-col min-h-full w-full p-6 pb-20 md:p-10 md:pb-10 lg:p-12"
                            >
                                {/* Decorative Big Mascot */}
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                                    animate={{ opacity: 0.04, scale: 1, rotate: 12 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 pointer-events-none flex items-center justify-center"
                                >
                                     <span className="text-[200px] leading-none">{mascots[activeData.mascot as keyof typeof mascots]}</span>
                                </motion.div>
                                <div className={`absolute top-0 left-0 w-full h-3 ${themeColor} transition-colors duration-700`} />

                                <div className="flex items-start justify-between gap-6 relative z-10 mb-8">
                                    <motion.div variants={itemVariants} className="flex-1">
                                        <div className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full ${themeColor} text-white font-black text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 shadow-md`}>
                                            Tuần / Week {activeData.week}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 leading-tight mb-2 md:mb-3" style={{ fontFamily: "var(--font-baloo, 'Nunito', sans-serif)" }}>
                                            {activeData.titleEN}
                                        </h3>
                                        <h4 className={`text-lg sm:text-xl md:text-2xl font-bold ${themeText} mb-2`}>
                                            {activeData.titleVI}
                                        </h4>
                                    </motion.div>
                                    <motion.div 
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="hidden md:flex flex-shrink-0 w-28 h-28 bg-slate-50 rounded-full border-[6px] border-white shadow-xl items-center justify-center transform -rotate-6"
                                    >
                                        <span className="text-6xl drop-shadow-md">{mascots[activeData.mascot as keyof typeof mascots]}</span>
                                    </motion.div>
                                </div>

                                {/* Content Sections */}
                                <div className="space-y-8 relative z-10 flex-1">
                                    
                                    {/* Bạn sẽ học gì */}
                                    <motion.div variants={itemVariants} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className={`p-2 rounded-xl ${themeColor} text-white shadow-md`}>
                                                <Target className="w-6 h-6" />
                                            </div>
                                            <h5 className="text-xl font-bold text-slate-800">Bạn sẽ học gì?</h5>
                                        </div>
                                        <ul className="space-y-4">
                                            {activeData.learnPoints.map((point, idx) => (
                                                <motion.li variants={itemVariants} key={idx} className="flex items-start gap-4">
                                                    <div className={`w-2 h-2 rounded-full ${themeColor} mt-2.5 flex-shrink-0`} />
                                                    <p className="text-slate-700 md:text-lg font-medium leading-relaxed">{point}</p>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* Hoạt động nổi bật */}
                                    <motion.div variants={itemVariants} className={`rounded-2xl p-6 md:p-8 border-2 transition-colors duration-700 ${currentPhase?.color === 'text-[#FF7A00]' ? 'border-orange-100 bg-orange-50/50' : currentPhase?.color === 'text-[#1E90FF]' ? 'border-blue-100 bg-blue-50/50' : currentPhase?.color === 'text-[#10B981]' ? 'border-emerald-100 bg-emerald-50/50' : 'border-violet-100 bg-violet-50/50'}`}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`p-2 rounded-xl bg-white shadow-sm ${themeText} transition-transform hover:scale-110`}>
                                                <Star className="w-6 h-6" />
                                            </div>
                                            <h5 className="text-xl font-bold text-slate-800">Hoạt động nổi bật</h5>
                                        </div>
                                        <div className="pl-12">
                                            <p className={`md:text-lg font-bold ${themeText}`}>{activeData.activity}</p>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT PANEL (35% Tablet, 40% Desktop) - Phase & Week List */}
                    <div className="hidden md:block w-full md:w-[35%] lg:w-[40%] bg-slate-50 border-l border-slate-100 overflow-y-auto custom-scrollbar p-6 lg:p-10 relative">
                        <div className="space-y-12 pb-16">
                            {phases.map((phase, pIdx) => (
                                <div key={pIdx} className="relative">
                                    {/* Phase Header */}
                                    <div className="mb-4">
                                        <div className="flex items-center gap-3 mb-1">
                                            <div className={`h-[2px] w-8 ${phase.bg} rounded-full`} />
                                            <h3 className={`text-lg font-black tracking-widest uppercase ${phase.color}`}>{phase.title}</h3>
                                        </div>
                                        <p className="text-slate-500 font-semibold text-sm pl-11">{phase.subtitle}</p>
                                    </div>

                                    {/* Weeks in Phase */}
                                    <div className="space-y-4 pl-4 border-l-2 border-slate-200 ml-4 mt-4 relative">
                                        
                                        {phase.weeks.map(weekNum => {
                                            const weekData = weeksData.find(w => w.week === weekNum)!
                                            const isActive = activeWeek === weekNum

                                            return (
                                                <div 
                                                    key={weekNum}
                                                    onClick={() => setActiveWeek(weekNum)}
                                                    className={cn(
                                                        "relative cursor-pointer transition-all duration-300 rounded-[1.5rem] p-4 flex items-center gap-5 border-2 group",
                                                        isActive 
                                                            ? `${phase.bg} text-white shadow-xl shadow-slate-500/10 ring-4 ring-offset-2 ${phase.ring} border-transparent scale-[1.05] -ml-2 z-10` 
                                                            : "bg-white text-slate-700 border-transparent hover:border-slate-200 hover:-translate-y-1.5 hover:shadow-lg shadow-sm"
                                                    )}
                                                >
                                                    {/* Timeline Node overlay over the border line */}
                                                    <div className={cn(
                                                        "absolute -left-[27px] w-3 h-3 rounded-full border-2 transition-colors",
                                                        isActive ? `${phase.bg} border-white shadow-sm bg-current scale-150` : "bg-white border-slate-300 group-hover:border-slate-400"
                                                    )} />

                                                    {/* Mascot Bubble */}
                                                    <div className={cn(
                                                        "w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-sm transition-transform duration-300 flex-shrink-0 origin-bottom",
                                                        isActive ? "bg-white/20 animate-in zoom-in-50 scale-110" : "bg-slate-50 border border-slate-100 group-hover:-translate-y-1 group-hover:rotate-6"
                                                    )}>
                                                        {mascots[weekData.mascot as keyof typeof mascots]}
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <div className={cn(
                                                            "text-[10px] font-black uppercase tracking-wider mb-1",
                                                            isActive ? "text-white/80" : phase.color
                                                        )}>
                                                            Tuần / Week {weekNum}
                                                        </div>
                                                        <h4 className={cn(
                                                            "font-bold text-base md:text-lg mb-0.5 truncate",
                                                            isActive ? "text-white" : "text-slate-800"
                                                        )}>
                                                            {weekData.titleEN}
                                                        </h4>
                                                        <p className={cn(
                                                            "text-xs md:text-sm font-medium truncate",
                                                            isActive ? "text-white/90" : "text-slate-500"
                                                        )}>
                                                            {weekData.titleVI}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #cbd5e1;
                    border-radius: 20px;
                }
            `}</style>
        </div>
    )
}
