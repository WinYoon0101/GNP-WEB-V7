'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2, Save } from 'lucide-react'

export default function ContactAdminPage() {
  const [contacts, setContacts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    const { data } = await supabase.from('contact_info').select('*').order('id')
    if (data) setContacts(data)
    setIsLoading(false)
  }


  const handleInputChange = (id: number, val: string) => {
    setContacts(contacts.map(c => c.id === id ? { ...c, value: val } : c))
  }

 const saveAll = async () => {
  setIsSaving(true)
  for (const contact of contacts) {
    let newLabel = contact.label;
    if (contact.type === 'phone') {
       newLabel = `Call ${contact.value}`;
    }

    await supabase
      .from('contact_info')
      .update({ 
        value: contact.value,
        label: newLabel 
      })
      .eq('id', contact.id)
  }
  setIsSaving(false)
  fetchData() 
  alert('Đã lưu!')
}

  if (isLoading) return <div className="p-8"><Loader2 className="animate-spin" /></div>

  return (
    <div className="p-8 space-y-6 max-w-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cấu hình thông tin liên hệ</h1>
        <Button onClick={saveAll} disabled={isSaving}>
          {isSaving ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2 h-4 w-4" />}
          Lưu thay đổi
        </Button>
      </div>

      <div className="space-y-4">
        {contacts.map(c => (
          <div key={c.id} className="bg-white p-4 rounded-xl border shadow-sm space-y-2">
            <div className="flex justify-between">
              <label className="font-semibold text-sm text-gray-600">{c.label}</label>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">{c.type}</span>
            </div>
            <Input 
              value={c.value} 
              onChange={(e) => handleInputChange(c.id, e.target.value)}
              placeholder={c.type === 'zalo' ? "Chỉ nhập số điện thoại (VD: 0839990997)" : "Nhập giá trị..."}
            />
            {c.type === 'zalo' && (
              <p className="text-xs text-orange-500">
                * Chỉ nhập số điện thoại
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}