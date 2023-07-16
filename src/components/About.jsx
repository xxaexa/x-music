import Title from './Title'
import x from './../assets/image/x.png'

const About = () => {
  return (
    <section id="about" className="my-10 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl mx-auto tracking-widest md:text-xl">
      <Title text={'ABOUT'} />
      <div className="flex justify-center flex-wrap my-4">
        <div className=" md:w-1/3">
          <img src={x} alt="logo-x-music" className="w-56 block mx-auto" />
          <p className="text-center">X-MUSIC</p>
        </div>
        <div className="md:w-2/3 text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ut velit! Sunt est, deserunt, repellat quod distinctio eius totam quidem recusandae ullam consequuntur amet aliqua m soluta eveniet perspiciatis voluptates! Porro?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ut velit! Sunt est, deserunt, repellat quod distinctio eius totam quidem recusandae ullam consequuntur amet aliqua m soluta eveniet perspiciatis voluptates! Porro?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, ut velit! Sunt est, deserunt, repellat quod distinctio eius totam quidem recusandae ullam consequuntur amet aliqua m soluta eveniet perspiciatis voluptates! Porro?
        </div>
      </div>
    </section>
  )
}

export default About
