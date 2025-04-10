import { Slide } from '@/types/carousel.types'

interface CarouselNavigationProps {
    currentIndex: number
    slides: Slide[]
    updateIndex: (newIndex: number) => void
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({
    slides,
    currentIndex,
    updateIndex,
}) => {
    return (
        <div className='content-padding relative z-[1] mt-2 block md:mt-4 lg:mt-6'>
            <div className='flex justify-center gap-2 md:justify-start'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`relative h-2 overflow-hidden rounded-lg bg-zinc-700  duration-200 md:hover:bg-secondary-hover ${index === currentIndex ? 'w-12' : 'w-6'} `}
                        onClick={() => updateIndex(index)}
                    >
                        <span
                            className={`h-full w-full -translate-x-full animate-progress rounded-lg bg-secondary opacity-0 ${index === currentIndex ? 'block' : 'hidden'}`}
                            onAnimationEnd={() => updateIndex(currentIndex + 1)}
                        ></span>
                    </button>
                ))}
            </div>
        </div>
    )
}
export default CarouselNavigation
