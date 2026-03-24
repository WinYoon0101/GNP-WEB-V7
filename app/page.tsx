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
import { TrialBanner } from "@/components/trial-banner"; // Added import for TrialBanner
import { ExpandingCourseCards } from "@/components/expanding-course-cards";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExpandingCourseCards />
        <FlashSale />

        <About />
        <GPSPhilosophy />
        <TeamCarousel />
        <StudentAchievementsCarousel />
        <LearningMethods />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}
