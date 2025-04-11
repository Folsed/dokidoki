import { RefObject, useCallback, useEffect, useState } from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'

interface ArrowsProps {
    trackRef: RefObject<HTMLDivElement>
}

const Arrows: React.FC<ArrowsProps> = ({ trackRef }) => {
    const [isActiveBack, setIsActiveBack] = useState<boolean>(false)
    const [isActiveForward, setIsActiveForward] = useState<boolean>(false)

    const handleScroll = useCallback(() => {
        const track = trackRef.current
        if (!track) return

        setIsActiveBack(track.scrollLeft > 0)
        setIsActiveForward(
            track.scrollLeft < track.scrollWidth - track.clientWidth
        )
    }, [trackRef])

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        track.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => {
            track.removeEventListener('scroll', handleScroll)
        }
    }, [trackRef, handleScroll])

    const handleClick = (way: string) => {
        const track = trackRef.current
        if (!track) return

        const { clientWidth } = track
        const scrollIncrement = way === 'forward' ? clientWidth : -clientWidth

        track.scrollTo({
            left: track.scrollLeft + scrollIncrement,
            behavior: 'smooth',
        })
    }

    return (
        <div className='hidden md:block'>
            <div
                className={`absolute top-0 left-0 z-[1] flex h-full items-center ${isActiveBack ? 'block' : 'hidden'}`}
            >
                <button
                    className='group fill-span hover:fill-font h-full px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200'
                    onClick={() => handleClick('')}
                >
                    <MdArrowBackIosNew size={24} className='z-[1]' />
                    <span className='absolute inset-0 -z-10 bg-gradient-to-l from-transparent via-[#000000d7] via-34% to-[#000000] opacity-50 duration-200 group-hover:opacity-80'></span>
                </button>
            </div>
            <div
                className={`absolute top-0 right-0 z-[1] flex h-full items-center ${isActiveForward ? 'block' : 'hidden'}`}
            >
                <button
                    className='group fill-span hover:fill-font h-full px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200'
                    onClick={() => handleClick('forward')}
                >
                    <MdArrowForwardIos size={24} className='z-[1]' />
                    <span className='absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#000000d7] via-34% to-[#000000] opacity-50 duration-200 group-hover:opacity-80'></span>
                </button>
            </div>
        </div>
    )
}
export default Arrows
