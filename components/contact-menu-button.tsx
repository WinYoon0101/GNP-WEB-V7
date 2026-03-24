"use client"

import { useState } from "react"
import { MessageCircle, MessagesSquare, X, Phone, MapPin } from "lucide-react"

export function ContactMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      icon: <MessagesSquare className="h-6 w-6 text-blue-600" />,
      label: "Messenger",
      action: () => window.open("https://www.facebook.com/gnpngoaingutinhoc?locale=vi_VN", "_blank"),
    },
    {
      icon: (
        <div className="h-6 w-6 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="#0068FF"
            />
            <path
              d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
              fill="#0068FF"
            />
          </svg>
        </div>
      ),
      label: "Zalo Chat",
      action: () => window.open("https://zalo.me/0968322382", "_blank"),
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      label: "Call 0286.286.2934",
      action: () => (window.location.href = "tel:02862862934"),
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      label: "Call 0286.286.2931",
      action: () => (window.location.href = "tel:02862862931"),
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-700" />,
      label: "Chỉ đường",
      action: () => window.open("https://maps.app.goo.gl/MXr4D2g4uVkbvmaq8", "_blank"),
    },
  ]

  return (
    <>
      {/* Contact Menu Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl w-64 animate-slide-up">
          <div className="p-4 space-y-2">
            {contactOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  option.action()
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 text-left group"
              >
                <div className="flex-shrink-0">{option.icon}</div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900">{option.label}</span>
              </button>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
            aria-label="Đóng menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Main Contact Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 group"
    aria-label="Liên hệ"
  >
        <div className="relative">
          <MessageCircle className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Liên hệ với chúng tôi
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </>
  )
}
