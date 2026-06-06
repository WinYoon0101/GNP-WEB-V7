import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'
import { Calendar, Eye, ChevronRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ViewUpdater } from '@/components/view-updater'
import { FooterWrapper } from '@/components/FooterWrapper'

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

 

  // Format date
  const formattedDate = new Date(post.created_at).toLocaleDateString('vi-VN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-orange-200 selection:text-orange-900">
      <Header />

      <ViewUpdater postId={post.id} />
      
      <main className="flex-1 pb-24">
        {/* HERO SECTION WITH PARALLAX EFFECT */}
        <div className="relative w-full h-[50vh] min-h-[450px] max-h-[600px] bg-slate-900 overflow-hidden">
          {post.thumbnail ? (
            <>
              <Image 
                src={post.thumbnail} 
                alt={post.title}
                fill
                priority
                className="object-cover opacity-40 mix-blend-overlay scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          )}

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-16 max-w-[900px]">
              {/* Breadcrumbs */}
              <div className="flex items-center text-xs md:text-sm text-slate-300 mb-6 font-medium">
                <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-2 text-slate-500" />
                <Link href="/tin-tuc" className="hover:text-white transition-colors">Tin tức</Link>
                {post.category && (
                  <>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-2 text-slate-500" />
                    <Link href="/tin-tuc" className="text-orange-400 hover:text-orange-300 transition-colors">
                      {post.category.name}
                    </Link>
                  </>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-[1.15] tracking-tight drop-shadow-lg">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold shadow-md">
                    {(post.author?.email?.[0] || 'G').toUpperCase()}
                  </div>
                  <span>{post.author?.email || 'GNP English'}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Eye className="w-4 h-4 text-orange-400" />
                  <span>{post.views || 0} lượt xem</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="container mx-auto px-4 max-w-[900px] -mt-10 relative z-10">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 lg:p-14 border border-slate-100">
            
     

            {post.excerpt && (
              <div className="text-lg md:text-xl text-slate-700 font-medium mb-12 p-6 md:p-8 bg-gradient-to-r from-orange-50 to-transparent rounded-2xl border-l-4 border-orange-500 leading-relaxed italic shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                "{post.excerpt}"
              </div>
            )}

            {/* Tiptap HTML Content */}
            <div 
              className="prose prose-lg max-w-none text-slate-700
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:leading-relaxed prose-p:mb-6 md:prose-p:text-lg
                prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-orange-700 prose-a:font-semibold
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10 prose-img:mx-auto prose-img:w-full prose-img:object-cover
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
                prose-li:mb-2 md:prose-li:text-lg
                prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:bg-slate-50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:my-8 prose-blockquote:text-slate-600
                prose-strong:text-slate-900 prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags / Categories Footer */}
            {post.category && (
              <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Chuyên mục:</span>
                  <Link 
                    href="/tin-tuc"
                    className="px-5 py-2 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white rounded-full text-sm font-bold transition-all shadow-sm"
                  >
                    {post.category.name}
                  </Link>
                </div>
                
                <Link href="/tin-tuc" className="text-slate-500 hover:text-orange-500 text-sm font-medium flex items-center gap-1 transition-colors">
                  Quay lại tin tức <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            )}
            
          </div>
        </div>
      </main>
      
      <FooterWrapper />
    </div>
  )
}
