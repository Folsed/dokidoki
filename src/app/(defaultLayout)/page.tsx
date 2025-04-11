import CardsCarousel from './components/cards-carousel/CardsCarousel'
import HeroCarousel from './components/hero-carousel/HeroCarousel'

const WelcomePage = () => {
    return (
        <div className='content grid grid-flow-row gap-y-24'>
            <HeroCarousel />
            <CardsCarousel />
        </div>
    )
}
export default WelcomePage
