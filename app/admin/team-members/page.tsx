'use client'

import { useState, useEffect, useRef } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Plus, Trash2, Image as ImageIcon, Loader2, Edit, UploadCloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'

export default function TeamMembersPage() {
  const [members, setMembers] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [editingId, setEditingId] = useState<string | null>(null)
  const [isUploadingImage, setIsUploadingImage] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    image: '',
    sort_order: 1
  })

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const fetchMembers = async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('sort_order', { ascending: true })

    if (!error && data) {
      setMembers(data)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMembers()
  }, [])

  // Xử lý tự động nhảy số thứ tự khi bấm Thêm mới
  const handleAddNewClick = () => {
    const nextOrder = members.length > 0 
      ? Math.max(...members.map(m => m.sort_order || 0)) + 1 
      : 1;
      
    setFormData({
      name: '',
      position: '',
      image: '',
      sort_order: nextOrder
    })
    setEditingId(null)
    setIsAdding(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleEditClick = (member: any) => {
    setFormData({
      name: member.name,
      position: member.position,
      image: member.image,
      sort_order: member.sort_order
    })
    setEditingId(member.id)
    setIsAdding(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploadingImage(true)
    const fileExt = file.name.split('.').pop()
    const fileName = `team-${Date.now()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(fileName, file)

    if (uploadError) {
      alert('Lỗi khi upload ảnh: ' + uploadError.message)
    } else {
      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(fileName)

      setFormData(prev => ({ ...prev, image: publicUrlData.publicUrl }))
    }
    setIsUploadingImage(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.image) {
      alert('Vui lòng tải lên hoặc nhập link hình ảnh!')
      return
    }

    setIsSubmitting(true)

    const payload = {
      name: formData.name,
      position: formData.position,
      image: formData.image,
      sort_order: Number(formData.sort_order)
    }

    if (editingId) {
      const { error } = await supabase.from('team_members').update(payload).eq('id', editingId)
      if (!error) {
        alert('Cập nhật thành công!')
        resetForm()
        fetchMembers()
      } else {
        alert('Lỗi cập nhật: ' + error.message)
      }
    } else {
      const { error } = await supabase.from('team_members').insert([payload])
      if (!error) {
        alert('Thêm giáo viên thành công!')
        resetForm()
        fetchMembers()
      } else {
        alert('Lỗi thêm mới: ' + error.message)
      }
    }
    setIsSubmitting(false)
  }

  const deleteMember = async (id: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa giáo viên này?')) return

    const { error } = await supabase.from('team_members').delete().eq('id', id)
    if (!error) {
      setMembers(members.filter(m => m.id !== id))
    } else {
      alert('Lỗi khi xóa!')
    }
  }

  const resetForm = () => {
    setFormData({ name: '', position: '', image: '', sort_order: 1 })
    setIsAdding(false)
    setEditingId(null)
  }

  return (
    <div className="space-y-6">
      {/* HEADER PAGE */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Đội ngũ Giáo viên</h1>
          <p className="text-slate-500">Quản lý thông tin hiển thị trên Carousel trang chủ.</p>
        </div>
        <Button 
          onClick={() => isAdding ? resetForm() : handleAddNewClick()} 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold"
        >
          {isAdding ? 'Hủy thao tác' : <><Plus className="w-4 h-4 mr-2" /> Thêm giáo viên</>}
        </Button>
      </div>

      {/* FORM THÊM / SỬA (Layout 2 cột) */}
      {isAdding && (
        <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-top-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Cột Trái: Nội dung */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 font-semibold text-slate-700">
                Nội dung Đội ngũ giáo viên
              </div>
              <div className="p-6 space-y-5 flex-1">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Tiêu đề (Họ và tên) <span className="text-red-500">*</span></label>
                  <Input 
                    required 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})} 
                    placeholder="VD: ThS. Phùng Nguyễn Hạnh Nguyên" 
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Mô tả (Chức vụ / Học vị) <span className="text-red-500">*</span></label>
                  <Textarea 
                    required 
                    value={formData.position} 
                    onChange={e => setFormData({...formData, position: e.target.value})} 
                    placeholder="VD: Chủ tịch Hội đồng quản trị" 
                    rows={4}
                    className="bg-white resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">Thứ tự hiển thị (STT)</label>
                  <Input 
                    type="number" 
                    required 
                    value={formData.sort_order} 
                    onChange={e => setFormData({...formData, sort_order: Number(e.target.value)})} 
                    className="bg-white max-w-[150px]"
                  />
                 
                </div>
              </div>
            </div>

            {/* Cột Phải: Hình ảnh */}
            <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 font-semibold text-slate-700">
                Hình ảnh Đội ngũ giáo viên
              </div>
              <div className="p-6 flex-1 flex flex-col items-center">
                
                {/* Image Preview */}
                <div className="w-full bg-slate-100 rounded-lg aspect-square mb-6 flex items-center justify-center relative overflow-hidden border border-slate-200">
                  {formData.image ? (
                    <Image src={formData.image} alt="Preview" fill className="object-cover" />
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                      <ImageIcon className="w-12 h-12 mb-2 opacity-50" />
                      <span className="text-sm">Chưa có hình ảnh</span>
                    </div>
                  )}
                </div>

                {/* Upload Zone */}
                <div className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    id="image-upload"
                    ref={fileInputRef} 
                    onChange={handleImageUpload} 
                  />
                  <label htmlFor="image-upload" className="cursor-pointer flex flex-col items-center">
                    <UploadCloud className="w-10 h-10 text-slate-400 mb-3" />
                    <span className="text-sm text-slate-600 mb-1">Kéo và thả hình vào đây</span>
                    <span className="text-sm text-slate-400 mb-4">hoặc</span>
                    <div className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center">
                      {isUploadingImage ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Đang tải...</> : 'Chọn hình'}
                    </div>
                  </label>
                </div>
                
                {/* Manual Link Input */}
                <div className="w-full mt-4">
                  <Input 
                    value={formData.image} 
                    onChange={e => setFormData({...formData, image: e.target.value})} 
                    placeholder="Hoặc dán URL ảnh vào đây..." 
                    className="text-xs h-8 bg-white"
                  />
                </div>

                <p className="text-xs text-slate-500 font-medium mt-4 text-center">
                  Width: 226 px - Height: 226 px (.jpg|.png|.jpeg)
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <Button type="submit" disabled={isSubmitting || isUploadingImage} className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Đang lưu...</> : (editingId ? 'Cập nhật thông tin' : 'Lưu giáo viên')}
            </Button>
            <Button type="button" variant="outline" onClick={resetForm}>
              Hủy bỏ
            </Button>
          </div>
        </form>
      )}

      {/* DANH SÁCH GIÁO VIÊN */}
      {isLoading ? (
        <div className="py-20 text-center text-slate-500 flex flex-col items-center">
          <Loader2 className="w-8 h-8 animate-spin mb-2 text-orange-500" />
          Đang tải danh sách...
        </div>
      ) : members.length === 0 ? (
        <div className="py-20 text-center bg-white rounded-xl border border-slate-200 text-slate-500">
          Chưa có giáo viên nào. Hãy bấm "Thêm giáo viên" để bắt đầu.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                {member.image ? (
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300"><ImageIcon className="w-12 h-12" /></div>
                )}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
                  Thứ tự: {member.sort_order}
                </div>
              </div>
              <div className="p-4 relative">
                <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{member.name}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2 h-10">{member.position}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <Button variant="ghost" size="sm" onClick={() => handleEditClick(member)} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-8 px-2">
                    <Edit className="w-4 h-4 mr-1.5" /> Sửa
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => deleteMember(member.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2">
                    <Trash2 className="w-4 h-4 mr-1.5" /> Xóa
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}