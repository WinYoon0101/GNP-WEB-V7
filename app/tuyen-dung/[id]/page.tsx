"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, DollarSign, Briefcase, Building2, ChevronLeft, CheckCircle2, Upload, Send } from "lucide-react"

const jobData: Record<string, any> = {
  "giao-vien-tieng-anh": {
    title: "Giáo Viên Tiếng Anh",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
    salary: "15 - 25 triệu VNĐ",
    description:
      "Giảng dạy các lớp từ thiếu nhi đến người lớn, có kinh nghiệm từ 1 năm trở lên. Ưu tiên ứng viên có chứng chỉ TESOL/CELTA.",
    requirements: [
      "Bằng đại học chuyên ngành tiếng Anh hoặc tương đương",
      "Chứng chỉ IELTS 7.0+ hoặc TOEIC 850+",
      "Kỹ năng giao tiếp và sư phạm tốt",
      "Yêu thích giảng dạy, tận tâm với học viên",
    ],
    responsibilities: [
      "Giảng dạy các khóa học tiếng Anh cho học viên từ 6 tuổi trở lên",
      "Chuẩn bị giáo án và tài liệu giảng dạy",
      "Đánh giá và theo dõi tiến độ học tập của học viên",
      "Tham gia các hoạt động đào tạo và phát triển chuyên môn",
    ],
    benefits: [
      "Lương cạnh tranh và thưởng hiệu suất",
      "Bảo hiểm xã hội đầy đủ",
      "Đào tạo nghiệp vụ miễn phí",
      "Team building và du lịch hàng năm",
      "Môi trường làm việc chuyên nghiệp, thân thiện",
    ],
  },
  "giao-vien-ielts-toeic": {
    title: "Giáo Viên IELTS/TOEIC",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
    salary: "20 - 35 triệu VNĐ",
    description:
      "Chuyên giảng dạy các khóa luyện thi IELTS/TOEIC, có kinh nghiệm và đạt điểm số cao trong các kỳ thi quốc tế.",
    requirements: [
      "IELTS 8.0+ hoặc TOEIC 950+",
      "Kinh nghiệm giảng dạy IELTS/TOEIC ít nhất 2 năm",
      "Hiểu rõ cấu trúc đề thi và phương pháp giảng dạy hiệu quả",
      "Có khả năng truyền cảm hứng cho học viên",
    ],
    responsibilities: [
      "Giảng dạy các khóa luyện thi IELTS/TOEIC",
      "Phát triển tài liệu và bài kiểm tra mô phỏng",
      "Tư vấn chiến lược ôn thi cho học viên",
      "Theo dõi và báo cáo tiến độ học tập",
    ],
    benefits: [
      "Lương cao và thưởng theo kết quả học viên",
      "Bảo hiểm đầy đủ",
      "Cơ hội thăng tiến rõ ràng",
      "Môi trường làm việc chuyên nghiệp",
      "Hỗ trợ tài liệu giảng dạy",
    ],
  },
  "tro-giang-tieng-anh": {
    title: "Trợ Giảng Tiếng Anh",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Part-time",
    salary: "8 - 12 triệu VNĐ",
    description:
      "Hỗ trợ giáo viên trong quá trình giảng dạy, chấm bài, tư vấn học viên. Phù hợp cho sinh viên năm cuối hoặc mới tốt nghiệp.",
    requirements: [
      "Sinh viên năm 3, 4 hoặc mới tốt nghiệp chuyên ngành tiếng Anh",
      "IELTS 6.5+ hoặc TOEIC 750+",
      "Nhiệt tình, trách nhiệm, ham học hỏi",
      "Có thể làm việc linh hoạt theo lịch",
    ],
    responsibilities: [
      "Hỗ trợ giáo viên trong giờ học",
      "Chấm bài tập và kiểm tra",
      "Tư vấn học tập cho học viên",
      "Chuẩn bị tài liệu và thiết bị dạy học",
    ],
    benefits: [
      "Thu nhập ổn định theo giờ",
      "Lịch làm việc linh hoạt",
      "Học hỏi kinh nghiệm giảng dạy",
      "Cơ hội trở thành giáo viên chính thức",
    ],
  },
  "nhan-vien-tu-van": {
    title: "Nhân Viên Tư Vấn Tuyển Sinh",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
    salary: "10 - 20 triệu VNĐ + Hoa hồng",
    description:
      "Tư vấn khóa học cho học viên, chăm sóc khách hàng, đạt chỉ tiêu tuyển sinh. Hoa hồng hấp dẫn theo doanh số.",
    requirements: [
      "Kỹ năng giao tiếp và thuyết phục tốt",
      "Tiếng Anh giao tiếp cơ bản",
      "Nhiệt tình, năng động, chịu được áp lực công việc",
      "Kinh nghiệm tư vấn, bán hàng là lợi thế",
    ],
    responsibilities: [
      "Tư vấn khóa học phù hợp cho học viên",
      "Chăm sóc và duy trì quan hệ với khách hàng",
      "Đạt chỉ tiêu tuyển sinh hàng tháng",
      "Tham gia các hoạt động marketing và sự kiện",
    ],
    benefits: [
      "Lương cơ bản + Hoa hồng hấp dẫn",
      "Thưởng đạt KPI",
      "Bảo hiểm xã hội",
      "Đào tạo kỹ năng bán hàng",
      "Cơ hội thăng tiến lên trưởng nhóm",
    ],
  },
}

import { use } from "react"

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params)
  const job = jobData[unwrappedParams.id]
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    cvFile: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
    alert("Cảm ơn bạn đã ứng tuyển! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
    setFormData({ name: "", phone: "", email: "", message: "", cvFile: null })
    setIsApplicationOpen(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, cvFile: e.target.files[0] })
    }
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy vị trí tuyển dụng</h1>
          <Link href="/tuyen-dung">
            <Button>Quay lại danh sách</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/tuyen-dung"
            className="inline-flex items-center gap-2 text-orange-600 mb-6"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Quay lại danh sách</span>
          </Link>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/gnp-logo.png"
                  alt="GNP"
                  width={70}
                  height={70}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{job.title}</h1>
                <p className="text-lg text-gray-600 flex items-center gap-2 mb-4">
                  <Building2 className="h-5 w-5" />
                  {job.company}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-coral-500" />
                    <span className="font-semibold text-coral-500">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full md:w-auto bg-[#F2701A]  hover:bg-[#FD9800] shadow-lg"
              onClick={() => setIsApplicationOpen(true)}
            >
              <Briefcase className="h-5 w-5 mr-2" />
              Ứng Tuyển Ngay
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mô tả công việc</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Yêu cầu</h2>
            <ul className="space-y-3">
              {job.requirements.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trách nhiệm công việc</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quyền lợi</h2>
            <ul className="space-y-3">
              {job.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center bg-indigo-50/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Bạn Đã Sẵn Sàng Gia Nhập GNP?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Gửi thông tin ứng tuyển của bạn cho vị trí này. Chúng tôi luôn tìm kiếm những thành viên nhiệt huyết để phát triển cùng GNP English Academy.
            </p>
            <Button
              size="lg"
              className="bg-[#F2701A] shadow-xl shadow-indigo-100 px-10 h-14 text-lg transform transition hover:-translate-y-1"
              onClick={() => setIsApplicationOpen(true)}
            >
              <Send className="h-5 w-5 mr-2" />
              Gửi thông tin CV ngay
            </Button>
          </div>
        </div>
      </main>      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="sm:max-w-[550px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Ứng tuyển: {job.title}</DialogTitle>
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
    </div >
  )
}
