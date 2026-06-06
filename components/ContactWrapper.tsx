import { createAdminClient } from '@/lib/supabase/server'
import { ContactMenu } from './contact-menu-button'


export async function ContactWrapper() {
  const supabase = await createAdminClient()
  const { data } = await supabase.from('contact_info').select('*')
  return <ContactMenu contacts={data || []} />
}