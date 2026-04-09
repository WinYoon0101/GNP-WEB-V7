import React from 'react';
import {
    Sun, Compass, Sprout, Globe, Star, Sparkles, Target, Users, BookOpen,
    Map, Lightbulb, Clock, Focus, Trophy, CheckCircle2, HeartHandshake, Palette, BookMarked, MonitorPlay, FileText, Camera, Brain, Presentation, MessageCircle, Heart
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SummerCourseTab() {
    return (
        <div className="w-full font-sans bg-white text-[#4A55A2] selection:bg-orange-200 overflow-hidden">
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
            <section className="relative overflow-hidden bg-[#FD7400] lg:min-h-[600px] flex items-center">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-full h-full opacity-25 pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] animate-soft-float">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
                        </svg>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:flex items-center gap-12">
                            {/* LEFT: KIDS IMAGE */}
                            <div className="w-full lg:w-5/12 relative order-2 lg:order-1">
                                <div className="relative z-20 animate-soft-float p-4 lg:p-0">
                                    <img 
                                        src="/images/summer-course/summer-kids-orange.png" 
                                        alt="GNP Summer Kids" 
                                        className="w-full h-auto drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                                        style={{ 
                                            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
                                            maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
                                            filter: 'saturate(1.2) contrast(1.05)'
                                        }}
                                    />
                                </div>
                                {/* Decorative elements behind kids */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-white/20 rounded-full blur-3xl -z-10" />
                                
                                {/* Floating Icons around kids */}
                                <div className="absolute -top-10 -left-6 w-16 h-16 lg:w-20 lg:h-20 animate-soft-float z-30" style={{ animationDelay: '0.5s' }}>
                                    <img src="/graduation.png" alt="Graduation" className="w-full h-auto opacity-100 rotate-[-15deg] drop-shadow-xl" />
                                </div>
                                <div className="absolute bottom-[5%] -right-10 w-20 h-20 lg:w-24 lg:h-24 animate-soft-float z-30" style={{ animationDelay: '1.2s' }}>
                                    <img src="/rocket.png" alt="Rocket" className="w-full h-auto drop-shadow-2xl rotate-[15deg]" />
                                </div>
                            </div>

                            {/* RIGHT: CONTENT */}
                            <div className="w-full lg:w-7/12 text-center lg:text-left order-1 lg:order-2">
                                <div className="mb-6 flex flex-col items-center lg:items-start">
                                    {/* Logo wrapped in a white badge for a premium sticker look */}
                                    <div className="bg-white p-3 rounded-3xl shadow-xl rotate-[-2deg] mb-4 border-2 border-white/50 backdrop-blur-sm">
                                        <img 
                                            src="/images/summer-course/gnp-summer-logo.jpg" 
                                            alt="GNP Summer Logo" 
                                            className="h-20 md:h-28 w-auto rounded-xl"
                                        />
                                    </div>
                                    <div className="inline-block px-5 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#4A55A2] font-black text-xs md:text-sm tracking-widest uppercase mb-4">
                                        DISCOVER "ME" | GROW "ME" | CONTRIBUTE "ME"
                                    </div>
                                </div>



                                <div className="relative mb-8">
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] text-white leading-[0.9] drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] italic">
                                        <span className="block tracking-tighter uppercase">MY GROWTH</span>
                                        <span className="block text-[#4A55A2] tracking-tighter -mt-2 uppercase">SUMMER 2026</span>
                                    </h1>
                                    <div className="absolute -top-4 right-0 lg:-right-6 bg-orange-600 text-white text-[12px] font-black px-3 py-1 rounded-lg rotate-12 shadow-xl border-2 border-white">
                                        2026
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 mb-8">
                                    <div className="bg-white px-6 py-2 rounded-2xl shadow-lg border-b-4 border-orange-500">
                                        <span className="text-orange-600 font-extrabold text-xl md:text-2xl uppercase tracking-tighter">HÀNH TRÌNH 11 TUẦN</span>
                                    </div>
                                    <div className="flex -space-x-2">
                                        {[Sun, Globe, Sprout, Heart].map((Icon, i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-orange-500 shadow-sm border border-orange-100">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-lg md:text-xl text-[#4A55A2] font-bold max-w-2xl leading-relaxed mb-10 drop-shadow-sm">
                                    Mùa hè để con <span className="text-white">khám phá chính mình</span>, phát triển mỗi ngày và sống có ích hơn với cộng đồng
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                                    <Button size="lg" className="bg-[#4A55A2] text-white hover:bg-[#3d4685] h-14 md:h-16 px-10 rounded-full text-lg font-black shadow-xl transition-all hover:scale-105" asChild>
                                        <Link href="/lien-he">ĐĂNG KÝ NGAY</Link>
                                    </Button>

                                    {/* Promo Sticker */}
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative bg-white p-4 rounded-2xl border-2 border-orange-100 shadow-xl max-w-[280px]">
                                            <p className="text-[10px] font-black text-orange-600 uppercase tracking-tighter mb-1 flex items-center gap-1">
                                                <Sparkles className="w-3 h-3" /> HOT HOT HOT
                                            </p>
                                            <p className="text-xs font-bold text-slate-700 leading-tight">
                                                Đăng ký trong tháng 4 này, <span className="text-red-500 underline decoration-2">MIỄN PHÍ</span> toàn bộ chuyến "dã ngoại"!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM WAVE CURVE */}
                <div className="absolute bottom-0 left-0 w-full leading-none z-30">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px] fill-white">
                        <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"></path>
                    </svg>
                </div>
            </section>



            {/* 2. PROGRAM OVERVIEW (Timeline) */}
            <section className="py-16 bg-slate-50 relative">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#4A55A2] mb-3">TỔNG QUAN CHƯƠNG TRÌNH</h3>
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
                            <div key={idx} className="w-[85vw] sm:w-[50vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink md:snap-align-none relative z-10 flex flex-col items-center text-center group">
                                {/* Connecting Line per item */}
                                {idx < 3 && (
                                    <div className={`absolute top-12 -translate-y-1/2 left-[50%] w-[calc(100%+1.5rem)] lg:w-[calc(100%+2rem)] h-[3px] bg-gradient-to-r -z-10
                                        ${idx === 0 ? 'from-orange-500/40 to-[#4A55A2]/40' : ''}
                                        ${idx === 1 ? 'from-[#4A55A2]/40 to-orange-500/40 md:hidden lg:block' : ''}
                                        ${idx === 2 ? 'from-orange-500/40 to-slate-500/40' : ''}
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
                        <h3 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-3">ĐIỂM NHẤN CÁC TUẦN</h3>
                        <h4 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Weekly Highlights</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            {
                                week: 1,
                                titleVI: "Nhận diện bản thân", titleEN: "I Am Unique",
                                descVI: "Trong tuần đầu tiên, các em sẽ bắt đầu hành trình khám phá và nhận diện bản thân. Cùng nhau tìm hiểu sâu hơn về những nét tính cách đặc trưng, sở thích cá nhân và điểm mạnh riêng biệt. Các em sẽ được hướng dẫn tự lập cuốn nhật ký \"This is me\" để lưu giữ dấu ấn tự hào của mình.",
                                descEN: "In the first week, students will explore unique personality traits, hobbies, and strengths. They will be guided to create a \"This is me\" journal to capture personal moments.",
                                actVI: "Hoạt động: Vẽ chân dung bản thân / My Identity Card", actEN: "Activity: Draw self-portrait / My Identity Card",
                                icon: Sparkles
                            },
                            {
                                week: 2,
                                titleVI: "Thói quen lành mạnh", titleEN: "Healthy Me",
                                descVI: "Tuần 2 tập trung vào việc hình thành các thói quen sinh hoạt lành mạnh thiết yếu. Các em sẽ học cách cân bằng giữa việc ăn uống dinh dưỡng, duy trì chế độ vận động, thời gian ngủ nghỉ và rèn luyện kỹ năng vệ sinh cá nhân để tự chủ chăm lo bản thân mỗi ngày.",
                                descEN: "Week 2 focuses on forming essential lifestyle habits (diet, exercise, sleep, hygiene), enhancing their daily self-care awareness.",
                                actVI: "Hoạt động: Thiết kế “1 ngày khỏe mạnh của tôi”", actEN: "Activity: Design 'My healthy day'",
                                icon: Heart
                            },
                            {
                                week: 3,
                                titleVI: "Cảm xúc của tôi", titleEN: "My Feelings Matter",
                                descVI: "Trí tuệ cảm xúc là chìa khóa cực kì quan trọng. Học viên sẽ học cách gọi tên, nhận diện và quản lý các luồng cảm xúc phức tạp, được rèn luyện kỹ năng giao tiếp tích cực khi đối mặt với sự buồn bã, cơn nóng giận hay nỗi thất vọng.",
                                descEN: "Emotional intelligence is key. This week, students learn to identify and practice positive communication skills when facing sadness, anger or frustration.",
                                actVI: "Hoạt động: Emotion wheel / Role-play tình huống", actEN: "Activity: Emotion wheel / Scenario role-play",
                                icon: MessageCircle
                            },
                            {
                                week: 4,
                                titleVI: "Tư duy phát triển", titleEN: "Growth Mindset in Action",
                                descVI: "Kích hoạt tư duy phát triển với thông điệp cốt lõi: \"Làm sai không xấu - Bỏ cuộc mới đáng sợ\". Các em sẽ đối mặt với các thử thách cá nhân hằng ngày để rèn luyện sức bền bỉ và sự nhẫn nại, ý chí đối mặt khó khăn.",
                                descEN: "Activating a growth mindset with the message: \"Failing isn't bad - Giving up is\". Students face daily challenges to build resilience.",
                                actVI: "Hoạt động: Fail & Learn Journal", actEN: "Activity: Fail & Learn Journal",
                                icon: Brain
                            },
                            {
                                week: 5,
                                titleVI: "Quản lý thời gian", titleEN: "Time & Self-Management",
                                descVI: "Kỹ năng tổ chức và làm chủ thời gian được đưa vào thực hành. Các em sẽ được phân tích tầm quan trọng của sự phân bổ giữa học tập và giải trí, biết cách sử dụng các bảng kế hoạch đơn giản, hiệu quả cho một ngày của mình.",
                                descEN: "Time management skills in practice. Learners will master setting up simple schedules to balance studying and leisure.",
                                actVI: "Hoạt động: My Weekly Planner", actEN: "Activity: My Weekly Planner",
                                icon: Clock
                            },
                            {
                                week: 6,
                                titleVI: "Giao tiếp & Làm việc nhóm", titleEN: "Communication & Teamwork",
                                descVI: "Không ai có thể thành công một mình. Chuỗi hoạt động rèn luyện kỹ năng mềm: biết cách lắng nghe thấu cảm, tự tin để chia sẻ vòng tròn ý tưởng và phối hợp nhịp nhàng để vượt qua thử thách, cũng như biết giải quyết mâu thuẫn một cách bao dung.",
                                descEN: "Week 6 hones crucial soft skills: empathetic listening, sharing, and seamless teamwork to resolve conflicts.",
                                actVI: "Hoạt động: Team challenge / Cooperative games", actEN: "Activity: Team challenge / Cooperative games",
                                icon: Users
                            },
                            {
                                week: 7,
                                titleVI: "Người xung quanh tôi", titleEN: "People Around Me",
                                descVI: "Sự chú ý và học hỏi được mở rộng ra cộng đồng xã hội xung quanh. Các em tìm hiểu, thắt chặt mối liên kết với gia đình, thầy cô, bạn bè, rèn luyện bài học về sự biết ơn sâu sắc và tôn trọng sự khác biệt lớn của mỗi cá thể.",
                                descEN: "Attention expands to the community. Students strengthen connections with family, teachers, friends, showing gratitude and respecting diversity.",
                                actVI: "Hoạt động: Gratitude project", actEN: "Activity: Gratitude project",
                                icon: HeartHandshake
                            },
                            {
                                week: 8,
                                titleVI: "Công dân nhỏ", titleEN: "Little Citizens",
                                descVI: "Khơi dậy niềm tự hào vững chãi của một \"Công dân nhí\". Học viên sẽ tự tìm hiểu về quyền lợi bên cạnh trách nhiệm xã hội của mình, đi vào thực tập thực nghiệm thông qua các hoạt động giữ gìn không gian chung, nâng cao ý thức môi trường.",
                                descEN: "Fostering awareness of a \"Little Citizen\". Students learn basic social rights and responsibilities through protecting the environment and shared spaces.",
                                actVI: "Hoạt động: Green action / Community rules", actEN: "Activity: Green action / Community rules",
                                icon: Globe
                            },
                            {
                                week: 9,
                                titleVI: "Thế giới nghề nghiệp", titleEN: "World of Work",
                                descVI: "Khám phá thế giới nghề nghiệp đa dạng để định hình ước mơ. Khuyến khích các bạn nhỏ tự đứng lên kiến nghị công việc vừa sức: giúp việc gia đình (nhóm nhỏ), điều phối lớp học (nhóm giữa) hoặc làm dự án truyền thông sáng tạo (nhóm lớn).",
                                descEN: "Explore diverse professions to shape dreams. Students propose age-appropriate tasks: helping family, class support, or media projects.",
                                actVI: "Hoạt động: My First Job Proposal", actEN: "Activity: My First Job Proposal",
                                icon: Target
                            },
                            {
                                week: 10,
                                titleVI: "Tôi có thể đóng góp", titleEN: "I Can Contribute",
                                descVI: "Tiến đến chặng \"Tỏa sáng và Cống hiến\". Học viên sẽ vận dụng nhuần nhuyễn mọi vốn kỹ năng để vận hành một dự án cộng đồng nhỏ theo nhóm, trải nghiệm niềm xúc động \"Làm việc thật – Tạo giá trị thật\" nhằm đem lại giá trị tích cực.",
                                descEN: "Time to \"Shine and Contribute\". Students execute a mini community project, bringing positive values to those around them.",
                                actVI: "Hoạt động: Community Mini Project", actEN: "Activity: Community Mini Project",
                                icon: Star
                            },
                            {
                                week: 11,
                                titleVI: "Mùa hè trưởng thành", titleEN: "My Summer, My Growth",
                                descVI: "Tuần lễ vinh quang và tổng kết hành trình hè tràn ngập kỷ niệm. Học viên sẽ tự tin sắp xếp trọn vẹn mọi điểm nhấn vào hồ sơ năng lực (Portfolio), lên bục thuyết trình (Showcase) thành quả ấn tượng trước sự chứng kiến đặc biệt của phụ huynh.",
                                descEN: "An honorary week to reflect on growth. Students finalize their personal Portfolios and showcase remarkable achievements for their parents.",
                                actVI: "Hoạt động: Presentation + Portfolio cá nhân", actEN: "Activity: Presentation + Personal Portfolio",
                                icon: Trophy
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="perspective-1000 h-[280px] group cursor-pointer">
                                <div className="relative w-full h-full transition-transform duration-700 transform-style-3d flip-inner">
                                    {/* FRONT FACE */}
                                    <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-sm backface-hidden flex flex-col overflow-hidden">
                                        <div className="w-full h-[150px] relative shrink-0">
                                            <img src={`/images/weeks/week${item.week}.png`} alt={item.titleVI} className="absolute inset-0 w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                                        </div>
                                        <div className="px-6 pb-6 pt-3 relative z-10 flex-col flex-1">
                                            <div className="inline-flex items-center gap-2 mb-2">
                                                <div className="w-6 h-6 rounded-md bg-[#FF7A00]/10 flex items-center justify-center text-[#FF7A00]">
                                                    <item.icon className="w-3.5 h-3.5" />
                                                </div>
                                                <div className="text-[10px] font-extrabold text-[#FF7A00] tracking-widest uppercase">Tuần / Week {item.week}</div>
                                            </div>
                                            <h4 className="text-xl font-bold text-[#4A55A2] leading-tight mb-1">{item.titleVI}</h4>
                                            <h5 className="text-sm font-semibold text-[#4A55A2]/80">{item.titleEN}</h5>
                                        </div>
                                    </div>

                                    {/* BACK FACE */}
                                    <div className="absolute inset-0 bg-white rounded-3xl p-6 border-2 border-orange-100 shadow-lg backface-hidden rotate-y-180 flex flex-col overflow-hidden">
                                        <div className="flex-1 overflow-y-auto pr-2 hide-scrollbar">
                                            <p className="text-slate-700 font-medium text-sm leading-relaxed mb-2 whitespace-pre-line">{item.descVI}</p>
                                            <p className="text-slate-500 text-xs italic leading-relaxed whitespace-pre-line">{item.descEN}</p>
                                        </div>
                                        <div className="pt-4 border-t border-slate-100 shadow-[0_-10px_10px_-10px_rgba(255,255,255,1)]">
                                            <p className="text-orange-500 font-bold text-sm flex items-start gap-2 leading-snug">
                                                <Sparkles className="w-4 h-4 mt-0.5 flex-shrink-0" /> {item.actVI}
                                            </p>
                                            <p className="text-orange-400 font-medium text-xs italic mt-1 ml-6 leading-snug">{item.actEN}</p>
                                        </div>
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
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-[#4A55A2]/5 border border-slate-100">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h3 className="text-3xl md:text-5xl font-extrabold text-[#4A55A2] mb-3">CẤU TRÚC MỘT NGÀY</h3>
                            <h4 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-widest mb-4">Daily Structure</h4>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                            {/* LEFT: Morning */}
                            <div className="bg-gradient-to-br from-slate-100 to-white rounded-3xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-full bg-[#4A55A2] flex items-center justify-center text-white shadow-lg shadow-slate-1000/30">
                                        <Sun className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-[#4A55A2]">Buổi sáng – GPS</h4>
                                        <h5 className="text-lg font-bold text-[#4A55A2]">Morning – GPS</h5>
                                    </div>
                                </div>
                                <ul className="space-y-6">
                                    {[
                                        { textVI: "Growth mindset - Tư duy phát triển", textEN: "Growth mindset", icon: Brain },
                                        { textVI: "People - Con người", textEN: "People & Interactions", icon: Users },
                                        { textVI: "Skills - Kỹ năng", textEN: "Essential Skills", icon: Target }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-[#4A55A2] flex-shrink-0">
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
                                    <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-[#4A55A2]">Buổi chiều – GNP</h4>
                                        <h5 className="text-lg font-bold text-orange-500">Afternoon – GNP</h5>
                                    </div>
                                </div>
                                <ul className="space-y-6">
                                    {[
                                        { textVI: "Growth thông qua Trải nghiệm", textEN: "Growth through experience", icon: Compass },
                                        { textVI: "Hoạt động Novelty sáng tạo", textEN: "Novelty activities", icon: Lightbulb },
                                        { textVI: "Hoạt động Nhóm & Xã hội", textEN: "Team & social activities", icon: HeartHandshake }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-orange-50">
                                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
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
                        <h3 className="text-3xl md:text-5xl font-extrabold text-orange-500 mb-3">PHÂN BỐ THEO ĐỘ TUỔI</h3>
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
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
            <section className="py-20 relative bg-[#4A55A2] overflow-hidden">
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
                            <h4 className="text-2xl md:text-3xl text-slate-200 font-bold uppercase tracking-widest mb-8">Learning Outcomes</h4>

                            <p className="text-slate-100 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Học viên được trang bị bộ kỹ năng toàn diện chuẩn bị cho năm học mới và tương lai.
                            </p>

                            <Button size="lg" className="bg-white text-[#4A55A2] hover:bg-gray-50 h-14 px-10 rounded-full font-bold shadow-xl transition-all hover:scale-105 hidden lg:inline-flex" asChild>
                                <Link href="/lien-he">Nhận tư vấn chi tiết</Link>
                            </Button>
                        </div>

                        <div className="lg:w-7/12 w-full">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#4A55A2]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:scale-150 transition-transform duration-1000 delay-100" />
                                
                                <div className="relative z-10 grid sm:grid-cols-2 gap-4 md:gap-5">
                                    {[
                                        { vi: "Nhận thức bản thân", en: "Self-awareness", color: "from-[#4A55A2] to-indigo-500", icon: Focus },
                                        { vi: "Tư duy phát triển", en: "Growth mindset", color: "from-orange-500 to-orange-400", icon: Brain },
                                        { vi: "Kỹ năng giao tiếp", en: "Communication skills", color: "from-teal-500 to-emerald-400", icon: MessageCircle },
                                        { vi: "Quản lý thời gian", en: "Time management", color: "from-indigo-400 to-blue-500", icon: Clock },
                                        { vi: "Kỹ năng làm việc nhóm", en: "Teamwork", color: "from-rose-400 to-pink-500", icon: Users },
                                        { vi: "Sự tự tin", en: "Confidence", color: "from-amber-400 to-orange-500", icon: Star },
                                        { vi: "Hồ sơ & Dự án", en: "Portfolio & project", color: "from-[#4A55A2] to-purple-500", icon: BookMarked, colSpan: "sm:col-span-2" }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`relative flex items-center gap-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden group/item ${item.colSpan || ''}`}>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 ease-out" />
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent to-transparent group-hover/item:from-orange-400 group-hover/item:to-orange-600 transition-all duration-300 rounded-l-2xl opacity-0 group-hover/item:opacity-100" />
                                            
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover/item:scale-110 group-hover/item:-rotate-6 transition-transform duration-300 relative z-10`}>
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div className="relative z-10">
                                                <p className="font-extrabold text-slate-700 text-sm md:text-base leading-tight group-hover/item:text-orange-600 transition-colors">{item.vi}</p>
                                                <p className="font-medium text-slate-400 text-xs mt-1 italic group-hover/item:text-slate-500">{item.en}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 text-center lg:hidden">
                                    <Button size="lg" className="bg-[#FF7A00] text-white hover:bg-[#E56E00] w-full h-14 rounded-full font-bold shadow-lg" asChild>
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
                        <h3 className="text-3xl md:text-5xl font-extrabold text-[#4A55A2] mb-3">SẢN PHẨM ĐẦU RA</h3>
                        <h4 className="text-xl md:text-2xl text-orange-500 font-bold uppercase tracking-widest mb-4">Final Output / Showcase</h4>
                        <p className="text-slate-600 text-lg">Những dấu ấn khó quên sau 11 tuần trưởng thành.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { vi: "Hồ sơ cá nhân", en: "Portfolio", icon: FileText, bg: "bg-slate-100", text: "text-slate-800" },
                            { vi: "Nhật ký cá nhân", en: "Personal journal", icon: BookOpen, bg: "bg-orange-50", text: "text-orange-600" },
                            { vi: "Dự án cộng đồng", en: "Community project", icon: HeartHandshake, bg: "bg-orange-50", text: "text-orange-600" },
                            { vi: "Ngày hội thuyết trình", en: "Presentation day", icon: Presentation, bg: "bg-slate-50", text: "text-slate-800" }
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

                    {/* Gallery Section */}
                    <div className="mt-12 md:mt-16 bg-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
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
                                <div className="flex gap-1.5 object-right">
                                    <div className="w-3 h-3 rounded-full bg-orange-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-orange-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 min-h-[500px] md:h-[550px]">
                            {/* Large Image */}
                            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm border border-slate-100/50">
                                <img src="/images/summer-course/img-1.jpg" alt="Summer course moment 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-bold text-lg">Trải nghiệm thực tế</p>
                                    </div>
                                </div>
                            </div>

                            {/* Small Images */}
                            {[2, 3, 4, 5].map((num) => (
                                <div key={num} className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-sm border border-slate-100/50">
                                    <img src={`/images/summer-course/img-${num}.jpg`} alt={`Summer course moment ${num}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
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
