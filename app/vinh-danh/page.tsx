"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Award, Trophy, Star, Medal, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

export default function VinhDanhPage() {
  const achievements = [
    {
      year: "2024",
      title: "Top 10 Trung Tâm Anh Ngữ Uy Tín",
      description: "Được bình chọn bởi Hiệp hội Giáo dục TP.HCM",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Giải Thưởng Giáo Dục Xuất Sắc",
      description: "Chương trình giảng dạy sáng tạo và hiệu quả",
      icon: Award,
    },
    {
      year: "2023",
      title: "98% Học Viên Đạt Chứng Chỉ",
      description: "Tỷ lệ đỗ IELTS, TOEIC, Cambridge cao nhất khu vực",
      icon: Star,
    },
    {
      year: "2022",
      title: "Đối Tác Chiến Lược Cambridge",
      description: "Trung tâm đào tạo và thi chứng chỉ ủy quyền",
      icon: Medal,
    },
  ]

  const students = [
    {
      name: "Nguyễn Minh Anh",
      achievement: "IELTS 8.5",
      school: "Đại học Ngoại Thương",
      image: "/happy-student-with-certificate.jpg",
    },
    {
      name: "Trần Hoàng Long",
      achievement: "TOEIC 990/990",
      school: "Đại học Kinh Tế TP.HCM",
      image: "/male-student-success.jpg",
    },
    {
      name: "Lê Thị Hương",
      achievement: "Cambridge C2 Proficiency",
      school: "Đại học Khoa Học Xã Hội & Nhân Văn",
      image: "/female-student-happy.jpg",
    },
    {
      name: "Phạm Đức Minh",
      achievement: "IELTS 8.0",
      school: "Đại học Bách Khoa",
      image: "/engineering-student-success.jpg",
    },
    {
      name: "Võ Thị Mai",
      achievement: "IELTS 7.5",
      school: "Đại học Sư Phạm",
      image: "/happy-student-with-certificate.jpg",
    },
  ]

  function OutstandingStudentsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const isMobile = useIsMobile()

    useEffect(() => {
      if (!isAutoPlaying) return

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % students.length)
      }, 4000)

      return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % students.length)
      setIsAutoPlaying(false)
    }

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + students.length) % students.length)
      setIsAutoPlaying(false)
    }

    const getVisibleStudents = () => {
      if (isMobile) {
        return [{ ...students[currentIndex], position: "center" }]
      }

      const prevIndex = (currentIndex - 1 + students.length) % students.length
      const nextIndex = (currentIndex + 1) % students.length
      return [
        { ...students[prevIndex], position: "left" },
        { ...students[currentIndex], position: "center" },
        { ...students[nextIndex], position: "right" },
      ]
    }

    return (
      <div className="relative max-w-7xl mx-auto">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg -ml-4 h-10 w-10 md:h-12 md:w-12"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </Button>

        <div className="overflow-hidden px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 md:gap-8 transition-all duration-500 ease-in-out">
            {getVisibleStudents().map((student, index) => {
              const isCenter = student.position === "center"
              const isSide = student.position === "left" || student.position === "right"

              return (
                <div
                  key={`${student.name}-${index}`}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? "w-full md:w-[400px] scale-100 opacity-100 z-20"
                      : "w-[300px] scale-90 opacity-50 z-10 hidden md:block"
                  }`}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-indigo-100 to-teal-100">
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg z-10">
                        <Image src="/images/gnp-logo.png" alt="GNP" width={60} height={20} className="h-5 w-auto" />
                      </div>
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="p-6 md:p-8 text-center bg-gradient-to-b from-indigo-500 to-teal-600 text-white">
                      <h4 className="font-bold text-xl md:text-2xl mb-3">{student.name}</h4>
                      <div className="bg-yellow-400 text-gray-900 font-bold py-2 md:py-3 px-4 md:px-6 rounded-full inline-block text-base md:text-lg">
                        {student.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg -mr-4 h-10 w-10 md:h-12 md:w-12"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      </div>
    )
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Vinh Danh
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Những thành tựu và giải thưởng đáng tự hào của GNP English Academy
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-coral-500 font-bold text-lg mb-2">{achievement.year}</div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-indigo-600">Học Viên Xuất Sắc</h2>
              <p className="text-lg text-gray-700">Những gương mặt tiêu biểu đạt thành tích cao</p>
            </div>

            <OutstandingStudentsCarousel />

            <div className="flex justify-center gap-2 mt-8">
              {students.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-indigo-600" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
