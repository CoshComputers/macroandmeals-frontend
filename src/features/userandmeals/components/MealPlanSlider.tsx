import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';

type Props = {
    slides: ReactNode[];
    labels?: string[]; // e.g., ['S', '1', '2', ..., '7']
};

export default function MealPlanSlider({ slides, labels }: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        dragFree: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

    // Keep track of current index on slide change
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        onSelect(); // Set initial
    }, [emblaApi, onSelect]);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_100%] px-4"
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button onClick={scrollPrev} className="p-2 bg-white shadow rounded-full">
                    ◀
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                <button onClick={scrollNext} className="p-2 bg-white shadow rounded-full">
                    ▶
                </button>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-6 h-6 rounded-full text-xs font-semibold transition ${
                            index === selectedIndex
                                ? 'bg-secondary text-white scale-110'
                                : 'bg-gray-300 hover:bg-secondary/70 text-gray-800'
                        }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index}`}
                    >
                        {labels?.[index] ?? index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}
