import React, { Component } from 'react'
import Slider from 'react-slick'
import { imageBanner } from '../Data'

const SlickCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }
  return (
    <div>
      <Slider {...settings}>
        {imageBanner.map((image, index) => {
          return (
            <div key={index}>
              <img src={image.src} alt={image.name} className="mx-auto" />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default SlickCarousel
