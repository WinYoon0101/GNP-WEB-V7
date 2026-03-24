"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Baby,
  School,
  GraduationCap,
  MessageCircle,
  Briefcase,
  Award,
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Target,
} from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"
import { CoursesAccordion } from "./courses-accordion"

const courseCategories = [
  {
    id: "kids",
    label: "Trẻ em",
    icon: Baby,
    color: "from-pink-400 via-rose-400 to-orange-400",
  },
  {
    id: "teens",
    label: "Thiếu niên",
    icon: School,
    color: "from-blue-400 via-indigo-400 to-purple-400",
  },
  {
    id: "adults",
    label: "Người lớn",
    icon: GraduationCap,
    color: "from-teal-400 via-cyan-400 to-blue-400",
  },
  {
    id: "business",
    label: "Doanh nghiệp",
    icon: Briefcase,
    color: "from-orange-400 via-amber-400 to-yellow-400",
  },
]

const coursesData = {
  kids: [
    {
      title: "English Explorers",
      subtitle: "Khám phá Tiếng Anh",
      age: "4-6 tuổi",
      level: "Beginner",
      duration: "36 buổi",
      students: "8-12 học viên",
      image: "/happy-children-learning-english-in-colorful-classr.jpg",
      description:
        "Chương trình học qua trải nghiệm với phương pháp Phonics, giúp trẻ phát âm chuẩn và yêu thích tiếng Anh ngay từ đầu.",
      highlights: [
        "Phát âm chuẩn với Phonics",
        "Học qua trò chơi, bài hát",
        "Phát triển tư duy sáng tạo",
        "Giáo viên nước ngoài",
      ],
      color: "from-pink-500 to-rose-500",
      badge: "Phổ biến nhất",
    },
    {
      title: "Cambridge Young Learners",
      subtitle: "Tiếng Anh Cambridge",
      age: "7-12 tuổi",
      level: "Starters - Flyers",
      duration: "120 buổi",
      students: "10-15 học viên",
      image: "/elementary-students-studying-cambridge-english-boo.jpg",
      description: "Chuẩn Cambridge Starters, Movers, Flyers - Con đường vững chắc đến các chứng chỉ quốc tế.",
      highlights: [
        "Chứng chỉ Cambridge quốc tế",
        "4 kỹ năng toàn diện",
        "Lộ trình rõ ràng từ A1-B1",
        "Thi thử định kỳ",
      ],
      color: "from-blue-500 to-indigo-500",
      badge: "Chứng chỉ quốc tế",
    },
  ],
  teens: [
    {
      title: "IELTS Foundation",
      subtitle: "Nền tảng IELTS",
      age: "13-15 tuổi",
      level: "Pre-Intermediate",
      duration: "48 buổi",
      students: "12-15 học viên",
      image: "/teenagers-studying-ielts-english-in-modern-classro.jpg",
      description: "Xây dựng nền tảng vững chắc cho kỳ thi IELTS, phát triển tư duy và kỹ năng học thuật.",
      highlights: ["Nền tảng IELTS 5.0-6.0", "Tư duy học thuật", "Luyện kỹ năng 4 phần thi", "Giáo trình Cambridge"],
      color: "from-purple-500 to-pink-500",
      badge: "Xu hướng 2024",
    },
    {
      title: "IELTS Intensive",
      subtitle: "IELTS Chuyên sâu",
      age: "16-18 tuổi",
      level: "Intermediate - Advanced",
      duration: "60 buổi",
      students: "8-12 học viên",
      image: "/high-school-students-preparing-for-ielts-exam.jpg",
      description: "Luyện thi IELTS chuyên sâu với đội ngũ giáo viên 8.0+ IELTS, cam kết đầu ra 6.5-7.5+",
      highlights: ["Giáo viên 8.0+ IELTS", "Cam kết đầu ra 6.5+", "Luyện đề thực chiến", "Chữa bài 1-1 chi tiết"],
      color: "from-indigo-500 to-blue-500",
      badge: "Cam kết đầu ra",
    },
  ],
  adults: [
    {
      title: "Giao tiếp thực chiến",
      subtitle: "English for Real Life",
      age: "18+ tuổi",
      level: "All levels",
      duration: "48 buổi",
      students: "10-15 học viên",
      image: "/adults-practicing-english-conversation-in-groups.jpg",
      description: "Tự tin giao tiếp trong mọi tình huống với phương pháp học 70% thực hành, 30% lý thuyết.",
      highlights: [
        "70% thực hành hội thoại",
        "Tình huống thực tế đa dạng",
        "Lớp nhỏ 10-15 học viên",
        "Giáo viên bản ngữ",
      ],
      color: "from-teal-500 to-cyan-500",
      badge: "Thực chiến",
    },
    {
      title: "TOEIC Target",
      subtitle: "Chinh phục TOEIC",
      age: "18+ tuổi",
      level: "Intermediate",
      duration: "36 buổi",
      students: "15-20 học viên",
      image: "/young-adults-taking-toeic-practice-test.jpg",
      description: "Chiến lược thi TOEIC hiệu quả, tập trung vào kỹ thuật làm bài và tăng điểm nhanh.",
      highlights: ["Cam kết 750+ TOEIC", "Kỹ thuật làm bài độc quyền", "1000+ câu hỏi thực chiến", "Thi thử hàng tuần"],
      color: "from-cyan-500 to-blue-500",
      badge: "Tăng điểm nhanh",
    },
  ],
  business: [
    {
      title: "Business English Pro",
      subtitle: "Tiếng Anh Doanh nghiệp",
      age: "Doanh nghiệp",
      level: "Intermediate+",
      duration: "Linh hoạt",
      students: "5-10 học viên/nhóm",
      image: "/business-professionals-learning-english-in-office.jpg",
      description: "Giải pháp đào tạo tiếng Anh chuyên biệt cho doanh nghiệp, tùy chỉnh theo nhu cầu thực tế.",
      highlights: ["Nội dung tùy chỉnh", "Đào tạo tại doanh nghiệp", "Thời gian linh hoạt", "Báo cáo tiến độ định kỳ"],
      color: "from-orange-500 to-amber-500",
      badge: "Doanh nghiệp",
    },
    {
      title: "1-on-1 Premium",
      subtitle: "Kèm riêng cao cấp",
      age: "Mọi lứa tuổi",
      level: "All levels",
      duration: "Linh hoạt",
      students: "1 học viên",
      image: "/one-on-one-english-tutoring-session.jpg",
      description: "Học 1 kèm 1 với giáo viên, lộ trình 100% cá nhân hóa theo mục tiêu và thời gian của bạn.",
      highlights: ["100% cá nhân hóa", "Lịch học linh hoạt", "Chọn giáo viên phù hợp", "Tiến độ nhanh gấp 3 lần"],
      color: "from-yellow-500 to-orange-500",
      badge: "VIP",
    },
  ],
}

const coursesList = [
  {
    title: "Tiếng Anh Mẫu Giáo (Từ 4-6 Tuổi)",
    slug: "/khoa-hoc/mau-giao",
  },
  {
    title: "Tiếng Anh Thiếu Nhi (6-11 Tuổi)",
    slug: "/khoa-hoc/thieu-nien",
  },
  {
    title: "Tiếng Anh Thiếu Niên (11-15 Tuổi)",
    slug: "/khoa-hoc/thieu-nien",
  },
  {
    title: "Tiếng Anh Người Lớn",
    slug: "/khoa-hoc/nguoi-lon",
  },
  {
    title: "Tiếng Anh Giao Tiếp",
    slug: "/khoa-hoc/giao-tiep",
  },
  {
    title: "Luyện Thi IELTS",
    slug: "/khoa-hoc/ielts",
  },
  {
    title: "Luyện Thi TOEIC",
    slug: "/khoa-hoc/toeic",
  },
  {
    title: "Tiếng Anh Doanh Nghiệp",
    slug: "/khoa-hoc/doanh-nghiep",
  },
  {
    title: "Du Học Định Cư",
    slug: "/khoa-hoc/du-hoc",
  },
]

function CourseCard({ course, index }: { course: any; index: number }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <Card
      ref={ref}
      className={`group overflow-hidden border-0 shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
        isIntersecting ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60 transition-opacity group-hover:opacity-40`}
        />

        {course.badge && (
          <Badge className="absolute right-4 top-4 bg-white/90 text-primary shadow-lg backdrop-blur">
            <Star className="mr-1 h-3 w-3" />
            {course.badge}
          </Badge>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <h3 className="mb-1 text-2xl font-bold">{course.title}</h3>
          <p className="text-sm opacity-90">{course.subtitle}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Target className="h-4 w-4 text-primary" />
            <span className="font-medium">{course.age}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Award className="h-4 w-4 text-primary" />
            <span className="font-medium">{course.level}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-primary" />
            <span>{course.students}</span>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{course.description}</p>

        <div className="space-y-2 border-t pt-4">
          <h4 className="flex items-center gap-2 text-sm font-semibold">
            <BookOpen className="h-4 w-4 text-primary" />
            Điểm nổi bật
          </h4>
          {course.highlights.map((highlight: string, idx: number) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>

        <Button className="mt-6 w-full shadow-lg transition-all hover:scale-105" size="lg" asChild>
          <Link href="/lien-he">
            Đăng ký học thử miễn phí
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function CoursesShowcase() {
  const [activeMainTab, setActiveMainTab] = useState("courses")
  const [activeTab, setActiveTab] = useState("kids")
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-teal-200/20 blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Main tab navigation for Tin tức, Khóa học, Tuyển dụng */}
        <div className="mb-12 flex justify-center gap-4">
          <Link
            href="/tin-tuc"
            className="rounded-full border-2 border-transparent px-6 py-2 font-semibold text-slate-800 transition-all hover:text-orange-500"
          >
            Tin tức
          </Link>
          <button
            className="rounded-full border-2 border-orange-500 bg-white px-6 py-2 font-semibold text-orange-500"
            onClick={() => setActiveMainTab("courses")}
          >
            Khóa học
          </button>
          <Link
            href="/tuyen-dung"
            className="rounded-full border-2 border-transparent px-6 py-2 font-semibold text-slate-800 transition-all hover:text-orange-500"
          >
            Tuyển dụng
          </Link>
        </div>

        {/* Header */}
        <div
          ref={headerRef}
          className={`mx-auto mb-12 max-w-4xl text-center transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Badge className="mb-4 bg-primary/10 px-4 py-2 text-primary">
            <Globe className="mr-2 h-4 w-4" />
            Hệ thống khóa học đa dạng
          </Badge>
          <h1 className="mb-4 text-balance text-4xl font-bold md:text-6xl">
            Khóa học phù hợp
            <span className="bg-gradient-to-r from-orange-500 to-teal-500 bg-clip-text text-transparent">
              {" "}
              cho mọi lứa tuổi
            </span>
          </h1>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl">
            Từ trẻ em đến người lớn, từ giao tiếp cơ bản đến chứng chỉ quốc tế - GNP có giải pháp học tập phù hợp với
            mục tiêu của bạn
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3 mb-16">
          {coursesList.map((course, index) => (
            <Link
              key={index}
              href={course.slug}
              className="group block rounded-lg border-2 border-gray-200 bg-white p-4 transition-all hover:-translate-y-1 hover:border-orange-500 hover:shadow-md md:p-5"
            >
              <h3 className="text-base font-semibold text-slate-800 transition-colors group-hover:text-orange-500 md:text-lg">
                {course.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Tabs Navigation - Advanced view for desktop */}
        <div className="hidden lg:block">
          <h2 className="mb-8 text-center text-3xl font-bold">Chi tiết khóa học</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mx-auto mb-12 grid h-auto w-full max-w-3xl grid-cols-4 gap-4 bg-transparent">
              {courseCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="group relative rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-md transition-all data-[state=active]:border-orange-500 data-[state=active]:bg-white data-[state=active]:text-orange-500 data-[state=active]:shadow-lg hover:border-orange-500"
                >
                  <category.icon className="mx-auto mb-2 h-8 w-8 text-slate-600 transition-colors group-data-[state=active]:text-orange-500" />
                  <div className="text-sm font-semibold text-slate-700 transition-colors group-data-[state=active]:text-orange-500">
                    {category.label}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content */}
            {Object.entries(coursesData).map(([key, courses]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2">
                  {courses.map((course, index) => (
                    <CourseCard key={index} course={course} index={index} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mb-12 block md:hidden">
          <CoursesAccordion />
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-orange-500 to-teal-500 p-8 text-center text-white shadow-2xl md:p-12">
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">Chưa biết khóa học nào phù hợp?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90">
            Để lại thông tin hoặc tham gia bài kiểm tra trình độ miễn phí, chúng tôi sẽ tư vấn chương trình học phù hợp
            nhất cho bạn
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="shadow-xl transition-transform hover:scale-105">
              <Target className="mr-2 h-5 w-5" />
              Kiểm tra trình độ miễn phí
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white bg-white/10 text-white backdrop-blur hover:bg-white hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Tư vấn 1-1 với chuyên gia
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
