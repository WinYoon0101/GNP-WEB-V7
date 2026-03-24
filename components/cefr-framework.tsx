import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CEFRFramework() {
  const levels = [
    {
      level: "A1",
      name: "Sơ cấp",
      color: "bg-blue-100 text-blue-900",
      description: "Hiểu và sử dụng các cụm từ thông dụng hàng ngày",
      cambridge: "Movers",
      ielts: "2.5-3.5",
      toeic: "120-220",
    },
    {
      level: "A2",
      name: "Tiền trung cấp",
      color: "bg-green-100 text-green-900",
      description: "Giao tiếp trong các tình huống đơn giản, quen thuộc",
      cambridge: "Flyers, KET",
      ielts: "3.5-4.5",
      toeic: "225-545",
    },
    {
      level: "B1",
      name: "Trung cấp",
      color: "bg-yellow-100 text-yellow-900",
      description: "Hiểu và xử lý các tình huống thường gặp khi đi du lịch",
      cambridge: "PET",
      ielts: "4.5-5.5",
      toeic: "550-780",
    },
    {
      level: "B2",
      name: "Trung cấp cao",
      color: "bg-orange-100 text-orange-900",
      description: "Hiểu nội dung chính của văn bản phức tạp",
      cambridge: "FCE",
      ielts: "5.5-6.5",
      toeic: "785-940",
    },
    {
      level: "C1",
      name: "Nâng cao",
      color: "bg-red-100 text-red-900",
      description: "Sử dụng ngôn ngữ linh hoạt và hiệu quả",
      cambridge: "CAE",
      ielts: "7.0-8.0",
      toeic: "945+",
    },
    {
      level: "C2",
      name: "Thành thạo",
      color: "bg-purple-100 text-purple-900",
      description: "Hiểu gần như mọi thứ được nghe hoặc đọc",
      cambridge: "CPE",
      ielts: "8.5-9.0",
      toeic: "945+",
    },
  ]

  return (
    <section id="cefr" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Khung trình độ CEFR</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Common European Framework of Reference for Languages - Khung tham chiếu châu Âu chung cho ngôn ngữ
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <p className="leading-relaxed text-muted-foreground">
                CEFR là hệ thống tiêu chuẩn quốc tế được sử dụng rộng rãi để mô tả trình độ ngôn ngữ. Khung CEFR chia
                thành 6 cấp độ từ A1 (cơ bản) đến C2 (thành thạo), giúp đánh giá và so sánh năng lực tiếng Anh một cách
                khách quan.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto max-w-6xl space-y-4">
          {levels.map((level, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className={`flex w-full items-center justify-center p-6 md:w-32 ${level.color}`}>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{level.level}</div>
                    <div className="text-sm font-medium">{level.name}</div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <p className="mb-4 leading-relaxed">{level.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-muted-foreground">Cambridge:</span>{" "}
                      <span className="text-foreground">{level.cambridge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground">IELTS:</span>{" "}
                      <span className="text-foreground">{level.ielts}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground">TOEIC:</span>{" "}
                      <span className="text-foreground">{level.toeic}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Gợi ý lựa chọn chứng chỉ theo mục tiêu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">Đi làm & Phát triển sự nghiệp</h4>
                <p className="text-sm text-muted-foreground">
                  → Nên học: TOEIC (đánh giá khả năng giao tiếp trong môi trường công việc)
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-secondary bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">Du học & Định cư</h4>
                <p className="text-sm text-muted-foreground">
                  → Nên học: IELTS (yêu cầu của hầu hết các trường đại học quốc tế) hoặc TOEFL (ưu tiên cho Mỹ, Canada)
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-primary bg-muted/50 p-4">
                <h4 className="mb-2 font-semibold">Nâng cao giao tiếp & Phát triển bản thân</h4>
                <p className="text-sm text-muted-foreground">
                  → Nên học: Cambridge (hệ thống từ cơ bản đến nâng cao, phát triển đều 4 kỹ năng)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
