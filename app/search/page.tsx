import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/admin'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Tìm kiếm',
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ''
  const supabase = await createAdminClient()

  let posts: any[] = []
  
  if (query) {
    // Tìm kiếm trong title hoặc content
    const { data } = await supabase
      .from('posts')
      .select('id, title, slug, excerpt, thumbnail, created_at')
      .eq('status', 'Published')
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .order('created_at', { ascending: false })
      
    posts = data || []
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 border-b pb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Tìm kiếm bài viết
        </h1>
        
        <form className="max-w-md mx-auto flex gap-2" action="/search" method="GET">
          <input 
            type="text" 
            name="q" 
            defaultValue={query}
            placeholder="Nhập từ khóa tìm kiếm..." 
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button type="submit">Tìm</Button>
        </form>
      </div>

      {query && (
        <div className="mb-8 text-center text-gray-600">
          Kết quả tìm kiếm cho: <strong>"{query}"</strong> ({posts.length} bài viết)
        </div>
      )}

      {!query ? (
        <div className="text-center py-20 text-gray-500">
          Hãy nhập từ khóa để tìm kiếm các bài viết.
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          Không tìm thấy bài viết nào phù hợp.
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
