import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FooterWrapper } from "@/components/FooterWrapper"


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="">
        <ScrollReveal animation="fadeInUp"><Contact /></ScrollReveal>

      </main>
      <FooterWrapper />
    </div>
  )
}
