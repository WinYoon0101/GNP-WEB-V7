"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, DollarSign, Users, Heart, TrendingUp, GraduationCapIcon as GraduateCapIcon, Building2, AlertCircle, Upload, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"

export default function TuyenDungPage() {
  const router = useRouter()
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [selectedJobTitle, setSelectedJobTitle] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    cvFile: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData, "Position:", selectedJobTitle)
    alert("Cảm ơn bạn đã ứng tuyển! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
    setFormData({ name: "", phone: "", email: "", message: "", cvFile: null })
    setIsApplicationOpen(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFile: e.target.files[0] })
    }
  }

  const openApplicationForm = (e: React.MouseEvent, title: string) => {
    e.preventDefault()
    e.stopPropagation()
    setSelectedJobTitle(title)
    setIsApplicationOpen(true)
  }
  const benefits = [
    {
      icon: DollarSign,
      title: "Lương Cạnh Tranh",
      description: "Thu nhập hấp dẫn, thưởng theo hiệu suất",
    },
    {
      icon: TrendingUp,
      title: "Phát Triển Nghề Nghiệp",
      description: "Đào tạo liên tục, cơ hội thăng tiến rõ ràng",
    },
    {
      icon: Users,
      title: "Môi Trường Năng Động",
      description: "Đội ngũ trẻ trung, sáng tạo, hỗ trợ tối đa",
    },
    {
      icon: Heart,
      title: "Phúc Lợi Toàn Diện",
      description: "BHXH, team building, du lịch hàng năm",
    },
  ]

  const positions = [
    {
      id: "giao-vien-tieng-anh",
      title: "Giáo Viên Tiếng Anh",
      company: "GNP English Academy",
      location: "TP.HCM",
      type: "Full-time",
      salary: "15 - 25 triệu",
      urgent: true,
      postedDays: 6,
      description:
        "Giảng dạy các lớp từ thiếu nhi đến người lớn, có kinh nghiệm từ 1 năm trở lên. Ưu tiên ứng viên có chứng chỉ TESOL/CELTA.",
    },
    {
      id: "giao-vien-ielts-toeic",
      title: "Giáo Viên IELTS/TOEIC",
      company: "GNP English Academy",
      location: "TP.HCM",
      type: "Full-time",
      salary: "20 - 35 triệu",
      urgent: true,
      postedDays: 5,
      description:
        "Chuyên giảng dạy các khóa luyện thi IELTS/TOEIC, có kinh nghiệm và đạt điểm số cao trong các kỳ thi quốc tế.",
    },
    {
      id: "tro-giang-tieng-anh",
      title: "Trợ Giảng Tiếng Anh",
      company: "GNP English Academy",
      location: "TP.HCM",
      type: "Part-time",
      salary: "8 - 12 triệu",
      urgent: false,
      postedDays: 6,
      description:
        "Hỗ trợ giáo viên trong quá trình giảng dạy, chấm bài, tư vấn học viên. Phù hợp cho sinh viên năm cuối hoặc mới tốt nghiệp.",
    },
    {
      id: "nhan-vien-tu-van",
      title: "Nhân Viên Tư Vấn Tuyển Sinh",
      company: "GNP English Academy",
      location: "TP.HCM",
      type: "Full-time",
      salary: "10 - 20 triệu",
      urgent: false,
      postedDays: 2,
      description:
        "Tư vấn khóa học cho học viên, chăm sóc khách hàng, đạt chỉ tiêu tuyển sinh. Hoa hồng hấp dẫn theo doanh số.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <GraduateCapIcon className="h-20 w-20 mx-auto mb-6 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Tuyển Dụng</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Gia nhập đội ngũ GNP English Academy - Nơi tài năng được tôn vinh và phát triển
            </p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={(e) => openApplicationForm(e, "GNP English Academy")}
            >
              Ứng Tuyển Ngay
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Tại Sao Chọn GNP?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">Vị Trí Tuyển Dụng</h2>
            <div className="max-w-5xl mx-auto grid gap-6">
              {positions.map((position, index) => (
                <Card
                  key={position.id}
                  className="p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up border-2 border-transparent hover:border-indigo-200 group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link href={`/tuyen-dung/${position.id}`} className="absolute inset-0 z-0 rounded-xl" aria-label={`Xem chi tiết ${position.title}`} />

                  <div className="flex flex-col md:flex-row items-start gap-4 relative z-10 pointer-events-none">
                    <div className="flex-1 flex flex-col md:flex-row items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <Image
                          src="/images/gnp-logo.png"
                          alt="GNP"
                          width={60}
                          height={60}
                          className="w-12 h-12 object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start flex-wrap gap-2 mb-2">
                          {position.urgent && (
                            <div className="flex-shrink-0 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              <span>Urgent</span>
                            </div>
                          )}
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {position.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-3 flex items-center gap-2">
                          <Building2 className="h-4 w-4 flex-shrink-0" />
                          {position.company}
                        </p>

                        <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="h-4 w-4 text-coral-500 flex-shrink-0" />
                            <span className="font-semibold text-coral-500">{position.salary}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 flex-shrink-0" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4 flex-shrink-0" />
                            <span>Còn {position.postedDays} ngày</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-2">{position.description}</p>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end gap-3 flex-shrink-0 self-start mt-4 md:mt-0 w-full md:w-auto z-10 pointer-events-auto">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md flex-1 md:flex-none"
                        onClick={(e) => openApplicationForm(e, position.title)}
                      >
                        <Briefcase className="h-4 w-4 mr-2" />
                        Ứng Tuyển
                      </Button>
                      <button
                        className="text-gray-400 hover:text-red-500 transition-colors p-2 md:p-0"
                      >
                        <Heart className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn Sàng Tham Gia Đội Ngũ GNP?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Gửi CV của bạn về email: <span className="font-bold">tuyendung@gnp.edu.vn</span>
            </p>
            <p className="text-lg">
              Hoặc liên hệ hotline: <span className="font-bold">0286.286.2934</span>
            </p>
          </div>
        </section>
      </main>

      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Ứng tuyển: {selectedJobTitle}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ và tên *</Label>
              <Input
                id="name"
                placeholder="Nhập họ và tên"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Số điện thoại *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Nhập email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cv">CV của bạn (PDF, DOC, DOCX) *</Label>
              <div className="relative">
                <Input
                  id="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="h-11 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
                {formData.cvFile && (
                  <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {formData.cvFile.name}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Giới thiệu bản thân</Label>
              <Textarea
                id="message"
                placeholder="Kinh nghiệm, kỹ năng và lý do bạn phù hợp với vị trí này..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="resize-none"
              />
            </div>
            <Button type="submit" className="w-full h-11" size="lg">
              Gửi đơn ứng tuyển
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
