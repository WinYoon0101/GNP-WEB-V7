import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Headphones, Video, BookOpen } from "lucide-react"
import Link from "next/link"

export function Resources() {
  const resources = [
    {
      icon: FileText,
      title: "Tài liệu luyện tập",
      description: "Bài tập ngữ pháp, từ vựng và các dạng bài theo chủ đề",
      items: ["Grammar Exercises", "Vocabulary Builder", "Practice Tests"],
    },
    {
      icon: Headphones,
      title: "Luyện nghe",
      description: "Audio files và podcasts theo cấp độ từ cơ bản đến nâng cao",
      items: ["Listening Practice", "Podcasts", "Dictation Exercises"],
    },
    {
      icon: Video,
      title: "Video học tập",
      description: "Bài giảng video, tips làm bài và kỹ năng giao tiếp",
      items: ["Video Lessons", "Speaking Tips", "Test Strategies"],
    },
    {
      icon: BookOpen,
      title: "Đề thi mẫu",
      description: "Bộ đề thi thử IELTS, TOEIC, Cambridge đầy đủ và chi tiết",
      items: ["IELTS Mock Tests", "TOEIC Samples", "Cambridge Past Papers"],
    },
  ]

  return (
    <section id="resources" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Tài liệu & Hỗ trợ học tập</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Kho tài liệu phong phú giúp học viên tự học và rèn luyện hiệu quả
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold">Truy cập thư viện tài liệu miễn phí</h3>
              <p className="mb-6 text-primary-foreground/90">
                Đăng ký tài khoản để nhận tài liệu học tập và cập nhật các tips học tiếng Anh hữu ích
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#dang-ky-tu-van">Đăng ký nhận tài liệu</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
