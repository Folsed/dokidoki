'use client'
import React, { Children, useCallback, useState } from 'react'
import CarouselView from './CarouselView'
import { Slide } from '@/types/carousel.types'
import Image from 'next/image'
import CarouselSlide from './CarouselSlide'

interface CarouselLogicProps {
    slides: Slide[]
}

const CarouselLogic: React.FC<CarouselLogicProps> = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const updateIndex = useCallback(
        (newIndex: number) => {
            const slidesCount = slides.length

            if (newIndex < 0) {
                newIndex = slidesCount - 1
            } else if (newIndex >= slidesCount) {
                newIndex = 0
            }

            setCurrentIndex(newIndex)
        },
        [slides]
    )

    return (
        <CarouselView
            currentIndex={currentIndex}
            updateIndex={updateIndex}
            slides={slides}
        >
            {slides.map((item, index) => (
                <CarouselSlide
                    key={item.id}
                    currentIndex={currentIndex}
                    index={index}
                    slide={item}
                />
            ))}
        </CarouselView>
    )
}
export default CarouselLogic
