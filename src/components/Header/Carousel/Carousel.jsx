import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Carousel.css'
import Slider from 'react-slick'
import slide1Mobile from '../../../assets/slide-1-mobile.jpg'
import slide2Mobile from '../../../assets/slide-2-mobile.jpg'
import slide3Mobile from '../../../assets/slide-3-mobile.jpg'
import slide4Mobile from '../../../assets/slide-4-mobile.jpg'
import slide1 from '../../../assets/slide-1.jpg'
import slide2 from '../../../assets/slide-2.jpg'
import slide3 from '../../../assets/slide-3.jpg'
import slide4 from '../../../assets/slide-4.jpg'
import { useMediaQuery } from 'react-responsive';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autplaySpeed: 300,
    fade: true,
    adaptiveHeight: true,
    arrows: false,
    draggable: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false
  }

  const isBigScreen = useMediaQuery(
    {
      query: "(min-width: 1024px)"
    }
  )
  
  return (
    <>

    {isBigScreen ? 
    <Slider {...settings} className="slider">
      <div><img src={slide1} alt="" /></div>
      <div><img src={slide2} alt="" /></div>
      <div><img src={slide3} alt="" /></div>
      <div><img src={slide4} alt="" /></div>
    </Slider>
    :<Slider {...settings} className="slider">
      <div><img src={slide1Mobile} alt="" /></div>
      <div><img src={slide2Mobile} alt="" /></div>
      <div><img src={slide3Mobile} alt="" /></div>
      <div><img src={slide4Mobile} alt="" /></div>
    </Slider>}
    </>
  );
}

export default Carousel;