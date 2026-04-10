import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FlashSale } from "@/components/flash-sale";
import { StatsSection } from "@/components/stats-section";
import { About } from "@/components/about";
import { GPSPhilosophy } from "@/components/gps-philosophy";
import { TeamCarousel } from "@/components/team-carousel";
import { StudentAchievementsCarousel } from "@/components/student-achievements-carousel";
import { LearningMethods } from "@/components/learning-methods";
import { Contact } from "@/components/contact";
import { ConsultationForm } from "@/components/consultation-form";
import { Footer } from "@/components/footer";
import { TrialBanner } from "@/components/trial-banner";
import { ExpandingCourseCards } from "@/components/expanding-course-cards";
import { WhatsHot } from "@/components/whats-hot";
import GalleryScroll from "@/components/GalleryScroll";
import { BranchesCarousel } from "@/components/branches-carousel";
import { ScrollReveal } from "@/components/scroll-reveal";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ScrollReveal animation="fadeInUp"><ExpandingCourseCards /></ScrollReveal>
        <ScrollReveal animation="fadeInUp" delay={0.1}><FlashSale /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><About /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><BranchesCarousel /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><GalleryScroll /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><GPSPhilosophy /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><TeamCarousel /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><StudentAchievementsCarousel /></ScrollReveal>
        <ScrollReveal animation="popIn"><LearningMethods /></ScrollReveal>
        <ScrollReveal animation="fadeInUp"><ConsultationForm /></ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
