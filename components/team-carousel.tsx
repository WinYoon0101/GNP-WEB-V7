"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate as fmAnimate } from "framer-motion";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  sort_order: number;
}

export function TeamCarousel() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(5);
  const [mounted, setMounted] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data, error } = await supabase
          .from("team_members")
          .select("*")
          .order("sort_order", { ascending: true });

        if (error) console.error("Lỗi:", error);
        else if (data) setMembers(data);
      } catch (err) {
        console.error("Kết nối:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(2);
      else if (window.innerWidth < 768) setCardsToShow(3);
      else if (window.innerWidth < 1024) setCardsToShow(4);
      else setCardsToShow(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentCardsToShow = mounted ? cardsToShow : 5;
  const maxIndex = Math.max(0, members.length - currentCardsToShow);
  const gap = 24; // Khoảng cách giữa các card

  const getSlideOffset = useCallback(() => {
    if (!trackRef.current) return 0;
    const containerWidth = trackRef.current.parentElement?.clientWidth || 0;
    const cardWidth = (containerWidth - gap * (currentCardsToShow - 1)) / currentCardsToShow;
    return cardWidth + gap;
  }, [currentCardsToShow, gap]);

  useEffect(() => {
    const offset = getSlideOffset();
    fmAnimate(x, -currentIndex * offset, { type: "spring", stiffness: 300, damping: 35, mass: 0.8 });
  }, [currentIndex, currentCardsToShow, getSlideOffset, x]);

  const goNext = useCallback(() => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)), [maxIndex]);
  const goPrev = useCallback(() => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1)), [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, goNext]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-center md:text-left">
          <h2 className="text-[#F2701A] text-3xl md:text-[38px] font-bold uppercase">
            Đội ngũ giáo viên <br /> chuẩn hệ thống GNP
          </h2>
          <p className="text-gray-600 max-w-md text-sm md:text-base">
            100% giáo viên được đảm bảo bởi chất lượng đào tạo, tổ chức uy tín hàng đầu trong khu vực về chuẩn đào tạo giáo viên nghiêm ngặt.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-[#F2701A]" size={40} /></div>
        ) : (
          <div className="relative group/carousel">
            {/* Arrows */}
            {members.length > currentCardsToShow && (
              <>
                <button onClick={() => { goPrev(); handleInteraction(); }} className="absolute left-0 top-[35%] -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all"><ChevronLeft /></button>
                <button onClick={() => { goNext(); handleInteraction(); }} className="absolute right-0 top-[35%] -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all"><ChevronRight /></button>
              </>
            )}

            <div className="overflow-hidden">
              <motion.div
                ref={trackRef}
                className="flex cursor-grab active:cursor-grabbing select-none"
                style={{ x, gap: `${gap}px` }}
                drag="x"
                dragConstraints={{ left: -(maxIndex * getSlideOffset()), right: 0 }}
                onDragStart={() => setIsAutoPlaying(false)}
                onDragEnd={(_, info) => {
                  let newIndex = currentIndex;
                  if (info.offset.x < -60) newIndex++;
                  else if (info.offset.x > 60) newIndex--;
                  setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
              >
                {members.map((member) => (
                  <div key={member.id} className="flex-shrink-0" style={{ width: `calc((100% - ${gap * (currentCardsToShow - 1)}px) / ${currentCardsToShow})` }}>
                    <div className="group cursor-pointer">
                      {/* Ảnh vuông chuẩn 226x226 */}
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-md">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <h4 className="font-bold text-gray-900 line-clamp-1">{member.name}</h4>
                        <p className="text-gray-500 text-xs md:text-sm mt-1 line-clamp-2">{member.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}