"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.")
    setFormData({ name: "", phone: "", email: "", course: "", message: "" })
  }

  const branches = [
    {
      name: "Trụ sở chính",
      address: "33B Trần Bình Trọng, P. Bình Lợi Trung, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752921c1ad4ddd%3A0x7c1c3d3b3f5e5e5e!2s33B%20Tr%E1%BA%A7n%20B%C3%ACnh%20Tr%E1%BB%8Dng%2C%20B%C3%ACnh%20L%E1%BB%A3i%20Trung%2C%20B%C3%ACnh%20Th%E1%BA%A1nh%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Cơ sở 1",
      address: "46A Trần Bình Trọng, P. Bình Lợi Trung, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Cơ sở 2",
      address: "145 Nguyễn Văn Thương, P. Thanh Mỹ Tây, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
    {
      name: "Cơ sở 3",
      address: "134 Nơ Trang Long, P. Bình Thạnh, TP. HCM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.854!2d106.689!3d10.823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzIyLjgiTiAxMDbCsDQxJzIwLjQiRQ!5e0!3m2!1svi!2s!4v1234567890",
    },
  ]

  const [selectedBranch, setSelectedBranch] = useState(0)

  return (
    <section id="dang-ky-tu-van" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Liên hệ & Đăng ký</h2>
          <p className="text-pretty text-lg text-muted-foreground">Đăng ký tư vấn hoặc học thử miễn phí ngay hôm nay</p>
        </div>

        <div className="mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 max-w-6xl">
          {/* Contact Form */}
          <Card className="flex-1 min-w-0">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-base sm:text-xl md:text-2xl">Đăng ký tư vấn</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Điền thông tin và chúng tôi sẽ liên hệ với bạn trong 24h</CardDescription>
            </CardHeader>
            <CardContent className="p-3 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs sm:text-sm">Họ và tên *</Label>
                  <Input
                    id="name"
                    placeholder="Nhập họ và tên"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-xs sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-xs sm:text-sm">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-xs sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Nhập email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="course" className="text-xs sm:text-sm">Khóa học quan tâm</Label>
                  <Input
                    id="course"
                    placeholder="VD: IELTS, TOEIC, Giao tiếp..."
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs sm:text-sm">Lời nhắn</Label>
                  <Textarea
                    id="message"
                    placeholder="Mục tiêu học tập và thắc mắc của bạn..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-xs sm:text-sm"
                  />
                </div>
                <Button type="submit" className="w-full text-xs sm:text-sm" size="sm" >
                  Đăng ký ngay
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-2 sm:space-y-4 md:space-y-6 flex-1 min-w-0">
            <Card>
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="text-base sm:text-xl md:text-2xl">Thông tin liên hệ</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-xs sm:text-sm mb-2 sm:mb-3">Địa chỉ các chi nhánh</p>
                    <div className="space-y-1 sm:space-y-2">
                      {branches.map((branch, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedBranch(index)}
                          className={`w-full text-left p-2 sm:p-3 rounded-lg transition-all ${
                            selectedBranch === index
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-muted/80"
                          }`}
                        >
                          <p className="font-medium text-[10px] sm:text-xs">{branch.name}</p>
                          <p className="text-[8px] sm:text-[10px] mt-0.5">{branch.address}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Phone className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-medium text-xs sm:text-sm">Hotline</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">0286.286.2934 - 0286.286.2931</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-medium text-xs sm:text-sm">Email</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground break-all">info@gnpenglish.edu.vn</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Clock className="mt-0.5 sm:mt-1 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-primary" />
                  <div className="min-w-0">
                    <p className="font-medium text-xs sm:text-sm">Giờ làm việc</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-snug">
                      Thứ 2 - Thứ 7: 8:00 - 20:00<br />
                      Chủ nhật: 8:00 - 17:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>



            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted">
                  <iframe
                    src={branches[selectedBranch].mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
