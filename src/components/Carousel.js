import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import GracefulImg from 'react-graceful-image'
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
          <GracefulImg
            noLazyLoad={true}
            retry={{ count: 0, delay: 0, accumulate: 'false' }}
            key={id}
            src={url}
            alt={id}
          />
        ))}
      </Slider>
    </CarouselContainer>
  )
}

export default Carousel
