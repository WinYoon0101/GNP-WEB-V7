'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, FolderTree, Users, Eye } from 'lucide-react'

export default function AdminDashboard() {
  // TODO: Fetch real stats from Supabase
  const stats = [
    { title: 'Tổng bài viết', value: '12', icon: FileText, color: 'text-blue-500' },
    { title: 'Tổng danh mục', value: '4', icon: FolderTree, color: 'text-green-500' },
    { title: 'Lượt xem', value: '1,234', icon: Eye, color: 'text-purple-500' },
    { title: 'Người dùng', value: '2', icon: Users, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Tổng quan về hệ thống tin tức.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Bài viết mới nhất</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Đang tải dữ liệu...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
