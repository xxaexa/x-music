import Title from './Title'
import { products } from '../Data'
import { colorProduct } from '../Data'
import Product from './Product'
const Products = () => {
  return (
    <section id="product" className="my-5 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl mx-auto tracking-widest md:text-xl">
      <Title text={'PRODUCT'} />
      {products.map((product, index) => {
        console.log(products)
        const { title, img } = product
        return (
          <div className=" md:flex flex-wrap justify-center items-center my-4 " key={index}>
            <div className="flex space-x-2 md:space-x-0 md:inline md:w-1/3  text-right md:border-r-2 border-black p-4">
              <button className="text-3xl font-bold">{title}</button>
            </div>
            <div className="md:w-2/3 ">
              <Product img={img} color={colorProduct} />
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Products
