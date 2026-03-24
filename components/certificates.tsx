import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Certificates() {
  return (
    <section id="certificates" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Chứng chỉ tiếng Anh quốc tế</h2>
          <p className="text-pretty text-lg text-muted-foreground">Luyện thi các chứng chỉ được công nhận toàn cầu</p>
        </div>

        <Tabs defaultValue="cambridge" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="cambridge">Cambridge</TabsTrigger>
            <TabsTrigger value="ielts">IELTS</TabsTrigger>
            <TabsTrigger value="toeic">TOEIC</TabsTrigger>
            <TabsTrigger value="toefl">TOEFL</TabsTrigger>
          </TabsList>

          <TabsContent value="cambridge" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cambridge English</CardTitle>
                <CardDescription className="text-base">
                  Hệ thống chứng chỉ tiếng Anh của Đại học Cambridge
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="mb-3 font-semibold">Cambridge Young Learners</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="min-w-[120px] rounded-md bg-primary/10 px-3 py-1 text-sm font-medium">
                        Starters (Pre A1)
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Chứng chỉ đầu tiên cho trẻ em, làm quen với tiếng Anh cơ bản
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="min-w-[120px] rounded-md bg-primary/10 px-3 py-1 text-sm font-medium">
                        Movers (A1)
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trình độ cơ bản, hiểu và sử dụng tiếng Anh đơn giản
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="min-w-[120px] rounded-md bg-primary/10 px-3 py-1 text-sm font-medium">
                        Flyers (A2)
                      </div>
                      <p className="text-sm text-muted-foreground">Giao tiếp cơ bản trong các tình huống quen thuộc</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold">Cambridge for Schools & Adults</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="min-w-[120px] rounded-md bg-secondary/80 px-3 py-1 text-sm font-medium text-secondary-foreground">
                        KET (A2)
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Key English Test - Chứng nhận trình độ tiếng Anh cơ bản
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="min-w-[120px] rounded-md bg-secondary/80 px-3 py-1 text-sm font-medium text-secondary-foreground">
                        PET (B1)
                      </div>
                      <p className="text-sm text-muted-foreground">Preliminary English Test - Trình độ trung cấp</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="min-w-[120px] rounded-md bg-secondary/80 px-3 py-1 text-sm font-medium text-secondary-foreground">
                        FCE (B2)
                      </div>
                      <p className="text-sm text-muted-foreground">First Certificate - Trình độ trung cấp cao</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ielts" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">IELTS</CardTitle>
                <CardDescription className="text-base">International English Language Testing System</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  IELTS là chứng chỉ tiếng Anh được công nhận rộng rãi nhất thế giới, sử dụng cho mục đích du học, định
                  cư và làm việc tại các nước nói tiếng Anh.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-2 font-semibold">IELTS Academic</h4>
                    <p className="text-sm text-muted-foreground">
                      Dành cho du học và làm việc trong môi trường học thuật
                    </p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-2 font-semibold">IELTS General Training</h4>
                    <p className="text-sm text-muted-foreground">Dành cho định cư, làm việc và đào tạo nghề</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold">Thang điểm IELTS</h4>
                  <div className="space-y-2">
                    {[
                      {
                        score: "4.0 - 5.0",
                        level: "Trình độ cơ bản",
                        desc: "Giao tiếp đơn giản trong tình huống quen thuộc",
                      },
                      {
                        score: "5.5 - 6.0",
                        level: "Trình độ trung bình",
                        desc: "Đủ để học tập và làm việc trong môi trường tiếng Anh",
                      },
                      {
                        score: "6.5 - 7.0",
                        level: "Trình độ khá",
                        desc: "Yêu cầu của hầu hết các trường đại học hàng đầu",
                      },
                      { score: "7.5 - 8.0+", level: "Trình độ cao", desc: "Sử dụng tiếng Anh thành thạo và chính xác" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="min-w-[80px] rounded-md bg-primary/10 px-3 py-1 text-sm font-medium">
                          {item.score}
                        </div>
                        <div>
                          <p className="font-medium">{item.level}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="toeic" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">TOEIC</CardTitle>
                <CardDescription className="text-base">Test of English for International Communication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  TOEIC đánh giá khả năng sử dụng tiếng Anh trong môi trường công việc quốc tế, được các doanh nghiệp và
                  tổ chức trên toàn thế giới công nhận.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-2 font-semibold">TOEIC Listening & Reading</h4>
                    <p className="text-sm text-muted-foreground">Đánh giá kỹ năng nghe và đọc hiểu (990 điểm)</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="mb-2 font-semibold">TOEIC Speaking & Writing</h4>
                    <p className="text-sm text-muted-foreground">Đánh giá kỹ năng nói và viết (400 điểm)</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold">Mức điểm phổ biến</h4>
                  <div className="space-y-2">
                    {[
                      { score: "450+", desc: "Trình độ cơ bản, giao tiếp đơn giản trong công việc" },
                      { score: "650+", desc: "Trình độ trung bình, làm việc hiệu quả môi trường quốc tế" },
                      { score: "850+", desc: "Trình độ cao, giao tiếp thành thạo trong mọi tình huống" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="min-w-[60px] rounded-md bg-primary/10 px-3 py-1 text-sm font-medium">
                          {item.score}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="toefl" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">TOEFL iBT</CardTitle>
                <CardDescription className="text-base">
                  Test of English as a Foreign Language - Internet-based Test
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed text-muted-foreground">
                  TOEFL iBT là chứng chỉ tiếng Anh được các trường đại học ở Mỹ, Canada và nhiều quốc gia khác yêu cầu
                  cho du học sinh quốc tế.
                </p>

                <div>
                  <h4 className="mb-3 font-semibold">Cấu trúc bài thi (120 điểm)</h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { skill: "Reading", desc: "Đọc hiểu văn bản học thuật", points: "30 điểm" },
                      { skill: "Listening", desc: "Nghe hiểu bài giảng và đối thoại", points: "30 điểm" },
                      { skill: "Speaking", desc: "Trình bày quan điểm cá nhân", points: "30 điểm" },
                      { skill: "Writing", desc: "Viết luận học thuật", points: "30 điểm" },
                    ].map((item, idx) => (
                      <div key={idx} className="rounded-lg border bg-muted/50 p-3">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-semibold">{item.skill}</span>
                          <span className="text-sm text-primary">{item.points}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <h4 className="mb-2 font-semibold">Ứng dụng</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Du học tại các trường đại học Mỹ, Canada, Úc</li>
                    <li>• Học bổng quốc tế</li>
                    <li>• Chương trình trao đổi sinh viên</li>
                    <li>• Xin visa du học</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
