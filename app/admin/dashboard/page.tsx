import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, FolderTree, Users, Eye } from 'lucide-react'
import { createAdminClient } from '@/lib/supabase/admin' 
import { DashboardChart } from './dashboard-chart'

export default async function AdminDashboard() {
  const supabase = await createAdminClient()


  const [
    { count: postsCount },
    { count: categoriesCount },
    { data: viewsData },
    { count: contactsCount },
    { data: topPosts }
  ] = await Promise.all([
   
    supabase.from('posts').select('*', { count: 'exact', head: true }),
    
    supabase.from('categories').select('*', { count: 'exact', head: true }),
  
    supabase.from('posts').select('views'),
 
    supabase.from('consultations').select('*', { count: 'exact', head: true }),
  
    supabase.from('posts').select('title, views').order('views', { ascending: false }).limit(5)
  ])


  const totalViews = viewsData?.reduce((acc, curr) => acc + (curr.views || 0), 0) || 0

  const stats = [
    { title: 'Tổng bài viết', value: postsCount || 0, icon: FileText, color: 'text-blue-500' },
    { title: 'Tổng danh mục', value: categoriesCount || 0, icon: FolderTree, color: 'text-green-500' },
    { title: 'Lượt xem', value: totalViews.toLocaleString('vi-VN'), icon: Eye, color: 'text-purple-500' },
    { title: 'Liên hệ', value: contactsCount || 0, icon: Users, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Tổng quan dữ liệu thực tế từ hệ thống GNP.</p>
      </div>

      {/* THỐNG KÊ */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full bg-slate-50 ${stat.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* BIỂU ĐỒ */}
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <DashboardChart data={topPosts || []} />
      </div>
    </div>
  )
}