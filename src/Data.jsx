//banner
import banner1 from './assets/image/banner1.png'
import banner2 from './assets/image/banner2.png'
import banner3 from './assets/image/banner3.png'
//product
import a1 from './assets/image/amp1.png'
import a2 from './assets/image/amp2.png'
import a3 from './assets/image/amp3.png'
import b1 from './assets/image/bass1.png'
import b2 from './assets/image/bass2.png'
import b3 from './assets/image/bass3.png'
import g1 from './assets/image/guitar1.png'
import g2 from './assets/image/guitar2.png'
import g3 from './assets/image/guitar3.png'

//icon
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'

//testi
import dave from './assets/image/dave.png'

//color
import color1 from './assets/image/color1.png'
import color2 from './assets/image/color2.png'
import color3 from './assets/image/color3.png'

export const imageBanner = [
  {
    name: 'AMP',
    src: banner1,
  },
  {
    name: 'AMP',
    src: banner2,
  },
  {
    name: 'AMP',
    src: banner3,
  },
]

export const navbar = [
  {
    text: 'ABOUT',
    href: '#about',
  },
  {
    text: 'PRODUCT',
    href: '#product',
  },
  {
    text: 'CUSTOM',
    href: '#custom',
  },
  {
    text: 'TESTIMONY',
    href: '#testimony',
  },
]

export const products = [
  { title: 'AMP', img: [{ src: a1 }, { src: a2 }, { src: a3 }] },
  { title: 'GUITAR', img: [{ src: g1 }, { src: g2 }, { src: g3 }] },
  { title: 'BASS', img: [{ src: b1 }, { src: b2 }, { src: b3 }] },
]

export const colorProduct = [color1, color2, color3]

export const socialMedia = [
  { icon: <FaTiktok className="text-3xl mx-1" />, href: 'https://www.tiktok.com/en/' },
  { icon: <FaInstagram className="text-3xl mx-1" />, href: 'https://instagram.com' },
  { icon: <FaYoutube className="text-3xl mx-1" />, href: 'https://www.youtube.com' },
]

export const testimony = [
  { image: dave, name: 'Dave', desc: 'I like this product from x-music because its good i think' },
  { image: dave, name: 'Riax', desc: 'good , awesome ,perfect' },
  { image: dave, name: 'Ako', desc: 'If you will custom this place is so good because it fast under 1 month' },
  { image: dave, name: 'Jep', desc: 'Totally good seriously trust me ' },
  { image: dave, name: 'Putra', desc: 'enough for me good' },
]
