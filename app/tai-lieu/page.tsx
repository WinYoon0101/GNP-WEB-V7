import { Header } from "@/components/header"
import { Resources } from "@/components/resources"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Resources />
      </main>
      <Footer />
    </div>
  )
}
