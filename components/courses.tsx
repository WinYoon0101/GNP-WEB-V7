"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, School, GraduationCap, MessageCircle, Briefcase } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const courses = [
  {
    icon: Baby,
    title: "Tiếng Anh Mẫu giáo & Phonics",
    age: "4-6 tuổi",
    description:
      "Xây dựng nền tảng phát âm chuẩn và làm quen với tiếng Anh qua trò chơi, bài hát và hoạt động tương tác.",
    topics: ["Phonics cơ bản", "Từ vựng hàng ngày", "Bài hát & trò chơi"],
    gradient: "from-blue-400 to-blue-500",
  },
  {
    icon: School,
    title: "Tiếng Anh Thiếu nhi",
    age: "7-12 tuổi",
    description: "Chương trình Cambridge Starters, Movers, Flyers giúp trẻ phát triển toàn diện 4 kỹ năng.",
    topics: ["Cambridge Starters", "Cambridge Movers", "Cambridge Flyers"],
    gradient: "from-green-400 to-green-500",
  },
  {
    icon: GraduationCap,
    title: "Tiếng Anh Thiếu niên",
    age: "13-18 tuổi",
    description: "Luyện thi KET, PET và nâng cao kỹ năng giao tiếp, chuẩn bị cho học tập và thi cử.",
    topics: ["KET (A2)", "PET (B1)", "FCE (B2)"],
    gradient: "from-purple-400 to-purple-500",
  },
  {
    icon: MessageCircle,
    title: "Tiếng Anh Giao tiếp",
    age: "Từ 16 tuổi",
    description: "Phát triển khả năng giao tiếp tự tin trong mọi tình huống thực tế, từ cơ bản đến nâng cao.",
    topics: ["Giao tiếp cơ bản", "Giao tiếp nâng cao", "Tiếng Anh du lịch"],
    gradient: "from-orange-400 to-orange-500",
  },
  {
    icon: Briefcase,
    title: "Tiếng Anh cho Người đi làm",
    age: "Người đi làm",
    description: "Tiếng Anh chuyên nghiệp cho môi trường công sở, email, thuyết trình và phỏng vấn.",
    topics: ["Giao tiếp công sở", "Email & báo cáo", "Thuyết trình & phỏng vấn"],
    gradient: "from-red-400 to-red-500",
  },
]

export function Courses() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="courses" className="bg-gradient-to-b from-orange-50/50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Chương trình học</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Đa dạng khóa học phù hợp với mọi lứa tuổi và mục tiêu học tập
          </p>
        </div>

        <div ref={ref} className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`group border-2 transition-all duration-700 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl ${
                isIntersecting ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${course.gradient} shadow-lg transition-transform group-hover:scale-110`}
                >
                  <course.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">{course.age}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
                <div className="space-y-2">
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="shadow-lg transition-transform hover:scale-105">
            <a href="#contact">Tư vấn chương trình phù hợp</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
