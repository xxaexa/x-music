import { testimony } from '../Data'
import React, { Component } from 'react'
import Slider from 'react-slick'

const Testimony = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section id="testimony" className="my-5 ">
      <h1 className="text-center  text-3xl tracking-widest">TESTIMONY</h1>
      <div>
        <div className="max-w-xl mx-auto block text-center p-6 tracking-widest">
          <Slider {...settings}>
            {testimony.map((testi, index) => {
              const { image, name, desc } = testi
              return (
                <div key={index} className="text-center">
                  <img src={image} alt={name} className="w-56 block mx-auto rounded-full" />
                  <p>{name}</p>
                  <p>"{desc}"</p>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export const Prev = (props) => {}
export default Testimony
