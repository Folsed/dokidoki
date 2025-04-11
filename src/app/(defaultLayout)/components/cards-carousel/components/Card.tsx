import preview from '@/_dev/imgs/solo-preview.webp'

import Image, { StaticImageData } from 'next/image'
import { RefObject, useEffect, useRef, useState } from 'react'
import Browse from './Browse'
import { Content } from '@/types/cards.types'

const card: { image: StaticImageData; title: string } = {
    image: preview,
    title: 'Solo Leveling',
}

interface CardProps {
    trackRef: RefObject<HTMLDivElement>
    cardData: Content
}

const Card: React.FC<CardProps> = ({ trackRef, cardData }) => {
    const [hoverIsActive, setHoverIsActive] = useState<boolean>(false)
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const cardRefCurrent = cardRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    cardRefCurrent?.removeAttribute('inert')
                    cardRefCurrent?.setAttribute('aria-hidden', 'false')
                } else {
                    cardRefCurrent?.setAttribute('inert', '')
                    cardRefCurrent?.setAttribute('aria-hidden', 'true')
                }
            },
            {
                root: trackRef.current,
                threshold: 0.5,
            }
        )

        if (cardRefCurrent) {
            observer.observe(cardRefCurrent)
        }

        return () => {
            if (cardRefCurrent) {
                observer.unobserve(cardRefCurrent)
            }
        }
    }, [trackRef])

    return (
        <div
            className={`relative w-full snap-start duration-100 ${hoverIsActive ? 'p-0' : 'p-[var(--hero-cards-col-gap)]'} max-md:aria-hidden:opacity-50`}
            ref={cardRef}
            onMouseEnter={() => setHoverIsActive(true)}
            onMouseLeave={() => setHoverIsActive(false)}
        >
            <div className='bg-primary aspect-[3/4] md:aspect-video'>
                <picture>
                    <Image
                        src={cardData.src}
                        alt={cardData.title}
                        className='h-full w-full duration-200'
                    />
                </picture>
                <Browse hoverIsActive={hoverIsActive} cardData={cardData} />
            </div>
        </div>
    )
}
export default Card
