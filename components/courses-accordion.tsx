"use client"

import { useState } from "react"
import { ChevronDown, BookOpen } from "lucide-react"

const courseItems = [
  "Tiếng Anh Mẫu Giáo (Từ 4–6 Tuổi)",
  "Tiếng Anh Thiếu Nhi (6–11 Tuổi)",
  "Tiếng Anh Thiếu Niên (11–15 Tuổi)",
  "Tiếng Anh Người Lớn",
  "Tiếng Anh Giao Tiếp",
  "Luyện Thi IELTS",
  "Luyện Thi TOEIC",
  "Tiếng Anh Doanh Nghiệp",
  "Du Học Định Cư",
]

export function CoursesAccordion() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-full bg-orange-100 px-6 py-4 text-left transition-all duration-300 hover:bg-orange-200 active:scale-95"
        aria-expanded={isOpen}
        aria-controls="courses-list"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-900 p-2">
            <BookOpen className="h-5 w-5 text-orange-500" />
          </div>
          <span className="text-base font-semibold text-blue-900 md:text-lg">KHÓA HỌC TIẾNG ANH</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-blue-900 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id="courses-list"
        className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="space-y-1 bg-white p-2 md:p-3">
          {courseItems.map((course, index) => (
            <div
              key={index}
              className={`transform transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 30}ms` : "0ms" }}
            >
              <a
                href="#"
                className="block rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-blue-900 transition-all duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 md:px-5 md:py-4 md:text-base"
              >
                {course}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
