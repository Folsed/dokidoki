'use client'
import { useRef } from 'react'
import Arrows from './Arrows'
import Card from './Card'
import { Content } from '@/types/cards.types'

interface TrackProps {
    content: Content[]
}

const Track: React.FC<TrackProps> = ({ content }) => {
    const trackRef = useRef<HTMLDivElement>(null)

    return (
        <div className='content-padding relative [grid-area:viewbox] '>
            <div
                className='carousel-margin no-scrollbar content-padding cards-carousel-scroll-padding grid snap-x auto-cols-[calc(100%/var(--hero-cards-inline))] grid-flow-col grid-rows-1 overflow-auto'
                ref={trackRef}
            >
                {content.map((item, index) => (
                    <Card key={item.id} cardData={item} trackRef={trackRef} />
                ))}
            </div>
            <Arrows trackRef={trackRef} />
        </div>
    )
}

export default Track
