"use client"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Users, Award, Building2, Globe } from "lucide-react"

export function StatsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const stats = [
    { icon: Users, value: "5000+", label: "Học viên", gradient: "from-blue-400 to-blue-500" },
    { icon: Award, value: "100+", label: "Học viên IELTS 7.0+", gradient: "from-orange-400 to-orange-500" },
    { icon: Building2, value: "5+", label: "Năm hoạt động", gradient: "from-green-400 to-green-500" },
    { icon: Globe, value: "3+", label: "Trung tâm quốc tế", gradient: "from-purple-400 to-purple-500" },
  ]

  return (
    <section className="bg-orange-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="mx-auto grid max-w-full gap-2 sm:gap-4 lg:gap-6 grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-700 ${
                isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-2 flex justify-center sm:mb-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/20 shadow-lg sm:h-16 sm:w-16 ${
                    isIntersecting ? "animate-bounce" : ""
                  }`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <stat.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
              </div>
              <div className="mb-1 text-base font-bold sm:mb-2 sm:text-xl lg:text-2xl">{stat.value}</div>
              <div className="text-xs text-orange-100 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
