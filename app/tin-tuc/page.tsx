import { createAdminClient } from '@/lib/supabase/admin'
import TinTucClient from './TinTucClient'

export const dynamic = 'force-dynamic'

export default async function TinTucPageServer() {
  const supabase = createAdminClient()

  const [{ data: posts, error }, { data: branches }] = await Promise.all([
    supabase
      .from('posts')
      .select(`
        id, title, slug, excerpt, thumbnail, created_at,
        category:categories(name, slug)
      `)
      .eq('status', 'Published')
      .order('created_at', { ascending: false }),
    supabase
      .from('branches')
      .select('*')
      .order('sort_order', { ascending: true }),
  ])

  if (error) {
    console.error('Error fetching posts:', error)
  }

  return <TinTucClient posts={posts || []} branches={branches || []} />
}
