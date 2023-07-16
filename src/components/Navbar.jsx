import { navbar, socialMedia } from '../Data'
import x from './../assets/image/x.png'

const Navbar = () => {
  return (
    <nav className="hidden md:inline">
      <ul className="flex flex-wrap justify-center space-x-6 tracking-widest text-xl p-5 text-slate-700 ">
        <div className="logo flex text-right absolute left-10">
          <img src={x} alt="" className="w-6 " />
          -MUSIC
        </div>
        {navbar.map((nav, index) => {
          const { text, href } = nav
          return (
            <li key={index} className="text-center hover:text-white">
              <a href={href}>{text}</a>
            </li>
          )
        })}
        <div className="flex absolute right-10 ">
          {socialMedia.map((socmed, index) => {
            return (
              <li key={index} className="space-x-4">
                <a href={socmed.href} target="blank" className="hover:white">
                  {socmed.icon}
                </a>
              </li>
            )
          })}
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
