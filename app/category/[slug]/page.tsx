import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const supabase = await createAdminClient()

  const { data: category } = await supabase
    .from('categories')
    .select('name')
    .eq('slug', slug)
    .single()

  if (!category) {
    return { title: 'Danh mục không tồn tại' }
  }

  return {
    title: `Chuyên mục: ${category.name}`,
    description: `Tin tức thuộc chuyên mục ${category.name}`,
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const supabase = await createAdminClient()

  // Lấy thông tin danh mục
  const { data: category, error: catError } = await supabase
    .from('categories')
    .select('id, name')
    .eq('slug', slug)
    .single()

  if (catError || !category) {
    notFound()
  }

  // Fetch dữ liệu bài viết thuộc danh mục
  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select(`
      id, title, slug, excerpt, thumbnail, created_at
    `)
    .eq('category_id', category.id)
    .eq('status', 'Published')
    .order('created_at', { ascending: false })

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Chuyên mục: <span className="text-primary">{category.name}</span>
        </h1>
      </div>

      {!posts || posts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Chưa có bài viết nào trong danh mục này.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <Card key={post.id} className="overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
              {post.thumbnail && (
                <div className="relative h-48 w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className="flex-grow">
                <div className="text-xs text-gray-500 mb-2">
                  {new Date(post.created_at).toLocaleDateString('vi-VN')}
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-0">
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/tin-tuc/${post.slug}`}>
                    Đọc tiếp
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
