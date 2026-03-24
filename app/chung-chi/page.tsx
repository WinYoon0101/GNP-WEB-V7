import { Header } from "@/components/header"
import { CertificatesShowcase } from "@/components/certificates-showcase"
import { CEFRFramework } from "@/components/cefr-framework"
import { Footer } from "@/components/footer"

export default function CertificatesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <CertificatesShowcase />
        <CEFRFramework />
      </main>
      <Footer />
    </div>
  )
}
