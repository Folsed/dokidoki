import slide1 from '@/_dev/imgs/kimetsu.webp'
import slide2 from '@/_dev/imgs/solo-leveling.webp'
import slide3 from '@/_dev/imgs/shangri-la.webp'
import slide4 from '@/_dev/imgs/crunch.jpg'

import mobile1 from '@/_dev/imgs/crunch-mobile.jpg'
import mobile2 from '@/_dev/imgs/shangri-la-mobile.jpg'
import mobile3 from '@/_dev/imgs/solo-mobile.jpg'

import logo1 from '@/_dev/imgs/slol-logo.webp'
import logo2 from '@/_dev/imgs/metalic-logo.webp'

import CarouselLogic from './components/CarouselLogic'
import { Slide } from '@/types/carousel.types'

// prettier-ignore
const slides: Slide[] = [
    { id: 1, src: slide1, title: 'Kimetsu no yaiba', synopsis: 'Unwilling sportsmen he in questions september therefore described so. Attacks may set few believe moments was. Reasonably how possession shy way introduced age inquietude. Missed he engage no exeter of. Still tried means we aware order among on. Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking.', logo: logo1, genres: ['Action', 'Drama', 'Adventure'], mobile: mobile2 },
    { id: 2, src: slide2, title: 'Solo leveling', synopsis: 'Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better.', logo: logo2, genres: ['Action', 'Drama', 'Adventure'], mobile: mobile3 },
    { id: 3, src: slide3, title: 'Shangri-la Frontier', synopsis: 'Now eldest new tastes plenty mother called misery get. Longer excuse for county nor except met its things. Narrow enough sex moment desire are. Hold who what come that seen read age its. Contained or estimable earnestly so perceived. Imprudence he in sufficient cultivated. Delighted promotion improving acuteness an newspaper offending he. Misery in am secure theirs giving an. Design on longer thrown oppose am.', logo: logo1, genres: ['Action', 'Drama', 'Adventure'], mobile: mobile2 },
    { id: 4, src: slide4, title: 'Madara', synopsis: 'She wholly fat who window extent either formal. Removing welcomed civility or hastened is. Justice elderly but perhaps expense six her are another passage. Full her ten open fond walk not down. For request general express unknown are. He in just mr door body held john down he. So journey greatly or garrets. Draw door kept do so come on open mean. Estimating stimulated how reasonably precaution diminution she simplicity sir but.', logo: logo2, genres: ['Action', 'Drama', 'Adventure', 'Action', 'Drama', 'Action', 'Drama',], mobile: mobile1 },
]

const HeroCarousel = () => {
    return <CarouselLogic slides={slides} />
}
export default HeroCarousel
