import { StaticImageData } from 'next/image'

export interface Slide {
    id: number
    src: string | StaticImageData
    title: string
    synopsis: string
    logo: string | StaticImageData
    genres: string[]
    mobile: StaticImageData
}
