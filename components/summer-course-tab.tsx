"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
    Sun, Compass, Sprout, Globe, Star, Sparkles, Target, Users, BookOpen,
    Map, Lightbulb, Clock, Focus, Trophy, CheckCircle2, HeartHandshake, Palette, BookMarked, MonitorPlay, FileText, Camera, Brain, Presentation, MessageCircle, Heart
} from 'lucide-react';
import Link from 'next/link';
import { WeeklyHighlightsSplit } from '@/components/weekly-highlights-split';
import { DailyStructure } from '@/components/daily-structure';
import { LearningOutcomes } from '@/components/learning-outcomes';
import { Button } from '@/components/ui/button';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
};

const popIn = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" as const, stiffness: 100 } }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
};

export function SummerCourseTab() {
    return (
        <div className="w-full font-sans bg-white text-[#4A55A2] selection:bg-orange-200 overflow-clip">
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
        /* 3D Flip Card Styles */
        .perspective-1000 {
           perspective: 1000px;
        }
        .transform-style-3d {
           transform-style: preserve-3d;
        }
        .backface-hidden {
           backface-visibility: hidden;
        }
        .rotate-y-180 {
           transform: rotateY(180deg);
        }
        .group:hover .flip-inner {
           transform: rotateY(180deg);
        }
        `
            }} />

            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden bg-[#FD7400] lg:min-h-[650px] flex items-center">

                {/* ⭐ TOP SKY CURVE */}
                <div className="absolute top-0 left-0 w-full z-0">
                    <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-[180px] md:h-[220px]">
                        <path
                            d="M0,200 C300,0 900,0 1200,200 L1200,0 L0,0 Z"
                            fill="white"
                        />
                    </svg>
                </div>

                {/* ⭐ SUN */}
                <div className="absolute top-6 right-6 md:right-16 z-10">
                    <div className="w-20 h-20 md:w-48 md:h-48  flex items-center justify-center">
                        <img src="/images/summer-course/mattroi.png" className="w-full" />
                    </div>
                </div>

                {/* ⭐ CLOUDS */}
                <div className="absolute top-80 left-0 w-42 h-30 opacity-70">
                    <img src="/images/summer-course/may.png" className="w-full" />
                </div>
                <div className="absolute top-16 right-40 w-40 h-24 bg-blue-300 rounded-full blur-sm opacity-70"></div>

                {/* CONTENT */}
                <div className="container mx-auto px-4 py-20 relative z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:flex items-center gap-12">

                            {/* LEFT */}
                            <div className="w-full lg:w-5/12 relative order-2 lg:order-1">

                                {/* LOGO */}
                                <div className="absolute -top-10 -left-6 md:-top-[30%] md:left-4 z-40 rotate-[-6deg]">

                                    <img
                                        src="/summer-logo.png"
                                        className="h-16 md:h-24 w-auto rounded-xl"
                                    />

                                </div>

                                {/* KIDS */}
                                <div className="relative z-20 p-4 lg:p-0">
                                    <img
                                        src="/kids.png"
                                        className="w-full md:scale-110 drop-shadow-xl"
                                    />
                                </div>

                                {/* Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-white/20 rounded-full blur-3xl -z-10" />

                                {/* ⭐ ICON FLOAT GIỮ NGUYÊN */}
                                {/* <div className="absolute -top-10 -left-6 w-16 h-16 lg:w-20 lg:h-20 animate-soft-float z-30" style={{ animationDelay: '0.5s' }}>
                        <img src="/graduation.png" className="w-full rotate-[-15deg] drop-shadow-xl" />
                    </div> */}

                                <div className="absolute bottom-[7%] -right-10 w-20 h-20 lg:w-54 lg:h-54 animate-soft-float z-30" style={{ animationDelay: '1.2s' }}>
                                    <img src="/images/summer-course/khicau.png" className="w-full rotate-[15deg] drop-shadow-2xl" />
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="w-full lg:w-7/12 text-center lg:text-left order-1 lg:order-2">

                                <div className="mt-6">
                                    <div className="inline-block px-5 py-2 rounded-full bg-white backdrop-blur-md border border-white/40 text-[#4A55A2] font-black text-xs md:text-sm uppercase mb-6">
                                        <img src="/images/summer-course/text.png" className="w-100 drop-shadow-2xl" />
                                    </div>
                                </div>

                                <div className="relative mb-6 md:mb-8">
                                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-[1000] text-white italic leading-[0.9]">
                                        <span className="block">MY GROWTH</span>
                                        <span className="block text-[#4A55A2] -mt-1 md:-mt-2">SUMMER 2026</span>
                                    </h1>

                                    <div className="absolute -top-5 right-0 md:-top-4 md:-right-4 bg-orange-600 text-white text-[10px] md:text-xs font-black px-2 md:px-3 py-1 rounded-lg rotate-12">
                                        2026
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-4 mb-6 md:mb-8">
                                    <div className="bg-white px-4 md:px-6 py-2 rounded-2xl shadow-lg border-b-4 border-orange-500">
                                        <span className="text-orange-600 font-extrabold text-base md:text-xl uppercase">
                                            HÀNH TRÌNH 11 TUẦN
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg md:text-xl text-white font-bold max-w-xl mb-10">
                                    Mùa hè để con khám phá chính mình, phát triển mỗi ngày và sống có ích hơn với cộng đồng
                                </p>

                                <div className="relative flex flex-col sm:flex-row items-center lg:items-start gap-6">

                                    {/* BUTTON */}
                                    <Button 
                                        onClick={() => window.dispatchEvent(new Event('open-summer-register'))}
                                        className="bg-[#4A55A2] text-white px-8 md:px-12 py-5 md:py-6 rounded-full text-lg md:text-xl font-black shadow-xl hover:scale-105 transition z-10 w-full sm:w-auto"
                                    >
                                        ĐĂNG KÝ NGAY
                                    </Button>

                                    {/* ⭐ HOT FLOAT RIGHT */}
                                    <div className="absolute right-[-10px] md:right-[5px] bottom-[-20px] md:bottom-[10px] z-20 rotate-[6deg] animate-soft-float pointer-events-none">
                                        <img
                                            src="/images/summer-course/hot.png"
                                            className="w-28 md:w-56 drop-shadow-2xl"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ⭐ BOTTOM CURVE */}
                <div className="absolute bottom-0 left-0 w-full z-30">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] fill-slate-50">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"></path>
                    </svg>
                </div>

            </section>



            {/* 2. PROGRAM OVERVIEW (Timeline) */}
            <section className="py-16 bg-slate-50 relative pb-24 md:pb-32">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h3 className="text-2xl md:text-5xl font-extrabold text-[#4A55A2] mb-2 md:mb-3">TỔNG QUAN CHƯƠNG TRÌNH</h3>
                        <h4 className="text-lg md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Program Overview</h4>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 relative pt-2">
                        {[
                            {
                                phase: "PHASE 1",
                                weeks: "Tuần 1–3",
                                titleVI: "DISCOVER ME",
                                titleEN: "Discover Me",
                                descVI: "Hiểu bản thân, hình thành thói quen, xây nền tảng tư duy.",
                                descEN: "Understand yourself, form habits, foundational mindset.",
                                icon: Compass,
                                color: "text-orange-500",
                                bg: "bg-orange-500/10",
                                border: "border-orange-500"
                            },
                            {
                                phase: "PHASE 2",
                                weeks: "Tuần 4–6",
                                titleVI: "GROW ME",
                                titleEN: "Grow Me",
                                descVI: "Kỹ năng, tư duy và chủ động phát triển bản thân.",
                                descEN: "Skills, mindset, and proactive self-development.",
                                icon: Sprout,
                                color: "text-[#4A55A2]",
                                bg: "bg-[#4A55A2]/10",
                                border: "border-[#4A55A2]"
                            },
                            {
                                phase: "PHASE 3",
                                weeks: "Tuần 7–9",
                                titleVI: "EXPLORE THE WORLD",
                                titleEN: "Explore the World",
                                descVI: "Khám phá xã hội, tìm hiểu nghề nghiệp, tinh thần trách nhiệm.",
                                descEN: "Discover society, career paths, and sense of responsibility.",
                                icon: Globe,
                                color: "text-orange-500",
                                bg: "bg-orange-500/10",
                                border: "border-orange-500"
                            },
                            {
                                phase: "PHASE 4",
                                weeks: "Tuần 10–11",
                                titleVI: "CONTRIBUTE ME & SHINE",
                                titleEN: "Contribute & Shine",
                                descVI: "Cho đi, thể hiện bản thân và tổng kết hành trình hè.",
                                descEN: "Give back, express yourself, and recap the summer journey.",
                                icon: Star,
                                color: "text-slate-500",
                                bg: "bg-slate-500/10",
                                border: "border-slate-500"
                            }
                        ].map((item, idx) => (
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={popIn} transition={{ delay: idx * 0.1 }} key={idx} className="w-full md:w-auto relative z-10 flex flex-row items-center md:flex-col md:items-center text-left md:text-center group bg-white md:bg-transparent rounded-2xl md:rounded-none p-3 sm:p-4 md:p-0 shadow-sm border border-slate-100 md:shadow-none md:border-none">
                                {/* Connecting Line per item */}
                                {idx < 3 && (
                                    <div className={`absolute -z-10
                                        top-[2.5rem] left-[2.5rem] w-[2px] h-[calc(100%+0.75rem)] bg-gradient-to-b
                                        md:bg-gradient-to-r md:h-[3px] md:top-12 md:-translate-y-1/2 md:left-[50%] md:w-[calc(100%+1.5rem)] lg:w-[calc(100%+2rem)]
                                        ${idx === 0 ? 'from-orange-500/40 to-[#4A55A2]/40' : ''}
                                        ${idx === 1 ? 'from-[#4A55A2]/40 to-orange-500/40 md:hidden lg:block' : ''}
                                        ${idx === 2 ? 'from-orange-500/40 to-slate-500/40' : ''}
                                    `} />
                                )}
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 rounded-full flex-shrink-0 flex items-center justify-center bg-white border-2 md:border-4 ${item.border} md:shadow-lg md:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                    <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-10 md:h-10 ${item.color}`} />
                                </div>
                                <div className={`ml-4 md:ml-0 md:bg-white w-full md:p-6 md:rounded-3xl md:shadow-md border-t-0 md:border-t-4 md:border-transparent md:hover:${item.border} transition-colors duration-300 md:h-full flex flex-col`}>
                                    <div className="text-[10px] sm:text-xs font-bold text-slate-400 mb-0.5 md:mb-1">{item.phase} • {item.weeks}</div>
                                    <h5 className={`text-sm sm:text-base md:text-xl font-bold ${item.color} mb-0.5 md:mb-1`}>{item.titleVI}</h5>
                                    <h6 className="hidden md:block text-sm text-slate-500 font-bold mb-4">{item.titleEN}</h6>
                                    <p className="text-slate-700 text-[11px] sm:text-xs leading-tight md:text-base font-medium">{item.descVI}</p>
                                    <p className="hidden md:block text-slate-500 text-xs md:text-sm italic mt-2">{item.descEN}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM CURVE TO WHITE */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white block">
                        <path d="M0,120 C300,0 900,0 1200,120 Z"></path>
                    </svg>
                </div>
            </section>

            {/* 3. WEEKLY HIGHLIGHT (Interactive Split Layout) */}
            <WeeklyHighlightsSplit />

            {/* 4. DAILY STRUCTURE (New Interactive UI) */}
            <DailyStructure />

            {/* 5. AGE GROUPS (3 Cards) */}
            <section className="py-20 relative pb-28">
                {/* TOP CURVE FROM WHITE TO SLATE-50 */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16 fill-white block">
                        <path d="M0,120 C300,0 900,0 1200,120 Z"></path>
                    </svg>
                </div>
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h3 className="text-2xl md:text-5xl font-extrabold text-orange-500 mb-2 md:mb-3">PHÂN BỐ THEO ĐỘ TUỔI</h3>
                        <h4 className="text-lg md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Age Groups</h4>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                gradeVI: "Lớp 1–3", gradeEN: "Grade 1-3",
                                titleVI: "Học qua vui chơi", titleEN: "Play-based learning",
                                pointsVI: ["Phát triển trí tưởng tượng", "Nhận biết cảm xúc cơ bản", "Làm quen làm việc nhóm"],
                                pointsEN: ["Develop imagination", "Recognize basic emotions", "Intro to teamwork"],
                                icon: Palette,
                                color: "from-orange-400 to-orange-600",
                                shadow: "shadow-orange-400"
                            },
                            {
                                gradeVI: "Lớp 4–6", gradeEN: "Grade 4-6",
                                titleVI: "Thảo luận & Nhóm", titleEN: "Discussion & Teamwork",
                                pointsVI: ["Phát triển tư duy phản biện", "Kỹ năng lập kế hoạch", "Giải quyết vấn đề nhóm"],
                                pointsEN: ["Develop critical thinking", "Planning skills", "Group problem solving"],
                                icon: Users,
                                color: "from-[#4A55A2] to-slate-600",
                                shadow: "shadow-[#4A55A2]"
                            },
                            {
                                gradeVI: "Lớp 7–8", gradeEN: "Grade 7-8",
                                titleVI: "Thuyết trình & Lãnh đạo", titleEN: "Presentation & Leadership",
                                pointsVI: ["Kỹ năng thuyết trình trước đám đông", "Lãnh đạo dự án nhỏ", "Tìm hiểu nghề nghiệp"],
                                pointsEN: ["Public speaking skills", "Small project leadership", "Career exploration"],
                                icon: Presentation,
                                color: "from-orange-500 to-orange-400",
                                shadow: "shadow-orange-500"
                            }
                        ].map((item, idx) => (
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} transition={{ delay: idx * 0.15 }} key={idx} className="bg-white rounded-[2.5rem] p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group border border-slate-100">
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
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-medium text-slate-700 text-sm leading-tight">{pt}</p>
                                                <p className="text-xs text-slate-500 italic mt-0.5">{item.pointsEN[i]}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUTCOMES SECTION (Premium SaaS) */}
            <LearningOutcomes />

            {/* 7. FINAL OUTPUT / SHOWCASE — Rocket Stage Design */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f0f4ff] to-white overflow-hidden pb-32 md:pb-28">
                <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes rocket-float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-14px); }
                    }
                    .rocket-float { animation: rocket-float 5s ease-in-out infinite; }
                    @keyframes flame-flicker {
                        0%, 100% { transform: scaleY(1) scaleX(1); opacity: 1; }
                        33% { transform: scaleY(1.18) scaleX(0.92); opacity: 0.9; }
                        66% { transform: scaleY(0.88) scaleX(1.06); opacity: 0.85; }
                    }
                    .flame-flicker { animation: flame-flicker 0.7s ease-in-out infinite; }
                    @keyframes star-twinkle {
                        0%, 100% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.4); }
                    }
                    .star-twinkle { animation: star-twinkle 2s ease-in-out infinite; }
                    .rocket-badge-left { animation: rocket-float 5s ease-in-out infinite; animation-delay: 0.3s; }
                    .rocket-badge-right { animation: rocket-float 5s ease-in-out infinite; animation-delay: 0.8s; }
                    @keyframes connector-draw {
                        from { stroke-dashoffset: 200; }
                        to { stroke-dashoffset: 0; }
                    }
                ` }} />

                <div className="container mx-auto px-4 md:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-2xl md:text-5xl font-extrabold text-orange-500 mb-2 md:mb-3">SẢN PHẨM ĐẦU RA</h3>

                    </motion.div>

                    {/* ===== ROCKET DIAGRAM ===== */}
                    <div className="relative max-w-5xl mx-auto select-none">

                        {/* Background stars */}
                        {[
                            { top: '5%', left: '4%', delay: '0s', size: 8 },
                            { top: '12%', right: '6%', delay: '0.6s', size: 6 },
                            { top: '28%', left: '2%', delay: '1.1s', size: 5 },
                            { top: '40%', right: '3%', delay: '0.4s', size: 7 },
                            { top: '55%', left: '5%', delay: '1.5s', size: 5 },
                            { top: '70%', right: '7%', delay: '0.9s', size: 6 },
                        ].map((s, i) => (
                            <div key={i} className="absolute star-twinkle pointer-events-none" style={{ top: s.top, left: (s as any).left, right: (s as any).right, animationDelay: s.delay }}>
                                <Star className="text-yellow-400 fill-yellow-400" style={{ width: s.size, height: s.size }} />
                            </div>
                        ))}

                        {/* ===== ROCKET BODY (center column) ===== */}
                        <div className="flex flex-col items-center">


                            {/* SEGMENT 1 — CONTRIBUTE & SHINE (pink/purple) */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.6 }} whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative z-10 w-[220px] md:w-[280px]"
                            >
                                <svg width="100%" viewBox="0 0 280 72" className="overflow-visible drop-shadow-lg">
                                    <defs>
                                        <linearGradient id="seg1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#e879f9" />
                                            <stop offset="100%" stopColor="#a855f7" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="4" y="0" width="272" height="72" rx="16" fill="url(#seg1Grad)" />
                                    <rect x="4" y="62" width="272" height="10" rx="0" fill="#7c3aed" opacity="0.35" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                                    <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest drop-shadow text-center">NGÀY HỘI THUYẾT TRÌNH</span>
                                    <span className="text-white/80 text-[10px] md:text-xs font-bold mt-0.5">Showcase & Presentation Day</span>
                                </div>
                            </motion.div>

                            {/* SEGMENT 2 — DỰ ÁN CỘNG ĐỒNG (indigo) */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.6 }} whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative z-10 w-[250px] md:w-[310px] -mt-1"
                            >
                                <svg width="100%" viewBox="0 0 310 72" className="overflow-visible drop-shadow-lg">
                                    <defs>
                                        <linearGradient id="seg2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="100%" stopColor="#4A55A2" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="4" y="0" width="302" height="72" rx="16" fill="url(#seg2Grad)" />
                                    <rect x="4" y="62" width="302" height="10" rx="0" fill="#3730a3" opacity="0.35" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                                    <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest drop-shadow text-center">DỰ ÁN CỘNG ĐỒNG</span>
                                    <span className="text-white/80 text-[10px] md:text-xs font-bold mt-0.5">Community Impact Project</span>
                                </div>
                            </motion.div>

                            {/* SEGMENT 3 — HỒ SƠ CÁ NHÂN (teal/green) */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.6 }} whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative z-10 w-[280px] md:w-[340px] -mt-1"
                            >
                                <svg width="100%" viewBox="0 0 340 72" className="overflow-visible drop-shadow-lg">
                                    <defs>
                                        <linearGradient id="seg3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#14b8a6" />
                                            <stop offset="100%" stopColor="#0d9488" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="4" y="0" width="332" height="72" rx="16" fill="url(#seg3Grad)" />
                                    <rect x="4" y="62" width="332" height="10" rx="0" fill="#0f766e" opacity="0.35" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                                    <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest drop-shadow text-center">HỒ SƠ CÁ NHÂN</span>
                                    <span className="text-white/80 text-[10px] md:text-xs font-bold mt-0.5">Personal Growth Portfolio</span>
                                </div>
                            </motion.div>

                            {/* SEGMENT 4 — NHẬT KÝ / KỸNĂNG (orange) */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0.6 }} whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative z-10 w-[300px] md:w-[370px] -mt-1"
                            >
                                <svg width="100%" viewBox="0 0 370 76" className="overflow-visible drop-shadow-lg">
                                    <defs>
                                        <linearGradient id="seg4Grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#f97316" />
                                            <stop offset="100%" stopColor="#ea580c" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="4" y="0" width="362" height="76" rx="16" fill="url(#seg4Grad)" />
                                    <rect x="4" y="66" width="362" height="10" rx="0" fill="#c2410c" opacity="0.35" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
                                    <span className="text-white font-black text-xs md:text-sm uppercase tracking-widest drop-shadow text-center">NHẬT KÝ HÀNH TRÌNH</span>
                                    <span className="text-white/80 text-[10px] md:text-xs font-bold mt-0.5">Personal Journal & Skills Log</span>
                                </div>
                            </motion.div>



                        </div>

                      

                    </div>

                    {/* ===== MOBILE CARDS (shown below rocket on sm screens) ===== */}
                    <div className="md:hidden mt-10 grid grid-cols-2 gap-4">
                        {[
                            { num: '01', label: 'Nhật ký hành trình', sub: 'Tuần 1–3', color: 'border-orange-400 text-orange-500' },
                            { num: '02', label: 'Hồ sơ cá nhân', sub: 'Tuần 4–6', color: 'border-teal-400 text-teal-500' },
                            { num: '03', label: 'Dự án cộng đồng', sub: 'Tuần 7–9', color: 'border-indigo-400 text-indigo-500' },
                            { num: '04', label: 'Ngày hội Showcase', sub: 'Tuần 10–11', color: 'border-fuchsia-400 text-fuchsia-500' },
                        ].map((b, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={popIn} transition={{ delay: i * 0.1 }}
                                className={`bg-white rounded-2xl p-4 shadow-md border-2 ${b.color.split(' ')[0]} text-center`}>
                                <span className={`font-black text-2xl ${b.color.split(' ')[1]}`}>{b.num}</span>
                                <p className="font-bold text-slate-800 text-sm mt-1 leading-tight">{b.label}</p>
                                <p className="text-slate-500 text-xs mt-0.5">{b.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* ===== BOTTOM NOTE ===== */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }}
                        className="mt-14 text-center">
                        <p className="text-slate-500 text-sm md:text-base font-medium">
                            ⏱ <strong className="text-[#4A55A2]">Thời lượng mỗi giai đoạn:</strong> 2–3 tuần tập trung · Tổng 11 tuần chương trình
                        </p>
                    </motion.div>

                    {/* Gallery Section */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeInUp} className="mt-16 bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10">
                        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h4 className="text-2xl md:text-3xl font-extrabold text-[#4A55A2] flex items-center gap-3">
                                    <div className="p-2.5 bg-orange-100 rounded-xl">
                                        <Camera className="w-6 h-6 text-orange-500" />
                                    </div>
                                    Khoảnh khắc học viên
                                </h4>
                                <p className="text-slate-500 font-medium text-sm md:text-base mt-2 ml-14">
                                    Nụ cười và sự trưởng thành qua từng tuần học
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-orange-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 min-h-[500px] md:h-[550px]">
                            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm border border-slate-100/50">
                                <img src="/images/summer-course/img-1.jpg" alt="Summer course moment 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold text-lg">Trải nghiệm thực tế</p>
                                    </div>
                                </div>
                            </div>
                            {[2, 3, 4, 5].map((num) => (
                                <div key={num} className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-sm border border-slate-100/50">
                                    <img src={`/images/summer-course/img-${num}.jpg`} alt={`Summer course moment ${num}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
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


const RocketBadge = ({
    side = "left",
    color = "orange",
    title,
    subtitle,
    index
}: {
    side?: "left" | "right";
    color?: string;
    title: string;
    subtitle: string;
    index: string;
}) => {
    const isLeft = side === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`absolute hidden md:flex items-center gap-3 top-1/2 -translate-y-1/2 ${
                isLeft ? "-left-[240px]" : "-right-[240px] flex-row-reverse"
            }`}
        >
            {/* Badge */}
            <div className={`flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-lg border-2 border-${color}-400 hover:scale-105 transition`}>
                <span className={`text-${color}-500 font-black text-xl`}>
                    {index}
                </span>
                <div>
                    <p className="font-black text-slate-800 text-sm leading-tight">
                        {title}
                    </p>
                    <p className="text-slate-500 text-xs">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* Line */}
            <svg width="80" height="2" className="flex-shrink-0">
                <line
                    x1="0"
                    y1="1"
                    x2="80"
                    y2="1"
                    stroke="currentColor"
                    className={`text-${color}-400`}
                    strokeWidth="2"
                    strokeDasharray="5,3"
                />
            </svg>
        </motion.div>
    );
};
