"use client"

import React from "react"

interface CourseLayoutWrapperProps {
  children: React.ReactNode
}

export function CourseLayoutWrapper({ children }: CourseLayoutWrapperProps) {
  return (
    <div className="space-y-6">
      {children}
    </div>
  )
}

interface CourseContentSectionProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function CourseContentSection({ title, children, className = "" }: CourseContentSectionProps) {
  return (
    <div className={`bg-white rounded-2xl p-8 ${className}`}>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
