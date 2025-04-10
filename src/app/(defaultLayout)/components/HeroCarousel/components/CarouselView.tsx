import React, { Children } from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import CarouselNavigation from './CarouselNavigation'
import { Slide } from '@/types/carousel.types'

interface CarouselViewProps {
    children: React.ReactNode
    currentIndex: number
    updateIndex: (newIndex: number) => void
    slides: Slide[]
}

const CarouselView: React.FC<CarouselViewProps> = ({
    children,
    currentIndex,
    updateIndex,
    slides,
}) => {
    return (
        <div className='__hero_carousel relative'>
            <div className='relative grid [grid-template-areas:"viewbox"]'>
                {children}
            </div>
            <div className='hidden md:block'>
                <div className='absolute left-0 top-0 z-[1] flex h-full items-center'>
                    <button
                        className='fill-font px-2 py-12 duration-200 hover:fill-span'
                        onClick={() => updateIndex(currentIndex - 1)}
                    >
                        <MdArrowBackIosNew size={24} />
                    </button>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='absolute right-0 top-0 z-[1] flex h-full items-center'>
                    <button
                        className='fill-font px-2 py-12 duration-200 hover:fill-span'
                        onClick={() => updateIndex(currentIndex + 1)}
                    >
                        <MdArrowForwardIos size={24} />
                    </button>
                </div>
            </div>
            <CarouselNavigation
                slides={slides}
                currentIndex={currentIndex}
                updateIndex={updateIndex}
            />
        </div>
    )
}
export default CarouselView
