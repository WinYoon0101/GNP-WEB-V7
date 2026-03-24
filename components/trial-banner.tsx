import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TrialBanner() {
  return (
    <section className="relative py-0 overflow-hidden">
      <div className="flex flex-row gap-0 items-stretch">
        {/* Background Image Banner */}
        <div
          className="flex-1 min-h-64 sm:min-h-80 md:min-h-96 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-cdec0f395ffa?w=1200&h=600&fit=crop')`,
          }}
        />

        {/* CTA Button Section */}
        <div className="flex items-center justify-center px-4 py-6 md:py-8 bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer">
          <Button
            size="lg"
            className="bg-transparent hover:bg-transparent text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg flex flex-col items-center gap-2"
          >
            <span>Đăng ký học</span>
            <span>thử miễn phí</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
