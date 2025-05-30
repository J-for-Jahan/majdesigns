
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { ProjectCard } from "./ProjectCard";
import { CarouselNavigation } from "./CarouselNavigation";
import { Project } from "./types";

interface ProjectCarouselProps {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleTagHover = (tag: string | null) => {
    setHoveredTag(tag);
  };

  return (
    <>
      <div className="carousel-container">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 md:-ml-6 flex">
            {projects.map((project, index) => (
              <div key={index} className="pl-4 md:pl-6 md:basis-4/5 lg:basis-3/4 min-w-0 shrink-0 grow-0">
                <ProjectCard 
                  project={project} 
                  hoveredTag={hoveredTag} 
                  onTagHover={handleTagHover} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <CarouselNavigation
        activeIndex={activeIndex}
        totalSlides={projects.length}
        carouselApi={emblaApi}
      />
    </>
  );
};
