import { createAdminClient } from '@/lib/supabase/server'
import { Footer } from './footer'

export async function FooterWrapper() {
  const supabase = await createAdminClient()
  
  const { data: branches } = await supabase
    .from('branches')
    .select('*')
    .order('sort_order', { ascending: true })

  return <Footer branches={branches || []} />
}