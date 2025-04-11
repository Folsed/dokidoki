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
                className={`absolute left-0 top-0 z-[1] flex h-full items-center ${isActiveBack ? 'block' : 'hidden'}`}
            >
                <button
                    className='group h-full fill-span px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200 hover:fill-font'
                    onClick={() => handleClick('')}
                >
                    <MdArrowBackIosNew size={24} className='z-[1]' />
                    <span className='via-34% absolute inset-0 -z-10 bg-gradient-to-l from-transparent via-[#000000d7] to-[#000000] opacity-50 duration-200 group-hover:opacity-80'></span>
                </button>
            </div>
            <div
                className={`absolute right-0 top-0 z-[1] flex h-full items-center ${isActiveForward ? 'block' : 'hidden'}`}
            >
                <button
                    className='group h-full fill-span px-[calc((var(--content-inline-padding)-(1.5rem+var(--hero-cards-col-gap)))/2)] duration-200 hover:fill-font'
                    onClick={() => handleClick('forward')}
                >
                    <MdArrowForwardIos size={24} className='z-[1]' />
                    <span className='via-34% absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-[#000000d7] to-[#000000] opacity-50 duration-200 group-hover:opacity-80'></span>
                </button>
            </div>
        </div>
    )
}
export default Arrows
