'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { Trash2, Mail, Phone, Loader2, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription 
} from "@/components/ui/dialog"

const STATUS_OPTIONS = [
  { value: 'new', label: 'Mới', color: 'bg-red-50 text-red-600 border-red-200' },
  { value: 'calling', label: 'Đang gọi', color: 'bg-yellow-50 text-yellow-600 border-yellow-200' },
  { value: 'contacted', label: 'Đã tư vấn', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { value: 'done', label: 'Đã chốt', color: 'bg-green-50 text-green-600 border-green-200' },
]

export default function ConsultationsPage() {
  const [consultations, setConsultations] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const fetchConsultations = async () => {
    setIsLoading(true)
    const { data, error } = await supabase
      .from('consultations')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data) setConsultations(data)
    setIsLoading(false)
  }

  useEffect(() => { fetchConsultations() }, [])

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('consultations')
      .update({ status: newStatus })
      .eq('id', id)

    if (error) {
      alert('Lỗi cập nhật: ' + error.message)
    } else {
      setConsultations(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c))
    }
  }

  const deleteConsultation = async (id: string) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa liên hệ này?')) return
    const { error } = await supabase.from('consultations').delete().eq('id', id)
    if (!error) setConsultations(consultations.filter(c => c.id !== id))
    else alert('Lỗi khi xóa: ' + error.message)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Danh sách Liên hệ</h1>
          <p className="text-slate-500">Quản lý quy trình chăm sóc khách hàng.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Khách hàng</th>
              <th className="px-6 py-4">Thông tin</th>
              <th className="px-6 py-4">Nhu cầu & Câu hỏi</th>
              <th className="px-6 py-4">Trạng thái</th>
              <th className="px-6 py-4 text-right">Xóa</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {isLoading ? (
              <tr><td colSpan={5} className="px-6 py-10 text-center"><Loader2 className="animate-spin mx-auto text-orange-500" /></td></tr>
            ) : consultations.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-xs text-slate-400">{new Date(item.created_at).toLocaleDateString('vi-VN')}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2"><Phone className="w-3 h-3" /> {item.phone}</div>
                  <div className="flex items-center gap-2 text-slate-500"><Mail className="w-3 h-3" /> {item.email || 'N/A'}</div>
                </td>
                <td className="px-6 py-4 max-w-[200px]">
                  <div className="font-medium text-orange-600 mb-1">{item.course || 'Chưa chọn'}</div>
                  {/* Dialog hiển thị nội dung dài */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-slate-500 truncate w-full text-left hover:text-orange-600 underline decoration-dotted">
                        {item.message || <span className="italic text-slate-300">Không có câu hỏi</span>}
                      </button>
                    </DialogTrigger>
                  <DialogContent className="max-w-md">
  <DialogHeader>
    <DialogTitle className="flex items-center gap-2">
      <MessageSquare className="w-5 h-5"/> Câu hỏi từ {item.name}
    </DialogTitle>
    {/* Thêm class break-all để ép trình duyệt ngắt dòng chuỗi dài */}
    <DialogDescription 
      className="mt-4 p-4 bg-slate-50 rounded-lg text-slate-800 whitespace-pre-wrap break-all"
    >
      {item.message}
    </DialogDescription>
  </DialogHeader>
</DialogContent>
                  </Dialog>
                </td>
                <td className="px-6 py-4">
                  <Select value={item.status} onValueChange={(val) => updateStatus(item.id, val)}>
                    <SelectTrigger className={`w-[130px] h-8 text-xs font-bold border-0 ${STATUS_OPTIONS.find(s => s.value === item.status)?.color}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map(opt => (
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm" onClick={() => deleteConsultation(item.id)} className="text-red-500 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}