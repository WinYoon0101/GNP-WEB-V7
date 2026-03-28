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
import { MapPin, Clock, DollarSign, Users, Heart, TrendingUp, GraduationCapIcon as GraduateCapIcon, Building2, AlertCircle, Upload, Briefcase, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { teamMembers } from "@/lib/constants"

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
  const [randomTeachers, setRandomTeachers] = useState<typeof teamMembers>([])

  useEffect(() => {
    // Pick 4 random members
    const shuffled = [...teamMembers].sort(() => 0.5 - Math.random())
    setRandomTeachers(shuffled.slice(0, 4))
  }, [])

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
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <GraduateCapIcon className="h-24 w-24 mx-auto mb-8 text-primary animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Tuyển Dụng</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-slate-300 font-medium font-serif italic">
              "Gia nhập đội ngũ GNP English Academy - Nơi tài năng được tôn vinh và phát triển"
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-orange-600 text-white font-black px-12 py-8 text-xl shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105 rounded-2xl"
              onClick={(e) => openApplicationForm(e, "GNP English Academy")}
            >
              Ứng Tuyển Ngay
            </Button>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-slate-900 uppercase tracking-tight">
              Tại Sao Chọn <span className="text-primary">GNP?</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
                >
                  <div className="bg-primary shadow-lg shadow-primary/20 rounded-2xl sm:rounded-[2rem] w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-7 w-7 sm:h-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="font-black text-sm sm:text-xl mb-2 sm:mb-3 text-slate-900 uppercase tracking-wide">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-base">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4 flex items-center justify-center md:justify-start gap-4">
                  <div className="w-3 h-12 bg-primary rounded-full hidden md:block" />
                  VỊ TRÍ TUYỂN DỤNG
                </h2>
                <p className="text-slate-500 text-lg font-medium">Khám phá cơ hội nghề nghiệp và đồng hành cùng sứ mệnh giáo dục tại GNP.</p>
              </div>
              
              <div className="bg-slate-50 px-8 py-4 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
                <div className="flex -space-x-4">
                  {(randomTeachers.length > 0 ? randomTeachers : teamMembers.slice(0, 4)).map((teacher, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
                      <Image src={teacher.image} alt={teacher.name} width={48} height={48} className="object-cover w-full h-full" title={teacher.name} />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">+100 Đồng nghiệp</p>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Đang chờ đón bạn</p>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid gap-10">
              {positions.map((position, index) => (
                <Card
                  key={position.id}
                  className="p-10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border-none bg-slate-50 hover:bg-white group relative overflow-hidden rounded-[2.5rem]"
                >
                  <Link href={`/tuyen-dung/${position.id}`} className="absolute inset-0 z-0" aria-label={`Xem chi tiết ${position.title}`} />
                  
                  <div className="flex flex-col lg:flex-row items-start gap-8 relative z-10 pointer-events-none">
                    <div className="flex-1 flex flex-col md:flex-row items-start gap-6 w-full">
                      <div className="flex-shrink-0 w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 group-hover:border-primary/20 transition-colors">
                        <Image
                          src="/images/gnp-logo.png"
                          alt="GNP"
                          width={60}
                          height={60}
                          className="w-14 h-14 object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start flex-wrap gap-3 mb-3">
                          {position.urgent && (
                            <div className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5 shadow-lg shadow-primary/20">
                              <AlertCircle className="h-3 w-3" />
                              <span>Urgent</span>
                            </div>
                          )}
                          <h3 className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors uppercase tracking-tight">
                            {position.title}
                          </h3>
                        </div>

                        <p className="text-slate-500 text-base mb-6 flex items-center gap-2 font-medium">
                          <Building2 className="h-5 w-5 text-primary" />
                          {position.company}
                        </p>

                        <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                              <DollarSign className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-bold text-slate-900">{position.salary}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                              <MapPin className="h-4 w-4 text-slate-600" />
                            </div>
                            <span className="font-medium">{position.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                              <Clock className="h-4 w-4 text-slate-600" />
                            </div>
                            <span className="font-medium">Còn {position.postedDays} ngày</span>
                          </div>
                        </div>

                        <p className="text-slate-600 leading-relaxed font-medium">{position.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col items-center gap-4 w-full lg:w-auto z-10 pointer-events-auto mt-6 lg:mt-0 lg:pt-2">
                      <Button
                        size="lg"
                        className="bg-slate-900 hover:bg-primary text-white shadow-xl flex-1 lg:flex-none px-8 py-6 text-lg font-black rounded-2xl group/btn transition-all"
                        onClick={(e) => openApplicationForm(e, position.title)}
                      >
                        Ứng Tuyển
                        <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      <button className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all hover:shadow-xl">
                        <Heart className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              Sẵn Sàng Tham Gia <br /> Đội Ngũ <span className="text-primary italic">GNP?</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <div className="bg-white/5 backdrop-blur-md px-8 py-6 rounded-[2rem] border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                  <Upload className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gửi CV qua Email</p>
                  <p className="text-xl font-black group-hover:text-primary transition-colors">tuyendung@gnp.edu.vn</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md px-8 py-6 rounded-[2rem] border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-slate-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hotline Tuyển dụng</p>
                  <p className="text-xl font-black group-hover:text-primary transition-colors">0286.286.2934</p>
                </div>
              </div>
            </div>
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
