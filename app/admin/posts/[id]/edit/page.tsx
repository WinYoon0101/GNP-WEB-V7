'use client'

import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'
import { PostForm } from '@/components/PostForm'
import { Loader2 } from 'lucide-react'

export default function EditPostPage() {
  const { id } = useParams()
  const supabase = createClient()

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) throw error
      return data
    }
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  if (!post) {
    return <div>Không tìm thấy bài viết</div>
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Sửa bài viết</h1>
      </div>
      <PostForm initialData={post} isEdit={true} />
    </div>
  )
}
