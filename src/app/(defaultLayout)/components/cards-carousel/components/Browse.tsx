import { Content } from '@/types/cards.types'
import Link from 'next/link'
import { RxBookmark } from 'react-icons/rx'
import { PiDotsThreeCircle } from 'react-icons/pi'
import ThemeButton from '@/UI/main/ThemeButton'

interface BrowseProps {
    hoverIsActive: boolean
    cardData: Content
}

const Browse: React.FC<BrowseProps> = ({ hoverIsActive, cardData }) => {
    return (
        <div
            className={`_meta absolute inset-0 ${hoverIsActive ? 'opacity-100' : 'opacity-0'} duration-200`}
        >
            <div className='bg-primary absolute z-0 h-full w-full opacity-90'></div>
            <Link
                href={'profile'}
                className='absolute z-20 h-full w-full'
            ></Link>
            <div className='relative z-10 h-full w-full p-2'>
                <h3>{cardData.title}</h3>
                <div className='text-span mt-1 text-sm'>
                    {cardData.genres.map((item, index) => (
                        <span key={index}>{item}, </span>
                    ))}
                </div>
            </div>
            <ThemeButton
                className='text-secondary hover:text-secondary-hover absolute top-0 right-0 z-30 p-2 duration-200'
                icon={<RxBookmark size={24} />}
            />
            <button className='fill-secondary hover:fill-secondary-hover absolute right-0 bottom-0 z-30 p-2 duration-200'>
                <PiDotsThreeCircle size={28} />
            </button>
        </div>
    )
}
export default Browse
