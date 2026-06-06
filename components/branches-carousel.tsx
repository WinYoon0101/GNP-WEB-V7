"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { createBrowserClient } from "@supabase/ssr";

export function BranchesCarousel() {
  const [branches, setBranches] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  // Fetch dữ liệu từ Supabase
  useEffect(() => {
    const fetchBranches = async () => {
      const { data, error } = await supabase
        .from("branches")
        .select("*")
        .order("sort_order", { ascending: true });
      
      if (!error && data) setBranches(data);
      setIsLoading(false);
    };
    fetchBranches();
  }, [supabase]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % branches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + branches.length) % branches.length);
  };

  const getVisibleBranches = () => {
    if (branches.length === 0) return [];
    const count = isMobile ? 1 : 3;
    const items = [];
    for (let i = 0; i < count; i++) {
      items.push(branches[(currentIndex + i) % branches.length]);
    }
    return items;
  };

  if (isLoading) return <div className="h-96 flex items-center justify-center"><Loader2 className="animate-spin text-orange-500" /></div>;
  if (branches.length === 0) return null;

  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#FF7A00]">HỆ THỐNG CƠ SỞ GNP</h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Button variant="outline" size="icon" className="absolute left-0 top-1/2 z-10 -ml-4 md:-ml-6" onClick={prevSlide}>
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="overflow-hidden px-4">
            <div className="flex gap-6 justify-center">
              {getVisibleBranches().map((branch, index) => (
                <div key={branch.id} className={`flex-shrink-0 ${isMobile ? "w-full" : "w-[30%]"}`}>
                  <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform hover:scale-105">
                    <Image
                      src={branch.image_url}
                      alt={branch.title}
                      width={400}
                      height={300}
                      className="h-72 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-lg">{branch.title}</p>
                      <p className="text-sm">{branch.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" size="icon" className="absolute right-0 top-1/2 z-10 -mr-4 md:-mr-6" onClick={nextSlide}>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {branches.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-300"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}