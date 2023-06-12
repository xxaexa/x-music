import Title from './Title'
import Form from './Form'
const CustomProduct = () => {
  return (
    <section id="custom" className="my-5 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl mx-auto tracking-widest md:text-xl">
      <Title text={'CUSTOM'} />
      <div className="flex flex-wrap justify-center my-4">
        <div className="md:w-1/3 p-6 ">
          <p>
            Custom you want a custom guitar/bass/amp ?
            <br /> you can use the form on the side, the maximum waiting time for a reply is 1 working day, but if you want to get a faster reply you can chat
            <span className="font-bold cursor-pointer">
              <a href=""> ADMIN</a>
            </span>
          </p>
        </div>
        <div className="md:w-2/3 w-full">
          <Form />
        </div>
      </div>
    </section>
  )
}

export default CustomProduct
