"use client";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { BranchesCarousel } from "./branches-carousel";
import MagicBento from "./MagicBento";


export function About() {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="bg-white py-20 md:py-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isIntersecting
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 inline-block rounded-full bg-[#F2701A]/10 border border-[#F2701A]/20 px-4 py-2 text-sm font-bold text-[#F2701A] uppercase tracking-wider">
            Vì sao chọn chúng tôi
          </div>
          <h2 className="mb-4 text-balance text-3xl font-black md:text-5xl text-slate-900 uppercase tracking-tighter">
            GNP English Academy
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Đồng hành cùng hành trình chinh phục tiếng Anh của bạn với chương
            trình đào tạo chất lượng cao và đội ngũ giảng viên tận tâm.
          </p>
        </div>

        <div className="flex justify-center items-center w-full mx-auto my-12">
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="242, 112, 26"
            disableAnimations={false}
          />
        </div>
       
      
      </div>
    </section>
  );
}
