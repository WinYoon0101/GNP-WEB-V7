"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle2, Star, Trophy, Users, BookOpen, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CertificatesShowcase() {
  const [activeTab, setActiveTab] = useState("cambridge")

  const certificates = {
    cambridge: {
      title: "Chứng Chỉ Cambridge",
      gradient: "from-blue-500 to-indigo-600",
      icon: Award,
      image: "/cambridge-certificate-exam.jpg",
      description:
        "Chứng chỉ Cambridge được công nhận trên toàn thế giới bởi hàng nghìn tổ chức giáo dục và nhà tuyển dụng.",
      levels: [
        {
          name: "YLE Starters",
          age: "7-8 tuổi",
          description: "Cấp độ khởi đầu, giúp trẻ làm quen với tiếng Anh cơ bản",
          color: "bg-emerald-500",
        },
        {
          name: "YLE Movers",
          age: "8-9 tuổi",
          description: "Phát triển kỹ năng giao tiếp và từ vựng",
          color: "bg-teal-500",
        },
        {
          name: "YLE Flyers",
          age: "9-10 tuổi",
          description: "Hoàn thành cấp độ tiền A1, sẵn sàng cho KET",
          color: "bg-cyan-500",
        },
        {
          name: "KET (A2)",
          age: "10-12 tuổi",
          description: "Chứng chỉ quốc tế đầu tiên, giao tiếp cơ bản",
          color: "bg-blue-500",
        },
        {
          name: "PET (B1)",
          age: "12-14 tuổi",
          description: "Trung cấp, sử dụng tiếng Anh hàng ngày",
          color: "bg-indigo-500",
        },
        {
          name: "FCE (B2)",
          age: "14-16 tuổi",
          description: "Trung cấp cao, làm việc và học tập bằng tiếng Anh",
          color: "bg-purple-500",
        },
      ],
      benefits: [
        "Được công nhận bởi hơn 25,000 tổ chức trên toàn cầu",
        "Không có thời hạn hết hạn",
        "Phù hợp với tất cả lứa tuổi và trình độ",
        "Đánh giá toàn diện 4 kỹ năng: Nghe, Nói, Đọc, Viết",
      ],
    },
    ielts: {
      title: "Chứng Chỉ IELTS",
      gradient: "from-red-500 to-orange-600",
      icon: Globe,
      image: "/ielts-test-preparation.jpg",
      description: "IELTS là chứng chỉ tiếng Anh được chấp nhận rộng rãi nhất để du học, định cư và làm việc.",
      levels: [
        {
          name: "IELTS 4.0-5.0",
          age: "13+ tuổi",
          description: "Cơ bản, giao tiếp đơn giản",
          color: "bg-orange-400",
        },
        {
          name: "IELTS 5.5-6.0",
          age: "14+ tuổi",
          description: "Trung cấp, du học dự bị",
          color: "bg-orange-500",
        },
        {
          name: "IELTS 6.5-7.0",
          age: "15+ tuổi",
          description: "Khá, du học đại học",
          color: "bg-red-500",
        },
        {
          name: "IELTS 7.5+",
          age: "16+ tuổi",
          description: "Giỏi, du học thạc sĩ, định cư",
          color: "bg-red-600",
        },
      ],
      benefits: [
        "Được công nhận bởi hơn 11,000 tổ chức trên 140 quốc gia",
        "Điều kiện du học Úc, Anh, Canada, New Zealand",
        "Yêu cầu xin định cư nhiều quốc gia",
        "Đánh giá năng lực tiếng Anh học thuật và thực tế",
      ],
    },
    toeic: {
      title: "Chứng Chỉ TOEIC",
      gradient: "from-green-500 to-emerald-600",
      icon: Users,
      image: "/business-english-toeic.jpg",
      description: "TOEIC đánh giá khả năng sử dụng tiếng Anh trong môi trường công việc quốc tế.",
      levels: [
        {
          name: "TOEIC 400-600",
          age: "16+ tuổi",
          description: "Cơ bản, giao tiếp công sở đơn giản",
          color: "bg-lime-500",
        },
        {
          name: "TOEIC 605-780",
          age: "17+ tuổi",
          description: "Trung cấp, làm việc môi trường quốc tế",
          color: "bg-green-500",
        },
        {
          name: "TOEIC 785-900",
          age: "18+ tuổi",
          description: "Khá, vị trí quản lý",
          color: "bg-emerald-500",
        },
        {
          name: "TOEIC 905+",
          age: "18+ tuổi",
          description: "Xuất sắc, giao tiếp chuyên nghiệp",
          color: "bg-emerald-600",
        },
      ],
      benefits: [
        "Chuẩn đánh giá tiếng Anh phổ biến nhất trong doanh nghiệp",
        "Được sử dụng bởi hơn 14,000 công ty trên toàn cầu",
        "Tăng cơ hội thăng tiến trong công việc",
        "Tiêu chuẩn tuyển dụng và đào tạo tại Việt Nam",
      ],
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Trophy className="h-5 w-5" />
            <span className="font-bold">CHỨNG CHỈ QUỐC TẾ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hệ Thống Chứng Chỉ Tiếng Anh Quốc Tế
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            GNP English Academy cung cấp lộ trình đào tạo toàn diện để đạt các chứng chỉ tiếng Anh quốc tế uy tín nhất
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto p-2 bg-white shadow-lg rounded-xl">
            {Object.entries(certificates).map(([key, cert]) => {
              const IconComponent = cert.icon
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-coral-500 data-[state=active]:to-teal-500 data-[state=active]:text-white rounded-lg transition-all"
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-bold text-sm md:text-base">{cert.title}</span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          {Object.entries(certificates).map(([key, cert]) => {
            const IconComponent = cert.icon
            return (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div
                    className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${cert.gradient}`}
                  >
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      fill
                      className="object-cover opacity-80 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <IconComponent className="h-20 w-20 mx-auto mb-4 drop-shadow-lg" />
                        <h2 className="text-4xl font-bold drop-shadow-lg">{cert.title}</h2>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">Giới Thiệu</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{cert.description}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">Lợi Ích</h3>
                      <ul className="space-y-3">
                        {cert.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Các Cấp Độ</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cert.levels.map((level, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-coral-500"
                      >
                        <div
                          className={`${level.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}
                        >
                          <Star className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-gray-800">{level.name}</h4>
                        <div className="text-sm font-semibold text-coral-500 mb-3">{level.age}</div>
                        <p className="text-gray-600">{level.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Button
                    size="lg"
                    className={`bg-gradient-to-r ${cert.gradient} text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105`}
                    asChild
                  >
                    <Link href="/#dang-ky-tu-van">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Đăng ký học ngay
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
