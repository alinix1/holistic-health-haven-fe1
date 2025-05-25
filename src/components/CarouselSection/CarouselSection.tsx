import { useState, useEffect, useCallback, useMemo } from "react";
import { getOptimizedImageUrl } from "../../apiCalls";

const CarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const images = useMemo(() => [
    {
      src: getOptimizedImageUrl('static', 'about_product1', 1200, 80),
      mobileSrc: getOptimizedImageUrl('static', 'about_product1', 400, 80),
      alt: "Holistic health products arranged on display",
    },
    {
      src: getOptimizedImageUrl('static', 'sage1', 1200, 80),
      mobileSrc: getOptimizedImageUrl('static', 'sage1', 400, 80), 
      alt: "Dried sage bundle for aromatherapy and cleansing",
    },
    {
      src: getOptimizedImageUrl('static', 'yoga1', 1200, 80),
      mobileSrc: getOptimizedImageUrl('static', 'yoga1', 400, 80),
      alt: "Yoga mat and accessories for wellness practice",
    }
  ], []);

  // Move to the next slide
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [isTransitioning, images.length]);

  // Move to the previous slide
  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  }, [isTransitioning, images.length]);

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Match this with CSS transition duration
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full bg-slate-800 h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
      {/* Slides */}
      <div className="h-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              data-fetchpriority={index === 0 ? "high" : "auto"}
              width={1200} 
              height={800}  
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full z-20 text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 p-2 rounded-full z-20 text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentIndex ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselSection;
