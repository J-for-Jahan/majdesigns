
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";

interface CarouselNavigationProps {
  activeIndex: number;
  totalSlides: number;
  carouselApi: UseEmblaCarouselType[1] | null;
}

export const CarouselNavigation = ({ 
  activeIndex, 
  totalSlides,
  carouselApi
}: CarouselNavigationProps) => {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <Button 
        className="w-12 h-12 rounded-full bg-black/50 border border-white/10 hover:bg-neon/20 hover:border-neon/30"
        size="icon"
        variant="outline"
        onClick={() => carouselApi?.scrollPrev()}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === index ? "w-8 bg-neon" : "w-2 bg-white/20"
            }`}
            onClick={() => {
              if (carouselApi) carouselApi.scrollTo(index);
            }}
          />
        ))}
      </div>
      <Button 
        className="w-12 h-12 rounded-full bg-black/50 border border-white/10 hover:bg-neon/20 hover:border-neon/30"
        size="icon"
        variant="outline"
        onClick={() => carouselApi?.scrollNext()}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};
