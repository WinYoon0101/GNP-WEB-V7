"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X, Download, Eye } from "lucide-react"
import Image from "next/image"

interface UploadedFile {
  id: string
  name: string
  type: string
  url: string
  uploadDate: string
}

export function CertificateUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "IELTS Certificate - Nguyen Van A.pdf",
      type: "pdf",
      url: "/sample-certificate.pdf",
      uploadDate: "2024-01-15",
    },
    {
      id: "2",
      name: "Cambridge Certificate.jpg",
      type: "image",
      url: "/happy-student-with-certificate.jpg",
      uploadDate: "2024-01-10",
    },
  ])

  const [previewFile, setPreviewFile] = useState<UploadedFile | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type.includes("image") ? "image" : file.type.includes("pdf") ? "pdf" : "other",
      url: URL.createObjectURL(file),
      uploadDate: new Date().toISOString().split("T")[0],
    }))

    setUploadedFiles((prev) => [...newFiles, ...prev])
  }

  const handleDelete = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const handlePreview = (file: UploadedFile) => {
    setPreviewFile(file)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-indigo-600">TẢI LÊN CHỨNG CHỈ</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Chia sẻ thành tích của bạn! Tải lên chứng chỉ tiếng Anh hoặc văn bằng để ghi nhận kết quả học tập
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 mb-8 border-2 border-dashed border-indigo-300 hover:border-indigo-500 transition-all">
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer py-8">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <Upload className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tải lên tệp tin</h3>
              <p className="text-gray-600 mb-4">Chọn hình ảnh hoặc file PDF (tối đa 10MB)</p>
              <Button type="button" className="bg-gradient-to-r from-indigo-600 to-purple-600">
                Chọn tệp
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </Card>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Chứng chỉ đã tải lên</h3>
            {uploadedFiles.length === 0 ? (
              <Card className="p-12 text-center">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Chưa có chứng chỉ nào được tải lên</p>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedFiles.map((file) => (
                  <Card key={file.id} className="p-4 hover:shadow-xl transition-all group">
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      {file.type === "image" ? (
                        <Image src={file.url || "/placeholder.svg"} alt={file.name} fill className="object-cover" />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <FileText className="h-20 w-20 text-red-500" />
                        </div>
                      )}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleDelete(file.id)}
                          className="bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 truncate" title={file.name}>
                      {file.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">{file.uploadDate}</p>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => handlePreview(file)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Xem
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                        <a href={file.url} download={file.name}>
                          <Download className="h-4 w-4 mr-1" />
                          Tải
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {previewFile && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewFile(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-bold text-lg">{previewFile.name}</h3>
                <button
                  onClick={() => setPreviewFile(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
                {previewFile.type === "image" ? (
                  <div className="relative w-full h-[600px]">
                    <Image
                      src={previewFile.url || "/placeholder.svg"}
                      alt={previewFile.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <iframe src={previewFile.url} className="w-full h-[600px]" title={previewFile.name} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
