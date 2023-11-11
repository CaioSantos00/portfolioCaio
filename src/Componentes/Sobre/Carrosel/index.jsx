// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import html from '../../../assets/html.png'
import css from '../../../assets/css.png'
import js from '../../../assets/js.png'
import reactImg from "../../../assets/react.png"
import sass from "../../../assets/sass.png"
import rocket from "../../../assets/certRocket.png"
import python from "../../../assets/python.png"

export default function Carrosel () {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div id='carrosel'>
      <Slider {...settings}>
        <div >
          <img src={html} alt='Certificado de HTML' className='imgsCerti' />
        </div>
        <div>
          <img src={css} alt='Certificado de CSS' className='imgsCerti'/>
        </div>
        <div>
          <img src={sass} alt="Certificado de Sass" className='imgsCerti'/>
        </div>
        <div>
          <img src={js} alt='Certificado de Javascript' className='imgsCerti' />
        </div>
        <div>
          <img src={reactImg} alt='Certificado de React JS' className='imgsCerti' />
        </div>
        <div>
          <img src={rocket} alt='Certificado Rocketseat' className='imgsCerti' />
        </div>
        <div>
          <img src={python} alt='Certificado Fatec' className='imgsCerti' />
        </div>
      </Slider>
    </div>
  );
};
