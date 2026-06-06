import { PostForm } from '@/components/PostForm'

export default function CreatePostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Viết bài mới</h1>
      </div>
      <PostForm />
    </div>
  )
}
