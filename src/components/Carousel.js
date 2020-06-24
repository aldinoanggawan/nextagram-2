import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import { CarouselContainer } from '../styles/content'

const Carousel = ({ userImages }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {userImages.map(({ id, url }) => (
          <div key={id}>
            <img src={url} alt='oops img not found' />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
