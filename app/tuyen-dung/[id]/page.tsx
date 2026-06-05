// app/tuyen-dung/[id]/page.tsx
import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MapPin, Clock, DollarSign, Briefcase, Building2, ChevronLeft, CheckCircle2, Send } from "lucide-react"

// 1. DỮ LIỆU TĨNH
const jobData: Record<string, any> = {
  "giao-vien-tieng-anh": {
    title: "Giáo Viên Tiếng Anh",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
    salary: "15 - 25 triệu VNĐ",
    description: "Giảng dạy các lớp từ thiếu nhi đến người lớn, có kinh nghiệm từ 1 năm trở lên. Ưu tiên ứng viên có chứng chỉ TESOL/CELTA.",
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
    applyLink: "mailto:tuyendung@gnp.edu.vn?subject=Ứng tuyển Giáo Viên Tiếng Anh", // Đổi thành link Google Form nếu muốn
  },
  "giao-vien-ielts-toeic": {
    title: "Giáo Viên IELTS/TOEIC",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
    salary: "20 - 35 triệu VNĐ",
    description: "Chuyên giảng dạy các khóa luyện thi IELTS/TOEIC, có kinh nghiệm và đạt điểm số cao trong các kỳ thi quốc tế.",
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
    applyLink: "mailto:tuyendung@gnp.edu.vn?subject=Ứng tuyển Giáo Viên IELTS/TOEIC",
  },
  "tro-giang-tieng-anh": {
    title: "Trợ Giảng Tiếng Anh",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Part-time",
    salary: "8 - 12 triệu VNĐ",
    description: "Hỗ trợ giáo viên trong quá trình giảng dạy, chấm bài, tư vấn học viên. Phù hợp cho sinh viên năm cuối hoặc mới tốt nghiệp.",
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
    applyLink: "mailto:tuyendung@gnp.edu.vn?subject=Ứng tuyển Trợ Giảng Tiếng Anh",
  },
  "nhan-vien-tu-van": {
    title: "Nhân Viên Tư Vấn Tuyển Sinh",
    company: "GNP English Academy",
    location: "TP. Hồ Chí Minh",
    type: "Full-time",
    salary: "10 - 20 triệu VNĐ + Hoa hồng",
    description: "Tư vấn khóa học cho học viên, chăm sóc khách hàng, đạt chỉ tiêu tuyển sinh. Hoa hồng hấp dẫn theo doanh số.",
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
    applyLink: "mailto:tuyendung@gnp.edu.vn?subject=Ứng tuyển Nhân Viên Tư Vấn Tuyển Sinh",
  },
}

// 2. KHAI BÁO CÁC ĐƯỜNG DẪN STATIC ĐỂ BUILD LỖI XUẤT FILE TĨNH
export async function generateStaticParams() {
  return Object.keys(jobData).map((id) => ({
    id: id,
  }))
}

export const dynamicParams = false

// 3. COMPONENT CHÍNH (Server Component)
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = await params
  const job = jobData[unwrappedParams.id]

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/tuyen-dung"
            className="inline-flex items-center gap-2 text-[#F2701A] hover:text-[#e06010] transition-colors mb-6 font-medium"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Quay lại danh sách</span>
          </Link>

          {/* Header Job */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-20 h-20 bg-indigo-50/50 rounded-xl flex items-center justify-center border border-indigo-100">
                <Image
                  src="/images/gnp-logo.png"
                  alt="GNP"
                  width={70}
                  height={70}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{job.title}</h1>
                <p className="text-lg text-gray-600 flex items-center gap-2 mb-5 font-medium">
                  <Building2 className="h-5 w-5 text-indigo-500" />
                  {job.company}
                </p>
                <div className="flex flex-wrap gap-y-3 gap-x-6 text-gray-600">
                  <div className="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full">
                    <DollarSign className="h-5 w-5 text-[#F2701A]" />
                    <span className="font-semibold text-[#F2701A]">{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="font-medium">{job.type}</span>
                  </div>
                </div>
              </div>
            </div>
     
            <a 
              href={job.applyLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-[#F2701A] hover:bg-[#e06010] text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              <Briefcase className="h-5 w-5 mr-2" />
              Ứng Tuyển Ngay
            </a>
          </div>

          {/* Mô tả */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Mô tả công việc</h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Yêu cầu */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Yêu cầu</h2>
            <ul className="space-y-4">
              {job.requirements.map((req: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trách nhiệm */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Trách nhiệm công việc</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((resp: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quyền lợi */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Quyền lợi</h2>
            <ul className="space-y-4">
              {job.benefits.map((benefit: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center bg-indigo-50/30 rounded-2xl p-8 md:p-12 border border-indigo-50">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Bạn Đã Sẵn Sàng Gia Nhập GNP?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Gửi thông tin ứng tuyển của bạn cho vị trí này. Chúng tôi luôn tìm kiếm những thành viên nhiệt huyết để phát triển cùng GNP English Academy.
            </p>
            <a
              href={job.applyLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#F2701A] hover:bg-[#e06010] text-white px-10 h-14 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Send className="h-5 w-5 mr-2" />
              Gửi CV Ứng Tuyển
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}