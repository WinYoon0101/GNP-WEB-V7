'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Loader2, Upload, X } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const supabase = createClient()

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `thumb-${Date.now()}.${fileExt}`
    const filePath = `thumbnails/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file)

    if (uploadError) {
      alert('Lỗi upload: ' + uploadError.message)
    } else {
      const { data } = supabase.storage.from('images').getPublicUrl(filePath)
      onChange(data.publicUrl) 
    }
    setIsUploading(false)
  }

  return (
    <div className="space-y-2">
      {value ? (
        <div className="relative aspect-video w-full rounded-lg overflow-hidden border">
          <Image src={value} alt="Thumbnail" fill className="object-cover" />
          <button 
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            {isUploading ? <Loader2 className="animate-spin text-orange-500" /> : <Upload className="text-slate-400" />}
            <p className="text-xs text-slate-500 mt-2">Chọn ảnh đại diện</p>
          </div>
          <input type="file" className="hidden" accept="image/*" onChange={handleUpload} disabled={isUploading} />
        </label>
      )}
    </div>
  )
}