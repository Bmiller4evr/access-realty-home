// ABOUTME: Client component for carousel navigation arrows
// ABOUTME: Uses scroll-snap for smooth navigation

"use client";

import { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface CarouselNavProps {
  children: React.ReactNode;
}

export default function CarouselNav({ children }: CarouselNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateScrollState();
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 356; // card width + gap
      const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Arrows - Desktop */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all ${
          canScrollLeft
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Previous listings"
      >
        <HiChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all ${
          canScrollRight
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Next listings"
      >
        <HiChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>
    </div>
  );
}
