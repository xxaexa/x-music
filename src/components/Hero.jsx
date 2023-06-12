import SlickCarousel from './SlickCarousel'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <section id="hero" className="mb-5 bg-gradient-to-b from-cyan-500 to-white">
      <Navbar />
      <SlickCarousel />
    </section>
  )
}

export default Hero
