import { useState } from 'react'

const Product = ({ img, color }) => {
  const [colors, setColors] = useState(0)
  return (
    <div className="flex flex-wrap  justify-center ">
      <div className="w-full">
        <img src={img[colors].src} className="w-2/2 mx-auto" />
      </div>
      {color.map((c, index) => {
        return (
          <div className="mx-4">
            <img
              src={c}
              className="rounded-full w-10 lg:w-12 cursor-pointer"
              onClick={() => {
                setColors(index)
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Product
