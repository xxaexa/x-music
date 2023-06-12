import { testimony } from '../Data'
import React, { Component } from 'react'
import Slider from 'react-slick'

const Testimony = () => {
  const next = () => {}
  const prev = () => {}

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: next(),
    prevArrow: <Prev />,
  }
  return (
    <section id="testimony" className="my-5 mx-auto">
      <h1 className="text-center font-bold text-2xl">TESTIMONY</h1>
      <div className="items-center">
        <Slider {...settings}>
          {testimony.map((testi, index) => {
            const { image, name, desc } = testi
            return (
              <div key={index} className="inline mx-auto text-center text-xl p-8  max-w-xl rounded-xl shadow-xl ">
                <img src={image} alt={name} className="w-56 block mx-auto" />
                <p>{name}</p>
                <p>"{desc}"</p>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export const Prev = (props) => {}
export default Testimony
