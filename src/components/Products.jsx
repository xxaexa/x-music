import Title from './Title'
import { products } from '../Data'
import { colorProduct } from '../Data'
import Product from './Product'
import { useState } from 'react'
const Products = () => {
  const [i, setI] = useState(0)

  return (
    <section id="product" className="my-5 max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-7xl mx-auto tracking-widest md:text-xl">
      <Title text={'PRODUCT'} />
      <div className=" flex flex-wrap justify-center items-center my-4">
        <div className="space-x-8 md:w-1/3 text-right md:border-r-2 border-black p-4">
          {products.map((product, index) => {
            return (
              <button
                key={product.id}
                className="text-3xl font-bold"
                onClick={() => {
                  setI(index)
                }}
              >
                {product.title}
              </button>
            )
          })}
        </div>
        <div className="md:w-2/3 ">
          <Product color={colorProduct} img={products[i].img} />
          {console.log()}
        </div>
      </div>
    </section>
  )
}

export default Products
//  {
//    products.map((product, index) => {
//      const { title, img } = product
//    })
//  }
//  )
