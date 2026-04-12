import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SummerCourseTab } from "@/components/summer-course-tab"
import { AgeSelectionOverlay } from "@/components/age-selection-overlay"

export default function SummerCoursePage() {
    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-orange-200 relative">
            <AgeSelectionOverlay />
            <Header />
            <main className="overflow-hidden">
                <SummerCourseTab />
            </main>
            <Footer />
        </div>
    )
}
