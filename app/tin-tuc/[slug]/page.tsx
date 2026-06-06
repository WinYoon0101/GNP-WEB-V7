import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'
import { Calendar, User } from 'lucide-react'

// Cấu hình metadata cho SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createAdminClient()

  const { data: post } = await supabase
    .from('posts')
    .select('seo_title, seo_description, title, excerpt')
    .eq('slug', slug)
    .single()

  if (!post) {
    return { title: 'Bài viết không tồn tại' }
  }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
  }
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = await createAdminClient()

  const { data: post, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('slug', slug)
    .eq('status', 'Published')
    .single()

  if (error || !post) {
    console.error("Error fetching detail:", error);
    notFound()
  }

  // Tăng lượt xem (Server Action đơn giản hoặc tự gọi API route, ở đây dùng RPC hoặc trực tiếp update)
  // Thực tế có thể dùng Next.js server action hoặc API route để debounce views.
  await supabase.rpc('increment_view', { post_id: post.id }).match(() => {
    // Nếu chưa tạo function increment_view, fallback update trực tiếp (không thread-safe lắm)
    supabase.from('posts').update({ views: (post.views || 0) + 1 }).eq('id', post.id).then()
  })

  return (
    <article className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div className="mb-8">
        {post.category && (
          <Link href={`/tin-tuc/danh-muc/${post.category.slug}`} className="text-primary font-semibold hover:underline mb-4 inline-block">
            {post.category.name}
          </Link>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-8">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{post.author?.email || 'Admin'}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{new Date(post.created_at).toLocaleDateString('vi-VN')}</span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            <span>{post.views || 0} lượt xem</span>
          </div>
        </div>
      </div>

      {post.thumbnail && (
        <div className="relative aspect-video w-full mb-10 rounded-xl overflow-hidden shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.thumbnail}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {post.excerpt && (
        <div className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-primary">
          {post.excerpt}
        </div>
      )}

      {/* Nội dung bài viết sinh ra từ Tiptap HTML */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}
