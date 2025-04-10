import { StaticImageData } from 'next/image'

export interface Content {
    id: number
    src: StaticImageData
    title: string
    synopsis: string
    genres: string[]
}
