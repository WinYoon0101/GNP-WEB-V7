'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { RichTextEditor } from '@/components/RichTextEditor'
import { ImageUpload } from '@/components/ImageUpload'
import slugify from 'slugify'
import { ArrowLeft, Save } from 'lucide-react'

type Category = {
  id: string
  name: string
}

type PostFormProps = {
  initialData?: any
  isEdit?: boolean
}

export function PostForm({ initialData, isEdit = false }: PostFormProps) {
  const router = useRouter()
  const supabase = createClient()
  
  const [title, setTitle] = useState(initialData?.title || '')
  const [slug, setSlug] = useState(initialData?.slug || '')
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '')
  const [content, setContent] = useState(initialData?.content || '')
  const [thumbnail, setThumbnail] = useState(initialData?.thumbnail || '')
  const [categoryId, setCategoryId] = useState(initialData?.category_id || '')
  const [status, setStatus] = useState(initialData?.status || 'Draft')
  const [seoTitle, setSeoTitle] = useState(initialData?.seo_title || '')
  const [seoDescription, setSeoDescription] = useState(initialData?.seo_description || '')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Auto-generate slug from title if not editing
  useEffect(() => {
    if (!isEdit && title) {
      setSlug(slugify(title, { lower: true, strict: true }))
    }
  }, [title, isEdit])

  // Fetch categories
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase.from('categories').select('id, name')
      if (error) throw error
      return data as Category[]
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const postData = {
        title,
        slug,
        excerpt,
        content,
        thumbnail,
        category_id: categoryId || null,
        status,
        seo_title: seoTitle,
        seo_description: seoDescription,
        // author_id is automatically set via Postgres RLS / auth or we can set it explicitly
      }

      if (isEdit) {
        const { error } = await supabase
          .from('posts')
          .update({ ...postData, updated_at: new Date().toISOString() })
          .eq('id', initialData.id)
        if (error) throw error
      } else {
        // Need to set author_id when creating
        const { data: { user } } = await supabase.auth.getUser()
        
        const { error } = await supabase
          .from('posts')
          .insert([{ ...postData, author_id: user?.id }])
        if (error) throw error
      }

      router.push('/admin/posts')
      router.refresh()
    } catch (error: any) {
      alert('Lỗi: ' + error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          <Save className="mr-2 h-4 w-4" /> {isSubmitting ? 'Đang lưu...' : 'Lưu bài viết'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Main content area */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Tiêu đề bài viết</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
                className="text-lg font-medium"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Đường dẫn (Slug)</Label>
              <Input 
                id="slug" 
                value={slug} 
                onChange={(e) => setSlug(e.target.value)} 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Mô tả ngắn</Label>
              <Textarea 
                id="excerpt" 
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Nội dung</Label>
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Sidebar settings */}
          <div className="p-4 border rounded-md bg-white dark:bg-gray-950 space-y-4">
            <h3 className="font-semibold text-lg">Cài đặt bài viết</h3>
            
            <div className="space-y-2">
              <Label>Trạng thái</Label>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={status === 'Published'} 
                  onCheckedChange={(checked) => setStatus(checked ? 'Published' : 'Draft')} 
                />
                <span>{status === 'Published' ? 'Đã xuất bản' : 'Bản nháp'}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Danh mục</Label>
              <Select value={categoryId} onValueChange={setCategoryId}>
                <SelectTrigger>
                  <SelectValue placeholder="Chọn danh mục" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Ảnh đại diện</Label>
              <ImageUpload value={thumbnail} onChange={setThumbnail} />
            </div>
          </div>

          <div className="p-4 border rounded-md bg-white dark:bg-gray-950 space-y-4">
            <h3 className="font-semibold text-lg">SEO</h3>
            <div className="space-y-2">
              <Label htmlFor="seoTitle">SEO Title</Label>
              <Input 
                id="seoTitle" 
                value={seoTitle} 
                onChange={(e) => setSeoTitle(e.target.value)} 
                placeholder={title}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seoDescription">SEO Description</Label>
              <Textarea 
                id="seoDescription" 
                value={seoDescription} 
                onChange={(e) => setSeoDescription(e.target.value)} 
                rows={3}
                placeholder={excerpt}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
