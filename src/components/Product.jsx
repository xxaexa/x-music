import React, { Component } from 'react'
import Slider from 'react-slick'

const Product = ({ img, color }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    customPaging: function (i) {
      return (
        <a>
          <img src={color[i]} className="rounded-full" />
        </a>
      )
    },
  }
  return (
    <div>
      <Slider {...settings}>
        {img.map((img, index) => {
          return (
            <div key={index} className="">
              <img src={img.src} alt="" className=" block mx-auto" />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Product
