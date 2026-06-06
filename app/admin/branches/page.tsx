'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Plus, Trash2, Edit, Loader2, MapPin, Building, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ImageUpload } from '@/components/ImageUpload'

export default function BranchesPage() {
  const [branches, setBranches] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({ title: '', address: '', image_url: '', sort_order: 0 })
  const [editingId, setEditingId] = useState<string | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const fetchData = async () => {
    setIsLoading(true)
    const { data } = await supabase.from('branches').select('*').order('sort_order', { ascending: true })
    if (data) setBranches(data)
    setIsLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  // Hàm reset form về trạng thái trống
  const resetForm = () => {
    setFormData({ title: '', address: '', image_url: '', sort_order: 0 })
    setEditingId(null)
    setIsAdding(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    if (editingId) {
      await supabase.from('branches').update(formData).eq('id', editingId)
    } else {
      await supabase.from('branches').insert([formData])
    }
    
    resetForm()
    fetchData()
  }

  const deleteBranch = async (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa cơ sở này?')) {
      await supabase.from('branches').delete().eq('id', id)
      fetchData()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quản lý Cơ sở vật chất</h1>
        <Button onClick={() => { 
          if(isAdding) resetForm(); 
          else setIsAdding(true); 
        }}>
          {isAdding ? <><X className="mr-2 h-4 w-4"/> Hủy</> : <><Plus className="mr-2 h-4 w-4"/> Thêm cơ sở</>}
        </Button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border space-y-4 shadow-md">
          <h2 className="font-semibold">{editingId ? 'Chỉnh sửa cơ sở' : 'Thêm cơ sở mới'}</h2>
          <Input placeholder="Tên cơ sở" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          <Input placeholder="Địa chỉ" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} required />
          <Input type="number" placeholder="Thứ tự hiển thị" value={formData.sort_order} onChange={e => setFormData({...formData, sort_order: parseInt(e.target.value)})} />
          <div className="space-y-2">
            <label className="text-sm font-medium">Ảnh cơ sở</label>
            <ImageUpload value={formData.image_url} onChange={(url) => setFormData({...formData, image_url: url})} />
          </div>
          <Button type="submit" className="w-full">Lưu thông tin</Button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full text-center p-10"><Loader2 className="animate-spin mx-auto w-8 h-8 text-orange-500" /></div>
        ) : branches.map(b => (
          <div key={b.id} className="border rounded-lg p-4 bg-white shadow-sm flex flex-col gap-2">
            <h3 className="font-bold flex items-center gap-2 text-lg"><Building size={18} className="text-orange-500"/>{b.title}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-2"><MapPin size={16}/>{b.address}</p>
            <div className="flex justify-end gap-2 mt-auto pt-4">
              <Button variant="outline" size="sm" onClick={() => { setEditingId(b.id); setFormData(b); setIsAdding(true); }}><Edit size={16}/></Button>
              <Button variant="destructive" size="sm" onClick={() => deleteBranch(b.id)}><Trash2 size={16}/></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}