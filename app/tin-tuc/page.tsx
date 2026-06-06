import { createAdminClient } from '@/lib/supabase/server'
import TinTucClient from './TinTucClient'

// Cấu hình revalidate nếu muốn, hoặc mặc định là server component dynamic do có cookie
export const dynamic = 'force-dynamic'

export default async function TinTucPageServer() {
  const supabase = await createAdminClient()

  // Fetch dữ liệu bài viết mới nhất (Published)
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`
      id, title, slug, excerpt, thumbnail, created_at,
      category:categories(name, slug)
    `)
    .eq('status', 'Published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
  }

  return <TinTucClient posts={posts || []} />
}
