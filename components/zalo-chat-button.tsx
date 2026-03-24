"use client"

import { MessageCircle } from "lucide-react"

export function ZaloChatButton() {
  const handleClick = () => {
    // Replace with your actual Zalo contact link
    window.open("https://zalo.me/YOUR_ZALO_NUMBER", "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Chat qua Zalo"
    >
      <div className="relative">
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat với chúng tôi qua Zalo
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  )
}
