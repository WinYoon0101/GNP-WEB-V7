import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ClipboardCheck, BookOpen, Target, Award } from "lucide-react"

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Lộ trình học tại GNP</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Quy trình học tập rõ ràng, bài bản từ khâu đầu vào đến đạt mục tiêu
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border md:left-1/2" />

            {/* Step 1 */}
            <div className="relative flex items-start gap-6 md:gap-8">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ClipboardCheck className="h-8 w-8" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">Bước 1:</span> Test đầu vào
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Đánh giá trình độ hiện tại của học viên qua bài test chuẩn hóa, xác định điểm mạnh và điểm cần cải
                    thiện.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Arrow */}
            <div className="flex justify-center md:justify-start md:pl-20">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>

            {/* Step 2 */}
            <div className="relative flex items-start gap-6 md:ml-auto md:w-[calc(50%+2rem)] md:gap-8">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Target className="h-8 w-8" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">Bước 2:</span> Tư vấn & xếp lớp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tư vấn lộ trình học phù hợp với mục tiêu cá nhân, xếp lớp học theo trình độ và khung giờ linh hoạt.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Arrow */}
            <div className="flex justify-center md:justify-end md:pr-20">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>

            {/* Step 3 */}
            <div className="relative flex items-start gap-6 md:gap-8">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BookOpen className="h-8 w-8" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">Bước 3:</span> Học tập & luyện thi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tham gia lớp học với giảng viên chất lượng, học liệu chuẩn quốc tế, luyện tập thường xuyên và theo
                    dõi tiến độ.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Arrow */}
            <div className="flex justify-center md:justify-start md:pl-20">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>

            {/* Step 4 */}
            <div className="relative flex items-start gap-6 md:ml-auto md:w-[calc(50%+2rem)] md:gap-8">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Award className="h-8 w-8" />
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-primary">Bước 4:</span> Thi chứng chỉ & đạt mục tiêu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tham gia kỳ thi chứng chỉ quốc tế, đạt được điểm số mục tiêu và hoàn thành lộ trình học tập.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="mt-12 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="mb-4 text-center text-xl font-semibold">Cam kết của GNP English Academy</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Học viên hài lòng với chất lượng giảng dạy</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">95%</div>
                  <p className="text-sm text-muted-foreground">Học viên đạt mục tiêu đề ra sau khóa học</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Hỗ trợ học viên mọi lúc, mọi nơi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
