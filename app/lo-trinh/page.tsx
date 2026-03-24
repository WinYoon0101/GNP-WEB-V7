import { Header } from "@/components/header"
import { Roadmap } from "@/components/roadmap"
import { Footer } from "@/components/footer"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Roadmap />
      </main>
      <Footer />
    </div>
  )
}
