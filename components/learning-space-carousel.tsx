"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const learningSpaces = [
  {
    title: "Phòng học hiện đại",
    image: "/modern-english-classroom-with-students.jpg",
    description: "Trang bị thiết bị học tập tiên tiến",
  },
  {
    title: "Lớp học trẻ em",
    image: "/happy-children-learning-english-in-colorful-classr.jpg",
    description: "Không gian vui vẻ, thân thiện",
  },
  {
    title: "Giáo viên tận tâm",
    image: "/english-teacher-teaching-in-modern-classroom.jpg",
    description: "Đội ngũ giảng dạy chuyên nghiệp",
  },
  {
    title: "Lớp học nhóm",
    image: "/adults-practicing-english-conversation-in-groups.jpg",
    description: "Học tập tương tác, hiệu quả",
  },
  {
    title: "Học 1-1",
    image: "/one-on-one-english-tutoring-session.jpg",
    description: "Chương trình cá nhân hóa",
  },
]

export function LearningSpaceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % learningSpaces.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % learningSpaces.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + learningSpaces.length) % learningSpaces.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-600">KHÔNG GIAN HỌC TẬP</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Môi trường học tập hiện đại, chuyên nghiệp và thân thiện tại GNP English Academy
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg h-10 w-10 md:h-12 md:w-12"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {learningSpaces.map((space, index) => (
                <div key={index} className="flex-shrink-0 w-full relative">
                  <div className="relative h-64 md:h-80 lg:h-[500px]">
                    <Image src={space.image || "/placeholder.svg"} alt={space.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">{space.title}</h3>
                      <p className="text-sm md:text-lg lg:text-xl opacity-90">{space.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur hover:bg-white shadow-lg h-10 w-10 md:h-12 md:w-12"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {learningSpaces.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-indigo-600" : "w-2 bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
