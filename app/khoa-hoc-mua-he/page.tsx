import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SummerCourseTab } from "@/components/summer-course-tab"

export default function SummerCoursePage() {
    return (
        <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-orange-200">
            <Header />
            <main className="overflow-hidden">
                <SummerCourseTab />
            </main>
            <Footer />
        </div>
    )
}
