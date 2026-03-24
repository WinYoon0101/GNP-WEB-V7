import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ContactMenuButton } from "@/components/contact-menu-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GNP English Academy",
  description:
    "Trung tâm đào tạo tiếng Anh toàn diện cho mọi lứa tuổi, từ giao tiếp cơ bản đến luyện thi chứng chỉ quốc tế như IELTS, TOEIC, Cambridge.",
  icons: {
    icon: [
      {
        url: "/images/gnp-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/gnp-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/gnp-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/gnp-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <ContactMenuButton />
        <Analytics />
      </body>
    </html>
  )
}
