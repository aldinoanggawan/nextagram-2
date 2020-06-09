import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Img = styled.img`
  text-align: center;
`

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
    <Slider {...settings}>
      {userImages.map(({ id, url }) => (
        <div key={id}>
          <Img src={url} alt='oops img not found' />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
