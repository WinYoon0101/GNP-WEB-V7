import React from 'react';
import {
    Sun, Compass, Sprout, Globe, Star, Sparkles, Target, Users, BookOpen,
    Map, Lightbulb, Clock, Focus, Trophy, CheckCircle2, HeartHandshake, Palette, BookMarked, MonitorPlay, FileText, Camera, Brain, Presentation, MessageCircle, Heart
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SummerCourseTab() {
    return (
        <div className="w-full font-sans bg-white text-slate-900 selection:bg-orange-200 overflow-hidden">
            {/* Custom Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes soft-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-soft-float {
          animation: soft-float 4s ease-in-out infinite;
        }
        .glow-hover:hover {
           box-shadow: 0 0 25px rgba(255, 122, 0, 0.3);
           transform: translateY(-5px);
        }
        .hide-scrollbar::-webkit-scrollbar {
           display: none;
        }
        .hide-scrollbar {
           -ms-overflow-style: none;
           scrollbar-width: none;
        }
        `
            }} />

            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#007BFF]/10 via-white to-[#FF7A00]/10 py-20 lg:py-28 my-4 mx-4 md:mx-8 rounded-[3rem] shadow-xl shadow-[#007BFF]/5 border border-white/60 backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#007BFF]/20 rounded-full blur-[100px] -z-10 mt-[-50px] mr-[-50px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF7A00]/20 rounded-full blur-[120px] -z-10 mb-[-50px] ml-[-50px]" />

                <div className="text-center px-4 max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white shadow-md shadow-orange-100 text-[#FF7A00] font-bold text-sm tracking-wide mb-8 animate-soft-float border border-orange-100">
                        <Sun className="w-5 h-5 fill-[#FF7A00]" />
                        <span>SUMMER 2024</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8">
                        <span className="block text-[#007BFF] drop-shadow-sm">CHƯƠNG TRÌNH HÈ</span>
                    </h1>

                    <div className="inline-block bg-white/60 backdrop-blur-md px-8 py-4 rounded-2xl border border-white mb-8 shadow-sm">
                        <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#FF7A00] uppercase tracking-wide">
                            DISCOVER ME – GROW ME – CONTRIBUTE ME
                        </h2>
                    </div>

                    <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
                        Hành trình 11 tuần giúp học viên khám phá bản thân, phát triển tư duy và đóng góp cho cộng đồng.

                    </p>

                    <Button size="lg" className="bg-gradient-to-r from-[#FF7A00] to-[#ff9838] text-white hover:from-[#e06a00] hover:to-[#FF7A00] h-14 lg:h-16 px-10 lg:px-14 rounded-full text-base lg:text-lg font-bold shadow-xl shadow-orange-500/30 transition-all hover:scale-105" asChild>
                        <Link href="/lien-he">Đăng ký ngay / Register Now</Link>
                    </Button>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-[20%] left-[10%] text-[#007BFF]/20 animate-soft-float hidden md:block">
                    <Compass className="w-16 h-16 rotate-12" />
                </div>
                <div className="absolute bottom-[20%] right-[10%] text-[#FF7A00]/20 animate-soft-float hidden md:block" style={{ animationDelay: '1s' }}>
                    <Target className="w-20 h-20 -rotate-12" />
                </div>
            </section>

            {/* WAVE SEPARATOR */}
            <div className="w-full overflow-hidden leading-none mb-10">
                <svg fill="#f8fafc" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[calc(100%+1.3px)] h-[50px] md:h-[80px] block">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            {/* 2. PROGRAM OVERVIEW (Timeline) */}
            <section className="py-16 bg-slate-50 relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#007BFF] mb-3">TỔNG QUAN CHƯƠNG TRÌNH</h3>
                        <h4 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Program Overview</h4>
                    </div>

                    <div className="flex overflow-x-auto pb-6 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative snap-x snap-mandatory hide-scrollbar pt-2">
                        {[
                            {
                                phase: "PHASE 1",
                                weeks: "Tuần 1–3",
                                titleVI: "DISCOVER ME",
                                titleEN: "Discover Me",
                                descVI: "Hiểu bản thân, hình thành thói quen, xây nền tảng tư duy.",
                                descEN: "Understand yourself, form habits, foundational mindset.",
                                icon: Compass,
                                color: "text-[#FF7A00]",
                                bg: "bg-[#FF7A00]/10",
                                border: "border-[#FF7A00]"
                            },
                            {
                                phase: "PHASE 2",
                                weeks: "Tuần 4–6",
                                titleVI: "GROW ME",
                                titleEN: "Grow Me",
                                descVI: "Kỹ năng, tư duy và chủ động phát triển bản thân.",
                                descEN: "Skills, mindset, and proactive self-development.",
                                icon: Sprout,
                                color: "text-[#007BFF]",
                                bg: "bg-[#007BFF]/10",
                                border: "border-[#007BFF]"
                            },
                            {
                                phase: "PHASE 3",
                                weeks: "Tuần 7–9",
                                titleVI: "EXPLORE THE WORLD",
                                titleEN: "Explore the World",
                                descVI: "Khám phá xã hội, tìm hiểu nghề nghiệp, tinh thần trách nhiệm.",
                                descEN: "Discover society, career paths, and sense of responsibility.",
                                icon: Globe,
                                color: "text-emerald-500",
                                bg: "bg-emerald-500/10",
                                border: "border-emerald-500"
                            },
                            {
                                phase: "PHASE 4",
                                weeks: "Tuần 10–11",
                                titleVI: "CONTRIBUTE ME & SHINE",
                                titleEN: "Contribute & Shine",
                                descVI: "Cho đi, thể hiện bản thân và tổng kết hành trình hè.",
                                descEN: "Give back, express yourself, and recap the summer journey.",
                                icon: Star,
                                color: "text-purple-500",
                                bg: "bg-purple-500/10",
                                border: "border-purple-500"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="w-[85vw] sm:w-[50vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink md:snap-align-none relative z-10 flex flex-col items-center text-center group">
                                {/* Connecting Line per item */}
                                {idx < 3 && (
                                    <div className={`absolute top-12 -translate-y-1/2 left-[50%] w-[calc(100%+1.5rem)] lg:w-[calc(100%+2rem)] h-[3px] bg-gradient-to-r -z-10
                                        ${idx === 0 ? 'from-[#FF7A00]/40 to-[#007BFF]/40' : ''}
                                        ${idx === 1 ? 'from-[#007BFF]/40 to-emerald-500/40 md:hidden lg:block' : ''}
                                        ${idx === 2 ? 'from-emerald-500/40 to-purple-500/40' : ''}
                                    `} />
                                )}
                                <div className={`w-24 h-24 rounded-full flex-shrink-0 flex items-center justify-center bg-white border-4 ${item.border} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                    <item.icon className={`w-10 h-10 ${item.color}`} />
                                </div>
                                <div className={`bg-white w-full p-6 rounded-3xl shadow-md border-t-4 border-transparent hover:${item.border} transition-colors duration-300 h-full flex flex-col`}>
                                    <div className="text-xs font-bold text-slate-400 mb-1">{item.phase} • {item.weeks}</div>
                                    <h5 className={`text-xl font-bold ${item.color} mb-1`}>{item.titleVI}</h5>
                                    <h6 className="text-sm text-slate-500 font-bold mb-4">{item.titleEN}</h6>
                                    <p className="text-slate-700 text-sm md:text-base font-medium">{item.descVI}</p>
                                    <p className="text-slate-500 text-xs md:text-sm italic mt-2">{item.descEN}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WEEKLY HIGHLIGHT (Interactive Cards) */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#FF7A00] mb-3">ĐIỂM NHẤN CÁC TUẦN</h3>
                        <h4 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Weekly Highlights</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                week: 1,
                                titleVI: "Nhận diện bản thân", titleEN: "I Am Unique",
                                descVI: "Tính cách, sở thích, điểm mạnh. Ghi chép nhật ký “This is me”.",
                                descEN: "Personality, hobbies, strengths. “This is me” journal.",
                                actVI: "Hoạt động: Vẽ chân dung bản thân / My Identity Card", actEN: "Activity: Draw self-portrait / My Identity Card",
                                icon: Sparkles
                            },
                            {
                                week: 2,
                                titleVI: "Thói quen lành mạnh", titleEN: "Healthy Me",
                                descVI: "Ăn uống, vận động, ngủ nghỉ, vệ sinh. Các kỹ năng tự chăm sóc bản thân.",
                                descEN: "Eating, exercise, sleep, hygiene. Essential self-care skills.",
                                actVI: "Hoạt động: Thiết kế “1 ngày khỏe mạnh của tôi”", actEN: "Activity: Design 'My healthy day'",
                                icon: Heart
                            },
                            {
                                week: 3,
                                titleVI: "Cảm xúc của tôi", titleEN: "My Feelings Matter",
                                descVI: "Nhận diện và quản lý cảm xúc. Cách giao tiếp khi buồn, giận, thất vọng.",
                                descEN: "Identify & manage emotions. Communicating sadness, anger, frustration.",
                                actVI: "Hoạt động: Emotion wheel / Role-play tình huống", actEN: "Activity: Emotion wheel / Scenario role-play",
                                icon: MessageCircle
                            },
                            {
                                week: 4,
                                titleVI: "Tư duy phát triển", titleEN: "Growth Mindset in Action",
                                descVI: "Sai không xấu, bỏ cuộc mới đáng sợ. Thực hiện thử thách cá nhân hằng ngày.",
                                descEN: "Failure isn't bad, giving up is. Daily personal challenges.",
                                actVI: "Hoạt động: Fail & Learn Journal", actEN: "Activity: Fail & Learn Journal",
                                icon: Brain
                            },
                            {
                                week: 5,
                                titleVI: "Quản lý thời gian", titleEN: "Time & Self-Management",
                                descVI: "Quản lý thời gian việc học, giải trí. Biết cách lập kế hoạch đơn giản.",
                                descEN: "Manage study and leisure time. Learn basic planning.",
                                actVI: "Hoạt động: My Weekly Planner", actEN: "Activity: My Weekly Planner",
                                icon: Clock
                            },
                            {
                                week: 6,
                                titleVI: "Giao tiếp & Làm việc nhóm", titleEN: "Communication & Teamwork",
                                descVI: "Kỹ năng lắng nghe, chia sẻ, làm việc nhóm và giải quyết mâu thuẫn.",
                                descEN: "Listening, sharing, teamwork, and conflict resolution.",
                                actVI: "Hoạt động: Team challenge / Cooperative games", actEN: "Activity: Team challenge / Cooperative games",
                                icon: Users
                            },
                            {
                                week: 7,
                                titleVI: "Người xung quanh tôi", titleEN: "People Around Me",
                                descVI: "Tìm hiểu gia đình, thầy cô, bạn bè, cộng đồng. Biết ơn và tôn trọng sự khác biệt.",
                                descEN: "Family, teachers, friends, community. Gratitude and respect for diversity.",
                                actVI: "Hoạt động: Gratitude project", actEN: "Activity: Gratitude project",
                                icon: HeartHandshake
                            },
                            {
                                week: 8,
                                titleVI: "Công dân nhỏ", titleEN: "Little Citizens",
                                descVI: "Quyền & trách nhiệm của công dân nhỏ. Giữ gìn môi trường, không gian chung.",
                                descEN: "Rights & responsibilities. Preserving the environment and shared spaces.",
                                actVI: "Hoạt động: Green action / Community rules", actEN: "Activity: Green action / Community rules",
                                icon: Globe
                            },
                            {
                                week: 9,
                                titleVI: "Thế giới nghề nghiệp", titleEN: "World of Work",
                                descVI: "Khám phá nghề nghiệp phù hợp. Đề xuất việc nhỏ: giúp gia đình, lớp học, dự án mini.",
                                descEN: "Career exploration. Suggest tasks: help family, class, mini projects.",
                                actVI: "Hoạt động: My First Job Proposal", actEN: "Activity: My First Job Proposal",
                                icon: Target
                            },
                            {
                                week: 10,
                                titleVI: "Tôi có thể đóng góp", titleEN: "I Can Contribute",
                                descVI: "Thực hiện dự án cộng đồng nhỏ. Hướng tới làm việc thật, tạo giá trị thật.",
                                descEN: "Execute small community projects. Real work, creating real value.",
                                actVI: "Hoạt động: Community Mini Project", actEN: "Activity: Community Mini Project",
                                icon: Star
                            },
                            {
                                week: 11,
                                titleVI: "Mùa hè trưởng thành", titleEN: "My Summer, My Growth",
                                descVI: "Khái quát hành trình. Showcase trước phụ huynh và Portfolio cá nhân.",
                                descEN: "Recap the journey. Showcase for parents and present Personal Portfolio.",
                                actVI: "Hoạt động: Presentation + Portfolio cá nhân", actEN: "Activity: Presentation + Personal Portfolio",
                                icon: Trophy
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 glow-hover relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-orange-100 transition-colors" />
                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#ff9838] flex items-center justify-center text-white flex-shrink-0 shadow-md">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 mb-1 tracking-wider uppercase">Tuần / Week {item.week}</div>
                                        <h4 className="text-lg font-bold text-slate-900 leading-tight">{item.titleVI}</h4>
                                        <h5 className="text-sm font-semibold text-[#007BFF] mb-3">{item.titleEN}</h5>
                                    </div>
                                </div>
                                <div className="mt-5 space-y-3 relative z-10">
                                    <div>
                                        <p className="text-slate-700 font-medium text-sm">{item.descVI}</p>
                                        <p className="text-slate-500 text-xs italic mt-1">{item.descEN}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100">
                                        <p className="text-[#FF7A00] font-bold text-sm flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" /> {item.actVI}
                                        </p>
                                        <p className="text-orange-400 font-medium text-xs italic mt-1 ml-6">{item.actEN}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DAILY STRUCTURE (Split layout) */}
            <section className="py-16 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-[#007BFF]/5 border border-slate-100">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-[#007BFF] mb-3">CẤU TRÚC MỘT NGÀY</h3>
                            <h4 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Daily Structure</h4>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                            {/* LEFT: Morning */}
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-full bg-[#007BFF] flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                        <Sun className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900">Buổi sáng – GPS</h4>
                                        <h5 className="text-lg font-bold text-[#007BFF]">Morning – GPS</h5>
                                    </div>
                                </div>
                                <ul className="space-y-6">
                                    {[
                                        { textVI: "Growth mindset - Tư duy phát triển", textEN: "Growth mindset", icon: Brain },
                                        { textVI: "People - Con người", textEN: "People & Interactions", icon: Users },
                                        { textVI: "Skills - Kỹ năng", textEN: "Essential Skills", icon: Target }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#007BFF] flex-shrink-0">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">{item.textVI}</p>
                                                <p className="text-sm font-medium text-slate-500 italic">{item.textEN}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* RIGHT: Afternoon */}
                            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-orange-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-full bg-[#FF7A00] flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900">Buổi chiều – GNP</h4>
                                        <h5 className="text-lg font-bold text-[#FF7A00]">Afternoon – GNP</h5>
                                    </div>
                                </div>
                                <ul className="space-y-6">
                                    {[
                                        { textVI: "Growth thông qua Trải nghiệm", textEN: "Growth through experience", icon: Compass },
                                        { textVI: "Hoạt động Novelty sáng tạo", textEN: "Novelty activities", icon: Lightbulb },
                                        { textVI: "Hoạt động Nhóm & Xã hội", textEN: "Team & social activities", icon: HeartHandshake }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-orange-50">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-[#FF7A00] flex-shrink-0">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800">{item.textVI}</p>
                                                <p className="text-sm font-medium text-slate-500 italic">{item.textEN}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. AGE GROUPS (3 Cards) */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#FF7A00] mb-3">PHÂN BỐ THEO ĐỘ TUỔI</h3>
                        <h4 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Age Groups</h4>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                gradeVI: "Lớp 1–3", gradeEN: "Grade 1-3",
                                titleVI: "Học qua vui chơi", titleEN: "Play-based learning",
                                pointsVI: ["Phát triển trí tưởng tượng", "Nhận biết cảm xúc cơ bản", "Làm quen làm việc nhóm"],
                                pointsEN: ["Develop imagination", "Recognize basic emotions", "Intro to teamwork"],
                                icon: Palette,
                                color: "from-pink-400 to-rose-400",
                                shadow: "shadow-rose-400"
                            },
                            {
                                gradeVI: "Lớp 4–6", gradeEN: "Grade 4-6",
                                titleVI: "Thảo luận & Nhóm", titleEN: "Discussion & Teamwork",
                                pointsVI: ["Phát triển tư duy phản biện", "Kỹ năng lập kế hoạch", "Giải quyết vấn đề nhóm"],
                                pointsEN: ["Develop critical thinking", "Planning skills", "Group problem solving"],
                                icon: Users,
                                color: "from-[#007BFF] to-blue-400",
                                shadow: "shadow-[#007BFF]"
                            },
                            {
                                gradeVI: "Lớp 7–8", gradeEN: "Grade 7-8",
                                titleVI: "Thuyết trình & Lãnh đạo", titleEN: "Presentation & Leadership",
                                pointsVI: ["Kỹ năng thuyết trình trước đám đông", "Lãnh đạo dự án nhỏ", "Tìm hiểu nghề nghiệp"],
                                pointsEN: ["Public speaking skills", "Small project leadership", "Career exploration"],
                                icon: Presentation,
                                color: "from-[#FF7A00] to-orange-400",
                                shadow: "shadow-[#FF7A00]"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group border border-slate-100">
                                <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${item.color}`} />

                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${item.shadow}/40 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-extrabold text-slate-800">{item.gradeVI}</h4>
                                        <h5 className="font-bold text-slate-500">{item.gradeEN}</h5>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-2xl p-4 mb-6">
                                    <p className="font-bold text-slate-800 text-center">{item.titleVI}</p>
                                    <p className="text-sm font-medium text-slate-500 text-center italic">{item.titleEN}</p>
                                </div>

                                <ul className="space-y-4">
                                    {item.pointsVI.map((pt, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-slate-700 text-sm leading-tight">{pt}</p>
                                                <p className="text-xs text-slate-500 italic mt-0.5">{item.pointsEN[i]}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUTCOMES SECTION (Strong visual) */}
            <section className="py-20 relative bg-[#007BFF] overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                    </svg>
                </div>
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl mix-blend-overlay"></div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="lg:w-5/12 text-center lg:text-left">
                            <div className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/30">
                                <span className="text-white font-bold tracking-wider uppercase text-sm">Kết Quả Đạt Được</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
                                Sau chương trình<br />học viên đạt được
                            </h3>
                            <h4 className="text-2xl md:text-3xl text-blue-100 font-bold uppercase tracking-widest mb-8">Learning Outcomes</h4>

                            <p className="text-blue-50 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Học viên được trang bị bộ kỹ năng toàn diện chuẩn bị cho năm học mới và tương lai.
                            </p>

                            <Button size="lg" className="bg-white text-[#007BFF] hover:bg-gray-50 h-14 px-10 rounded-full font-bold shadow-xl transition-all hover:scale-105 hidden lg:inline-flex" asChild>
                                <Link href="/lien-he">Nhận tư vấn chi tiết</Link>
                            </Button>
                        </div>

                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
                                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                    {[
                                        { vi: "Nhận thức bản thân", en: "Self-awareness", icon: UserIcon },
                                        { vi: "Tư duy phát triển", en: "Growth mindset", icon: Brain },
                                        { vi: "Kỹ năng giao tiếp", en: "Communication skills", icon: MessageCircle },
                                        { vi: "Quản lý thời gian", en: "Time management", icon: Clock },
                                        { vi: "Kỹ năng làm việc nhóm", en: "Teamwork", icon: Users },
                                        { vi: "Sự tự tin", en: "Confidence", icon: Star },
                                        { vi: "Hồ sơ & Dự án cá nhân", en: "Portfolio & project", icon: BookMarked }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#007BFF] flex-shrink-0">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm md:text-base leading-tight">{item.vi}</p>
                                                <p className="font-medium text-slate-500 text-xs mt-1 italic">{item.en}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center lg:hidden">
                                    <Button size="lg" className="bg-[#007BFF] text-white hover:bg-blue-700 w-full h-14 rounded-full font-bold shadow-lg" asChild>
                                        <Link href="/lien-he">Nhận tư vấn chi tiết</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FINAL OUTPUT / SHOWCASE */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3">SẢN PHẨM ĐẦU RA</h3>
                        <h4 className="text-xl md:text-2xl text-[#FF7A00] font-bold uppercase tracking-widest mb-4">Final Output / Showcase</h4>
                        <p className="text-slate-600 text-lg">Những dấu ấn khó quên sau 11 tuần trưởng thành.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { vi: "Hồ sơ cá nhân", en: "Portfolio", icon: FileText, bg: "bg-blue-50", text: "text-blue-600" },
                            { vi: "Nhật ký cá nhân", en: "Personal journal", icon: BookOpen, bg: "bg-orange-50", text: "text-orange-600" },
                            { vi: "Dự án cộng đồng", en: "Community project", icon: HeartHandshake, bg: "bg-emerald-50", text: "text-emerald-600" },
                            { vi: "Ngày hội thuyết trình", en: "Presentation day", icon: Presentation, bg: "bg-purple-50", text: "text-purple-600" }
                        ].map((item, idx) => (
                            <div key={idx} className={`${item.bg} rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300`}>
                                <div className={`w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 ${item.text}`}>
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h4 className={`text-xl font-bold mb-2 ${item.text}`}>{item.vi}</h4>
                                <h5 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{item.en}</h5>
                            </div>
                        ))}
                    </div>

                    {/* Gallery Hint / Illustration placeholder */}
                    <div className="mt-12 md:mt-16 bg-slate-100 rounded-[2rem] p-8 md:p-12 text-center border border-dashed border-slate-300 flex flex-col items-center justify-center min-h-[250px]">
                        <Camera className="w-16 h-16 text-slate-300 mb-4" />
                        <p className="text-slate-500 font-medium">Khu vực trưng bày hình ảnh học viên thực tế (Gallery Placeholder)</p>
                        <p className="text-slate-400 text-sm mt-2">Display real student photos here</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
}
